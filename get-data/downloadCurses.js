// fetch("https://catalog.liberty.edu/course-search/api/?page=fose&route=details", {
//   "headers": {
//     "accept": "application/json, text/javascript, */*; q=0.01",
//     "accept-language": "en-US,en;q=0.9,es-US;q=0.8,es;q=0.7",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest",
//     "cookie": "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg=-2121179033%7CMCIDTS%7C19375%7CMCMID%7C87338168197070655451358092858236595648%7CMCAID%7CNONE%7CMCOPTOUT-1673992383s%7CNONE%7CvVersion%7C5.3.0; mbox=session#0802243c179746e5baea60e4e09e501a#1673987044|PC#0802243c179746e5baea60e4e09e501a.35_0#1737229984; reg_source_url=registration-ui-sl-course-registration.os.liberty.edu; reg_ecode=E00087; reg_referral_url=https%3A%2F%2Fregistration-ui-sl-course-registration.os.liberty.edu%2Fcourse-registration%2F%23%2F202240%2Fdegree-completion%2FCSGR-BS-R",
//     "Referer": "https://catalog.liberty.edu/course-search/",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": `%7B%22group%22%3A%22key%3A5487%22%2C%22key%22%3A%22key%3A5487%22%2C%22srcdb%22%3A%222022%22%2C%22matched%22%3A%22key%3A5487%22%7D`,
//   "method": "POST"
// });

import fs from "fs";

const csvFilename = "liberty.csv";

function remoteStrongTag(input) {
  // For some reason the "prereqs" and "restrictions" fields starts with <strong>...</strong>. This function returns everything after </strong>
  if (!input) return "";
  return input.split("</strong>")[1].trim();
}

function getNumberFromCreditsHtml(input) {
  if (!input) return 0;
  return parseInt(input.split(" ")[0]);
}

function stringToCsv(input) {
  // Stringify and escape double quotes
  return `"${input.toString().replace(/"/g, '""')}"`;
}

async function getAll() {
  // csv file header
  let csv = `code,title,description,key,note,offered,credits,prereqs,ol_prereqs,restrictions,srcdb\n`;
  fs.writeFileSync(csvFilename, csv);

  let allData = [];
  for (let i = 0; i <= 5487 + 3; i++) {
    let res = await fetch(
      "https://catalog.liberty.edu/course-search/api/?page=fose&route=details",
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9,es-US;q=0.8,es;q=0.7",
          "content-type": "application/json",
          "sec-ch-ua":
            '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg=-2121179033%7CMCIDTS%7C19375%7CMCMID%7C87338168197070655451358092858236595648%7CMCAID%7CNONE%7CMCOPTOUT-1673992383s%7CNONE%7CvVersion%7C5.3.0; mbox=session#0802243c179746e5baea60e4e09e501a#1673987044|PC#0802243c179746e5baea60e4e09e501a.35_0#1737229984; reg_source_url=registration-ui-sl-course-registration.os.liberty.edu; reg_ecode=E00087; reg_referral_url=https%3A%2F%2Fregistration-ui-sl-course-registration.os.liberty.edu%2Fcourse-registration%2F%23%2F202240%2Fdegree-completion%2FCSGR-BS-R",
          Referer: "https://catalog.liberty.edu/course-search/",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: `%7B%22group%22%3A%22key%3A${i}%22%2C%22key%22%3A%22key%3A${i}%22%2C%22srcdb%22%3A%222022%22%2C%22matched%22%3A%22key%3A${i}%22%7D`,
        method: "POST",
      }
    );
    let data = await res.json();
    console.log(data?.code, data?.title, data?.hours_html);

    // Save to file as .csv
    if (data?.fatal) continue;
    let cleanData = [
      data?.code,
      data?.title,
      data?.description,
      data?.key,
      remoteStrongTag(data?.note),
      remoteStrongTag(data?.offered),
      getNumberFromCreditsHtml(data?.hours_html),
      remoteStrongTag(data?.prereqs),
      data?.ol_prereqs,
      remoteStrongTag(data?.restrictions),
      data?.srcdb,
    ];
    fs.appendFileSync(
      csvFilename,
      cleanData.map((x) => stringToCsv(x)).join(",") + "\n"
    );

    // allData.push(cleanData);
    // fs.writeFileSync("cleanData.json", JSON.stringify(allData));
    console.log("Saved to file " + i);
  }
}

await getAll();
