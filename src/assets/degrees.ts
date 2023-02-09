


import { courses as c } from "./courses";
import { DegreeType, electives as e } from "./electives";



// For data input 
const degrees = [
  {
    "name": "Associate of Applied Science in Technical Studies",
    "year": "2022-2023",
    "dateRevised": "2022-02-18T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 65,
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
    },
    "offered": "Residential",
    "college": "College of Applied Studies & Academic Success",
    "degreeType": DegreeType.AAS
  },
  {
    "name": "Associate of Arts in History",
    "year": "2022-2023",
    "dateRevised": "2022-02-08T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 61,
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
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "degreeType": DegreeType.AA
  },
  {
    "name": "Associate of Arts in Interdisciplinary Studies",
    "year": "2022-2023",
    "dateRevised": "2022-05-19T04:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 60,
    "major": {
      "Core": [
        c.INDS200
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "degreeType": DegreeType.AA
  },
  {
    "name": "Associate of Science in STEM Mathematics",
    "year": "2022-2023",
    "dateRevised": "2022-06-22T04:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 60,
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
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "degreeType": DegreeType.AS
  },
  {
    "name": "Bachelor of Arts in American Sign Language and Interpreting",
    "year": "2022-2023",
    "dateRevised": "2022-02-08T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
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
        [
          c.SOCI349,
          c.THEO324
        ]
      ],
      "Liberal Arts Focus": []
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      10,
      13
    ],
    "degreeType": DegreeType.BA
  },
  {
    "name": "Bachelor of Arts in English",
    "year": "2022-2023",
    "dateRevised": "2022-02-08T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.ENGL102,
        e.literature,
      ],
      "Core": [
        c.ENGL301,
        c.ENGL302,
        [
          c.ENGL304,
          c.ENGL413
        ],
        [
          c.ENGL305,
          c.ENGL414
        ],
        [
          c.ENGL306,
          c.ENGL415
        ],
        [
          c.ENGL307,
          c.ENGL416
        ],
        [
          c.ENGL308,
          c.ENGL412
        ],
        c.ENGL322,
        c.ENGL333,
        c.ENGL364,
        c.ENGL433,
        c.ENGL491,
        e.english,
        e.english,
      ],
      "Liberal Arts Focus": []
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      7,
      16
    ],
    "degreeType": DegreeType.BA
  },
  {
    "name": "Bachelor of Arts in History",
    "year": "2022-2023",
    "dateRevised": "2022-03-04T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.GEOG200,
        c.HIUS221
      ],
      "Core": [
        [
          c.HIEU201,
          c.HIEU202
        ],
        c.HIST300,
        c.HIST490,

        c.HIST490,
        c.HIST491,
        c.HIUS222,
        c.HIUS330,
        "HIEU3XX",
        "HIUS3XX",
        "HIWD3XX",
        e.history,
        e.history,
      ],
      "Liberal Art Focus": []
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      13,
      22
    ],
    "degreeType": DegreeType.BA
  },
  {
    "name": "Bachelor of Arts in Interdisciplinary Studies",
    "year": "2022-2023",
    "dateRevised": "2022-04-27T04:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Core": [
        c.INDS491
      ],
      "Liberal Arts Focus": []
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      7,
      10
    ],
    "degreeType": DegreeType.BA
  },
  {
    "name": "Bachelor of Arts in Spanish",
    "year": "2022-2023",
    "dateRevised": "2022-02-08T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Core": [
        c.SPAN301,
        c.SPAN302,
        [
          c.SPAN304,
          c.SPAN305
        ],
        c.SPAN310,
        c.SPAN321,
        [
          c.SPAN322,
          c.SPAN323
        ],
        c.SPAN330,
        c.SPAN450,
        c.SPAN499,
        c.SPAN499,
        e.spanish,
        e.spanish
      ],
      "Liberal Arts Focus": []
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      19,
      22
    ],
    "degreeType": DegreeType.BA
  },
  {
    "name": "Bachelor of Arts in Teaching English as a Second or Foreign Language",
    "year": "2022-2023",
    "dateRevised": "2022-02-08T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Core": [
        c.ENGL333,
        [
          c.ENGL334,
          c.ENGL364
        ],
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
      "Liberal Arts Focus": []
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      13,
      16
    ],
    "degreeType": DegreeType.BA
  },
  {
    "name": "Bachelor of Science in Applied Mathematics and Statistics",
    "year": "2022-2023",
    "dateRevised": "2022-06-22T04:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
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
        c.MATH302,
        c.MATH311,
        c.MATH321,
        c.MATH352,
        c.MATH402,
        c.MATH411,
        c.MATH450,
        e.math_421_431,
        e.math_301_304_334_350
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      15,
      35
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Applied Mathematics and Statistics",
    "year": "2022-2023",
    "dateRevised": "2022-06-22T04:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
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
        c.MATH450,
        e.math_421_431,
        e.math_301_304_334_350,
      ],
      "Cognate": [
        c.ACCT211,
        c.ACCT212,
        c.BUSI320,
        c.ECON213,
        c.ECON214
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "subName": "Actuarial Cognate",
    "freeElectiveHours": [
      0,
      20
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Family and Child Development",
    "year": "2022-2023",
    "dateRevised": "2022-03-15T04:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.PSYC210
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
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      34,
      37
    ],
    "degreeType": DegreeType.BS
  },
  {
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
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "subName": "Event Planning Cognate",
    "freeElectiveHours": [
      28,
      31
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Family and Consumer Sciences",
    "year": "2022-2023",
    "dateRevised": "2022-02-18T05:00:00.000Z",
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
          c.ARTS319,
          c.ARTS361
        ],
        [
          c.FACS221,
          c.FACS222
        ],
        c.FACS353,
        c.JOUR225,
        c.JOUR356
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "subName": "Professional and Creative Industries Cognate",
    "freeElectiveHours": [
      28,
      34
    ],
    "degreeType": DegreeType.BS
  },

  {
    "name": "Bachelor of Science in Fashion",
    "year": "2022-2023",
    "dateRevised": "2022-02-18T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.CHEM105
      ],
      "Core": [
        c.FACS103,
        c.FACS320,
        c.FACS350,
        c.FACS403,
        c.FACS455,
        c.FACS499
      ],
      "Concentration": [
        c.ACCT209,
        c.ARTS211,
        c.BUSI310,
        c.BUSI330,
        c.FACS222,
        c.FACS225,
        c.FACS322,
        c.FACS329,
        c.FACS420,
        c.FACS422,
        c.FACS429
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "subName": "Fashion Design Concentration",
    "freeElectiveHours": [
      21,
      28
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Fashion",
    "year": "2022-2023",
    "dateRevised": "2022-02-18T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.CHEM105
      ],
      "Core": [
        c.FACS103,
        c.FACS320,
        c.FACS350,
        c.FACS403,
        c.FACS455,
        c.FACS499
      ],
      "Concentration": [
        c.ACCT209,
        c.BUSI310,
        c.BUSI330,
        c.ECON214,
        c.FACS222,
        c.FACS225,
        c.FACS324,
        c.FACS325,
        c.FACS351,
        c.FACS353,
        c.FACS423
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "subName": "Fashion Merchandising Concentration",
    "freeElectiveHours": [
      21,
      28
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in History",
    "year": "2022-2023",
    "dateRevised": "2022-03-04T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.GEOG200,
        c.HIUS221
      ],
      "Core": [
        [
          c.HIEU201,
          c.HIEU202
        ],
        c.HIST300,
        c.HIST491,
        c.HIUS222,
        "HIEU3XX",
        "HIEU3XX",
        "HIUS3XX",
        "HIUS3XX",
        "HIWD3XX",
        e.history,
        e.history,
        e.history,
      ],
      "History Elective": [],
      "HIWD World History Elective": []
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      31,
      40
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Interdisciplinary Studies",
    "year": "2022-2023",
    "dateRevised": "2022-04-27T04:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Core": [
        c.INDS491
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      25,
      28
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Interior Design",
    "year": "2022-2023",
    "dateRevised": "2022-02-08T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.ARTS205
      ],
      "Core": [
        c.ARTS114,
        c.ARTS211,
        c.FACS113,
        c.FACS140,
        c.FACS200,
        c.FACS231,
        c.FACS241,
        c.FACS243,
        c.FACS250,
        c.FACS300,
        c.FACS343,
        c.FACS345,
        c.FACS404,
        c.FACS442,
        c.FACS445,
        c.FACS460,
        c.FACS485,
        c.FACS499
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      12,
      18
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Mathematics",
    "year": "2022-2023",
    "dateRevised": "2022-06-22T04:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
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
        c.MATH331,
        c.MATH421,
        c.MATH431,
        c.MATH450,
        [c.MATH305 , c.MATH307],
        [c.MATH411 , c.MATH422],
        [c.MATH301, c.MATH302, c.MATH332, c.MATH334, c.MATH352]
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      15,
      35
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Military Studies",
    "year": "2022-2023",
    "dateRevised": "2022-02-18T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.GEOG200,
        c.GOVT200,
        c.HIUS222
      ],
      "Core": [
        c.ETHC280,
        c.GEOG380,
        [
          c.GOVT381,
          c.GOVT483
        ],
        c.HIEU390,
        c.HIUS380,
        c.HIWD375,
        c.HIWD376,
        c.MISC300,
        c.MISC350,
        c.MISC491,
        e.militaryStudies,
        e.militaryStudies,
        e.militaryStudies,
      ],
      "Cognate": []
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "subName": "Leadership Cognate",
    "freeElectiveHours": [
      25,
      37
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Social Sciences",
    "year": "2022-2023",
    "dateRevised": "2022-05-06T04:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.ECON213,
        c.GEOG200,
        c.HIUS221
      ],
      "Core": [
        e.geography,
        c.GOVT200,
        e.government,
        c.HIUS222,
        c.HIUS330,
        c.HIUS360,
        c.HIST300,
        c.HIST491,
        e.history,
        e.history,
        e.socialScience300,
        e.socialScience300
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      28,
      40
    ],
    "degreeType": DegreeType.BS
  },
  {
    "name": "Bachelor of Science in Writing",
    "year": "2022-2023",
    "dateRevised": "2022-02-08T05:00:00.000Z",
    "dateEffective": "Catalog Term 2022-40",
    "totalHours": 120,
    "major": {
      "Major Foundational Courses": [
        c.ENGL102
      ],
      "Core": [
        c.ENGL333,
        [c.ENGL307, c.ENGL350, c.ENGL416, c.ENGL417],
        [c.ENGL300, c.ENGL301, c.ENGL302],
        [c.ENGL308, c.ENGL322, c.ENGL412],
        [c.ENGL304, c.ENGL341, c.ENGL405, c.ENGL413, c.ENGL499],
        c.WRIT201,
        c.WRIT305,
        c.WRIT402,
        c.WRIT491,
        "WRIT3XX",
        ["WRIT3XX", "ENGL3XX"]
      ]
    },
    "offered": "Residential",
    "college": "College of Arts & Sciences",
    "freeElectiveHours": [
      34,
      40
    ],
    "degreeType": DegreeType.BS
  }

  // Done with the College of Arts & Sciences majors
  
]