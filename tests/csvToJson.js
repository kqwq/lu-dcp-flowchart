import fs from "fs";

const writeToFilename = "./src/assets/courses.ts";
const p = (str) => {
  return str;
};

function CSVtoArray(text) {
  let arr = [];
  let quote = false; // true means we're inside a quoted field
  let s = "";

  for (let i = 0; i < text.length; i++) {
    let c = text.charAt(i);

    if (c === '"') {
      quote = !quote;
      continue;
    }

    // If it's a comma and we're not in a quote, move on
    if (c === "," && !quote) {
      arr.push(s);
      s = "";
      continue;
    }

    s += c;
  }
  // console.log(arr);
  return arr;
}

async function main() {
  let csv = fs.readFileSync("liberty.csv");
  let lines = csv.toString().split("\n").slice(1);
  let courses = {};

  // Put into this format: const courses = { [code]: { title, credits, ?prereqs, ?notes, ?restrictions, ?offered  }}
  for (let i = 0; i < lines.length; i++) {
    let arr = CSVtoArray(lines[i]);
    let [
      code,
      title,
      description,
      key,
      note,
      offered,
      credits,
      prereqs,
      ol_prereqs,
      restrictions,
      srcdb,
    ] = arr;
    let obj = {
      title: p(title),
      credits: parseInt(credits),
    };
    if (prereqs) obj.prereqs = p(prereqs);
    if (note) obj.note = p(note);
    if (restrictions) obj.restrictions = p(restrictions);
    if (offered) obj.offered = p(offered);
    code = code.toString().replaceAll(" ", "");
    courses[code] = obj;
  }

  let code = `export const courses = ${JSON.stringify(courses, null, 2)};`;
  fs.writeFileSync(writeToFilename, code);
}

fs.writeFileSync(writeToFilename, "export const courses = {};");
await main();
