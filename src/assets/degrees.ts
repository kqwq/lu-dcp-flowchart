


import { courses as c } from "./courses";
import { gened } from "./gened"; 
const electives = {
  "technicalStudiesAssociatesElectives": [  
  "CARP",
    "ELTC",
    "HVAC",
    "PLMB",
    "WELD"],
    "communications": [],
    "informationLiteracy": [],
    "math114OrHigher": [],
    "technologyCompetency": [],
    "criticalThinking": [],
    "STEM": ["CSIS","ENGR","ENVR","PHSC","PHYS2XX","MATH2XX","STEM2XX"],
    "language": [],
    "integrative": [],
    "english": ["ENGL3XX"],
    "literature": [c.ENGL201,c.ENGL202,c.ENGL215,c.ENGL216,c.ENGL221,c.ENGL222],
    
    culturalStudies: [],
    naturalScience: [],
    socialScience: [],
    history: ["HIEU3XX","HIST3XX", "HIUS3XX", "HIWD3XX"],
    busi101Or201: [c.BUSI101, c.BUSI201],
    psyc101OrSoci200: [c.PSYC101, c.SOCI200],
    soci349OrTheo324: [c.SOCI349, c.THEO324],
    Period: [c.ENGR304,c.ENGL413],
    Genre: [c.ENGR305,c.ENGL414],
    Diversity: [c.ENGR306,c.ENGL415],
    Writing: [c.ENGR307,c.ENGL416],
    Author: [c.ENGL308,c.ENGL412],
    hieu201OrHieu: [c.HIUS201, c.HIUS202],
    europeanHistory: ["HIEU3XX"],
    usHistory: ["HIUS3XX"],
    worldHistory: ["HIWD3XX"],
    spanishCiv: ["SPAN304","SPAN305"],
    spanishPeninsular: ["SPAN322","SPAN323"],
    spanish: ["SPAN"],
    ENGL334OrENGL364: ["ENGL334","ENGL364"],
    language3XX: [],
    math_421_431: [c.MATH421, c.MATH431],
    math_301_304_334_350: [c.MATH301,c.MATH304,c.MATH334,c.MATH350]
}
const e = electives;

enum College {
  CollegeOfAppliedStudiesAndAcademicSuccess = "College of Applied Studies & Academic Success",
  CollegeOfArtsAndSciences = "College of Arts & Sciences",
  SchoolOfAeuronautics = "School of Aeuronautics",
  SchoolOfBehavioralSciences = "School of Behavioral Sciences",
  SchoolOfBusiness = "School of Business",
  SchoolOfCommunicationAndTheArts = "School of Communication & the Arts",
  JohnWRawlingsSchoolOfDivinity = "John W. Rawlings School of Divinity",
  SchoolOfEducation = "School of Education",
  SchoolOfEngineering = "School of Engineering",
  HelmsSchoolOfGovernment = "Helms School of Government",
  SchoolOfHealthSciences = "School of Health Sciences",
  SchoolOfMusic = "School of Music",
  SchoolOfNursing = "School of Nursing",
}

enum DegreeType {
  // Determines the gen ed classes required
  AAS = "Associate of Applied Science",
  AA = "Associate of Arts",
  AS = "Associate of Science",
  BA = "Bachelor of Arts",
  BS = "Bachelor of Science",
}

const laf = [ // Liberal Arts Focus
  e.language,
  e.language,
  e.language,
  e.language,
  e.integrative
]




