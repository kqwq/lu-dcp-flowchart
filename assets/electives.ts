


import { courses as c } from "./courses";

const electives = {
  "technicalStudiesAssociatesElectives": [  
  "CARP",
    "ELTC",
    "HVAC",
    "PLMB",
    "WELD"],
    "communications": [],
    "composition": [], // Surprisingly only for BA (not BS or AA)
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
    Period: [c.ENGL304,c.ENGL413],
    Genre: [c.ENGL305,c.ENGL414],
    Diversity: [c.ENGL306,c.ENGL415],
    Writing: [c.ENGL307,c.ENGL416],
    Author: [c.ENGL308,c.ENGL412],
    hieu201OrHieu: [c.HIEU201, c.HIEU202],
    europeanHistory: ["HIEU3XX"],
    usHistory: ["HIUS3XX"],
    worldHistory: ["HIWD3XX"],
    spanishCiv: ["SPAN304","SPAN305"],
    spanishPeninsular: ["SPAN322","SPAN323"],
    spanish: ["SPAN"],
    ENGL334OrENGL364: ["ENGL334","ENGL364"],
    socialScience300 : [],
    government: [],
    geography: [],
    language3XX: [],
    math_421_431: [c.MATH421, c.MATH431],
    math_301_304_334_350: [c.MATH301,c.MATH304,c.MATH334,c.MATH350],
    militaryStudies: [c.GEOG320,c.GOVT381,c.GOVT483,c.HIEU380,c.HIEU425,c.HIEU455,c.HIUS312,c.HIUS360,c.HIUS420,c.HIWD341,c.HIWD370,"AIRS","MILT","MISC"]
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


export  { DegreeType,laf}
export { electives }