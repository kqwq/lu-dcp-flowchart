


import { courses as c } from "./courses";
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
    culturalStudies: [],
    naturalScience: [],
    socialScience: [],
    busi101Or201: [c.BUSI101, c.BUSI201],
    psyc101OrSoci200: [c.PSYC101, c.SOCI200]
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
  AAS = "Associate of Applied Science",
  AA = "Associate of Arts",
  AS = "Associate of Science",
  BA = "Bachelor of Arts",
  BS = "Bachelor of Science",
}

// General ed
const generalEdCourses = [
  // Communication & Information Literacy
  c.ENGL101,
  e.communications,
  e.informationLiteracy,

  // Technological Solutions & Quantitative Reasoning
  c.UNIV101,
  e.math114OrHigher,
  e.technologyCompetency,

  // Critical Thinking
  c.RLGN105,
  e.criticalThinking,

  // Civic & Global Engagement
  c.EVAN101,
  e.culturalStudies,
  
  // Social & Scientific Inquiry
  e.naturalScience,
  e.socialScience,

  // Christianity & Contexts
  c.BIBL105,
  c.BIBL110,
  c.THEO201,
  c.THEO202,
]




// For data input 
const degreeTree = {
  university: "Liberty University",
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
              "genAdd": [
                e.busi101Or201,
                c.MATH114,
                e.psyc101OrSoci200,
              ],
              "genRemove": [
                e.criticalThinking,
                e.socialScience,
              ],
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
              degree: "Associate of Arts in History",
              type: "AA",
              totalHours: 61,
              core: [c.HIEU201]
            }
          ]


        }
      ]
    }
  ]
}

export {}