// For data input 
const degreeTree = {
  universityName: "Liberty University",
  programs: [
    {
      name: "Resident Undergraduate DCPs 2022-2023",
      dcps: [
        {
          college: College.CollegeOfAppliedStudiesAndAcademicSuccess,
          degrees: [
            {
              "name": "Associate of Applied Science in Technical Studies",
              "year": "2022-2023",
              "dateRevised": "2022-02-18T05:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 65,
              "degreeType": DegreeType.AAS,
              "major": {
                "Core": [
                  c.BUSI223,
                  c.CRFT101,
                  c.ECON110,
                  c.HLTH205,
                  e.technicalStudiesAssociatesElectives,
                  e.technicalStudiesAssociatesElectives,
                  e.technicalStudiesAssociatesElectives,
                  e.technicalStudiesAssociatesElectives,
                ]
              }
            }
          ]
        },
        {
          college: College.CollegeOfArtsAndSciences,
          degrees: [
            {
              "name": "Associate of Arts in History",
              "year": "2022-2023",
              "dateRevised": "2022-02-08T05:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 61,
              "gened": gened.AA,
              "major": {
                "Major Foundational Courses": [
                  c.HIUS221,
                  c.GEOG200
                ],
                "Core": [
                  c.HIEU201,
                  c.HIEU202,
                  c.HIST300,
                  c.HIUS222,
                  e.history,
                  e.history,
                  e.history,
                  e.history,
                ],
              }
            },
            {
              "name": "Associate of Arts in Interdisciplinary Studies",
              "year": "2022-2023",
              "dateRevised": "2022-05-19T04:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 60,
              "gened": gened.AA,
              "major": {
                "Core": [
                  c.INDS200,
                ]
              }
            },
            {
              "name": "Associate of Science in STEM Mathematics",
              "year": "2022-2023",
              "dateRevised": "2022-06-22T04:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 60,
              "gened": gened.AS,
              "major": {
                "Major Foundational Courses": [
                  c.CSIS110
                ],
                "Core": [
                  c.MATH131,
                  c.MATH132,
                  c.MATH211,
                  c.MATH250,
                  e.STEM,
                  e.STEM,
                  e.STEM,
                  e.STEM,
                ]
              }
            },
            {
              "name": "Bachelor of Arts in American Sign Language and Interpreting",
              "year": "2022-2023",
              "dateRevised": "2022-02-08T05:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "gened": gened.BA,
              "major": {
                "Core": [
                  c.ASLI212,
                  c.ASLI302,
                  c.ASLI310,
                  c.ASLI313,
                  c.ASLI320,
                  c.ASLI401,
                  c.ASLI402,
                  c.ASLI403,
                  c.ASLI404,
                  c.ASLI405,
                  c.ASLI410,
                  c.ASLI498,
                  c.ASLI499,
                  c.LING301,
                  e.soci349OrTheo324
                ],
                "FREE ELECTIVES": "10-13 hours",
                "Liberal Arts Focus": [
                  c.language,
                  c.language,
                  c.language,
                  c.language,
                  c.integrative,
                ]
              }
            },
            {
              "name": "Bachelor of Arts in English",
              "year": "2022-2023",
              "dateRevised": "2022-02-08T05:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "gened": gened.BA,
              "major": {
                "Major Foundational Courses": [
                  c.ENGL102,
                  e.literature,
                ],
                "Core": [
                  c.ENGL301,
                  c.ENGL302,
                  e.Period,
                  e.Genre,
                  e.Diversity,
                  e.Writing,
                  e.Author,
                  c.ENGL322,
                  c.ENGL333,
                  c.ENGL364,
                  c.ENGL433,
                  c.ENGL491,
                  e.english,
                  e.english
                ],
                "FREE ELECTIVES": "7-16 hours",
                "Liberal Arts Focus": [
                  e.language,
                  e.language,
                  e.language,
                  e.language,
                  e.integrative
                ]
              }
            },
            {
              "name": "Bachelor of Arts in History",
              "year": "2022-2023",
              "dateRevised": "2022-03-04T05:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "gened": gened.BA,
              "major": {
                "Major Foundational Courses": [
                  c.GEOG200,
                  c.HIUS221
                ],
                "Core": [
                  e.hieu201OrHieu,
                  c.HIST300,
                  c.HIST490,
                  c.HIST490,
                  c.HIST491,
                  c.HIUS222,
                  c.HIUS330,
                  e.europeanHistory,
                  e.usHistory,
                  e.worldHistory,
                  e.history,
                  e.history
                ],
                "Liberal Arts Focus": [
                  e.language,
                  e.language,
                  e.language,
                  e.language,
                  e.integrative
                ],
                "FREE ELECTIVES": "13-22 hours"
              }
            },
            {
              "name": "Bachelor of Arts in Interdisciplinary Studies",
              "year": "2022-2023",
              "dateRevised": "2022-04-27T04:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "gened": gened.BA,
              "major": {
                "Core": [
                  c.INDS491,
                ],
                "FREE ELECTIVES": "7-10 hours",
                "Liberal Arts Focus": [
                  e.language,
                  e.language,
                  e.language,
                  e.language,
                  e.integrative
                ],
              }
            },
            {
              "name": "Bachelor of Arts in Spanish",
              "year": "2022-2023",
              "dateRevised": "2022-02-08T05:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "gened": gened.BA,
              "major": {
                "Core": [
                  c.SPAN301,
                  c.SPAN302,
                  e.spanishCiv,
                  c.SPAN310,
                  c.SPAN321,
                  e.spanishPeninsular,
                  c.MATH114,
                  c.SPAN330,
                  c.SPAN450,
                  c.SPAN499,
                  c.SPAN499,
                  e.spanish,
                  e.spanish
                ],
                "FREE ELECTIVES": "19-22 hours",
                "Liberal Arts Focus": laf,
              }
            },
            {
              "name": "Bachelor of Arts in Teaching English as a Second or Foreign Language",
              "year": "2022-2023",
              "dateRevised": "2022-02-08T05:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "gened": gened.BA,
              "major": {
                "Core": [
                  c.ENGL333,
                  e.ENGL334OrENGL364,
                  c.LING300,
                  c.LING301,
                  c.LING305,
                  c.LING453,
                  c.MLAN301,
                  c.TESL302,
                  c.TESL373,
                  c.TESL403,
                  c.TESL405,
                  c.TESL419,
                  c.TESL420,
                  c.TESL499,
                  e.language3XX
                ],
                "Language Elective": [],
                "FREE ELECTIVES": "13-16 hours",
                "Liberal Arts Focus": laf,
              }
            },
            {
              "name": "Bachelor of Science in Applied Mathematics and Statistics",
              "year": "2022-2023",
              "dateRevised": "2022-06-22T04:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "gened": gened.BS,
              "major": {
                "Major Foundational Courses": [
                  c.CSIS110,
                  c.CSIS111,
                  c.ENGR270,
                  c.MATH131,
                  c.PHYS231
                ],
                "Core": [
                  c.MATH132,
                  c.MATH133,
                  c.MATH200,
                  c.MATH221,
                  c.MATH231,
                  c.RSCH201,
                  c.MATH302,
                  c.MATH311,
                  c.MATH321,
                  c.MATH352,
                  c.MATH402,
                  c.MATH411,
                  c.MATH450,
                  e.math_421_431,
                  e.math_301_304_334_350,
                ],
                "FREE ELECTIVES": "15-35 hours"
              }
            },
            {
              "name": "Bachelor of Science in Applied Mathematics and Statistics",
              "subName": "Actuarial Cognate",
              "year": "2022-2023",
              "dateRevised": "2022-06-22T04:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "gened": gened.BS,
              "major": {
                "Major Foundational Courses": [
                  c.CSIS110,
                  c.CSIS111,
                  c.ENGR270,
                  c.MATH131,
                  c.PHYS231
                ],
                "Core": [
                  c.MATH132,
                  c.MATH133,
                  c.MATH200,
                  c.MATH221,
                  c.MATH231,
                  c.MATH311,
                  c.MATH321,
                  c.MATH302,
                  c.MATH352,
                  c.MATH402,
                  c.MATH411,
                  c.MATH450
                ],
                "Cognate": [
                  c.ACCT211,
                  c.ACCT212,
                  c.BUSI320,
                  c.ECON213,
                  c.ECON214
                ],
                "FREE ELECTIVES": "0-20 hours"
              }
            },
            {
              "name": "Bachelor of Science in Family and Child Development",
              "year": "2022-2023",
              "dateRevised": "2022-03-15T04:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "gened": gened.BS,
              "major": {
                "Major Foundational Courses": [
                  c.PSYC210,
                ],
                "Core": [
                  c.FACS204,
                  c.FACS205,
                  c.FACS260,
                  c.FACS261,
                  c.FACS350,
                  c.FACS361,
                  c.FACS365,
                  c.FACS370,
                  c.FACS455,
                  c.FACS470,
                  c.FACS475,
                  c.FACS486,
                  c.FACS499
                ],
                "FREE ELECTIVES": "34-37"
              }
            },
            {
              "name": "Bachelor of Science in Family and Consumer Sciences",
              "year": "2022-2023",
              "dateRevised": "2022-03-02T05:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "major": {
                "Major Foundational Courses": [
                  c.HIUS360,
                  c.INQR101
                ],
                "Core": [
                  c.ACCT209,
                  c.ARTS222,
                  c.BUSI313,
                  c.BUSI336,
                  c.MATH114,
                  c.FACS324,
                  c.FACS350,
                  c.FACS455,
                  c.FACS351,
                  c.FACS381,
                  c.RSCH201,
                  c.FACS499
                ],
                "Cognate": [
                  c.ARTS361,
                  c.STCO289,
                  c.EMGT320,
                  c.HMGT200,
                  c.EMGT420,
                  c.FACS355,
                  c.FACS435
                ],
                "FREE ELECTIVES": "34-37 hours"
              }
            },{
              "name": "Bachelor of Science in Family and Consumer Sciences",
              "year": "2022-2023",
              "dateRevised": "2022-03-02T05:00:00.000Z",
              "dateEffective": "Catalog Term 2022-40",
              "totalHours": 120,
              "major": {
                "Major Foundational Courses": [
                  c.HIUS360
                ],
                "Core": [
                  c.ACCT209,
                  c.ARTS222,
                  c.BUSI313,
                  c.BUSI336,
                  c.FACS324,
                  [
                    c.FACS350,
                    c.FACS455
                  ],
                  c.FACS351,
                  c.FACS381,
                  c.FACS499
                ],
                "Cognate": [
                  [
                    c.ARTS361,
                    c.STCO289
                  ],
                  [
                    c.EMGT320,
                    c.HMGT200
                  ],
                  c.EMGT420,
                  c.FACS355,
                  c.FACS435
                ]
              },
              "subName": "Event Planning Cognate",
              "freeElectiveHours": [
                28,
                31
              ],
              "degreeType": DegreeType.BS
            }

            ////////////// add more. start at family planning cognate
          ]





        }
      ]
    }
  ]
}

export { electives }