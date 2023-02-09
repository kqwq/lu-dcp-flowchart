

LU DCP Flowchart


This is one of my most ambitious projects yet - a tool to calculate the _absolute_ minimum number of semesters required to graduate. The tool was created for you in mind, yes you, the reader. Specifically, LU DCP Flowchart was created:

- For finanically struggling students, to create a fast track to finish their degree program in 3 or even 2.5 years, reducing average tuition costs
- For transfer students, to view which courses are still required
- For junior and senior-level students, to view which minors require the least number of extra classes to complete
- For the impatient, to see which classes can transfer in real-time, without waiting 10-15 seconds for Liberty servers to update their "What-If" analysis
- For faculty, to browse the list of all XX majors and XX minors offered at Liberty
- For aspiring web and fullstack programmers, to understand how to code an application like this, hence why it is a public repository on GitHub

## Run locally

### Data collection stage

IMPORTANT! THIS STEP IS NOT NECESSARY TO RUN THE APP LOCALLY. THIS STEP IS ONLY NECESSARY TO COLLECT DATA FROM THE LIBERTY WEBSITE. THE DATA IS ALREADY COLLECTED AND STORED IN THE REPOSITORY. IF YOU DON'T KNOW WHAT THIS MEANS, SKIP THIS STEP.

Run `node get-data/downloadCourses.js` to download all courses from the Liberty University website. This will take a while, so be patient. The data will be stored in `data/courses.csv`.

Run `node get-data/csvToJson.js` to convert the CSV file into a JSON file. The data will be stored in the assets folder of the web app at `/src/assets/courses.ts`.

We are done generating the courses data. Now let's generate the degree completion plan data.

Run `node get-data/parseDcpPdf.js` to parse the PDF file containing the degree completion plan. The data will be stored in the assets folder of the web app at `/src/assets/degreeTree.ts`.

## Pages

### Welcome
- Choose whether to see "Student" or "Faculty" view of the app
- Links to Disclaimer


### todo for data collection 

- Get free elective hours automatically
- Get subName when there is a cognate
- Detect the following: AA, AS, BA, BS

- flatten degreeTree. Add 3 more fields: college, offered (residential, online), 