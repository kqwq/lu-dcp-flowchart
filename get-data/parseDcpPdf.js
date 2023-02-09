// Instructions
// Run this script in the terminal
// Highlight the text in the PDF and copy it to the clipboard
// Paste it to the file ./tests/pdf.txt and save
// A new file ./tests/pdf.json will be created when a file with contents that match exactly "quit" is saved
// Done

import fs, { write } from "fs";
import { OFFERED } from "./parseDcp.config";

const degrees = [];

const watchFilename = "./tests/pdf.txt";
const outputFilename = "./tests/pdf.json";

const generalEdSections = [
  "FOUNDATIONAL SKILLS REQUIREMENTS",
  "Communication & Information Literacy",
  "Technological Solutions & Quantitative Reasoning",
  "Critical Thinking",
  "Civic & Global Engagement",
  "Social & Scientific Inquiry",
  "Christianity & Contexts",
  "FREE ELECTIVES",
];
const generalEdCourses = [
  "UNIV 101",
  "RLGN 105", // Not required for all degrees
  "ENGL 101",
  "EVAN 101",
  "BIBL 105",
  "BIBL 110",
  "THEO 201",
  "THEO 202",
  "MATH 114",
  "INQR 101",
  "RSCH 201",
];

function extractSectionHeaders(text) {
  const regex = /([\sa-zA-Z&]+)\s\(\d/gm;
  let matches = text.matchAll(regex);
  let sections = [...matches].map((match) =>
    // Get group 1
    match[0].slice(0, -3).split("\n").at(-1).trim()
  );
  return sections;
}

function extractAllCourseNumbers(text) {
  const regex = /([A-Z]{4})\s(\d{3})/g;
  const matches = text.matchAll(regex);
  const matchesArray = [...matches].map((match) => match[0]);
  return matchesArray;
}

function extractAlternativeCourseNumbers(text) {
  // Example: "or MATH 114" returns "MATH 114"
  const regex = /or\s(\w{4}\s\d{3})/g;
  const matches = text.matchAll(regex);
  const matchesArray = [...matches].map((match) => match[1]);
  return matchesArray;
}

function writeDegreesToFile(filename) {
  // Replace "(\w{4})\s(\d{3})" with "c.(\1\2)"
  // Replace classes with c.XXXXYYY
  let output = JSON.stringify(degrees, null, 2);
  output = output.replace(/"(\w{4})\s(\d{3})"/gm, "c.$1$2");

  // Replace degreeType to enum
  output = output.replace(
    /"degreeType":\s"(\w+)"/gm,
    '"degreeType": DegreeType.$1'
  );
  fs.writeFileSync(filename, output);
}

function inputCommand(input) {
  let firstWord = input.split(" ")[0];
  let restOfInput = input.slice(input.indexOf(" ") + 1);

  // If single-word input as file, do a special action
  switch (firstWord) {
    case "quit":
      console.log("Exiting");
      process.exit(0);
      break;

    case "save":
      writeDegreesToFile(restOfInput);
      console.log("Wrote to file " + restOfInput);
      break;

    case "pop":
      degrees.pop();
      console.log("Removed last item from degrees");
      break;
  }
}

function extractDegreeFromText(allText) {
  // Extract all instances of "wwww ddd" from the file contents
  // allText is the entire text of the PDF (2 pages)
  // text is only the first page MINUS the "Notes" section AND the "Graduation Requirements" section

  const text = allText.slice(0, allText.indexOf("Notes"));
  const major = {};

  // Separate into categories (core, cognate, quantitative studies, et)
  let sections = extractSectionHeaders(text);
  let nonGenEdSections = sections.filter(
    (section) => !generalEdSections.includes(section)
  );
  console.log("nonGenEdSections", nonGenEdSections);

  // Divide into indices of each section
  let indicesOfSections = [];
  for (let i = 0; i < nonGenEdSections.length; i++) {
    let section = nonGenEdSections[i];
    let index = text.indexOf(section + " (");
    indicesOfSections.push(index);
    // Add to degrees
    major[section] = [];
  }
  indicesOfSections.push(text.length);

  // Get the text between each section
  let sectionTexts = [];
  for (let i = 0; i < indicesOfSections.length - 1; i++) {
    let start = indicesOfSections[i];
    let end = indicesOfSections[i + 1];
    let sectionText = text.slice(start, end);
    sectionTexts.push(sectionText);
  }

  // Extract course numbers from each section
  for (let i = 0; i < sectionTexts.length; i++) {
    let sectionText = sectionTexts[i];
    let courseNumbers = extractAllCourseNumbers(sectionText);
    let nonGenEdCourseNumbers = courseNumbers.filter(
      (courseNumber) => !generalEdCourses.includes(courseNumber)
    );
    let alternativeCourseNumbers = extractAlternativeCourseNumbers(sectionText);

    // Use the alternative course numbers to group together courses
    // For example, "MATH 101 or MATH 201" means that they should be grouped together
    // as followed ["UNIV 101", ["MATH 101", "MATH 201"], ...]
    for (let altCours of alternativeCourseNumbers) {
      let ind = nonGenEdCourseNumbers.indexOf(altCours);
      if (ind != -1) {
        let combo = [nonGenEdCourseNumbers[ind - 1], altCours];
        // Thanks Copilot for magically inserting this in
        nonGenEdCourseNumbers.splice(ind - 1, 2, combo);
      }
    }
    major[nonGenEdSections[i]] = nonGenEdCourseNumbers;
  }

  // Exract date revised (get group 1, 2, and 3)
  const textLines = text.split("\n");
  let dateMMDDYYYY = textLines[0]
    .match(/Revised:\s+(\d+)\.(\d+)\.(\d+)/)
    .slice(1, 4);
  let dateRevised = new Date(
    dateMMDDYYYY[2],
    dateMMDDYYYY[0] - 1,
    dateMMDDYYYY[1]
  );

  // Extract subName (cognate or concentration name e.g. Event Planning Cognate)
  let subName = null;
  if (textLines[3].includes("Degree Completion Plan")) {
    subName = textLines[2].trim();
  }

  // Extract total hours (get group 1)
  let totalHours = parseInt(allText.match(/(\d+)\sTotal\sHours/)[1]);

  // Extract free elective hours
  let freeElectiveHours = null;
  let matches = text.match(/FREE\sELECTIVES\s\((\d+)-(\d+) hours\)/);
  if (matches.length === 3) {
    let minHours = parseInt(matches[1]);
    let maxHours = parseInt(matches[2]);
    freeElectiveHours = [minHours, maxHours];
  }

  // Extract degree type (AA, AS, BA, BS, etc.)
  let degreeType = null;
  let degreeName = textLines[1].trim();
  if (degreeName.includes("Associate of Arts")) {
    degreeType = "AA";
  } else if (degreeName.includes("Associate of Science")) {
    degreeType = "AS";
  } else if (degreeName.includes("Bachelor of Arts")) {
    degreeType = "BA";
  } else if (degreeName.includes("Bachelor of Science")) {
    degreeType = "BS";
  } else {
    console.log("ERROR: Could not determine degree type");
  }

  // Generate JSON output
  let degree = {
    name: textLines[1].trim(),
    year: textLines
      .slice(2, 4)
      .join(" ")
      .match(/\d{4}-\d{4}/)[0],
    dateRevised: dateRevised,
    dateEffective: textLines[0].split("Effective: ")[1].trim(),
    totalHours: totalHours,
    major: major,
    offered: OFFERED,
  };
  if (subName) {
    degree.subName = subName;
  }
  if (freeElectiveHours) {
    degree.freeElectiveHours = freeElectiveHours;
  }
  if (degreeType) {
    degree.degreeType = degreeType;
  }
  return degree;
}

// Listen for changes to the file "./tests/pdf.txt"
fs.watchFile(watchFilename, { interval: 500 }, (curr, prev) => {
  console.log("Detected file change");
  try {
    const allText = fs.readFileSync(watchFilename).toString();

    if (allText.split("\n").length === 1) {
      inputCommand(allText);
      return;
    } else {
      const degree = extractDegreeFromText(allText);
      console.log(degree);
      console.log("Added degree " + degree.name);
      degrees.push(degree);
    }
  } catch (e) {
    console.log("Caught the following error:");
    console.error(e);
  }
});
console.log("Running");
