


import { courses as c } from "./courses";
const electives = {
  "technicalStudies": [  
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
  c.ENGL101,
  e.communications,
  e.informationLiteracy,
  c.UNIV101,
  e.math114OrHigher,
  e.technologyCompetency,
  c.RLGN105,
  e.criticalThinking,
  c.EVAN101,
  e.culturalStudies,
  e.naturalScience,
  e.socialScience,
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
              degree: "Associate of Applied Science in Technical Studies",
              type: "AAS",
              totalHours: 65,
              
              major: 
              
              {
                core: [c.BUSI223, c.CRFT101, c.ECON110, c.HLTH205, e.technicalStudies, e.technicalStudies, e.technicalStudies, e.technicalStudies],
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