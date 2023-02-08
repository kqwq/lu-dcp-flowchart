// Instructions
// Run this script in the terminal
// Highlight the text in the PDF and copy it to the clipboard
// Paste it to the file ./tests/pdf.txt and save
// A new file ./tests/pdf.json will be created when a file with contents that match exactly "quit" is saved
// Done

import fs, { write } from "fs";

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

function extractCourseNumbers(text) {
  const regex = /([A-Z]{4})\s(\d{3})/g;
  const matches = text.matchAll(regex);
  const matchesArray = [...matches].map((match) => match[0]);
  return matchesArray;
}

function writeDegreesToFile(filename) {
  // Replace "(\w{4})\s(\d{3})" with "c.(\1\2)"
  const output = JSON.stringify(degrees, null, 2);
  output.replace(/'(\w{4})\s(\d{3})'/gm, "c.$1$2");
  fs.writeFileSync(filename, output);
}

function inputCommand(input) {
  let firstWord = input.split(" ")[0];
  let restOfInput = input.slice(input.indexOf(" "));
  console.log(firstWord, restOfInput);

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

// Listen for changes to the file "./tests/pdf.txt"
fs.watchFile(watchFilename, (curr, prev) => {
  // Extract all instances of "wwww ddd" from the file contents
  // allText is the entire text of the PDF (2 pages)
  // text is only the first page MINUS the "Notes" section AND the "Graduation Requirements" section
  const allText = fs.readFileSync(watchFilename).toString();

  if (allText.split("\n").length === 1) {
    inputCommand(allText);
    return;
  }

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
    let courseNumbers = extractCourseNumbers(sectionText);
    let nonGenEdCourseNumbers = courseNumbers.filter(
      (courseNumber) => !generalEdCourses.includes(courseNumber)
    );
    major[nonGenEdSections[i]] = nonGenEdCourseNumbers;
  }

  // Exract date revised (get group 1, 2, and 3)
  const textLines = text.split("\n");
  let dateMMDDYYYY = textLines[0]
    .match(/Revised:\s+(\d+)\.(\d+)\.(\d+)/)
    .slice(1, 4);

  console.log(dateMMDDYYYY);
  let dateRevised = new Date(
    dateMMDDYYYY[2],
    dateMMDDYYYY[0] - 1,
    dateMMDDYYYY[1]
  );

  // Extract total hours (get group 1)
  let totalHours = parseInt(allText.match(/(\d+)\sTotal\sHours/)[1]);
  console.log(totalHours);

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
  };
  console.log(1, degree);
  degrees.push(degree);

  // console.log(7, output);
});
