
type coursesType = {
  title: string,
  credits: number,
  prereqs?: string,
  specialPrereqs?: Array<string>,
  offered?: string,
  note?: string,
}


export const courses: Record<string,coursesType> = {
  "ACCT209": {
    "title": "Survey of Accounting and Finance",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ACCT211": {
    "title": "Financial Principles",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ACCT212": {
    "title": "Managerial Principles",
    "credits": 3,
    "prereqs": "ACCT 211",
    "offered": "Resident and Online"
  },
  "ACCT299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "ACCT301": {
    "title": "Intermediate Financial Accounting I",
    "credits": 3,
    "prereqs": "ACCT 212",
    "offered": "Resident and Online"
  },
  "ACCT302": {
    "title": "Intermediate Financial Accounting II",
    "credits": 3,
    "prereqs": "ACCT 301",
    "offered": "Resident and Online"
  },
  "ACCT311": {
    "title": "Corporate Accounting",
    "credits": 3,
    "prereqs": "ACCT 212",
    "offered": "Resident and Online"
  },
  "ACCT332": {
    "title": "Accounting and Control",
    "credits": 3,
    "prereqs": "ACCT 301 and BUSI 201",
    "offered": "Resident and Online"
  },
  "ACCT340": {
    "title": "Accounting Ethics",
    "credits": 3,
    "prereqs": "ACCT 212",
    "offered": "Online"
  },
  "ACCT350": {
    "title": "Accounting Ethics and Professional Responsibility",
    "credits": 3,
    "prereqs": "ACCT 212",
    "offered": "Resident"
  },
  "ACCT370": {
    "title": "Financial Statement Analysis",
    "credits": 3,
    "prereqs": "BUSI 320",
    "offered": "Resident and Online"
  },
  "ACCT401": {
    "title": "Individual Taxation",
    "credits": 3,
    "prereqs": "ACCT 212",
    "offered": "Resident and Online"
  },
  "ACCT402": {
    "title": "Consolidations and Advanced Accounting Topics",
    "credits": 3,
    "prereqs": "ACCT 302",
    "offered": "Resident and Online"
  },
  "ACCT403": {
    "title": "Fund Accounting for Government and Not for Profits",
    "credits": 3,
    "prereqs": "ACCT 402",
    "offered": "Resident and Online"
  },
  "ACCT404": {
    "title": "Assurance and Attestation",
    "credits": 3,
    "prereqs": "ACCT 302",
    "offered": "Resident and Online"
  },
  "ACCT406": {
    "title": "Principles of Forensic Accounting",
    "credits": 3,
    "prereqs": "ACCT 404",
    "offered": "Resident and Online"
  },
  "ACCT412": {
    "title": "Corporate/Partnership/Estate Taxation",
    "credits": 3,
    "prereqs": "ACCT 401",
    "offered": "Resident and Online"
  },
  "ACCT432": {
    "title": "IT Audit",
    "credits": 3,
    "prereqs": "ACCT 332 and ACCT 404",
    "offered": "Online"
  },
  "ACCT470": {
    "title": "Advanced Data Analysis and Reporting",
    "credits": 3,
    "prereqs": "ACCT 332",
    "offered": "Resident and Online"
  },
  "ACCT495": {
    "title": "Directed Research",
    "credits": 1
  },
  "ACCT497": {
    "title": "Special Topics in Accounting",
    "credits": 1
  },
  "ACCT499": {
    "title": "Internships",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "ACCT511": {
    "title": "Advanced Business Law for Accountants",
    "credits": 3,
    "prereqs": "Financial Accounting with a score of 3 and Managerial Accounting with a score of 3 and Intermediate Accounting I with a score of 3 and Intermediate Accounting II with a score of 3 and Cost Accounting with a score of 3 and Auditing with a score of 3 and Taxation with a score of 3",
    "offered": "Online"
  },
  "ACCT521": {
    "title": "Advanced Cost Accounting",
    "credits": 3,
    "prereqs": "ACCT 531 and (ACCT 511 or BUSI 532) and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT531": {
    "title": "Accounting Information Systems",
    "credits": 3,
    "prereqs": "Financial Accounting with a score of 3 and Managerial Accounting with a score of 3 and Intermediate Accounting I with a score of 3 and Intermediate Accounting II with a score of 3 and Taxation with a score of 3 and Cost Accounting with a score of 3 and Auditing with a score of 3",
    "offered": "Online"
  },
  "ACCT612": {
    "title": "Tax Research and Jurisprudence",
    "credits": 3,
    "prereqs": "ACCT 531 and ACCT 511 and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT614": {
    "title": "Estate, Trust, and Gift Taxation",
    "credits": 3,
    "prereqs": "(ACCT 511 and ACCT 531 or BUSI 532) and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT616": {
    "title": "Advanced Topics in Individual and Pass-through Taxation",
    "credits": 3,
    "prereqs": "ACCT 511 and ACCT 531 and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT618": {
    "title": "Advanced Topics in Corporate Taxation",
    "credits": 3,
    "prereqs": "ACCT 531 and ACCT 511 and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT622": {
    "title": "Advanced Auditing",
    "credits": 3,
    "prereqs": "ACCT 511 and ACCT 531 and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT632": {
    "title": "Advanced Financial Accounting Theory",
    "credits": 3,
    "prereqs": "ACCT 612 and ACCT 511 and ACCT 521 and ACCT 531 and ACCT 622",
    "offered": "Online"
  },
  "ACCT635": {
    "title": "Advanced Research for Financial Reporting",
    "credits": 3,
    "prereqs": "ACCT 531 and ACCT 511 and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT642": {
    "title": "Accounting Ethics",
    "credits": 3,
    "prereqs": "ACCT 622 and ACCT 612 and ACCT 511 and ACCT 521 and ACCT 531",
    "offered": "Online"
  },
  "ACCT650": {
    "title": "Corporate Governance and Fraudulent Financial Reporting",
    "credits": 3,
    "prereqs": "ACCT 511 and ACCT 531 and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT654": {
    "title": "Fraud Examination",
    "credits": 3,
    "prereqs": "ACCT 511 and ACCT 531 and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT660": {
    "title": "Information Technology and Fraud",
    "credits": 3,
    "prereqs": "ACCT 511 and ACCT 531 and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "ACCT697": {
    "title": "Special Topics in Accounting",
    "credits": 3
  },
  "ADCN505": {
    "title": "Techniques in Addiction Counseling",
    "credits": 3,
    "prereqs": "CEFS 501 or COUN 501 or MAAC 501",
    "offered": "Online"
  },
  "ADCN512": {
    "title": "Group Dynamics",
    "credits": 3,
    "prereqs": "((CEFS 501 or MAAC 501 or COUN 501) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 510 or MAAC 510 or COUN 510) and (ADCN 505 or MAAC 505))",
    "offered": "Online"
  },
  "ADCN605": {
    "title": "Client, Family, and Community Education in Addiction Counseling",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 510 or MAAC 510 or COUN 510) and (ADCN 505 or MAAC 505)",
    "offered": "Online"
  },
  "ADCN606": {
    "title": "Pharmacology of Addiction and Recovery",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 691 or COUN 691) and (ADCN 505 or MAAC 505)",
    "offered": "Online"
  },
  "ADCN607": {
    "title": "Case Management and Relapse Prevention in Addiction Counseling",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 510 or MAAC 510 or COUN 510) and (ADCN 505 or MAAC 505)",
    "offered": "Online"
  },
  "ADCN608": {
    "title": "Diagnosis and Treatment of Behavioral Addictions",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 691 or COUN 691) and (ADCN 505 or MAAC 505)",
    "offered": "Online"
  },
  "ADCN667": {
    "title": "Diagnosis and Treatment Planning of Addictive Disorders",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 515 or MAAC 515 or COUN 515) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 546 or MAAC 646 or COUN 646) and (CEFS 691 or COUN 691) and (ADCN 505 or MAAC 505) and (ADCN 512 or MAAC 512)",
    "offered": "Online"
  },
  "ADCN699": {
    "title": "Addiction Counseling Internship",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 546 or MAAC 646 or COUN 646) and (CEFS 601 or MAAC 601 or COUN 601) and (CEFS 691 or COUN 691) and (ADCN 667 or MAAC 667)",
    "offered": "Online"
  },
  "AIRS001": {
    "title": "Leadership Laboratory",
    "credits": 0,
    "offered": "Resident"
  },
  "AIRS110": {
    "title": "Heritage and Values I",
    "credits": 1,
    "offered": "Resident"
  },
  "AIRS120": {
    "title": "Heritage and Values II",
    "credits": 1,
    "offered": "Resident"
  },
  "AIRS210": {
    "title": "Team and Leadership Fundamentals I",
    "credits": 1,
    "offered": "Resident"
  },
  "AIRS220": {
    "title": "Team and Leadership Fundamentals II",
    "credits": 1,
    "offered": "Resident"
  },
  "AIRS310": {
    "title": "Leading People and Effective Communication I",
    "credits": 3,
    "offered": "Resident"
  },
  "AIRS320": {
    "title": "Leading People and Effective Communication II",
    "credits": 3,
    "offered": "Resident"
  },
  "AIRS410": {
    "title": "National Security/Commissioning Preparation I",
    "credits": 3,
    "offered": "Resident"
  },
  "AIRS420": {
    "title": "National Security/Commissioning Preparation II",
    "credits": 3,
    "offered": "Resident"
  },
  "AMOA203": {
    "title": "Medical Office Systems and Procedures",
    "credits": 3,
    "prereqs": "NURS 105",
    "offered": "Online"
  },
  "AMOA204": {
    "title": "Medical Office Insurance",
    "credits": 3,
    "prereqs": "NURS 105",
    "offered": "Online"
  },
  "AMOA206": {
    "title": "Medical Office Billing and Bookkeeping",
    "credits": 3,
    "prereqs": "NURS 105",
    "offered": "Online"
  },
  "AMOA207": {
    "title": "Medical Office Coding",
    "credits": 3,
    "prereqs": "NURS 105 and HLTH 211 and HLTH 212",
    "offered": "Online"
  },
  "AMOA254": {
    "title": "Medical Office Infection Control",
    "credits": 3,
    "prereqs": "NURS 105 and HLTH 211 and HLTH 212",
    "offered": "Online"
  },
  "AMOA256": {
    "title": "Medical Office Ethics and Law",
    "credits": 3,
    "prereqs": "NURS 105",
    "offered": "Online"
  },
  "AMOA296": {
    "title": "Externship",
    "credits": 3,
    "offered": "Online"
  },
  "APOL120": {
    "title": "Apologetics",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "APOL201": {
    "title": "Apologetics and Cultural Engagement",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL220": {
    "title": "Introduction to Apologetics",
    "credits": 3,
    "offered": "Online"
  },
  "APOL250": {
    "title": "Faith, Reason, and the Search for Meaning",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL310": {
    "title": "Apologetics in a Secular Age",
    "credits": 3,
    "prereqs": "APOL 220",
    "offered": "Online"
  },
  "APOL311": {
    "title": "Foundational Issues in Apologetics",
    "credits": 3,
    "prereqs": "APOL 201",
    "offered": "Resident"
  },
  "APOL320": {
    "title": "Apologetics and the Gospel",
    "credits": 3,
    "prereqs": "APOL 220",
    "offered": "Online"
  },
  "APOL325": {
    "title": "Christianity and the Cults",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL330": {
    "title": "C.S. Lewis and the Apologetic Imagination",
    "credits": 3,
    "prereqs": "APOL 220",
    "offered": "Online"
  },
  "APOL431": {
    "title": "Introduction to Islam",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL480": {
    "title": "Biblical Studies and Apologetics",
    "credits": 3,
    "prereqs": "APOL 201",
    "offered": "Resident"
  },
  "APOL497": {
    "title": "Special Topics in Apologetics",
    "credits": 1,
    "offered": "Resident"
  },
  "APOL500": {
    "title": "Introduction to Apologetics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "APOL520": {
    "title": "History of Christian Apologetics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "APOL525": {
    "title": "Pluralism and World Religions",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "APOL550": {
    "title": "Faith and Reason",
    "credits": 3,
    "prereqs": "APOL 500",
    "offered": "Resident and Online"
  },
  "APOL610": {
    "title": "Miracles",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "APOL620": {
    "title": "Evil, Suffering, and Hell",
    "credits": 3,
    "prereqs": "APOL 550",
    "offered": "Resident and Online"
  },
  "APOL630": {
    "title": "Current Issues in Apologetics",
    "credits": 3,
    "prereqs": "APOL 500",
    "offered": "Resident and Online"
  },
  "APOL679": {
    "title": "Apologetics Capstone",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "APOL695": {
    "title": "Directed Research in Apologetics",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "APOL697": {
    "title": "Seminar in Apologetics",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "APOL701": {
    "title": "Ministry Foundations for Applied Apologetics",
    "credits": 3,
    "prereqs": "RTCH 805 and THEO 706",
    "offered": "Online"
  },
  "APOL702": {
    "title": "Philosophical Foundations for Applied Apologetics",
    "credits": 3,
    "prereqs": "RTCH 805 and THEO 706",
    "offered": "Online"
  },
  "APOL810": {
    "title": "Miracles, the Resurrection, and Christian Ministry",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Available to DMIN Students only",
    "offered": "Online"
  },
  "APOL815": {
    "title": "Dissertation Concept Development for Applied Apologetics",
    "credits": 3,
    "prereqs": "RTCH 805",
    "offered": "Online"
  },
  "APOL820": {
    "title": "Cultural Apologetics",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "APOL845": {
    "title": "Applied Apologetics Literature Review I",
    "credits": 3,
    "prereqs": "APOL 701 and APOL 702 and APOL 815 and RTCH 710 and RTCH 805 and THEO 706",
    "offered": "Online"
  },
  "APOL846": {
    "title": "Applied Apologetics Literature Review II",
    "credits": 3,
    "prereqs": "APOL 845",
    "offered": "Online"
  },
  "APOL847": {
    "title": "Applied Apologetics Topical Research I",
    "credits": 3,
    "prereqs": "APOL 845 and APOL 846",
    "offered": "Online"
  },
  "APOL848": {
    "title": "Applied Apologetics Topical Research II",
    "credits": 3,
    "prereqs": "APOL 847",
    "offered": "Online"
  },
  "APOL849": {
    "title": "Applied Apologetics Dissertation Presentation I",
    "credits": 3,
    "prereqs": "APOL 847 and APOL 848",
    "offered": "Online"
  },
  "APOL850": {
    "title": "Applied Apologetics Dissertation Presentation II",
    "credits": 3,
    "prereqs": "APOL 849",
    "offered": "Online"
  },
  "APOL900": {
    "title": "Reading Seminar in Apologetics",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL910": {
    "title": "Apologetic Method",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL920": {
    "title": "Resurrection and Miracles",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL930": {
    "title": "The Problem of Evil, Pain and Suffering",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL935": {
    "title": "Apologetics and Culture",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL940": {
    "title": "Modern Apologetic Issues",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL950": {
    "title": "Global Apologetics",
    "credits": 3,
    "offered": "Resident"
  },
  "APOL965": {
    "title": "Apologetics in the Church",
    "credits": 3
  },
  "APOL987": {
    "title": "Dissertation Writing in Applied Apologetics I",
    "credits": 5,
    "prereqs": "APOL 850",
    "offered": "Online"
  },
  "APOL988": {
    "title": "Dissertation Writing in Applied Apologetics II",
    "credits": 5,
    "prereqs": "APOL 987",
    "offered": "Online"
  },
  "APOL989": {
    "title": "Dissertation Writing in Applied Apologetics III",
    "credits": 5,
    "prereqs": "APOL 988",
    "offered": "Online"
  },
  "APOL990": {
    "title": "Dissertation Defense for Applied Apologetics",
    "credits": 0,
    "prereqs": "APOL 989",
    "offered": "Online"
  },
  "APOL995": {
    "title": "Directed Research in Apologetics",
    "credits": 1,
    "offered": "Resident"
  },
  "APOL997": {
    "title": "Seminar in Apologetics",
    "credits": 3,
    "offered": "Resident"
  },
  "ARAB101": {
    "title": "Elementary Arabic I",
    "credits": 3,
    "offered": "Resident"
  },
  "ARAB102": {
    "title": "Elementary Arabic II",
    "credits": 3,
    "prereqs": "ARAB 101",
    "offered": "Resident"
  },
  "ARAB201": {
    "title": "Intermediate Arabic I",
    "credits": 3,
    "prereqs": "ARAB 102",
    "offered": "Resident"
  },
  "ARAB202": {
    "title": "Intermediate Arabic II",
    "credits": 3,
    "prereqs": "ARAB 201",
    "offered": "Resident"
  },
  "ARTS105": {
    "title": "Art Appreciation",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS113": {
    "title": "Introduction to 2D Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS114": {
    "title": "Introduction to 3D Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS201": {
    "title": "History of Art I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS202": {
    "title": "History of Art II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS203": {
    "title": "Baroque Art",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS204": {
    "title": "Medieval Art",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS205": {
    "title": "20th-21st Century Art",
    "credits": 3,
    "offered": "Online"
  },
  "ARTS206": {
    "title": "Arts of East Asia",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS207": {
    "title": "The Arts of Latin America",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS208": {
    "title": "Italian and Northern Renaissance",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS209": {
    "title": "Art as Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS211": {
    "title": "Drawing I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS213": {
    "title": "American Art and Architecture",
    "credits": 3,
    "offered": "Online"
  },
  "ARTS214": {
    "title": "Art, Culture, and Technology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS215": {
    "title": "Special Topics in Art History",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS220": {
    "title": "Painting I",
    "credits": 3
  },
  "ARTS222": {
    "title": "Introduction to Graphic Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS223": {
    "title": "Introduction to Typography",
    "credits": 3,
    "prereqs": "ARTS 222",
    "offered": "Resident and Online"
  },
  "ARTS224": {
    "title": "Media Design",
    "credits": 3,
    "prereqs": "ARTS 222",
    "offered": "Resident and Online"
  },
  "ARTS234": {
    "title": "Jewelry I: Introduction to Jewelry Making",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS299": {
    "title": "Internship",
    "credits": 0,
    "note": "Application procedures processed through the Career Center. Must apply semester prior to internship.",
    "offered": "Resident"
  },
  "ARTS301": {
    "title": "Introduction to Film Photography",
    "credits": 3,
    "note": "May be taken twice for credit. (Formerly COMS 301)",
    "offered": "Resident and Online"
  },
  "ARTS303": {
    "title": "History of Graphic Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS311": {
    "title": "Drawing II",
    "credits": 3,
    "prereqs": "ARTS 211 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "note": "May be taken twice for credit.(Formerly ARTS 310)",
    "offered": "Resident and Online"
  },
  "ARTS312": {
    "title": "Life Drawing",
    "credits": 3,
    "prereqs": "ARTS 113 and ARTS 211 and ARTS 311",
    "offered": "Resident"
  },
  "ARTS319": {
    "title": "Mobile &amp; Interactive Technology Applications",
    "credits": 3,
    "prereqs": "ARTS 222",
    "offered": "Resident and Online"
  },
  "ARTS321": {
    "title": "Painting I",
    "credits": 3,
    "prereqs": "ARTS 211",
    "note": "May be taken twice for credit. (Formerly ARTS 320)",
    "offered": "Resident"
  },
  "ARTS330": {
    "title": "Sculpture I",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS332": {
    "title": "Vector Illustration",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS334": {
    "title": "Jewelry II: Design and Fabrication",
    "credits": 3,
    "prereqs": "ARTS 113 and ARTS 211 and ARTS 234 and ARTS 330",
    "offered": "Resident"
  },
  "ARTS340": {
    "title": "Publication Design",
    "credits": 3,
    "prereqs": "(ARTS 222 or VCAR 222) and ARTS 223",
    "offered": "Resident and Online"
  },
  "ARTS342": {
    "title": "Digital Imaging",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS352": {
    "title": "Graphic Design I",
    "credits": 3,
    "prereqs": "(ARTS 222 or VCAR 222) and ARTS 223 and ARTS 332",
    "offered": "Resident and Online"
  },
  "ARTS357": {
    "title": "Digital Application for 3D Arts",
    "credits": 3,
    "prereqs": "ARTS 113 and ARTS 211 and ARTS 330",
    "offered": "Resident"
  },
  "ARTS361": {
    "title": "Digital Photography",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS365": {
    "title": "Documentary Photography/Photojournalism",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS371": {
    "title": "Graphic Design II",
    "credits": 3,
    "prereqs": "(ARTS 222 or VCAR 222) and (ARTS 332 or VCAR 332) and (ARTS 342 or ARTS 352) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "ARTS375": {
    "title": "Special Topics 2D",
    "credits": 3,
    "prereqs": "ARTS 113 and ARTS 211 and ARTS 321",
    "offered": "Resident"
  },
  "ARTS376": {
    "title": "Mixed Media",
    "credits": 3,
    "prereqs": "ARTS 113 and ARTS 211",
    "offered": "Resident"
  },
  "ARTS380": {
    "title": "Interactive Publication",
    "credits": 3,
    "prereqs": "ARTS 222 and ARTS 223 and ARTS 332 and ARTS 340 and ARTS 352",
    "offered": "Resident and Online"
  },
  "ARTS382": {
    "title": "Gallery/Museum Fundamentals",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS398": {
    "title": "Studio and Digital Arts Practicum",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "ARTS400": {
    "title": "Travel Study",
    "credits": 3,
    "prereqs": "VCAR 201 or ARTS 201 or ARTS 202",
    "offered": "Resident"
  },
  "ARTS401": {
    "title": "Character Design",
    "credits": 3,
    "prereqs": "ARTS 113",
    "offered": "Resident and Online"
  },
  "ARTS402": {
    "title": "Sequential Art",
    "credits": 3,
    "prereqs": "ARTS 211 and ARTS 113 and ARTS 311",
    "offered": "Resident and Online"
  },
  "ARTS411": {
    "title": "Advanced Drawing",
    "credits": 3,
    "prereqs": "ARTS 113 and ARTS 211 and ARTS 311",
    "offered": "Resident"
  },
  "ARTS420": {
    "title": "Painting II",
    "credits": 3,
    "prereqs": "ARTS 321",
    "offered": "Resident"
  },
  "ARTS422": {
    "title": "Advanced Painting Topics",
    "credits": 3,
    "prereqs": "ARTS 113 and ARTS 211 and ARTS 311 and ARTS 321 and ARTS 421",
    "offered": "Resident"
  },
  "ARTS424": {
    "title": "Advanced Typography",
    "credits": 3,
    "prereqs": "ARTS 223 and ARTS 332",
    "offered": "Resident and Online"
  },
  "ARTS430": {
    "title": "Sculpture II",
    "credits": 3,
    "prereqs": "ARTS 330 and ARTS 114",
    "offered": "Resident"
  },
  "ARTS431": {
    "title": "Advanced Sculpture Topics",
    "credits": 3,
    "prereqs": "ARTS 114 and ARTS 330 and ARTS 430",
    "offered": "Resident"
  },
  "ARTS432": {
    "title": "Wood Sculpture",
    "credits": 3,
    "prereqs": "ARTS 114 and ARTS 330",
    "offered": "Resident"
  },
  "ARTS433": {
    "title": "Metal Sculpture",
    "credits": 3,
    "prereqs": "ARTS 114 and ARTS 330",
    "offered": "Resident"
  },
  "ARTS434": {
    "title": "Advanced Jewelry",
    "credits": 3,
    "prereqs": "ARTS 114 and ARTS 234 and ARTS 334",
    "offered": "Resident"
  },
  "ARTS461": {
    "title": "Advanced Digital Photography",
    "credits": 3,
    "prereqs": "ARTS 361 or VCAR 361",
    "offered": "Resident and Online"
  },
  "ARTS469": {
    "title": "Conceptual/Fine Art Photography and Portfolio",
    "credits": 3,
    "prereqs": "ARTS 113 and ARTS 301 and ARTS 361 and ARTS 461",
    "offered": "Resident and Online"
  },
  "ARTS470": {
    "title": "Printmaking",
    "credits": 3,
    "prereqs": "ARTS 113 and ARTS 211",
    "offered": "Resident"
  },
  "ARTS471": {
    "title": "Interactive Design I",
    "credits": 3,
    "prereqs": "ARTS 222 and ARTS 341",
    "offered": "Resident"
  },
  "ARTS473": {
    "title": "Introduction to 3D Graphics",
    "credits": 3,
    "prereqs": "ARTS 342 or ARTS 351",
    "offered": "Resident and Online"
  },
  "ARTS474": {
    "title": "Interactive Game Development",
    "credits": 3,
    "prereqs": "ARTS 473",
    "offered": "Resident and Online"
  },
  "ARTS475": {
    "title": "Ceramics I",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS476": {
    "title": "Ceramics II",
    "credits": 3,
    "prereqs": "ARTS 475",
    "offered": "Resident"
  },
  "ARTS477": {
    "title": "Interactive Design I",
    "credits": 3,
    "prereqs": "ARTS 222 and ARTS 342",
    "offered": "Resident and Online"
  },
  "ARTS478": {
    "title": "Interactive Design II",
    "credits": 3,
    "prereqs": "ARTS 477",
    "offered": "Resident and Online"
  },
  "ARTS490": {
    "title": "Arts and Crafts",
    "credits": 3,
    "prereqs": "ARTS 475",
    "offered": "Resident"
  },
  "ARTS492": {
    "title": "Professional Practices",
    "credits": 3,
    "prereqs": "(ARTS 222 and ARTS 223 and ARTS 352 and ARTS 342 and ARTS 371) or (ARTS 311 and ARTS 321 and ARTS 330 and ARTS 361 and ARTS 420 and ARTS 430)",
    "offered": "Resident and Online"
  },
  "ARTS495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "ARTS496": {
    "title": "Workshop in Studio and Digital Arts",
    "credits": 1
  },
  "ARTS497": {
    "title": "Special Topics in Studio and Digital Arts",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS499": {
    "title": "Undergraduate Internship",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "ARTS500": {
    "title": "Aesthetics and Technology",
    "credits": 3,
    "offered": "Online"
  },
  "ARTS501": {
    "title": "Character Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS502": {
    "title": "Sequential Art",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS503": {
    "title": "Advanced Studies in Baroque Art",
    "credits": 3,
    "offered": "Online"
  },
  "ARTS504": {
    "title": "Advanced Studies in Medieval Art",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS506": {
    "title": "Advanced Studies in Arts of East Asia",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS507": {
    "title": "Advanced Studies in Arts in Latin America",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS508": {
    "title": "Advanced Studies in Italian and Northern Renaissance Art",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS510": {
    "title": "Design Theories",
    "credits": 3,
    "offered": "Online"
  },
  "ARTS511": {
    "title": "Graduate Drawing Topics",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS512": {
    "title": "Graduate Life Drawing",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS515": {
    "title": "Issues in Contemporary Art",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS521": {
    "title": "Graduate Painting Topics",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS524": {
    "title": "Advanced Typography",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS525": {
    "title": "Ideation for Innovation",
    "credits": 3,
    "prereqs": "ARTS 500 and DSGN 500 and DSGN 501",
    "offered": "Online"
  },
  "ARTS531": {
    "title": "Advanced Sculpture Topics",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS532": {
    "title": "Vector Illustration",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS533": {
    "title": "Graduate Metal Sculpture",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS534": {
    "title": "Graduate Jewelry I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS535": {
    "title": "Graduate Wood Sculpture",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS540": {
    "title": "Publication Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS542": {
    "title": "Digital Imaging",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS544": {
    "title": "Graduate Jewelry II: Design and Fabrication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS555": {
    "title": "Graduate Advanced Jewelry",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS557": {
    "title": "Graduate Digital Application for 3D Arts",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS561": {
    "title": "Digital Photography",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS566": {
    "title": "Mixed Media",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS570": {
    "title": "Graduate Printmaking",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS571": {
    "title": "Advanced Graphic Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS573": {
    "title": "3D Graphics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS574": {
    "title": "Interactive Game Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS576": {
    "title": "Graduate Ceramics",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS578": {
    "title": "Interactive Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS580": {
    "title": "Interactive Publication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS582": {
    "title": "Graduate Gallery/Museum Fundamentals",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS594": {
    "title": "Graduate Arts and Crafts",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS596": {
    "title": "Teaching Art in Higher Education",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS597": {
    "title": "Special Topics",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS598": {
    "title": "Practicum",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS599": {
    "title": "Internship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS600": {
    "title": "Web and New Media",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS601": {
    "title": "Prototyping: Ideas to Action",
    "credits": 3,
    "prereqs": "ARTS 500 and DSGN 500 and DSGN 501",
    "offered": "Online"
  },
  "ARTS603": {
    "title": "History of Graphic Design",
    "credits": 3,
    "offered": "Online"
  },
  "ARTS604": {
    "title": "Visualization Illustration",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS611": {
    "title": "Graduate Drawing Topics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS621": {
    "title": "Graduate Painting Topics",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS631": {
    "title": "Advanced Sculpture Topics",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS635": {
    "title": "Graduate Wood Sculpture",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS655": {
    "title": "Graduate Advanced Jewelry",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS661": {
    "title": "Advanced Digital Photography",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS670": {
    "title": "Graduate Printmaking",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS676": {
    "title": "Graduate Ceramics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS694": {
    "title": "Graduate Arts and Crafts",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS695": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "ARTS697": {
    "title": "Special Topics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS698": {
    "title": "Practicum",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS699": {
    "title": "Internship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS700": {
    "title": "The Photography Studio",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS711": {
    "title": "Graduate Drawing Topics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS721": {
    "title": "Graduate Painting Topics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS731": {
    "title": "Advanced Sculpture Topics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS735": {
    "title": "Graduate Wood Sculpture",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS755": {
    "title": "Graduate Advanced Jewelry",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS770": {
    "title": "Graduate Printmaking",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS776": {
    "title": "Graduate Ceramics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS780": {
    "title": "Art and Design Research Methodologies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS789": {
    "title": "Thesis/Portfolio Research",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS790": {
    "title": "Thesis/Portfolio Project",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "ARTS794": {
    "title": "Graduate Arts and Crafts",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ARTS795": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Online"
  },
  "ARTS797": {
    "title": "Special Topics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ASCS100": {
    "title": "Foundations for Academic Success",
    "credits": 3,
    "offered": "Online"
  },
  "ASCS101": {
    "title": "Theory for Academic Success",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "ASCS103": {
    "title": "Practical Application for Academic Success",
    "credits": 1,
    "offered": "Resident"
  },
  "ASCS104": {
    "title": "College Transition and Study",
    "credits": 3,
    "offered": "Resident"
  },
  "ASCS105": {
    "title": "Accountability for Academic Success",
    "credits": 1,
    "offered": "Resident"
  },
  "ASCS301": {
    "title": "Soft Skills Training for Employment Success",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "ASLI101": {
    "title": "American Sign Language I",
    "credits": 3,
    "offered": "Resident"
  },
  "ASLI102": {
    "title": "American Sign Language II",
    "credits": 3,
    "prereqs": "ASLI 101",
    "offered": "Resident"
  },
  "ASLI201": {
    "title": "American Sign Language III",
    "credits": 3,
    "prereqs": "ASLI 102",
    "offered": "Resident"
  },
  "ASLI202": {
    "title": "American Sign Language IV",
    "credits": 3,
    "prereqs": "ASLI 201",
    "offered": "Resident"
  },
  "ASLI212": {
    "title": "Theory and Application of Fingerspelling and Numbers",
    "credits": 3,
    "prereqs": "ASLI 102",
    "offered": "Resident"
  },
  "ASLI302": {
    "title": "American Sign Language V",
    "credits": 3,
    "prereqs": "ASLI 202",
    "offered": "Resident"
  },
  "ASLI310": {
    "title": "Deaf Studies",
    "credits": 3,
    "offered": "Resident"
  },
  "ASLI313": {
    "title": "Introduction to Interpreting",
    "credits": 3,
    "prereqs": "ASLI 201 and ASLI 310 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ASLI317": {
    "title": "American Sign Language for Interpreters",
    "credits": 3,
    "prereqs": "ASLI 302 and ASLI 313",
    "offered": "Resident"
  },
  "ASLI320": {
    "title": "Sociocultural Linguistic Processing",
    "credits": 3,
    "prereqs": "ASLI 313",
    "offered": "Resident"
  },
  "ASLI401": {
    "title": "English to ASL Interpreting I",
    "credits": 3,
    "prereqs": "ASLI 302 and ASLI 320",
    "offered": "Resident"
  },
  "ASLI402": {
    "title": "English to ASL Interpreting II",
    "credits": 3,
    "prereqs": "ASLI 302 and ASLI 401",
    "offered": "Resident"
  },
  "ASLI403": {
    "title": "ASL to English Interpreting I",
    "credits": 3,
    "prereqs": "ASLI 302 and ASLI 320",
    "offered": "Resident"
  },
  "ASLI404": {
    "title": "ASL to English Interpreting II",
    "credits": 3,
    "prereqs": "ASLI 403",
    "offered": "Resident"
  },
  "ASLI405": {
    "title": "ASL Linguistics",
    "credits": 3,
    "prereqs": "ASLI 302 and (LING 213 or LING 301)",
    "offered": "Resident"
  },
  "ASLI410": {
    "title": "Interpreter Professional Identities, Function &amp; Ethics and Current Trends",
    "credits": 3,
    "prereqs": "ASLI 310 and ASLI 313 and ASLI 320 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "ASLI498": {
    "title": "Practicum",
    "credits": 3,
    "prereqs": "ASLI 403 and ASLI 404 and ASLI 410 and VQAS Written Exam with a score of 5",
    "offered": "Resident"
  },
  "ASLI499": {
    "title": "Internship",
    "credits": 3,
    "prereqs": "ASLI 498 and ASLI 405 and VQAS Performance Exam with a score of 5",
    "offered": "Resident"
  },
  "ATHL001": {
    "title": "Men's Basketball",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL011": {
    "title": "Baseball",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL022": {
    "title": "Football",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL024": {
    "title": "Women's Soccer",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL034": {
    "title": "Men's Soccer",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL035": {
    "title": "Indoor Track",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL036": {
    "title": "Men's/Women's Cross Country",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL037": {
    "title": "Outdoor Track",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL041": {
    "title": "Women's Basketball",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL042": {
    "title": "Women's Volleyball",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL043": {
    "title": "Women's Softball",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL044": {
    "title": "Golf",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL045": {
    "title": "Tennis",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL056": {
    "title": "Lacrosse",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL057": {
    "title": "Women's Swimming",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL058": {
    "title": "Women's Field Hockey",
    "credits": 1,
    "offered": "Resident"
  },
  "ATHL200": {
    "title": "Cheerleading",
    "credits": 1,
    "offered": "Resident"
  },
  "ATTR205": {
    "title": "Musculoskeletal Terminology and Clinical Documentation",
    "credits": 2,
    "offered": "Resident"
  },
  "ATTR330": {
    "title": "Clinical Musculoskeletal Anatomy",
    "credits": 3,
    "prereqs": "BIOL 213 and BIOL 214 and BIOL 215 and BIOL 216",
    "offered": "Resident"
  },
  "ATTR331": {
    "title": "Clinical Musculoskeletal Anatomy Lab",
    "credits": 1,
    "prereqs": "BIOL 213 and BIOL 214 and BIOL 215 and BIOL 216 and ATTR 330 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ATTR335": {
    "title": "Musculoskeletal Injury Assessment",
    "credits": 3,
    "prereqs": "ATTR 330 and ATTR 331 and ATTR 336 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ATTR336": {
    "title": "Musculoskeletal Injury Assessment Laboratory",
    "credits": 1,
    "prereqs": "ATTR 330 and ATTR 331 and ATTR 335 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ATTR406": {
    "title": "Theory of Therapeutic Rehabilitation",
    "credits": 3,
    "prereqs": "ATTR 335 and ATTR 336",
    "offered": "Resident"
  },
  "ATTR415": {
    "title": "Leadership &amp; Clinical Interactions in Athletic Training",
    "credits": 3,
    "prereqs": "ATTR 410",
    "offered": "Resident"
  },
  "ATTR420": {
    "title": "Clinical Education IV",
    "credits": 2,
    "prereqs": "ATTR 321",
    "offered": "Resident"
  },
  "ATTR421": {
    "title": "Clinical Education V",
    "credits": 2,
    "prereqs": "ATTR 420",
    "offered": "Resident"
  },
  "ATTR425": {
    "title": "Allied Healthcare Evidence-based Research Analysis",
    "credits": 3,
    "prereqs": "MATH 201 and EXSC 320",
    "offered": "Resident"
  },
  "ATTR440": {
    "title": "Senior Seminar in Athletic Training",
    "credits": 2,
    "prereqs": "ATTR 402 and ATTR 404",
    "offered": "Resident"
  },
  "ATTR500": {
    "title": "Bracing, Taping, and Wrapping",
    "credits": 2,
    "prereqs": "BIOM 513 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ATTR501": {
    "title": "Foundations of Athletic Training",
    "credits": 3,
    "prereqs": "ATTR 500",
    "offered": "Resident"
  },
  "ATTR503": {
    "title": "Emergency Care",
    "credits": 3,
    "prereqs": "ATTR 500 and ATTR 501 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ATTR505": {
    "title": "Healthcare Translational Research and Statistics",
    "credits": 4,
    "prereqs": "ATTR 501 and ATTR 503",
    "offered": "Resident"
  },
  "ATTR510": {
    "title": "Clinical Integrations I",
    "credits": 1,
    "prereqs": "ATTR 501 and ATTR 503",
    "offered": "Resident"
  },
  "ATTR511": {
    "title": "Clinical Integration II",
    "credits": 1,
    "prereqs": "ATTR 510",
    "offered": "Resident"
  },
  "ATTR520": {
    "title": "Examination and Treatment I",
    "credits": 4,
    "prereqs": "ATTR 501 and ATTR 503",
    "offered": "Resident"
  },
  "ATTR525": {
    "title": "Examination and Treatment II",
    "credits": 4,
    "prereqs": "ATTR 520",
    "offered": "Resident"
  },
  "ATTR530": {
    "title": "Examination and Treatment III",
    "credits": 5,
    "prereqs": "ATTR 525",
    "offered": "Resident"
  },
  "ATTR540": {
    "title": "Examination and Treatment IV",
    "credits": 4,
    "prereqs": "ATTR 530",
    "offered": "Resident"
  },
  "ATTR541": {
    "title": "Pharmacology",
    "credits": 2,
    "prereqs": "ATTR 540",
    "offered": "Resident"
  },
  "ATTR600": {
    "title": "Healthcare Administration",
    "credits": 3,
    "prereqs": "ATTR 540 and ATTR 541",
    "offered": "Resident"
  },
  "ATTR601": {
    "title": "Healthcare Leadership and Patient Instructions",
    "credits": 2,
    "prereqs": "ATTR 600",
    "offered": "Resident"
  },
  "ATTR610": {
    "title": "Clinical Integration III",
    "credits": 2,
    "prereqs": "ATTR 511",
    "offered": "Resident"
  },
  "ATTR611": {
    "title": "Clinical Integration IV",
    "credits": 3,
    "prereqs": "ATTR 610",
    "offered": "Resident"
  },
  "ATTR612": {
    "title": "Clinical Integrations V",
    "credits": 2
  },
  "ATTR620": {
    "title": "Manual Therapy Techniques",
    "credits": 3,
    "prereqs": "ATTR 520 and ATTR 525 and ATTR 530",
    "offered": "Resident"
  },
  "ATTR625": {
    "title": "Musculoskeletal Diagnostic Imaging",
    "credits": 3,
    "prereqs": "ATTR 520 and ATTR 525 and ATTR 530 and ATTR 540",
    "offered": "Resident"
  },
  "ATTR630": {
    "title": "Behavioral and Population Health",
    "credits": 3,
    "prereqs": "ATTR 601",
    "offered": "Resident"
  },
  "ATTR680": {
    "title": "Clinical Reasoning",
    "credits": 3,
    "prereqs": "ATTR 505 and ATTR 611",
    "offered": "Resident"
  },
  "ATTR689": {
    "title": "Thesis Proposal",
    "credits": 3,
    "prereqs": "ATTR 505",
    "offered": "Resident"
  },
  "ATTR690": {
    "title": "Thesis Defense",
    "credits": 3,
    "prereqs": "ATTR 689",
    "offered": "Resident"
  },
  "AVIA101": {
    "title": "Exploring Aviation",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA102": {
    "title": "Aviation Foundations",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA104": {
    "title": "Flight Operations Orientation",
    "credits": 1,
    "offered": "Resident"
  },
  "AVIA105": {
    "title": "Aviation Survey",
    "credits": 3,
    "prereqs": "(AVIA 210 and AVIA 215 and AVIA 220 and AVIA 225) or (AVIA 216 and AVIA 220 and AVIA 225)",
    "offered": "Online"
  },
  "AVIA201": {
    "title": "Principles of Ground for Non-Flight Majors",
    "credits": 3,
    "note": "This course is specifically designed for non-flight students.",
    "offered": "Online"
  },
  "AVIA210": {
    "title": "Private Ground I",
    "credits": 3,
    "prereqs": "AVIA 215 (may be taken concurrently) and AVIA 220 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "AVIA215": {
    "title": "Private Ground II",
    "credits": 3,
    "prereqs": "AVIA 210 (may be taken concurrently) and AVIA 220 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "AVIA216": {
    "title": "Private Ground",
    "credits": 4,
    "prereqs": "AVIA 220 (may be taken concurrently)",
    "note": "Students must choose between the following options to count towards Private Ground course training: (AVIA 210 and AVIA 215) or AVIA 216. Students must enroll in AVIA 220 as a required co-requisite.",
    "offered": "Online"
  },
  "AVIA220": {
    "title": "Private Flight I",
    "credits": 3,
    "prereqs": "((ENGL 100 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222 or (pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70) and (Placement Score-Math with a score of 75 or MATH 110 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)) and AVIA 210 (may be taken concurrently) and AVIA 215 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "AVIA225": {
    "title": "Private Flight II",
    "credits": 3,
    "prereqs": "AVIA 220",
    "offered": "Resident and Online"
  },
  "AVIA227": {
    "title": "Introduction to Risk Management",
    "credits": 3,
    "prereqs": "(AVIA 210 and AVIA 215 and AVIA 220 and AVIA 225) or (AVIA 216 and AVIA 220 and AVIA 225)",
    "offered": "Online"
  },
  "AVIA230": {
    "title": "Unmanned Aerial Systems",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "AVIA235": {
    "title": "Small Unmanned Aerial System Ground",
    "credits": 3,
    "prereqs": "AVIA 230",
    "offered": "Resident"
  },
  "AVIA236": {
    "title": "Small UAS Flight",
    "credits": 1,
    "prereqs": "AVIA 235 (may be taken concurrently)",
    "offered": "Resident"
  },
  "AVIA240": {
    "title": "GPS Navigation",
    "credits": 1,
    "offered": "Resident"
  },
  "AVIA241": {
    "title": "GPS Instrument Navigation",
    "credits": 1,
    "prereqs": "AVIA 240 (may be taken concurrently)",
    "offered": "Resident"
  },
  "AVIA245": {
    "title": "Aviation Leadership",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "AVIA250": {
    "title": "Introduction to Space Flight",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "AVIA300": {
    "title": "Aviation Safety",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "AVIA301": {
    "title": "Remote Pilot Ground",
    "credits": 3,
    "prereqs": "AVIA 230",
    "offered": "Online"
  },
  "AVIA302": {
    "title": "Airplane Aerodynamics",
    "credits": 3
  },
  "AVIA304": {
    "title": "Aviation History",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA305": {
    "title": "Airplane Aerodynamics",
    "credits": 3,
    "prereqs": "((MATH 128 or MATH 130)) and PHYS 101",
    "offered": "Resident and Online"
  },
  "AVIA306": {
    "title": "Non-Profit Aviation Management",
    "credits": 3,
    "prereqs": "((AVIA 201 or AVIA 215 or AVIA 216) and ((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217))",
    "offered": "Online"
  },
  "AVIA310": {
    "title": "Instrument Ground",
    "credits": 3,
    "prereqs": "AVIA 225",
    "offered": "Resident and Online"
  },
  "AVIA311": {
    "title": "Instrumental Lab Theory",
    "credits": 1,
    "prereqs": "AVIA 225",
    "offered": "Resident"
  },
  "AVIA312": {
    "title": "Aviation Safety Programs",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA314": {
    "title": "Principles of Aviation Administration",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "AVIA315": {
    "title": "Commercial Ground",
    "credits": 3,
    "prereqs": "AVIA 310",
    "offered": "Resident and Online"
  },
  "AVIA320": {
    "title": "Instrument Flight",
    "credits": 3,
    "prereqs": "((AVIA 225 or AVIA 104 and AVIA 342) and ((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 100 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 110 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)) and AVIA 310 (may be taken concurrently) and AVIA 322",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA322": {
    "title": "Commercial Flight I: Accelerated",
    "credits": 3,
    "prereqs": "((AVIA 225 or AVIA 104 and AVIA 342) and ((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 100 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 110 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217))",
    "offered": "Resident"
  },
  "AVIA323": {
    "title": "UAS Avionics &amp; Powerplants",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA324": {
    "title": "Commercial Flight II: Accelerated",
    "credits": 3,
    "prereqs": "((AVIA 322 or AVIA 325) and AVIA 315 (may be taken concurrently) and AVIA 320 )",
    "offered": "Resident"
  },
  "AVIA325": {
    "title": "Commercial Flight I",
    "credits": 3,
    "prereqs": "(AVIA 225 or AVIA 104 and AVIA 342) and ((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 100 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 110 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA326": {
    "title": "Commercial Flight II",
    "credits": 3,
    "prereqs": "((AVIA 322 or AVIA 325)) and AVIA 320",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA327": {
    "title": "Commercial Flight III",
    "credits": 3,
    "prereqs": "((AVIA 324 or AVIA 326) and AVIA 315 )",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA331": {
    "title": "Commercial Pilot, Single Engine Land Add On",
    "credits": 1,
    "prereqs": "AVIA 327",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA332": {
    "title": "Commercial Pilot Helicopter Add-On",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA334": {
    "title": "Rotor to Fixed-Wing Commercial/Instrument Transition",
    "credits": 3,
    "prereqs": "(AVIA 210 and AVIA 215 and AVIA 220 and AVIA 225) or (AVIA 216 and AVIA 220 and AVIA 225)",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Online"
  },
  "AVIA335": {
    "title": "Medium UAS Ground and Flight I",
    "credits": 3,
    "prereqs": "AVIA 446 (may be taken concurrently)",
    "offered": "Resident"
  },
  "AVIA340": {
    "title": "Aviation Weather",
    "credits": 3,
    "prereqs": "AVIA 210",
    "offered": "Resident and Online"
  },
  "AVIA342": {
    "title": "Advanced GPS Navigation",
    "credits": 3,
    "prereqs": "AVIA 225",
    "offered": "Resident and Online"
  },
  "AVIA350": {
    "title": "Airline Operations",
    "credits": 3,
    "prereqs": "AVIA 310 and AVIA 320",
    "offered": "Resident and Online"
  },
  "AVIA355": {
    "title": "Air Carrier Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "AVIA360": {
    "title": "Corporate and Business Aviation",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "AVIA361": {
    "title": "Airport Management",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA400": {
    "title": "Aviation Human Factors",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "AVIA401": {
    "title": "Fundamentals of Instructing",
    "credits": 3,
    "prereqs": "AVIA 326",
    "offered": "Online"
  },
  "AVIA405": {
    "title": "Advanced Aerodynamics",
    "credits": 3,
    "prereqs": "AVIA 305",
    "offered": "Resident"
  },
  "AVIA409": {
    "title": "Safety Management Systems",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA410": {
    "title": "Flight and Ground Instructor Theory",
    "credits": 3,
    "prereqs": "AVIA 315",
    "offered": "Resident and Online"
  },
  "AVIA419": {
    "title": "Aviation Safety Data Analysis",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA420": {
    "title": "Flight Instructor Flight",
    "credits": 1,
    "prereqs": "AVIA 410 and AVIA 422 (may be taken concurrently)",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA422": {
    "title": "Certified Flight Instructor - Instrument (CFII)",
    "credits": 1,
    "prereqs": "AVIA 410 and AVIA 420 (may be taken concurrently)",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA423": {
    "title": "Certified Flight Instructor - Instrument (CFII)",
    "credits": 3,
    "prereqs": "AVIA 310 and AVIA 315 and AVIA 320 and AVIA 325 and AVIA 326 and AVIA 327 and AVIA 410 and AVIA 420 and (AVIA 210 and AVIA 215 and AVIA 220 and AVIA 225) or (AVIA 216 and AVIA 220 and AVIA 225)",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA424": {
    "title": "Airline Transport Pilot",
    "credits": 3,
    "prereqs": "AVIA 315 and AVIA 325 and AVIA 326 and AVIA 327",
    "offered": "Resident"
  },
  "AVIA430": {
    "title": "Multi-Engine Ground",
    "credits": 3,
    "prereqs": "AVIA 315",
    "offered": "Resident and Online"
  },
  "AVIA435": {
    "title": "Advanced Jet Systems",
    "credits": 3,
    "prereqs": "AVIA 350 (may be taken concurrently) and AVIA 430",
    "offered": "Resident and Online"
  },
  "AVIA436": {
    "title": "Advanced Jet Training",
    "credits": 3,
    "prereqs": "(AVMT 320 or AVIA 455) and (AVMT 320 or AVIA 430) and AVIA 315 and AVIA 320",
    "offered": "Resident"
  },
  "AVIA440": {
    "title": "Multi-Engine Flight",
    "credits": 1,
    "prereqs": "((AVIA 324 or AVIA 327) and AVIA 430 (may be taken concurrently))",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA441": {
    "title": "Multi-Engine Instructor",
    "credits": 1,
    "prereqs": "AVIA 410 and AVIA 440",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA442": {
    "title": "Advanced Aircraft Flight Operations",
    "credits": 1,
    "prereqs": "AVIA 225",
    "offered": "Resident"
  },
  "AVIA443": {
    "title": "Multi-Engine Instructor",
    "credits": 3,
    "prereqs": "AVIA 310 and AVIA 315 and AVIA 320 and AVIA 325 and AVIA 326 and AVIA 327 and AVIA 410 and AVIA 420 and AVIA 430 and AVIA 440 and (AVIA 210 and AVIA 215 and AVIA 220 and AVIA 225) or (AVIA 216 and AVIA 220 and AVIA 225)",
    "note": "For lab fees and flight hours please click: https://www.liberty.edu/aeronautics/flight-course-lab-fees/",
    "offered": "Resident and Online"
  },
  "AVIA444": {
    "title": "Principles of Transportation",
    "credits": 3,
    "prereqs": "(((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217) and (AVIA 201 or AVIA 215 or AVIA 216))",
    "offered": "Online"
  },
  "AVIA446": {
    "title": "Medium UAS Ground and Flight II",
    "credits": 3,
    "prereqs": "AVIA 335 (may be taken concurrently)",
    "offered": "Resident"
  },
  "AVIA447": {
    "title": "Medium UAS Ground and Flight III",
    "credits": 3,
    "prereqs": "AVIA 446 and AVIA 335",
    "offered": "Resident"
  },
  "AVIA448": {
    "title": "Aviation Law",
    "credits": 3,
    "prereqs": "(((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217) and (AVIA 201 or AVIA 215 or AVIA 216))",
    "offered": "Online"
  },
  "AVIA450": {
    "title": "Confined Area Operation",
    "credits": 2,
    "prereqs": "AVIA 225",
    "offered": "Resident"
  },
  "AVIA455": {
    "title": "Turbine Engines and Jet Transports",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "AVIA460": {
    "title": "Professional Pilot Career Strategies",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA461": {
    "title": "Aviation Career Strategies",
    "credits": 3,
    "offered": "Resident"
  },
  "AVIA465": {
    "title": "Human Factors &amp; Crew Resource Management",
    "credits": 3
  },
  "AVIA472": {
    "title": "Aviation Organizational Ethics",
    "credits": 3,
    "prereqs": "AVIA 245",
    "offered": "Resident and Online"
  },
  "AVIA475": {
    "title": "Aviation Physiology",
    "credits": 3,
    "prereqs": "AVIA 400 and ((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 100 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 110 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)",
    "offered": "Online"
  },
  "AVIA490": {
    "title": "Aviation Capstone",
    "credits": 3,
    "prereqs": "((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)",
    "offered": "Online"
  },
  "AVIA491": {
    "title": "Capstone: Advanced Research Concepts",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident"
  },
  "AVIA492": {
    "title": "Aviation Research Implementation",
    "credits": 3,
    "prereqs": "AVIA 491",
    "offered": "Resident"
  },
  "AVIA495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "AVIA496": {
    "title": "Advanced Directed Research",
    "credits": 1,
    "prereqs": "AVIA 495",
    "offered": "Resident"
  },
  "AVIA499": {
    "title": "Aeronautics Internship",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "AVIA505": {
    "title": "Aviation Context &amp; Foundations",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA525": {
    "title": "Applied Aviation Research",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA535": {
    "title": "Developing Aviation Leaders",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA536": {
    "title": "Contemporary Aviation Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA537": {
    "title": "Aviation Organizational Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA542": {
    "title": "Aviation Teaching and Learning Strategies",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA543": {
    "title": "Ethics in Aerospace Decision Making",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA544": {
    "title": "Aerospace Education and Training Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA545": {
    "title": "Aviation Curriculum Development",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA571": {
    "title": "Safety Fundamentals in Aeronautics",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA572": {
    "title": "Applied Human Factors",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA573": {
    "title": "Safety Culture Methods",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA574": {
    "title": "Graduate Safety Analysis",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA575": {
    "title": "Contemporary Issues in Aviation Safety",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA605": {
    "title": "Aviation Law",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA680": {
    "title": "Capstone Proposal",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA681": {
    "title": "Capstone Project",
    "credits": 3,
    "prereqs": "AVIA 680",
    "note": "AVIA 681 must be a consecutive enrollment with AVIA 680. AVIA 681 must be taken the final term of student’s degree completion. AVIA 680 must be taken term prior (touching terms) to AVIA 681.",
    "offered": "Online"
  },
  "AVIA701": {
    "title": "Orientation to Doctoral Study and Research",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA705": {
    "title": "Advanced Aviation Research Orientation",
    "credits": 3,
    "prereqs": "AVIA 701",
    "offered": "Online"
  },
  "AVIA706": {
    "title": "Advanced Aviation Investigation",
    "credits": 3,
    "prereqs": "AVIA 701 and AVIA 705",
    "offered": "Online"
  },
  "AVIA710": {
    "title": "Global Aviation Law",
    "credits": 3,
    "offered": "Online"
  },
  "AVIA725": {
    "title": "Current Practices and Future Trends in Aviation",
    "credits": 3,
    "prereqs": "AVIA 701 and AVIA 705",
    "offered": "Online"
  },
  "AVIA735": {
    "title": "Human Factors and Aviation Automation",
    "credits": 3,
    "prereqs": "AVIA 701",
    "offered": "Online"
  },
  "AVIA745": {
    "title": "The Economic Environment of Aviation",
    "credits": 3,
    "prereqs": "AVIA 701 and AVIA 705",
    "offered": "Online"
  },
  "AVIA755": {
    "title": "Contemporary Issues in Aviation Policy",
    "credits": 3,
    "prereqs": "AVIA 701 and AVIA 705",
    "offered": "Online"
  },
  "AVIA812": {
    "title": "Advanced Aviation Statistics",
    "credits": 3,
    "prereqs": "AVIA 701 and AVIA 705",
    "offered": "Online"
  },
  "AVIA815": {
    "title": "Quantitative Methods of Research",
    "credits": 3,
    "prereqs": "AVIA 812",
    "offered": "Online"
  },
  "AVIA817": {
    "title": "Qualitative Methods of Research",
    "credits": 3,
    "prereqs": "AVIA 812",
    "offered": "Online"
  },
  "AVIA860": {
    "title": "Literature Review for Advanced Research",
    "credits": 3,
    "prereqs": "AVIA 701 and AVIA 705",
    "offered": "Online"
  },
  "AVIA915": {
    "title": "Advanced Quantitative Methods of Research",
    "credits": 3,
    "prereqs": "AVIA 812 and AVIA 815 and AVIA 860",
    "offered": "Online"
  },
  "AVIA917": {
    "title": "Advanced Qualitative Methods of Research",
    "credits": 3,
    "prereqs": "AVIA 812 and AVIA 815 and AVIA 860",
    "offered": "Online"
  },
  "AVIA980": {
    "title": "Research Concepts and Methodology",
    "credits": 3,
    "prereqs": "AVIA 915 and AVIA 917",
    "offered": "Online"
  },
  "AVIA987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "AVIA 980",
    "offered": "Online"
  },
  "AVIA988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "AVIA 987",
    "offered": "Online"
  },
  "AVIA989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "AVIA 988",
    "offered": "Online"
  },
  "AVIA990": {
    "title": "Dissertation IV",
    "credits": 0,
    "prereqs": "AVIA 989",
    "offered": "Online"
  },
  "AVMT100": {
    "title": "Aircraft Sciences I",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT101": {
    "title": "Maintenance Mathematics",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT102": {
    "title": "Aircraft Sciences II",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT103": {
    "title": "Maintenance Physics",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT104": {
    "title": "Maintenance Practices I",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT105": {
    "title": "Aircraft Weight and Balance",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT106": {
    "title": "Maintenance Practices II",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT150": {
    "title": "General Curriculum Final",
    "credits": 0,
    "prereqs": "AVMT 101 (may be taken concurrently) and AVMT 102 (may be taken concurrently) and AVMT 103 (may be taken concurrently) and AVMT 104 (may be taken concurrently) and AVMT 105 (may be taken concurrently) and AVMT 106 (may be taken concurrently)",
    "offered": "Resident"
  },
  "AVMT200": {
    "title": "Airframe Auxiliary Systems",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT201": {
    "title": "Airframe Auxiliary Systems I",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT202": {
    "title": "Aircraft Electrical Systems",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT203": {
    "title": "Aircraft Auxiliary Systems II",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT204": {
    "title": "Airframe Structures I",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT205": {
    "title": "Airframe Auxiliary Systems III",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT206": {
    "title": "Airframe Structures II",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT207": {
    "title": "Hydraulic and Pneumatic Systems",
    "credits": 2,
    "offered": "Resident"
  },
  "AVMT208": {
    "title": "Airframe Assembly and Inspection",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT209": {
    "title": "Landing Gear Systems",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT210": {
    "title": "Airframe Hydraulic, Pneumatic, and Landing Gear Systems",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT213": {
    "title": "Powerplant Fuel Systems",
    "credits": 2,
    "offered": "Resident"
  },
  "AVMT214": {
    "title": "Engine Electrical Systems",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT215": {
    "title": "Powerplant Lubrication Systems",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT216": {
    "title": "Engine Auxiliary Systems I",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT217": {
    "title": "Powerplant Auxiliary Systems I",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT218": {
    "title": "Engine Auxiliary Systems II",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT219": {
    "title": "Powerplant Auxiliary Systems II",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT221": {
    "title": "Propeller Systems",
    "credits": 1,
    "offered": "Resident"
  },
  "AVMT250": {
    "title": "Airframe Curriculum Final",
    "credits": 0,
    "prereqs": "AVMT 201 (may be taken concurrently) and AVMT 202 (may be taken concurrently) and AVMT 203 (may be taken concurrently) and AVMT 204 (may be taken concurrently) and AVMT 205 (may be taken concurrently) and AVMT 206 (may be taken concurrently) and AVMT 207 (may be taken concurrently) and AVMT 208 (may be taken concurrently) and AVMT 209 (may be taken concurrently)",
    "offered": "Resident"
  },
  "AVMT312": {
    "title": "Reciprocating Engine Technology",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT320": {
    "title": "Turbine Engine Technology",
    "credits": 3,
    "offered": "Resident"
  },
  "AVMT350": {
    "title": "Powerplant Curriculum Final",
    "credits": 0,
    "prereqs": "AVMT 213 (may be taken concurrently) and AVMT 214 (may be taken concurrently) and AVMT 215 (may be taken concurrently) and AVMT 217 (may be taken concurrently) and AVMT 219 (may be taken concurrently) and AVMT 221 (may be taken concurrently) and AVMT 312 (may be taken concurrently) and AVMT 320 (may be taken concurrently)",
    "offered": "Resident"
  },
  "AVMX339": {
    "title": "UAS Airframe",
    "credits": 2,
    "prereqs": "(AVMT 100 and AVMT 102 and AVMT 104 and AVMT 106 and AVMT 200 and AVMT 202 and AVMT 204 and AVMT 206 and AVMT 208 and AVMT 210 and AVMT 214 and AVMT 216 and AVMT 218 and AVMT 312 and AVMT 320) or (AVMT 101 and AVMT 102 and AVMT 103 and AVMT 104 and AVMT 105 and AVMT 106 and AVMT 201 and AVMT 202 and AVMT 203 and AVMT 204 and AVMT 205 and AVMT 206 and AVMT 207 and AVMT 208 and AVMT 209 and AVMT 213 and AVMT 214 and AVMT 215 and AVMT 217 and AVMT 219 and AVMT 221 and AVMT 312 and AVMT 320)",
    "offered": "Resident"
  },
  "AVMX349": {
    "title": "UAS Powerplant",
    "credits": 2,
    "prereqs": "(AVMT 100 and AVMT 102 and AVMT 104 and AVMT 106 and AVMT 200 and AVMT 202 and AVMT 204 and AVMT 206 and AVMT 208 and AVMT 210 and AVMT 214 and AVMT 216 and AVMT 218 and AVMT 312 and AVMT 320) or (AVMT 101 and AVMT 102 and AVMT 103 and AVMT 104 and AVMT 105 and AVMT 106 and AVMT 201 and AVMT 202 and AVMT 203 and AVMT 204 and AVMT 205 and AVMT 206 and AVMT 207 and AVMT 208 and AVMT 209 and AVMT 213 and AVMT 214 and AVMT 215 and AVMT 217 and AVMT 219 and AVMT 221 and AVMT 312 and AVMT 320)",
    "offered": "Resident"
  },
  "AVMX359": {
    "title": "UAS Ground Systems",
    "credits": 2,
    "prereqs": "(AVMT 100 and AVMT 102 and AVMT 104 and AVMT 106 and AVMT 200 and AVMT 202 and AVMT 204 and AVMT 206 and AVMT 208 and AVMT 210 and AVMT 214 and AVMT 216 and AVMT 218 and AVMT 312 and AVMT 320) or (AVMT 101 and AVMT 102 and AVMT 104 and AVMT 105 and AVMT 106 and AVMT 201 and AVMT 202 and AVMT 203 and AVMT 204 and AVMT 205 and AVMT 206 and AVMT 207 and AVMT 208 and AVMT 209 and AVMT 213 and AVMT 214 and AVMT 215 and AVMT 217 and AVMT 219 and AVMT 221 and AVMT 312 and AVMT 320)",
    "offered": "Resident"
  },
  "AVMX418": {
    "title": "Principles of Troubleshooting",
    "credits": 3,
    "prereqs": "(AVMT 100 or AVMT 101 and AVMT 103 and AVMT 105) and AVMT 102 and AVMT 104 and AVMT 106 and (AVMT 200 or AVMT 201 and AVMT 203 and AVMT 205) and AVMT 202 and AVMT 204 and AVMT 206 and AVMT 208 and (AVMT 210 or AVMT 207 and AVMT 209) and AVMT 214 and (AVMT 216 or AVMT 213 and AVMT 215) and (AVMT 218 or AVMT 217 and AVMT 219 and AVMT 221) and AVMT 312 and AVMT 320 and ((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)",
    "offered": "Online"
  },
  "AVMX428": {
    "title": "Advanced Electronics",
    "credits": 3,
    "prereqs": "(AVMT 100 or AVMT 101 and AVMT 103 and AVMT 105) and AVMT 102 and AVMT 104 and AVMT 106 and (AVMT 200 or AVMT 201 and AVMT 203 and AVMT 205) and AVMT 202 and AVMT 204 and AVMT 206 and AVMT 208 and (AVMT 210 or AVMT 207 and AVMT 209) and AVMT 214 and (AVMT 216 or AVMT 213 and AVMT 215) and (AVMT 218 or AVMT 217 and AVMT 219 and AVMT 221) and AVMT 312 and AVMT 320 and ((pre2016) SAT Writing with a score of 480 or SAT Test Writing/Language with a score of 28 or ACT English with a score of 19 or Placement Score-English with a score of 70 or ENGL 101 or ENGL 102 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222) and (Placement Score-Math with a score of 75 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)",
    "offered": "Online"
  },
  "AVMX445": {
    "title": "Medium UAS Maintenance I",
    "credits": 3,
    "prereqs": "AVIA 335 (may be taken concurrently)",
    "offered": "Resident"
  },
  "AVMX446": {
    "title": "Medium UAS Maintenance II",
    "credits": 3,
    "prereqs": "AVMX 445 (may be taken concurrently)",
    "offered": "Resident"
  },
  "AVMX447": {
    "title": "Medium UAS Maintenance III",
    "credits": 3,
    "prereqs": "AVMX 445 and AVMX 446",
    "offered": "Resident"
  },
  "AVMX451": {
    "title": "Aviation Maintenance Operations",
    "credits": 3,
    "prereqs": "(AVMT 100 or AVMT 101 and AVMT 103 and AVMT 105) and AVMT 102 and AVMT 104 and AVMT 106 and (AVMT 200 or AVMT 201 and AVMT 203 and AVMT 205) and AVMT 202 or AVMT 204 and AVMT 206 and AVMT 208 and (AVMT 210 or AVMT 207 and AVMT 209)",
    "offered": "Resident and Online"
  },
  "BCHM450": {
    "title": "Medical Biochemistry",
    "credits": 3,
    "prereqs": "BIOL 415 (may be taken concurrently) or CHEM 302 (may be taken concurrently)",
    "note": "3 hours lecture",
    "offered": "Resident"
  },
  "BCHM451": {
    "title": "Biochemistry I",
    "credits": 4,
    "prereqs": "BIOL 415 or (CHEM 302 and CHEM 321)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BCHM452": {
    "title": "Biochemistry II",
    "credits": 4,
    "prereqs": "BCHM 451",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BCHM455": {
    "title": "Biochemical and Molecular Techniques",
    "credits": 3,
    "prereqs": "BIOL 415",
    "offered": "Resident"
  },
  "BCHM495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "BCHM497": {
    "title": "Special Topics in Biochemistry",
    "credits": 1,
    "offered": "Resident"
  },
  "BCHM551": {
    "title": "Biochemistry",
    "credits": 4,
    "prereqs": "(BIOM 513 and BIOM 515) or (BIOM 523 and BIOM 524 and BIOM 525 and BIOM 526)",
    "offered": "Resident"
  },
  "BIBL104": {
    "title": "Survey of Old and New Testament",
    "credits": 4,
    "offered": "Resident and Online"
  },
  "BIBL105": {
    "title": "Old Testament Survey",
    "credits": 2,
    "offered": "Resident and Online"
  },
  "BIBL110": {
    "title": "New Testament Survey",
    "credits": 2,
    "offered": "Resident and Online"
  },
  "BIBL150": {
    "title": "Genesis",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "BIBL160": {
    "title": "Gospel of John",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "BIBL161": {
    "title": "Romans",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "BIBL162": {
    "title": "Revelation",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "BIBL163": {
    "title": "Hebrews",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "BIBL165": {
    "title": "Acts",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "BIBL205": {
    "title": "Old Testament Life and Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "BIBL210": {
    "title": "New Testament Life and Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "BIBL300": {
    "title": "Pentateuch",
    "credits": 3,
    "prereqs": "BIBL 360 and RLGN 301 and (BIBL 104 or BIBL 105)",
    "offered": "Online"
  },
  "BIBL310": {
    "title": "Old Testament Historical Books",
    "credits": 3,
    "prereqs": "BIBL 360 and RLGN 301 and (BIBL 104 or BIBL 105)",
    "offered": "Online"
  },
  "BIBL311": {
    "title": "Joshua thru Judges",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205)",
    "offered": "Resident"
  },
  "BIBL314": {
    "title": "Old Testament Poetical Books",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BIBL315": {
    "title": "Major Prophets",
    "credits": 3,
    "prereqs": "BIBL 360 and RLGN 301 and (BIBL 104 or BIBL 105)",
    "offered": "Online"
  },
  "BIBL316": {
    "title": "Isaiah",
    "credits": 3,
    "prereqs": "(BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 110) or (BIBL 105 and BIBL 210)",
    "offered": "Resident"
  },
  "BIBL317": {
    "title": "Minor Prophets",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205)",
    "offered": "Resident and Online"
  },
  "BIBL323": {
    "title": "John",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205) or BIBL 104",
    "offered": "Resident and Online"
  },
  "BIBL324": {
    "title": "Pastoral Epistles and Leadership Development",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205)",
    "offered": "Resident"
  },
  "BIBL325": {
    "title": "Gospels",
    "credits": 3,
    "prereqs": "BIBL 360 and RLGN 301 and (BIBL 104 or BIBL 110)",
    "offered": "Online"
  },
  "BIBL330": {
    "title": "Life of Christ",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 205 and BIBL 110)",
    "offered": "Resident"
  },
  "BIBL350": {
    "title": "Introduction to Biblical Interpretation",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205) or BIBL 104",
    "offered": "Resident"
  },
  "BIBL360": {
    "title": "Methodical Study of Scripture",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110 and RLGN 301) or (BIBL 104 and RLGN 301)",
    "offered": "Online"
  },
  "BIBL364": {
    "title": "Acts",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 205 and BIBL 110) or BIBL 104",
    "offered": "Resident and Online"
  },
  "BIBL365": {
    "title": "Pauline Epistles",
    "credits": 3,
    "prereqs": "BIBL 360 and RLGN 301 and (BIBL 104 or BIBL 110)",
    "offered": "Online"
  },
  "BIBL366": {
    "title": "General Epistles",
    "credits": 3,
    "prereqs": "BIBL 360 and RLGN 301 and (BIBL 104 or BIBL 110)",
    "offered": "Online"
  },
  "BIBL370": {
    "title": "Logos Bible Software",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "BIBL410": {
    "title": "Genesis",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205) or BIBL 104",
    "offered": "Resident and Online"
  },
  "BIBL425": {
    "title": "Romans",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205) or BIBL 104",
    "offered": "Resident and Online"
  },
  "BIBL430": {
    "title": "The History of Ancient Israel",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "BIBL431": {
    "title": "Israelology",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "BIBL432": {
    "title": "Messianic Prophecy",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "BIBL433": {
    "title": "The Jewish Temple in History and Prophecy",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "BIBL434": {
    "title": "General Studies in Israel Seminary",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "note": "This course is taught in the country of Israel. The student must register for the World of the Bible Study Tour online at: www.worldofthebible.com or by phone: (512) 396-3799.",
    "offered": "Resident and Online"
  },
  "BIBL450": {
    "title": "Daniel-Revelation",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205) or BIBL 104",
    "offered": "Resident and Online"
  },
  "BIBL460": {
    "title": "New Testament Theology",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "BIBL461": {
    "title": "Old Testament Theology",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "BIBL462": {
    "title": "The Old Testament in Its Ancient Contexts",
    "credits": 3,
    "prereqs": "((BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210))",
    "offered": "Resident"
  },
  "BIBL463": {
    "title": "The New Testament in Its Ancient Contexts",
    "credits": 3,
    "prereqs": "((BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 205 and BIBL 110))",
    "offered": "Resident"
  },
  "BIBL471": {
    "title": "Biblical Archaeology",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205) or BIBL 104",
    "note": "This course fulfills a Bible Background requirement.",
    "offered": "Resident and Online"
  },
  "BIBL472": {
    "title": "New Testament Backgrounds",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 205 and BIBL 110)",
    "offered": "Resident and Online"
  },
  "BIBL473": {
    "title": "Old Testament Backgrounds",
    "credits": 3,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 205 and BIBL 110)",
    "offered": "Resident and Online"
  },
  "BIBL480": {
    "title": "Hermeneutics",
    "credits": 3,
    "prereqs": "BIBL 350",
    "offered": "Resident"
  },
  "BIBL495": {
    "title": "Directed Research",
    "credits": 1,
    "prereqs": "(BIBL 105 and BIBL 110) or (BIBL 205 and BIBL 210) or (BIBL 105 and BIBL 210) or (BIBL 110 and BIBL 205)",
    "offered": "Resident"
  },
  "BIBL497": {
    "title": "Bible Seminar",
    "credits": 1,
    "offered": "Resident"
  },
  "BIBL499": {
    "title": "Bible Internship",
    "credits": 3,
    "prereqs": "(BIBL 350 or BIBL 360) and (THEO 350 or THEO 360)",
    "offered": "Resident and Online"
  },
  "BIBL700": {
    "title": "Introduction to Bible Exposition",
    "credits": 3,
    "offered": "Online"
  },
  "BIBL715": {
    "title": "Hermeneutics",
    "credits": 3,
    "prereqs": "BIBL 700",
    "offered": "Online"
  },
  "BIBL810": {
    "title": "Theology of the Gospel",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Available to DMIN students only",
    "offered": "Online"
  },
  "BIBL820": {
    "title": "The Theory and Practice of Biblical Theology",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Available to DMIN Students only",
    "offered": "Online"
  },
  "BIBL830": {
    "title": "The Bible and the Pastor (or Uses of Scripture in Pastoral Ministry)",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Available to DMIN Students only",
    "offered": "Online"
  },
  "BIBL900": {
    "title": "Hermeneutics and History of Interpretation",
    "credits": 3,
    "offered": "Resident"
  },
  "BIBL910": {
    "title": "Old Testament Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "BIBL915": {
    "title": "New Testament Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "BIBL925": {
    "title": "Theology of the Gospel",
    "credits": 3,
    "offered": "Resident"
  },
  "BIBL968": {
    "title": "Current Biblical and Theological Issues",
    "credits": 3,
    "offered": "Resident"
  },
  "BIBL987": {
    "title": "Research and Communication for Bible Exposition",
    "credits": 5,
    "prereqs": "BIBL 700 and BIBL 715 and OBST 800 and OBST 815 and OBST 830 and OBST 845 and OBST 860 and NBST 800 and NBST 815 and NBST 830 and NBST 845 and (NGRK 505 and NGRK 511 or NGRK 620 and NGRK 643 or NGRK 644 or NGRK 645 or NGRK 646) and (OTCL 505 and OTCL 511 or OTCL 640 and OTCL 643)",
    "offered": "Online"
  },
  "BIBL988": {
    "title": "Research Methodology for Bible Exposition",
    "credits": 5,
    "prereqs": "BIBL 987",
    "offered": "Online"
  },
  "BIBL989": {
    "title": "Dissertation Research and Writing",
    "credits": 5,
    "prereqs": "BIBL 988",
    "offered": "Online"
  },
  "BIBL990": {
    "title": "Dissertation Defense",
    "credits": 0,
    "prereqs": "BIBL 989",
    "offered": "Online"
  },
  "BIBL996": {
    "title": "Special Topics in Biblical Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "BIBL997": {
    "title": "Seminar in Biblical Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "BIOL101": {
    "title": "Principles of Biology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BIOL102": {
    "title": "Principles of Human Biology",
    "credits": 3,
    "note": "3 hours lecture",
    "offered": "Resident and Online"
  },
  "BIOL103": {
    "title": "Principles of Biology Laboratory",
    "credits": 1,
    "prereqs": "BIOL 101 (may be taken concurrently)",
    "note": "2 hours lab; BIOL 101 taken concurrently",
    "offered": "Resident and Online"
  },
  "BIOL104": {
    "title": "Principles of Human Biology Laboratory",
    "credits": 1,
    "prereqs": "BIOL 102 (may be taken concurrently)",
    "note": "2 hours lab",
    "offered": "Resident"
  },
  "BIOL110": {
    "title": "General Biology",
    "credits": 4
  },
  "BIOL125": {
    "title": "Animal Diversity and Conservation",
    "credits": 3,
    "offered": "Resident"
  },
  "BIOL203": {
    "title": "Introductory Microbiology",
    "credits": 4,
    "prereqs": "HLTH 202 or HLTH 222 or (BIOL 215 and BIOL 216)",
    "note": "3 hours lecture; 2 hours lab",
    "offered": "Resident"
  },
  "BIOL203L": {
    "title": "Introductory Microbiology Lab",
    "credits": 0,
    "prereqs": "BIOL 203 (may be taken concurrently)",
    "note": "BIOL 203 taken concurrently",
    "offered": "Resident"
  },
  "BIOL204": {
    "title": "Microbiology for Nursing Professionals",
    "credits": 4,
    "prereqs": "BIOL 215 and BIOL 216",
    "offered": "Online"
  },
  "BIOL213": {
    "title": "Human Anatomy and Physiology I",
    "credits": 3,
    "note": "May not be used for general education credit except in conjunction with BIOL 215.  (Formerly BIOL 211 lecture)",
    "offered": "Resident"
  },
  "BIOL214": {
    "title": "Human Anatomy and Physiology I Lab",
    "credits": 1,
    "prereqs": "BIOL 213 (may be taken concurrently) or BIOL 313 (may be taken concurrently)",
    "offered": "Resident"
  },
  "BIOL215": {
    "title": "Human Anatomy and Physiology II",
    "credits": 3,
    "prereqs": "BIOL 213",
    "note": "May not be used for general education credit except in conjunction with BIOL 213. (Formerly BIOL 212 Lecture)",
    "offered": "Resident"
  },
  "BIOL216": {
    "title": "Human Anatomy and Physiology II Lab",
    "credits": 1,
    "prereqs": "BIOL 214 and (BIOL 215 (may be taken concurrently) or BIOL 313 (may be taken concurrently))",
    "offered": "Resident"
  },
  "BIOL224": {
    "title": "General Biology I",
    "credits": 4,
    "prereqs": "Placement Score-Math with a score of 75 or SAT Section Math with a score of 530 or (pre2016 post1995)SAT Math with a score of 500 or ACT Composite with a score of 20 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 2XX or (BIOL 101 and BIOL 103) or BIOL 215",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL224L": {
    "title": "General Biology I Lab",
    "credits": 0,
    "prereqs": "(pre2016 post1995)SAT Math with a score of 500 or SAT Section Math with a score of 530 or ACT Composite with a score of 20 or Placement Score-Math with a score of 75 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 2XX or (BIOL 101 and BIOL 103) or BIOL 215 and BIOL 224 (may be taken concurrently)",
    "note": "BIOL 224 taken concurrently",
    "offered": "Resident"
  },
  "BIOL225": {
    "title": "General Biology II",
    "credits": 4,
    "prereqs": "BIOL 224",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL225L": {
    "title": "General Biology II Lab",
    "credits": 0,
    "prereqs": "BIOL 224 and BIOL 225 (may be taken concurrently)",
    "note": "BIOL 225 taken concurrently",
    "offered": "Resident"
  },
  "BIOL299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "BIOL301": {
    "title": "Genetics",
    "credits": 4,
    "prereqs": "(BIOL 225 and CHEM 122) or (CHEM 132 and CHEM 136)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL301L": {
    "title": "Genetics Lab",
    "credits": 0,
    "prereqs": "(BIOL 225 and CHEM 122) or (CHEM 132 and CHEM 136) or (BIOL 215 and BIOL 216 and BIOL 224 and CHEM 122) and BIOL 301 (may be taken concurrently)",
    "offered": "Resident"
  },
  "BIOL303": {
    "title": "Microbiology",
    "credits": 4,
    "prereqs": "BIOL 225 and (CHEM 122 or CHEM 132 and CHEM 136)",
    "note": "3 hours lecture; 4 hours lab",
    "offered": "Resident"
  },
  "BIOL305": {
    "title": "Parasitology",
    "credits": 4,
    "prereqs": "BIOL 225",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL307": {
    "title": "Plant Physiology",
    "credits": 4,
    "prereqs": "BIOL 225 and CHEM 301",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL310": {
    "title": "Ecology",
    "credits": 4,
    "prereqs": "BIOL 225 and (MATH 201 or MATH 211 or BUSI 230)",
    "note": "Offered fall semester; 3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL313": {
    "title": "Clinical Human Anatomy",
    "credits": 3,
    "prereqs": "BIOL 225",
    "note": "3 hours lecture",
    "offered": "Resident"
  },
  "BIOL316": {
    "title": "Human Biological Variation",
    "credits": 3,
    "prereqs": "BIOL 215 or BIOL 313",
    "note": "3 hours lecture",
    "offered": "Resident"
  },
  "BIOL317": {
    "title": "Botany",
    "credits": 4,
    "prereqs": "BIOL 224",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL320": {
    "title": "Introduction to Entomology",
    "credits": 4,
    "prereqs": "BIOL 225 or (BIOL 215 and BIOL 216)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL321": {
    "title": "Comparative Anatomy of the Vertebrates",
    "credits": 4,
    "prereqs": "BIOL 225 or (BIOL 215 and BIOL 216)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL330": {
    "title": "Histology",
    "credits": 4,
    "prereqs": "BIOL 225 or (BIOL 215 and BIOL 216)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL361": {
    "title": "Forensic DNA Analysis",
    "credits": 3,
    "prereqs": "CJUS 200 or BIOL 225 or CHEM 122",
    "note": "3 hours lecture",
    "offered": "Resident"
  },
  "BIOL371": {
    "title": "Vertebrate Paleontology",
    "credits": 3,
    "prereqs": "BIOL 225 or (BIOL 215 and BIOL 216)",
    "note": "3 hours lecture",
    "offered": "Resident"
  },
  "BIOL385": {
    "title": "Advanced Human Physiology",
    "credits": 3,
    "prereqs": "BIOL 225",
    "note": "3 hours lecture",
    "offered": "Resident"
  },
  "BIOL399": {
    "title": "Laboratory Assisting",
    "credits": 0
  },
  "BIOL400": {
    "title": "Biology Seminar",
    "credits": 1,
    "prereqs": "BIOL 310 or BIOL 301",
    "offered": "Resident"
  },
  "BIOL402": {
    "title": "Forensic Science Seminar",
    "credits": 1,
    "prereqs": "BIOL 361",
    "offered": "Resident"
  },
  "BIOL403": {
    "title": "Embryology",
    "credits": 4,
    "prereqs": "BIOL 415",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL408": {
    "title": "Animal Behavior",
    "credits": 4,
    "prereqs": "BIOL 225",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL410": {
    "title": "Environmental Biology",
    "credits": 4,
    "prereqs": "BIOL 310 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL415": {
    "title": "Cell Biology",
    "credits": 4,
    "prereqs": "BIOL 301 and CHEM 301 (may be taken concurrently) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL415L": {
    "title": "Cell Biology Lab",
    "credits": 0,
    "prereqs": "BIOL 415 (may be taken concurrently)",
    "note": "BIOL 415 taken concurrently",
    "offered": "Resident"
  },
  "BIOL416": {
    "title": "Comparative Animal Physiology",
    "credits": 4,
    "prereqs": "BIOL 225 and (CHEM 122 or CHEM 132 and CHEM 136) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL418": {
    "title": "Vertebrate Natural History",
    "credits": 4,
    "prereqs": "BIOL 225",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL419": {
    "title": "Ornithology",
    "credits": 4,
    "prereqs": "BIOL 225",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL420": {
    "title": "Immunology",
    "credits": 4,
    "prereqs": "BIOL 303 and BIOL 301",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "BIOL420L": {
    "title": "Immunology Lab",
    "credits": 0,
    "prereqs": "BIOL 420 (may be taken concurrently)",
    "note": "BIOL 420 taken currently",
    "offered": "Resident"
  },
  "BIOL421": {
    "title": "Forensic Entomology",
    "credits": 3,
    "prereqs": "BIOL 225 or CJUS 330 or CJUS 340",
    "note": "3 hours lecture; 1 hours lab",
    "offered": "Resident"
  },
  "BIOL435": {
    "title": "Neurobiology",
    "credits": 3,
    "prereqs": "BIOL 301 or BIOL 313 or BIOL 385",
    "note": "3 hours lecture",
    "offered": "Resident"
  },
  "BIOL455": {
    "title": "Molecular Techniques",
    "credits": 3,
    "prereqs": "BIOL 415",
    "note": "1 hours lecture; 5 hours lab",
    "offered": "Resident"
  },
  "BIOL462": {
    "title": "Forensic DNA Analysis Laboratory",
    "credits": 2,
    "prereqs": "(BIOL 301 or BIOL 361 or CHEM 321 or CJUS 330 or CJUS 340) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "BIOL465": {
    "title": "Trace Evidence",
    "credits": 2,
    "prereqs": "BIOL 225 or CHEM 122 or CJUS 230",
    "offered": "Resident"
  },
  "BIOL495": {
    "title": "Special Problems in Biology",
    "credits": 1,
    "offered": "Resident"
  },
  "BIOL497": {
    "title": "Special Topics in Biology",
    "credits": 1,
    "offered": "Resident"
  },
  "BIOL499": {
    "title": "Internship",
    "credits": 1,
    "prereqs": "BIOL 224 and BIOL 225",
    "offered": "Resident"
  },
  "BIOL515": {
    "title": "Cell Biology",
    "credits": 4
  },
  "BIOL518": {
    "title": "Vertebrate Natural History",
    "credits": 4
  },
  "BIOL595": {
    "title": "Special Problems in Biology",
    "credits": 1,
    "offered": "Resident"
  },
  "BIOL597": {
    "title": "Special Topics in Biology",
    "credits": 3
  },
  "BIOM500": {
    "title": "Introduction to Biomedical Sciences",
    "credits": 3,
    "offered": "Online"
  },
  "BIOM503": {
    "title": "Human Genetics",
    "credits": 3,
    "prereqs": "(BIOM 513 and BIOM 515) or (BIOM 523 and BIOM 524 and BIOM 525 and BIOM 526)",
    "offered": "Resident and Online"
  },
  "BIOM513": {
    "title": "Human Gross Anatomy",
    "credits": 5,
    "offered": "Resident"
  },
  "BIOM515": {
    "title": "Human Physiology",
    "credits": 5,
    "offered": "Resident"
  },
  "BIOM523": {
    "title": "Human Gross Anatomy Lecture",
    "credits": 4,
    "offered": "Online"
  },
  "BIOM524": {
    "title": "Human Anatomy Cadaver Lab",
    "credits": 1,
    "prereqs": "BIOM 523",
    "offered": "Resident and Online"
  },
  "BIOM525": {
    "title": "Human Physiology Lecture",
    "credits": 4,
    "offered": "Online"
  },
  "BIOM526": {
    "title": "Human Physiology Lab",
    "credits": 1,
    "prereqs": "BIOM 525",
    "offered": "Resident and Online"
  },
  "BIOM600": {
    "title": "Biomedical Ethics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BIOM610": {
    "title": "Human Neurology and Neuroanatomy",
    "credits": 3,
    "prereqs": "(BIOM 513 and BIOM 515) or (BIOM 523 and BIOM 524 and BIOM 525 and BIOM 526)",
    "offered": "Resident and Online"
  },
  "BIOM613": {
    "title": "Human Gross Anatomy II",
    "credits": 3,
    "prereqs": "BIOM 513",
    "offered": "Resident"
  },
  "BIOM615": {
    "title": "Advanced Cell Biology",
    "credits": 4,
    "prereqs": "(BIOM 513 and BIOM 515) or (BIOM 523 and BIOM 524)",
    "offered": "Resident and Online"
  },
  "BIOM620": {
    "title": "Advanced Immunology",
    "credits": 3,
    "prereqs": "(BIOM 513 and BIOM 515) or (BIOM 523 and BIOM 524 and BIOM 525 and BIOM 526)",
    "offered": "Resident and Online"
  },
  "BIOM623": {
    "title": "Human Developmental Biology",
    "credits": 3,
    "prereqs": "BIOM 513 and BIOM 515",
    "offered": "Resident"
  },
  "BIOM625": {
    "title": "Microbial Pathogenesis and Virology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BIOM630": {
    "title": "Principles of Pathology",
    "credits": 3,
    "prereqs": "(BIOM 513 and BIOM 515) or (BIOM 523 and BIOM 524 and BIOM 525 and BIOM 526)",
    "offered": "Resident and Online"
  },
  "BIOM633": {
    "title": "Advanced Histology",
    "credits": 4,
    "prereqs": "BIOM 513",
    "offered": "Resident"
  },
  "BIOM700": {
    "title": "Anatomy &amp; Cell Biology Seminar",
    "credits": 1,
    "offered": "Resident"
  },
  "BIOM710": {
    "title": "Anatomy &amp; Cell Biology Teaching Practicum",
    "credits": 1,
    "offered": "Resident"
  },
  "BIOM750": {
    "title": "Research Rotation",
    "credits": 1,
    "offered": "Resident"
  },
  "BIOM889": {
    "title": "Dissertation Research",
    "credits": 1,
    "prereqs": "BIOM 750",
    "offered": "Resident"
  },
  "BIOM890": {
    "title": "Dissertation Defense",
    "credits": 1,
    "prereqs": "BIOM 889",
    "offered": "Resident"
  },
  "BMAL500": {
    "title": "Organizational Behavior",
    "credits": 3,
    "prereqs": "ACCT 511 or BMAL 590 or BUSI 561 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3",
    "offered": "Online"
  },
  "BMAL501": {
    "title": "Strategic Leadership and Management",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL504": {
    "title": "Leading Organizational Change",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL530": {
    "title": "Accounting for Non-financial Managers",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL550": {
    "title": "Effective Executive Communication",
    "credits": 3,
    "prereqs": "(BMAL 590 or BMAL 530) and (BMAL 560 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3)",
    "offered": "Online"
  },
  "BMAL560": {
    "title": "Corporate Responsibility",
    "credits": 3,
    "prereqs": "BMAL 501 or BUSI 561",
    "offered": "Online"
  },
  "BMAL570": {
    "title": "Ethical Leadership",
    "credits": 3,
    "prereqs": "BMAL 504 and BMAL 530 and BMAL 550",
    "offered": "Online"
  },
  "BMAL590": {
    "title": "Business Common Professional Components",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BMAL602": {
    "title": "Non-profit Management",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL603": {
    "title": "Entrepreneurship",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL604": {
    "title": "Managing and Leading Across Cultures",
    "credits": 3,
    "prereqs": "BMAL 501",
    "offered": "Online"
  },
  "BMAL620": {
    "title": "Nonprofit Leadership and Board Governance",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL621": {
    "title": "Fundraising and Development Strategies for Nonprofit Organizations",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL622": {
    "title": "International NGOs",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL630": {
    "title": "Accounting for Nonprofits",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL631": {
    "title": "Financial Management in Nonprofit Organizations",
    "credits": 3,
    "prereqs": "BMAL 630",
    "offered": "Online"
  },
  "BMAL632": {
    "title": "Nonprofits and Legal Issues",
    "credits": 3,
    "prereqs": "BMAL 630",
    "offered": "Online"
  },
  "BMAL633": {
    "title": "Nonprofit Financial Planning",
    "credits": 3,
    "prereqs": "BMAL 630",
    "offered": "Online"
  },
  "BMAL640": {
    "title": "Entrepreneurial Innovation in the Nonprofit Organization",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL690": {
    "title": "Capstone: Strategic Planning and Ethics in Nonprofit Organizations",
    "credits": 3,
    "prereqs": "BMAL 602 and BMAL 620 and BMAL 621 and BMAL 622 and BMAL 630 and WRIT 601",
    "offered": "Online"
  },
  "BMAL700": {
    "title": "DSL Program Orientation",
    "credits": 3,
    "offered": "Online"
  },
  "BMAL702": {
    "title": "Leadership Theory",
    "credits": 3,
    "prereqs": "BMAL 700 or BUSI 702",
    "offered": "Online"
  },
  "BMAL703": {
    "title": "Managing the Contemporary Organization",
    "credits": 3,
    "prereqs": "BMAL 700 or BUSI 702",
    "offered": "Online"
  },
  "BMAL704": {
    "title": "Leading Organizational Change",
    "credits": 3,
    "prereqs": "BMAL 700 or BUSI 702",
    "offered": "Online"
  },
  "BMAL706": {
    "title": "Strategic Global Leadership",
    "credits": 3,
    "prereqs": "BMAL 700 or EDUC 710",
    "offered": "Online"
  },
  "BMAL710": {
    "title": "Understanding the Organization",
    "credits": 3,
    "prereqs": "BMAL 700 or BUSI 702",
    "offered": "Online"
  },
  "BMAL714": {
    "title": "Risk Management Process and Practice",
    "credits": 3,
    "prereqs": "BMAL 700 or BUSI 702",
    "offered": "Online"
  },
  "BMAL716": {
    "title": "Research Theory and Planning",
    "credits": 3,
    "prereqs": "BMAL 700",
    "offered": "Online"
  },
  "BMAL720": {
    "title": "Leveraging Data for Decision Making",
    "credits": 3,
    "prereqs": "BMAL 700 or BUSI 702",
    "offered": "Online"
  },
  "BMAL727": {
    "title": "Leading Effective Teams",
    "credits": 3,
    "prereqs": "BMAL 700 or BUSI 702",
    "offered": "Online"
  },
  "BMAL755": {
    "title": "Coaching Theory &amp; Practice",
    "credits": 3,
    "prereqs": "BMAL 700 or BUSI 702",
    "offered": "Online"
  },
  "BMAL770": {
    "title": "Ethical Leadership",
    "credits": 3,
    "prereqs": "BMAL 700 or BUSI 702",
    "offered": "Online"
  },
  "BMAL780": {
    "title": "Strategic Leadership in the 21st Century",
    "credits": 3,
    "prereqs": "BMAL 700",
    "offered": "Online"
  },
  "BMAL785": {
    "title": "DRP Research Concept",
    "credits": 3,
    "prereqs": "BMAL 700 and BMAL 702 and BMAL 703 and BMAL 704 and BMAL 710 and BMAL 714 and BMAL 716 and BMAL 720 and BMAL 727 and BMAL 770 and BMAL 780",
    "offered": "Online"
  },
  "BMAL887": {
    "title": "Doctoral Research Project I",
    "credits": 4,
    "prereqs": "BMAL 785",
    "offered": "Online"
  },
  "BMAL888": {
    "title": "Doctoral Research Project II",
    "credits": 4,
    "prereqs": "BMAL 887",
    "offered": "Online"
  },
  "BMAL889": {
    "title": "Doctoral Research Project III",
    "credits": 4,
    "prereqs": "BMAL 888",
    "offered": "Online"
  },
  "BMAL890": {
    "title": "Doctoral Research Project IV",
    "credits": 0,
    "prereqs": "BMAL 889",
    "offered": "Online"
  },
  "BMIS501": {
    "title": "Executive Leadership and Management",
    "credits": 3,
    "offered": "Online"
  },
  "BMIS510": {
    "title": "Enterprise Models",
    "credits": 3,
    "prereqs": "Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3 and Obj-Oriented Programming Req with a score of 3",
    "offered": "Online"
  },
  "BMIS520": {
    "title": "IT Infrastructure",
    "credits": 3,
    "prereqs": "(Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3 and Obj-Oriented Programming Req with a score of 3) or CSIS 505",
    "offered": "Resident and Online"
  },
  "BMIS530": {
    "title": "Systems Analysis, Modeling, and Design",
    "credits": 3,
    "prereqs": "(BMIS 520 and Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3 and Obj-Oriented Programming Req with a score of 3) or (BMIS 520 and Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3 and Obj-Oriented Programming Req with a score of 3 and Adv Obj-Oriented Program Req with a score of 3 and Busi Data Comm Sys / Netwk Req with a score of 3) or (INFO 535 and Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3 and Prin of Human Bio / Human A&P with a score of 3) or CSIS 505",
    "offered": "Resident and Online"
  },
  "BMIS570": {
    "title": "Ethics and Legal Issues",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BMIS580": {
    "title": "Human Computer Interaction and Emerging Technologies",
    "credits": 3,
    "prereqs": "BMIS 510 and BMIS 520",
    "offered": "Online"
  },
  "BMIS601": {
    "title": "Decision Making and Executive Information Systems",
    "credits": 3,
    "prereqs": "BMIS 530 and BMIS 510 and BMIS 520",
    "offered": "Online"
  },
  "BMIS603": {
    "title": "Business Simulation and Modeling",
    "credits": 3,
    "prereqs": "BMIS 601 and BMIS 510 and BMIS 520 and BMIS 530",
    "offered": "Online"
  },
  "BMIS650": {
    "title": "Operations Management",
    "credits": 3,
    "offered": "Online"
  },
  "BMIS662": {
    "title": "Telecommunications and Network Security",
    "credits": 3,
    "prereqs": "BMIS 520 and BMIS 510",
    "offered": "Resident and Online"
  },
  "BMIS663": {
    "title": "Secure Enterprise Design and Development",
    "credits": 3,
    "prereqs": "BMIS 530 and BMIS 510 and BMIS 520",
    "offered": "Online"
  },
  "BMIS664": {
    "title": "Information Forensics, Compliance and Risk Management",
    "credits": 3,
    "prereqs": "BMIS 663 and BMIS 510 and BMIS 520",
    "offered": "Online"
  },
  "BMIS665": {
    "title": "Information Operations and Security",
    "credits": 3,
    "prereqs": "BMIS 662 and BMIS 510 and BMIS 520 and BMIS 530",
    "offered": "Online"
  },
  "BMIS680": {
    "title": "Advanced IT Project Management I",
    "credits": 3,
    "prereqs": "BMIS 650 or (INFO 505 and Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3)",
    "offered": "Online"
  },
  "BMIS681": {
    "title": "Advanced IT Project Management II",
    "credits": 3,
    "offered": "Online"
  },
  "BMIS690": {
    "title": "Integrated Capstone",
    "credits": 3,
    "prereqs": "(BMIS 510 and BMIS 520 and BMIS 530 and BMIS 603 and BMIS 681) or (BMIS 510 and BMIS 520 and BMIS 530 and BMIS 664 and BMIS 665)",
    "offered": "Online"
  },
  "BUSI101": {
    "title": "Introduction to Business",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI105": {
    "title": "The Business Experience",
    "credits": 3,
    "offered": "Resident"
  },
  "BUSI197": {
    "title": "Kingdom Advisors Seminar",
    "credits": 0,
    "offered": "Resident"
  },
  "BUSI200": {
    "title": "Enterprise Business Applications and Communications",
    "credits": 3
  },
  "BUSI201": {
    "title": "Intermediate Business Computer Applications",
    "credits": 3,
    "prereqs": "INFT 110 or INFT 111 or (INFT Excel Test with a score of 5 and INFT PowerPoint Test with a score of 5 and INFT Word Test with a score of 5)",
    "offered": "Resident and Online"
  },
  "BUSI205": {
    "title": "Introduction to Business Research Methods",
    "credits": 3,
    "prereqs": "BUSI 201 or BMIT 201 and (INQR 101 or Inquiry Assessment with a score of 80)",
    "offered": "Resident and Online"
  },
  "BUSI223": {
    "title": "Personal Finance",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI230": {
    "title": "Introduction to Probability and Statistics",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 075 or (CLST 103 and Assessment - Mathematics with a score of 23 and Assessment - Mathematics II with a score of 15) or MATH 105 or MATH 108 or MATH 110 or MATH 115 or MATH 121 or MATH 126 or MATH 128 or MATH 131 or MATH 1XX or MATH 2XX",
    "offered": "Resident and Online"
  },
  "BUSI240": {
    "title": "Organizational Behavior I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI297": {
    "title": "Seminar",
    "credits": 1,
    "offered": "Resident"
  },
  "BUSI299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "BUSI300": {
    "title": "Business Communications",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI301": {
    "title": "Business Law",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI302": {
    "title": "Legal and Ethical Issues in Healthcare",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI303": {
    "title": "International Business",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI304": {
    "title": "Introduction to Health Policy",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI310": {
    "title": "Principles of Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI311": {
    "title": "Introduction to Healthcare Administration",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI313": {
    "title": "Foundations of Project Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI320": {
    "title": "Corporate Finance",
    "credits": 3,
    "prereqs": "ACCT 212",
    "offered": "Resident and Online"
  },
  "BUSI321": {
    "title": "Money and the Financial System",
    "credits": 3,
    "prereqs": "ECNC 214 or ECON 214",
    "offered": "Resident and Online"
  },
  "BUSI323": {
    "title": "Financial Analysis and Management in Healthcare",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI330": {
    "title": "Principles of Marketing",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI331": {
    "title": "Marketing Research",
    "credits": 3,
    "prereqs": "BUSI 330 and (MATH 201 or BUSI 230)",
    "offered": "Resident and Online"
  },
  "BUSI332": {
    "title": "Consumer Behavior",
    "credits": 3,
    "prereqs": "BUSI 330",
    "offered": "Resident and Online"
  },
  "BUSI333": {
    "title": "Business Analytics I",
    "credits": 3,
    "prereqs": "BUSI 201 and (BUSI 230 or MATH 201)",
    "offered": "Resident and Online"
  },
  "BUSI334": {
    "title": "Business Analytics II",
    "credits": 3,
    "prereqs": "BUSI 333",
    "offered": "Resident and Online"
  },
  "BUSI335": {
    "title": "Leading Change",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI336": {
    "title": "Introduction to Entrepreneurship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI338": {
    "title": "Developing Entrepreneurial Opportunities",
    "credits": 3,
    "prereqs": "BUSI 336",
    "offered": "Resident and Online"
  },
  "BUSI340": {
    "title": "Organizational Behavior I",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI341": {
    "title": "Database Concepts for Analytics",
    "credits": 3,
    "prereqs": "BUSI 333",
    "offered": "Resident and Online"
  },
  "BUSI342": {
    "title": "Human Resource Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI343": {
    "title": "Employee and Labor Relations",
    "credits": 3,
    "prereqs": "BUSI 342",
    "offered": "Resident and Online"
  },
  "BUSI344": {
    "title": "Management of Human Resources and Health Professionals",
    "credits": 3,
    "prereqs": "BUSI 302 or (BUSI 304 and BUSI 311)",
    "offered": "Resident and Online"
  },
  "BUSI345": {
    "title": "Leadership Theory and Practices",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI350": {
    "title": "Business Information Processing",
    "credits": 3
  },
  "BUSI351": {
    "title": "System Analy/Design Comp Info",
    "credits": 3
  },
  "BUSI352": {
    "title": "Financial Planning",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI353": {
    "title": "Retirement Savings and Income Planning",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI354": {
    "title": "Estate Planning",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI360": {
    "title": "Contemporary Issues in International Business",
    "credits": 3,
    "prereqs": "BUSI 303",
    "offered": "Resident and Online"
  },
  "BUSI365": {
    "title": "Global Industries and Operations",
    "credits": 3,
    "prereqs": "BUSI 303",
    "offered": "Resident and Online"
  },
  "BUSI370": {
    "title": "Dynamics of the American Automotive Dealership Industry",
    "credits": 3,
    "prereqs": "ACCT 211",
    "offered": "Resident and Online"
  },
  "BUSI371": {
    "title": "Supply Chain Management",
    "credits": 3,
    "offered": "Resident"
  },
  "BUSI372": {
    "title": "Marketing and Sales",
    "credits": 3,
    "prereqs": "BUSI 370",
    "offered": "Resident and Online"
  },
  "BUSI376": {
    "title": "Legal, Finance, and Insurance",
    "credits": 3,
    "prereqs": "BUSI 301 and BUSI 370",
    "offered": "Resident and Online"
  },
  "BUSI380": {
    "title": "Principles of Real Estate",
    "credits": 3,
    "prereqs": "BUSI 320",
    "offered": "Resident and Online"
  },
  "BUSI390": {
    "title": "Business Common Professional Components",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI397": {
    "title": "Construction Project Supervision Lab",
    "credits": 1,
    "prereqs": "CRFT 101",
    "offered": "Resident"
  },
  "BUSI400": {
    "title": "Strategic Planning/Business Policy",
    "credits": 3,
    "prereqs": "((BUSI 205 or Research Methods-BUS230/MAT201 with a score of 5) and BUSI 320 )",
    "note": "Resident: BUSI 205 will be waived for students on Degree Completion Plans prior to the catalog year of 2022-23 that have already taken BUSI 230 or MATH 201",
    "offered": "Resident and Online"
  },
  "BUSI405": {
    "title": "Business and Economic Forecasting",
    "credits": 3,
    "prereqs": "MATH 201 or BUSI 230",
    "offered": "Resident and Online"
  },
  "BUSI409": {
    "title": "Non-Profit Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI411": {
    "title": "Operations Management",
    "credits": 3,
    "prereqs": "((BUSI 310 or BUSI 311) and (BUSI 205 or Research Methods-BUS230/MAT201 with a score of 5) and ACCT 212 and BUSI 201 )",
    "note": "BUSI 205 will be waived for students on Degree Completion Plans prior to the catalog year of 2022-23 that have already taken BUSI 230 or MATH 201",
    "offered": "Resident and Online"
  },
  "BUSI414": {
    "title": "Project Management I",
    "credits": 3,
    "prereqs": "BUSI 313",
    "offered": "Resident and Online"
  },
  "BUSI415": {
    "title": "Project Management II",
    "credits": 3,
    "prereqs": "BUSI 313",
    "offered": "Resident and Online"
  },
  "BUSI416": {
    "title": "Leading Global Projects",
    "credits": 3,
    "prereqs": "BUSI 313",
    "offered": "Resident and Online"
  },
  "BUSI417": {
    "title": "Studies in Information Security",
    "credits": 3
  },
  "BUSI418": {
    "title": "Research and Evidence Based Practice in Healthcare",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI419": {
    "title": "Management of Quality Improvement and Outcomes",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI420": {
    "title": "Investments",
    "credits": 3,
    "prereqs": "BUSI 320",
    "offered": "Resident and Online"
  },
  "BUSI421": {
    "title": "Insurance Planning/Risk Management/Employee Benefits",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI422": {
    "title": "Real Estate",
    "credits": 3,
    "prereqs": "BUSI 301 and BUSI 320",
    "offered": "Resident and Online"
  },
  "BUSI423": {
    "title": "Franchising",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI424": {
    "title": "E-Commerce",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI425": {
    "title": "Family Business Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI427": {
    "title": "Team Dynamics",
    "credits": 3,
    "prereqs": "BUSI 240 or BUSI 340",
    "offered": "Online"
  },
  "BUSI428": {
    "title": "Strategic Management and Marketing in Healthcare",
    "credits": 3,
    "prereqs": "BUSI 344 and BUSI 418",
    "offered": "Resident and Online"
  },
  "BUSI429": {
    "title": "Healthcare Economics",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI430": {
    "title": "Promotion Strategy",
    "credits": 3,
    "prereqs": "BUSI 330",
    "offered": "Resident and Online"
  },
  "BUSI431": {
    "title": "Sales Management and Professional Selling",
    "credits": 3,
    "prereqs": "BUSI 330",
    "offered": "Resident and Online"
  },
  "BUSI432": {
    "title": "Retail Management",
    "credits": 3
  },
  "BUSI433": {
    "title": "Marketing Management",
    "credits": 3,
    "prereqs": "BUSI 331",
    "offered": "Online"
  },
  "BUSI434": {
    "title": "International Business",
    "credits": 3
  },
  "BUSI435": {
    "title": "Small Business Entrepreneurship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI436": {
    "title": "Digital Marketing in a Virtual World",
    "credits": 3,
    "prereqs": "BUSI 330",
    "offered": "Resident and Online"
  },
  "BUSI437": {
    "title": "Global Marketing",
    "credits": 3,
    "prereqs": "BUSI 330",
    "offered": "Online"
  },
  "BUSI438": {
    "title": "Marketing Brand Management",
    "credits": 3,
    "prereqs": "BUSI 330",
    "offered": "Online"
  },
  "BUSI439": {
    "title": "Conversion and Optimization",
    "credits": 3,
    "prereqs": "BUSI 436",
    "offered": "Resident and Online"
  },
  "BUSI440": {
    "title": "Compensation Management",
    "credits": 3,
    "prereqs": "BUSI 342",
    "offered": "Resident and Online"
  },
  "BUSI442": {
    "title": "Customer Retention Through Digital Marketing",
    "credits": 3,
    "prereqs": "BUSI 436",
    "offered": "Resident and Online"
  },
  "BUSI443": {
    "title": "Workforce Planning and Employment",
    "credits": 3,
    "prereqs": "BUSI 342",
    "offered": "Resident and Online"
  },
  "BUSI444": {
    "title": "Human Resource Development",
    "credits": 3,
    "prereqs": "BUSI 342",
    "offered": "Resident and Online"
  },
  "BUSI446": {
    "title": "Retailing and Category Management",
    "credits": 3,
    "prereqs": "BUSI 330",
    "offered": "Resident and Online"
  },
  "BUSI447": {
    "title": "Digital Marketing Analytics",
    "credits": 3,
    "prereqs": "BUSI 331",
    "offered": "Resident and Online"
  },
  "BUSI450": {
    "title": "Database Management Systems",
    "credits": 3
  },
  "BUSI453": {
    "title": "Applied Marketing Analysis",
    "credits": 3,
    "prereqs": "BUSI 447 or BUSI 452",
    "offered": "Resident and Online"
  },
  "BUSI454": {
    "title": "Practical Analytics",
    "credits": 3,
    "prereqs": "BUSI 334 and BUSI 341",
    "offered": "Resident and Online"
  },
  "BUSI455": {
    "title": "Conflict Resolution and Negotiation",
    "credits": 3,
    "prereqs": "BUSI 310",
    "offered": "Resident and Online"
  },
  "BUSI456": {
    "title": "Growth Enterprise: Strategy and Planning",
    "credits": 3,
    "prereqs": "ACCT 212 and BUSI 336",
    "offered": "Resident and Online"
  },
  "BUSI458": {
    "title": "Innovating into Industries and Markets",
    "credits": 3,
    "prereqs": "BUSI 336 and BUSI 338 and BUSI 456",
    "offered": "Resident and Online"
  },
  "BUSI464": {
    "title": "International Market Integration and Trade Agreements",
    "credits": 3,
    "prereqs": "BUSI 303",
    "offered": "Resident and Online"
  },
  "BUSI465": {
    "title": "Export Management Strategy",
    "credits": 3,
    "prereqs": "BUSI 303",
    "offered": "Resident and Online"
  },
  "BUSI471": {
    "title": "Supply Chain Technology and Analytics",
    "credits": 3,
    "offered": "Resident"
  },
  "BUSI472": {
    "title": "Organizational Ethics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI473": {
    "title": "Advanced Supply Chain Application and Policy",
    "credits": 3,
    "offered": "Resident"
  },
  "BUSI474": {
    "title": "Fixed Operations",
    "credits": 3,
    "prereqs": "ACCT 212 and BUSI 370",
    "offered": "Resident and Online"
  },
  "BUSI476": {
    "title": "Variable Operations",
    "credits": 3,
    "prereqs": "BUSI 370 and ACCT 212",
    "offered": "Resident and Online"
  },
  "BUSI477": {
    "title": "Humanitarian Affairs",
    "credits": 3,
    "offered": "Resident"
  },
  "BUSI478": {
    "title": "Leadership Skills for Franchise Owner",
    "credits": 3,
    "prereqs": "BUSI 372 and BUSI 474 and BUSI 476",
    "offered": "Resident and Online"
  },
  "BUSI480": {
    "title": "Principles of Property Management",
    "credits": 3,
    "prereqs": "BUSI 380",
    "offered": "Online"
  },
  "BUSI481": {
    "title": "Real Estate Investment Analysis",
    "credits": 3,
    "prereqs": "BUSI 380",
    "offered": "Online"
  },
  "BUSI482": {
    "title": "Real Estate Valuation",
    "credits": 3,
    "prereqs": "BUSI 380",
    "offered": "Online"
  },
  "BUSI487": {
    "title": "Humanitarian Aid Internship",
    "credits": 3,
    "offered": "Resident"
  },
  "BUSI489": {
    "title": "Capstone in Financial Planning",
    "credits": 3,
    "prereqs": "BUSI 352 and BUSI 320 and BUSI 354 and BUSI 420 and BUSI 421 and ACCT 401",
    "offered": "Resident and Online"
  },
  "BUSI490": {
    "title": "Capstone",
    "credits": 3,
    "prereqs": "((RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80) and (BUSI 205 or Research Methods-BUS230/MAT201 with a score of 5) and BUSI 320 )",
    "note": "BUSI 205 will be waived for students on Degree Completion Plans prior to the catalog year of 2022-23 that have already taken BUSI 230 or MATH 201",
    "offered": "Resident"
  },
  "BUSI493": {
    "title": "Entrepreneur Internship",
    "credits": 3,
    "prereqs": "ACCT 209 and BUSI 336",
    "offered": "Resident"
  },
  "BUSI494": {
    "title": "Healthcare Administration Capstone",
    "credits": 3,
    "prereqs": "BUSI 323 and BUSI 428 and HLTH 485",
    "offered": "Online"
  },
  "BUSI495": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "BUSI497": {
    "title": "Special Topics in Business",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI498": {
    "title": "Business Practicum",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI499": {
    "title": "Business Internship",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "BUSI501": {
    "title": "Executive Leadership and Management",
    "credits": 3,
    "prereqs": "BMAL 500 or BUSI 646",
    "offered": "Online"
  },
  "BUSI502": {
    "title": "Servant Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI503": {
    "title": "Leadership Theory",
    "credits": 3,
    "prereqs": "BUSI 502",
    "offered": "Resident and Online"
  },
  "BUSI504": {
    "title": "Leading Organizational Change",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI505": {
    "title": "Healthcare Informatics",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI506": {
    "title": "Legal and Ethical Issues for Health Professionals",
    "credits": 3,
    "prereqs": "BUSI 511",
    "offered": "Online"
  },
  "BUSI508": {
    "title": "Career Development in Healthcare Administration",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI510": {
    "title": "Organizational Behavior in Health Systems",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI511": {
    "title": "Healthcare Administration",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI512": {
    "title": "Managerial Information Technology",
    "credits": 3
  },
  "BUSI520": {
    "title": "Strategic Marketing Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI523": {
    "title": "Financial Analysis and Decision Making in Healthcare",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI528": {
    "title": "Strategic Management and Marketing for Health Professionals",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI530": {
    "title": "Managerial Finance",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI532": {
    "title": "Advanced Financial Statement Analysis",
    "credits": 3,
    "prereqs": "Financial Accounting with a score of 3 and Managerial Accounting with a score of 3 and Corporate Finance with a score of 3 and (Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or BMAL 590)",
    "offered": "Online"
  },
  "BUSI534": {
    "title": "Business Valuation",
    "credits": 3,
    "prereqs": "Financial Accounting with a score of 3 and Managerial Accounting with a score of 3 and Corporate Finance with a score of 3 and (Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or BMAL 590)",
    "offered": "Online"
  },
  "BUSI535": {
    "title": "Biblical Financial Planning",
    "credits": 3,
    "prereqs": "BUSI 532 and BUSI 534 and BUSI 536",
    "offered": "Resident and Online"
  },
  "BUSI536": {
    "title": "Mergers &amp; Acquisitions",
    "credits": 3,
    "prereqs": "Financial Accounting with a score of 3 and Managerial Accounting with a score of 3 and Corporate Finance with a score of 3 and (Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or BMAL 590)",
    "offered": "Online"
  },
  "BUSI538": {
    "title": "Investments and Derivatives",
    "credits": 3,
    "prereqs": "Financial Accounting with a score of 3 and Managerial Accounting with a score of 3 and Corporate Finance with a score of 3 and (Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or BMAL 590)",
    "offered": "Resident and Online"
  },
  "BUSI561": {
    "title": "Legal Issues in Business",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI570": {
    "title": "Ethical Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI600": {
    "title": "Business Research Methods",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI601": {
    "title": "Accounting for Decision Making",
    "credits": 3,
    "prereqs": "BUSI 600 or ACCT 531 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "BUSI602": {
    "title": "Non-Profit Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI603": {
    "title": "Entrepreneurship",
    "credits": 3
  },
  "BUSI604": {
    "title": "International Business",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI605": {
    "title": "Environment of International Business",
    "credits": 3,
    "prereqs": "BUSI 604",
    "offered": "Online"
  },
  "BUSI606": {
    "title": "Global Financial Markets",
    "credits": 3,
    "prereqs": "BUSI 605",
    "offered": "Online"
  },
  "BUSI607": {
    "title": "Developing Global Markets",
    "credits": 3,
    "prereqs": "BUSI 605",
    "offered": "Online"
  },
  "BUSI610": {
    "title": "Organizational Design and Structure",
    "credits": 3,
    "prereqs": "BUSI 600 or NURS 500",
    "offered": "Resident and Online"
  },
  "BUSI611": {
    "title": "Operations Management for Health Organizations",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI612": {
    "title": "Marketing Promotions",
    "credits": 3,
    "prereqs": "BUSI 520 and (Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or BMAL 590 or BUSI 701)",
    "offered": "Online"
  },
  "BUSI613": {
    "title": "Supply Chain Management",
    "credits": 3,
    "prereqs": "BMAL 590 or BUSI 701 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or GEOG 630",
    "offered": "Online"
  },
  "BUSI614": {
    "title": "Marketing Research",
    "credits": 3,
    "prereqs": "BUSI 520 and (BMAL 590 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or BUSI 701)",
    "offered": "Online"
  },
  "BUSI615": {
    "title": "Logistics",
    "credits": 3,
    "prereqs": "BUSI 613",
    "offered": "Online"
  },
  "BUSI616": {
    "title": "Total Quality Management",
    "credits": 3,
    "prereqs": "BUSI 613",
    "offered": "Online"
  },
  "BUSI619": {
    "title": "Quality Assessment and Evidence Based Decision Making",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI620": {
    "title": "Global Economic Environment",
    "credits": 3,
    "prereqs": "BUSI 600 or NURS 500",
    "offered": "Resident and Online"
  },
  "BUSI621": {
    "title": "Real Estate Operations",
    "credits": 3,
    "prereqs": "BUSI 620",
    "offered": "Online"
  },
  "BUSI622": {
    "title": "Real Estate Investment Analysis",
    "credits": 3,
    "prereqs": "BUSI 530",
    "offered": "Online"
  },
  "BUSI623": {
    "title": "Real Estate Development",
    "credits": 3,
    "prereqs": "BUSI 530",
    "offered": "Online"
  },
  "BUSI629": {
    "title": "Economic Analysis in Healthcare",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI630": {
    "title": "Managerial Epidemiology",
    "credits": 3,
    "prereqs": "BUSI 511",
    "offered": "Online"
  },
  "BUSI640": {
    "title": "Quantitative Methods in Healthcare Management",
    "credits": 3,
    "prereqs": "BUSI 511",
    "offered": "Online"
  },
  "BUSI642": {
    "title": "Contemporary Issues in Human Resource Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI643": {
    "title": "Workforce Planning and Employment",
    "credits": 3,
    "prereqs": "BUSI 642",
    "offered": "Online"
  },
  "BUSI644": {
    "title": "Human Resources Development",
    "credits": 3,
    "prereqs": "BUSI 642",
    "offered": "Online"
  },
  "BUSI645": {
    "title": "Compensation Management",
    "credits": 3,
    "prereqs": "BUSI 642",
    "offered": "Online"
  },
  "BUSI646": {
    "title": "Managing Human Capital in Healthcare",
    "credits": 3,
    "prereqs": "BUSI 506",
    "offered": "Online"
  },
  "BUSI650": {
    "title": "Operations Management",
    "credits": 3,
    "prereqs": "BUSI 620 or MGMT 527",
    "offered": "Resident and Online"
  },
  "BUSI651": {
    "title": "Employment Laws and Ethics",
    "credits": 3,
    "prereqs": "((Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or BMAL 590) and BUSI 642 )",
    "offered": "Online"
  },
  "BUSI652": {
    "title": "Human Resources and Technology",
    "credits": 3,
    "prereqs": "BUSI 651",
    "offered": "Online"
  },
  "BUSI653": {
    "title": "Negotiation and Conflict Resolution",
    "credits": 3,
    "prereqs": "Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or BMAL 590",
    "offered": "Online"
  },
  "BUSI675": {
    "title": "Business Analysis",
    "credits": 3,
    "prereqs": "Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 or BMAL 590",
    "offered": "Online"
  },
  "BUSI680": {
    "title": "Advanced Project Management I",
    "credits": 3,
    "prereqs": "BUSI 611 or BUSI 613 or BUSI 650 or BMIS 650",
    "offered": "Online"
  },
  "BUSI681": {
    "title": "Advanced Project Management II",
    "credits": 3,
    "prereqs": "BUSI 680",
    "offered": "Online"
  },
  "BUSI682": {
    "title": "Global Project Management",
    "credits": 3,
    "prereqs": "BUSI 681 and BUSI 680",
    "offered": "Online"
  },
  "BUSI683": {
    "title": "Money &amp; Capital Markets",
    "credits": 3,
    "prereqs": "BUSI 530 and (BUSI 687 or ECON 614)",
    "offered": "Online"
  },
  "BUSI684": {
    "title": "Financial Modeling",
    "credits": 3,
    "prereqs": "BUSI 530 and BUSI 687",
    "offered": "Online"
  },
  "BUSI685": {
    "title": "Financial Management",
    "credits": 3,
    "prereqs": "ACCT 614 or BUSI 535 or (BUSI 530 and BUSI 687)",
    "offered": "Online"
  },
  "BUSI686": {
    "title": "Financial Planning",
    "credits": 3,
    "prereqs": "BUSI 687",
    "offered": "Online"
  },
  "BUSI687": {
    "title": "Insurance &amp; Risk Management",
    "credits": 3,
    "prereqs": "BUSI 532 and BUSI 534 and BUSI 536 and BUSI 538",
    "offered": "Online"
  },
  "BUSI688": {
    "title": "Retirement Planning",
    "credits": 3,
    "prereqs": "BUSI 687",
    "offered": "Online"
  },
  "BUSI689": {
    "title": "Capstone in Financial Planning",
    "credits": 3,
    "prereqs": "BUSI 686 and BUSI 688",
    "offered": "Online"
  },
  "BUSI690": {
    "title": "Policy and Strategy in Global Competition",
    "credits": 3,
    "prereqs": "BUSI 620 and BUSI 520 and BUSI 530 and BUSI 601 and BUSI 610",
    "offered": "Resident and Online"
  },
  "BUSI691": {
    "title": "Healthcare Administration Capstone",
    "credits": 3,
    "prereqs": "BUSI 523 and BUSI 528 and BUSI 646 and BUSI 630 and BUSI 640",
    "offered": "Online"
  },
  "BUSI692": {
    "title": "Capstone in Financial Management",
    "credits": 3,
    "prereqs": "BUSI 532 and BUSI 534 and BUSI 536 and BUSI 538 and BUSI 687",
    "offered": "Online"
  },
  "BUSI694": {
    "title": "HR Analysis and Capstone",
    "credits": 3,
    "prereqs": "BUSI 645 and BUSI 652 and BUSI 675",
    "offered": "Online"
  },
  "BUSI695": {
    "title": "Business Research and Application",
    "credits": 3
  },
  "BUSI697": {
    "title": "Special Topics in Business",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "BUSI700": {
    "title": "Doctor of Business Administration Orientation",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI701": {
    "title": "Current Topics in Business Administration",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI702": {
    "title": "PhD Program Orientation",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI707": {
    "title": "Entrepreneurship: From Startup to Exit Strategy",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI708": {
    "title": "Small Business Management",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI709": {
    "title": "Raising Capital for Business Startups",
    "credits": 3,
    "prereqs": "BUSI 820",
    "offered": "Online"
  },
  "BUSI710": {
    "title": "Foundations of Applied Research Methods",
    "credits": 3,
    "prereqs": "BUSI 701 (may be taken concurrently) or BUSI 702 (may be taken concurrently)",
    "offered": "Online"
  },
  "BUSI730": {
    "title": "Strategic Allocation of Financial Resources",
    "credits": 3,
    "prereqs": "BUSI 700 and BUSI 710",
    "offered": "Online"
  },
  "BUSI735": {
    "title": "Understanding the Organization",
    "credits": 3,
    "prereqs": "BUSI 701",
    "offered": "Online"
  },
  "BUSI740": {
    "title": "Managing the Supply Chain",
    "credits": 3,
    "prereqs": "BUSI 701",
    "offered": "Online"
  },
  "BUSI741": {
    "title": "Global Supply Chain Strategy",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI742": {
    "title": "Global Logistics Strategy",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI743": {
    "title": "Managing for Lean Six Sigma",
    "credits": 3,
    "offered": "Online"
  },
  "BUSI745": {
    "title": "Marketing for Competitive Advantage",
    "credits": 3,
    "prereqs": "BUSI 701",
    "offered": "Online"
  },
  "BUSI750": {
    "title": "Managing Human Resources",
    "credits": 3,
    "prereqs": "BUSI 701 or BUSI 702",
    "offered": "Online"
  },
  "BUSI755": {
    "title": "Organizational and Executive Coaching",
    "credits": 3,
    "prereqs": "(BUSI 700 and BUSI 710) or DIGI 700",
    "offered": "Online"
  },
  "BUSI760": {
    "title": "Quality Management and Productivity",
    "credits": 3,
    "prereqs": "BUSI 700 and BUSI 710",
    "offered": "Online"
  },
  "BUSI770": {
    "title": "Strategy Formulation and Strategic Thinking",
    "credits": 3,
    "prereqs": "BUSI 701 or BUSI 702",
    "offered": "Online"
  },
  "BUSI780": {
    "title": "Business Case Study Design Seminar",
    "credits": 3,
    "prereqs": "BUSI 770",
    "offered": "Online"
  },
  "BUSI789": {
    "title": "Appl Doctoral Research Proj II",
    "credits": 5
  },
  "BUSI790": {
    "title": "Appl Doctoral Research Prj III",
    "credits": 5
  },
  "BUSI815": {
    "title": "Qualitative Research Methods",
    "credits": 3,
    "prereqs": "(BUSI 700 and BUSI 710) or (BUSI 701 and BUSI 710)",
    "offered": "Online"
  },
  "BUSI816": {
    "title": "Advanced Qualitative Research Methods",
    "credits": 3,
    "prereqs": "BUSI 815",
    "offered": "Online"
  },
  "BUSI820": {
    "title": "Quantitative Research Methods",
    "credits": 3,
    "prereqs": "(BUSI 700 and BUSI 710) or (BUSI 701 and BUSI 710)",
    "offered": "Online"
  },
  "BUSI821": {
    "title": "Advanced Quantitative Research Methods",
    "credits": 3,
    "prereqs": "BUSI 820",
    "offered": "Online"
  },
  "BUSI830": {
    "title": "Case Study Research Methods and Consulting Techniques",
    "credits": 3,
    "prereqs": "BUSI 701 and BUSI 710 and BUSI 820",
    "offered": "Online"
  },
  "BUSI885": {
    "title": "Research Concept",
    "credits": 3,
    "prereqs": "(BUSI 700 or BUSI 701) and BUSI 710 and BUSI 730 and BUSI 735 and BUSI 740 and BUSI 745 and BUSI 750 and BUSI 770 and BUSI 815 and BUSI 820 and (BUSI 601 and ACCT 612 and ACCT 622 and ACCT 632 and ACCT 642 or BUSI 530 and BUSI 532 and BUSI 534 and BUSI 536 and BUSI 538 or BUSI 505 and BUSI 506 and BUSI 511 and BUSI 646 or BUSI 642 and BUSI 643 and BUSI 644 and BUSI 645 or BMIS 510 and BMIS 520 and BMIS 530 and BMIS 580 or BUSI 604 and BUSI 605 and BUSI 606 and BUSI 607 or BUSI 502 and BUSI 503 and BUSI 504 and BUSI 610 or BUSI 520 and BUSI 612 and BUSI 613 and BUSI 614 and COMS 658 and HLTH 553 and MGMT 602 or BUSI 650 and BUSI 680 and BUSI 681 and BUSI 682 or BUSI 621 and BUSI 622 and BUSI 623 and JURI 550 or BUSI 570 and MGMT 501 and BMAL 500 and COMS 532 and COMS 560 or STCO 532 and STCO 534 and STCO 550 and STCO 562 and BUSI 615 and BUSI 616 or MGMT 610 and MGMT 645 and MGMT 651 and MGMT 652) or (LIFC 501 and LIFC 502 and LIFC 603 and LIFC 604) or (COMS 624 and STCO 648 and TOUR 601 and TOUR 602)",
    "offered": "Online"
  },
  "BUSI886": {
    "title": "PhD Research Concept",
    "credits": 3,
    "prereqs": "((BMAL 703 and BMAL 704 and BMAL 710 and BMAL 714 and BUSI 702 and BUSI 710 and BUSI 750 and BUSI 770 and BUSI 815 and BUSI 820) and (BUSI 816 or BUSI 821) or (BUSI 702 and BUSI 710 and BUSI 730 and BUSI 740 and BUSI 745 and BUSI 750 and BUSI 770 and BUSI 815 and BUSI 816 and BUSI 820 and BUSI 821))",
    "offered": "Online"
  },
  "BUSI887": {
    "title": "Applied Doctoral Research Project I",
    "credits": 5,
    "prereqs": "BUSI 885",
    "offered": "Online"
  },
  "BUSI888": {
    "title": "Applied Doctoral Research Project II",
    "credits": 5,
    "prereqs": "BUSI 887",
    "offered": "Online"
  },
  "BUSI889": {
    "title": "Applied Doctoral Research Project III",
    "credits": 5,
    "prereqs": "BUSI 888",
    "offered": "Online"
  },
  "BUSI890": {
    "title": "Applied Doctoral Research Project IV",
    "credits": 0,
    "prereqs": "BUSI 889 (may be taken concurrently)",
    "offered": "Online"
  },
  "BUSI987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "BUSI 885 or BUSI 886",
    "offered": "Online"
  },
  "BUSI988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "BUSI 987",
    "offered": "Online"
  },
  "BUSI989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "BUSI 988",
    "offered": "Online"
  },
  "BUSI990": {
    "title": "Dissertation IV",
    "credits": 0,
    "prereqs": "BUSI 989",
    "offered": "Online"
  },
  "BWVW301": {
    "title": "Biblical Worldview Seminar",
    "credits": 3,
    "prereqs": "RLGN 105",
    "offered": "Resident"
  },
  "CARA101": {
    "title": "Conversational Arabic",
    "credits": 3,
    "offered": "Online"
  },
  "CARP101": {
    "title": "Foundations in Carpentry",
    "credits": 4,
    "prereqs": "CRFT 101 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CARP201": {
    "title": "Intermediate Carpentry",
    "credits": 4,
    "prereqs": "CARP 101 and CRFT 101",
    "offered": "Resident"
  },
  "CARP301": {
    "title": "Advanced Carpentry",
    "credits": 4,
    "prereqs": "CARP 201 and CRFT 101",
    "offered": "Resident"
  },
  "CARP401": {
    "title": "Special Topics in Carpentry",
    "credits": 4,
    "prereqs": "CARP 301 and CRFT 101",
    "offered": "Resident"
  },
  "CCOU201": {
    "title": "Introduction to Christian Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "CCOU202": {
    "title": "Issues of Christian Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "CCOU301": {
    "title": "Christian Counseling for Marriage and Family",
    "credits": 3,
    "offered": "Online"
  },
  "CCOU302": {
    "title": "Christian Counseling for Children",
    "credits": 3,
    "offered": "Online"
  },
  "CCOU304": {
    "title": "Christian Counseling for Women",
    "credits": 3,
    "offered": "Online"
  },
  "CCOU305": {
    "title": "Issues in Human Sexuality",
    "credits": 3,
    "offered": "Online"
  },
  "CEFS500": {
    "title": "Orientation to Counselors Professional Identity and Function",
    "credits": 3,
    "offered": "Online"
  },
  "CEFS501": {
    "title": "Ethical and Legal Issues in Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "CEFS502": {
    "title": "Human Growth and Development",
    "credits": 3,
    "offered": "Online"
  },
  "CEFS504": {
    "title": "Multicultural Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "CEFS505": {
    "title": "Counseling Techniques and the Helping Relationship",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501)",
    "offered": "Online"
  },
  "CEFS506": {
    "title": "Integration of Spirituality and Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "CEFS510": {
    "title": "Theories of Counseling",
    "credits": 3,
    "prereqs": "(CEFS 501 or COUN 501 or MAAC 501)",
    "offered": "Online"
  },
  "CEFS512": {
    "title": "Group Counseling",
    "credits": 3,
    "prereqs": "((CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510))",
    "offered": "Online"
  },
  "CEFS515": {
    "title": "Research and Program Evaluation",
    "credits": 3,
    "prereqs": "Statistic Prereq Met with a score of 3",
    "offered": "Online"
  },
  "CEFS521": {
    "title": "Assessment Techniques in Counseling",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 505 or COUN 505 or MAAC 505 or ADCN 505)",
    "offered": "Online"
  },
  "CEFS522": {
    "title": "Career Development and Counseling",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510)",
    "offered": "Online"
  },
  "CEFS546": {
    "title": "Psychopathology",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 510 or MAAC 510 or COUN 510)",
    "offered": "Online"
  },
  "CEFS601": {
    "title": "Theories of Family Systems",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 505 or COUN 505 or MAAC 505 or ADCN 505) and (CEFS 500 or COUN 500) and (CEFS 502 or COUN 502) and (CEFS 505 or COUN 505 or ADCN 505 or MAAC 505)",
    "offered": "Online"
  },
  "CEFS602": {
    "title": "Assessment, Diagnosis, and Treatment Planning in Marriage and Family Counseling",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 512 or COUN 512) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 546 or MAAC 646 or COUN 646) and (CEFS 522 or COUN 522)",
    "offered": "Resident and Online"
  },
  "CEFS603": {
    "title": "Advanced Couple &amp; Marital Counseling",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 512 or COUN 512) and (CEFS 521 (may be taken concurrently) or MAAC 521 or COUN 521) and (CEFS 546 or MAAC 646 or COUN 646) and (CEFS 601 or MAAC 601 or COUN 601 or CMHC 601) and (CEFS 522 or COUN 522)",
    "offered": "Online"
  },
  "CEFS604": {
    "title": "Crisis Counseling",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500 or COUC 500 or COSC 500 or Education Counseling Gate 2 with a score of 5) and (CEFS 501 or MAAC 501 or COUN 501 or COUC 501 or COSC 501 or EDCE 501) and (CEFS 502 or COUN 502 or COUC 502 or EDUC 600) and (CEFS 504 or MAAC 504 or COUN 504 or COUC 504 or EDCE 504) and (CEFS 505 or COUN 505 or COSC 505 or COUC 505) and (CEFS 510 or MAAC 510 or COUN 510 or COSC 510) and (CEFS 512 or COUN 512 or COSC 512 or EDCE 512 or COUC 512) and (CEFS 521 or MAAC 521 or COUN 521 or COSC 622 or COUC 521) and (CEFS 546 or MAAC 646 or COUN 646 or COUC 546)",
    "offered": "Online"
  },
  "CEFS605": {
    "title": "Community and Agency Counseling",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 512 or COUN 512) and (CEFS 515 or MAAC 515 or COUN 515) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 522 or COUN 522) and (CEFS 546 or MAAC 646 or COUN 646)",
    "offered": "Online"
  },
  "CEFS607": {
    "title": "Counseling Individuals with PTSD/Combat-Related PTSD",
    "credits": 3,
    "prereqs": "(COUN 646 or MAAC 646 or CEFS 546) and COUN 598 and (COUN 500 or CEFS 500 or Orient Coun Prof Id & Func Req with a score of 5)",
    "offered": "Online"
  },
  "CEFS608": {
    "title": "Counseling Survivors of Sexual Trauma",
    "credits": 3,
    "prereqs": "(COUN 646 or MAAC 646 or CEFS 546) and COUN 598 and (COUN 500 or CEFS 500 or Orient Coun Prof Id & Func Req with a score of 5)",
    "offered": "Online"
  },
  "CEFS609": {
    "title": "Counseling Survivors of Violence",
    "credits": 3,
    "prereqs": "COUN 646 or CEFS 546 or MAAC 646",
    "offered": "Online"
  },
  "CEFS610": {
    "title": "Human Sexuality",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510)",
    "offered": "Online"
  },
  "CEFS611": {
    "title": "Counseling Children and Their Families",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 512 or COUN 512) and (CEFS 515 or MAAC 515 or COUN 515) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 522 or COUN 522) and (CEFS 546 or MAAC 646 or COUN 646)",
    "offered": "Online"
  },
  "CEFS620": {
    "title": "Counseling Children, Adolescents, and Their Families",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 512 or COUN 512) and (CEFS 515 or MAAC 515 or COUN 515) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 546 or MAAC 646 or COUN 646) and (CEFS 601 or MAAC 601 or COUN 601) and (CEFS 602 or COUN 602)",
    "offered": "Resident and Online"
  },
  "CEFS625": {
    "title": "Psychopharmacology and Counseling",
    "credits": 3,
    "prereqs": "(COUN 501 or MAAC 501 or CEFS 501) and (COUN 502 or CEFS 502) and (COUN 503 or CEFS 503 or CEFS 515 or MAAC 515 or COUN 515) and (COUN 510 or MAAC 510 or CEFS 510) and (COUN 512 or CEFS 512) and (COUN 601 or MAAC 601 or CEFS 601) and (COUN 500 or CEFS 500 or Orient Coun Prof Id & Func Req with a score of 5)",
    "offered": "Online"
  },
  "CEFS630": {
    "title": "Gerontology and Counseling",
    "credits": 3,
    "prereqs": "(COUN 501 or MAAC 501 or CEFS 501) and (COUN 502 or CEFS 502) and (COUN 504 or MAAC 504 or CEFS 504) and (COUN 505 or CEFS 505) and (COUN 510 or MAAC 510 or CEFS 510) and (COUN 512 or CEFS 512) and (COUN 515 or MAAC 515 or CEFS 515 or CEFS 503 or COUN 503) and (COUN 521 or MAAC 521 or CEFS 521) and (COUN 522 or CEFS 522) and (COUN 646 or MAAC 646 or CEFS 546) and (COUN 667 or CEFS 667) and (COUN 500 or CEFS 500 or Orient Coun Prof Id & Func Req with a score of 5)",
    "offered": "Online"
  },
  "CEFS668": {
    "title": "Capstone Project",
    "credits": 3,
    "offered": "Online"
  },
  "CEFS670": {
    "title": "Comprehensive Exam - CPCE",
    "credits": 0,
    "prereqs": "(CEFS 500 or COUN 500 and CEFS 501 or MAAC 501 or COUN 501 and CEFS 502 or COUN 502 and CEFS 504 or MAAC 504 or COUN 504 and CEFS 505 or COUN 505 and CEFS 510 or MAAC 510 or COUN 510 and CEFS 512 or COUN 512 and CEFS 515 or MAAC 515 or COUN 515 and CEFS 521 or MAAC 521 or COUN 521 and CEFS 522 or COUN 522 and CEFS 546 or MAAC 646 or COUN 646) or (COUC 500 or COUN 500 or CMHC 500 and COUC 501 or COUN 501 or CMHC 501 and COUC 502 or COUN 502 or CMHC 502 and COUC 504 or COUN 504 or CMHC 504 or EDCE 504 and COUC 505 or COUN 505 or CMHC 505 and COUC 510 or COUN 510 or CMHC 510 and COUC 512 or COUN 512 or CMHC 512 and COUC 515 or COUN 515 or CMHC 515 and COUC 521 or COUN 521 or CMHC 521 and COUC 522 or COUN 522 or CMHC 522 or EDCE 522 and COUC 546 or COUN 646 or CMHC 646)",
    "offered": "Resident and Online"
  },
  "CEFS671": {
    "title": "Comprehensive Exam - Integration",
    "credits": 0,
    "prereqs": "(CEFS 500 or COUN 500 and CEFS 501 or MAAC 501 or COUN 501 and CEFS 502 or COUN 502 and CEFS 504 or MAAC 504 or COUN 504 and CEFS 505 or COUN 505 and CEFS 510 or MAAC 510 or COUN 510 and CEFS 512 or COUN 512 and CEFS 515 or MAAC 515 or COUN 515 and CEFS 521 or MAAC 521 or COUN 521 and CEFS 522 or COUN 522 and CEFS 546 or MAAC 646 or COUN 646) or (COUC 500 or COUN 500 or CMHC 500 and COUC 501 or COUN 501 or CMHC 501 and COUC 502 or COUN 502 or CMHC 502 and COUC 504 or COUN 504 or CMHC 504 or EDCE 504 and COUC 505 or COUN 505 and CEFS 506 or COUN 506 or MAAC 506 or CMHC 505 and COUC 506 or CMHC 506 and COUC 510 or COUN 510 or CMHC 510 and COUC 512 or COUN 512 or CMHC 512 and COUC 515 or COUN 515 or CMHC 515 and COUC 521 or COUN 521 or CMHC 521 and COUC 522 or COUN 522 or CMHC 522 or EDCE 522 and COUC 546 or COUN 646 or CMHC 646)",
    "offered": "Resident and Online"
  },
  "CEFS687": {
    "title": "Counseling Women",
    "credits": 3,
    "prereqs": "((CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 512 or COUN 512) and (CEFS 515 or MAAC 515 or COUN 515) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 522 or COUN 522) and (CEFS 546 or MAAC 646 or COUN 646))",
    "offered": "Online"
  },
  "CEFS690": {
    "title": "Thesis",
    "credits": 3,
    "offered": "Online"
  },
  "CEFS691": {
    "title": "Substance Abuse: Diagnosis, Treatment and Prevention",
    "credits": 3,
    "prereqs": "(CEFS 501 or MAAC 501 or COUN 501) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 546 or MAAC 646 or COUN 646) and (CEFS 505 or COUN 505 or MAAC 505 or ADCN 505)",
    "offered": "Online"
  },
  "CEFS695": {
    "title": "Directed Research in Counseling",
    "credits": 1,
    "offered": "Online"
  },
  "CEFS697": {
    "title": "Seminar in Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "CEFS698": {
    "title": "Practicum",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 512 or COUN 512) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 546 or MAAC 646 or COUN 646) and CEFS 602 (may be taken concurrently)",
    "note": "*This course may be repeated.",
    "offered": "Online"
  },
  "CEFS699": {
    "title": "Counseling Internship",
    "credits": 3,
    "prereqs": "(CEFS 500 or COUN 500) and (CEFS 501 or MAAC 501 or COUN 501) and (CEFS 502 or COUN 502) and (CEFS 504 or MAAC 504 or COUN 504) and (CEFS 505 or COUN 505) and (CEFS 510 or MAAC 510 or COUN 510) and (CEFS 512 or COUN 512) and (CEFS 515 or MAAC 515 or COUN 515) and (CEFS 521 or MAAC 521 or COUN 521) and (CEFS 522 or COUN 522) and (CEFS 546 or MAAC 646 or COUN 646) and (CEFS 698 or COUN 698) and (CEFS 602 or COUN 602 or CMHC 602)",
    "offered": "Online"
  },
  "CFRE101": {
    "title": "Conversational French I",
    "credits": 3,
    "offered": "Online"
  },
  "CGRM101": {
    "title": "Conversational German I",
    "credits": 3,
    "offered": "Online"
  },
  "CGRM102": {
    "title": "Conversational German II",
    "credits": 3,
    "prereqs": "CGRM 101",
    "offered": "Online"
  },
  "CGRM103": {
    "title": "Conversational German III",
    "credits": 3,
    "prereqs": "CGRM 102",
    "offered": "Online"
  },
  "CHEM105": {
    "title": "Elements of General Chemistry",
    "credits": 4,
    "note": "3 hours lecture; 2 hours lab",
    "offered": "Resident"
  },
  "CHEM107": {
    "title": "Essentials of General and Organic Chemistry",
    "credits": 4,
    "prereqs": "MATH 110 (may be taken concurrently) or MATH 201 (may be taken concurrently) or BUSI 230 or ACT Math with a score of 20 or (pre2016 post1995)SAT Math with a score of 550 or SAT Section Math with a score of 570 or MATH 108 (may be taken concurrently) or Assessment - Mathematics II with a score of 15 or MATH 121 (may be taken concurrently) or MATH 131 (may be taken concurrently) or MATH 132 (may be taken concurrently) or MATH 126 (may be taken concurrently) or Placement Score-Math with a score of 070",
    "note": "3 hours lecture; 2 hours lab",
    "offered": "Resident"
  },
  "CHEM107L": {
    "title": "Essentials of General and Organic Chemistry Lab",
    "credits": 0,
    "prereqs": "CHEM 107 (may be taken concurrently)",
    "note": "CHEM 107 taken concurrently",
    "offered": "Resident"
  },
  "CHEM108": {
    "title": "Chemistry for Health Science Professionals",
    "credits": 4,
    "prereqs": "MATH 110 (may be taken concurrently) or MATH 201 (may be taken concurrently) or MATH 202 (may be taken concurrently) or BUSI 230 or (pre2016 post1995)SAT Math with a score of 550 or SAT Section Math with a score of 570 or ACT Math with a score of 20",
    "offered": "Online"
  },
  "CHEM115": {
    "title": "Essentials of General Chemistry",
    "credits": 4,
    "prereqs": "ACT Composite with a score of 20 or SAT Section Math with a score of 530 or (pre2016 post1995)SAT Math with a score of 500 or Placement Score-Math with a score of 75 or MATH 121 or MATH 126 or MATH 131 or MATH 132",
    "note": "This course does not substitute for CHEM 121, 131, or 135.",
    "offered": "Online"
  },
  "CHEM121": {
    "title": "General Chemistry I",
    "credits": 4,
    "prereqs": "MATH 121 or MATH 126 or MATH 131 or MATH 132 or ACT Composite with a score of 20 or SAT Section Math with a score of 530 or (pre2016 post1995)SAT Math with a score of 500 or Placement Score-Math with a score of 75",
    "note": "3 hours lecture; 2 hours lab",
    "offered": "Resident"
  },
  "CHEM121L": {
    "title": "General Chemistry I Lab",
    "credits": 0,
    "prereqs": "CHEM 121 (may be taken concurrently)",
    "note": "CHEM 121 taken concurrently",
    "offered": "Resident"
  },
  "CHEM122": {
    "title": "General Chemistry II",
    "credits": 4,
    "prereqs": "CHEM 121 and CHEM 122L (may be taken concurrently)",
    "note": "3 hours lecture; 2 hours lab",
    "offered": "Resident"
  },
  "CHEM122L": {
    "title": "General Chemistry II Lab",
    "credits": 0,
    "prereqs": "CHEM 121",
    "note": "CHEM 122 taken concurrently",
    "offered": "Resident"
  },
  "CHEM131": {
    "title": "Advanced General Chemistry I",
    "credits": 3,
    "prereqs": "MATH 121 or MATH 125 or MATH 130 or MATH 131 or MATH 132 or MATH 201 or MATH 217 or MATH 1XX or MATH 2XX or MATH 3XX or MATH 4XX or ACT Math with a score of 25 or MATH SECTION SCORE with a score of 580 or Placement Score-Math with a score of 75",
    "note": "Take concurrent with CHEM 135",
    "offered": "Resident"
  },
  "CHEM132": {
    "title": "Advanced General Chemistry II",
    "credits": 3,
    "prereqs": "CHEM 121 or CHEM 131",
    "offered": "Resident"
  },
  "CHEM135": {
    "title": "Advanced General Chemistry Lab",
    "credits": 1,
    "prereqs": "(CHEM 131",
    "note": "Take concurrent with CHEM 131",
    "offered": "Resident"
  },
  "CHEM136": {
    "title": "Advanced General Chemistry II Lab",
    "credits": 1,
    "prereqs": "CHEM 121 or (CHEM 131 and CHEM 135) and CHEM 132 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CHEM301": {
    "title": "Organic Chemistry I",
    "credits": 4,
    "prereqs": "CHEM 122 or (CHEM 132 and CHEM 136)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "CHEM301L": {
    "title": "Organic Chemistry I Lab",
    "credits": 0,
    "prereqs": "(CHEM 121 and CHEM 122) or (CHEM 132 and CHEM 136)",
    "offered": "Resident"
  },
  "CHEM302": {
    "title": "Organic Chemistry II",
    "credits": 4,
    "prereqs": "CHEM 301",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "CHEM302L": {
    "title": "Organic Chemistry II Lab",
    "credits": 0,
    "prereqs": "CHEM 301 and CHEM 302 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CHEM321": {
    "title": "Analytical Chemistry",
    "credits": 4,
    "prereqs": "CHEM 122 or (CHEM 132 and CHEM 136)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "CHEM322": {
    "title": "Instrumental Analysis",
    "credits": 4,
    "prereqs": "CHEM 321 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "CHEM357": {
    "title": "Forensic Chemistry",
    "credits": 4,
    "prereqs": "CHEM 302",
    "offered": "Resident"
  },
  "CHEM400": {
    "title": "Chemistry Seminar",
    "credits": 1,
    "prereqs": "CHEM 302",
    "offered": "Resident"
  },
  "CHEM461": {
    "title": "Physical Chemistry I",
    "credits": 3,
    "prereqs": "CHEM 122 or (CHEM 132 and CHEM 136) and (MATH 126 or MATH 131)",
    "offered": "Resident"
  },
  "CHEM462": {
    "title": "Physical Chemistry II",
    "credits": 3,
    "prereqs": "CHEM 461",
    "offered": "Resident"
  },
  "CHEM465": {
    "title": "Physical Chemistry I Lab",
    "credits": 1,
    "prereqs": "CHEM 461 (may be taken concurrently)",
    "note": "3 hours lab; concurrent with CHEM 461",
    "offered": "Resident"
  },
  "CHEM466": {
    "title": "Physical Chemistry II Lab",
    "credits": 1,
    "prereqs": "CHEM 462 (may be taken concurrently)",
    "note": "3 hours lab; concurrent with CHEM 462",
    "offered": "Resident"
  },
  "CHEM471": {
    "title": "Inorganic Chemistry",
    "credits": 4,
    "prereqs": "CHEM 302",
    "note": "3 hours lecture; 3 hours lab",
    "offered": "Resident"
  },
  "CHEM495": {
    "title": "Supervised Research in Chemistry",
    "credits": 1,
    "offered": "Resident"
  },
  "CHEM497": {
    "title": "Special Topics in Chemistry",
    "credits": 1,
    "offered": "Resident"
  },
  "CHEM499": {
    "title": "Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "CHHI100": {
    "title": "A Survey of the History of Christianity",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "CHHI300": {
    "title": "Survey of the History of Christianity",
    "credits": 3,
    "offered": "Online"
  },
  "CHHI301": {
    "title": "History of the Christian Church I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHHI302": {
    "title": "History of the Christian Church II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHHI325": {
    "title": "The Church and Its Mission",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI400": {
    "title": "Leaders and Issues in the Early Church",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI403": {
    "title": "Reformation",
    "credits": 3,
    "offered": "Online"
  },
  "CHHI404": {
    "title": "History of Baptists",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI405": {
    "title": "History of Anti-Semitism",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "CHHI497": {
    "title": "Church History Seminar",
    "credits": 1,
    "offered": "Resident"
  },
  "CHHI510": {
    "title": "Survey of the History of Christianity",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHHI520": {
    "title": "History of Christianity I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHHI525": {
    "title": "History of Christianity II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHHI610": {
    "title": "Historical Development of Christian Theology",
    "credits": 3,
    "prereqs": "CHHI 520 or CHHI 525 or CHHI 510",
    "offered": "Resident and Online"
  },
  "CHHI620": {
    "title": "History of Global Christianity",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHHI635": {
    "title": "Patristic and Ancient Heresy",
    "credits": 3,
    "prereqs": "CHHI 520 or CHHI 510",
    "offered": "Online"
  },
  "CHHI650": {
    "title": "Classical Reformation",
    "credits": 3,
    "prereqs": "CHHI 525 or CHHI 510",
    "offered": "Resident and Online"
  },
  "CHHI655": {
    "title": "Free Church History and Thought",
    "credits": 3
  },
  "CHHI660": {
    "title": "American Christianity",
    "credits": 3,
    "prereqs": "CHHI 510 or CHHI 525",
    "offered": "Resident and Online"
  },
  "CHHI665": {
    "title": "History of Baptists",
    "credits": 3,
    "prereqs": "CHHI 525 or CHHI 510",
    "offered": "Resident and Online"
  },
  "CHHI670": {
    "title": "History of Evangelicalism",
    "credits": 3,
    "prereqs": "CHHI 510 or CHHI 525",
    "offered": "Resident and Online"
  },
  "CHHI695": {
    "title": "Directed Research",
    "credits": 1
  },
  "CHHI697": {
    "title": "Seminar in Church History",
    "credits": 3,
    "offered": "Online"
  },
  "CHHI940": {
    "title": "Seminar in American Fundamentalism and Evangelicalism",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI941": {
    "title": "Augustine",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI942": {
    "title": "Patristic Exegesis",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI943": {
    "title": "The Latin Fathers",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI945": {
    "title": "Seminar in Modern Theologies and Theologians",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI948": {
    "title": "Reading Seminar in Historical Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "CHHI995": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "CHHI997": {
    "title": "Seminar in Church History",
    "credits": 3,
    "offered": "Resident"
  },
  "CHIN101": {
    "title": "Elementary Chinese I",
    "credits": 3,
    "offered": "Resident"
  },
  "CHIN102": {
    "title": "Elementary Chinese II",
    "credits": 3,
    "prereqs": "CHIN 101",
    "offered": "Resident"
  },
  "CHIN201": {
    "title": "Intermediate Chinese I",
    "credits": 3,
    "prereqs": "CHIN 102",
    "offered": "Resident"
  },
  "CHIN202": {
    "title": "Intermediate Chinese II",
    "credits": 3,
    "prereqs": "CHIN 201",
    "offered": "Resident"
  },
  "CHIN495": {
    "title": "Chinese Independent",
    "credits": 3,
    "offered": "Resident"
  },
  "CHIN497": {
    "title": "Special Topics in Chinese",
    "credits": 3,
    "prereqs": "CHIN 202",
    "offered": "Resident"
  },
  "CHM3100": {
    "title": "Survey of the History of Christianity",
    "credits": 0,
    "offered": "Online"
  },
  "CHM3201": {
    "title": "Introduction to Church Ministries",
    "credits": 0,
    "offered": "Online"
  },
  "CHMN101": {
    "title": "Evangelism and Christian Life",
    "credits": 2
  },
  "CHMN201": {
    "title": "Introduction to Church Ministries",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHMN205": {
    "title": "Church Ministry Practicum I",
    "credits": 1,
    "prereqs": "CHMN 201 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CHMN250": {
    "title": "Ministry in Urban Communities",
    "credits": 3,
    "offered": "Resident"
  },
  "CHMN299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "CHMN300": {
    "title": "Church Ministry Practicum II",
    "credits": 1,
    "prereqs": "CHMN 201 and CHMN 205",
    "offered": "Resident"
  },
  "CHMN301": {
    "title": "Foundations of NextGen Ministry",
    "credits": 3,
    "prereqs": "CHMN 201",
    "offered": "Online"
  },
  "CHMN305": {
    "title": "Church Ministry Practicum III",
    "credits": 1,
    "prereqs": "CHMN 201 and CHMN 205 and CHMN 300",
    "offered": "Resident"
  },
  "CHMN310": {
    "title": "Multi Ethnic Church Ministry",
    "credits": 3,
    "prereqs": "CHMN 250 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CHMN315": {
    "title": "Apologetics and Evangelism in an Urban Ministry Context",
    "credits": 3,
    "prereqs": "CHMN 250 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CHMN360": {
    "title": "Foundations in Ministry Programming",
    "credits": 3,
    "prereqs": "CHMN 201 and CHMN 205",
    "offered": "Resident"
  },
  "CHMN387": {
    "title": "Methods of Teaching Bible and Religion",
    "credits": 3,
    "prereqs": "RLGN 301 and (BIBL 105 and BIBL 110 and BIBL 360 and THEO 360) or (BIBL 105 and BIBL 110 and BIBL 350 and THEO 360) or (BIBL 105 and BIBL 110 and BIBL 360 and THEO 350) or (BIBL 104 and BIBL 360 and THEO 360) or (BIBL 104 and BIBL 350 and THEO 360) or (BIBL 104 and BIBL 360 and THEO 350)",
    "offered": "Online"
  },
  "CHMN400": {
    "title": "Leading NextGen Ministry",
    "credits": 3,
    "prereqs": "YOUT 201 and CHMN 301 and THEO 330",
    "offered": "Online"
  },
  "CHMN420": {
    "title": "Contemporary Issues in Urban Ministry",
    "credits": 3,
    "prereqs": "CHMN 250 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CHMN447": {
    "title": "Discipleship in Church Ministries",
    "credits": 3,
    "prereqs": "CHMN 201 and CHMN 205 and CHMN 300 and CHMN 360 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "CHMN450": {
    "title": "Leadership and Management in Ministry",
    "credits": 3,
    "prereqs": "CHMN 201 and CHMN 205 and CHMN 300 and CHMN 360",
    "offered": "Resident"
  },
  "CHMN489": {
    "title": "Church Ministries Capstone",
    "credits": 3,
    "offered": "Resident"
  },
  "CHMN495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "CHMN497": {
    "title": "Special Topics in Church Ministry",
    "credits": 1,
    "offered": "Resident"
  },
  "CHMN499": {
    "title": "Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "CHMN500": {
    "title": "Foundational Leadership Models for Next Generation Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "CHMN501": {
    "title": "Introduction to Christian Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "CHMN510": {
    "title": "Issues and Trends in Next Generation Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "CHMN520": {
    "title": "Making Disciples for the Next Generation Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "CHMN679": {
    "title": "Capstone",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHMN689": {
    "title": "Applied Ministry Capstone",
    "credits": 3,
    "prereqs": "((CHMN 501 and NBST 515) or (NBST 520 and OBST 515) or (OBST 520 and THEO 610))",
    "offered": "Online"
  },
  "CHMN699": {
    "title": "Internship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHMN810": {
    "title": "Foundations for Church Revitalization",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CHMN820": {
    "title": "Strategic Leadership for Church Revitalization",
    "credits": 3,
    "prereqs": "DMIN 810 and CHMN 810",
    "offered": "Online"
  },
  "CHMN830": {
    "title": "Change and Conflict in Church Revitalization",
    "credits": 3,
    "prereqs": "DMIN 810 and CHMN 810",
    "offered": "Online"
  },
  "CHMN840": {
    "title": "Leadership Models for Next Generation Ministry",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CHMN841": {
    "title": "Issues and Trends in Next Generation Ministry",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CHMN842": {
    "title": "Making Disciples for the Next Generation",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CHMN850": {
    "title": "A Biblical and Missiological Theology of the City",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Course offered beginning in Spring 2020",
    "offered": "Online"
  },
  "CHMN851": {
    "title": "Contemporary Issues of the City",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Course offered beginning in Spring 2020",
    "offered": "Online"
  },
  "CHMN852": {
    "title": "Disciple-Making Strategies among Diverse Communities",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Course offered beginning in Spring 2020",
    "offered": "Online"
  },
  "CHMN860": {
    "title": "Marks of a Disciple",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CHMN861": {
    "title": "Marks of a Biblical Church",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CHMN862": {
    "title": "Leading Strategic Ministry Change",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CHND101": {
    "title": "Conversational Hindi I",
    "credits": 3,
    "offered": "Online"
  },
  "CHPL500": {
    "title": "Introduction to Chaplaincy Ministry",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHPL598": {
    "title": "Spiritual and Professional Development of the Chaplain",
    "credits": 3,
    "prereqs": "CHPL 500",
    "offered": "Resident and Online"
  },
  "CHPL615": {
    "title": "Chaplain Ethics for Advisement and Pastoral Care",
    "credits": 3,
    "prereqs": "CHPL 598 and CHPL 500",
    "offered": "Resident and Online"
  },
  "CHPL621": {
    "title": "Mentoring for Clinical Pastoral Education Unit 1",
    "credits": 3,
    "prereqs": "CHPL 500 and CHPL 598 and THEO 525 and THEO 530",
    "offered": "Online"
  },
  "CHPL622": {
    "title": "Mentoring for Clinical Pastoral Education Unit 2",
    "credits": 3,
    "prereqs": "CHPL 621",
    "offered": "Online"
  },
  "CHPL623": {
    "title": "Mentoring for Clinical Pastoral Education Unit 3",
    "credits": 3,
    "prereqs": "CHPL 622",
    "offered": "Online"
  },
  "CHPL624": {
    "title": "Mentoring for Clinical Pastoral Education Unit 4",
    "credits": 3,
    "prereqs": "CHPL 623",
    "offered": "Online"
  },
  "CHPL640": {
    "title": "Chaplain Leadership for Religious Freedom",
    "credits": 3,
    "prereqs": "CHPL 598 and CHPL 500",
    "offered": "Resident and Online"
  },
  "CHPL645": {
    "title": "Chaplain Resilient Leaders",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHPL655": {
    "title": "Chaplain Evangelism and Discipleship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CHPL665": {
    "title": "Chaplain Crisis Counseling",
    "credits": 3,
    "offered": "Resident"
  },
  "CHPL680": {
    "title": "Military Chaplaincy",
    "credits": 3,
    "prereqs": "CHPL 500 and CHPL 598",
    "offered": "Resident and Online"
  },
  "CHPL681": {
    "title": "Healthcare Chaplaincy",
    "credits": 3,
    "prereqs": "CHPL 598 and CHPL 500",
    "offered": "Online"
  },
  "CHPL682": {
    "title": "Community Chaplaincy",
    "credits": 3,
    "prereqs": "CHPL 598 and CHPL 500",
    "offered": "Online"
  },
  "CHPL683": {
    "title": "Sports Chaplaincy",
    "credits": 3,
    "prereqs": "CHPL 500 and CHPL 598",
    "note": "Course available Spring 2018",
    "offered": "Online"
  },
  "CHPL695": {
    "title": "Directed Research",
    "credits": 3
  },
  "CHPL698": {
    "title": "Chaplaincy Practicum",
    "credits": 1
  },
  "CHPL699": {
    "title": "Chaplaincy Internship",
    "credits": 3,
    "prereqs": "CHPL 655 and HOMI 605 and (CHPL 680 or CHPL 681 or CHPL 682)",
    "offered": "Resident and Online"
  },
  "CHPL810": {
    "title": "Practical Theology of Chaplaincy",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CHPL820": {
    "title": "Chaplain Strategic Leadership",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CHPL830": {
    "title": "Ethics for Chaplain Leaders",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "CINE101": {
    "title": "Cinematic Arts Appreciation I",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE110": {
    "title": "Cinematic Arts Appreciation II",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE201": {
    "title": "Introduction to Screenwriting",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CINE202": {
    "title": "Introduction to Motion Picture Directing",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE203": {
    "title": "Introduction to Cinematography and Sound Design",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE204": {
    "title": "Guerilla Filmmaking",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE260": {
    "title": "Introduction to Documentary Filmmaking",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE271": {
    "title": "Pro Tools Fundamentals I",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE272": {
    "title": "Pro Tools Fundamentals II",
    "credits": 3,
    "prereqs": "CINE 271",
    "offered": "Resident"
  },
  "CINE281": {
    "title": "Media Composer Fundamentals I",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE282": {
    "title": "Media Composer Fundamentals II",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "CINE301": {
    "title": "Cinema Legal Environment",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE302": {
    "title": "Story Analysis",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE303": {
    "title": "Producing and Directing",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE304": {
    "title": "Production",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE305": {
    "title": "Editing",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE306": {
    "title": "Acting Fundamentals for Camera",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE320": {
    "title": "Feature Film Production: Concept to Distribution",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE330": {
    "title": "Micro Budget Filmmaking",
    "credits": 3,
    "offered": "Online"
  },
  "CINE340": {
    "title": "Theology and Cinema",
    "credits": 3,
    "offered": "Online"
  },
  "CINE350": {
    "title": "Thesis Production",
    "credits": 6,
    "offered": "Resident"
  },
  "CINE351": {
    "title": "Thesis Post-Production",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE353": {
    "title": "Feature Screenwriting",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE354": {
    "title": "Production Sound",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE355": {
    "title": "Documentary Audio Production",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE371": {
    "title": "Pro Tools Production II",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE374": {
    "title": "Production Sound Practicum",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE381": {
    "title": "Advanced Editing with Adobe Premiere Pro",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE385": {
    "title": "Advanced Editing and Color Correction in DaVinci Resolve",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE390": {
    "title": "Movie Stunts and Action for Camera",
    "credits": 2,
    "offered": "Resident"
  },
  "CINE391": {
    "title": "Advanced Camera Movement",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE392": {
    "title": "Advanced Lighting",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE393": {
    "title": "Budgeting for Feature Film",
    "credits": 1,
    "offered": "Resident"
  },
  "CINE394": {
    "title": "Scheduling for Feature Film",
    "credits": 1,
    "offered": "Resident"
  },
  "CINE395": {
    "title": "Advanced Visual Effects Post Production",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE396": {
    "title": "Advanced Cinematography",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE400": {
    "title": "Feature Pre-Production",
    "credits": 6,
    "offered": "Resident"
  },
  "CINE401": {
    "title": "Branding and Entrepreneurship",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE402": {
    "title": "Feature Production",
    "credits": 6,
    "offered": "Resident"
  },
  "CINE450": {
    "title": "Marketing and Distribution",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE452": {
    "title": "Advanced Post Production",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE453": {
    "title": "Screenplay Rewrite",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE454": {
    "title": "Audio Post-Production",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE455": {
    "title": "Persuasion",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident"
  },
  "CINE460": {
    "title": "Development and Pre-Production",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE461": {
    "title": "Scheduling and Budgeting",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE462": {
    "title": "Advanced Producing",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE470": {
    "title": "The Director/Actor Process and Workshop",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE471": {
    "title": "Advanced Directing",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE474": {
    "title": "Audio Post-Production Practicum",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE475": {
    "title": "Film Adaptation",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE477": {
    "title": "Showrunning a TV Series: The Writing Process",
    "credits": 3,
    "offered": "Resident"
  },
  "CINE497": {
    "title": "Special Topics Workshops in Cinema",
    "credits": 1,
    "offered": "Resident"
  },
  "CINE499": {
    "title": "Cinema Internship",
    "credits": 3,
    "note": "Applications are processed through the department Faculty Intern Advisor. Applicants must apply the semester prior to starting the internship.",
    "offered": "Resident"
  },
  "CJUS200": {
    "title": "Introduction to Criminal Justice",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CJUS210": {
    "title": "Criminology",
    "credits": 3
  },
  "CJUS230": {
    "title": "Criminal Justice Research and Writing",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CJUS231": {
    "title": "Criminal Justice Report Writing",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CJUS299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "CJUS300": {
    "title": "Administration of Justice Organizations",
    "credits": 3,
    "prereqs": "(CJUS 200 and CJUS 230)",
    "offered": "Resident and Online"
  },
  "CJUS310": {
    "title": "Juvenile Justice",
    "credits": 3,
    "prereqs": "(CJUS 200 and CJUS 230) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "CJUS320": {
    "title": "Corrections",
    "credits": 3,
    "prereqs": "(CJUS 200 and CJUS 230)",
    "offered": "Resident and Online"
  },
  "CJUS321": {
    "title": "Juvenile Corrections",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Online"
  },
  "CJUS322": {
    "title": "Community Based Corrections",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Online"
  },
  "CJUS323": {
    "title": "Delinquency and Crime Prevention",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Online"
  },
  "CJUS324": {
    "title": "Legal and Ethical Issues in Juvenile Justice",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Online"
  },
  "CJUS330": {
    "title": "Judicial Process",
    "credits": 3,
    "prereqs": "(CJUS 200 and CJUS 230)",
    "offered": "Resident and Online"
  },
  "CJUS340": {
    "title": "Criminology",
    "credits": 3,
    "prereqs": "(CJUS 200 and CJUS 230)",
    "offered": "Resident and Online"
  },
  "CJUS350": {
    "title": "Criminal Justice Ethics",
    "credits": 3,
    "prereqs": "CJUS 230 and CJUS 200",
    "offered": "Resident and Online"
  },
  "CJUS351": {
    "title": "Criminal Justice Reform",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Online"
  },
  "CJUS356": {
    "title": "Crisis Intervention for Criminal Justice",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230 and CJUS 340",
    "offered": "Online"
  },
  "CJUS357": {
    "title": "Evidence Based Community Corrections",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230 and CJUS 340",
    "offered": "Online"
  },
  "CJUS360": {
    "title": "Introduction to Forensics",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Resident and Online"
  },
  "CJUS361": {
    "title": "Crime Scene Photography",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Resident and Online"
  },
  "CJUS362": {
    "title": "Crime Scene Management",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Resident and Online"
  },
  "CJUS363": {
    "title": "Computer and Cyber Forensics",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Online"
  },
  "CJUS369": {
    "title": "Court and Expert Witness Testimony",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Resident and Online"
  },
  "CJUS380": {
    "title": "Introduction to Homeland Security",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "offered": "Online"
  },
  "CJUS381": {
    "title": "Incident Command System/Emergency Planning and Incident Management",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230 and CJUS 380",
    "offered": "Online"
  },
  "CJUS382": {
    "title": "Critical Infrastructure Protection",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230 and CJUS 380",
    "offered": "Online"
  },
  "CJUS383": {
    "title": "Behavioral Dimensions of Disaster",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230 and CJUS 380",
    "offered": "Online"
  },
  "CJUS400": {
    "title": "Criminal Law",
    "credits": 3,
    "prereqs": "(CJUS 200 and CJUS 230) or (GOVT 200 and GOVT 346)",
    "offered": "Resident and Online"
  },
  "CJUS405": {
    "title": "Interview and Interrogation",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230",
    "note": "Extra costs above tuition and fees apply.",
    "offered": "Resident"
  },
  "CJUS410": {
    "title": "Constitutional Criminal Procedure",
    "credits": 3,
    "prereqs": "(CJUS 230 and CJUS 200) or (GOVT 200 and GOVT 346)",
    "offered": "Resident and Online"
  },
  "CJUS420": {
    "title": "Criminal Investigations I",
    "credits": 3,
    "prereqs": "(CJUS 200 and CJUS 230)",
    "note": "Offered fall semester",
    "offered": "Resident and Online"
  },
  "CJUS421": {
    "title": "Criminal Investigations II",
    "credits": 3,
    "prereqs": "(CJUS 230 and CJUS 420) or (GOVT 346 and CJUS 420)",
    "note": "Offered spring semester only",
    "offered": "Resident"
  },
  "CJUS422": {
    "title": "Forensics Colloquium",
    "credits": 1,
    "prereqs": "CJUS 230 and CJUS 200",
    "offered": "Resident"
  },
  "CJUS423": {
    "title": "Criminal Investigations III",
    "credits": 3,
    "prereqs": "CJUS 200 and CJUS 230 and CJUS 420",
    "offered": "Resident"
  },
  "CJUS440": {
    "title": "Criminal Investigations",
    "credits": 3
  },
  "CJUS450": {
    "title": "Comparative Criminal Justice Field Study",
    "credits": 3,
    "prereqs": "(CJUS 200 and CJUS 230) or (CJUS 200 and GOVT 346)",
    "note": "Summer term only",
    "offered": "Resident"
  },
  "CJUS497": {
    "title": "Special Topics",
    "credits": 3,
    "prereqs": "(CJUS 200 and CJUS 230) or (CJUS 200 and GOVT 346)",
    "offered": "Resident"
  },
  "CJUS499": {
    "title": "Criminal Justice Internship",
    "credits": 1,
    "prereqs": "CJUS 230",
    "offered": "Resident and Online"
  },
  "CJUS500": {
    "title": "Criminal Justice Integration",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS520": {
    "title": "Administration of Justice Organizations",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS530": {
    "title": "Human Resource Management in Criminal Justice Organizations",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS534": {
    "title": "Human Resources and Civil Rights for Law Enforcement Leaders",
    "credits": 3,
    "note": "Course offered beginning in Spring 2020",
    "offered": "Online"
  },
  "CJUS535": {
    "title": "Strategic Intelligence for Law Enforcement Leaders",
    "credits": 3,
    "note": "Course offered beginning in Spring 2020",
    "offered": "Online"
  },
  "CJUS536": {
    "title": "Perspectives in Law Enforcement Leadership",
    "credits": 3,
    "note": "Course offered beginning in Spring 2020",
    "offered": "Online"
  },
  "CJUS540": {
    "title": "Cybercrime Law and Public Policy",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS542": {
    "title": "Advanced Cybercrime Investigation",
    "credits": 3,
    "note": "Course offered beginning in Spring 2020",
    "offered": "Online"
  },
  "CJUS550": {
    "title": "Topics and Trends in Criminal Justice",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS601": {
    "title": "Criminal Justice Program Evaluation",
    "credits": 3,
    "prereqs": "CJUS 500 and CJUS 520 and CJUS 530 and CJUS 550",
    "offered": "Online"
  },
  "CJUS610": {
    "title": "Leadership, Ethics and Policing",
    "credits": 3,
    "prereqs": "CJUS 500 and CJUS 520 and CJUS 530 and CJUS 550",
    "offered": "Online"
  },
  "CJUS620": {
    "title": "Fundamentals of Forensic Psychology",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS630": {
    "title": "Crisis Intervention in Law Enforcement",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS640": {
    "title": "Psychology &amp; the Legal System",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS644": {
    "title": "Corrections Policy and Procedure",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS645": {
    "title": "Introduction to Restorative Justice",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS646": {
    "title": "Community Corrections",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS647": {
    "title": "Restorative Justice in the Community",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS648": {
    "title": "Management of Correctional Facilities",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS649": {
    "title": "Victimology",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS650": {
    "title": "Rehabilitation &amp; Reintegration of Offenders",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS688": {
    "title": "Thesis Proposal",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS689": {
    "title": "Thesis Research",
    "credits": 3,
    "prereqs": "CJUS 688",
    "offered": "Online"
  },
  "CJUS690": {
    "title": "Thesis Defense",
    "credits": 3,
    "prereqs": "CJUS 689",
    "offered": "Online"
  },
  "CJUS695": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS697": {
    "title": "Special Topics in Criminal Justice",
    "credits": 3
  },
  "CJUS700": {
    "title": "Theories of Crime",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS701": {
    "title": "Comparative Criminal Justice Systems",
    "credits": 3,
    "offered": "Online"
  },
  "CJUS702": {
    "title": "Advanced Juvenile Justice Policy",
    "credits": 3,
    "prereqs": "CJUS 700",
    "offered": "Online"
  },
  "CJUS703": {
    "title": "Advanced Corrections Policy",
    "credits": 3,
    "prereqs": "CJUS 700",
    "offered": "Online"
  },
  "CJUS730": {
    "title": "Advanced Criminal Justice Leadership",
    "credits": 3,
    "prereqs": "CJUS 801",
    "offered": "Online"
  },
  "CJUS732": {
    "title": "Strategic Planning in Criminal Justice",
    "credits": 3,
    "prereqs": "CJUS 730",
    "offered": "Online"
  },
  "CJUS734": {
    "title": "Human Resource Law and Civil Rights in Criminal Justice",
    "credits": 3,
    "prereqs": "CJUS 732",
    "offered": "Online"
  },
  "CJUS736": {
    "title": "Advanced Human Resources Development in Criminal Justice",
    "credits": 3,
    "prereqs": "CJUS 701 and CJUS 702 and CJUS 703",
    "offered": "Online"
  },
  "CJUS740": {
    "title": "Advanced Research Design",
    "credits": 3,
    "prereqs": "CJUS 700",
    "offered": "Online"
  },
  "CJUS745": {
    "title": "Quantitative Methods of Research",
    "credits": 3,
    "prereqs": "CJUS 740",
    "offered": "Online"
  },
  "CJUS750": {
    "title": "Qualitative Methods of Research",
    "credits": 3,
    "prereqs": "CJUS 740",
    "offered": "Online"
  },
  "CJUS801": {
    "title": "Criminal Justice Program Evaluation",
    "credits": 3,
    "prereqs": "CJUS 740 and CJUS 745 and CJUS 750",
    "offered": "Online"
  },
  "CJUS810": {
    "title": "Transnational Organized Crime",
    "credits": 3,
    "prereqs": "CJUS 700 and CJUS 701",
    "offered": "Online"
  },
  "CJUS820": {
    "title": "Advanced Topics in Terrorism and Intelligence",
    "credits": 3,
    "prereqs": "CJUS 700 and CJUS 701 and CJUS 740",
    "offered": "Online"
  },
  "CJUS830": {
    "title": "Criminal Justice Organizational Conflict",
    "credits": 3,
    "prereqs": "CJUS 701 and CJUS 702 and CJUS 703",
    "offered": "Online"
  },
  "CJUS840": {
    "title": "Stress Management in Criminal Justice",
    "credits": 3,
    "prereqs": "CJUS 700",
    "offered": "Online"
  },
  "CJUS885": {
    "title": "Research Concept",
    "credits": 3,
    "prereqs": "CJUS 700 and CJUS 701 and CJUS 702 and CJUS 703 and CJUS 740 and CJUS 745 and CJUS 750 and CJUS 801",
    "note": "A dissertation chair and reader must be selected using the Dissertation Pairing tool, prior to enrolling in this course.",
    "offered": "Online"
  },
  "CJUS887": {
    "title": "Capstone I",
    "credits": 5,
    "prereqs": "CJUS 885",
    "offered": "Online"
  },
  "CJUS888": {
    "title": "Capstone II",
    "credits": 5,
    "prereqs": "CJUS 887",
    "offered": "Online"
  },
  "CJUS889": {
    "title": "Capstone III",
    "credits": 5,
    "prereqs": "CJUS 888",
    "offered": "Online"
  },
  "CJUS890": {
    "title": "Capstone IV",
    "credits": 0,
    "prereqs": "CJUS 889",
    "offered": "Online"
  },
  "CJUS980": {
    "title": "Dissertation Prospectus",
    "credits": 5,
    "prereqs": "CJUS 700 and CJUS 701 and CJUS 702 and CJUS 703 and CJUS 740 and CJUS 745 and CJUS 750 and CJUS 801 and CJUS 810 and CJUS 820 and CJUS 830 and CJUS 840",
    "offered": "Online"
  },
  "CJUS987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "CJUS 885",
    "offered": "Online"
  },
  "CJUS988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "CJUS 987",
    "offered": "Online"
  },
  "CJUS989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "CJUS 988",
    "offered": "Online"
  },
  "CJUS990": {
    "title": "Dissertation IV - Dissertation Defense",
    "credits": 5,
    "prereqs": "CJUS 989",
    "offered": "Online"
  },
  "CLB0001": {
    "title": "Junior Beta",
    "credits": 0
  },
  "CLB0002": {
    "title": "Beta Club",
    "credits": 0
  },
  "CLB0003": {
    "title": "Bible Study Elementary K-2",
    "credits": 0
  },
  "CLB0004": {
    "title": "Bible Study Elementary Boys 3-5",
    "credits": 0
  },
  "CLB0005": {
    "title": "Bible Study Elementary Girls 3-5",
    "credits": 0
  },
  "CLB0006": {
    "title": "Bible Study Middle School Boys",
    "credits": 0
  },
  "CLB0007": {
    "title": "Bible Study Middle School Girls",
    "credits": 0
  },
  "CLB0008": {
    "title": "Bible Study High School Boys",
    "credits": 0
  },
  "CLB0009": {
    "title": "Bible Study High School Girls",
    "credits": 0
  },
  "CLB0010": {
    "title": "Book Club Elementary K-2",
    "credits": 0
  },
  "CLB0011": {
    "title": "Book Club Elementary 3-5",
    "credits": 0
  },
  "CLB0012": {
    "title": "Book Club Middle School",
    "credits": 0
  },
  "CLB0013": {
    "title": "Book Club High School",
    "credits": 0
  },
  "CLB0014": {
    "title": "Chess Club Middle School",
    "credits": 0
  },
  "CLB0015": {
    "title": "Chess Club High School",
    "credits": 0
  },
  "CLB0016": {
    "title": "Senior Class Club High School",
    "credits": 0
  },
  "CLB0017": {
    "title": "Cooking Club Middle School",
    "credits": 0
  },
  "CLB0018": {
    "title": "Cooking Club High School",
    "credits": 0
  },
  "CLB0019": {
    "title": "Creativity Club Elementary K-2",
    "credits": 0
  },
  "CLB0020": {
    "title": "Creativity Club Elementary 3-5",
    "credits": 0
  },
  "CLB0021": {
    "title": "Creativity Club Middle School",
    "credits": 0
  },
  "CLB0022": {
    "title": "Creativity Club High School",
    "credits": 0
  },
  "CLB0023": {
    "title": "Science Club Middle School",
    "credits": 0
  },
  "CLB0024": {
    "title": "Science Club High School",
    "credits": 0
  },
  "CLB0025": {
    "title": "Social Media Club High School",
    "credits": 0
  },
  "CLB0026": {
    "title": "Sports Fellowship Club Elementary K-2",
    "credits": 0
  },
  "CLB0027": {
    "title": "Sports Fellowship Club Elementary 3-5",
    "credits": 0
  },
  "CLB0028": {
    "title": "Sports Fellowship Club Middle School",
    "credits": 0
  },
  "CLB0029": {
    "title": "Sports Fellowship Club High School",
    "credits": 0
  },
  "CLB0030": {
    "title": "STEM Club Elementary K-2",
    "credits": 0
  },
  "CLB0031": {
    "title": "STEM Club Elementary 3-5",
    "credits": 0
  },
  "CLB0032": {
    "title": "STEM Club Middle School",
    "credits": 0
  },
  "CLB0033": {
    "title": "STEM Club High School",
    "credits": 0
  },
  "CLCM200": {
    "title": "Spiritual Foundations for the Christian Life",
    "credits": 3,
    "offered": "Resident"
  },
  "CLCM205": {
    "title": "Introduction to Humanitarian Action",
    "credits": 3,
    "prereqs": "GLST 220 and THEO 320 and THEO 325",
    "offered": "Online"
  },
  "CLCM210": {
    "title": "Introduction to Camp and Outdoor Adventure Leadership",
    "credits": 3,
    "offered": "Resident"
  },
  "CLCM220": {
    "title": "Foundations and Programming in Camp and Outdoor Leadership",
    "credits": 3,
    "offered": "Resident"
  },
  "CLCM250": {
    "title": "Introduction to Christian Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "CLCM301": {
    "title": "Biblical and Theological Foundations of Digital Ministry",
    "credits": 3,
    "prereqs": "RLGN 301",
    "offered": "Online"
  },
  "CLCM305": {
    "title": "Legal Issues in Camp Ministry",
    "credits": 3,
    "prereqs": "(CLCM 210 or COAL 210)",
    "offered": "Resident"
  },
  "CLCM310": {
    "title": "Christian Camp: Site Plan and Design",
    "credits": 3,
    "prereqs": "CLCM 210 or COAL 210 or CLCM 220 or COAL 220",
    "offered": "Resident"
  },
  "CLCM350": {
    "title": "Formation and Community in Digital Ministry",
    "credits": 3,
    "prereqs": "CLCM 301",
    "offered": "Online"
  },
  "CLCM370": {
    "title": "Managing the Christian Ministry Organization",
    "credits": 3,
    "prereqs": "(CLCM 210 or COAL 210 or COAL 220 or CLCM 220) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "CLCM401": {
    "title": "Digital Discipleship",
    "credits": 3,
    "prereqs": "CLCM 301",
    "offered": "Online"
  },
  "CLCM405": {
    "title": "Ministry Finance",
    "credits": 3,
    "prereqs": "(CLCM 210 or COAL 210) and (CLCM 220 or COAL 220)",
    "offered": "Resident"
  },
  "CLCM410": {
    "title": "Principles of Ministry Marketing",
    "credits": 3,
    "prereqs": "(CLCM 210 or COAL 210) and (CLCM 220 or COAL 220)",
    "offered": "Resident"
  },
  "CLCM450": {
    "title": "Digital Ministry Development and Administration",
    "credits": 3,
    "prereqs": "CLCM 301",
    "offered": "Online"
  },
  "CLCM460": {
    "title": "Camp and Outdoor Ministry: Property, Programs, Policies, and Procedure",
    "credits": 3,
    "prereqs": "(CLCM 210 or COAL 210 or COAL 220 or CLCM 220) and (CLCM 310 or COAL 310 or COAL 370 or CLCM 370)",
    "offered": "Resident"
  },
  "CLCM475": {
    "title": "Humanitarian Action in Praxis",
    "credits": 3,
    "prereqs": "CLCM 205 and GLST 220 and THEO 320 and THEO 325",
    "offered": "Online"
  },
  "CLCM489": {
    "title": "Christian Ministry Capstone Seminar",
    "credits": 3,
    "prereqs": "BIBL 360 and CLCM 250 and RLGN 301 and RLGN 360 and THEO 360",
    "offered": "Online"
  },
  "CLCM497": {
    "title": "Special Topics in CLCM",
    "credits": 1,
    "offered": "Resident"
  },
  "CLCM499": {
    "title": "Internship/Practicum",
    "credits": 1,
    "prereqs": "(CLCM 210 or COAL 210) and (CLCM 220 or COAL 220) and (CLCM 310 or COAL 310)",
    "offered": "Resident"
  },
  "CLCM501": {
    "title": "Faith-Based Humanitarian Action and Leadership Survey",
    "credits": 3,
    "prereqs": "THEO 615",
    "offered": "Online"
  },
  "CLCM510": {
    "title": "Constructing a Theology of Networks for the Digital Age",
    "credits": 3,
    "prereqs": "RTCH 500",
    "offered": "Resident and Online"
  },
  "CLCM520": {
    "title": "Spiritual Formation in the Digital Age",
    "credits": 3,
    "prereqs": "RTCH 500",
    "offered": "Resident and Online"
  },
  "CLCM530": {
    "title": "Creating Christian Community Online",
    "credits": 3,
    "prereqs": "RTCH 500",
    "offered": "Resident and Online"
  },
  "CLCM540": {
    "title": "Introduction to Ministry in the Digital Age",
    "credits": 3,
    "prereqs": "RTCH 500",
    "offered": "Resident and Online"
  },
  "CLCM600": {
    "title": "Organizing a Faith-Based Humanitarian Response",
    "credits": 3,
    "prereqs": "CLCM 501 and THEO 615",
    "offered": "Online"
  },
  "CLCM601": {
    "title": "Faith-Based Program Design in Disaster Relief",
    "credits": 3,
    "prereqs": "CLCM 501 and THEO 615",
    "offered": "Online"
  },
  "CLCM602": {
    "title": "Assessments and Monitoring, Evaluation, and Learning for Faith-Based Disaster Relief Organizations",
    "credits": 3,
    "prereqs": "CLCM 501 and THEO 615",
    "offered": "Online"
  },
  "CLCM691": {
    "title": "Humanitarian Action and Human Rights Capstone",
    "credits": 3,
    "prereqs": "((GLST 525 or GLST 600 or APOL 525) and CRIS 605 and GLST 650 and CLCM 501 and CLCM 600 and HUMR 501 and JURI 680 and THEO 615 )",
    "offered": "Online"
  },
  "CLED300": {
    "title": "Biblical and Theological Foundations of Christian Leadership",
    "credits": 3,
    "prereqs": "CHMN 201 and (THEO 201 or THEO 104)",
    "offered": "Online"
  },
  "CLED310": {
    "title": "Foundations of Christian Leadership",
    "credits": 3,
    "prereqs": "CHMN 201",
    "offered": "Resident"
  },
  "CLED325": {
    "title": "Critical Issues in Ministry Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "CLED365": {
    "title": "The Personal Development of the Leader",
    "credits": 3,
    "prereqs": "CLED 300 or CLED 310",
    "offered": "Resident and Online"
  },
  "CLED410": {
    "title": "Team Dynamics in Christian Leadership",
    "credits": 3,
    "prereqs": "CLED 310 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CLED425": {
    "title": "Ethical Issues in Christian Leadership",
    "credits": 3,
    "prereqs": "CLED 310 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CLED450": {
    "title": "Organization and Leadership in Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "CLED489": {
    "title": "Capstone Seminar",
    "credits": 3,
    "prereqs": "CLED 300 and CLED 365",
    "offered": "Online"
  },
  "CLED499": {
    "title": "Christian Leadership Internship",
    "credits": 3,
    "prereqs": "CHMN 447 and CLED 410",
    "offered": "Resident"
  },
  "CLED697": {
    "title": "Seminar",
    "credits": 1,
    "offered": "Resident"
  },
  "CLED699": {
    "title": "Internship Christian Leadership",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "CLED700": {
    "title": "Biblical &amp; Theological Foundations of Leadership",
    "credits": 3,
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED715": {
    "title": "Ecologies of Christian Formation",
    "credits": 3,
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED720": {
    "title": "Biblical &amp; Theological Foundations of Education",
    "credits": 3,
    "prereqs": "CLED 700",
    "offered": "Online"
  },
  "CLED730": {
    "title": "Research Methods for Christian Leadership I",
    "credits": 3,
    "prereqs": "CLED 700",
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED745": {
    "title": "Leadership &amp; Cultural Contextualization",
    "credits": 3,
    "prereqs": "CLED 700",
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED765": {
    "title": "Trends &amp; Issues of Contemporary Leadership",
    "credits": 3,
    "prereqs": "CLED 700",
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED770": {
    "title": "Research Methods for Christian Leadership II",
    "credits": 3,
    "prereqs": "CLED 730",
    "offered": "Online"
  },
  "CLED780": {
    "title": "Change, Power, and Conflict in Leadership",
    "credits": 3,
    "prereqs": "CLED 700",
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED800": {
    "title": "Theological Anthropology in Leadership &amp; Education",
    "credits": 3,
    "prereqs": "CLED 700 and CLED 720",
    "note": "Prerequisites for PhD Psychology: Theology students will be waived Note: Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED805": {
    "title": "Research Methods for Christian Leadership III",
    "credits": 3,
    "prereqs": "CLED 730 and CLED 770",
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED815": {
    "title": "Character &amp; Ethics in Leadership &amp; Education",
    "credits": 3,
    "prereqs": "CLED 700 and CLED 720 and CLED 800",
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED820": {
    "title": "Leadership and Management Theory",
    "credits": 3,
    "prereqs": "CLED 800",
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED830": {
    "title": "Research Methods for Christian Leadership IV",
    "credits": 3,
    "prereqs": "CLED 700 and CLED 720 and CLED 745 and CLED 780",
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED835": {
    "title": "Organizational Theory and Development",
    "credits": 3,
    "prereqs": "CLED 700 and CLED 720 and CLED 820",
    "note": "Enrollment in the School of Divinity EdD in Christian Leadership",
    "offered": "Online"
  },
  "CLED845": {
    "title": "Group and Team Dynamics: Theory and Practice in Leadership",
    "credits": 3,
    "prereqs": "CLED 700 and CLED 720 and CLED 800",
    "offered": "Online"
  },
  "CLED855": {
    "title": "Teaching &amp; Learning: Theory &amp; Practice in Leadership",
    "credits": 3,
    "prereqs": "CLED 700 and CLED 720 and CLED 800",
    "offered": "Online"
  },
  "CLED885": {
    "title": "Praxis I: Planning and Design I",
    "credits": 3,
    "prereqs": "((CHMN 810 and CHMN 820 and CLED 780 and CLED 715 and CLED 745 and CLED 765) or (CLCM 510 and CLCM 520 and CLCM 530 and CLCM 540) or (CLED 715 and CLED 745 and CLED 765 and CLED 780) or (CLED 715 and CHMN 840 and CHMN 841 and CHMN 842) or (CLED 715 and DSMN 850 and DSMN 860 and DSMN 870) or (CHMN 860 and CHMN 861 and CLED 745 and CLED 780)) and CLED 700 and CLED 720 and CLED 800 and CLED 815 and CLED 820 and CLED 835 and CLED 845 and CLED 855",
    "offered": "Online"
  },
  "CLED886": {
    "title": "Praxis II: Planning and Design II",
    "credits": 3,
    "prereqs": "CLED 885",
    "offered": "Online"
  },
  "CLED887": {
    "title": "Praxis III: Planning and Design III",
    "credits": 3,
    "prereqs": "CLED 886",
    "offered": "Online"
  },
  "CLED888": {
    "title": "Praxis IV: Implementation I",
    "credits": 3,
    "prereqs": "CLED 887",
    "offered": "Online"
  },
  "CLED889": {
    "title": "Praxis V: Implementation II",
    "credits": 3,
    "prereqs": "CLED 888",
    "offered": "Online"
  },
  "CLED890": {
    "title": "Praxis VI: Assessment",
    "credits": 3,
    "prereqs": "CLED 889",
    "offered": "Online"
  },
  "CLED900": {
    "title": "Research Methods for Christian Leadership V",
    "credits": 3,
    "prereqs": "CLED 700 and CLED 720 and CLED 730 and CLED 770 and CLED 800 and CLED 805 and CLED 815 and CLED 820 and CLED 830 and CLED 835 and CLED 845 and CLED 855",
    "offered": "Online"
  },
  "CLED905": {
    "title": "Research Methods for Christian Leadership VI",
    "credits": 3,
    "prereqs": "CLED 900",
    "offered": "Online"
  },
  "CLED987": {
    "title": "Research Methods for Christian Leadership V",
    "credits": 5,
    "prereqs": "CLED 700 and CLED 720 and CLED 730 and CLED 770 and CLED 800 and CLED 805 and CLED 815 and CLED 820 and CLED 830 and CLED 835 and CLED 845 and CLED 855",
    "offered": "Online"
  },
  "CLED988": {
    "title": "Research Methods for Christian Leadership VI",
    "credits": 5,
    "offered": "Online"
  },
  "CLED989": {
    "title": "Dissertation Research &amp; Writing",
    "credits": 5,
    "prereqs": "CLED 905 or CLED 988",
    "offered": "Online"
  },
  "CLED990": {
    "title": "Dissertation Defense",
    "credits": 1,
    "prereqs": "CLED 989",
    "offered": "Online"
  },
  "CLED995": {
    "title": "Directed Research",
    "credits": 1
  },
  "CLED997": {
    "title": "Seminar in Biblical Leadership",
    "credits": 3
  },
  "CLST100": {
    "title": "Foundations for Academic Success",
    "credits": 3,
    "offered": "Online"
  },
  "CLST102": {
    "title": "College Reading Improvement",
    "credits": 1,
    "offered": "Resident"
  },
  "CLST103": {
    "title": "Individualized Curriculum to Support Academic Success",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "CLST113": {
    "title": "Foundations of English",
    "credits": 1,
    "offered": "Online"
  },
  "CLST301": {
    "title": "Soft Skills Training for Employment Success",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "CMIN500": {
    "title": "Foundations for Children's Ministry",
    "credits": 3
  },
  "CMIN600": {
    "title": "Nurture and Formation of Children",
    "credits": 3
  },
  "CMIN610": {
    "title": "Discipleship and Education of Children",
    "credits": 3,
    "offered": "Online"
  },
  "CMIN650": {
    "title": "Administration of Children's Ministries",
    "credits": 3,
    "offered": "Online"
  },
  "CMIN660": {
    "title": "Resources for Children's Ministries",
    "credits": 3
  },
  "CMIN698": {
    "title": "Children's Ministry Practicum",
    "credits": 1
  },
  "CMUS102": {
    "title": "Survey of Music Technology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CMUS105": {
    "title": "Commercial Theory and Harmonic Practices I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CMUS106": {
    "title": "Commercial Theory and Harmonic Practices II",
    "credits": 3,
    "prereqs": "CMUS 105",
    "offered": "Resident and Online"
  },
  "CMUS107": {
    "title": "Commercial Musicianship I",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "CMUS108": {
    "title": "Commercial Musicianship II",
    "credits": 1,
    "prereqs": "CMUS 107",
    "offered": "Resident and Online"
  },
  "CMUS133": {
    "title": "Music Technology for Film Scoring",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CMUS151": {
    "title": "Commercial Applied Music I",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "CMUS152": {
    "title": "Commercial Applied Music II",
    "credits": 1,
    "prereqs": "CMUS 151",
    "offered": "Resident and Online"
  },
  "CMUS193": {
    "title": "Innovative Commercial Music Ensemble I",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "CMUS213": {
    "title": "Survey of Commercial Music Literature",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CMUS218": {
    "title": "Commercial Music Production and Audio",
    "credits": 3,
    "prereqs": "CMUS 102",
    "offered": "Resident and Online"
  },
  "CMUS251": {
    "title": "Commercial Applied Music III",
    "credits": 1,
    "prereqs": "CMUS 152",
    "offered": "Resident and Online"
  },
  "CMUS252": {
    "title": "Commercial Applied Music IV",
    "credits": 1,
    "prereqs": "CMUS 251",
    "offered": "Resident and Online"
  },
  "CMUS261": {
    "title": "Concert Promotions and Tour Management",
    "credits": 3,
    "offered": "Resident"
  },
  "CMUS308": {
    "title": "Development of the Artist",
    "credits": 2,
    "offered": "Resident"
  },
  "CMUS315": {
    "title": "Basic Conducting",
    "credits": 3,
    "prereqs": "CMUS 106",
    "offered": "Resident and Online"
  },
  "CMUS329": {
    "title": "Fundamentals of Sound Reinforcement",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CMUS330": {
    "title": "Commercial Music Technology I: Notation",
    "credits": 3,
    "prereqs": "CMUS 102 and CMUS 106 and CMUS 108",
    "offered": "Resident and Online"
  },
  "CMUS334": {
    "title": "Commercial Music Technology II: Sequencing",
    "credits": 3,
    "prereqs": "CMUS 330",
    "offered": "Resident and Online"
  },
  "CMUS335": {
    "title": "Digital Audio Workstation Skills",
    "credits": 3,
    "offered": "Online"
  },
  "CMUS336": {
    "title": "Advanced Digital Audio Workstation Skills",
    "credits": 3,
    "prereqs": "CMUS 335",
    "offered": "Online"
  },
  "CMUS353": {
    "title": "Entertainment Law in the Music Industry",
    "credits": 3,
    "offered": "Online"
  },
  "CMUS354": {
    "title": "Music Business Agreements and Licensing",
    "credits": 3,
    "offered": "Online"
  },
  "CMUS355": {
    "title": "Recorded Music Operations",
    "credits": 3,
    "offered": "Online"
  },
  "CMUS356": {
    "title": "Music Marketing",
    "credits": 3,
    "offered": "Online"
  },
  "CMUS357": {
    "title": "Artist Development and Tour Management",
    "credits": 3,
    "offered": "Online"
  },
  "CMUS360": {
    "title": "Commercial Improvisation Techniques",
    "credits": 3,
    "prereqs": "CMUS 106",
    "offered": "Resident and Online"
  },
  "CMUS362": {
    "title": "Studio Producing, Mixing, and Audio Engineering",
    "credits": 3,
    "prereqs": "CMUS 218",
    "offered": "Online"
  },
  "CMUS372": {
    "title": "Entrepreneurship in Commercial Music Community",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CMUS408": {
    "title": "Development of the Song",
    "credits": 2,
    "offered": "Resident"
  },
  "CMUS423": {
    "title": "Commercial Music Portfolio",
    "credits": 1,
    "prereqs": "(MUSC 368 or MUSC 369 or MUSC 396 or MUSC 398) and Sophomore Review with a score of 1",
    "offered": "Resident"
  },
  "CMUS424": {
    "title": "Music Production Capstone",
    "credits": 1,
    "prereqs": "Sophomore Review with a score of 1",
    "offered": "Resident"
  },
  "CMUS429": {
    "title": "Sound Reinforcement II",
    "credits": 3,
    "prereqs": "CMUS 329",
    "offered": "Online"
  },
  "CMUS436": {
    "title": "Christian Music Industry Seminar: Songwriting",
    "credits": 3,
    "prereqs": "CMUS 106",
    "offered": "Resident and Online"
  },
  "CMUS437": {
    "title": "Advanced Film Score Programming",
    "credits": 2,
    "prereqs": "MUSC 334",
    "offered": "Resident"
  },
  "CMUS462": {
    "title": "Advanced Digital Audio Production",
    "credits": 3,
    "prereqs": "CMUS 336",
    "offered": "Online"
  },
  "CMUS465": {
    "title": "Applied Audio Production",
    "credits": 1,
    "prereqs": "CMUS 429 or CMUS 462",
    "offered": "Online"
  },
  "CMUS493": {
    "title": "Innovative Commercial Music Ensemble II",
    "credits": 1,
    "prereqs": "CMUS 193",
    "offered": "Resident and Online"
  },
  "CMUS496": {
    "title": "Commercial Music Project",
    "credits": 3,
    "prereqs": "CMUS 436",
    "offered": "Resident and Online"
  },
  "CMUS499": {
    "title": "Commercial Music Apprenticeship",
    "credits": 3,
    "prereqs": "CMUS 436",
    "offered": "Resident and Online"
  },
  "COMS101": {
    "title": "Speech Communication",
    "credits": 3,
    "prereqs": "ENGL 100 or ENGL 101 or ESOL 100 or Placement Score-English with a score of 070",
    "offered": "Resident and Online"
  },
  "COMS113": {
    "title": "Intro to Design:Principles/Ele",
    "credits": 3
  },
  "COMS301": {
    "title": "Basic Photography",
    "credits": 3
  },
  "COMS315": {
    "title": "Oral Interpretation",
    "credits": 3,
    "note": "Offered fall semester",
    "offered": "Resident"
  },
  "COMS325": {
    "title": "Interpersonal Communication",
    "credits": 3,
    "note": "Offered fall semester",
    "offered": "Resident"
  },
  "COMS330": {
    "title": "Small Group Communication",
    "credits": 3,
    "note": "Offered fall semester",
    "offered": "Resident"
  },
  "COMS335": {
    "title": "Argumentation",
    "credits": 3,
    "prereqs": "COMS 101",
    "offered": "Resident"
  },
  "COMS340": {
    "title": "Publication Design",
    "credits": 3
  },
  "COMS346": {
    "title": "Advertising Copywriting and Design",
    "credits": 3,
    "prereqs": "(COMS 110 and COMS 220 and COMS 307 and VCAR 222) or (COMS 110 and COMS 220 and COMS 307 and ARTS 222)",
    "offered": "Resident"
  },
  "COMS351": {
    "title": "Digital Imaging",
    "credits": 3
  },
  "COMS355": {
    "title": "Organizational Communication",
    "credits": 3,
    "prereqs": "COMS 101",
    "note": "Offered spring semester",
    "offered": "Resident"
  },
  "COMS357": {
    "title": "Public Relations Writing",
    "credits": 3,
    "prereqs": "COMS 110 and COMS 220 and COMS 234 and COMS 307 and (VCAR 222 or ARTS 222) and (VCAR 340 or ARTS 340)",
    "offered": "Resident"
  },
  "COMS367": {
    "title": "Public Relations Strategies",
    "credits": 3,
    "prereqs": "COMS 110 and COMS 220 and COMS 234 and COMS 307 and COMS 357 and (VCAR 222 or ARTS 222) and (VCAR 340 or ARTS 340)",
    "offered": "Resident"
  },
  "COMS368": {
    "title": "Media Sales &amp; Audience Measure",
    "credits": 3
  },
  "COMS369": {
    "title": "Chronicle of Motion Pictures and Television",
    "credits": 3,
    "offered": "Resident"
  },
  "COMS371": {
    "title": "Advanced Graphic Design",
    "credits": 3
  },
  "COMS387": {
    "title": "Forensic Practicum",
    "credits": 1,
    "prereqs": "(ARTS 110 and COMS 222 and COMS 232 and COMS 341) or (ARTS 110 and COMS 200 and COMS 232 and COMS 341)",
    "offered": "Resident"
  },
  "COMS388": {
    "title": "King's Players Practicum",
    "credits": 1,
    "offered": "Resident"
  },
  "COMS389": {
    "title": "Selah Practicum",
    "credits": 1,
    "prereqs": "COMS 222 or VCAR 222 or ARTS 222",
    "offered": "Resident"
  },
  "COMS455": {
    "title": "Communication Theory",
    "credits": 3,
    "prereqs": "COMS 101 and COMS 210",
    "note": "Offered fall semester",
    "offered": "Resident"
  },
  "COMS465": {
    "title": "Rhetorical Theory",
    "credits": 3,
    "prereqs": "COMS 101 and COMS 210",
    "note": "Offered spring semester",
    "offered": "Resident"
  },
  "COMS472": {
    "title": "Interactive Multimedia Design",
    "credits": 3
  },
  "COMS474": {
    "title": "Advanced Audio Production",
    "credits": 3,
    "prereqs": "COMS 101 and COMS 110 and COMS 220 and COMS 324 and COMS 334",
    "note": "Offered spring semester",
    "offered": "Resident"
  },
  "COMS475": {
    "title": "Criticism of Public Address",
    "credits": 3,
    "prereqs": "COMS 101 and COMS 210",
    "note": "Offered fall semester",
    "offered": "Resident"
  },
  "COMS490": {
    "title": "Crisis Communication",
    "credits": 3,
    "offered": "Resident"
  },
  "COMS492": {
    "title": "Prof Practices in Graphic Desi",
    "credits": 3,
    "prereqs": "(ARTS 110 and COMS 222 and COMS 232 and COMS 341 and COMS 351 and COMS 371) or (ARTS 110 and COMS 200 and COMS 232 and COMS 341 and COMS 351 and COMS 371)",
    "offered": "Resident"
  },
  "COMS498": {
    "title": "Senior Portfolio",
    "credits": 3,
    "offered": "Resident"
  },
  "COMS499": {
    "title": "Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "COMS520": {
    "title": "Communication Theory and Practices",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS522": {
    "title": "Interpersonal Communication Theory and Practice",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS524": {
    "title": "Small Group and Team Communications",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS526": {
    "title": "Investigative Storytelling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS532": {
    "title": "Media Technologies and Communication Strategies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS534": {
    "title": "Strategic Media Analysis",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS542": {
    "title": "Communication in Christian Ministry",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS546": {
    "title": "Effective Social Media",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS550": {
    "title": "Creativity in Teaching Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS552": {
    "title": "Leadership Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS554": {
    "title": "Strategies and Tactics of Persuasion",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS558": {
    "title": "Listening and Nonverbal Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS560": {
    "title": "Communication and Conflict",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS562": {
    "title": "Web Strategies for Growth",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS597": {
    "title": "Seminar in Communications (Gra",
    "credits": 3
  },
  "COMS612": {
    "title": "Rhetorical Theory and Criticism",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS622": {
    "title": "Organizational Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS624": {
    "title": "Intercultural Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS630": {
    "title": "Professional Communication &amp; Nonprofit Development",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS632": {
    "title": "Politics and Media",
    "credits": 3,
    "offered": "Resident"
  },
  "COMS639": {
    "title": "The Transmedia Organization",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS640": {
    "title": "Event Planning &amp; Donor Relations",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS652": {
    "title": "Organizational Communication Consulting",
    "credits": 3,
    "offered": "Resident"
  },
  "COMS656": {
    "title": "Media Strategies",
    "credits": 3,
    "offered": "Resident"
  },
  "COMS658": {
    "title": "Strategic Communication Campaigns for the Digital Age",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS670": {
    "title": "Comprehensive Examination",
    "credits": 3,
    "offered": "Online"
  },
  "COMS680": {
    "title": "Communication Research Design",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS689": {
    "title": "Thesis/Project Proposal and Research",
    "credits": 3,
    "offered": "Online"
  },
  "COMS690": {
    "title": "Thesis Defense",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS691": {
    "title": "Project",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS695": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "COMS697": {
    "title": "Special Topics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS698": {
    "title": "Communication Practicum",
    "credits": 1,
    "offered": "Resident"
  },
  "COMS699": {
    "title": "Internship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COMS987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "COMS988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "COMS989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "COMS990": {
    "title": "Dissertation Defense",
    "credits": 0,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "COSC050": {
    "title": "Professional Counseling Orientation",
    "credits": 0,
    "offered": "Online"
  },
  "COSC500": {
    "title": "Gate 2/Orientation to School Counseling",
    "credits": 0,
    "offered": "Online"
  },
  "COSC501": {
    "title": "Professional, Ethical, and Legal Issues in School Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "COSC505": {
    "title": "Counseling Techniques for School Counseling",
    "credits": 3,
    "prereqs": "(COSC 500 or Education Counseling Gate 2 with a score of 5) and COSC 501",
    "offered": "Resident and Online"
  },
  "COSC510": {
    "title": "Theories of School Counseling",
    "credits": 3,
    "prereqs": "(COSC 500 or Education Counseling Gate 2 with a score of 5) and (COSC 501 or EDCE 501)",
    "offered": "Online"
  },
  "COSC512": {
    "title": "Structured Groups",
    "credits": 3,
    "prereqs": "((COSC 505 or EDCE 505) and (COSC 500 or Education Counseling Gate 2 with a score of 5)) and COSC 501 and COSC 510",
    "offered": "Online"
  },
  "COSC513": {
    "title": "Gate 2.5/Practicum Application",
    "credits": 0,
    "prereqs": "COSC 500 and (COSC 501 or EDCE 501) and (COSC 505 or EDCE 505) and COSC 510",
    "offered": "Online"
  },
  "COSC521": {
    "title": "Foundations of Exceptionality",
    "credits": 3,
    "offered": "Online"
  },
  "COSC604": {
    "title": "Foundations of Education and School Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "COSC611": {
    "title": "Counseling Children and Adolescents in Schools: Social Emotional Development and Exceptionalities",
    "credits": 3,
    "prereqs": "(COSC 500 or Education Counseling Gate 2 with a score of 5) and COSC 501",
    "offered": "Online"
  },
  "COSC622": {
    "title": "Assessment and Evaluation in School Counseling",
    "credits": 3,
    "prereqs": "(COSC 500 or Education Counseling Gate 2 with a score of 5) and (COSC 501 or EDCE 501) and (COSC 505 or EDCE 505) and (COSC 510 or EDCE 510) and (COSC 512 or EDCE 512) and (COSC 611 or EDCE 611) and (COSC 660 or EDCE 660) and (COSC 661 or EDCE 661) and (COUC 502 or CMHC 502 or COUN 502) and (COUC 504 or CMHC 504 or COUN 504)",
    "offered": "Online"
  },
  "COSC660": {
    "title": "Principles of School Counseling",
    "credits": 3,
    "prereqs": "(COSC 500 or Education Counseling Gate 2 with a score of 5) and COSC 501",
    "offered": "Online"
  },
  "COSC661": {
    "title": "School Counseling Program Development and Evaluation",
    "credits": 3,
    "prereqs": "((COSC 500 or Education Counseling Gate 2 with a score of 5) and (COSC 501 or EDCE 501) and (COSC 505 or EDCE 505) and COSC 513 and COSC 660 )",
    "offered": "Online"
  },
  "COSC690": {
    "title": "Gate 3.0/Internship Application",
    "credits": 0,
    "prereqs": "(COSC 500 or EDCE 500) and (COSC 501 or EDCE 501) and COSC 505 and COSC 510 and (COSC 512 or EDCE 512 or EDUC 512) and COSC 513 and (COUC 502 or CMHC 502 or COUN 502) and (COSC 504 or CMHC 504 or COUN 504 or EDCE 504)",
    "offered": "Online"
  },
  "COSC698": {
    "title": "School Counseling Practicum",
    "credits": 3,
    "prereqs": "(COSC 500 or Education Counseling Gate 2 with a score of 5) and (COSC 501 or EDCE 501) and (COSC 505 or EDCE 505) and COSC 510 and (COSC 512 or EDCE 512 or EDUC 512) and COSC 513 and (COUC 502 or CMHC 502 or COUN 502) and (COUC 504 or CMHC 504 or COUN 504 or EDCE 504)",
    "offered": "Online"
  },
  "COSC699": {
    "title": "School Counseling Internship",
    "credits": 3,
    "prereqs": "(COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 522 or EDCE 522 or COUN 522 or CMHC 522) and (COSC 500 or Education Counseling Gate 2 with a score of 5) and (COSC 501 or EDCE 501) and (COSC 505 or EDCE 505) and COSC 510 and (COSC 512 or EDCE 512) and COSC 513 and (COSC 611 or EDCE 611) and (COSC 660 or EDCE 660) and (COSC 661 or EDCE 661) and COSC 698 and COSC 690",
    "offered": "Online"
  },
  "COSP101": {
    "title": "Spanish Composition and Rhetoric",
    "credits": 3,
    "offered": "Online"
  },
  "COSP102": {
    "title": "Spanish Composition and Literature",
    "credits": 3,
    "prereqs": "COSP 101",
    "offered": "Online"
  },
  "COUC050": {
    "title": "Professional Counseling Orientation",
    "credits": 0,
    "offered": "Online"
  },
  "COUC500": {
    "title": "Orientation to Counselor Professional Identity and Function",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COUC501": {
    "title": "Ethical and Legal Issues in Counseling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COUC502": {
    "title": "Human Growth and Development",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COUC504": {
    "title": "Multicultural Counseling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COUC505": {
    "title": "Counseling Techniques and the Helping Relationship",
    "credits": 3,
    "prereqs": "(COUC 500 or COUN 500 or CMHC 500) and (COUC 501 or COUN 501 or CMHC 501)",
    "offered": "Resident and Online"
  },
  "COUC506": {
    "title": "Integration of Spirituality and Counseling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COUC510": {
    "title": "Theories of Counseling",
    "credits": 3,
    "prereqs": "(COUC 500 or COUN 500 or CMHC 500) and (COUC 501 or COUN 501 or CMHC 501)",
    "offered": "Resident and Online"
  },
  "COUC512": {
    "title": "Group Counseling",
    "credits": 3,
    "prereqs": "((COUC 500 or COUN 500 or CMHC 500) and (COUC 501 or COUN 501 or CMHC 501) and (COUC 502 or EDUC 600 or COUN 502 or CMHC 502) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or COUN 505 or CMHC 505) and (COUC 510 or COUN 510 or CMHC 510))",
    "offered": "Resident and Online"
  },
  "COUC515": {
    "title": "Research and Program Evaluation",
    "credits": 3,
    "prereqs": "Statistic Prereq Met with a score of 3",
    "offered": "Resident and Online"
  },
  "COUC521": {
    "title": "Assessment Techniques in Counseling",
    "credits": 3,
    "prereqs": "(COUC 500 or COUN 500 or CMHC 500) and (COUC 501 or COUN 501 or CMHC 501) and (COUC 502 or EDUC 600 or COUN 502 or CMHC 502) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or COUN 505 or CMHC 505) and (COUC 510 or COUN 510 or CMHC 510)",
    "offered": "Resident and Online"
  },
  "COUC522": {
    "title": "Career Development and Counseling",
    "credits": 3,
    "prereqs": "(COUC 502 or EDUC 502 or COUN 502 or CMHC 502) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or COUN 505 or CMHC 505 or COSC 505) and (COUC 501 or COUN 501 or CMHC 501 or EDCE 501 or COSC 501) and (COUC 510 or COUN 510 or CMHC 510 or COSC 510) and (COUC 500 or CMHC 500 or COUN 500 or COSC 500 or Education Counseling Gate 2 with a score of 5)",
    "offered": "Resident and Online"
  },
  "COUC546": {
    "title": "Psychopathology",
    "credits": 3,
    "prereqs": "(COUC 500 or COUN 500 or CMHC 500) and (COUC 501 or COUN 501 or CMHC 501) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 510 or COUN 510 or CMHC 510)",
    "offered": "Resident and Online"
  },
  "COUC601": {
    "title": "Theories of Family Systems",
    "credits": 3,
    "prereqs": "(COUC 500 or COUN 500 or CMHC 500) and (COUC 501 or COUN 501 or CMHC 501) and (COUC 502 or EDUC 600 or COUN 502 or CMHC 502) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or COUN 505 or CMHC 505) and (COUC 510 or COUN 510 or CMHC 510)",
    "offered": "Resident and Online"
  },
  "COUC602": {
    "title": "Assessment, Diagnosis, and Treatment Planning in Marriage and Family Counseling",
    "credits": 3,
    "prereqs": "(CMHC 501 or COUC 501 or COUN 501) and (CMHC 502 or EDUC 600 or COUC 502 or COUN 502) and (CMHC 601 or COUN 601 or COUC 601) and (CMHC 500 or COUN 500 or COUC 500) and (CMHC 505 or COUN 505 or COUC 505) and (CMHC 510 or COUN 510 or COUC 510) and (CMHC 646 or COUN 646 or COUC 546) and (COUC 500 or CMHC 500 or COUN 500) and (COUC 504 or CMHC 504 or COUN 504) and (COUC 512 or CMHC 512 or COUN 512) and (COUC 515 or CMHC 515 or COUN 515) and (COUC 521 or CMHC 521 or COUN 521)",
    "offered": "Resident"
  },
  "COUC603": {
    "title": "Advanced Couple and Marital Counseling",
    "credits": 3,
    "prereqs": "(CMHC 501 or COUN 501 or COUC 501) and (CMHC 502 or EDUC 600 or COUN 502 or COUC 502) and (CMHC 500 or COUN 500 or COUC 500) and (CMHC 505 or COUN 505 or COUC 505) and (CMHC 510 or COUN 510 or COUC 510) and (CMHC 646 or COUN 646 or COUC 546) and (CMHC 512 or COUN 512 or COUC 512) and (CMHC 521 or COUN 521 or COUC 521) and (CMHC 504 or EDCE 504 or COUN 504 or COUC 504) and (COUN 601 or CMHC 601 or COUC 601)",
    "offered": "Resident"
  },
  "COUC604": {
    "title": "Crisis Counseling",
    "credits": 3,
    "prereqs": "(COUC 500 or CEFS 500 or COUN 500 or CMHC 500) and (COUC 501 or CEFS 501 or COUN 501 or CMHC 501) and (COUC 502 or CEFS 502 or EDUC 600 or COUN 502 or CMHC 502) and (COUC 504 or CEFS 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or CEFS 505 or COUN 505 or CMHC 505) and (COUC 510 or CEFS 510 or COUN 510 or CMHC 510) and (COUC 512 or CEFS 512 or COUN 512 or CMHC 512) and (COUC 521 or CEFS 521 or COUN 521 or CMHC 521) and (COUC 546 or CEFS 546 or COUN 646 or CMHC 646)",
    "offered": "Resident and Online"
  },
  "COUC610": {
    "title": "Human Sexuality",
    "credits": 3,
    "prereqs": "(CMHC 500 or COUN 500 or COUC 500) and (CMHC 501 or COUN 501 or COUC 501) and (CMHC 502 or EDUC 600 or COUN 502 or COUC 502) and (CMHC 505 or COUN 505 or COUC 505) and (CMHC 510 or COUN 510 or COUC 510)",
    "offered": "Resident"
  },
  "COUC620": {
    "title": "Counseling Children, Adolescents, and Their Families",
    "credits": 3,
    "prereqs": "(CMHC 501 or COUN 501 or COUC 501) and (CMHC 502 or EDUC 600 or COUN 502 or COUC 502) and (CMHC 500 or COUN 500 or COUC 500) and (CMHC 505 or COUN 505 or COUC 505) and (CMHC 510 or COUN 510 or COUC 510) and (CMHC 646 or COUN 646 or COUC 546) and (CMHC 601 or COUN 601 or COUC 601) and (CMHC 504 or EDCE 504 or COUN 504 or COUC 504) and (CMHC 512 or COUN 512 or COUC 512) and (CMHC 521 or COUN 521 or COUC 521)",
    "offered": "Resident"
  },
  "COUC667": {
    "title": "Clinical Diagnosis and Treatment Planning",
    "credits": 3,
    "prereqs": "(COUC 500 or COUN 500 or CMHC 500) and (COUC 501 or COUN 501 or CMHC 501) and (COUC 502 or EDUC 600 or COUN 502 or CMHC 502) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or COUN 505 or CMHC 505) and (COUC 510 or COUN 510 or CMHC 510) and (COUC 512 or COUN 512 or CMHC 512) and (COUC 515 or EDUC 518 or COUN 515 or CMHC 515) and (COUC 521 or COUN 521 or CMHC 521) and (COUC 546 or COUN 646 or CMHC 646)",
    "offered": "Resident and Online"
  },
  "COUC687": {
    "title": "Counseling Women",
    "credits": 3,
    "prereqs": "(COUC 500 or COUN 500 or CMHC 500) and (COUC 501 or COUN 501 or CMHC 501) and (COUC 502 or EDUC 600 or COUN 502 or CMHC 502) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or COUN 505 or CMHC 505) and (COUC 510 or COUN 510 or CMHC 510) and (COUC 512 or COUN 512 or CMHC 512) and (COUC 515 or EDUC 518 or COUN 515 or CMHC 515) and (COUC 521 or COUN 521 or CMHC 521) and (COUC 522 or EDCE 522 or COUN 522 or CMHC 522) and (COUC 546 or COUN 646 or CMHC 646)",
    "offered": "Online"
  },
  "COUC691": {
    "title": "Substance Abuse: Diagnosis, Treatment and Prevention",
    "credits": 3,
    "prereqs": "(COUC 501 or COUN 501 or CMHC 501) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or COUN 505 or CMHC 505) and (COUC 510 or COUN 510 or CMHC 510) and (COUC 521 or COUN 521 or CMHC 521) and (COUC 546 or COUN 646 or CMHC 646)",
    "offered": "Resident and Online"
  },
  "COUC698": {
    "title": "Counseling Practicum",
    "credits": 3,
    "prereqs": "(COUC 502 or EDUC 600 or COUN 502 or CMHC 502) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or COUN 505 or CMHC 505) and (COUC 501 or COUN 501 or CMHC 501 or EDCE 501 or COSC 501) and (COUC 510 or COUN 510 or CMHC 510 or EDCE 505 or COSC 505) and (COUC 500 or COUN 500 or CMHC 500) and (COUC 512 or COUN 512 or CMHC 512) and (COUC 521 or COUN 521 or CMHC 521) and (COUC 546 or COUN 646 or CMHC 646) and COUC 602 (may be taken concurrently) or COUC 667 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "COUC699": {
    "title": "Counseling Internship",
    "credits": 3,
    "prereqs": "(COUC 500 or COUN 500 or CMHC 500) and (COUC 501 or COUN 501 or CMHC 501) and (COUC 502 or EDUC 600 or COUN 502 or CMHC 502) and (COUC 504 or EDCE 504 or COUN 504 or CMHC 504) and (COUC 505 or COUN 505 or CMHC 505) and (COUC 510 or COUN 510 or CMHC 510) and (COUC 512 or COUN 512 or CMHC 512) and (COUC 515 or EDUC 518 or COUN 515 or CMHC 515) and (COUC 521 or COUN 521 or CMHC 521) and (COUC 522 or COUN 522 or CMHC 522) and (COUC 546 or COUN 646 or CMHC 646) and (COUC 698 or COUN 698 or CMHC 698) and (COUC 602 or CMHC 602 or COUN 667 or CMHC 667 or COUC 667)",
    "note": "This course may be repeated.",
    "offered": "Resident and Online"
  },
  "COUC700": {
    "title": "Theology and Counseling",
    "credits": 3
  },
  "COUC701": {
    "title": "Statistics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "COUC705": {
    "title": "Philosophy of Religion and the Helping Professions",
    "credits": 3
  },
  "COUC710": {
    "title": "Advanced Group Counseling",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC712": {
    "title": "Psychopharmacology",
    "credits": 3,
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision."
  },
  "COUC714": {
    "title": "Supervision and Consultation",
    "credits": 3,
    "prereqs": "((COUN 699 or CMHC 699 or COUC 699)) and COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC715": {
    "title": "Advanced Theory Application and Orientation",
    "credits": 3,
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Resident and Online"
  },
  "COUC720": {
    "title": "Advanced Family, Systems, and Development",
    "credits": 3,
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC725": {
    "title": "Counseling Religious Clients",
    "credits": 3
  },
  "COUC730": {
    "title": "Issues in Integration",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC740": {
    "title": "Advanced Research Design",
    "credits": 3,
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Resident and Online"
  },
  "COUC745": {
    "title": "Advanced Multivariate Statistics and Quantitative Research",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC747": {
    "title": "Instruction in Counselor Education",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor and Supervision.",
    "offered": "Online"
  },
  "COUC750": {
    "title": "Qualitative Research",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC791": {
    "title": "Crisis and Trauma",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Students should be aware that traumatic and potentially highly disturbing subject matter will be discussed in classes and course readings. Some pictures or videos of crisis or trauma situations will also be shared, as this is necessary to be prepared for future crisis and trauma work. Note: Students will also be encouraged to process possible crisis or trauma experiences from their own lives, so as to avoid countertransference with future clients.",
    "offered": "Online"
  },
  "COUC792": {
    "title": "The Creative and Expressive Arts in Individual and Group Counseling",
    "credits": 3,
    "prereqs": "COUC 969",
    "offered": "Online"
  },
  "COUC797": {
    "title": "Counseling Seminar",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC800": {
    "title": "Advanced Assessment",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC805": {
    "title": "Advanced Psychopathology and its Treatment",
    "credits": 3,
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC806": {
    "title": "Cognitive-Behavioral Therapy",
    "credits": 3,
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Resident and Online"
  },
  "COUC810": {
    "title": "Dissemination of Research and Scholarship in Counseling",
    "credits": 3,
    "prereqs": "COUC 969",
    "offered": "Online"
  },
  "COUC815": {
    "title": "Empirically Supported Treatments for Adults",
    "credits": 3,
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC820": {
    "title": "Empirically Supported Treatments for Children and Adolescents",
    "credits": 3,
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC850": {
    "title": "Advanced Career Counseling",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC860": {
    "title": "Counseling Leadership and Advocacy",
    "credits": 3,
    "prereqs": "COUC 969",
    "offered": "Online"
  },
  "COUC870": {
    "title": "Advanced Research Seminar",
    "credits": 3,
    "prereqs": "COUC 710 and COUC 714 and COUC 715 and COUC 730 and COUC 740 and COUC 745 and COUC 747 and COUC 750 and COUC 810 and COUC 850 and COUC 860 and COUC 969 and COUC 998",
    "offered": "Online"
  },
  "COUC871": {
    "title": "Qualitative Research Seminar",
    "credits": 3,
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC969": {
    "title": "Qualifying Exam",
    "credits": 0,
    "prereqs": "COUC 715 and COUC 740",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC970": {
    "title": "Teaching Internship",
    "credits": 3,
    "prereqs": "COUC 747 and COUC 969 and COUC 998",
    "offered": "Online"
  },
  "COUC980": {
    "title": "Supervision Internship",
    "credits": 3,
    "prereqs": "COUC 714 and COUC 969 and COUC 998",
    "offered": "Online"
  },
  "COUC989": {
    "title": "Dissertation Proposal and Research",
    "credits": 3,
    "prereqs": "COUC 710 and COUC 714 and COUC 715 and COUC 730 and COUC 740 and COUC 745 and COUC 747 and COUC 750 and COUC 810 and COUC 850 and COUC 860 and COUC 870 and COUC 969 and COUC 998",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC990": {
    "title": "Dissertation Defense",
    "credits": 3,
    "prereqs": "COUC 989",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC995": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Online"
  },
  "COUC997": {
    "title": "Counseling Seminar",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC998": {
    "title": "Practicum",
    "credits": 3,
    "prereqs": "COUC 969",
    "note": "Must be enrolled in the following program: Doctor of Philosophy in Counselor Education and Supervision.",
    "offered": "Online"
  },
  "COUC999": {
    "title": "Internship",
    "credits": 3,
    "prereqs": "COUC 969 and COUC 998",
    "offered": "Online"
  },
  "COUN711": {
    "title": "Diagnosis and Treatment of Addictive Behaviors",
    "credits": 3,
    "prereqs": "COUN 501 and COUN 502 and COUN 504 and COUN 505 and COUN 510 and COUN 512 and COUN 515 and COUN 521 and COUN 522 and COUN 646 and (COUN 500 or Orient Coun Prof Id & Func Req with a score of 5)",
    "offered": "Online"
  },
  "COUN713": {
    "title": "Community Systems Counseling: Programs and Practice",
    "credits": 3
  },
  "COUN716": {
    "title": "Consultation and Counseling",
    "credits": 3
  },
  "COUN747": {
    "title": "Teaching and Learning",
    "credits": 3
  },
  "COUN801": {
    "title": "Pastoral Care and Counseling in the New Millennium Church",
    "credits": 3
  },
  "COUN810": {
    "title": "Diagnosis/Treatment of Addctv",
    "credits": 3
  },
  "COUN815": {
    "title": "Neuro &amp; Psychopharm Issues Cli",
    "credits": 3
  },
  "COUN820": {
    "title": "Advanced Readings in Pastoral Care and Counseling",
    "credits": 1
  },
  "COUN825": {
    "title": "Growth &amp; Devel of Contemp Min",
    "credits": 3
  },
  "COUN865": {
    "title": "Advanced Theories in Career Development",
    "credits": 3
  },
  "COUN875": {
    "title": "Advanced Family Counseling",
    "credits": 3
  },
  "COUN910": {
    "title": "Counseling Supervision",
    "credits": 3
  },
  "COUN920": {
    "title": "Consultation in Human Services",
    "credits": 3
  },
  "COUN980": {
    "title": "Ministering to Troubled Families",
    "credits": 3
  },
  "COUN985": {
    "title": "Pastoral Counseling with Couples in Distress",
    "credits": 3
  },
  "COUN989": {
    "title": "Dissertation Proposal and Research",
    "credits": 3
  },
  "COUN990": {
    "title": "Dissertation Defense",
    "credits": 3
  },
  "COUN995": {
    "title": "Directed Research",
    "credits": 3
  },
  "COUN997": {
    "title": "Counseling Seminar",
    "credits": 3
  },
  "COUN998": {
    "title": "Advanced Practicum",
    "credits": 3
  },
  "COUN999": {
    "title": "Internship in Counseling",
    "credits": 3
  },
  "CPED631": {
    "title": "Clinical Pastoral Education Unit I",
    "credits": 6,
    "prereqs": "CHPL 500 and CHPL 598 and THEO 525 and THEO 530",
    "offered": "Resident"
  },
  "CPED632": {
    "title": "Clinical Pastoral Education Unit 2",
    "credits": 6,
    "prereqs": "CHPL 631 or CPED 631",
    "offered": "Resident"
  },
  "CPED633": {
    "title": "Clinical Pastoral Education Unit 3",
    "credits": 6,
    "prereqs": "CHPL 632 or CPED 632",
    "offered": "Resident"
  },
  "CPED634": {
    "title": "Clinical Pastoral Education Unit 4",
    "credits": 6,
    "prereqs": "CHPL 633 or CPED 633",
    "offered": "Resident"
  },
  "CRFT101": {
    "title": "Introduction to Craft Skills",
    "credits": 3,
    "offered": "Resident"
  },
  "CRIS302": {
    "title": "Foundational Principles of Crisis Response",
    "credits": 3,
    "prereqs": "PSYC 101 or PSYC 210",
    "offered": "Online"
  },
  "CRIS303": {
    "title": "Acute Stress, Grief and Trauma",
    "credits": 3,
    "prereqs": "CRIS 302",
    "offered": "Online"
  },
  "CRIS304": {
    "title": "PTSD and Combat-Related Trauma",
    "credits": 3,
    "prereqs": "CRIS 302",
    "offered": "Online"
  },
  "CRIS305": {
    "title": "Trauma Assessment and Interventions",
    "credits": 3,
    "prereqs": "CRIS 302",
    "offered": "Online"
  },
  "CRIS306": {
    "title": "Complex Trauma and Disasters: Offering Spiritual Care",
    "credits": 3,
    "prereqs": "CRIS 302",
    "offered": "Online"
  },
  "CRIS605": {
    "title": "Crisis and First Responder Training: Skills and Techniques",
    "credits": 3,
    "offered": "Online"
  },
  "CRIS606": {
    "title": "Acute Stress, Grief and Trauma",
    "credits": 3,
    "offered": "Online"
  },
  "CRIS607": {
    "title": "PTSD and Combat Related Trauma",
    "credits": 3,
    "offered": "Online"
  },
  "CRIS608": {
    "title": "Trauma Assessment and Interventions",
    "credits": 3,
    "offered": "Online"
  },
  "CRIS609": {
    "title": "Complex Trauma and Disasters: Offering Emotional and Spiritual Care",
    "credits": 3,
    "offered": "Online"
  },
  "CRST290": {
    "title": "History of Life",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CRST390": {
    "title": "Origins",
    "credits": 3,
    "prereqs": "BIOL 200 or BIOL 224 or CRST 290",
    "offered": "Resident"
  },
  "CSCI501": {
    "title": "Overview of Computer Security",
    "credits": 3,
    "note": "Admission into program",
    "offered": "Resident and Online"
  },
  "CSCI511": {
    "title": "Digital Forensics",
    "credits": 3,
    "note": "Admission into program",
    "offered": "Resident and Online"
  },
  "CSCI561": {
    "title": "Ethics, Legal Issues, and Policy",
    "credits": 3,
    "note": "Admission into program",
    "offered": "Resident and Online"
  },
  "CSCI601": {
    "title": "Applied Network Security",
    "credits": 3,
    "prereqs": "CSCI 501",
    "offered": "Resident and Online"
  },
  "CSCI605": {
    "title": "Applied Cryptography",
    "credits": 3,
    "prereqs": "CSCI 601",
    "offered": "Resident and Online"
  },
  "CSCI611": {
    "title": "Secure Software Engineering",
    "credits": 3,
    "prereqs": "CSCI 501",
    "offered": "Resident and Online"
  },
  "CSCI612": {
    "title": "Security Engineering",
    "credits": 3,
    "prereqs": "CSCI 501",
    "offered": "Resident and Online"
  },
  "CSCI620": {
    "title": "Issues in Security, Privacy, and Anonymity",
    "credits": 3,
    "prereqs": "CSCI 501 and (CSCI 502 or CSCI 605)",
    "offered": "Resident and Online"
  },
  "CSCI631": {
    "title": "Web Security",
    "credits": 3,
    "prereqs": "CSCI 601",
    "offered": "Resident and Online"
  },
  "CSCI632": {
    "title": "Ethical Hacking",
    "credits": 3,
    "prereqs": "CSCI 601",
    "offered": "Resident and Online"
  },
  "CSCI651": {
    "title": "Advanced Topics in Computer Security",
    "credits": 3,
    "prereqs": "CSCI 601",
    "offered": "Resident and Online"
  },
  "CSCI681": {
    "title": "Capstone Project",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CSCI697": {
    "title": "Special Topics in Cybersecurity",
    "credits": 3,
    "offered": "Resident"
  },
  "CSCN110": {
    "title": "Introduction to Computer Sciences",
    "credits": 3,
    "prereqs": "MATH 121 (may be taken concurrently) or MATH 122 (may be taken concurrently) or MATH 125 (may be taken concurrently) or MATH 126 (may be taken concurrently) or MATH 128 (may be taken concurrently) or MATH 131 (may be taken concurrently) or MATH 132 (may be taken concurrently) or MATH 133 (may be taken concurrently) or MATH 200 (may be taken concurrently) or MATH 201 (may be taken concurrently) or BUSI 230 or MATH 217 (may be taken concurrently) or MATH 227 (may be taken concurrently) or MATH 250 (may be taken concurrently) or ACT Math with a score of 25 or (pre2016 post1995)SAT Math with a score of 570 or SAT Section Math with a score of 590 or Assessment - Mathematics II with a score of 15 or Placement Score-Math with a score of 075",
    "offered": "Resident"
  },
  "CSCN111": {
    "title": "Programming In C++ Beginner",
    "credits": 3,
    "prereqs": "((ENGR 110 and ENGR 133) or CSCN 110 (may be taken concurrently) or CSIS 110 (may be taken concurrently))",
    "offered": "Resident"
  },
  "CSCN112": {
    "title": "Programming in C++ Advanced",
    "credits": 3,
    "prereqs": "CSCN 111 or CSIS 111",
    "offered": "Resident"
  },
  "CSCN215": {
    "title": "Data Structures and Algorithms using C++",
    "credits": 3,
    "prereqs": "((CSCN 112 or CSIS 112) and MATH 250 )",
    "offered": "Resident"
  },
  "CSCN230": {
    "title": "Business Data Communications and Networks",
    "credits": 3,
    "prereqs": "MATH 121 (may be taken concurrently) or Placement Score-Math with a score of 75",
    "offered": "Resident"
  },
  "CSCN299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "CSCN310": {
    "title": "Web Programming in HTML",
    "credits": 3,
    "prereqs": "BMIT 212 or CSIS 111 or CSCN 111 or CSIS 208 or CSIS 212",
    "offered": "Resident"
  },
  "CSCN315": {
    "title": "Front-end Programming in JavaScript",
    "credits": 3,
    "prereqs": "CSCN 111 or CSIS 111 or CSIS 212 or BMIT 212",
    "offered": "Resident"
  },
  "CSCN316": {
    "title": "Back-end Programming in PHP",
    "credits": 3,
    "prereqs": "CSCN 111 or CSIS 111 or CSIS 212 or BMIT 212",
    "offered": "Resident"
  },
  "CSCN321": {
    "title": "Python and R for Data Science",
    "credits": 3,
    "prereqs": "((CSCN 111 or CSCN 354 or BMIT 212) and (MATH 201 or MATH 211 or BUSI 230))",
    "offered": "Resident"
  },
  "CSCN322": {
    "title": "Data Engineering",
    "credits": 3,
    "prereqs": "((CSIS 325 or CSIS 326 or BMIT 325) and CSCN 321 )",
    "offered": "Resident"
  },
  "CSCN323": {
    "title": "Data Visualization",
    "credits": 3,
    "prereqs": "CSCN 322",
    "offered": "Resident"
  },
  "CSCN326": {
    "title": "Database Design and Management",
    "credits": 3,
    "prereqs": "CSIS 215 or CSCN 215",
    "offered": "Resident"
  },
  "CSCN340": {
    "title": "Information Security Concepts and Principles",
    "credits": 3,
    "offered": "Resident"
  },
  "CSCN342": {
    "title": "Computer Architecture",
    "credits": 3,
    "prereqs": "CSIS 215 or CSCN 215",
    "offered": "Resident"
  },
  "CSCN345": {
    "title": "Linux Operating System",
    "credits": 3,
    "prereqs": "BMIT 212 or CSIS 111 or CSCN 111 or CSIS 212",
    "offered": "Resident"
  },
  "CSCN352": {
    "title": "Windows System Administration",
    "credits": 3,
    "prereqs": "BMIS 320 or BMIT 220 or CSIS 345 or CSCN 345",
    "offered": "Resident"
  },
  "CSCN354": {
    "title": "Fundamentals of Distributed Systems",
    "credits": 3,
    "prereqs": "CSIS 320 or CSIS 342 or CSCN 342 or BMIT 220",
    "offered": "Resident"
  },
  "CSCN355": {
    "title": "Network Architecture, Protocols, and Theory",
    "credits": 3,
    "prereqs": "((CSIS 345 or CSCN 345) and (CSIS 112 or CSCN 112))",
    "offered": "Resident"
  },
  "CSCN375": {
    "title": "Human Computer Interaction",
    "credits": 3,
    "prereqs": "BMIT 212 or CSIS 212 or CSIS 111 or CSCN 111",
    "offered": "Resident"
  },
  "CSCN408": {
    "title": "Mobile Programming",
    "credits": 3,
    "prereqs": "CSIS 315 or CSIS 316 or CSCN 315 or CSCN 316",
    "offered": "Resident"
  },
  "CSCN421": {
    "title": "Applied Machine Learning",
    "credits": 3,
    "prereqs": "((MATH 350 and CSCN 342) or CSCN 434 ) and CSCN 322 and MATH 221",
    "offered": "Resident"
  },
  "CSCN422": {
    "title": "Artificial Intelligence",
    "credits": 3,
    "prereqs": "((CSCN 342 and MATH 350) or CSCN 434 ) and CSCN 421 and MATH 211",
    "offered": "Resident"
  },
  "CSCN434": {
    "title": "Programming Language Design and Compiler Theory",
    "credits": 3,
    "prereqs": "((CSIS 342 or CSCN 342)) and MATH 350",
    "offered": "Resident"
  },
  "CSCN443": {
    "title": "Operating Systems Design",
    "credits": 3,
    "prereqs": "CSCN 342 or CSIS 342",
    "offered": "Resident"
  },
  "CSCN461": {
    "title": "Aspects of Computer Security-Defensive",
    "credits": 3,
    "prereqs": "((CSIS 352 or CSCN 352) and (CSIS 355 or CSCN 355))",
    "offered": "Resident"
  },
  "CSCN462": {
    "title": "Advanced Aspects of Computer Security-Ethical Hacking",
    "credits": 3,
    "prereqs": "CSCN 461 or CSIS 461",
    "offered": "Resident"
  },
  "CSCN463": {
    "title": "Modern Cryptography",
    "credits": 3,
    "prereqs": "((CSCN 215 or CSIS 215)) and MATH 350",
    "offered": "Resident"
  },
  "CSCN471": {
    "title": "Software Engineering Management",
    "credits": 3,
    "prereqs": "CSIS 215 or CSCN 215",
    "specialPrereqs": ["30 CS Credits", "Dept Chair"],
    "offered": "Resident Spring only",
  },
  "CSCN481": {
    "title": "Computer Sciences Practicum I",
    "credits": 3,
    "prereqs": "((CSIS 471 or CSCN 471) and (CSIS 326 or CSCN 326))",
    "offered": "Resident Fall only"
  },
  "CSCN482": {
    "title": "Computer Sciences Practicum II",
    "credits": 3,
    "prereqs": "CSIS 481 or CSCN 481",
    "offered": "Resident Spring only"
  },
  "CSCN485": {
    "title": "Cybersecurity Practicum I",
    "credits": 3,
    "prereqs": "((CSIS 352 or CSCN 352) and (CSIS 355 or CSCN 355) and (CSIS 461 or CSCN 461) and (CSIS 326 or CSCN 326))",
    "offered": "Resident"
  },
  "CSCN486": {
    "title": "Cybersecurity Practicum II",
    "credits": 3,
    "prereqs": "((CSIS 485 or CSCN 485)) and CSCN 462",
    "offered": "Resident"
  },
  "CSCN495": {
    "title": "Directed Research",
    "credits": 2,
    "offered": "Resident"
  },
  "CSCN497": {
    "title": "Special Topics in Technology",
    "credits": 3,
    "prereqs": "CSIS 215 or CSCN 215",
    "offered": "Resident"
  },
  "CSCN499": {
    "title": "Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "CSIS100": {
    "title": "Introduction to Information Systems and Information Technology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CSIS110": {
    "title": "Introduction to Computer Science",
    "credits": 3,
    "prereqs": "MATH 121 (may be taken concurrently) or MATH 122 (may be taken concurrently) or MATH 125 (may be taken concurrently) or MATH 126 (may be taken concurrently) or MATH 128 (may be taken concurrently) or MATH 131 (may be taken concurrently) or MATH 132 (may be taken concurrently) or MATH 133 (may be taken concurrently) or MATH 200 (may be taken concurrently) or MATH 201 (may be taken concurrently) or BUSI 230 or MATH 217 (may be taken concurrently) or MATH 227 (may be taken concurrently) or MATH 250 (may be taken concurrently) or ACT Math with a score of 25 or (pre2016 post1995)SAT Math with a score of 570 or SAT Section Math with a score of 590 or Assessment - Mathematics II with a score of 15 or Placement Score-Math with a score of 075",
    "offered": "Resident and Online"
  },
  "CSIS111": {
    "title": "Introduction to Programming Using C++",
    "credits": 3,
    "prereqs": "CSCI 110 or CSIS 110 (may be taken concurrently) or ENGR 110 (may be taken concurrently) or ENGR 115 (may be taken concurrently) or MATH 150",
    "offered": "Resident and Online"
  },
  "CSIS112": {
    "title": "Advanced Programming Using C++",
    "credits": 3,
    "prereqs": "CSCI 111 or CSIS 111",
    "offered": "Resident and Online"
  },
  "CSIS208": {
    "title": "Application Programming",
    "credits": 3,
    "prereqs": "(CSIS 100 or CSIS 110) and (MATH 121 (may be taken concurrently) or MATH 122 or MATH 123 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 132 or MATH 200 or MATH 201 or MATH 211 or MATH 217 or MATH 221 or MATH 227 or MATH 231 or MATH 250 or MATH 301 or MATH 302 or MATH 305 or MATH 307 or MATH 311 or MATH 321 or MATH 331 or MATH 332 or MATH 334 or MATH 350 or MATH 352 or MATH 400 or MATH 401 or MATH 411 or MATH 419 or MATH 420 or MATH 421 or MATH 422 or MATH 431 or MATH 450) or BUSI 230",
    "offered": "Resident and Online"
  },
  "CSIS209": {
    "title": "C# Programming",
    "credits": 3,
    "prereqs": "BMIS 208 or CSIS 208 or CSCI 111 or CSIS 111 or ISYS 211 or CMIS 211 or CSIS 212 or BMIS 212 or CMIS 212 or ISYS 212",
    "offered": "Resident and Online"
  },
  "CSIS212": {
    "title": "Object-Oriented Programming",
    "credits": 3,
    "prereqs": "CSIS 110 or CSIS 208 or MATH 121 or MATH 122 or MATH 123 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 132 or MATH 200 or MATH 201 or BUSI 230 or MATH 211 or MATH 217 or MATH 221 or MATH 227 or MATH 231 or MATH 250 or MATH 301 or MATH 302 or MATH 305 or MATH 307 or MATH 311 or MATH 321 or MATH 331 or MATH 332 or MATH 334 or MATH 350 or MATH 352 or MATH 400 or MATH 401 or MATH 411 or MATH 419 or MATH 420 or MATH 421 or MATH 422 or MATH 431 or MATH 450",
    "offered": "Resident and Online"
  },
  "CSIS215": {
    "title": "Algorithms and Data Structures",
    "credits": 3,
    "prereqs": "(CSCI 112 or CSIS 112) and MATH 250",
    "offered": "Resident and Online"
  },
  "CSIS244": {
    "title": "Assembly Language",
    "credits": 3,
    "prereqs": "CSCI 111 or CSIS 111",
    "offered": "Resident"
  },
  "CSIS299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "CSIS310": {
    "title": "Web Programming",
    "credits": 3,
    "prereqs": "CSIS 111 or CSIS 208 or CSIS 212",
    "offered": "Resident and Online"
  },
  "CSIS312": {
    "title": "Advanced Object- Oriented Programming",
    "credits": 3,
    "prereqs": "CMIS 212 or CSIS 212 or ISYS 212 or BMIS 212",
    "offered": "Resident and Online"
  },
  "CSIS315": {
    "title": "Front-end Programming",
    "credits": 3,
    "prereqs": "CSIS 212 or CSIS 111 or CSIS 208",
    "offered": "Resident and Online"
  },
  "CSIS316": {
    "title": "Back-end Programming",
    "credits": 3,
    "prereqs": "CSIS 111 or CSIS 208 or CSIS 212",
    "offered": "Resident and Online"
  },
  "CSIS320": {
    "title": "IS Hardware and Software",
    "credits": 3,
    "prereqs": "CSCI 110 (may be taken concurrently) or CSIS 110 (may be taken concurrently) or BMIS 200 (may be taken concurrently) or CSIS 100 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "CSIS325": {
    "title": "Database Management Systems",
    "credits": 3,
    "prereqs": "CSIS 111 (may be taken concurrently) or CSIS 208 or CSIS 212",
    "offered": "Resident and Online"
  },
  "CSIS326": {
    "title": "Database System Concepts",
    "credits": 3,
    "prereqs": "CSIS 215",
    "offered": "Resident"
  },
  "CSIS327": {
    "title": "Introduction to Oracle",
    "credits": 3,
    "prereqs": "BMIS 325 or CSIS 325 or ISYS 325 or CMIS 450",
    "offered": "Online"
  },
  "CSIS328": {
    "title": "Advanced Oracle",
    "credits": 3,
    "prereqs": "BMIS 326 or CSIS 327",
    "offered": "Online"
  },
  "CSIS330": {
    "title": "Business Data Communication Systems",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CSIS331": {
    "title": "Networks",
    "credits": 3,
    "prereqs": "CSIS 330",
    "offered": "Resident and Online"
  },
  "CSIS332": {
    "title": "Database Programming",
    "credits": 3,
    "prereqs": "BMIS 325 or CSIS 325 or ISYS 325 or CMIS 450",
    "offered": "Online"
  },
  "CSIS333": {
    "title": "Advanced Database Programming",
    "credits": 3,
    "prereqs": "BMIS 326 or CSIS 327 or CSIS 332",
    "offered": "Online"
  },
  "CSIS335": {
    "title": "Network Security",
    "credits": 3,
    "prereqs": "BMIS 330 or CSIS 330 or ISYS 330 or CMIS 330",
    "offered": "Resident and Online"
  },
  "CSIS340": {
    "title": "Studies in Information Security",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CSIS341": {
    "title": "Information Security Planning",
    "credits": 3,
    "prereqs": "CSCI 340 or BMIS 340 or CSIS 340",
    "offered": "Resident and Online"
  },
  "CSIS342": {
    "title": "Computer Architecture and Organization",
    "credits": 3,
    "prereqs": "CSIS 215 or CSCI 215",
    "offered": "Resident and Online"
  },
  "CSIS343": {
    "title": "Cybersecurity",
    "credits": 3,
    "prereqs": "CSCI 340 or BMIS 340 or CSIS 340 or BUSI 417",
    "offered": "Resident and Online"
  },
  "CSIS344": {
    "title": "Information Security Operations",
    "credits": 3,
    "prereqs": "CSIS 340 and CSIS 341",
    "offered": "Resident and Online"
  },
  "CSIS345": {
    "title": "Introduction to Linux",
    "credits": 3,
    "prereqs": "CSIS 111 or CSIS 212",
    "offered": "Resident and Online"
  },
  "CSIS351": {
    "title": "System Analysis and Design",
    "credits": 3,
    "prereqs": "CSIS 325 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "CSIS352": {
    "title": "System Administration",
    "credits": 3,
    "prereqs": "(BMIS 320 or CSIS 320) or CSIS 345",
    "offered": "Resident and Online"
  },
  "CSIS354": {
    "title": "Integrative Programming and Technologies",
    "credits": 3,
    "prereqs": "CSIS 320 or CSIS 342",
    "offered": "Resident and Online"
  },
  "CSIS355": {
    "title": "Network Architecture and Protocols",
    "credits": 3,
    "prereqs": "CSIS 215 and CSIS 345",
    "offered": "Resident and Online"
  },
  "CSIS375": {
    "title": "Introduction to Human-Computer Interaction",
    "credits": 3,
    "prereqs": "BMIS 208 or BMIS 212 or CSIS 208 or CSIS 212 or CSIS 111",
    "offered": "Resident and Online"
  },
  "CSIS405": {
    "title": "Business and Economic Forecasting",
    "credits": 3,
    "prereqs": "(MATH 201 (may be taken concurrently) or BUSI 230) and (ECNC 214 or ECON 214)",
    "offered": "Resident and Online"
  },
  "CSIS408": {
    "title": "DevSecOps and Mobile Programming",
    "credits": 3,
    "prereqs": "CSIS 315 and CSIS 316",
    "offered": "Resident and Online"
  },
  "CSIS410": {
    "title": "Web Enterprise Technologies",
    "credits": 3,
    "prereqs": "(BMIS 310 or CSIS 310) and (BMIS 325 or CSIS 325 or CSCI 325 or CSIS 326 or ISYS 325 or CMIS 450)",
    "offered": "Online"
  },
  "CSIS416": {
    "title": "AITE Capstone",
    "credits": 3,
    "prereqs": "CSCI 405 or CSIS 408",
    "offered": "Resident and Online"
  },
  "CSIS430": {
    "title": "Advanced Networking and Communication Systems",
    "credits": 3,
    "prereqs": "BMIS 331 or CSIS 331 or CSCI 355 or CSIS 355",
    "offered": "Resident and Online"
  },
  "CSIS434": {
    "title": "Theory of Programming Languages",
    "credits": 3,
    "prereqs": "CSCI 215 or CSIS 215",
    "offered": "Resident and Online"
  },
  "CSIS440": {
    "title": "Digital Forensics",
    "credits": 3,
    "prereqs": "CSIS 341",
    "offered": "Resident and Online"
  },
  "CSIS443": {
    "title": "Operating Systems",
    "credits": 3,
    "prereqs": "CSCI 342 or CSIS 342",
    "offered": "Resident and Online"
  },
  "CSIS461": {
    "title": "Technical Aspects of Computer Security",
    "credits": 3,
    "prereqs": "CSIS 352 and CSIS 355",
    "offered": "Resident and Online"
  },
  "CSIS462": {
    "title": "Advanced Technical Aspects of Computer Security",
    "credits": 3,
    "prereqs": "CSIS 352 and CSIS 355 and CSIS 461",
    "offered": "Resident"
  },
  "CSIS463": {
    "title": "Modern Cryptography",
    "credits": 3,
    "prereqs": "MATH 350 and (CSCI 215 or CSIS 215)",
    "offered": "Resident and Online"
  },
  "CSIS465": {
    "title": "Enterprise Systems and Integration",
    "credits": 3,
    "prereqs": "CSIS 352 and CSIS 354",
    "offered": "Online"
  },
  "CSIS466": {
    "title": "Modern Cryptography",
    "credits": 3,
    "prereqs": "(CSCI 215 or CSIS 215) and MATH 350 (may be taken concurrently)",
    "offered": "Resident"
  },
  "CSIS470": {
    "title": "Executive Perspectives on E-Commerce Technology",
    "credits": 3,
    "prereqs": "(BMIS 310 or CMIS 310 or ISYS 310 or CSIS 310) and (BMIS 351 or CMIS 351 or ISYS 351 or CSIS 351)",
    "offered": "Online"
  },
  "CSIS471": {
    "title": "Software Engineering",
    "credits": 3,
    "prereqs": "CSIS 215",
    "offered": "Resident and Online"
  },
  "CSIS473": {
    "title": "IS Project Management",
    "credits": 3,
    "prereqs": "(CMIS 351 or BMIS 351 or ISYS 351 or CSIS 351) and (ECNC 214 or ECON 214 or ENGI 220) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "CSIS474": {
    "title": "Enterprise Systems and Integration",
    "credits": 3,
    "prereqs": "CSIS 352 and CSIS 354 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "CSIS481": {
    "title": "CS Capstone I",
    "credits": 3,
    "prereqs": "(CSIS 471 or CSCI 481) and CSIS 326",
    "offered": "Resident"
  },
  "CSIS482": {
    "title": "CS Capstone II",
    "credits": 3,
    "prereqs": "CSIS 481",
    "offered": "Resident"
  },
  "CSIS483": {
    "title": "Information Systems Capstone",
    "credits": 3,
    "prereqs": "(CSIS 351 or BMIS 351) and (CSIS 473 or BMIS 460)",
    "offered": "Resident and Online"
  },
  "CSIS484": {
    "title": "Information Technology Capstone",
    "credits": 3,
    "prereqs": "(CSIS 465 or CSIS 474)",
    "offered": "Resident and Online"
  },
  "CSIS485": {
    "title": "Cybersecurity Capstone I",
    "credits": 3,
    "prereqs": "CSIS 355 and CSIS 461",
    "offered": "Resident and Online"
  },
  "CSIS486": {
    "title": "Cybersecurity Capstone II",
    "credits": 3,
    "prereqs": "CSIS 485",
    "offered": "Resident and Online"
  },
  "CSIS495": {
    "title": "Directed Research",
    "credits": 1,
    "prereqs": "CSCI 215 or CSIS 215",
    "offered": "Resident"
  },
  "CSIS497": {
    "title": "Special Topics in Technology",
    "credits": 3,
    "offered": "Resident"
  },
  "CSIS499": {
    "title": "Internship",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "CSIS505": {
    "title": "Software Development",
    "credits": 3,
    "prereqs": "Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3 and Obj-Oriented Programming Req with a score of 3 and Adv Obj-Oriented Program Req with a score of 3 and Busi Data Comm Sys / Netwk Req with a score of 3",
    "offered": "Resident and Online"
  },
  "CSIS525": {
    "title": "Database Design and Development",
    "credits": 3,
    "prereqs": "(CSIS 505 and Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3 and Obj-Oriented Programming Req with a score of 3 and Adv Obj-Oriented Program Req with a score of 3 and Busi Data Comm Sys / Netwk Req with a score of 3) or (INFO 505 and Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3 and Prin of Human Bio / Human A&P with a score of 3)",
    "offered": "Resident and Online"
  },
  "CSIS535": {
    "title": "Computer Networks",
    "credits": 3,
    "prereqs": "Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3 and Obj-Oriented Programming Req with a score of 3 and Adv Obj-Oriented Program Req with a score of 3 and Busi Data Comm Sys / Netwk Req with a score of 3",
    "offered": "Resident and Online"
  },
  "CSIS641": {
    "title": "Software Development Management",
    "credits": 3,
    "prereqs": "CSIS 505",
    "offered": "Resident and Online"
  },
  "CSIS643": {
    "title": "Software Design",
    "credits": 3,
    "prereqs": "CSIS 505 and CSCI 611",
    "offered": "Resident and Online"
  },
  "CSIS651": {
    "title": "Network Architecture and Design",
    "credits": 3,
    "prereqs": "BMIS 662 and CSCI 601",
    "offered": "Resident and Online"
  },
  "CSIS657": {
    "title": "Statistical Analysis and Data Mining",
    "credits": 3,
    "prereqs": "CSIS 505 and CSIS 525",
    "offered": "Resident and Online"
  },
  "CSIS690": {
    "title": "Integrated Capstone",
    "credits": 3,
    "prereqs": "(BMIS 520 and BMIS 530 and BMIS 570 and CSIS 525 and CSIS 535 and CSIS 641 and CSIS 643 and CSIS 657) or (BMIS 520 and BMIS 530 and BMIS 570 and BMIS 662 and CSIS 525 and CSIS 535 and CSIS 651 and CSIS 657)",
    "offered": "Online"
  },
  "CSMA101": {
    "title": "Conversational Chinese I",
    "credits": 3,
    "offered": "Online"
  },
  "CSMA102": {
    "title": "Conversational Chinese II",
    "credits": 3,
    "prereqs": "CSMA 101",
    "offered": "Online"
  },
  "CSMA103": {
    "title": "Conversational Chinese III",
    "credits": 3,
    "prereqs": "CSMA 102",
    "offered": "Online"
  },
  "CSPA101": {
    "title": "Conversational Spanish I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CSPA102": {
    "title": "Conversational Spanish II",
    "credits": 3,
    "prereqs": "CSPA 101",
    "offered": "Resident and Online"
  },
  "CSPA103": {
    "title": "Conversational Spanish III",
    "credits": 3,
    "prereqs": "CSPA 102",
    "offered": "Online"
  },
  "CSTU101": {
    "title": "Western Culture",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CSTU102": {
    "title": "The Humanities Abroad",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "CSTU220": {
    "title": "The African American Experience",
    "credits": 3,
    "offered": "Online"
  },
  "CSTU301": {
    "title": "Film as Art",
    "credits": 3,
    "offered": "Resident"
  },
  "CSTU310": {
    "title": "Religion and the Arts in Western Culture",
    "credits": 3,
    "prereqs": "ENGL 101 or MUSC 200 or ENGL 201 or ENGL 202 or ENGL 215 or ENGL 216 or ENGL 221 or ENGL 222",
    "offered": "Resident and Online"
  },
  "CSTU497": {
    "title": "Special Topics in Cultural Studies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "DBFA300": {
    "title": "Marriage, Family and Faith: Basic Worldviews",
    "credits": 3,
    "offered": "Online"
  },
  "DBFA305": {
    "title": "Relationships, Public Policy and Advocacy Strategies",
    "credits": 3,
    "offered": "Online"
  },
  "DBFA400": {
    "title": "Child/Adolescent Development, Deviance and Violence: Etiology, Assessment &amp; Treatment",
    "credits": 3,
    "offered": "Online"
  },
  "DBFA410": {
    "title": "Contemporary Thought, Research and Emerging Paradigms in Marriage and Family Studies",
    "credits": 3,
    "offered": "Online"
  },
  "DBFA600": {
    "title": "Family, Faith and the Future: Worldview",
    "credits": 3,
    "offered": "Online"
  },
  "DBFA605": {
    "title": "Public Policy and Advocacy Strategies",
    "credits": 3,
    "offered": "Online"
  },
  "DBFA610": {
    "title": "Divorce, Marriage and Blended Families",
    "credits": 3,
    "offered": "Online"
  },
  "DBFA615": {
    "title": "Child/Adolescent Development, Deviance and Violence",
    "credits": 3,
    "offered": "Online"
  },
  "DBFA620": {
    "title": "Research and Emerging Paradigms in Marriage and Family Studies",
    "credits": 3,
    "offered": "Online"
  },
  "DBMF300": {
    "title": "Child and Adolescent Issues and Helping Strategies",
    "credits": 3,
    "offered": "Online"
  },
  "DBMF400": {
    "title": "Marriage and Family Systems: Foundations, Models and Techniques",
    "credits": 3,
    "offered": "Online"
  },
  "DBMF405": {
    "title": "Divorce, Remarriage and Blended Families",
    "credits": 3,
    "offered": "Online"
  },
  "DBMF600": {
    "title": "Counseling Children and Adolescents: Issues and Strategies",
    "credits": 3,
    "offered": "Online"
  },
  "DBMF605": {
    "title": "Parenting and Child Discipline Strategies: Raising Healthy Kids",
    "credits": 3,
    "offered": "Online"
  },
  "DBMF610": {
    "title": "Marriage and Family Systems: Foundations, Models and Techniques",
    "credits": 3,
    "offered": "Online"
  },
  "DBMF615": {
    "title": "Love and Relationships",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Resident and Online"
  },
  "DBPC300": {
    "title": "Child &amp; Family Development: Psychological and Theological",
    "credits": 3,
    "offered": "Online"
  },
  "DBPC305": {
    "title": "Effective Parenting: Childhood Behavior and Discipline Strategies",
    "credits": 3,
    "offered": "Online"
  },
  "DBPC400": {
    "title": "Human Development Across the Lifespan",
    "credits": 3,
    "offered": "Online"
  },
  "DBPC405": {
    "title": "Childhood Issues, Trauma and Abuse",
    "credits": 3,
    "offered": "Online"
  },
  "DBPC410": {
    "title": "Healthy Sexuality: Biblical and Developmental Factors",
    "credits": 3,
    "offered": "Online"
  },
  "DBPC600": {
    "title": "Child and Family Development: Psychological and Theological Perspectives",
    "credits": 3,
    "offered": "Online"
  },
  "DBPC605": {
    "title": "Parenting and Multigenerational Influence",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Resident and Online"
  },
  "DBPC610": {
    "title": "Human Growth and Lifespan Development",
    "credits": 3,
    "offered": "Online"
  },
  "DBPC615": {
    "title": "Childhood Issues, Trauma and Abuse",
    "credits": 3,
    "offered": "Online"
  },
  "DBPC620": {
    "title": "Healthy Sexuality: Biblical and Developmental Factors",
    "credits": 3,
    "offered": "Online"
  },
  "DIGI100": {
    "title": "Equipment Workshop",
    "credits": 1,
    "offered": "Resident"
  },
  "DIGI175": {
    "title": "Fundamentals of Editing",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "DIGI190": {
    "title": "Media Industry Ethics",
    "credits": 3,
    "offered": "Resident"
  },
  "DIGI220": {
    "title": "Writing for Media",
    "credits": 3,
    "offered": "Resident"
  },
  "DIGI222": {
    "title": "Lighting and Cinematography",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI224": {
    "title": "Fundamentals of Audio Production",
    "credits": 3,
    "offered": "Resident"
  },
  "DIGI225": {
    "title": "Introduction to Video Production",
    "credits": 3,
    "offered": "Resident"
  },
  "DIGI230": {
    "title": "Essential Production Tools",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI240": {
    "title": "Writing for Visual Media",
    "credits": 3,
    "offered": "Resident"
  },
  "DIGI250": {
    "title": "Location Sound",
    "credits": 3,
    "prereqs": "(DIGI 224 or COMS 224)",
    "offered": "Resident"
  },
  "DIGI282": {
    "title": "Intermediate Editing and Effects",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI290": {
    "title": "Post Production Sound Design",
    "credits": 3,
    "prereqs": "CINE 271",
    "offered": "Resident"
  },
  "DIGI299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "DIGI310": {
    "title": "The Digital Producer",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 220 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI324": {
    "title": "Vocal Development",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI327": {
    "title": "Virtual Reality Design and Production",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI330": {
    "title": "On Camera Presentation",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI333": {
    "title": "Intermediate Video Production",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 220 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI334": {
    "title": "Intermediate Audio Production",
    "credits": 3,
    "prereqs": "(DIGI 224 or COMS 224) and CINE 271",
    "offered": "Resident"
  },
  "DIGI335": {
    "title": "Storytelling: Interactive, Social and Digital Media Writing",
    "credits": 3,
    "prereqs": "DIGI 220 and DIGI 240",
    "offered": "Resident"
  },
  "DIGI337": {
    "title": "Music Recording",
    "credits": 3,
    "prereqs": "CINE 271 and DIGI 224",
    "offered": "Resident"
  },
  "DIGI340": {
    "title": "Sports Broadcasting",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 220 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI343": {
    "title": "TV and Digital Reporting/Production",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 220 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI345": {
    "title": "Producing TV News",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI348": {
    "title": "Advanced Editing Techniques 1",
    "credits": 3,
    "prereqs": "DIGI 282",
    "offered": "Resident"
  },
  "DIGI350": {
    "title": "Editing Theory",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "DIGI353": {
    "title": "Producing Audio Content",
    "credits": 3,
    "prereqs": "DIGI 220 and DIGI 224",
    "offered": "Resident"
  },
  "DIGI354": {
    "title": "Storytelling: Sitcom",
    "credits": 3,
    "prereqs": "DIGI 240",
    "offered": "Resident"
  },
  "DIGI355": {
    "title": "Interactive, Social and Digital Media Management",
    "credits": 3,
    "prereqs": "DIGI 335",
    "offered": "Resident"
  },
  "DIGI369": {
    "title": "Chronicles of Motion Pictures and Television",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident"
  },
  "DIGI370": {
    "title": "Studio Production",
    "credits": 3,
    "prereqs": "DIGI 310",
    "offered": "Resident"
  },
  "DIGI373": {
    "title": "Storytelling: Episodic Drama",
    "credits": 3,
    "prereqs": "DIGI 240",
    "offered": "Resident"
  },
  "DIGI393": {
    "title": "Television Practicum",
    "credits": 1,
    "prereqs": "DIGI 333",
    "offered": "Resident"
  },
  "DIGI394": {
    "title": "Advanced Radio Practicum",
    "credits": 1,
    "prereqs": "DIGI 334",
    "offered": "Resident"
  },
  "DIGI420": {
    "title": "Writing for Episodic Studio",
    "credits": 3,
    "offered": "Resident"
  },
  "DIGI451": {
    "title": "Live Sports Production",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 220 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "DIGI453": {
    "title": "Storytelling: Reality Television",
    "credits": 3,
    "offered": "Resident"
  },
  "DIGI474": {
    "title": "Advanced Audio Production",
    "credits": 3,
    "prereqs": "DIGI 334",
    "offered": "Resident"
  },
  "DIGI477": {
    "title": "Storytelling: Transmedia",
    "credits": 3,
    "prereqs": "DIGI 240",
    "offered": "Resident"
  },
  "DIGI483": {
    "title": "Advanced Video Production",
    "credits": 3,
    "prereqs": "DIGI 333 and DIGI 370",
    "offered": "Resident"
  },
  "DIGI485": {
    "title": "Advanced Editing Techniques 2",
    "credits": 3,
    "prereqs": "DIGI 348",
    "offered": "Resident"
  },
  "DIGI487": {
    "title": "Field Projects and Practica",
    "credits": 3,
    "prereqs": "DIGI 333 and JOUR 220",
    "offered": "Resident"
  },
  "DIGI490": {
    "title": "SFX, ADR, and Foley",
    "credits": 3,
    "prereqs": "CINE 271 and DIGI 290",
    "offered": "Resident"
  },
  "DIGI497": {
    "title": "Special Topics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "DIGI498": {
    "title": "Senior Portfolio",
    "credits": 3,
    "offered": "Resident"
  },
  "DIGI700": {
    "title": "Digital &amp; Strategic Communication Orientation I",
    "credits": 3,
    "offered": "Online"
  },
  "DIGI705": {
    "title": "Digital &amp; Strategic Communication Orientation II",
    "credits": 3,
    "offered": "Online"
  },
  "DIGI710": {
    "title": "Digital &amp; Strategic Communication Audience Measurement",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DIGI715": {
    "title": "Advanced Communication Theory",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DIGI720": {
    "title": "Social, Mobile, &amp; Online Media Analytics",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DIGI750": {
    "title": "Qualitative Research Methods",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DIGI760": {
    "title": "Mixed Methods Research",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DIGI825": {
    "title": "Seminar: From Digital Analytics to Communication Action",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DIGI830": {
    "title": "Seminar: Design, Technology, and Visualization",
    "credits": 3,
    "prereqs": "DIGI 700",
    "note": "Course offered beginning in Spring 2020",
    "offered": "Online"
  },
  "DIGI835": {
    "title": "Current Topics in Content Communication",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DIGI845": {
    "title": "Visualization &amp; Social Media Strategy",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DIGI850": {
    "title": "Interactive Strategic Media",
    "credits": 3,
    "prereqs": "DIGI 700",
    "note": "Course offered beginning in Spring 2020",
    "offered": "Online"
  },
  "DIGI855": {
    "title": "Communication &amp; Strategic Change",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DIGI880": {
    "title": "Research Concepts",
    "credits": 3,
    "prereqs": "DIGI 700",
    "offered": "Online"
  },
  "DISS987": {
    "title": "Dissertation Proposal and Research I",
    "credits": 5,
    "offered": "Resident"
  },
  "DISS988": {
    "title": "Dissertation Proposal and Research II",
    "credits": 5,
    "prereqs": "DISS 987",
    "offered": "Resident"
  },
  "DISS989": {
    "title": "Dissertation Proposal and Research III",
    "credits": 3,
    "offered": "Resident"
  },
  "DISS990": {
    "title": "Dissertation Defense",
    "credits": 3,
    "prereqs": "DISS 989",
    "offered": "Online"
  },
  "DMCA499": {
    "title": "Internship",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "DMIN810": {
    "title": "Foundations for the Doctor of Ministry",
    "credits": 3,
    "note": "Admission to the DMIN program",
    "offered": "Online"
  },
  "DMIN820": {
    "title": "Research and Thesis Development",
    "credits": 3,
    "prereqs": "(DMIN 810 and BIBL 810 and BIBL 820 and BIBL 830) or (CHPL 810 and CHPL 820 and CHPL 830 and DMIN 810) or (DMIN 810 and CHMN 810 and CHMN 820 and CHMN 830) or (DMIN 810 and DSMN 810 and DSMN 820 and DSMN 830) or (DMIN 810 and EVCP 810 and EVCP 820 and EVCP 830) or (DMIN 810 and EVCP 820 and EVCP 830 and EVCP 840) or (DMIN 810 and EVCP 810 and EVCP 830 and EVCP 840) or (DMIN 810 and EVCP 810 and EVCP 820 and EVCP 840) or (DMIN 810 and HOMI 810 and HOMI 820 and HOMI 830) or (DMIN 810 and LEAD 810 and LEAD 820 and LEAD 830) or (DMIN 810 and PACO 830 and PACO 835 and PACO 840) or (DMIN 810 and APOL 810 and APOL 820 and THEO 810) or (DMIN 810 and WRSP 820 and WRSP 835 and WRSP 845) or (DMIN 810 and DSMN 850 and DSMN 860 and DSMN 870) or (DMIN 810 and CHMN 840 and CHMN 841 and CHMN 842) or (DMIN 810 and PACO 825 and PACO 830 and PACO 835) or (DMIN 810 and PACO 825 and PACO 835 and PACO 840) or (DMIN 810 and PACO 825 and PACO 830 and PACO 840) or (DMIN 810 and CHMN 860 and CHMN 861 and CHMN 862) or (DMIN 810 and CHMN 850 and CHMN 851 and CHMN 852)",
    "offered": "Online"
  },
  "DMIN830": {
    "title": "Thesis Project Proposal Development",
    "credits": 3,
    "prereqs": "DMIN 820",
    "note": "Admission to the DMIN program",
    "offered": "Online"
  },
  "DMIN840": {
    "title": "Thesis Project Writing Stage 1",
    "credits": 3,
    "prereqs": "DMIN 830",
    "note": "Admission to the DMIN program",
    "offered": "Online"
  },
  "DMIN841": {
    "title": "Thesis Research and Writing Part I",
    "credits": 4,
    "prereqs": "DMIN 820 and DMIN 830",
    "offered": "Online"
  },
  "DMIN851": {
    "title": "Micro-Project I: Biblical Precedence",
    "credits": 3,
    "prereqs": "(DMIN 810 and BIBL 810 and BIBL 820 and BIBL 830) or (DMIN 810 and CHPL 810 and CHPL 820 and CHPL 830) or (DMIN 810 and CHMN 810 and CHMN 820 and CHMN 830) or (DMIN 810 and EVCP 810 and EVCP 820 and EVCP 830) or (DMIN 810 and DSMN 810 and DSMN 820 and DSMN 830) or (DMIN 810 and EVCP 820 and EVCP 830 and EVCP 840) or (DMIN 810 and EVCP 810 and EVCP 830 and EVCP 840) or (DMIN 810 and EVCP 810 and EVCP 820 and EVCP 840) or (DMIN 810 and HOMI 810 and HOMI 820 and HOMI 830) or (DMIN 810 and LEAD 810 and LEAD 820 and LEAD 830) or (DMIN 810 and PACO 825 and PACO 830 and PACO 835) or (DMIN 810 and APOL 810 and APOL 820 and THEO 810) or (DMIN 810 and WRSP 820 and WRSP 835 and WRSP 845) or (DMIN 810 and PACO 825 and PACO 835 and PACO 840) or (DMIN 810 and PACO 825 and PACO 830 and PACO 840) or (DMIN 810 and CHMN 840 and CHMN 841 and CHMN 842) or (DMIN 810 and DSMN 850 and DSMN 860 and DSMN 870) or (DMIN 810 and CHMN 860 and CHMN 861 and CHMN 862) or (DMIN 810 and CHMN 850 and CHMN 851 and CHMN 852) or (DMIN 810 and PACO 830 and PACO 835 and PACO 840)",
    "offered": "Online"
  },
  "DMIN852": {
    "title": "Micro-Project II: Current and Historic Practices",
    "credits": 3,
    "prereqs": "DMIN 851",
    "offered": "Online"
  },
  "DMIN853": {
    "title": "Micro-Project III: Personal Engagement",
    "credits": 3,
    "prereqs": "DMIN 852",
    "offered": "Online"
  },
  "DMIN854": {
    "title": "Micro-Project IV: Recommended Engagement",
    "credits": 3,
    "prereqs": "DMIN 853",
    "offered": "Online"
  },
  "DMIN855": {
    "title": "Portfolio Presentation",
    "credits": 3,
    "prereqs": "DMIN 854",
    "offered": "Online"
  },
  "DMIN880": {
    "title": "Research and Writing of the Thesis Project",
    "credits": 3,
    "offered": "Online"
  },
  "DMIN881": {
    "title": "Thesis Research and Writing Part 2",
    "credits": 5,
    "prereqs": "DMIN 810 and DMIN 815 and DMIN 820 and DMIN 830 and DMIN 841 and (BIBL 810 and BIBL 820 and BIBL 830) or (CHPL 810 and CHPL 820 and CHPL 830) or (CHMN 810 and CHMN 820 and CHMN 830) or (DSMN 810 and DSMN 820 and DSMN 830) or (EVCP 810 and EVCP 820 and EVCP 830) or (HOMI 810 and HOMI 820 and HOMI 830) or (LEAD 810 and LEAD 820 and LEAD 830) or (CHMN 840 and CHMN 841 and CHMN 842) or (PACO 825 and PACO 830 and PACO 835) or (PACO 825 and PACO 830 and PACO 840) or (PACO 825 and PACO 835 and PACO 840) or (DSMN 850 and DSMN 860 and DSMN 870) or (CHMN 860 and CHMN 861 and CHMN 862) or (APOL 810 and APOL 820 and THEO 810) or (CHMN 850 and CHMN 851 and CHMN 852) or (WRSP 820 and WRSP 835 and WRSP 845)",
    "offered": "Online"
  },
  "DMIN885": {
    "title": "Thesis Project Writing Stage 2",
    "credits": 3,
    "prereqs": "DMIN 840",
    "note": "Admission to the DMIN program",
    "offered": "Online"
  },
  "DMIN889": {
    "title": "Thesis Project Writing",
    "credits": 3,
    "offered": "Online"
  },
  "DMIN890": {
    "title": "Thesis Project Defense",
    "credits": 3,
    "prereqs": "DMIN 881",
    "offered": "Online"
  },
  "DMIN995": {
    "title": "Directed Research",
    "credits": 3
  },
  "DMIN997": {
    "title": "Seminar in Pastoral Studies",
    "credits": 3
  },
  "DSGN500": {
    "title": "Fundamentals of Design for Social Innovation",
    "credits": 3,
    "offered": "Online"
  },
  "DSGN501": {
    "title": "Human-Centered Design: Observations and Insights",
    "credits": 3,
    "offered": "Online"
  },
  "DSGN625": {
    "title": "Principles of User Experience for the Physical and Digital World",
    "credits": 3,
    "prereqs": "ARTS 500 and DSGN 500 and DSGN 501",
    "offered": "Online"
  },
  "DSGN650": {
    "title": "Human-Centered Design Lab I",
    "credits": 3,
    "prereqs": "ARTS 500 and ARTS 525 and ARTS 601 and DSGN 500 and DSGN 501",
    "offered": "Online"
  },
  "DSGN651": {
    "title": "Human-Centered Design Lab II",
    "credits": 3,
    "prereqs": "ARTS 500 and ARTS 525 and ARTS 601 and DSGN 500 and DSGN 501 and DSGN 625 and DSGN 650",
    "offered": "Online"
  },
  "DSGN696": {
    "title": "Human-Centered Design Capstone Project",
    "credits": 3,
    "prereqs": "ARTS 500 and ARTS 525 and ARTS 601 and DSGN 500 and DSGN 501 and DSGN 625 and DSGN 650",
    "offered": "Online"
  },
  "DSMN500": {
    "title": "Discipleship Ministries",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "DSMN520": {
    "title": "Spiritual Formation",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "DSMN610": {
    "title": "Family Discipleship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "DSMN630": {
    "title": "Small Group Ministries",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "DSMN660": {
    "title": "Leading the Healthy, Growing, Multiplying Church",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "DSMN695": {
    "title": "Directed Research in Discipleship Ministries",
    "credits": 1,
    "offered": "Resident"
  },
  "DSMN697": {
    "title": "Seminar in Discipleship Ministries",
    "credits": 3,
    "offered": "Resident"
  },
  "DSMN698": {
    "title": "Discipleship Ministry Practicum",
    "credits": 1
  },
  "DSMN810": {
    "title": "Biblical and Philosophical Foundations of Disciple Making",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "DSMN815": {
    "title": "Personal Spiritual Formation",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "DSMN820": {
    "title": "Historical and Practical Discipleship",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "DSMN830": {
    "title": "Environmental Discipleship Models",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "DSMN850": {
    "title": "Biblical Theology of Spiritual Formation",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to the DMIN program",
    "offered": "Online"
  },
  "DSMN860": {
    "title": "History of Spiritual Formation",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to the DMIN program",
    "offered": "Online"
  },
  "DSMN870": {
    "title": "Facilitation of Spiritual Formation",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to the DMIN program",
    "offered": "Online"
  },
  "DSMN895": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Online"
  },
  "DSMN897": {
    "title": "Seminar in Discipleship Studies",
    "credits": 3,
    "offered": "Online"
  },
  "DSMN995": {
    "title": "Directed Research in Educational Ministries",
    "credits": 1
  },
  "DSMN997": {
    "title": "Seminar in Educational Ministries",
    "credits": 3
  },
  "DSMN998": {
    "title": "Practicum",
    "credits": 1
  },
  "ECON110": {
    "title": "Survey of Economics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ECON213": {
    "title": "Principles of Microeconomics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ECON214": {
    "title": "Principles of Macroeconomics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ECON350": {
    "title": "Classical Economics",
    "credits": 3,
    "offered": "Online"
  },
  "ECON495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "ECON497": {
    "title": "Special Topics in Economics",
    "credits": 1,
    "offered": "Resident"
  },
  "ECON613": {
    "title": "Microeconomic Theory",
    "credits": 3,
    "offered": "Online"
  },
  "ECON614": {
    "title": "Macroeconomics Theory",
    "credits": 3,
    "offered": "Online"
  },
  "ECON620": {
    "title": "Econometrics",
    "credits": 3,
    "prereqs": "BUSI 600",
    "offered": "Resident and Online"
  },
  "ECON630": {
    "title": "International Economics",
    "credits": 3,
    "offered": "Online"
  },
  "EDAS588": {
    "title": "Practicum I – School Administration",
    "credits": 0,
    "prereqs": "(EDGT 691 or Advanced Gate 2 with a score of 5 or Advanced Gate 2-Doctoral with a score of 5) and (EDAS 640 (may be taken concurrently) or EDAS 741 (may be taken concurrently)) and (Background Check Clearance with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear International with a score of 5)",
    "offered": "Online"
  },
  "EDAS640": {
    "title": "School Administration",
    "credits": 3,
    "prereqs": "(Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5) and EDAS 588 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDAS641": {
    "title": "Supervision of Instruction",
    "credits": 3,
    "offered": "Online"
  },
  "EDAS645": {
    "title": "Foundations for Educational Leaders",
    "credits": 3,
    "prereqs": "Advanced Gate 1 with a score of 5",
    "offered": "Online"
  },
  "EDAS646": {
    "title": "School-Community Relations",
    "credits": 3,
    "prereqs": "(Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5) and EDAS 688 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDAS647": {
    "title": "School Law",
    "credits": 3,
    "prereqs": "Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5",
    "offered": "Online"
  },
  "EDAS648": {
    "title": "School Finance and Management",
    "credits": 3,
    "prereqs": "Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5",
    "offered": "Online"
  },
  "EDAS688": {
    "title": "Practicum II – School Administration",
    "credits": 0,
    "prereqs": "(EDGT 691 or Advanced Gate 2 with a score of 5 or Advanced Gate 2-Doctoral with a score of 5) and (EDAS 646 (may be taken concurrently) or EDAS 742 (may be taken concurrently)) and (Background Clear International with a score of 5 or Background Check Clearance with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Online"
  },
  "EDAS699": {
    "title": "Internship",
    "credits": 3,
    "prereqs": "Advanced Gate 3 with a score of 5 or Advanced Gate 3-Doctoral with a score of 5 or Advanced Gate 3-Out of State with a score of 5 or Adv Gate 3-Out of State-Doc with a score of 5",
    "note": "Proposal submitted one semester in advance and approved by the Chair of the Graduate Program.",
    "offered": "Online"
  },
  "EDAS740": {
    "title": "Leadership Principles and Ethics",
    "credits": 3,
    "prereqs": "EDUC 759 and (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Online"
  },
  "EDAS741": {
    "title": "Theories of Educational Leadership",
    "credits": 3,
    "prereqs": "EDAS 588 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDAS742": {
    "title": "Educational Leadership and Public Relations",
    "credits": 3,
    "prereqs": "EDAS 688 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDAS743": {
    "title": "Executive Leadership in Curriculum and Instruction",
    "credits": 3,
    "offered": "Online"
  },
  "EDAS747": {
    "title": "Advanced Educational Law",
    "credits": 3,
    "offered": "Online"
  },
  "EDAS748": {
    "title": "School District Finance and Organizational Management",
    "credits": 3,
    "prereqs": "EDAS 743 or (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Online"
  },
  "EDCO705": {
    "title": "Issues and Trends in Community Counseling",
    "credits": 3,
    "note": "Intensive course",
    "offered": "Online"
  },
  "EDCO711": {
    "title": "Advanced Group Counseling",
    "credits": 3,
    "note": "Intensive courses",
    "offered": "Online"
  },
  "EDCO715": {
    "title": "Applied Counseling Theories",
    "credits": 3,
    "note": "Intensive format optional",
    "offered": "Online"
  },
  "EDCO716": {
    "title": "Dissertation Topic",
    "credits": 1,
    "offered": "Online"
  },
  "EDCO725": {
    "title": "Teaching and Learning",
    "credits": 3,
    "note": "Intensive course",
    "offered": "Online"
  },
  "EDCO735": {
    "title": "Statistics",
    "credits": 3,
    "prereqs": "Graduate Statistics Req with a score of 3",
    "offered": "Resident and Online"
  },
  "EDCO740": {
    "title": "Diagnosis and Treatment of Addictive Behaviors",
    "credits": 3,
    "note": "Intensive course",
    "offered": "Online"
  },
  "EDCO741": {
    "title": "Introduction to Research Methods",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO745": {
    "title": "Intermediate Statistics and Research",
    "credits": 3,
    "prereqs": "EDCO 701 or EDCO 735",
    "offered": "Resident and Online"
  },
  "EDCO747": {
    "title": "Qualitative Methods of Research",
    "credits": 3,
    "prereqs": "EDCO 716 and EDCO 735",
    "offered": "Online"
  },
  "EDCO770": {
    "title": "Dissertation Formation",
    "credits": 1,
    "prereqs": "EDCO 716 and (EDCO 735 or EDCO 701) and EDCO 745 and EDCO 747",
    "offered": "Online"
  },
  "EDCO790": {
    "title": "Crisis &amp; Trauma Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO800": {
    "title": "Advanced Tests and Measurements",
    "credits": 3,
    "note": "Intensive course",
    "offered": "Resident and Online"
  },
  "EDCO806": {
    "title": "Premarital and Remarriage Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO808": {
    "title": "Dissertation Research",
    "credits": 1,
    "prereqs": "((EDCO 737 or EDCO 770) and (EDCO 810 or EDCO 900)) and EDCO 716",
    "offered": "Online"
  },
  "EDCO810": {
    "title": "Dissertation Design",
    "credits": 3,
    "prereqs": "EDCO 716 and EDCO 705 and EDCO 711 and EDCO 715 and EDCO 725 and EDCO 735 and EDCO 740 and EDCO 745 and EDCO 747 and EDCO 770 and EDCO 790",
    "note": "Intensive format optional",
    "offered": "Resident and Online"
  },
  "EDCO811": {
    "title": "Marriage Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO815": {
    "title": "Family Development",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO817": {
    "title": "Trauma and Current Issues in Marital Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO820": {
    "title": "Assessment in Marital &amp; Family Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO821": {
    "title": "Ethics &amp; Issues in Pastoral Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO826": {
    "title": "Growth &amp; Development of the Pastoral Counselor",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO831": {
    "title": "Individual &amp; Family Issues in Pastoral Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO836": {
    "title": "Premarital &amp; Marital Issues in Pastoral Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO841": {
    "title": "Crisis &amp; Current Issues in Pastoral Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "EDCO865": {
    "title": "Comprehensive Exam",
    "credits": 0,
    "prereqs": "EDCO 711 and EDCO 715 and EDCO 725 and EDCO 740 and EDCO 745 and EDCO 810 and EDCO 705 and EDCO 735 and EDCO 790",
    "offered": "Online"
  },
  "EDCO870": {
    "title": "Dissertation Writing",
    "credits": 1,
    "prereqs": "EDCO 701 and EDCO 745",
    "offered": "Online"
  },
  "EDCO871": {
    "title": "Research Seminar",
    "credits": 3,
    "prereqs": "EDCO 865",
    "offered": "Online"
  },
  "EDCO900": {
    "title": "Dissertation Design",
    "credits": 3,
    "prereqs": "EDCO 705 and EDCO 711 and EDCO 715 and EDCO 716 and EDCO 725 and EDCO 735 and EDCO 740 and EDCO 745 and EDCO 747 and EDCO 770 and EDCO 790",
    "note": "Intensive format optional",
    "offered": "Online"
  },
  "EDCO988": {
    "title": "Dissertation Proposal and Research",
    "credits": 5,
    "prereqs": "EDCO 705 and EDCO 711 and EDCO 715 and EDCO 716 and EDCO 725 and EDCO 735 and EDCO 740 and EDCO 745 and EDCO 747 and EDCO 770 and EDCO 790 and (EDCO 810 or EDCO 900) and ((EDCO 806 and EDCO 811 and EDCO 815 and EDCO 817 and EDCO 820) or (EDCO 821 and EDCO 826 and EDCO 831 and EDCO 836 and EDCO 841) or (TRMA 800 and TRMA 810 and TRMA 820 and TRMA 830 and TRMA 840))",
    "offered": "Online"
  },
  "EDCO989": {
    "title": "Dissertation Completion",
    "credits": 3,
    "prereqs": "EDCO 988 or EDCO 808",
    "offered": "Online"
  },
  "EDCO990": {
    "title": "Dissertation Defense",
    "credits": 3,
    "prereqs": "EDCO 989",
    "offered": "Online"
  },
  "EDCO999": {
    "title": "Internship",
    "credits": 3,
    "prereqs": "EDCO 725 and EDCO 730 and EDCO 740 and EDCO 745 and EDCO 800 and EDCO 810",
    "offered": "Resident and Online"
  },
  "EDDR915": {
    "title": "Quantitative Dissertation Topic and Planning",
    "credits": 3,
    "prereqs": "EDUC 812 and EDUC 815",
    "offered": "Online"
  },
  "EDDR917": {
    "title": "Qualitative Dissertation Topic and Planning",
    "credits": 3,
    "prereqs": "EDUC 817",
    "offered": "Online"
  },
  "EDDR980": {
    "title": "Quantitative Dissertation Prospectus",
    "credits": 3,
    "prereqs": "EDDR 915",
    "offered": "Online"
  },
  "EDDR981": {
    "title": "Qualitative Dissertation Prospectus",
    "credits": 3,
    "prereqs": "EDDR 917",
    "offered": "Online"
  },
  "EDDR987": {
    "title": "Dissertation and Research I",
    "credits": 5,
    "prereqs": "EDDR 980 or EDDR 981",
    "offered": "Online"
  },
  "EDDR988": {
    "title": "Dissertation and Research II",
    "credits": 5,
    "prereqs": "EDDR 987",
    "offered": "Online"
  },
  "EDDR989": {
    "title": "Dissertation and Research III",
    "credits": 5,
    "prereqs": "EDDR 988",
    "offered": "Online"
  },
  "EDDR990": {
    "title": "Dissertation and Research IV",
    "credits": 0,
    "prereqs": "EDDR 989",
    "offered": "Online"
  },
  "EDEC598": {
    "title": "Field Experience Practicum: Early Childhood",
    "credits": 0,
    "prereqs": "(Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5) and EDEC 670",
    "offered": "Online"
  },
  "EDEC653": {
    "title": "Current Issues in Early Childhood Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDEC655": {
    "title": "Organization and Administration of Pre-Schools",
    "credits": 3,
    "offered": "Online"
  },
  "EDEC670": {
    "title": "Curriculum and Methods for Early Childhood Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDEC698": {
    "title": "Directed Practicum Capstone: Early Childhood",
    "credits": 3,
    "prereqs": "(Background Clear Virginia with a score of 5 or Background Check Clearance with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5) and (Add-On Licensure Gate 3 with a score of 5 or EDUC 681)",
    "offered": "Online"
  },
  "EDGL520": {
    "title": "Twice-Exceptional Learners",
    "credits": 3,
    "offered": "Online"
  },
  "EDGL526": {
    "title": "Identification and Education of the Gifted Learner",
    "credits": 3,
    "offered": "Online"
  },
  "EDGL598": {
    "title": "Field Experience Practicum: Gifted Learners",
    "credits": 0,
    "prereqs": "EDGL 620 (may be taken concurrently) and (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Online"
  },
  "EDGL619": {
    "title": "Supporting the Social, Emotional, and Guidance Needs of the Gifted",
    "credits": 3,
    "offered": "Online"
  },
  "EDGL620": {
    "title": "Curriculum and Methods for Teaching Gifted Learners",
    "credits": 3,
    "offered": "Online"
  },
  "EDGL627": {
    "title": "Program Design and Services in Gifted Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDGL698": {
    "title": "Directed Practicum Capstone: Gifted Learners",
    "credits": 3,
    "prereqs": "(Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5) and (Add-On Licensure Gate 3 with a score of 5 or EDUC 681)",
    "offered": "Online"
  },
  "EDGT175": {
    "title": "School of Education Gate 1 – UG Initial Licensure - Distance",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "EDGT177": {
    "title": "School of Education Gate 1 – UG Initial Licensure – Local",
    "credits": 0,
    "offered": "Resident"
  },
  "EDGT266": {
    "title": "School of Education Gate 2 – UG Initial Licensure – Opt Out",
    "credits": 0,
    "prereqs": "EDGT 175 or EDUC 175 or EDGT 177",
    "offered": "Online"
  },
  "EDGT275": {
    "title": "School of Education Gate 2 – UG Initial Licensure - Distance",
    "credits": 0,
    "prereqs": "EDGT 175 or EDGT 177",
    "offered": "Online"
  },
  "EDGT277": {
    "title": "School of Education Gate 2 – UG Initial Licensure – Local",
    "credits": 0,
    "prereqs": "EDGT 175 or EDGT 177",
    "offered": "Resident"
  },
  "EDGT366": {
    "title": "School of Education Gate 3 – UG Initial Licensure – Opt Out",
    "credits": 0,
    "prereqs": "EDGT 266 or EDGT 275 or EDUC 275 or EDGT 277",
    "offered": "Online"
  },
  "EDGT375": {
    "title": "School of Education Gate 3 – UG Initial Licensure - Distance",
    "credits": 0,
    "prereqs": "EDGT 275 or EDGT 277",
    "offered": "Online"
  },
  "EDGT377": {
    "title": "School of Education Gate 3 – UG Initial Licensure – Local",
    "credits": 0,
    "prereqs": "EDGT 275 or EDGT 277 or EDUC 275",
    "offered": "Resident"
  },
  "EDGT520": {
    "title": "School of Education Gate 1 – MAT Initial Licensure",
    "credits": 0,
    "offered": "Online"
  },
  "EDGT556": {
    "title": "School of Education Gate 2 – MAT Initial Licensure – Opt Out",
    "credits": 0,
    "prereqs": "EDGT 520",
    "offered": "Online"
  },
  "EDGT560": {
    "title": "School of Education Gate 2 – MAT Initial Licensure",
    "credits": 0,
    "prereqs": "Education Gate 1 with a score of 3 or EDGT 520",
    "offered": "Online"
  },
  "EDGT566": {
    "title": "School of Education Gate 3 – MAT Initial Licensure – Opt Out",
    "credits": 0,
    "prereqs": "EDGT 556 or EDGT 560",
    "offered": "Online"
  },
  "EDGT580": {
    "title": "School of Education Gate 3 – MAT Initial Licensure",
    "credits": 0,
    "prereqs": "Education Gate 2 with a score of 3 or EDGT 560",
    "offered": "Online"
  },
  "EDGT585": {
    "title": "School of Education Gate 3 – Multiple Endorsements",
    "credits": 0,
    "prereqs": "EDGT 679",
    "offered": "Online"
  },
  "EDGT656": {
    "title": "School of Education Gate 3 – Graduate Advanced Licensure – Opt Out",
    "credits": 0,
    "prereqs": "EDGT 691",
    "offered": "Online"
  },
  "EDGT674": {
    "title": "School of Education Gate 1 – Graduate Non-Licensure",
    "credits": 0,
    "offered": "Online"
  },
  "EDGT677": {
    "title": "School of Education Gate 1 – Graduate Add-On Licensure",
    "credits": 0,
    "offered": "Online"
  },
  "EDGT678": {
    "title": "School of Education Gate 2 –Graduate Non-Licensure",
    "credits": 0,
    "prereqs": "EDGT 674",
    "offered": "Online"
  },
  "EDGT679": {
    "title": "School of Education Gate 2 – Graduate Add-On Licensure",
    "credits": 0,
    "prereqs": "EDGT 677",
    "offered": "Online"
  },
  "EDGT680": {
    "title": "School of Education Gate 3 – Non-Licensure",
    "credits": 0,
    "prereqs": "EDGT 678",
    "offered": "Online"
  },
  "EDGT681": {
    "title": "School of Education Gate 3 – Graduate Add-On Licensure",
    "credits": 0,
    "prereqs": "EDGT 679",
    "offered": "Online"
  },
  "EDGT689": {
    "title": "School of Education Gate 1 – Graduate Advanced Licensure",
    "credits": 0,
    "offered": "Online"
  },
  "EDGT691": {
    "title": "School of Education Gate 2 – Graduate Advanced Licensure",
    "credits": 0,
    "prereqs": "EDGT 689",
    "offered": "Online"
  },
  "EDGT692": {
    "title": "School of Education Gate 3 – Graduate Advanced Licensure",
    "credits": 0,
    "prereqs": "EDGT 691",
    "offered": "Online"
  },
  "EDLC504": {
    "title": "Educational Philosophy and Theories of Learning",
    "credits": 3,
    "prereqs": "EDGT 520 (may be taken concurrently) or Education Gate 1 with a score of 3",
    "offered": "Online"
  },
  "EDLC510": {
    "title": "Instructional Strategies for Diverse Learners",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC530": {
    "title": "Teaching Mathematics",
    "credits": 3,
    "prereqs": "EDUC 500",
    "offered": "Online"
  },
  "EDLC539": {
    "title": "Current Issues in Content Areas",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC554": {
    "title": "Reading and Language Acquisition",
    "credits": 3,
    "prereqs": "((Background Clear Out of State with a score of 5 or Background Clear International with a score of 5 or Background Clear Virginia with a score of 5 or Background Check Clearance with a score of 5) and (Education Gate 2 with a score of 5 or Education Gate 2-Doctoral with a score of 5))",
    "offered": "Online"
  },
  "EDLC571": {
    "title": "Curriculum Fundamentals",
    "credits": 3,
    "note": "To be taken the semester directly before student teaching or during student teaching.",
    "offered": "Online"
  },
  "EDLC588": {
    "title": "Initial Licensure Practicum I",
    "credits": 0,
    "prereqs": "((EDGT 560 or Education Gate 2 with a score of 5 or Education Gate 2-Doctoral with a score of 5) and (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5) and (EDLC 554 (may be taken concurrently) or EDLC 656 (may be taken concurrently)))",
    "offered": "Online"
  },
  "EDLC606": {
    "title": "Tests and Measurements",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC623": {
    "title": "Principles of Behavior Management",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC625": {
    "title": "Content Instructional Procedures",
    "credits": 3,
    "prereqs": "((Education Gate 2 with a score of 5 or Education Gate 2-Doctoral with a score of 5) and (Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear International with a score of 5 or Background Check Clearance with a score of 5))",
    "offered": "Online"
  },
  "EDLC632": {
    "title": "Literacy and Language Instruction",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC634": {
    "title": "Teaching Science in the Elementary School",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC636": {
    "title": "Teaching Social Studies in the Elementary School",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC651": {
    "title": "Language and Literacy for Diverse Populations",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC656": {
    "title": "Literacy Across the Curriculum",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC688": {
    "title": "Initial Licensure Practicum II",
    "credits": 0,
    "prereqs": "((EDGT 560 or Education Gate 2 with a score of 5 or Education Gate 2-Doctoral with a score of 5) and (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5) and (EDLC 530 (may be taken concurrently) or EDLC 625 (may be taken concurrently)))",
    "offered": "Online"
  },
  "EDLC704": {
    "title": "Philosophical Perspectives and Theories of Education",
    "credits": 3,
    "prereqs": "EDGT 520 (may be taken concurrently) or EDG1 with a score of 5",
    "offered": "Online"
  },
  "EDLC706": {
    "title": "Educational Tests and Measurements",
    "credits": 3,
    "offered": "Online"
  },
  "EDLC772": {
    "title": "Fundamentals of Curriculum Design",
    "credits": 3,
    "offered": "Online"
  },
  "EDMN525": {
    "title": "Biblical and Theological Foundations of Christian Education",
    "credits": 3,
    "prereqs": "RTCH 500",
    "offered": "Online"
  },
  "EDMN530": {
    "title": "History and Philosophy of Christian Education",
    "credits": 3,
    "prereqs": "RTCH 500 and EDMN 525",
    "offered": "Online"
  },
  "EDMN540": {
    "title": "Teaching Strategies and Curriculum Development for Christian Education",
    "credits": 3,
    "prereqs": "((THEO 525 or THEO 530 or THEO 610) and LEAD 510 and RTCH 500 )",
    "offered": "Online"
  },
  "EDMN545": {
    "title": "Teaching Across the Lifespan",
    "credits": 3,
    "prereqs": "RTCH 500 and EDMN 530",
    "offered": "Online"
  },
  "EDMS650": {
    "title": "School Based Mathematics Programs",
    "credits": 3,
    "offered": "Online"
  },
  "EDMS652": {
    "title": "Trends and Inquiry for the Math Specialist",
    "credits": 3,
    "prereqs": "EDMS 688 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDMS688": {
    "title": "Math Specialist Practicum",
    "credits": 0,
    "prereqs": "(Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5) and EDMS 652 (may be taken concurrently) and (EDGT 691 or Advanced Gate 2 with a score of 5 or Advanced Gate 2-Doctoral with a score of 5)",
    "offered": "Online"
  },
  "EDMS699": {
    "title": "Internship – Math Specialist",
    "credits": 3,
    "prereqs": "Advanced Gate 3 with a score of 5 or Advanced Gate 3-Doctoral with a score of 5 or Advanced Gate 3-Out of State with a score of 5 or Adv Gate 3-Out of State-Doc with a score of 5",
    "offered": "Online"
  },
  "EDRS650": {
    "title": "School Based Literacy Leadership",
    "credits": 3,
    "prereqs": "EDUC 659",
    "offered": "Online"
  },
  "EDRS652": {
    "title": "Trends and Inquiry for the Reading Specialist",
    "credits": 3,
    "offered": "Online"
  },
  "EDRS659": {
    "title": "Foundation &amp; Theories of Literacy Instruction",
    "credits": 3,
    "prereqs": "EDRS 688 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDRS688": {
    "title": "Reading Specialist Practicum",
    "credits": 0,
    "prereqs": "(Background Clear International with a score of 5 or Background Check Clearance with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5) and EDRS 659 (may be taken concurrently) and (EDGT 691 or Advanced Gate 2 with a score of 5 or Advanced Gate 2-Doctoral with a score of 5)",
    "offered": "Online"
  },
  "EDRS699": {
    "title": "Internship-Reading Specialist",
    "credits": 3,
    "prereqs": "Advanced Gate 3 with a score of 5 or Advanced Gate 3-Doctoral with a score of 5 or Advanced Gate 3-Out of State with a score of 5 or Adv Gate 3-Out of State-Doc with a score of 5",
    "offered": "Online"
  },
  "EDSC419": {
    "title": "Teaching Science Content Methods for the Middle and Secondary School",
    "credits": 3,
    "prereqs": "((EDGT 275 or EDGT 277 or EDUC 275 or Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5) and (Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5) and (EDUC 236 or EDUC 188 or EDUC 189)) and EDUC 235 and EDSC 488 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EDSC488": {
    "title": "Science Lab Practicum in Schools",
    "credits": 0,
    "prereqs": "((EDGT 275 or EDGT 277 or EDUC 275 or Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5) and (Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5 or Background Check Clearance with a score of 5)) and EDSC 419 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDSP323": {
    "title": "Special Education Law and Characteristics",
    "credits": 3,
    "prereqs": "EDUC 350",
    "offered": "Resident and Online"
  },
  "EDSP324": {
    "title": "Special Education Law and Characteristics Licensure Practicum",
    "credits": 1,
    "prereqs": "EDSP 323 (may be taken concurrently) and Background Clear Virginia with a score of 5",
    "offered": "Resident"
  },
  "EDSP325": {
    "title": "Special Education Law and Characteristics Community Practicum",
    "credits": 1,
    "prereqs": "EDSP 323 (may be taken concurrently)",
    "offered": "Resident"
  },
  "EDSP360": {
    "title": "Learning and Behavior Problems",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP363": {
    "title": "Behavior Management",
    "credits": 2,
    "prereqs": "((Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5 or Background Check Clearance with a score of 5) and EDSP 323 )",
    "offered": "Resident and Online"
  },
  "EDSP364": {
    "title": "Behavior Management in Special Education Licensure Practicum",
    "credits": 1,
    "prereqs": "EDSP 363 (may be taken concurrently) and Background Clear Virginia with a score of 5",
    "offered": "Resident"
  },
  "EDSP365": {
    "title": "Behavior Management in Special Education Community Practicum",
    "credits": 1,
    "prereqs": "EDSP 325 (may be taken concurrently)",
    "offered": "Resident"
  },
  "EDSP367": {
    "title": "Introduction to Autism Spectrum Disorders",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP370": {
    "title": "Intervention for Students with Intellectual Disabilities",
    "credits": 3,
    "prereqs": "PSYC 345 or EDUC 307",
    "offered": "Online"
  },
  "EDSP377": {
    "title": "Autism: Educational and Theoretical Approaches",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP385": {
    "title": "Special Education Exploratory Lab III",
    "credits": 0,
    "prereqs": "EDGT 266 or EDGT 275 or EDGT 277",
    "offered": "Online"
  },
  "EDSP388": {
    "title": "Practicum in Special Education: Distance",
    "credits": 0,
    "prereqs": "(Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5) and EDSP 473 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDSP389": {
    "title": "Practicum in Special Education: Local",
    "credits": 0,
    "prereqs": "Background Clear Virginia with a score of 5 and EDSP 473 (may be taken concurrently)",
    "offered": "Resident"
  },
  "EDSP410": {
    "title": "Instructional Adaptation for Special Education",
    "credits": 3,
    "prereqs": "PSYC 345 or EDUC 307",
    "offered": "Online"
  },
  "EDSP413": {
    "title": "Inclusion and Diversity: Effective Practices and Strategies",
    "credits": 3,
    "prereqs": "EDUC 318 and EDSP 363 and EDUC 323 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EDSP414": {
    "title": "Inclusion and Diversity: Effective Practices and Strategies Licensure Practicum",
    "credits": 1,
    "prereqs": "EDSP 413 (may be taken concurrently) and Background Clear Virginia with a score of 5",
    "offered": "Resident"
  },
  "EDSP415": {
    "title": "Inclusion and Diversity: Effective Practices and Strategies Community Practicum",
    "credits": 1,
    "prereqs": "EDSP 413 and EDSP 325 and (Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Resident"
  },
  "EDSP429": {
    "title": "Survey of Trends in Special Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP473": {
    "title": "Assessment and Transition Planning for Diverse Learners",
    "credits": 2,
    "prereqs": "((EDSP 388 (may be taken concurrently) or EDSP 389 (may be taken concurrently) or EDSP 488 (may be taken concurrently) or EDSP 489 (may be taken concurrently)) and (Background Clear Virginia with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Check Clearance with a score of 5) and EDSP 413 )",
    "offered": "Resident and Online"
  },
  "EDSP474": {
    "title": "Transition Planning Practicum",
    "credits": 1,
    "prereqs": "EDSP 473 (may be taken concurrently) and Background Clear Virginia with a score of 5",
    "offered": "Resident"
  },
  "EDSP475": {
    "title": "Transition Planning Community Practicum",
    "credits": 1,
    "prereqs": "EDSP 323 and EDSP 473 (may be taken concurrently) and (Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Resident"
  },
  "EDSP485": {
    "title": "Special Education Exploratory Lab IV",
    "credits": 0,
    "prereqs": "EDGT 266 or EDGT 275 or EDGT 277",
    "offered": "Online"
  },
  "EDSP488": {
    "title": "Practicum in Special Education: Distance",
    "credits": 0,
    "prereqs": "(Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5 or Background Check Clearance with a score of 5) and EDSP 473 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDSP489": {
    "title": "Practicum in Special Education: Local",
    "credits": 0,
    "prereqs": "Background Clear Virginia with a score of 5 and EDSP 473 (may be taken concurrently)",
    "offered": "Resident"
  },
  "EDSP495": {
    "title": "Directed Research in Special Education",
    "credits": 1,
    "prereqs": "Background Check Receipt with a score of 5",
    "offered": "Resident"
  },
  "EDSP497": {
    "title": "Topics in Special Education",
    "credits": 1,
    "prereqs": "Background Check Receipt with a score of 5",
    "offered": "Resident"
  },
  "EDSP519": {
    "title": "Characteristics and Medical Aspects of Severe Disabilities",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP521": {
    "title": "Foundations of Exceptionality",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP522": {
    "title": "Special Education and Disability Law",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP524": {
    "title": "Collaborating for Successful Inclusive Classrooms",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP525": {
    "title": "Transition and Assessment for Exceptional Learners",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP529": {
    "title": "Employment, Community, and Independent Living",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP534": {
    "title": "Individualized Programming and Curriculum",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP545": {
    "title": "Practicum in Special Education for Add-On Endorsement – Elementary",
    "credits": 0,
    "prereqs": "((Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5)) and EDSP 525 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDSP546": {
    "title": "Practicum in Special Education for Add-On Endorsement – Middle",
    "credits": 0,
    "prereqs": "((Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5)) and EDSP 525 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDSP547": {
    "title": "Practicum in Special Education for Add-On Endorsement – Secondary",
    "credits": 0,
    "prereqs": "((Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5)) and EDSP 525 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDSP588": {
    "title": "Initial Licensure Practicum in Special Education I",
    "credits": 0,
    "prereqs": "(EDGT 560 or Education Gate 2 with a score of 5 or Education Gate 2-Doctoral with a score of 5) and (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5) and EDSP 534 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDSP622": {
    "title": "Assessment and Evaluation in Special Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP685": {
    "title": "Special Education Exploratory Lab I",
    "credits": 0,
    "prereqs": "EDGT 556 or EDGT 560",
    "offered": "Online"
  },
  "EDSP688": {
    "title": "Initial Licensure Practicum in Special Education II",
    "credits": 0,
    "prereqs": "(EDGT 560 or Education Gate 2 with a score of 5 or Education Gate 2-Doctoral with a score of 5) and (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5) and (EDSP 525 or EDUC 651 (may be taken concurrently))",
    "offered": "Online"
  },
  "EDSP722": {
    "title": "History and Future of Special Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP723": {
    "title": "Administration and Supervision of Special Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP724": {
    "title": "Collaboration and Communication in Special Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP725": {
    "title": "Assessment and Evaluation in Special Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP726": {
    "title": "Disability and Learning",
    "credits": 3,
    "offered": "Online"
  },
  "EDSP727": {
    "title": "Critical Review of Special Education Literature",
    "credits": 3,
    "offered": "Online"
  },
  "EDST475": {
    "title": "The Reflective Educator: Resource Seminar",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 and (EDST 480 (may be taken concurrently) or EDST 481 (may be taken concurrently))",
    "offered": "Resident and Online"
  },
  "EDST476": {
    "title": "The Reflective Educator: Resource Seminar",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 and (EDST 480 (may be taken concurrently) or EDST 481 (may be taken concurrently))",
    "offered": "Resident and Online"
  },
  "EDST477": {
    "title": "The Reflective Educator: Resource Seminar",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 and (EDST 480 (may be taken concurrently) or EDST 481 (may be taken concurrently))",
    "offered": "Resident and Online"
  },
  "EDST480": {
    "title": "Student Teaching: Distance",
    "credits": 9,
    "prereqs": "Education Gate 3 with a score of 3 and EDST 475 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EDST481": {
    "title": "Supervised Student Teaching: Local",
    "credits": 9,
    "prereqs": "Education Gate 3 with a score of 3 and EDST 476 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EDST585": {
    "title": "The Reflective Practitioner: Resource Seminar-Middle/Secondary",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 or EDUC 580",
    "offered": "Online"
  },
  "EDST586": {
    "title": "The Reflective Practitioner: Resource Seminar-Elementary",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 or EDUC 580",
    "offered": "Online"
  },
  "EDST587": {
    "title": "The Reflective Practitioner: Resource Seminar – Special Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDST590": {
    "title": "Student Teaching Local",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 or EDGT 580",
    "offered": "Online"
  },
  "EDST591": {
    "title": "Student Teaching Local – Own Classroom",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 or EDGT 580",
    "offered": "Online"
  },
  "EDST592": {
    "title": "Student Teaching External",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 or EDGT 580",
    "offered": "Online"
  },
  "EDST593": {
    "title": "Student Teaching External – Own Classroom",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 or EDGT 580",
    "offered": "Online"
  },
  "EDST599": {
    "title": "Student Teaching: Multiple Endorsements",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 3 or EDGT 580",
    "offered": "Online"
  },
  "EDST785": {
    "title": "The Reflective Practitioner: Resource Seminar – Middle/Secondary",
    "credits": 3,
    "prereqs": "Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDST786": {
    "title": "The Reflective Practitioner: Resource Seminar – Elementary",
    "credits": 3,
    "prereqs": "Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDST790": {
    "title": "Student Teaching Local",
    "credits": 3,
    "prereqs": "Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDST791": {
    "title": "Student Teaching Local – Own Classroom",
    "credits": 3,
    "prereqs": "Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDST792": {
    "title": "Student Teaching Distance",
    "credits": 3,
    "prereqs": "Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDST793": {
    "title": "Student Teaching Distance – Own Classroom",
    "credits": 3,
    "prereqs": "Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDSU696": {
    "title": "Educational Studies Capstone",
    "credits": 3,
    "prereqs": "Non-Licensure Gate 3 with a score of 5 or EDUC 665",
    "offered": "Online"
  },
  "EDUC125": {
    "title": "Introduction to Education",
    "credits": 1,
    "offered": "Resident"
  },
  "EDUC175": {
    "title": "School of Education Gate 1 – UG Initial Licensure",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "EDUC185": {
    "title": "Education Exploratory Lab I",
    "credits": 0,
    "prereqs": "EDGT 266 or EDGT 275 or EDGT 277",
    "offered": "Online"
  },
  "EDUC188": {
    "title": "Practicum in Education I: Distance",
    "credits": 0,
    "prereqs": "((EDUC 221 or EDUC 225) and (Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5 or Background Check Clearance with a score of 5) and (EDUC 318 (may be taken concurrently) or EDUC 235 (may be taken concurrently)))",
    "offered": "Online"
  },
  "EDUC189": {
    "title": "Practicum in Education I: Local",
    "credits": 0,
    "prereqs": "((EDUC 221 or EDUC 225 or MUSC 210) and (EDUC 318 (may be taken concurrently) or EDUC 235 (may be taken concurrently))) and Background Clear Virginia with a score of 5",
    "offered": "Resident"
  },
  "EDUC200": {
    "title": "Principles of Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC201": {
    "title": "Introduction to Education and Classroom Technology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EDUC205": {
    "title": "Learning Theory and Portfolio Development",
    "credits": 3,
    "prereqs": "EDUC 200 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDUC210": {
    "title": "Early Childhood Education Fundamentals",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC215": {
    "title": "Wellness in the Early Childhood Setting",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC220": {
    "title": "Differentiated Teaching and Learning: Elementary",
    "credits": 2,
    "prereqs": "EDUC 125 (may be taken concurrently) and Background Check Receipt with a score of 5",
    "offered": "Resident and Online"
  },
  "EDUC221": {
    "title": "Content Area Reading and Differentiated Teaching and Learning",
    "credits": 2,
    "prereqs": "Undergraduate Licensure Gate 1 with a score of 5",
    "offered": "Resident and Online"
  },
  "EDUC225": {
    "title": "Instructional Design for Elementary &amp; Middle School Classrooms",
    "credits": 3,
    "prereqs": "((EDUC 125 and EDUC 350 (may be taken concurrently)) or (EDUC 201 and EDUC 350 (may be taken concurrently))) and Undergraduate Licensure Gate 1 with a score of 5",
    "offered": "Resident and Online"
  },
  "EDUC226": {
    "title": "Instructional Design Practicum: Elementary",
    "credits": 2,
    "prereqs": "EDUC 225 and Background Clear Virginia with a score of 5",
    "offered": "Resident"
  },
  "EDUC235": {
    "title": "Content Instructional Design",
    "credits": 3,
    "prereqs": "((Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5)) and EDUC 189 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EDUC236": {
    "title": "Content Instructional Design Practicum: Secondary",
    "credits": 2,
    "prereqs": "EDUC 235 (may be taken concurrently) and Background Clear Virginia with a score of 5",
    "offered": "Resident"
  },
  "EDUC240": {
    "title": "Introduction to Applied Educational Technology Practicum",
    "credits": 2,
    "prereqs": "(EDUC 225 (may be taken concurrently) and EDUC 226 (may be taken concurrently)) or (EDUC 235 (may be taken concurrently) and EDUC 236 (may be taken concurrently)) or KINE 245 (may be taken concurrently) and (Background Check Clearance with a score of 5 or Background Check Receipt with a score of 5) and Undergraduate Initial Gate 2 with a score of 5",
    "offered": "Resident"
  },
  "EDUC275": {
    "title": "School of Education Gate 2 – UG Initial Licensure",
    "credits": 0,
    "prereqs": "EDUC 175",
    "offered": "Resident and Online"
  },
  "EDUC285": {
    "title": "Education Exploratory Lab II",
    "credits": 0,
    "prereqs": "EDGT 266 or EDGT 275 or EDGT 277",
    "offered": "Online"
  },
  "EDUC288": {
    "title": "Practicum in Education II: Distance",
    "credits": 0,
    "prereqs": "((Background Clear Virginia with a score of 5 or Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5) and (EDUC 323 (may be taken concurrently) or EDUC 419 (may be taken concurrently)) and (HIST 419 (may be taken concurrently) or MATH 419 (may be taken concurrently) or TESL 419 (may be taken concurrently) or SPAN 419 (may be taken concurrently) or ENGL 419 (may be taken concurrently)))",
    "offered": "Online"
  },
  "EDUC289": {
    "title": "Practicum in Education II: Local",
    "credits": 0,
    "prereqs": "((EDUC 323 (may be taken concurrently) or EDUC 419 (may be taken concurrently)) and (HIST 419 (may be taken concurrently) or MATH 419 (may be taken concurrently) or TESL 419 (may be taken concurrently) or SPAN 419 (may be taken concurrently) or ENGL 419 (may be taken concurrently))) and Background Clear Virginia with a score of 5",
    "offered": "Resident"
  },
  "EDUC290": {
    "title": "Pre-Teaching Practicum",
    "credits": 1
  },
  "EDUC298": {
    "title": "Education Practicum",
    "credits": 3,
    "prereqs": "Background Check Clearance with a score of 5",
    "offered": "Online"
  },
  "EDUC299": {
    "title": "Internship",
    "credits": 0,
    "prereqs": "Background Check Clearance with a score of 5",
    "offered": "Resident"
  },
  "EDUC301": {
    "title": "Instructional Practices for Math Teachers",
    "credits": 3,
    "prereqs": "Non-Licensure UG Gate 1 with a score of 5",
    "offered": "Online"
  },
  "EDUC302": {
    "title": "Instructional Practices for Reading Teachers",
    "credits": 3,
    "prereqs": "EDUC 200 and EDUC 205",
    "offered": "Online"
  },
  "EDUC303": {
    "title": "Instructional Practices for Content Teachers",
    "credits": 3,
    "prereqs": "EDUC 200 and EDUC 205",
    "offered": "Online"
  },
  "EDUC304": {
    "title": "Classroom Management for Teachers",
    "credits": 3,
    "prereqs": "EDUC 200 and EDUC 205",
    "offered": "Online"
  },
  "EDUC305": {
    "title": "Educational Philosophy for Teachers",
    "credits": 3,
    "prereqs": "EDUC 200 and EDUC 205",
    "offered": "Resident and Online"
  },
  "EDUC306": {
    "title": "Scholarly Writing and APA for Teachers",
    "credits": 3,
    "prereqs": "EDUC 200 and EDUC 205",
    "offered": "Online"
  },
  "EDUC307": {
    "title": "Instructional Practices for Differentiated Instruction",
    "credits": 3,
    "prereqs": "EDUC 200 and EDUC 205",
    "offered": "Online"
  },
  "EDUC315": {
    "title": "Instructional Approaches to Literature for Children and Adolescents",
    "credits": 3,
    "prereqs": "EDUC 225 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EDUC317": {
    "title": "Elementary Reading and Language Arts Practicum",
    "credits": 2,
    "prereqs": "Undergraduate Initial Gate 2 with a score of 5 and EDUC 225 and EDUC 226 and (Background Check Clearance with a score of 5 or Background Check Receipt with a score of 5) and EDUC 318 (may be taken concurrently) and EDUC 319 (may be taken concurrently)",
    "offered": "Resident"
  },
  "EDUC318": {
    "title": "Teaching Reading to Diverse Learners",
    "credits": 3,
    "prereqs": "EDUC 225 and EDUC 189 (may be taken concurrently) and (Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5)",
    "offered": "Resident and Online"
  },
  "EDUC319": {
    "title": "Teaching Writing and Language Arts to Diverse Learners",
    "credits": 3,
    "prereqs": "Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5",
    "offered": "Resident and Online"
  },
  "EDUC322": {
    "title": "Teaching Elementary and Middle School Social Science",
    "credits": 2,
    "prereqs": "((Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5) and (EDUC 288 (may be taken concurrently) or EDUC 289 (may be taken concurrently))) and EDUC 318 and EDUC 319",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident and Online"
  },
  "EDUC323": {
    "title": "Teaching Elementary and Middle School Mathematics",
    "credits": 2,
    "prereqs": "EDUC 318 and EDUC 319 and EDUC 289 (may be taken concurrently) and (Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5)",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident and Online"
  },
  "EDUC324": {
    "title": "Teaching Elementary and Middle School Science",
    "credits": 2,
    "prereqs": "((EDUC 322 (may be taken concurrently) or EDUC 323 (may be taken concurrently)) and (Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5) and (EDUC 288 (may be taken concurrently) or EDUC 289 (may be taken concurrently))) and (EDUC 318 and EDUC 319)",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident and Online"
  },
  "EDUC350": {
    "title": "Behavior and Individual Differences",
    "credits": 3,
    "prereqs": "EDGT 175 or EDGT 177 (may be taken concurrently) or EDUC 175 or Undergraduate Licensure Gate 1 with a score of 5",
    "offered": "Resident and Online"
  },
  "EDUC359": {
    "title": "Advanced Technology Skills for Educators",
    "credits": 3,
    "prereqs": "EDUC 201",
    "note": "This course can be taken concurrently with EDUC courses that are above EDUC 225 and EDUC 235",
    "offered": "Resident"
  },
  "EDUC360": {
    "title": "Foundations of Education",
    "credits": 2,
    "prereqs": "((EDUC 125 or EDUC 201 or MUSC 210) and (Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5))",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident and Online"
  },
  "EDUC369": {
    "title": "Cultural Studies in International Schools and Environments",
    "credits": 3,
    "prereqs": "(EDUC 189 or EDUC 289 or EDUC 389) and (Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Resident and Online"
  },
  "EDUC375": {
    "title": "School of Education Gate 3 – UG Initial Licensure",
    "credits": 0,
    "prereqs": "EDUC 275",
    "offered": "Online"
  },
  "EDUC380": {
    "title": "Current Issues in Education",
    "credits": 3,
    "note": "This is the capstone course. It should be the last course taken.",
    "offered": "Online"
  },
  "EDUC385": {
    "title": "Education Exploratory Lab III",
    "credits": 0,
    "prereqs": "EDGT 266 or EDGT 275 or EDGT 277",
    "offered": "Online"
  },
  "EDUC388": {
    "title": "Practicum in Education III: Distance",
    "credits": 0,
    "prereqs": "(Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5 or Background Check Clearance with a score of 5) and (EDUC 410 (may be taken concurrently) or EDUC 435 (may be taken concurrently))",
    "offered": "Online"
  },
  "EDUC389": {
    "title": "Practicum in Education III: Local",
    "credits": 0,
    "prereqs": "Background Clear Virginia with a score of 5 and (EDUC 410 (may be taken concurrently) or EDUC 435 (may be taken concurrently))",
    "offered": "Resident"
  },
  "EDUC390": {
    "title": "Teaching Practicum",
    "credits": 3,
    "prereqs": "Background Check Clearance with a score of 5 or Background Clear International with a score of 5",
    "note": "This is a capstone course. It should be the last course taken.",
    "offered": "Online"
  },
  "EDUC398": {
    "title": "Field Experience Capstone",
    "credits": 3,
    "prereqs": "Background Check Clearance with a score of 5 or Background Clear International with a score of 5",
    "offered": "Online"
  },
  "EDUC410": {
    "title": "Elementary School Curriculum",
    "credits": 3,
    "prereqs": "((Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5)) and EDUC 318 and EDUC 319 and EDUC 322 and EDUC 323 and EDUC 389 (may be taken concurrently)",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident and Online"
  },
  "EDUC411": {
    "title": "Elementary School Curriculum Practicum",
    "credits": 1,
    "prereqs": "Undergraduate Initial Gate 2 with a score of 5 and EDUC 317 and EDUC 318 and EDUC 319 and EDUC 322 and EDUC 323 and EDUC 324 and (Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5)",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident"
  },
  "EDUC412": {
    "title": "Middle School Curriculum and Instruction",
    "credits": 2,
    "prereqs": "((Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5) and (EDUC 488 or EDUC 489)) and EDUC 322 and EDUC 323 and EDUC 324",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident and Online"
  },
  "EDUC415": {
    "title": "Diagnostic Measurement and Evaluation",
    "credits": 2,
    "prereqs": "((Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)) and EDUC 322 and EDUC 323 and EDUC 324",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident and Online"
  },
  "EDUC416": {
    "title": "Diagnostic Measurement and Evaluation Practicum",
    "credits": 1,
    "prereqs": "Undergraduate Initial Gate 2 with a score of 5 and EDUC 317 and EDUC 318 and EDUC 319 and EDUC 323 and (Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5)",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident"
  },
  "EDUC419": {
    "title": "Content Teaching Methods",
    "credits": 3,
    "prereqs": "((Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5) and (EDUC 235 and EDUC 236 or EDUC 188 or EDUC 189) and (Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5) and (EDUC 288 (may be taken concurrently) or EDUC 289 (may be taken concurrently)))",
    "note": "Offered fall semester only Note: Admission to Educator Preparation Program",
    "offered": "Resident and Online"
  },
  "EDUC420": {
    "title": "Content Teaching Methods Practicum",
    "credits": 1,
    "prereqs": "Undergraduate Initial Gate 2 with a score of 5 and Background Check Clearance with a score of 5 and EDUC 235 and EDUC 236",
    "note": "(Offered fall semester only) Note: Admission to Educator Preparation Program",
    "offered": "Resident"
  },
  "EDUC425": {
    "title": "Content Measurement and Evaluation",
    "credits": 3,
    "prereqs": "((Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5) and (EDUC 235 and EDUC 236 or EDUC 188 or EDUC 189) and (Background Check Clearance with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5 or Background Clear Virginia with a score of 5))",
    "note": "Admission to Educator Preparation Program",
    "offered": "Resident and Online"
  },
  "EDUC435": {
    "title": "Content Curriculum Fundamentals",
    "credits": 3,
    "prereqs": "((Undergraduate Initial Gate 2 with a score of 5 or UG - Licensure Opt-Out Gate 2 with a score of 5) and (EDUC 235 and EDUC 236 or EDUC 188 or EDUC 189) and (Background Check Clearance with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5 or Background Clear Virginia with a score of 5) and EDUC 389 (may be taken concurrently))",
    "note": "Enrollment in Teacher Licensure program",
    "offered": "Resident and Online"
  },
  "EDUC436": {
    "title": "Content Curriculum Fundamentals Practicum",
    "credits": 1,
    "prereqs": "Undergraduate Initial Gate 2 with a score of 5 and (Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5) and EDUC 435 (may be taken concurrently)",
    "note": "Enrollment in Teacher Licensure program",
    "offered": "Resident"
  },
  "EDUC475": {
    "title": "Seminar in Student Teaching",
    "credits": 2,
    "prereqs": "Undergraduate Licensure Gate 3 with a score of 5 and EDUC 476 (may be taken concurrently) and EDUC 477 (may be taken concurrently)",
    "note": "Admission to Student Teaching",
    "offered": "Resident and Online"
  },
  "EDUC476": {
    "title": "Supervised Student Teaching I",
    "credits": 3,
    "prereqs": "Undergraduate Licensure Gate 3 with a score of 5 and EDUC 475 (may be taken concurrently) and EDUC 477 (may be taken concurrently)",
    "note": "Admission to Student Teaching",
    "offered": "Resident and Online"
  },
  "EDUC477": {
    "title": "Supervised Student Teaching II",
    "credits": 3,
    "prereqs": "Undergraduate Licensure Gate 3 with a score of 5 and EDUC 475 (may be taken concurrently) and EDUC 476 (may be taken concurrently)",
    "note": "Admission to Student Teaching",
    "offered": "Resident and Online"
  },
  "EDUC488": {
    "title": "Practicum in Middle Education: External",
    "credits": 0,
    "prereqs": "(Background Clear Virginia with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear International with a score of 5 or Background Check Clearance with a score of 5) and EDUC 412 (may be taken concurrently)",
    "offered": "Online"
  },
  "EDUC489": {
    "title": "Practicum in Middle Education: Local",
    "credits": 0,
    "prereqs": "Background Clear Virginia with a score of 5 and EDUC 412 (may be taken concurrently)",
    "offered": "Resident"
  },
  "EDUC495": {
    "title": "Directed Research",
    "credits": 1,
    "prereqs": "EDUC 000 and Background Check Receipt with a score of 5",
    "offered": "Resident"
  },
  "EDUC497": {
    "title": "Special Topics in Education",
    "credits": 1,
    "prereqs": "Background Check Receipt with a score of 5",
    "offered": "Resident and Online"
  },
  "EDUC499": {
    "title": "English Internship",
    "credits": 6,
    "prereqs": "Background Check Receipt with a score of 5",
    "offered": "Resident"
  },
  "EDUC500": {
    "title": "Learning Theory",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC501": {
    "title": "Advanced Child Development",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC507": {
    "title": "Educational Statistics",
    "credits": 3
  },
  "EDUC518": {
    "title": "Educational Research and Assessment",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC521": {
    "title": "Foundations of Exceptionality",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC527": {
    "title": "Characteristics of Autism Spectrum Disorder and Assessment",
    "credits": 3
  },
  "EDUC528": {
    "title": "Communication, Language and Sensory Aspects for Autism",
    "credits": 3
  },
  "EDUC531": {
    "title": "Teaching the Natural and Social Sciences",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC533": {
    "title": "Teaching Writing Across the Curriculum",
    "credits": 3
  },
  "EDUC535": {
    "title": "Secondary Instructional Procedures",
    "credits": 3
  },
  "EDUC536": {
    "title": "Sec Instructional Procedures P",
    "credits": 1
  },
  "EDUC540": {
    "title": "Historical Perspectives in Urban Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC542": {
    "title": "Culturally Responsive Teaching",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC543": {
    "title": "Urban Schools and Communities",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC544": {
    "title": "Research in Urban Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC547": {
    "title": "The Differentiated Classroom",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC551": {
    "title": "Comparative Educations",
    "credits": 3
  },
  "EDUC556": {
    "title": "Teaching Content Area Reading",
    "credits": 3
  },
  "EDUC562": {
    "title": "Introduction to Higher Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC585": {
    "title": "Education Exploratory Lab I",
    "credits": 0,
    "prereqs": "EDGT 556 or EDGT 560",
    "offered": "Online"
  },
  "EDUC590": {
    "title": "Student Teaching I: Local",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 5 or Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDUC591": {
    "title": "Student Teaching II: Local",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 5 or Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDUC592": {
    "title": "Student Teaching I: External",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 5 or Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDUC593": {
    "title": "Student Teaching II: External",
    "credits": 3,
    "prereqs": "Education Gate 3 with a score of 5 or Education Gate 3-Doctoral with a score of 5",
    "offered": "Online"
  },
  "EDUC597": {
    "title": "Special Topics in Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC600": {
    "title": "Human Development Across the Lifespan",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC601": {
    "title": "Professional Development in Middle Grades Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC602": {
    "title": "Young Adolescents, Schools and Communities",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC603": {
    "title": "Comparative Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC604": {
    "title": "Foundations of Education",
    "credits": 3,
    "prereqs": "Non-Licensure Graduate Gate 1 with a score of 5",
    "offered": "Online"
  },
  "EDUC618": {
    "title": "Applications of Educational Research",
    "credits": 3
  },
  "EDUC621": {
    "title": "Educational Assessment for Special Needs",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC622": {
    "title": "Educational Assessment and Intervention",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC624": {
    "title": "Instructional Methods for Behavior and Learning",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC626": {
    "title": "Characteristics of Autism Spectrum Disorder and Assessment",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC628": {
    "title": "Communication, Language and Sensory Aspects for Autism",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC629": {
    "title": "Technology and Diversity",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC630": {
    "title": "Technology Practices for Instructional Improvement",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC631": {
    "title": "Foundations of Educational Technology and Online Learning",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC633": {
    "title": "Principles of Design and Management in Educational Technology and Online Learning",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC635": {
    "title": "Teaching Science in the Middle School",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC637": {
    "title": "Teaching Social Studies in the Middle School",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC638": {
    "title": "Leadership in Educational Technology",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC639": {
    "title": "Trends and Issues in Educational Technology",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC640": {
    "title": "School Administration",
    "credits": 3,
    "prereqs": "Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5",
    "offered": "Online"
  },
  "EDUC641": {
    "title": "Supervision of Instruction",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC642": {
    "title": "Leadership and Supervision in Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC643": {
    "title": "Contemporary Issues in Educational Policy",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC644": {
    "title": "School Leadership in Diverse Settings",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC645": {
    "title": "Foundations for Educational Leaders",
    "credits": 3,
    "prereqs": "Advanced Gate 1 with a score of 5",
    "offered": "Online"
  },
  "EDUC646": {
    "title": "School-Community Relations",
    "credits": 3,
    "prereqs": "Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5",
    "offered": "Online"
  },
  "EDUC647": {
    "title": "School Law",
    "credits": 3,
    "prereqs": "Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear International with a score of 5 or Background Check Clearance with a score of 5",
    "offered": "Online"
  },
  "EDUC648": {
    "title": "School Finance and Management",
    "credits": 3,
    "prereqs": "(Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5 or Background Clear International with a score of 5 or Background Check Clearance with a score of 5)",
    "offered": "Online"
  },
  "EDUC658": {
    "title": "Introduction to Student Affairs",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC662": {
    "title": "Student Development Theory and Practice",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC663": {
    "title": "Social and Political Aspects in Higher Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC664": {
    "title": "Economics and Finance of Higher Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC665": {
    "title": "Student Support Services &amp; Retention",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC668": {
    "title": "Mathematics Instruction and Learning for K-8",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC669": {
    "title": "Literacy for Middle Level Learners",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC671": {
    "title": "Curriculum Evaluation",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC672": {
    "title": "Curriculum Development (Elementary/Secondary)",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC673": {
    "title": "Curriculum and Methods for Effective Instruction",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC675": {
    "title": "Elementary Curriculum and Methods",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC676": {
    "title": "Middle Grades Curriculum and Methods",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC685": {
    "title": "Education Exploratory Lab II",
    "credits": 0,
    "prereqs": "EDGT 556 or EDGT 560",
    "offered": "Online"
  },
  "EDUC689": {
    "title": "School of Education Gate 1 – Graduate Advanced Licensure",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "EDUC690": {
    "title": "Thesis Defense",
    "credits": 3
  },
  "EDUC691": {
    "title": "School of Education Gate 2 – Graduate Advanced Licensure",
    "credits": 0,
    "prereqs": "EDUC 689",
    "offered": "Resident and Online"
  },
  "EDUC692": {
    "title": "School of Education Gate 3 – Advanced Licensure",
    "credits": 0,
    "prereqs": "EDUC 691",
    "offered": "Online"
  },
  "EDUC695": {
    "title": "Directed Research",
    "credits": 1
  },
  "EDUC696": {
    "title": "Current Issues in Education Capstone",
    "credits": 3,
    "prereqs": "Non-Licensure Gate 3 with a score of 5 or EDUC 665",
    "offered": "Online"
  },
  "EDUC697": {
    "title": "Seminar in Education",
    "credits": 3
  },
  "EDUC698": {
    "title": "Directed Practicum",
    "credits": 3,
    "prereqs": "(Background Clear Virginia with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Check Clearance with a score of 5) and Non-Licensure Gate 3 with a score of 5 or Add-On Licensure Gate 3 with a score of 5",
    "note": "Completed application and approval of Department Chair",
    "offered": "Online"
  },
  "EDUC700": {
    "title": "Introduction and Orientation to Doctoral Studies",
    "credits": 2,
    "offered": "Online"
  },
  "EDUC701": {
    "title": "Advanced Learning Theory and Research",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC703": {
    "title": "Theories of Historical and Social Foundations of Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC710": {
    "title": "Orientation to Doctoral Study and Research",
    "credits": 2,
    "offered": "Online"
  },
  "EDUC718": {
    "title": "Advanced Research and Writing",
    "credits": 3
  },
  "EDUC721": {
    "title": "Issues and Trends in Exceptionality",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC723": {
    "title": "Administration and Supervision of Special Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC730": {
    "title": "Issues &amp; Trends in Learning Technologies",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC731": {
    "title": "Instructional Design Theory",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC732": {
    "title": "Principles of Human Performance Technology",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC733": {
    "title": "Instructional Systems Design",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC734": {
    "title": "Implementation and Assessment of Multimedia Learning Tools",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC735": {
    "title": "Issues and Trends in Curriculum and Instruction",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC736": {
    "title": "Models for Instructional Design and Technology",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC737": {
    "title": "Ethics and Social Responsibility in Technology",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC740": {
    "title": "Leadership Principles and Ethics",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC741": {
    "title": "Theories of Educational Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC742": {
    "title": "Educational Leadership and Public Relations",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC743": {
    "title": "Executive Leadership in Curriculum and Instruction",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC745": {
    "title": "Organizational Analysis and Problem Solving",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC746": {
    "title": "Conflict Resolution",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC747": {
    "title": "Advanced Educational Law",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC748": {
    "title": "School District Finance and Organizational Management",
    "credits": 3,
    "prereqs": "EDUC 743 or (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Online"
  },
  "EDUC750": {
    "title": "Survey of Educational Research",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC758": {
    "title": "Teaching the College Student",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC759": {
    "title": "College and University Administration",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC760": {
    "title": "Literature Review in Education Research",
    "credits": 2,
    "prereqs": "EDUC 750",
    "offered": "Online"
  },
  "EDUC771": {
    "title": "Curriculum Theory",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC772": {
    "title": "Online Course Design and Development",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC773": {
    "title": "Teaching and Learning in the Online Environment",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC774": {
    "title": "Current Issues and Trends in Online Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC775": {
    "title": "Advanced Educational Psychology",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC776": {
    "title": "Motivation and Cognition in Learning",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC778": {
    "title": "Program Design and Assessment",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC779": {
    "title": "Institutional Research",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC780": {
    "title": "Evaluation and Measurement Tools",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC781": {
    "title": "Compliance and Report Writing",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC782": {
    "title": "Historical Perspectives of Higher Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC783": {
    "title": "Economic Impact in Higher Education",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC784": {
    "title": "Assessment &amp; Accreditation",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC785": {
    "title": "Current Issues and Trends in Student Affairs",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC786": {
    "title": "Leadership and Administration in Student Affairs",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC787": {
    "title": "Legal Issues and Policies in Student Affairs",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC798": {
    "title": "Advanced Research and Writing",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC799": {
    "title": "Internship: District-Level Leadership",
    "credits": 3,
    "prereqs": "District-Level Advanced Gate 3 with a score of 5",
    "offered": "Online"
  },
  "EDUC810": {
    "title": "Dissertation Planning",
    "credits": 1,
    "prereqs": "EDUC 760",
    "offered": "Online"
  },
  "EDUC812": {
    "title": "Advanced Educational Statistics",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC815": {
    "title": "Quantitative Methods of Research",
    "credits": 3,
    "prereqs": "EDUC 812",
    "offered": "Online"
  },
  "EDUC816": {
    "title": "Applied Research",
    "credits": 3,
    "prereqs": "EDUC 750",
    "offered": "Online"
  },
  "EDUC817": {
    "title": "Qualitative Methods of Research",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC840": {
    "title": "Issues and Trends in Educational Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC845": {
    "title": "Policy Analysis",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC848": {
    "title": "Culture and Educational Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC850": {
    "title": "Literature Review for Applied Research",
    "credits": 3,
    "prereqs": "EDUC 816",
    "offered": "Online"
  },
  "EDUC860": {
    "title": "Literature Review for Advanced Research",
    "credits": 2,
    "offered": "Online"
  },
  "EDUC871": {
    "title": "Investigations in Curriculum Change",
    "credits": 3,
    "offered": "Online"
  },
  "EDUC872": {
    "title": "Research in Curriculum Design and Development",
    "credits": 3,
    "prereqs": "EDUC 771",
    "offered": "Online"
  },
  "EDUC880": {
    "title": "Applied Research Concepts &amp; Methodology",
    "credits": 3,
    "prereqs": "EDUC 850",
    "offered": "Online"
  },
  "EDUC887": {
    "title": "Capstone I",
    "credits": 5,
    "prereqs": "EDUC 880",
    "offered": "Online"
  },
  "EDUC888": {
    "title": "Capstone II",
    "credits": 5,
    "prereqs": "EDUC 887",
    "offered": "Online"
  },
  "EDUC889": {
    "title": "Capstone III",
    "credits": 5,
    "prereqs": "EDUC 888",
    "offered": "Online"
  },
  "EDUC890": {
    "title": "Capstone IV",
    "credits": 0,
    "prereqs": "EDUC 889",
    "offered": "Online"
  },
  "EDUC895": {
    "title": "Advanced Directed Research",
    "credits": 3
  },
  "EDUC897": {
    "title": "Advanced Seminar in Education",
    "credits": 3
  },
  "EDUC915": {
    "title": "Advanced Quantitative Methods of Research",
    "credits": 3,
    "prereqs": "EDUC 860",
    "offered": "Online"
  },
  "EDUC917": {
    "title": "Advanced Qualitative Methods of Research",
    "credits": 3,
    "prereqs": "EDUC 860",
    "offered": "Online"
  },
  "EDUC919": {
    "title": "Professional Writing and Research",
    "credits": 3,
    "prereqs": "(EDUC 815 and EDUC 812 and EDUC 760) or (EDUC 760 and EDUC 816 and EDUC 817)",
    "offered": "Online"
  },
  "EDUC960": {
    "title": "Dissertation Planning",
    "credits": 1,
    "prereqs": "EDUC 815 and EDUC 817",
    "offered": "Online"
  },
  "EDUC970": {
    "title": "Comprehensive Exam",
    "credits": 0,
    "prereqs": "EDUC 919 (may be taken concurrently)",
    "note": "Tuition charged for a one hour course.",
    "offered": "Online"
  },
  "EDUC980": {
    "title": "Research Concepts &amp; Methodology",
    "credits": 3,
    "prereqs": "EDUC 915 or EDUC 917 or EDUC 919",
    "offered": "Online"
  },
  "EDUC987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "EDUC 980",
    "offered": "Online"
  },
  "EDUC988": {
    "title": "Dissertation II",
    "credits": 3,
    "prereqs": "EDUC 980",
    "offered": "Online"
  },
  "EDUC989": {
    "title": "Dissertation III",
    "credits": 3,
    "prereqs": "EDUC 980",
    "offered": "Online"
  },
  "EDUC990": {
    "title": "Dissertation IV",
    "credits": 3,
    "prereqs": "EDUC 989",
    "offered": "Online"
  },
  "ELTC101": {
    "title": "Foundations of Electricity",
    "credits": 4,
    "prereqs": "CRFT 101 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ELTC201": {
    "title": "Intermediate Electricity",
    "credits": 4,
    "prereqs": "ELTC 101 and CRFT 101",
    "offered": "Resident"
  },
  "ELTC301": {
    "title": "Advanced Electricity",
    "credits": 4,
    "prereqs": "ELTC 201 and CRFT 101",
    "offered": "Resident"
  },
  "ELTC401": {
    "title": "Special Topics in Electricity",
    "credits": 4,
    "prereqs": "ELTC 301 and CRFT 101",
    "offered": "Resident"
  },
  "EMGT320": {
    "title": "Special Events Management",
    "credits": 3,
    "prereqs": "HMGT 200 or SMGT 200",
    "offered": "Resident and Online"
  },
  "EMGT420": {
    "title": "Conference and Meeting Management",
    "credits": 3,
    "prereqs": "HMGT 200 or SMGT 200",
    "offered": "Resident and Online"
  },
  "ENGC299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "ENGC301": {
    "title": "Introduction to Embedded Systems",
    "credits": 3,
    "prereqs": "CSIS 112 and ENGE 201",
    "offered": "Resident"
  },
  "ENGC361": {
    "title": "Computer Architecture",
    "credits": 3,
    "prereqs": "ENGE 201",
    "offered": "Resident"
  },
  "ENGC371": {
    "title": "Embedded and Real-Time Systems Design",
    "credits": 3,
    "prereqs": "ENGC 301",
    "offered": "Resident"
  },
  "ENGC401": {
    "title": "Advanced Embedded Systems Design",
    "credits": 3,
    "prereqs": "ENGC 361 and ENGC 371 and CSIS 215",
    "offered": "Resident"
  },
  "ENGC465": {
    "title": "Introduction to Computer Networks",
    "credits": 3,
    "prereqs": "ENGE 341",
    "offered": "Resident"
  },
  "ENGC497": {
    "title": "Special Topics in Computer Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGC499": {
    "title": "Computer Engineering Internship",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGE201": {
    "title": "Introduction to Logic Design",
    "credits": 3,
    "prereqs": "CSIS 111 and MATH 250 or (pre2016 post1995)SAT Math with a score of 600 or SAT Section Math with a score of 620 or ACT Math with a score of 27 or Placement Score-Math with a score of 075",
    "offered": "Resident"
  },
  "ENGE205": {
    "title": "Electrical Systems",
    "credits": 3,
    "prereqs": "ENGR 115 and MATH 131",
    "offered": "Online"
  },
  "ENGE211": {
    "title": "Introduction to Electrical and Electronic Circuits",
    "credits": 4,
    "prereqs": "ENGR 110 and (MATH 131 or ENGR 131)",
    "offered": "Resident"
  },
  "ENGE212": {
    "title": "AC Circuit Analysis",
    "credits": 4,
    "prereqs": "MATH 132 and ENGE 211",
    "offered": "Resident"
  },
  "ENGE299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "ENGE311": {
    "title": "Signals and Systems",
    "credits": 3,
    "prereqs": "ENGE 212 and (MATH 321 or MATH 221)",
    "offered": "Resident"
  },
  "ENGE312": {
    "title": "Digital Signal Processing",
    "credits": 3,
    "prereqs": "ENGE 311",
    "offered": "Resident"
  },
  "ENGE321": {
    "title": "Electronics",
    "credits": 4,
    "prereqs": "ENGE 212",
    "offered": "Resident"
  },
  "ENGE331": {
    "title": "Electromagnetic Fields",
    "credits": 4,
    "prereqs": "ENGE 212 and MATH 334",
    "offered": "Resident"
  },
  "ENGE341": {
    "title": "Communications Systems",
    "credits": 3,
    "prereqs": "ENGR 210 and MATH 231 and ENGE 311",
    "offered": "Resident"
  },
  "ENGE351": {
    "title": "Power Systems",
    "credits": 3,
    "prereqs": "ENGE 321",
    "offered": "Resident"
  },
  "ENGE411": {
    "title": "Control Systems",
    "credits": 3,
    "prereqs": "ENGE 311 and ENGR 133",
    "offered": "Resident"
  },
  "ENGE421": {
    "title": "Advanced Electronics",
    "credits": 3,
    "prereqs": "ENGE 321",
    "offered": "Resident"
  },
  "ENGE431": {
    "title": "Electromagnetic Compatibility",
    "credits": 3,
    "prereqs": "ENGE 331",
    "offered": "Resident"
  },
  "ENGE497": {
    "title": "Special Topics in Electrical Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGE499": {
    "title": "Electrical Engineering Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "ENGI220": {
    "title": "Engineering Economy",
    "credits": 3,
    "prereqs": "MATH 131 or MATH 126 or ENGR 131",
    "offered": "Resident and Online"
  },
  "ENGI230": {
    "title": "Production Systems",
    "credits": 3,
    "prereqs": "ENGR 110 and CSIS 111",
    "offered": "Resident and Online"
  },
  "ENGI299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "ENGI300": {
    "title": "Enterprise Forecasting",
    "credits": 3,
    "prereqs": "ENGR 210 and First Year Engineering Gate with a score of 5",
    "note": "First Year Engineering Gate courses consistent of: MATH 131, MATH 132, PHYS 231, and ENGR 110 (or ENGR 115) with a grade of ‘C’ or higher",
    "offered": "Resident"
  },
  "ENGI305": {
    "title": "Data Analysis Methods and Modeling",
    "credits": 3,
    "prereqs": "ENGR 210",
    "offered": "Resident"
  },
  "ENGI307": {
    "title": "Data Analysis and Machine Learning",
    "credits": 3,
    "prereqs": "ENGR 210",
    "offered": "Online"
  },
  "ENGI310": {
    "title": "Operations and Research Logistics",
    "credits": 3,
    "prereqs": "ENGR 210",
    "offered": "Online"
  },
  "ENGI330": {
    "title": "Facilities Design",
    "credits": 3,
    "prereqs": "ENGI 230",
    "offered": "Resident and Online"
  },
  "ENGI340": {
    "title": "Introduction to Operations Research: Deterministic Models",
    "credits": 3,
    "prereqs": "MATH 321 (may be taken concurrently) or MATH 221 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ENGI350": {
    "title": "Introduction to Operations Research: Probabilistic Models",
    "credits": 3,
    "prereqs": "ENGI 340 and ENGR 210 and CSIS 111",
    "offered": "Resident"
  },
  "ENGI360": {
    "title": "Engineering Information Systems",
    "credits": 3,
    "prereqs": "First Year Engineering Gate with a score of 5",
    "note": "First Year Engineering Gate courses consistent of: MATH 131, MATH 132, PHYS 231, and ENGR 110 (or ENGR 115) with a grade of ‘C’ or higher",
    "offered": "Resident"
  },
  "ENGI371": {
    "title": "Six Sigma, Lean and Kaizen",
    "credits": 3,
    "prereqs": "ENGR 210",
    "offered": "Online"
  },
  "ENGI420": {
    "title": "Advanced Data Analysis and Machine Learning",
    "credits": 3,
    "prereqs": "(ENGR 210 or MATH 211) and (MATH 221 or MATH 321) and (ENGR 133 or MATH 133)",
    "offered": "Resident"
  },
  "ENGI428": {
    "title": "CNC and Programming Logic Chips",
    "credits": 3,
    "prereqs": "ENGE 205 or ENGE 211",
    "offered": "Online"
  },
  "ENGI430": {
    "title": "Decision Analysis",
    "credits": 3,
    "prereqs": "ENGI 220 and ENGI 350 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ENGI450": {
    "title": "Human Factors and Ergonomics",
    "credits": 3,
    "prereqs": "ENGI 330",
    "offered": "Resident and Online"
  },
  "ENGI460": {
    "title": "Digital Simulation",
    "credits": 3,
    "prereqs": "MATH 334",
    "offered": "Resident"
  },
  "ENGI461": {
    "title": "Engineering Technology Capstone I",
    "credits": 3,
    "offered": "Online"
  },
  "ENGI462": {
    "title": "Engineering Technology Capstone II",
    "credits": 3,
    "prereqs": "ENGI 461",
    "note": "Can be taken in the same semester as ENGI 461",
    "offered": "Online"
  },
  "ENGI497": {
    "title": "Special Topics in Industrial and Systems Engineering",
    "credits": 1,
    "offered": "Resident"
  },
  "ENGI499": {
    "title": "ISE Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "ENGI520": {
    "title": "Advanced Data Analysis and Machine Learning",
    "credits": 3,
    "prereqs": "Linear Algebra-MATH321 with a score of 5",
    "offered": "Resident"
  },
  "ENGL000": {
    "title": "English Assessment",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "ENGL100": {
    "title": "Basic Composition",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL101": {
    "title": "Composition and Rhetoric",
    "credits": 3,
    "prereqs": "ENGL 100 or ESOL 100 or Placement Score-English with a score of 070",
    "offered": "Resident and Online"
  },
  "ENGL102": {
    "title": "Composition and Literature",
    "credits": 3,
    "prereqs": "ENGL 101",
    "offered": "Resident and Online"
  },
  "ENGL103": {
    "title": "Technical Communication for the Professions",
    "credits": 3,
    "prereqs": "ENGL 101",
    "offered": "Online"
  },
  "ENGL111": {
    "title": "Introduction to Documentation",
    "credits": 1,
    "offered": "Online"
  },
  "ENGL201": {
    "title": "American Literature I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL202": {
    "title": "American Literature II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL215": {
    "title": "English Literature I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL216": {
    "title": "English Literature II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL221": {
    "title": "World Literature I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL222": {
    "title": "World Literature II",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "ENGL300": {
    "title": "Survey of Literary History",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL301": {
    "title": "Literary History: Ancient",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL302": {
    "title": "Literary History: Modern",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL304": {
    "title": "Period",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL305": {
    "title": "Genre",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL306": {
    "title": "Diversity",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL307": {
    "title": "Expository Writing",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL308": {
    "title": "Author",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL310": {
    "title": "Children's Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL320": {
    "title": "Adolescent Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL322": {
    "title": "Shakespeare",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL333": {
    "title": "Modern Grammar",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL334": {
    "title": "Etymology",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL341": {
    "title": "American Realism and Naturalism",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL350": {
    "title": "Advanced Expository Writing",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL360": {
    "title": "Christian Fantasy Literature",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL364": {
    "title": "History of the English Language",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL400": {
    "title": "Seminar in Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL405": {
    "title": "Literature of the Bible",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL412": {
    "title": "Author",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL413": {
    "title": "Period",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL414": {
    "title": "Genre",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL415": {
    "title": "Diversity",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL416": {
    "title": "Writing",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL417": {
    "title": "Writing as Cultural Engagement",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL419": {
    "title": "Methods and Materials in the Teaching of English",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL420": {
    "title": "Secondary Methods Teaching Practicum",
    "credits": 0,
    "offered": "Resident"
  },
  "ENGL433": {
    "title": "Literary Criticism",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL442": {
    "title": "Musical Theatre",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL460": {
    "title": "Christian Literature",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL461": {
    "title": "Contemporary Christian Fiction",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL462": {
    "title": "Religious Issues in Dramatic Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL465": {
    "title": "Lewis and Tolkien",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL491": {
    "title": "Senior Capstone",
    "credits": 3,
    "prereqs": "(ENGL 301 or ENGL 302) and ENGL 101",
    "offered": "Resident"
  },
  "ENGL495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "ENGL497": {
    "title": "Special Topics in English",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL499": {
    "title": "English Internship",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "ENGL501": {
    "title": "Christian Poetics",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL503": {
    "title": "Bibliography and Research",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL505": {
    "title": "Advanced Literary Criticism",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL510": {
    "title": "Studies in Ancient Literature/Classics",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL511": {
    "title": "Christian Authors",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL512": {
    "title": "Seminar in British Authors",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL513": {
    "title": "Linguistics",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL515": {
    "title": "Studies in British Literature",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL517": {
    "title": "Old English Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL520": {
    "title": "Adolescent Literature",
    "credits": 3
  },
  "ENGL521": {
    "title": "Victorian Literature",
    "credits": 3
  },
  "ENGL522": {
    "title": "Modern Drama",
    "credits": 3
  },
  "ENGL523": {
    "title": "Shakespeare",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL529": {
    "title": "Studies in American Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL532": {
    "title": "Seminar in American Authors",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL534": {
    "title": "Literary Criticism",
    "credits": 3
  },
  "ENGL539": {
    "title": "Early American Literature",
    "credits": 3
  },
  "ENGL540": {
    "title": "The American Renaissance",
    "credits": 3
  },
  "ENGL542": {
    "title": "The American Novel",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL543": {
    "title": "Elizabethan Literature",
    "credits": 3
  },
  "ENGL550": {
    "title": "Nonfiction Writing",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL551": {
    "title": "Poetry Writing",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL552": {
    "title": "Fiction Writing",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL553": {
    "title": "Chaucer",
    "credits": 3
  },
  "ENGL562": {
    "title": "Text Analysis",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL563": {
    "title": "17th Century English Literature",
    "credits": 3
  },
  "ENGL570": {
    "title": "Classical Rhetoric",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL582": {
    "title": "18th Century English Literature",
    "credits": 3
  },
  "ENGL595": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL597": {
    "title": "Special Topics: South Asian Diasporic Fiction",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL600": {
    "title": "Editing and Publishing",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL601": {
    "title": "Writing as Cultural Engagement",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL602": {
    "title": "Methods and Materials of Research",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL603": {
    "title": "Literary Theory and Practice",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL607": {
    "title": "Composition Studies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL608": {
    "title": "Modern Rhetoric",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL610": {
    "title": "Classical Literature",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL612": {
    "title": "Contemporary Literature",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL613": {
    "title": "Contemporary and Postmodern Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL621": {
    "title": "Seminar: The Novel",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL633": {
    "title": "Advanced English Grammar",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL634": {
    "title": "Etymology",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL637": {
    "title": "Studies in African-American Literature",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL654": {
    "title": "Methods of Teaching Writing Across the Curriculum",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL656": {
    "title": "Studies in World Literatures",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL664": {
    "title": "English as a World Language",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL688": {
    "title": "Research Seminar",
    "credits": 3,
    "prereqs": "ENGL 602",
    "offered": "Online"
  },
  "ENGL689": {
    "title": "Thesis Proposal and Research",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL690": {
    "title": "Thesis Defense",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ENGL695": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGL697": {
    "title": "English Seminar",
    "credits": 3,
    "offered": "Online"
  },
  "ENGL699": {
    "title": "Thesis",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGM299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "ENGM310": {
    "title": "Materials Engineering",
    "credits": 3,
    "prereqs": "CHEM 121 and First Year Engineering Gate with a score of 5",
    "note": "CHEM 121, First Year Engineering Gate courses consistent of: MATH 131, MATH 132, PHYS 231, and ENGR 110 (or ENGR 115) with a grade of ‘C’ or higher",
    "offered": "Resident"
  },
  "ENGM350": {
    "title": "Computer-Aided Engineering",
    "credits": 3,
    "prereqs": "ENGR 125 and ENGR 240 and MATH 334 and ENGR 315 (may be taken concurrently) and ENGR 360 (may be taken concurrently)",
    "offered": "Resident"
  },
  "ENGM375": {
    "title": "Thermal Fluids Design Lab",
    "credits": 2,
    "prereqs": "PHYS 320 and ENGR 315 and ENGR 360",
    "offered": "Resident"
  },
  "ENGM415": {
    "title": "Design of Machine Components",
    "credits": 3,
    "prereqs": "ENGR 330",
    "offered": "Resident"
  },
  "ENGM445": {
    "title": "Material and Manufacturing Processing",
    "credits": 4,
    "prereqs": "ENGM 310",
    "offered": "Resident"
  },
  "ENGM499": {
    "title": "Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "ENGR102": {
    "title": "Introduction to Engineering",
    "credits": 1,
    "offered": "Resident"
  },
  "ENGR105": {
    "title": "Introduction to Engineering I",
    "credits": 2,
    "offered": "Online"
  },
  "ENGR110": {
    "title": "Introduction to Engineering Fundamentals",
    "credits": 3,
    "prereqs": "ENGR 102 (may be taken concurrently) and (MATH 128 (may be taken concurrently) or MATH 131 (may be taken concurrently) or MATH 132 (may be taken concurrently))",
    "offered": "Resident"
  },
  "ENGR115": {
    "title": "Introduction to Engineering II",
    "credits": 2,
    "prereqs": "ENGR 105 and (MATH 128 (may be taken concurrently) or MATH 130 (may be taken concurrently) or MATH 131 (may be taken concurrently) or MATH 201 (may be taken concurrently) or MATH 217 (may be taken concurrently))",
    "offered": "Online"
  },
  "ENGR125": {
    "title": "Visualization for Engineers",
    "credits": 1,
    "prereqs": "ENGR 110",
    "offered": "Resident"
  },
  "ENGR133": {
    "title": "Calculus with MATLAB",
    "credits": 1,
    "prereqs": "MATH 131 (may be taken concurrently) or ENGR 131 (may be taken concurrently)",
    "note": "This course is intended for Engineering, Computer Science or Internet Technology majors only.",
    "offered": "Resident and Online"
  },
  "ENGR200": {
    "title": "Engineering Design Competition",
    "credits": 1,
    "offered": "Resident"
  },
  "ENGR210": {
    "title": "Probability and Statistical Methods for Engineering",
    "credits": 3,
    "prereqs": "(ENGR 131 or MATH 131) and (ENGR 110 or ENGR 115 or CSCI 110 or CSIS 110)",
    "offered": "Resident and Online"
  },
  "ENGR235": {
    "title": "Statics",
    "credits": 3,
    "prereqs": "PHYS 231",
    "offered": "Resident and Online"
  },
  "ENGR240": {
    "title": "Dynamics",
    "credits": 3,
    "prereqs": "ENGR 235",
    "offered": "Resident and Online"
  },
  "ENGR245": {
    "title": "High Performance Computing",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR270": {
    "title": "Technical Communication",
    "credits": 3,
    "prereqs": "ENGL 101",
    "offered": "Resident and Online"
  },
  "ENGR277": {
    "title": "Engineering Ethical and Legal Issues",
    "credits": 3,
    "prereqs": "(BWVW 102 or GNED 102) or (BWVW102 Exempt with a score of 5)",
    "offered": "Resident"
  },
  "ENGR299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "ENGR313": {
    "title": "Mechatronics",
    "credits": 4,
    "prereqs": "MATH 334 and PHYS 231 and PHYS 232",
    "offered": "Resident"
  },
  "ENGR315": {
    "title": "Fluid Dynamics",
    "credits": 3,
    "prereqs": "MATH 231 and ENGR 235",
    "offered": "Resident and Online"
  },
  "ENGR330": {
    "title": "Mechanics of Materials",
    "credits": 3,
    "prereqs": "ENGR 235",
    "offered": "Resident and Online"
  },
  "ENGR360": {
    "title": "Heat Transfer",
    "credits": 3,
    "prereqs": "MATH 334 and PHYS 320",
    "offered": "Resident"
  },
  "ENGR370": {
    "title": "Quality Assurance",
    "credits": 3,
    "prereqs": "ENGR 210",
    "offered": "Resident and Online"
  },
  "ENGR381": {
    "title": "Engineering Design Introduction",
    "credits": 3,
    "prereqs": "Computer Engineering Gate Req with a score of 5 or Electrical Engineerng Gate Req with a score of 5 or Indust & Sys Engineer Gate Req with a score of 5 or Mechanical Engineer Gate Req with a score of 5 or Civil Engineering Gate Req with a score of 5",
    "offered": "Resident and Online"
  },
  "ENGR385": {
    "title": "Thermodynamics II",
    "credits": 3,
    "prereqs": "PHYS 320",
    "offered": "Resident"
  },
  "ENGR405": {
    "title": "Dynamic Systems Modeling",
    "credits": 3,
    "prereqs": "MATH 334 and ENGR 240",
    "offered": "Resident"
  },
  "ENGR470": {
    "title": "Technology and Business Development Practicum I",
    "credits": 3,
    "prereqs": "BUSI 336 and BUSI 338 and ENGR 102 and ENGI 220",
    "offered": "Resident"
  },
  "ENGR475": {
    "title": "Technology and Business Development Practicum II",
    "credits": 3,
    "prereqs": "ENGR 470",
    "offered": "Resident"
  },
  "ENGR481": {
    "title": "Engineering Design I",
    "credits": 3,
    "prereqs": "ENGR 381 and (MATH 334 or MATH 432) and PHYS 232",
    "offered": "Resident and Online"
  },
  "ENGR482": {
    "title": "Engineering Design II",
    "credits": 3,
    "prereqs": "ENGR 481 or ENGE 481 or ENGC 481 or ENGI 481",
    "offered": "Resident and Online"
  },
  "ENGR495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "ENGR497": {
    "title": "Special Topics in Engineering",
    "credits": 1,
    "offered": "Resident"
  },
  "ENGR500": {
    "title": "Systems Engineering",
    "credits": 3,
    "offered": "Online"
  },
  "ENGR501": {
    "title": "Numerical Methods",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR503": {
    "title": "Partial Differential Equations",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR504": {
    "title": "Ordinary Differential Equations",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR505": {
    "title": "Finite Element Analysis",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR512": {
    "title": "Computing Languages (Python, MATLAB, C, C++, Fortran)",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR517": {
    "title": "Advanced Thermodynamics",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR520": {
    "title": "Law for Engineers",
    "credits": 3,
    "offered": "Online"
  },
  "ENGR521": {
    "title": "Advanced Heat Transfer",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR525": {
    "title": "Continuum Mechanics",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR527": {
    "title": "Advanced Mechanics of Materials",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR541": {
    "title": "Inelasticity",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR543": {
    "title": "Damage and Fracture",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR545": {
    "title": "Fatigue",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR590": {
    "title": "Strategic Planning",
    "credits": 3,
    "offered": "Online"
  },
  "ENGR595": {
    "title": "Directed Individual Study in Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR596": {
    "title": "Graduate Orientation/Seminar Series",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR597": {
    "title": "Special Topics in Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR606": {
    "title": "Computational Fluid Dynamics",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR608": {
    "title": "Multiphase Flows",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR615": {
    "title": "Bio-Inspired Design",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR616": {
    "title": "Design Optimization",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR631": {
    "title": "Composite Materials",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR635": {
    "title": "Materials Processing Methods",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR637": {
    "title": "Materials Characterization Methods (SEM, OM)",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR639": {
    "title": "Mechanical Metallurgy",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR651": {
    "title": "Integrated Computational Materials Engineering (ICME)",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR687": {
    "title": "Thesis Research in Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR688": {
    "title": "Thesis Research in Engineering",
    "credits": 6,
    "offered": "Resident"
  },
  "ENGR689": {
    "title": "Thesis Research in Engineering",
    "credits": 9,
    "offered": "Resident"
  },
  "ENGR690": {
    "title": "Thesis Defense in Engineering",
    "credits": 0,
    "offered": "Resident"
  },
  "ENGR695": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR701": {
    "title": "Numerical Methods",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR703": {
    "title": "Partial Differential Equations",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR704": {
    "title": "Ordinary Differential Equations",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR705": {
    "title": "Finite Element Analysis",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR712": {
    "title": "Computing Languages (Python, MATLAB, C, C++, Fortran)",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR717": {
    "title": "Advanced Thermodynamics",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR721": {
    "title": "Advanced Heat Transfer",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR725": {
    "title": "Continuum Mechanics",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR727": {
    "title": "Advanced Mechanics of Materials",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR741": {
    "title": "Inelasticity",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR743": {
    "title": "Damage and Fracture",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR745": {
    "title": "Fatigue",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR795": {
    "title": "Directed Individual Study in Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR796": {
    "title": "Graduate Orientation/Seminar Series",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR797": {
    "title": "Special Topics in Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR798": {
    "title": "Teaching Practicum in Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR806": {
    "title": "Computational Fluid Dynamics",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR808": {
    "title": "Multiphase Flows",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR815": {
    "title": "Bio-Inspired Design",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR816": {
    "title": "Design Optimization",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR831": {
    "title": "Composite Materials",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR835": {
    "title": "Materials Processing Methods",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR837": {
    "title": "Materials Characterization Methods (SEM, OM)",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR839": {
    "title": "Mechanical Metallurgy",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR851": {
    "title": "Integrated Computational Materials Engineering (ICME)",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR987": {
    "title": "Dissertation Research in Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGR988": {
    "title": "Dissertation Research in Engineering",
    "credits": 6,
    "offered": "Resident"
  },
  "ENGR989": {
    "title": "Dissertation Research in Engineering",
    "credits": 9,
    "offered": "Resident"
  },
  "ENGR990": {
    "title": "Dissertation Defense in Engineering",
    "credits": 0,
    "offered": "Resident"
  },
  "ENGR995": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "ENGV205": {
    "title": "Computer Aided Design",
    "credits": 1,
    "prereqs": "ENGR 110",
    "offered": "Resident and Online"
  },
  "ENGV225": {
    "title": "Surveying",
    "credits": 2,
    "prereqs": "ENGV 205",
    "offered": "Resident and Online"
  },
  "ENGV250": {
    "title": "Strength of Materials",
    "credits": 3,
    "prereqs": "ENGR 235",
    "offered": "Online"
  },
  "ENGV320": {
    "title": "Civil Engineering Lab",
    "credits": 2,
    "prereqs": "ENGV 225 and ENGV 390 (may be taken concurrently) and ENGV 395 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "ENGV325": {
    "title": "Structural Analysis",
    "credits": 3,
    "prereqs": "ENGR 330",
    "offered": "Resident and Online"
  },
  "ENGV345": {
    "title": "Soil Mechanics",
    "credits": 3,
    "prereqs": "ENGR 330",
    "offered": "Resident and Online"
  },
  "ENGV355": {
    "title": "Civil Engineering Lab II",
    "credits": 2,
    "prereqs": "ENGV 320 and ENGV 365 (may be taken concurrently) and ENGV 425 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "ENGV365": {
    "title": "Hydraulic Engineering",
    "credits": 3,
    "prereqs": "ENGR 315",
    "offered": "Resident and Online"
  },
  "ENGV380": {
    "title": "Project and Construction Management",
    "credits": 3,
    "prereqs": "ENGI 220",
    "offered": "Resident and Online"
  },
  "ENGV390": {
    "title": "Steel Structure Design",
    "credits": 3,
    "prereqs": "ENGV 325 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "ENGV395": {
    "title": "Geotechnical Engineering",
    "credits": 3,
    "prereqs": "ENGV 345",
    "offered": "Resident and Online"
  },
  "ENGV410": {
    "title": "Transportation Engineering",
    "credits": 3,
    "prereqs": "ENGV 225",
    "offered": "Resident and Online"
  },
  "ENGV415": {
    "title": "Special Topics in Construction Engineering",
    "credits": 3,
    "prereqs": "ENGV 380",
    "offered": "Resident and Online"
  },
  "ENGV420": {
    "title": "Professional Practice",
    "credits": 2,
    "prereqs": "ENGI 220",
    "offered": "Resident and Online"
  },
  "ENGV425": {
    "title": "Concrete Structure Design",
    "credits": 3,
    "prereqs": "ENGV 325",
    "offered": "Resident and Online"
  },
  "ENGV440": {
    "title": "Special Topics in Structural Engineering",
    "credits": 3,
    "prereqs": "ENGV 390 and ENGV 425",
    "offered": "Resident and Online"
  },
  "ENGV455": {
    "title": "Special Topics Geotechnical Engineering",
    "credits": 3,
    "prereqs": "ENGV 395",
    "offered": "Resident and Online"
  },
  "ENGV460": {
    "title": "Special Topics in Transportation Engineering",
    "credits": 3,
    "prereqs": "ENGV 410",
    "offered": "Resident and Online"
  },
  "ENGV492": {
    "title": "FE Exam",
    "credits": 0,
    "prereqs": "ENGR 481",
    "offered": "Resident and Online"
  },
  "ENVR215": {
    "title": "Principles of Environmental Science",
    "credits": 3,
    "prereqs": "ACT Composite with a score of 20 or (pre2016 post1995)SAT Math with a score of 530 or SAT Section Math with a score of 530 or MATH 115",
    "offered": "Resident"
  },
  "ENVR220": {
    "title": "Physical Geology",
    "credits": 3,
    "offered": "Resident"
  },
  "ENVR221": {
    "title": "Physical Geology Laboratory",
    "credits": 1,
    "offered": "Resident"
  },
  "ENVR320": {
    "title": "Environment and Sustainability",
    "credits": 3,
    "prereqs": "BIOL 101 or PHSC 210 or BIOL 225",
    "offered": "Online"
  },
  "ENVR330": {
    "title": "Energy Resources and Efficiencies",
    "credits": 3,
    "prereqs": "BIOL 225 or ENVR 320 or BIOL 101 or PHSC 210",
    "offered": "Online"
  },
  "ENVR350": {
    "title": "Environmental Science and Policy",
    "credits": 3,
    "prereqs": "BIOL 101 or BIOL 225 or ENVR 320 or PHSC 210",
    "offered": "Online"
  },
  "ENVR370": {
    "title": "Geographic Information Systems I",
    "credits": 3,
    "offered": "Online"
  },
  "ESLP101": {
    "title": "Introduction to Leadership: Connecting with Others",
    "credits": 1,
    "offered": "Resident"
  },
  "ESLP102": {
    "title": "Self-Leadership Development",
    "credits": 1,
    "offered": "Resident"
  },
  "ESLP201": {
    "title": "The Art and Science of Leading Others",
    "credits": 1,
    "offered": "Resident"
  },
  "ESLP202": {
    "title": "The Art and Science of Changing Culture",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "ESOL100": {
    "title": "English as a Second Language: Grammar and Composition",
    "credits": 3,
    "offered": "Resident"
  },
  "ETHC101": {
    "title": "Introduction to Ethics",
    "credits": 3,
    "offered": "Online"
  },
  "ETHC205": {
    "title": "Ethical Reflections on Human Life",
    "credits": 3,
    "offered": "Online"
  },
  "ETHC210": {
    "title": "Science and Society",
    "credits": 3,
    "offered": "Online"
  },
  "ETHC280": {
    "title": "Dilemmas in Socialism and Marxism",
    "credits": 3,
    "offered": "Online"
  },
  "ETHC620": {
    "title": "Just War Theory",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM400": {
    "title": "Ethnic Music Theory",
    "credits": 3
  },
  "ETHM411": {
    "title": "Music and Culture",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM440": {
    "title": "Seminar in Ethnic Music",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM500": {
    "title": "Ethnic Music Theory",
    "credits": 3,
    "prereqs": "ETHM 511 or Music and Culture (ETHM 411) with a score of 3 or Music World Culture (MUSC314) with a score of 3",
    "offered": "Online"
  },
  "ETHM511": {
    "title": "Introduction to Ethnomusicology",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM512": {
    "title": "Field of Ethnomusicology",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM513": {
    "title": "Anthropology of Music",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM514": {
    "title": "Organology",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM515": {
    "title": "Music, Orality and Storytelling",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM521": {
    "title": "Skills and Techniques of Ethnomusicology",
    "credits": 3,
    "prereqs": "ETHM 511 or Music and Culture (ETHM 411) with a score of 3 or Music World Culture (MUSC314) with a score of 3",
    "offered": "Online"
  },
  "ETHM530": {
    "title": "Worship and Culture",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM531": {
    "title": "Resources and Materials in Ethnomusicology",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM540": {
    "title": "Seminar in Ethnic Music",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM541": {
    "title": "Seminar in Ethnic Music: India",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM542": {
    "title": "Seminar in Ethnic Music: Native America",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM543": {
    "title": "Seminar in Ethnic Music: Africa",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM544": {
    "title": "Seminar in Ethnic Music: Latin America",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ETHM545": {
    "title": "Seminar in Ethnic Music: Middle East",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM546": {
    "title": "Seminar in Ethnic Music: China",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM547": {
    "title": "Seminar in Ethnic Music: Southeast Asia",
    "credits": 3
  },
  "ETHM548": {
    "title": "Seminar in Ethnic Music: Indonesia",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM549": {
    "title": "Seminar in Ethnic Music: Eastern Europe",
    "credits": 3,
    "offered": "Online"
  },
  "ETHM560": {
    "title": "Ethnic Music Performance",
    "credits": 0,
    "offered": "Online"
  },
  "ETHM600": {
    "title": "Transcription and Analysis of Non-Western Music",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ETHM611": {
    "title": "Arts in Global Engagement",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ETHM613": {
    "title": "Applied Ethnomusicology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "ETHM650": {
    "title": "Research Methods in Ethnomusicology",
    "credits": 3,
    "prereqs": "ETHM 531",
    "offered": "Online"
  },
  "ETHM688": {
    "title": "Field Experience in Ethnomusicology",
    "credits": 3,
    "prereqs": "ETHM 650",
    "offered": "Online"
  },
  "ETHM689": {
    "title": "Master's Thesis/Project Proposal and Research",
    "credits": 3,
    "prereqs": "ETHM 650 and ETHM 692 (may be taken concurrently)",
    "offered": "Online"
  },
  "ETHM690": {
    "title": "Master's Thesis/Project Defense",
    "credits": 3,
    "prereqs": "ETHM 689",
    "offered": "Online"
  },
  "ETHM692": {
    "title": "Graduate Ethnomusicology Comprehensive Exam",
    "credits": 0,
    "prereqs": "ETHM 689 (may be taken concurrently)",
    "offered": "Online"
  },
  "EVAN101": {
    "title": "Evangelism and the Christian Life",
    "credits": 2,
    "offered": "Resident and Online"
  },
  "EVAN201": {
    "title": "Preparation for Personal Evangelism",
    "credits": 3,
    "prereqs": "EVAN 101",
    "offered": "Online"
  },
  "EVAN220": {
    "title": "Effective Message Preparation in Evangelism",
    "credits": 3,
    "prereqs": "EVAN 101 and EVAN 201 (may be taken concurrently)",
    "offered": "Online"
  },
  "EVAN301": {
    "title": "Evangelism and the Work of the Holy Spirit",
    "credits": 3,
    "prereqs": "EVAN 101 and EVAN 201 and EVAN 220",
    "offered": "Online"
  },
  "EVAN401": {
    "title": "Discipleship in Evangelism",
    "credits": 3,
    "prereqs": "EVAN 101 and EVAN 201 and EVAN 220 and EVAN 301",
    "offered": "Online"
  },
  "EVAN495": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "EVAN500": {
    "title": "Spiritual Factors of Growing Churches",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EVAN505": {
    "title": "Introduction to Church Planting",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EVAN510": {
    "title": "Evangelism and the Growing Church",
    "credits": 3,
    "offered": "Online"
  },
  "EVAN525": {
    "title": "Contemporary Evangelism",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EVAN610": {
    "title": "Church Planting Methods and Culture",
    "credits": 3,
    "offered": "Online"
  },
  "EVAN670": {
    "title": "Strategic Prayer and Spiritual Warfare",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EVAN695": {
    "title": "Directed Research in Evangelism",
    "credits": 1
  },
  "EVAN697": {
    "title": "Seminar in Evangelism",
    "credits": 3
  },
  "EVAN698": {
    "title": "Evangelism Practicum",
    "credits": 1
  },
  "EVCP500": {
    "title": "Theological Foundations for Church Planting",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EVCP510": {
    "title": "The Calling and Character of the Church Planter",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EVCP610": {
    "title": "Church Planting Contexts and Methodologies",
    "credits": 3,
    "prereqs": "EVCP 500 and EVCP 510",
    "offered": "Resident and Online"
  },
  "EVCP699": {
    "title": "Church Planting Internship",
    "credits": 3,
    "prereqs": "EVCP 500 (may be taken concurrently) or EVCP 510 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EVCP810": {
    "title": "Biblical Foundations for Evangelistic Church Planting",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "EVCP820": {
    "title": "Missional Considerations for Evangelistic Church Planting",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "EVCP830": {
    "title": "Methods and Models for Evangelistic Church Planting",
    "credits": 3,
    "prereqs": "DMIN 810 and EVCP 810",
    "offered": "Online"
  },
  "EVCP840": {
    "title": "Strategic Evangelism and the Local Church",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "EVCP895": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Online"
  },
  "EVCP897": {
    "title": "Seminar in Evangelism and Church Planting",
    "credits": 3,
    "offered": "Online"
  },
  "EXSC101": {
    "title": "Introduction to Exercise Science",
    "credits": 1,
    "offered": "Resident"
  },
  "EXSC299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "EXSC302": {
    "title": "Exercise and Sports Injuries",
    "credits": 2,
    "prereqs": "EXSC 310",
    "offered": "Resident"
  },
  "EXSC310": {
    "title": "Physiology of Exercise",
    "credits": 3,
    "prereqs": "(BIOL 213 and BIOL 214 and BIOL 215 and BIOL 216) or (BIOL 213 and BIOL 214 and BIOL 215 (may be taken concurrently) and BIOL 216 (may be taken concurrently))",
    "offered": "Resident"
  },
  "EXSC311": {
    "title": "Analysis of Human Movement",
    "credits": 3,
    "prereqs": "EXSC 310",
    "offered": "Resident"
  },
  "EXSC315": {
    "title": "Group Exercise Instruction",
    "credits": 2,
    "prereqs": "EXSC 310",
    "offered": "Resident"
  },
  "EXSC320": {
    "title": "Measurement and Evaluation in Health and Kinesiology",
    "credits": 3,
    "prereqs": "EXSC 310 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "EXSC321": {
    "title": "Practicum",
    "credits": 1,
    "prereqs": "EXSC 310 or KINE 310",
    "offered": "Resident"
  },
  "EXSC340": {
    "title": "Essentials of Strength Training and Conditioning",
    "credits": 3,
    "prereqs": "(KINE 225 or PHED 225) and EXSC 310",
    "offered": "Resident"
  },
  "EXSC345": {
    "title": "Applied Strength Training and Conditioning",
    "credits": 2,
    "prereqs": "(KINE 225 or PHED 225) and EXSC 310",
    "offered": "Resident"
  },
  "EXSC350": {
    "title": "Biomechanics",
    "credits": 3,
    "prereqs": "EXSC 310 and EXSC 351 (may be taken concurrently)",
    "offered": "Resident"
  },
  "EXSC351": {
    "title": "Biomechanics Lab",
    "credits": 1,
    "prereqs": "EXSC 310",
    "offered": "Resident"
  },
  "EXSC401": {
    "title": "Seminar in Strength and Conditioning",
    "credits": 1,
    "prereqs": "EXSC 340",
    "offered": "Resident"
  },
  "EXSC410": {
    "title": "Applied Exercise Physiology",
    "credits": 3,
    "prereqs": "EXSC 310 and EXSC 320 and EXSC 411 (may be taken concurrently)",
    "offered": "Resident"
  },
  "EXSC411": {
    "title": "Applied Exercise Physiology Lab",
    "credits": 1,
    "prereqs": "EXSC 310 and EXSC 320",
    "offered": "Resident"
  },
  "EXSC433": {
    "title": "Exercise Prescription for Special Populations",
    "credits": 3,
    "prereqs": "EXSC 310",
    "offered": "Resident"
  },
  "EXSC440": {
    "title": "Programming and Periodization for Strength and Conditioning",
    "credits": 3,
    "prereqs": "EXSC 340",
    "offered": "Resident"
  },
  "EXSC460": {
    "title": "Exercise Testing, Evaluation, and Prescription",
    "credits": 3,
    "prereqs": "(KINE 310 or EXSC 310) and (KINE 320 or EXSC 320)",
    "offered": "Resident"
  },
  "EXSC461": {
    "title": "Exercise Leadership",
    "credits": 3,
    "prereqs": "EXSC 310",
    "offered": "Resident"
  },
  "EXSC485": {
    "title": "Exercise Physiologist Workshop and Certification",
    "credits": 1,
    "prereqs": "EXSC 433 (may be taken concurrently) and EXSC 460 (may be taken concurrently) and EXSC 310",
    "offered": "Resident"
  },
  "EXSC486": {
    "title": "Strength and Conditioning Specialist Workshop and Certification",
    "credits": 1,
    "prereqs": "EXSC 310 and EXSC 340",
    "offered": "Resident"
  },
  "EXSC498": {
    "title": "Senior Capstone Project",
    "credits": 4,
    "prereqs": "HLTH 333",
    "offered": "Resident"
  },
  "EXSC499": {
    "title": "Internship in Exercise Science",
    "credits": 1,
    "prereqs": "HLTH 333",
    "offered": "Resident"
  },
  "EXSC505": {
    "title": "Foundations of Human Performance",
    "credits": 3,
    "offered": "Online"
  },
  "EXSC510": {
    "title": "Advanced Exercise Physiology",
    "credits": 3,
    "prereqs": "Physiology/Exercise Physiology with a score of 3 or EXSC 505",
    "offered": "Resident and Online"
  },
  "EXSC511": {
    "title": "Advanced Exercise Physiology Lab",
    "credits": 1,
    "prereqs": "Physiology/Exercise Physiology with a score of 3",
    "offered": "Resident and Online"
  },
  "EXSC520": {
    "title": "Statistical Analysis in Exercise Science",
    "credits": 3,
    "prereqs": "Statistics or Equivalent with a score of 3 or EXSC 505",
    "offered": "Resident and Online"
  },
  "EXSC525": {
    "title": "Research Methods in Exercise Science",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EXSC540": {
    "title": "Advanced Strength Development",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EXSC541": {
    "title": "Advanced Speed and Agility",
    "credits": 3,
    "prereqs": "EXSC 540 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EXSC542": {
    "title": "Advanced Conditioning &amp; Recovery",
    "credits": 3,
    "prereqs": "EXSC 540 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EXSC545": {
    "title": "Motor Learning and Performance",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EXSC550": {
    "title": "Advanced Biomechanical Analysis",
    "credits": 3,
    "prereqs": "Biomchncs, physics/equivalent with a score of 3 or EXSC 505",
    "offered": "Resident and Online"
  },
  "EXSC551": {
    "title": "Advanced Biomechanical Analysis Lab",
    "credits": 1,
    "prereqs": "EXSC 550 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EXSC610": {
    "title": "Graded Exercise Testing and Electrocardiotherapy",
    "credits": 3,
    "prereqs": "EXSC 510 and EXSC 511",
    "offered": "Resident and Online"
  },
  "EXSC633": {
    "title": "Exercise and Physical Activity for People with Disabilities",
    "credits": 3,
    "offered": "Online"
  },
  "EXSC635": {
    "title": "Exercise Prescription for Special Populations: Cardiac and Pulmonary Disorders",
    "credits": 3,
    "prereqs": "EXSC 510",
    "offered": "Resident and Online"
  },
  "EXSC637": {
    "title": "Exercise Prescription for Special Populations: Chronic Health Conditions",
    "credits": 3,
    "prereqs": "EXSC 510 and EXSC 635 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "EXSC640": {
    "title": "Public Health and Physical Activity",
    "credits": 3,
    "offered": "Online"
  },
  "EXSC650": {
    "title": "Promoting Physical Activity in the Community",
    "credits": 3,
    "prereqs": "EXSC 640 (may be taken concurrently)",
    "offered": "Online"
  },
  "EXSC660": {
    "title": "Fitness Assessment and Programming",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "EXSC665": {
    "title": "Physiology of Sport Performance and Conditioning",
    "credits": 3,
    "offered": "Online"
  },
  "EXSC670": {
    "title": "Physiological Interactions of Performance Enhancing Substances",
    "credits": 3,
    "offered": "Online"
  },
  "EXSC680": {
    "title": "Occupational and Environmental Physiology",
    "credits": 3,
    "prereqs": "EXSC 665",
    "offered": "Online"
  },
  "EXSC689": {
    "title": "Thesis Proposal and Design",
    "credits": 3,
    "prereqs": "EXSC 525",
    "offered": "Resident and Online"
  },
  "EXSC690": {
    "title": "Thesis Defense",
    "credits": 3,
    "prereqs": "EXSC 689",
    "offered": "Resident and Online"
  },
  "EXSC699": {
    "title": "Internship",
    "credits": 1,
    "prereqs": "EXSC 510 and EXSC 511 and EXSC 520 and EXSC 525 and EXSC 550 and EXSC 551 and HLTH 645",
    "offered": "Resident and Online"
  },
  "EXSC750": {
    "title": "Advanced Sport Biomechanics",
    "credits": 3,
    "prereqs": "EXSC 665",
    "offered": "Online"
  },
  "EXSC760": {
    "title": "Advanced Sport Performance Assessment and Programming",
    "credits": 3,
    "prereqs": "EXSC 665",
    "offered": "Online"
  },
  "FACS103": {
    "title": "Introduction to Family and Consumer Sciences",
    "credits": 1,
    "offered": "Resident"
  },
  "FACS113": {
    "title": "Introduction to 2D Design",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS130": {
    "title": "Principles of Food and Food Safety",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS140": {
    "title": "Space Planning and Codes",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS200": {
    "title": "Interior Design I",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS204": {
    "title": "Introduction to Family and Child Development",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS205": {
    "title": "Development of Contemporary Families",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS221": {
    "title": "Design and Construction I for Interiors",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS222": {
    "title": "Design and Construction I for Apparel",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS225": {
    "title": "Introduction to the Fashion Industry",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS230": {
    "title": "Food Science and Management",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS231": {
    "title": "Building Construction",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS240": {
    "title": "Concepts in Interior Design",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS241": {
    "title": "Architectural Drafting",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS243": {
    "title": "Digital Drafting I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "FACS244": {
    "title": "Applied Drafting for Interiors",
    "credits": 3,
    "prereqs": "FACS 243",
    "offered": "Online"
  },
  "FACS245": {
    "title": "Decorative Arts for the Interiors",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS250": {
    "title": "Interior Design II",
    "credits": 3,
    "prereqs": "FACS 200 and FACS 241 and FACS 243",
    "offered": "Resident"
  },
  "FACS260": {
    "title": "Early Childhood I",
    "credits": 3,
    "prereqs": "PSYC 210",
    "offered": "Resident"
  },
  "FACS261": {
    "title": "Early Childhood II",
    "credits": 3,
    "prereqs": "FACS 260",
    "offered": "Resident"
  },
  "FACS299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "FACS300": {
    "title": "Interior Design III",
    "credits": 6,
    "prereqs": "((RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80) and FACS Sophomore Review Score with a score of 44 and FACS Soph. Review Assignments with a score of 28 )",
    "offered": "Resident"
  },
  "FACS301": {
    "title": "Elements of Fabric",
    "credits": 4,
    "offered": "Online"
  },
  "FACS302": {
    "title": "Psychology of Fashion",
    "credits": 3,
    "offered": "Online"
  },
  "FACS303": {
    "title": "Fashion Industries and Markets",
    "credits": 3,
    "prereqs": "BUSI 310 and BUSI 330",
    "offered": "Online"
  },
  "FACS304": {
    "title": "Promotions and Aesthetics",
    "credits": 3,
    "prereqs": "FACS 243 and INFT 126 and INFT 127",
    "offered": "Online"
  },
  "FACS320": {
    "title": "Textiles: Fibers and Fabrics",
    "credits": 3,
    "prereqs": "CHEM 105",
    "offered": "Resident"
  },
  "FACS322": {
    "title": "Design and Construction II for Apparel",
    "credits": 3,
    "prereqs": "FACS 222",
    "offered": "Resident"
  },
  "FACS324": {
    "title": "Specialty Markets",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident"
  },
  "FACS325": {
    "title": "Psycho-Social Aspects of Clothing",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident"
  },
  "FACS329": {
    "title": "Fashion and Textile Design with Computers",
    "credits": 3,
    "prereqs": "FACS 222",
    "offered": "Resident"
  },
  "FACS330": {
    "title": "Human Nutrition",
    "credits": 3,
    "prereqs": "BIOL 224 or BIOL 225",
    "offered": "Resident"
  },
  "FACS340": {
    "title": "Housing: Consumer and Community",
    "credits": 3,
    "prereqs": "(FACS 240 and FACS 241) or (FACS 240 and FACS 243) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "FACS343": {
    "title": "Digital Drafting II",
    "credits": 3,
    "prereqs": "FACS 243",
    "offered": "Resident"
  },
  "FACS345": {
    "title": "Materials and Specifications",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS350": {
    "title": "Family Economic Decisions",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS351": {
    "title": "Event Management",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS353": {
    "title": "Retail Merchandising",
    "credits": 3,
    "prereqs": "MATH 114 or MATH 115 or MATH 117 or MATH 121 or MATH 122 or MATH 123 or MATH 125 or MATH 126 or MATH 128 or MATH 131 or MATH 132 or MATH 2XX or MATH 301 or MATH 302 or MATH 305 or MATH 307 or MATH 321 or MATH 331 or MATH 332 or MATH 334 or MATH 350 or MATH 352 or MATH 4XX or MATH 400 or MATH 401 or MATH 419 or MATH 420 or MATH 421 or MATH 422 or MATH 431 or MATH 450 or MATH 495",
    "offered": "Resident and Online"
  },
  "FACS355": {
    "title": "Wedding and Event Planning",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS361": {
    "title": "Therapy and Theory of Play in Early Childhood",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS365": {
    "title": "Administration of Family and Child Life Programs",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident"
  },
  "FACS370": {
    "title": "Parenting",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS381": {
    "title": "Career Planning",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS403": {
    "title": "Professional Development",
    "credits": 2,
    "prereqs": "FACS 103",
    "offered": "Resident"
  },
  "FACS404": {
    "title": "Professional Practices",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS405": {
    "title": "Special Projects in Family and Consumer Sciences",
    "credits": 3,
    "prereqs": "FACS 240",
    "offered": "Resident"
  },
  "FACS420": {
    "title": "Apparel Illustration and Design",
    "credits": 3,
    "prereqs": "ARTS 210 or ARTS 211",
    "offered": "Resident"
  },
  "FACS422": {
    "title": "Draping for Apparel Design",
    "credits": 3,
    "prereqs": "FACS 322 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "FACS423": {
    "title": "Fashion Promotion and Visual Merchandising",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS429": {
    "title": "History of Costume",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS435": {
    "title": "Event Catering",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS442": {
    "title": "Lighting",
    "credits": 3,
    "prereqs": "FACS Sophomore Review Score with a score of 44 and FACS Soph. Review Assignments with a score of 28",
    "offered": "Resident"
  },
  "FACS445": {
    "title": "History of Interiors",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS455": {
    "title": "Family and Individual Resource Management",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS460": {
    "title": "Interior Design IV",
    "credits": 6,
    "prereqs": "FACS 300",
    "offered": "Resident"
  },
  "FACS470": {
    "title": "Internal Dynamics of Families",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS475": {
    "title": "Families Under Stress",
    "credits": 3,
    "offered": "Resident"
  },
  "FACS476": {
    "title": "Senior Capstone Seminar",
    "credits": 1,
    "prereqs": "FACS 204",
    "offered": "Resident"
  },
  "FACS485": {
    "title": "Senior Seminar",
    "credits": 1,
    "prereqs": "FACS 300",
    "offered": "Resident"
  },
  "FACS486": {
    "title": "Senior Capstone",
    "credits": 3,
    "prereqs": "FACS 204",
    "offered": "Resident"
  },
  "FACS490": {
    "title": "Special Projects",
    "credits": 1,
    "offered": "Resident"
  },
  "FACS491": {
    "title": "Family/Consumer Capstone",
    "credits": 3,
    "offered": "Online"
  },
  "FACS495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "FACS497": {
    "title": "Special Topics in Family and Consumer Sciences",
    "credits": 1,
    "offered": "Resident"
  },
  "FACS499": {
    "title": "Family/Consumer Internship",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "FACS510": {
    "title": "Administration of the Contemporary Family",
    "credits": 3,
    "offered": "Online"
  },
  "FACS530": {
    "title": "Interior Design",
    "credits": 3,
    "offered": "Online"
  },
  "FACS550": {
    "title": "Textiles &amp; Apparel Applications",
    "credits": 3,
    "offered": "Online"
  },
  "FACS570": {
    "title": "Family Wellness",
    "credits": 3,
    "offered": "Online"
  },
  "FIRE310": {
    "title": "Fire Prevention and Protection",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Online"
  },
  "FIRE320": {
    "title": "Legal and Political Issues in Fire Administration",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Online"
  },
  "FIRE330": {
    "title": "Human Resources Management in Fire Service Organizations",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Online"
  },
  "FIRE340": {
    "title": "Administration of Fire and Emergency Services Organization",
    "credits": 3,
    "offered": "Online"
  },
  "FIRE450": {
    "title": "Leadership in Fire Service Organizations",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Online"
  },
  "FIRE492": {
    "title": "Fire Administration Seminar (Capstone)",
    "credits": 3,
    "prereqs": "FIRE 310 and FIRE 320 and FIRE 330 and FIRE 340 and GOVT 200",
    "offered": "Online"
  },
  "FIRE610": {
    "title": "Leadership for the Executive Fire Officer",
    "credits": 3,
    "prereqs": "PADM 501",
    "offered": "Online"
  },
  "FIRE620": {
    "title": "Human Resources and Budget Management for the Executive Fire Officer",
    "credits": 3,
    "prereqs": "PADM 501",
    "offered": "Online"
  },
  "FIRE630": {
    "title": "Community Risk Mitigation for the Executive Fire Officer",
    "credits": 3,
    "prereqs": "PADM 501",
    "offered": "Online"
  },
  "FIRE640": {
    "title": "Legal Considerations in Fire and Emergency Services for the Executive Fire Officer",
    "credits": 3,
    "prereqs": "PADM 501",
    "offered": "Online"
  },
  "FNLT101": {
    "title": "Financial Literacy",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "FREN101": {
    "title": "Elementary French I",
    "credits": 3,
    "offered": "Resident"
  },
  "FREN102": {
    "title": "Elementary French II",
    "credits": 3,
    "prereqs": "FREN 101",
    "offered": "Resident"
  },
  "FREN201": {
    "title": "Intermediate French I",
    "credits": 3,
    "prereqs": "FREN 102",
    "offered": "Resident"
  },
  "FREN202": {
    "title": "Intermediate French II",
    "credits": 3,
    "prereqs": "FREN 201",
    "offered": "Resident"
  },
  "FREN299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "FREN301": {
    "title": "Advanced Conversation",
    "credits": 3,
    "prereqs": "FREN 202",
    "offered": "Resident"
  },
  "FREN304": {
    "title": "Francophone Civilizations/ Cultures",
    "credits": 3,
    "prereqs": "FREN 202",
    "offered": "Resident"
  },
  "FREN310": {
    "title": "Translation",
    "credits": 3,
    "prereqs": "FREN 202",
    "offered": "Resident"
  },
  "FREN311": {
    "title": "Evolution of the French Short Story",
    "credits": 3,
    "prereqs": "FREN 202",
    "offered": "Resident"
  },
  "FREN312": {
    "title": "French Classics in Film",
    "credits": 3,
    "prereqs": "FREN 202",
    "offered": "Resident"
  },
  "FREN321": {
    "title": "Modern French Drama",
    "credits": 3,
    "prereqs": "FREN 202",
    "offered": "Resident"
  },
  "FREN495": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "FREN497": {
    "title": "Special Topics in French",
    "credits": 3,
    "prereqs": "FREN 202",
    "offered": "Resident"
  },
  "FREN499": {
    "title": "Internship",
    "credits": 3,
    "offered": "Resident"
  },
  "GBST103": {
    "title": "Survey of the Old Testament I",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "GBST104": {
    "title": "Survey of the Old Testament II",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "GBST105": {
    "title": "Survey of the Old Testament III",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "GBST163": {
    "title": "Survey of the New Testament I",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "GBST164": {
    "title": "Survey of the New Testament II",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "GBST165": {
    "title": "Survey of the New Testament III",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "GEOG200": {
    "title": "Introduction to Geography",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GEOG300": {
    "title": "Geographic Research Methods",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG305": {
    "title": "Physical Geography",
    "credits": 3,
    "prereqs": "PHSC 210",
    "offered": "Online"
  },
  "GEOG310": {
    "title": "Human Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG320": {
    "title": "Regional Studies in Geography",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GEOG370": {
    "title": "Geographic Information Systems I",
    "credits": 3,
    "note": "This course is cross-listed with ENVR 370.",
    "offered": "Online"
  },
  "GEOG371": {
    "title": "Geographic Information Systems II",
    "credits": 3,
    "prereqs": "GEOG 370 or ENVR 370",
    "offered": "Online"
  },
  "GEOG373": {
    "title": "GIS for Urban Planning",
    "credits": 3,
    "prereqs": "GEOG 370 and GEOG 371",
    "offered": "Online"
  },
  "GEOG374": {
    "title": "GIS for Hydrological Applications",
    "credits": 3,
    "prereqs": "GEOG 370 and GEOG 371",
    "offered": "Online"
  },
  "GEOG380": {
    "title": "Modern Military Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG405": {
    "title": "Demography",
    "credits": 3,
    "prereqs": "GEOG 200 or GEOG 300 or MATH 201 or MATH 202 or MATH 211 or BUSI 230",
    "offered": "Online"
  },
  "GEOG410": {
    "title": "Global Issues in Geography",
    "credits": 3,
    "prereqs": "GOVT 200 or GOVT 210 or GOVT 220 or GOVT 001 or GOVT 002 or BUSI 303 or GEOG 200 or GEOG 320",
    "note": "(Offered as needed)",
    "offered": "Resident and Online"
  },
  "GEOG491": {
    "title": "Geography Capstone",
    "credits": 3,
    "prereqs": "GEOG 300",
    "offered": "Online"
  },
  "GEOG495": {
    "title": "Directed Research in Geography",
    "credits": 3,
    "prereqs": "GEOG 371 and (GEOG 370 or ENVR 370)",
    "offered": "Resident and Online"
  },
  "GEOG497": {
    "title": "Special Topics in Geography",
    "credits": 3,
    "prereqs": "GEOG 371 and (GEOG 370 or ENVR 370)",
    "offered": "Resident and Online"
  },
  "GEOG499": {
    "title": "Internship in Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG501": {
    "title": "Research Methods",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG502": {
    "title": "Introduction to Geographic Information Systems (GIS)",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG505": {
    "title": "Quantitative Analysis",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG510": {
    "title": "Human Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG520": {
    "title": "Historical Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG541": {
    "title": "Geography and Urban Planning",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG597": {
    "title": "Special Topics",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG610": {
    "title": "Demography and Populations",
    "credits": 3,
    "prereqs": "GEOG 501 or GEOG 505",
    "offered": "Online"
  },
  "GEOG620": {
    "title": "Economic Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG630": {
    "title": "Transport Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG640": {
    "title": "Remote Sensing",
    "credits": 3,
    "prereqs": "GEOG 502",
    "offered": "Online"
  },
  "GEOG641": {
    "title": "GIS for Urban Planning",
    "credits": 3,
    "prereqs": "GEOG 502",
    "offered": "Online"
  },
  "GEOG642": {
    "title": "GIS for Disaster Management",
    "credits": 3,
    "prereqs": "GEOG 502",
    "offered": "Online"
  },
  "GEOG680": {
    "title": "Military Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG695": {
    "title": "Directed Research in Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG697": {
    "title": "Special Topics in Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GEOG699": {
    "title": "Internship in Geography",
    "credits": 3,
    "offered": "Online"
  },
  "GLST200": {
    "title": "Introduction to Global Studies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST220": {
    "title": "Intercultural Communication and Engagement",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST290": {
    "title": "Cultural Anthropology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST301": {
    "title": "Global Exposure",
    "credits": 1,
    "offered": "Resident"
  },
  "GLST380": {
    "title": "Global Studies Practicum",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "GLST385": {
    "title": "Career Preparation for Global Workers",
    "credits": 3,
    "prereqs": "(ICST 200 or GLST 200) and GLST 220 and (GLST 290 or ICST 300)",
    "offered": "Resident and Online"
  },
  "GLST387": {
    "title": "Living Abroad",
    "credits": 3,
    "prereqs": "(ICST 200 or GLST 200) and GLST 220 and (GLST 290 or ICST 300) and (GLST 441 or ICST 441 or GLST 385)",
    "offered": "Resident"
  },
  "GLST388": {
    "title": "Ethnographic Research",
    "credits": 3,
    "prereqs": "(ICST 200 or GLST 200) and GLST 220 and (GLST 290 or ICST 300) and (ICST 441 or GLST 441 or GLST 385) and (RSCH 201 or Inquiry Research with a score of 80 or Research (prior to 2017-2018) with a score of 80 or Research Assessment with a score of 80)",
    "offered": "Resident"
  },
  "GLST389": {
    "title": "Barefoot Language Learning",
    "credits": 3,
    "prereqs": "(ICST 200 or GLST 200) and GLST 220 and (GLST 290 or ICST 300) and (ICST 441 or GLST 441 or GLST 385)",
    "offered": "Resident"
  },
  "GLST390": {
    "title": "Engaging Oral Communicators",
    "credits": 3,
    "offered": "Resident"
  },
  "GLST421": {
    "title": "Roman Catholicism",
    "credits": 3,
    "offered": "Resident"
  },
  "GLST425": {
    "title": "Animism",
    "credits": 3,
    "offered": "Resident"
  },
  "GLST431": {
    "title": "Introduction to Islam",
    "credits": 3,
    "offered": "Resident"
  },
  "GLST461": {
    "title": "Becoming a Global Facilitator",
    "credits": 3,
    "offered": "Resident"
  },
  "GLST485": {
    "title": "Engaging Tribal Cultures",
    "credits": 3,
    "offered": "Resident"
  },
  "GLST490": {
    "title": "Trends and Issues in Global Studies",
    "credits": 3,
    "prereqs": "(GLST 200 or ICST 200) and GLST 220 and GLST 290 and GLST 385 and (GLST 499 or ICST 499)",
    "offered": "Resident and Online"
  },
  "GLST491": {
    "title": "Global Studies Capstone",
    "credits": 1,
    "prereqs": "GLST 499",
    "offered": "Resident"
  },
  "GLST495": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "GLST497": {
    "title": "Special Topics in Global Studies",
    "credits": 3,
    "offered": "Resident"
  },
  "GLST499": {
    "title": "Global Studies Internship",
    "credits": 3,
    "prereqs": "(GLST 200 or ICST 200) and GLST 220 and (GLST 290 or ICST 300) and (GLST 441 or GLST 385 or ICST 441)",
    "note": "Online: Students should apply through the Department of Global Studies at least two semesters prior to the internship.",
    "offered": "Resident and Online"
  },
  "GLST500": {
    "title": "Global Studies Survey",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST525": {
    "title": "Introduction to Islam",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST550": {
    "title": "Becoming a Global Facilitator",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST585": {
    "title": "Tribal Communities",
    "credits": 3,
    "offered": "Resident"
  },
  "GLST600": {
    "title": "Cultural Anthropology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST605": {
    "title": "History and Theory of Global Engagement",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST620": {
    "title": "History of Global Christianity",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST630": {
    "title": "Current Issues in Global Studies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST640": {
    "title": "Marketplace Strategies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST650": {
    "title": "Intercultural Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST655": {
    "title": "Orality - The Power of Story",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST665": {
    "title": "Living and Working Cross-Culturally",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST670": {
    "title": "Discipleship and Leadership Development",
    "credits": 3,
    "offered": "Online"
  },
  "GLST675": {
    "title": "Contextualization and Global Thought",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST685": {
    "title": "Small Groups and People Movements",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST695": {
    "title": "Directed Research in Global Studies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST697": {
    "title": "Seminar in Global Studies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "GLST698": {
    "title": "Global Studies Practicum",
    "credits": 3,
    "prereqs": "GLST 500 and GLST 650",
    "offered": "Resident and Online"
  },
  "GLST699": {
    "title": "Global Studies Internship",
    "credits": 3,
    "prereqs": "GLST 500 and GLST 650",
    "offered": "Resident and Online"
  },
  "GLST995": {
    "title": "Directed Research in Global Studies",
    "credits": 3
  },
  "GLST997": {
    "title": "Seminar in Global Studies",
    "credits": 3
  },
  "GOVT200": {
    "title": "Constitutional Government and Free Enterprise",
    "credits": 3,
    "note": "GOVT 200 is a prerequisite to all upper level government courses.",
    "offered": "Resident and Online"
  },
  "GOVT210": {
    "title": "Introduction to Political Science",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT215": {
    "title": "Logic and Legal Reasoning",
    "credits": 3,
    "prereqs": "GOVT 200 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "GOVT220": {
    "title": "American Government",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT230": {
    "title": "Public Policy Research and Writing",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT280": {
    "title": "Undergraduate Torts",
    "credits": 3,
    "prereqs": "GOVT 200 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "GOVT299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "GOVT301": {
    "title": "Ancient Political and Economic Ideas",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT302": {
    "title": "Modern Political and Economic Ideas",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT320": {
    "title": "American Executive Processes/Institutions",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT321": {
    "title": "American Judicial System",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT322": {
    "title": "American Legislative System",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT323": {
    "title": "Critical and Historical Development of Public Ethics",
    "credits": 3,
    "offered": "Online"
  },
  "GOVT324": {
    "title": "Applied Ethics in Public Policy",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT325": {
    "title": "Legal Ethics",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT327": {
    "title": "State and Local Government",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT328": {
    "title": "American Political Processes",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Online"
  },
  "GOVT329": {
    "title": "American Exceptionalism",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT330": {
    "title": "Introduction to Comparative Politics",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT332": {
    "title": "Politics of Europe",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT333": {
    "title": "Post-Communist Politics",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT334": {
    "title": "Politics of Latin America",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT335": {
    "title": "Politics of Asia",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT337": {
    "title": "Politics of the Middle East",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT338": {
    "title": "Politics of the Third World",
    "credits": 3
  },
  "GOVT340": {
    "title": "International Relations",
    "credits": 3,
    "prereqs": "GOVT 200",
    "note": "(Offered fall semester)",
    "offered": "Resident and Online"
  },
  "GOVT345": {
    "title": "Jurisprudence",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT346": {
    "title": "Legal Research and Writing",
    "credits": 3,
    "prereqs": "GOVT 200 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "GOVT348": {
    "title": "Constitutional Studies - The 2nd Amendment: The Right to Keep and Bear Arms",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT350": {
    "title": "Political Economy and Public Policy",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT370": {
    "title": "Candidate Development",
    "credits": 3
  },
  "GOVT371": {
    "title": "Campaign Management",
    "credits": 3
  },
  "GOVT372": {
    "title": "Legislative Project Management",
    "credits": 3
  },
  "GOVT373": {
    "title": "Political Communication",
    "credits": 3
  },
  "GOVT374": {
    "title": "Professional Development",
    "credits": 3
  },
  "GOVT375": {
    "title": "Political Fundraising",
    "credits": 3
  },
  "GOVT376": {
    "title": "Resilient Nations",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT380": {
    "title": "Introduction to Intelligence and National Security",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT381": {
    "title": "Intelligence Analysis",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT382": {
    "title": "History of Intelligence",
    "credits": 3,
    "prereqs": "GOVT 200",
    "note": "(Offered fall semester)",
    "offered": "Resident and Online"
  },
  "GOVT383": {
    "title": "History and Nature of Intelligence Tools",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT385": {
    "title": "NDU/NIS Symposia I",
    "credits": 3,
    "prereqs": "GOVT 200",
    "note": "(Offered fall and spring semesters, when available) Note: Extra costs above tuition and fees apply.",
    "offered": "Resident"
  },
  "GOVT386": {
    "title": "NDU/NIS Symposia II",
    "credits": 3,
    "prereqs": "GOVT 480 or GOVT 380 or GOVT 381 or GOVT 382 or GOVT 483 or GOVT 484",
    "note": "(Offered fall and spring semesters, when available) Note: Extra costs above tuition and fees apply.",
    "offered": "Resident"
  },
  "GOVT400": {
    "title": "Government Colloquium",
    "credits": 1,
    "prereqs": "GOVT 200 or GOVT 220 or GOVT 210",
    "offered": "Resident"
  },
  "GOVT401": {
    "title": "Adv Criminal Law, Procedure/Ev",
    "credits": 3
  },
  "GOVT402": {
    "title": "American Political Ideas: The Founders",
    "credits": 3,
    "prereqs": "GOVT 200 or GOVT 220 or GOVT 210",
    "offered": "Resident"
  },
  "GOVT403": {
    "title": "International Economics",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT404": {
    "title": "Undergraduate Contracts",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT405": {
    "title": "Political and Economic Development",
    "credits": 3,
    "prereqs": "GOVT 200",
    "note": "(Offered fall semester odd numbered years)",
    "offered": "Resident"
  },
  "GOVT406": {
    "title": "Undergraduate Property",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT407": {
    "title": "Undergraduate Civil Procedure",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT408": {
    "title": "Negotiation",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT409": {
    "title": "Advanced Logic and Legal Reasoning",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT421": {
    "title": "American Constitutional History",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT422": {
    "title": "American Constitutional Law",
    "credits": 3,
    "prereqs": "GOVT 200 and GOVT 421",
    "note": "(Offered spring semester)",
    "offered": "Resident and Online"
  },
  "GOVT424": {
    "title": "Judicial Process",
    "credits": 3
  },
  "GOVT425": {
    "title": "American Foreign Policy",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT430": {
    "title": "Comparative Economic and Political Ideas",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT433": {
    "title": "The Jewish Temple in History and Prophecy",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "GOVT440": {
    "title": "Political Geography",
    "credits": 3,
    "prereqs": "GOVT 200",
    "note": "(Offered spring semester)",
    "offered": "Resident and Online"
  },
  "GOVT445": {
    "title": "International Law",
    "credits": 3,
    "prereqs": "GOVT 200",
    "note": "(Offered spring semester)",
    "offered": "Resident"
  },
  "GOVT450": {
    "title": "Middle East Conflict in Biblical Perspective",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "GOVT451": {
    "title": "Social Policy",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT458": {
    "title": "Public Policy Development in the Political Environment",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT459": {
    "title": "Criminal Justice Law and Policy",
    "credits": 3,
    "prereqs": "GOVT 458",
    "offered": "Online"
  },
  "GOVT460": {
    "title": "Contemporary Issues in Political Science",
    "credits": 3,
    "prereqs": "GOVT 220 and GOVT 200",
    "offered": "Online"
  },
  "GOVT461": {
    "title": "National Security Law and Policy",
    "credits": 3,
    "prereqs": "GOVT 458",
    "offered": "Online"
  },
  "GOVT463": {
    "title": "Health Care Law and Policy",
    "credits": 3,
    "prereqs": "GOVT 458",
    "offered": "Online"
  },
  "GOVT465": {
    "title": "Education Law and Policy",
    "credits": 3,
    "prereqs": "GOVT 458",
    "offered": "Online"
  },
  "GOVT467": {
    "title": "Religious Liberty Law and Policy",
    "credits": 3,
    "prereqs": "GOVT 458",
    "offered": "Online"
  },
  "GOVT469": {
    "title": "Economics Law and Policy",
    "credits": 3,
    "offered": "Online"
  },
  "GOVT470": {
    "title": "Government Regulation of Business",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Online"
  },
  "GOVT474": {
    "title": "American Political Parties",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT476": {
    "title": "Persuasive Argumentation for Lawyers",
    "credits": 3,
    "prereqs": "GOVT 200 and GOVT 346",
    "offered": "Online"
  },
  "GOVT477": {
    "title": "Trial Advocacy",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT478": {
    "title": "Appellate Advocacy",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT479": {
    "title": "Juvenile Justice",
    "credits": 3
  },
  "GOVT480": {
    "title": "Terrorism",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT481": {
    "title": "Counter-Terrorism",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT482": {
    "title": "Counter-Intelligence",
    "credits": 3,
    "prereqs": "GOVT 380",
    "offered": "Resident"
  },
  "GOVT483": {
    "title": "Military Operations and Intelligence",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT484": {
    "title": "Strategic Intelligence",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT485": {
    "title": "NDU/NIS Symposia III",
    "credits": 3,
    "prereqs": "GOVT 480 or GOVT 380 or GOVT 381 or GOVT 382 or GOVT 483 or GOVT 484",
    "note": "(Offered fall and spring semesters, when available) Note: Extra costs above tuition and fees apply.",
    "offered": "Resident"
  },
  "GOVT486": {
    "title": "NDU/NIS Symposia IV",
    "credits": 3,
    "prereqs": "GOVT 480 or GOVT 380 or GOVT 381 or GOVT 382 or GOVT 483 or GOVT 484",
    "note": "(Offered fall and spring semesters, when available) Note: Extra costs above tuition and fees apply.",
    "offered": "Resident"
  },
  "GOVT487": {
    "title": "Ethics in Intelligence",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT488": {
    "title": "Psychological Operations",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT489": {
    "title": "Field Practicum",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT490": {
    "title": "Political Theory",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT491": {
    "title": "Advanced Intelligence Analysis",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT492": {
    "title": "Senior Seminar",
    "credits": 3,
    "prereqs": "GOVT 200 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "GOVT493": {
    "title": "Advanced Appellate Advocacy",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT495": {
    "title": "Directed Research",
    "credits": 1,
    "prereqs": "GOVT 200 or GOVT 220 or GOVT 210",
    "offered": "Online"
  },
  "GOVT496": {
    "title": "National Security Studies Capstone",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT497": {
    "title": "Special Topics in Government",
    "credits": 1,
    "prereqs": "GOVT 200",
    "offered": "Resident"
  },
  "GOVT499": {
    "title": "Field Research (Internship)",
    "credits": 1,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "GOVT595": {
    "title": "Directed Research",
    "credits": 3
  },
  "GOVT697": {
    "title": "Special Topics in Government",
    "credits": 1
  },
  "GREK201": {
    "title": "Greek Grammar I",
    "credits": 3,
    "offered": "Resident"
  },
  "GREK202": {
    "title": "Greek Grammar II",
    "credits": 3,
    "prereqs": "GREK 201",
    "offered": "Resident"
  },
  "GREK301": {
    "title": "Greek Grammar III",
    "credits": 3,
    "prereqs": "GREK 202",
    "offered": "Resident"
  },
  "GREK302": {
    "title": "Greek Syntax and Reading",
    "credits": 3,
    "prereqs": "GREK 201 and GREK 202",
    "offered": "Resident"
  },
  "GREK401": {
    "title": "Greek Exegesis",
    "credits": 3,
    "prereqs": "GREK 202 and GREK 302 (may be taken concurrently)",
    "offered": "Resident"
  },
  "GREK455": {
    "title": "Advanced Greek Reading",
    "credits": 3,
    "prereqs": "GREK 401",
    "offered": "Resident"
  },
  "GREK495": {
    "title": "Directed Research in Greek",
    "credits": 3,
    "offered": "Resident"
  },
  "GREK497": {
    "title": "Seminar",
    "credits": 1,
    "offered": "Resident"
  },
  "GRMN101": {
    "title": "Elementary German I",
    "credits": 3,
    "offered": "Resident"
  },
  "GRMN102": {
    "title": "Elementary German II",
    "credits": 3,
    "prereqs": "GRMN 101",
    "offered": "Resident"
  },
  "GRMN201": {
    "title": "Intermediate German I",
    "credits": 3,
    "prereqs": "GRMN 102",
    "offered": "Resident"
  },
  "GRMN202": {
    "title": "Intermediate German II",
    "credits": 3,
    "prereqs": "GRMN 201",
    "offered": "Resident"
  },
  "GRMN495": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "GRMN497": {
    "title": "Special Topics in German",
    "credits": 1,
    "prereqs": "GRMN 202",
    "offered": "Resident"
  },
  "GRST500": {
    "title": "Introduction to Graduate Writing",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "GRST501": {
    "title": "Graduate Success Strategies",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "GUNS205": {
    "title": "Fundamentals of Rifle Safety and Shooting",
    "credits": 2,
    "offered": "Resident"
  },
  "GUNS210": {
    "title": "Fundamentals of Shotgun Safety and Shooting",
    "credits": 2,
    "offered": "Resident"
  },
  "GUNS215": {
    "title": "Fundamentals of Pistol Safety and Shooting",
    "credits": 2,
    "offered": "Resident"
  },
  "GUNS235": {
    "title": "Long Range Rifle: Understanding and Marksmanship",
    "credits": 2,
    "prereqs": "GUNS 205",
    "offered": "Resident"
  },
  "HAHR615": {
    "title": "Women and Children in Crisis",
    "credits": 3,
    "prereqs": "CLCM 501 and HUMR 501 and THEO 615",
    "offered": "Online"
  },
  "HAHR620": {
    "title": "Protection Systems for Women, Children, and Vulnerable Populations",
    "credits": 3,
    "prereqs": "CLCM 501 and HUMR 501 and THEO 615",
    "offered": "Online"
  },
  "HBRW201": {
    "title": "Hebrew Grammar I",
    "credits": 3,
    "offered": "Resident"
  },
  "HBRW202": {
    "title": "Hebrew Grammar II",
    "credits": 3,
    "prereqs": "HBRW 201",
    "offered": "Resident"
  },
  "HBRW301": {
    "title": "Hebrew Syntax and Exegesis",
    "credits": 3,
    "prereqs": "HBRW 201 and HBRW 202",
    "offered": "Resident"
  },
  "HBRW495": {
    "title": "Directed Research in Hebrew",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU201": {
    "title": "History of Western Civilization I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIEU202": {
    "title": "History of Western Civilization II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIEU321": {
    "title": "Greek Civilization",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU322": {
    "title": "Roman Civilization",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIEU360": {
    "title": "The Medieval Experience",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU370": {
    "title": "Age of the Enlightenments",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU380": {
    "title": "Age of Nationalisms",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU390": {
    "title": "Modern Europe",
    "credits": 3,
    "offered": "Online"
  },
  "HIEU425": {
    "title": "The French Revolution and the Napoleonic Era",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIEU450": {
    "title": "Twentieth Century Germany",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU455": {
    "title": "World War II",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU460": {
    "title": "Modern Britain",
    "credits": 3,
    "note": "(Offered as needed)",
    "offered": "Resident"
  },
  "HIEU466": {
    "title": "Renaissance and Reformation Europe",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIEU485": {
    "title": "History of Russia",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "HIEU497": {
    "title": "Special Topics in European History",
    "credits": 1,
    "offered": "Resident"
  },
  "HIEU550": {
    "title": "20th Century Germany",
    "credits": 3
  },
  "HIEU555": {
    "title": "Modern European Military History",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU566": {
    "title": "Protestant Reformation",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIEU570": {
    "title": "18th Century Europe",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU580": {
    "title": "19th Century Europe",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU590": {
    "title": "Modern Europe",
    "credits": 3,
    "offered": "Online"
  },
  "HIEU595": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "HIEU597": {
    "title": "Special Topics in European History",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIEU797": {
    "title": "Seminar in European History",
    "credits": 3,
    "prereqs": "HIST 501 and HIST 602",
    "offered": "Online"
  },
  "HIEU913": {
    "title": "Comprehensive Examination and Readings in Early Modern Europe",
    "credits": 3,
    "prereqs": "HIUS 530 and HIST 602 and HIST 701 and HIST 711 and HIUS 713",
    "offered": "Online"
  },
  "HIEU914": {
    "title": "Comprehensive Examination and Readings in Modern Europe",
    "credits": 3,
    "prereqs": "HIUS 530 and HIST 602 and HIST 701 and HIST 711 and HIUS 713",
    "offered": "Online"
  },
  "HIST101": {
    "title": "American History Orientation",
    "credits": 3,
    "note": "HIST 101 is NOT approved as a General Education elective in the Core Competency Requirements nor as an elective within the major. HIST 101 can only be taken as a Free Elective."
  },
  "HIST299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "HIST300": {
    "title": "Historical Methodology",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident and Online"
  },
  "HIST305": {
    "title": "Introduction to Public History",
    "credits": 3,
    "offered": "Resident"
  },
  "HIST309": {
    "title": "Historic Fashion and Design",
    "credits": 3,
    "offered": "Online"
  },
  "HIST419": {
    "title": "Secondary Social Studies Teaching Methods",
    "credits": 3,
    "prereqs": "Undergraduate Initial Gate 2 with a score of 5 and (Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Resident and Online"
  },
  "HIST420": {
    "title": "Secondary Teaching Methods Practicum",
    "credits": 0,
    "prereqs": "HIST 419 (may be taken concurrently) and Undergraduate Initial Gate 2 with a score of 5 and (Background Check Clearance with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Resident"
  },
  "HIST490": {
    "title": "Senior Research Seminar",
    "credits": 3,
    "prereqs": "HIST 300",
    "offered": "Resident"
  },
  "HIST491": {
    "title": "Senior Capstone Seminar",
    "credits": 3,
    "prereqs": "HIST 300",
    "offered": "Resident and Online"
  },
  "HIST495": {
    "title": "Directed Research",
    "credits": 6,
    "offered": "Resident and Online"
  },
  "HIST497": {
    "title": "Special Topics in History",
    "credits": 3,
    "offered": "Resident"
  },
  "HIST499": {
    "title": "Internship",
    "credits": 1,
    "prereqs": "HIST 300",
    "offered": "Resident and Online"
  },
  "HIST501": {
    "title": "Historical Methods",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIST502": {
    "title": "Historiography",
    "credits": 3,
    "prereqs": "HIST 501",
    "offered": "Resident and Online"
  },
  "HIST503": {
    "title": "Public History and Archival Methods",
    "credits": 3,
    "offered": "Online"
  },
  "HIST505": {
    "title": "Theories of Public History",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIST509": {
    "title": "Historic Filmmaking",
    "credits": 6,
    "prereqs": "HIST 501 or HIST 503",
    "offered": "Online"
  },
  "HIST520": {
    "title": "Teaching History in College",
    "credits": 3,
    "offered": "Resident"
  },
  "HIST550": {
    "title": "Reading Seminar in American History",
    "credits": 3,
    "offered": "Resident"
  },
  "HIST551": {
    "title": "Reading Seminar in Modern European History",
    "credits": 3,
    "offered": "Resident"
  },
  "HIST601": {
    "title": "Advanced Historical Research",
    "credits": 3,
    "prereqs": "HIST 501 and (HIST 502 or HIST 602) and HIUS 530",
    "offered": "Resident and Online"
  },
  "HIST610": {
    "title": "Museum Studies",
    "credits": 3,
    "prereqs": "HIST 503 or HIST 505",
    "offered": "Online"
  },
  "HIST611": {
    "title": "Conservation and Preservation",
    "credits": 3,
    "prereqs": "HIST 503 or HIST 505",
    "offered": "Online"
  },
  "HIST620": {
    "title": "Historical Archaeology",
    "credits": 3,
    "prereqs": "HIST 501 or HIST 503",
    "offered": "Online"
  },
  "HIST680": {
    "title": "Field Studies in Archaeology",
    "credits": 3,
    "prereqs": "((HIST 501 or HIST 503) and (HIST 505 or HIST 611 or HIST 620 or HIST 605))",
    "offered": "Online"
  },
  "HIST689": {
    "title": "Thesis Proposal and Research",
    "credits": 3,
    "prereqs": "HIST 601",
    "offered": "Resident and Online"
  },
  "HIST690": {
    "title": "Thesis Defense",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIST695": {
    "title": "Directed Research in History",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIST699": {
    "title": "History Internship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIST701": {
    "title": "Historical Professions",
    "credits": 3,
    "offered": "Online"
  },
  "HIST705": {
    "title": "Local History Research",
    "credits": 3,
    "offered": "Online"
  },
  "HIST706": {
    "title": "Digital History",
    "credits": 3,
    "offered": "Online"
  },
  "HIST711": {
    "title": "Development of Western Freedoms",
    "credits": 3,
    "offered": "Online"
  },
  "HIST797": {
    "title": "Seminar in History",
    "credits": 3,
    "prereqs": "HIST 501 and HIST 602",
    "offered": "Online"
  },
  "HIST799": {
    "title": "Internship",
    "credits": 3,
    "note": "Non-transferrable into the program",
    "offered": "Online"
  },
  "HIST820": {
    "title": "Teaching History",
    "credits": 3,
    "offered": "Online"
  },
  "HIST901": {
    "title": "Doctoral Historical Research",
    "credits": 3,
    "prereqs": "HIUS 911 and HIUS 912 and HIEU 913 and HIEU 914",
    "offered": "Online"
  },
  "HIST987": {
    "title": "Dissertation Research I",
    "credits": 5,
    "prereqs": "HIST 901",
    "offered": "Online"
  },
  "HIST988": {
    "title": "Dissertation Research II",
    "credits": 5,
    "prereqs": "HIST 987",
    "offered": "Online"
  },
  "HIST989": {
    "title": "Dissertation Research III",
    "credits": 5,
    "prereqs": "HIST 988",
    "offered": "Online"
  },
  "HIST990": {
    "title": "Dissertation Defense",
    "credits": 0,
    "prereqs": "HIST 989",
    "offered": "Online"
  },
  "HIUS221": {
    "title": "Survey of American History I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS222": {
    "title": "Survey of American History II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS223": {
    "title": "Survey of American History I On Site",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS310": {
    "title": "American Colonial History",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS312": {
    "title": "Era of the American Revolution",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS313": {
    "title": "The American Founding",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS314": {
    "title": "Jeffersonian America, 1789-1815",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS316": {
    "title": "Jacksonian America",
    "credits": 3,
    "offered": "Online"
  },
  "HIUS330": {
    "title": "Christianity in America",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS340": {
    "title": "Industrial America, 1877-1917",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS341": {
    "title": "History of American Politics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS351": {
    "title": "U.S. History, 1917-1945",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS360": {
    "title": "History of American Entrepreneurship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS380": {
    "title": "Modern American Military History",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS390": {
    "title": "History of Virginia",
    "credits": 3,
    "prereqs": "HIUS 221 or HIUS 222 or HIUS 223 or (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Resident and Online"
  },
  "HIUS395": {
    "title": "The Ante-Bellum South",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS396": {
    "title": "The New South",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS420": {
    "title": "Civil War and Reconstruction",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS430": {
    "title": "Minorities, Ethnics, and Social Movements in America",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS435": {
    "title": "Cultural History of Early America",
    "credits": 3,
    "offered": "Online"
  },
  "HIUS445": {
    "title": "Reagan's America",
    "credits": 3,
    "offered": "Online"
  },
  "HIUS452": {
    "title": "Recent America",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS470": {
    "title": "American Foreign Relations Since 1776",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS495": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS497": {
    "title": "Special Topics in United States History",
    "credits": 1,
    "offered": "Resident"
  },
  "HIUS510": {
    "title": "American Colonial History",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS511": {
    "title": "Colonial Virginia History",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS512": {
    "title": "American Revolution",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS513": {
    "title": "Jeffersonian America",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS519": {
    "title": "Antebellum South",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS520": {
    "title": "Civil War and Reconstruction",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS530": {
    "title": "American Christian Heritage",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS536": {
    "title": "American Social and Intellectual History Since 1865",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS542": {
    "title": "History of American Political Parties Since 1896",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS551": {
    "title": "Studies in U.S. History (1898-1945)",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS552": {
    "title": "Recent America (Since 1945)",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS570": {
    "title": "American Diplomatic History",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS580": {
    "title": "Modern American Military History",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS595": {
    "title": "Directed Readings",
    "credits": 3,
    "offered": "Resident"
  },
  "HIUS597": {
    "title": "Special Topics in United States History",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIUS695": {
    "title": "Directed Research",
    "credits": 3
  },
  "HIUS713": {
    "title": "American Entrepreneurship Since 1900",
    "credits": 3,
    "note": "Enrollment in the Ph.D. in History",
    "offered": "Online"
  },
  "HIUS797": {
    "title": "Seminar in United States History",
    "credits": 3,
    "prereqs": "HIST 501 and HIST 602",
    "offered": "Online"
  },
  "HIUS820": {
    "title": "Research in the Civil War",
    "credits": 3,
    "offered": "Online"
  },
  "HIUS911": {
    "title": "Comprehensive Examination and Readings in Early America",
    "credits": 3,
    "offered": "Online"
  },
  "HIUS912": {
    "title": "Comprehensive Examination and Readings in Modern America",
    "credits": 3,
    "offered": "Online"
  },
  "HIWD320": {
    "title": "History of Africa",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIWD341": {
    "title": "Modern Islamic Civilization",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIWD350": {
    "title": "East Asian Civilization",
    "credits": 3,
    "offered": "Resident"
  },
  "HIWD355": {
    "title": "World War II",
    "credits": 3,
    "offered": "Online"
  },
  "HIWD370": {
    "title": "Comparative Civilization",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIWD371": {
    "title": "Latin American Civilization: Colonial Period",
    "credits": 3,
    "offered": "Resident"
  },
  "HIWD372": {
    "title": "Latin American Civilization: National Period",
    "credits": 3,
    "offered": "Resident"
  },
  "HIWD375": {
    "title": "East Asian Warfare",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIWD376": {
    "title": "Middle Eastern Warfare",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIWD460": {
    "title": "Atlantic World",
    "credits": 3,
    "offered": "Online"
  },
  "HIWD495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "HIWD497": {
    "title": "Special Topics in World History",
    "credits": 1,
    "offered": "Resident"
  },
  "HIWD550": {
    "title": "History of Slavery and Servitude in the Western World",
    "credits": 3,
    "offered": "Online"
  },
  "HIWD555": {
    "title": "World War II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIWD560": {
    "title": "History of the Atlantic World",
    "credits": 3,
    "offered": "Online"
  },
  "HIWD595": {
    "title": "Directed Readings in World History",
    "credits": 3,
    "offered": "Resident"
  },
  "HIWD597": {
    "title": "Special Topics in World History",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HIWD650": {
    "title": "Modern Naval Warfare",
    "credits": 3,
    "offered": "Online"
  },
  "HIWD660": {
    "title": "Asymmetrical and Irregular Warfare",
    "credits": 3,
    "offered": "Online"
  },
  "HIWD797": {
    "title": "Seminar in World History",
    "credits": 3,
    "prereqs": "HIST 501 and HIST 602",
    "offered": "Online"
  },
  "HLSC500": {
    "title": "Foundations of Homeland Security",
    "credits": 3,
    "offered": "Online"
  },
  "HLSC510": {
    "title": "Homeland Security Organization &amp; Administration",
    "credits": 3,
    "offered": "Online"
  },
  "HLSC520": {
    "title": "Legal Issues in Homeland Security",
    "credits": 3,
    "offered": "Online"
  },
  "HLSC530": {
    "title": "Homeland Security Capstone",
    "credits": 3,
    "offered": "Online"
  },
  "HLSC600": {
    "title": "Introduction to Disaster Management",
    "credits": 3,
    "offered": "Online"
  },
  "HLSC610": {
    "title": "Understanding Terrorism and Homeland Security",
    "credits": 3,
    "offered": "Online"
  },
  "HLSC620": {
    "title": "Hazard Mitigation",
    "credits": 3,
    "offered": "Online"
  },
  "HLSC688": {
    "title": "Thesis Proposal",
    "credits": 3,
    "offered": "Online"
  },
  "HLSC689": {
    "title": "Thesis Research",
    "credits": 3,
    "prereqs": "HLSC 688",
    "offered": "Online"
  },
  "HLSC690": {
    "title": "Thesis Defense",
    "credits": 0,
    "prereqs": "HLSC 689",
    "offered": "Online"
  },
  "HLSC710": {
    "title": "Contemporary Issues in Cyber Security and WMD (CBRNE) Threat Analysis",
    "credits": 3,
    "prereqs": "CJUS 801",
    "offered": "Online"
  },
  "HLSC720": {
    "title": "Critical Infrastructure: Vulnerability Analysis and Protection",
    "credits": 3,
    "prereqs": "HLSC 710",
    "offered": "Online"
  },
  "HLSC730": {
    "title": "Counterterrorism and Counterintelligence Strategies",
    "credits": 3,
    "prereqs": "HLSC 720",
    "offered": "Online"
  },
  "HLTH105": {
    "title": "Introduction to the Health Professions",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH205": {
    "title": "Accident Prevention and Care (First Aid)",
    "credits": 3,
    "offered": "Resident"
  },
  "HLTH211": {
    "title": "Applied Anatomy and Physiology I for Associate Degree",
    "credits": 3,
    "offered": "Online"
  },
  "HLTH212": {
    "title": "Applied Anatomy and Physiology II for Associate Degree",
    "credits": 3,
    "offered": "Online"
  },
  "HLTH216": {
    "title": "Personal Health",
    "credits": 3,
    "offered": "Resident"
  },
  "HLTH221": {
    "title": "Applied Human Anatomy and Physiology I",
    "credits": 3,
    "note": "This course does not substitute for BIOL 213 & 214",
    "offered": "Resident and Online"
  },
  "HLTH222": {
    "title": "Applied Human Anatomy and Physiology II",
    "credits": 3,
    "note": "This course does not substitute for BIOL 215 & 216",
    "offered": "Resident and Online"
  },
  "HLTH252": {
    "title": "Drugs in Society",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "HLTH301": {
    "title": "Foundations of Public Health",
    "credits": 3,
    "offered": "Resident"
  },
  "HLTH311": {
    "title": "Health Promotion Methods for Global Settings",
    "credits": 3,
    "note": "Offered spring semester",
    "offered": "Resident"
  },
  "HLTH330": {
    "title": "Human Nutrition",
    "credits": 3,
    "prereqs": "BIOL 211 or BIOL 213 or BIOL 214 or BIOL 101 or BIOL 102 or BIOL 200 or BIOL 1XX or BIOL 2XX or CHEM 105 or CHEM 107 or CHEM 1XX or CHEM 2XX or HLTH 201 or HLTH 202 or BIOL 215 or HLTH 221 or BIOL 216 or HLTH 222 or BIOL 224 or BIOL 225",
    "offered": "Resident and Online"
  },
  "HLTH332": {
    "title": "Principles of Food Preparation",
    "credits": 3,
    "prereqs": "HLTH 330",
    "offered": "Resident"
  },
  "HLTH332L": {
    "title": "Principles of Food Preparation Lab",
    "credits": 1,
    "prereqs": "HLTH 330 and HLTH 332 (may be taken concurrently)",
    "offered": "Resident"
  },
  "HLTH333": {
    "title": "Exercise and Sports Nutrition",
    "credits": 3,
    "prereqs": "EXSC 310",
    "offered": "Resident"
  },
  "HLTH340": {
    "title": "Women's Health Issues",
    "credits": 3,
    "note": "Offered fall semester",
    "offered": "Resident"
  },
  "HLTH341": {
    "title": "Men’s Health Issues",
    "credits": 3,
    "offered": "Resident"
  },
  "HLTH349": {
    "title": "Public and Community Health for Business",
    "credits": 3,
    "note": "This course does not substitute for HLTH 350",
    "offered": "Online"
  },
  "HLTH350": {
    "title": "Introduction to Public and Community Health",
    "credits": 3,
    "prereqs": "RSCH 201",
    "offered": "Resident"
  },
  "HLTH370": {
    "title": "Introduction to Environmental Hazards and Response",
    "credits": 3,
    "prereqs": "HLTH 301 or HLTH 350 (may be taken concurrently)",
    "offered": "Resident"
  },
  "HLTH380": {
    "title": "Health Promotion for Aging Populations",
    "credits": 3,
    "note": "Offered fall semester",
    "offered": "Resident and Online"
  },
  "HLTH400": {
    "title": "Contemporary Health Issues",
    "credits": 3,
    "note": "Offered fall semester",
    "offered": "Resident"
  },
  "HLTH402": {
    "title": "The School Health Program",
    "credits": 3,
    "note": "Offered spring semester",
    "offered": "Resident"
  },
  "HLTH419": {
    "title": "Wellness and Behavior Change Theories for Business",
    "credits": 3,
    "offered": "Online"
  },
  "HLTH420": {
    "title": "Principles of Behavior Change and Health Counseling",
    "credits": 3,
    "offered": "Resident"
  },
  "HLTH440": {
    "title": "Methods and Resources in Teaching Applied Sciences in Schools",
    "credits": 2,
    "prereqs": "HLTH 402 and Background Check Clearance with a score of 5 and Undergraduate Initial Gate 2 with a score of 5",
    "note": "(Offered fall semester)",
    "offered": "Resident"
  },
  "HLTH441": {
    "title": "Methods and Resources in Teaching Applied Sciences in School Practicum",
    "credits": 1,
    "prereqs": "HLTH 402 and Background Check Clearance with a score of 5 and Undergraduate Initial Gate 2 with a score of 5",
    "note": "(Offered fall semester).",
    "offered": "Resident"
  },
  "HLTH444": {
    "title": "Principles of Epidemiology and Biostatistics",
    "credits": 3,
    "prereqs": "MATH 201",
    "offered": "Resident"
  },
  "HLTH452": {
    "title": "Methods and Materials in Community Health Education",
    "credits": 3,
    "offered": "Resident"
  },
  "HLTH453": {
    "title": "Program Planning and Evaluation in Health Education",
    "credits": 3,
    "prereqs": "HLTH 350",
    "offered": "Resident"
  },
  "HLTH485": {
    "title": "Principles of Epidemiology and Biostatistics for Business",
    "credits": 3,
    "prereqs": "MATH 201 or BUSI 230",
    "offered": "Online"
  },
  "HLTH488": {
    "title": "Chronic and Infectious Diseases",
    "credits": 3,
    "prereqs": "BIOL 203 or BIOL 303",
    "offered": "Resident"
  },
  "HLTH491": {
    "title": "Grantsmanship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "HLTH497": {
    "title": "Special Topics in Health",
    "credits": 1,
    "offered": "Resident"
  },
  "HLTH498": {
    "title": "Public Health Senior Seminar",
    "credits": 3,
    "prereqs": "HLTH 301 and HLTH 350 and HLTH 444",
    "offered": "Resident"
  },
  "HLTH499": {
    "title": "Professional Internship in Health Promotion",
    "credits": 1,
    "prereqs": "HLTH 452 and HLTH 453",
    "offered": "Resident"
  },
  "HLTH500": {
    "title": "Introduction to Public Health",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH501": {
    "title": "Biostatistics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH503": {
    "title": "Principles of Epidemiology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH505": {
    "title": "Principles of Environmental Health",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH507": {
    "title": "Public Health Administration",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH509": {
    "title": "Social and Behavioral Theory Applications in Public Health",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH511": {
    "title": "Research Methods in Public Health",
    "credits": 3,
    "prereqs": "HLTH 501",
    "offered": "Resident and Online"
  },
  "HLTH550": {
    "title": "Addictive Behaviors and Interventions",
    "credits": 3
  },
  "HLTH551": {
    "title": "Issues in Public and Community Health",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH552": {
    "title": "Chronic Disease Epidemiology",
    "credits": 3,
    "offered": "Resident"
  },
  "HLTH553": {
    "title": "Grant Acquisition and Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH554": {
    "title": "Medical Terminology en Espanol",
    "credits": 3,
    "offered": "Resident"
  },
  "HLTH556": {
    "title": "Politics and Health Policy",
    "credits": 3,
    "offered": "Online"
  },
  "HLTH597": {
    "title": "Graduate Health Seminar",
    "credits": 3,
    "offered": "Resident"
  },
  "HLTH600": {
    "title": "MPH Competency Exam",
    "credits": 0,
    "prereqs": "HLTH 501 and HLTH 503 and HLTH 505 and HLTH 507 and HLTH 509 and HLTH 511 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "HLTH620": {
    "title": "Introduction to Global Health",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH622": {
    "title": "Primary Healthcare in Developing Countries",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH623": {
    "title": "Cultural Aspects of Health Behavior",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH624": {
    "title": "Sanitation in Developing Countries",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH625": {
    "title": "Prevention and Control of Infectious Diseases",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH626": {
    "title": "Vaccines and Immunology",
    "credits": 3,
    "prereqs": "HLTH 625",
    "offered": "Online"
  },
  "HLTH630": {
    "title": "Principles of Community Health",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH632": {
    "title": "Health Program Planning",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH633": {
    "title": "Health Program Evaluation",
    "credits": 3,
    "prereqs": "HLTH 632",
    "offered": "Resident and Online"
  },
  "HLTH634": {
    "title": "Health Communication and Advocacy",
    "credits": 3,
    "prereqs": "HLTH 509",
    "offered": "Resident and Online"
  },
  "HLTH635": {
    "title": "Health Agency Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH636": {
    "title": "Contemporary School Health Issues",
    "credits": 3,
    "prereqs": "HLTH 634",
    "offered": "Online"
  },
  "HLTH637": {
    "title": "Perspectives on Healthy Aging",
    "credits": 3,
    "offered": "Online"
  },
  "HLTH640": {
    "title": "Principles of Nutrition",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH642": {
    "title": "Food-borne Illness Prevention",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HLTH643": {
    "title": "Nutrition and Chronic Disease",
    "credits": 3,
    "prereqs": "HLTH 640",
    "offered": "Resident and Online"
  },
  "HLTH644": {
    "title": "Diabetes, Obesity and Eating Disorders",
    "credits": 3,
    "prereqs": "HLTH 640",
    "offered": "Resident and Online"
  },
  "HLTH645": {
    "title": "Performance Nutrition for the Physically Active",
    "credits": 3,
    "prereqs": "HLTH 640 or EXSC 510",
    "offered": "Resident and Online"
  },
  "HLTH650": {
    "title": "Field Epidemiology",
    "credits": 3,
    "prereqs": "HLTH 501 and HLTH 503 and HLTH 511 (may be taken concurrently)",
    "offered": "Resident"
  },
  "HLTH651": {
    "title": "Epidemiologic Research Methods",
    "credits": 3,
    "prereqs": "HLTH 501 and HLTH 503 and HLTH 511",
    "offered": "Resident"
  },
  "HLTH652": {
    "title": "Data Visualization and Spatial Analysis",
    "credits": 3,
    "prereqs": "HLTH 511",
    "note": "A graduate level research methods course equivalent may substitute as a prerequisite requirement for HLTH 511",
    "offered": "Resident and Online"
  },
  "HLTH660": {
    "title": "Water, Soil, and Health",
    "credits": 3,
    "offered": "Online"
  },
  "HLTH661": {
    "title": "Toxicology",
    "credits": 3,
    "prereqs": "HLTH 501 and HLTH 505",
    "offered": "Online"
  },
  "HLTH662": {
    "title": "Environmental Health Agencies and Policy",
    "credits": 3,
    "offered": "Online"
  },
  "HLTH663": {
    "title": "Environmental Risk Assessment",
    "credits": 3,
    "offered": "Online"
  },
  "HLTH695": {
    "title": "Directed Research",
    "credits": 1
  },
  "HLTH698": {
    "title": "Practicum",
    "credits": 3,
    "prereqs": "((HLTH 620 and HLTH 622 and HLTH 623 and HLTH 624 and HLTH 625) or (HLTH 630 and HLTH 632 and HLTH 633 and HLTH 634 and HLTH 635) or (HLTH 640 and HLTH 642 and HLTH 643 and HLTH 644 and HLTH 645) or (HLTH 552 and HLTH 625 and HLTH 642 and HLTH 650 and HLTH 651) or (HLTH 637 and HLTH 660 and HLTH 661 and HLTH 662 and HLTH 663) and HLTH 501 and HLTH 503 and HLTH 505 and HLTH 507 and HLTH 509 and HLTH 511 and PHGT 514 )",
    "offered": "Resident and Online"
  },
  "HMGT200": {
    "title": "Introduction to Hospitality Management",
    "credits": 3,
    "offered": "Resident"
  },
  "HMGT300": {
    "title": "Principles of Food Service Operations",
    "credits": 3,
    "prereqs": "HMGT 200",
    "offered": "Resident"
  },
  "HMGT302": {
    "title": "Hospitality Facility Operations",
    "credits": 3,
    "prereqs": "HMGT 200",
    "offered": "Resident"
  },
  "HMGT305": {
    "title": "Legal and Ethical Issues in Hospitality",
    "credits": 3,
    "prereqs": "HMGT 200",
    "offered": "Resident"
  },
  "HMGT310": {
    "title": "Principles of Hotel Operations",
    "credits": 3,
    "prereqs": "HMGT 200 and SETM 205",
    "offered": "Resident"
  },
  "HMGT405": {
    "title": "Revenue Management in Hospitality",
    "credits": 3,
    "prereqs": "ACCT 209 and HMGT 310 and (MATH 110 or MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)",
    "offered": "Resident"
  },
  "HMGT410": {
    "title": "Sales and Promotion in Hospitality Management",
    "credits": 3,
    "prereqs": "HMGT 310",
    "offered": "Resident"
  },
  "HMGT430": {
    "title": "Technology in Hospitality",
    "credits": 3,
    "prereqs": "HMGT 310",
    "offered": "Resident"
  },
  "HOMI500": {
    "title": "Preparation of the Sermon",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HOMI601": {
    "title": "Foundations of Expository Teaching and Preaching",
    "credits": 3,
    "prereqs": "NBST 610",
    "offered": "Resident and Online"
  },
  "HOMI605": {
    "title": "Expository Preaching",
    "credits": 3,
    "prereqs": "(HOMI 500 or HOMI 501)",
    "offered": "Resident and Online"
  },
  "HOMI612": {
    "title": "Evangelistic Preaching",
    "credits": 3,
    "prereqs": "HOMI 605 or HOMI 611",
    "offered": "Resident and Online"
  },
  "HOMI635": {
    "title": "Preaching for Special Occasions",
    "credits": 3,
    "prereqs": "(HOMI 605 or HOMI 611) and (LEAD 635 or PLED 635)",
    "offered": "Resident and Online"
  },
  "HOMI660": {
    "title": "Great Preachers and Their Preaching",
    "credits": 3,
    "prereqs": "HOMI 605 or HOMI 611",
    "offered": "Resident"
  },
  "HOMI670": {
    "title": "Preaching from the Old Testament",
    "credits": 3,
    "prereqs": "HOMI 605 or HOMI 611",
    "offered": "Resident and Online"
  },
  "HOMI675": {
    "title": "Preaching from the New Testament",
    "credits": 3,
    "prereqs": "HOMI 605 or HOMI 611",
    "offered": "Resident and Online"
  },
  "HOMI679": {
    "title": "Homiletics Capstone",
    "credits": 3,
    "prereqs": "HOMI 500 and HOMI 605 and NBST 610",
    "offered": "Resident and Online"
  },
  "HOMI695": {
    "title": "Directed Research in Homiletics",
    "credits": 1,
    "offered": "Online"
  },
  "HOMI697": {
    "title": "Seminar in Homiletics",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "HOMI698": {
    "title": "Homiletics Practicum",
    "credits": 1
  },
  "HOMI810": {
    "title": "Preaching and Teaching the Grand Story of the Bible",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "HOMI820": {
    "title": "Expository Preaching and Teaching and the Old Testament",
    "credits": 3,
    "prereqs": "DMIN 810 and HOMI 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "HOMI830": {
    "title": "Expository Preaching and Teaching and the New Testament",
    "credits": 3,
    "prereqs": "DMIN 810 and HOMI 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "HOMI840": {
    "title": "Preaching and Teaching the Nature of God",
    "credits": 3,
    "offered": "Online"
  },
  "HOMI850": {
    "title": "Preaching and Teaching the Person and Work of Christ",
    "credits": 3,
    "offered": "Online"
  },
  "HOMI860": {
    "title": "Preaching and Teaching the Person and Work of the Holy Spirit",
    "credits": 3,
    "offered": "Online"
  },
  "HOMI895": {
    "title": "Directed Research in Homiletics",
    "credits": 1,
    "offered": "Online"
  },
  "HOMI897": {
    "title": "Seminar in Homiletics",
    "credits": 1,
    "offered": "Online"
  },
  "HONR395": {
    "title": "Quantitative Research Methods and Design",
    "credits": 3,
    "offered": "Resident"
  },
  "HONR495": {
    "title": "Senior Honors Thesis",
    "credits": 3,
    "offered": "Resident"
  },
  "HSCI705": {
    "title": "Ethical Issues in Health Science",
    "credits": 3,
    "offered": "Online"
  },
  "HSCI710": {
    "title": "Healthcare Delivery Systems",
    "credits": 3,
    "offered": "Online"
  },
  "HSCI715": {
    "title": "Cultural Competency in Health Sciences",
    "credits": 3,
    "offered": "Online"
  },
  "HSCI720": {
    "title": "Principles and theories of Teaching in the Health Professions",
    "credits": 3,
    "offered": "Online"
  },
  "HSCI725": {
    "title": "Leadership in Professional Practice",
    "credits": 3,
    "prereqs": "HSCI 705 and HSCI 710 and HSCI 715",
    "offered": "Online"
  },
  "HSCI730": {
    "title": "Risk Management in Health Sciences",
    "credits": 3,
    "prereqs": "HSCI 705 and HSCI 710 and HSCI 715",
    "offered": "Online"
  },
  "HSCI735": {
    "title": "Evidence Based Practices in Health Sciences",
    "credits": 3,
    "offered": "Online"
  },
  "HSCI798": {
    "title": "Practicum and Applied Doctoral Research Preparation",
    "credits": 3,
    "prereqs": "HSCI 705 and HSCI 715 and HSCI 735",
    "offered": "Online"
  },
  "HSCI810": {
    "title": "Review and Critique of Health Science Literature",
    "credits": 3,
    "offered": "Online"
  },
  "HSCI815": {
    "title": "Qualitative Research Methods and Statistics in Health Sciences",
    "credits": 3,
    "prereqs": "HSCI 705 and HSCI 810",
    "offered": "Online"
  },
  "HSCI820": {
    "title": "Quantitative Research Methods and Statistics in Health Sciences",
    "credits": 3,
    "prereqs": "HSCI 705 and HSCI 810",
    "offered": "Online"
  },
  "HSCI888": {
    "title": "Applied Doctoral Research Project I",
    "credits": 5,
    "prereqs": "HSCI 798 and HSCI 810 (may be taken concurrently) and HSCI 898 (may be taken concurrently)",
    "offered": "Online"
  },
  "HSCI889": {
    "title": "Applied Doctoral Research Project II",
    "credits": 5,
    "prereqs": "HSCI 815 (may be taken concurrently) and HSCI 820 (may be taken concurrently) and HSCI 888",
    "offered": "Online"
  },
  "HSCI890": {
    "title": "Applied Doctoral Research Project III",
    "credits": 5,
    "prereqs": "HSCI 889 and HSCI 898",
    "offered": "Online"
  },
  "HSCI898": {
    "title": "Practicum",
    "credits": 3,
    "prereqs": "HSCI 798",
    "offered": "Online"
  },
  "HSCI987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "HSCI 705 and HSCI 710 and HSCI 715 and HSCI 720 and HSCI 725 and HSCI 730 and HSCI 810 and HSCI 815 and HSCI 820",
    "offered": "Online"
  },
  "HSCI988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "HSCI 987",
    "offered": "Online"
  },
  "HSCI989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "HSCI 988",
    "offered": "Online"
  },
  "HSCI990": {
    "title": "Dissertation IV",
    "credits": 0,
    "prereqs": "HSCI 989",
    "offered": "Online"
  },
  "HSCO500": {
    "title": "Introduction to Human Services Counseling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HSCO502": {
    "title": "Human Growth and Development",
    "credits": 3,
    "prereqs": "HSCO 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "HSCO506": {
    "title": "Integration of Spirituality and Counseling",
    "credits": 3,
    "prereqs": "HSCO 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "HSCO508": {
    "title": "Studies in Interpersonal Communication",
    "credits": 3,
    "prereqs": "HSCO 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "HSCO509": {
    "title": "Multicultural Issues in Human Services",
    "credits": 3,
    "prereqs": "HSCO 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "HSCO511": {
    "title": "Group Dynamics",
    "credits": 3,
    "prereqs": "HSCO 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "HSCO597": {
    "title": "Seminar in Human Services Counseling",
    "credits": 3
  },
  "HSER201": {
    "title": "Survey of Human Services",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HSER270": {
    "title": "Ethics in Professional Helping",
    "credits": 3,
    "prereqs": "ENGL 102 and (SOWK 101 or PSYC 101)",
    "note": "This course is an equivalent to SOWK 270.",
    "offered": "Online"
  },
  "HSER301": {
    "title": "Administration &amp; Case Management",
    "credits": 3,
    "prereqs": "HSER 201 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "HSER315": {
    "title": "Human Services Policy and Ethics",
    "credits": 3,
    "prereqs": "PSYC 101 and PSYC 210 and SOWK 101 and (SOCI 200 or SOCI 201)",
    "offered": "Resident"
  },
  "HSER415": {
    "title": "Case Management Practice in Human Services",
    "credits": 3,
    "prereqs": "(SOWK 101 or PSYC 101 or SOCI 200) and ENGL 102 and HSER 201 and (HSER 270 or SOWK 270)",
    "offered": "Online"
  },
  "HSER499": {
    "title": "Internship",
    "credits": 1,
    "prereqs": "HSER 201 and HSER 270 and HSER 415",
    "offered": "Resident and Online"
  },
  "HSMF601": {
    "title": "Marriage and Family Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "HSMF603": {
    "title": "Premarital and Marital Counseling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "HSMF611": {
    "title": "Counseling Children and Their Families",
    "credits": 3,
    "offered": "Online"
  },
  "HSMF620": {
    "title": "Counseling Adolescents and Their Families",
    "credits": 3,
    "offered": "Online"
  },
  "HSMF687": {
    "title": "Counseling Women",
    "credits": 3,
    "offered": "Online"
  },
  "HUMR501": {
    "title": "The International Human Rights Regime",
    "credits": 3,
    "offered": "Online"
  },
  "HVAC101": {
    "title": "Foundations of HVAC",
    "credits": 4,
    "prereqs": "CRFT 101 (may be taken concurrently)",
    "offered": "Resident"
  },
  "HVAC201": {
    "title": "Intermediate HVAC",
    "credits": 4,
    "prereqs": "HVAC 101 and CRFT 101",
    "offered": "Resident"
  },
  "HVAC301": {
    "title": "Advanced HVAC",
    "credits": 4,
    "prereqs": "HVAC 201 and CRFT 101",
    "offered": "Resident"
  },
  "HVAC401": {
    "title": "Special Topics in HVAC",
    "credits": 4,
    "prereqs": "HVAC 301 and CRFT 101",
    "offered": "Resident"
  },
  "INDS200": {
    "title": "Interdisciplinary Careers",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "INDS299": {
    "title": "Experiential Learning and Intern/Externship",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "INDS400": {
    "title": "Knowledge Synthesis for Professional and Personal Development",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident and Online"
  },
  "INDS491": {
    "title": "Interdisciplinary Studies Capstone",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident and Online"
  },
  "INDS499": {
    "title": "Internship",
    "credits": 3,
    "note": "Online: Enrollment in Washington Semester Fellowship",
    "offered": "Resident and Online"
  },
  "INDS500": {
    "title": "Introduction to Interdisciplinary Studies",
    "credits": 1,
    "offered": "Online"
  },
  "INDS600": {
    "title": "Interdisciplinary Research",
    "credits": 3,
    "prereqs": "INDS 500",
    "offered": "Online"
  },
  "INFO305": {
    "title": "Quality Management and Decision Support",
    "credits": 3,
    "prereqs": "CSIS 100 or BUSI 311",
    "offered": "Online"
  },
  "INFO310": {
    "title": "Foundations of Pharmacology",
    "credits": 3,
    "prereqs": "NURS 105 and INFO 305",
    "offered": "Online"
  },
  "INFO320": {
    "title": "Healthcare Informatics",
    "credits": 3,
    "prereqs": "INFO 305 or BUSI 311",
    "offered": "Online"
  },
  "INFO321": {
    "title": "Healthcare Coding and Classification",
    "credits": 3,
    "prereqs": "INFO 305 and INFO 320",
    "offered": "Online"
  },
  "INFO405": {
    "title": "Informatics Information Systems",
    "credits": 3,
    "prereqs": "(BMIS 200 or CSIS 100) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "INFO410": {
    "title": "Healthcare Enterprise Systems",
    "credits": 3,
    "prereqs": "(BMIS 200 or CSIS 100) and INFO 305",
    "offered": "Online"
  },
  "INFO505": {
    "title": "Health Informatics",
    "credits": 3,
    "offered": "Online"
  },
  "INFO535": {
    "title": "Health Systems and Delivery",
    "credits": 3,
    "prereqs": "INFO 505 and Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3 and College Algebra Req with a score of 3 and Undergraduate Statistics Req with a score of 3",
    "offered": "Online"
  },
  "INFO545": {
    "title": "Health Information Systems and Integrated Technologies",
    "credits": 3,
    "prereqs": "(INFO 505 and INFO 535) or (INFO 505 and NURS 521)",
    "offered": "Online"
  },
  "INFO668": {
    "title": "Health Data Analytics and Decision-Making",
    "credits": 3,
    "prereqs": "CSIS 525 and HLTH 511",
    "offered": "Online"
  },
  "INFO690": {
    "title": "Integrated Capstone",
    "credits": 3,
    "prereqs": "BMIS 530 and BMIS 680 and CSIS 525 and HLTH 503 and HLTH 511 and NURS 501 and INFO 545 and INFO 668",
    "offered": "Online"
  },
  "INFT000": {
    "title": "Computer Competency",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "INFT102": {
    "title": "PowerPoint",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "INFT103": {
    "title": "Excel",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "INFT104": {
    "title": "Word",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "INFT105": {
    "title": "Introduction to Information Literacy",
    "credits": 1
  },
  "INFT110": {
    "title": "Computer Concepts and Applications",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "INFT111": {
    "title": "MAC Computer Concepts and Applications",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "INFT126": {
    "title": "Adobe InDesign - Introductory",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "INFT127": {
    "title": "Adobe Photoshop - Introductory",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "INFT151": {
    "title": "Mobile Media Techniques",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "INFT152": {
    "title": "Social Media Tools - Introductory",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "INFT241": {
    "title": "CompTIA A+: Computer Hardware and Operating Systems Certification",
    "credits": 3,
    "offered": "Online"
  },
  "INQR000": {
    "title": "Inquiry Assessment",
    "credits": 0,
    "offered": "Resident"
  },
  "INQR101": {
    "title": "Inquiry",
    "credits": 1,
    "offered": "Resident"
  },
  "INQR102": {
    "title": "Interdisciplinary Inquiry",
    "credits": 1,
    "offered": "Online"
  },
  "INTL010": {
    "title": "International Orientation",
    "credits": 0,
    "offered": "Resident"
  },
  "INTL500": {
    "title": "Fundamentals of International Relations",
    "credits": 3,
    "offered": "Online"
  },
  "INTL502": {
    "title": "Global Governance",
    "credits": 3,
    "offered": "Online"
  },
  "INTL688": {
    "title": "Thesis Proposal",
    "credits": 3,
    "offered": "Online"
  },
  "INTL689": {
    "title": "Thesis Research",
    "credits": 3,
    "prereqs": "INTL 688",
    "offered": "Online"
  },
  "INTL690": {
    "title": "Thesis Defense",
    "credits": 3,
    "prereqs": "INTL 689",
    "offered": "Online"
  },
  "JOUR220": {
    "title": "News Writing &amp; Reporting I",
    "credits": 3,
    "prereqs": "ENGL 101",
    "offered": "Resident"
  },
  "JOUR225": {
    "title": "Media Writing",
    "credits": 3,
    "prereqs": "ENGL 101",
    "offered": "Resident and Online"
  },
  "JOUR234": {
    "title": "Modern Copy Editing",
    "credits": 3,
    "prereqs": "JOUR 220 or JOUR 225",
    "offered": "Resident"
  },
  "JOUR345": {
    "title": "Producing Digital News",
    "credits": 3,
    "prereqs": "DIGI 343 and JOUR 220",
    "offered": "Resident"
  },
  "JOUR354": {
    "title": "News Writing and Reporting II",
    "credits": 3,
    "prereqs": "JOUR 220 and DIGI 175 and DIGI 220 and DIGI 224 and DIGI 225 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "JOUR356": {
    "title": "Social Media Writing",
    "credits": 3,
    "prereqs": "JOUR 220 or JOUR 225",
    "offered": "Resident and Online"
  },
  "JOUR357": {
    "title": "E-News Reporting",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 220 and DIGI 224 and DIGI 225 and JOUR 220",
    "offered": "Resident"
  },
  "JOUR358": {
    "title": "Strategic Web Writing (Blogging)",
    "credits": 3,
    "prereqs": "JOUR 220 or JOUR 225 or COMS 220",
    "offered": "Resident"
  },
  "JOUR360": {
    "title": "Media Convergence",
    "credits": 3,
    "prereqs": "ARTS 222 and (DIGI 225 or COMS 225) and (JOUR 354 or COMS 354)",
    "offered": "Resident"
  },
  "JOUR370": {
    "title": "Sports Writing",
    "credits": 3,
    "prereqs": "JOUR 220 or JOUR 225",
    "offered": "Resident"
  },
  "JOUR373": {
    "title": "Editorial and Opinion Writing",
    "credits": 3,
    "prereqs": "JOUR 220 or JOUR 225",
    "offered": "Resident"
  },
  "JOUR374": {
    "title": "Writing and Editing for Digital Magazine and Features",
    "credits": 3,
    "prereqs": "JOUR 220 and DIGI 175 and DIGI 220 and DIGI 224 and DIGI 225",
    "offered": "Resident"
  },
  "JOUR375": {
    "title": "Community Reporting",
    "credits": 3,
    "prereqs": "JOUR 220 or JOUR 225",
    "offered": "Resident"
  },
  "JOUR390": {
    "title": "Champion Practicum",
    "credits": 1,
    "prereqs": "JOUR 220 or JOUR 225",
    "offered": "Resident"
  },
  "JOUR391": {
    "title": "Advertising Design and Photography Practicum",
    "credits": 1,
    "prereqs": "(JOUR 220 or JOUR 225) and (ARTS 222 or ARTS 224)",
    "offered": "Resident"
  },
  "JOUR396": {
    "title": "Advertising Practicum",
    "credits": 1,
    "prereqs": "JOUR 220 or JOUR 225",
    "offered": "Resident"
  },
  "JOUR482": {
    "title": "Senior Project",
    "credits": 3,
    "prereqs": "(ARTS 222 and DIGI 224) or (JOUR 354 and DIGI 225)",
    "offered": "Resident"
  },
  "JOUR485": {
    "title": "Investigative Reporting",
    "credits": 3,
    "prereqs": "DIGI 175 and DIGI 220 and DIGI 224 and DIGI 225 and JOUR 220",
    "offered": "Resident and Online"
  },
  "JOUR497": {
    "title": "Special Topics",
    "credits": 1,
    "offered": "Resident"
  },
  "JOUR498": {
    "title": "Professional Practicum",
    "credits": 1,
    "prereqs": "(JOUR 354 or COMS 354) and (DIGI 225 or COMS 225 or COMS 224 or DIGI 224) and ARTS 222",
    "offered": "Resident"
  },
  "JURI510": {
    "title": "Introduction to Legal Systems and Research",
    "credits": 3,
    "offered": "Online"
  },
  "JURI515": {
    "title": "Legal Writing and Analysis",
    "credits": 3,
    "prereqs": "JURI 510",
    "offered": "Online"
  },
  "JURI520": {
    "title": "Constitutional Law",
    "credits": 3,
    "offered": "Online"
  },
  "JURI525": {
    "title": "Health Law Survey",
    "credits": 3,
    "offered": "Online"
  },
  "JURI530": {
    "title": "Contracts Law",
    "credits": 3,
    "offered": "Online"
  },
  "JURI535": {
    "title": "Healthcare and Bioethics",
    "credits": 3,
    "offered": "Online"
  },
  "JURI540": {
    "title": "Criminal Law",
    "credits": 3,
    "offered": "Online"
  },
  "JURI545": {
    "title": "Healthcare Compliance",
    "credits": 3,
    "offered": "Online"
  },
  "JURI550": {
    "title": "Property Law",
    "credits": 3,
    "offered": "Online"
  },
  "JURI555": {
    "title": "Healthcare Fraud and Abuse",
    "credits": 3,
    "offered": "Online"
  },
  "JURI560": {
    "title": "Torts Law",
    "credits": 3,
    "offered": "Online"
  },
  "JURI565": {
    "title": "Medical Malpractice Survey",
    "credits": 3,
    "offered": "Online"
  },
  "JURI570": {
    "title": "American Business Law",
    "credits": 3,
    "offered": "Online"
  },
  "JURI575": {
    "title": "Criminal Procedure",
    "credits": 3,
    "offered": "Online"
  },
  "JURI580": {
    "title": "Ethics and Professional Responsibility",
    "credits": 3,
    "offered": "Online"
  },
  "JURI600": {
    "title": "Foundations of Law",
    "credits": 3,
    "note": "LL.M. students must meet additional legal brief component as described in course syllabus.",
    "offered": "Online"
  },
  "JURI610": {
    "title": "Jurisprudence/Legal History",
    "credits": 3,
    "note": "LL.M. students must meet additional legal brief component as described in course syllabus.",
    "offered": "Online"
  },
  "JURI615": {
    "title": "Corporate Compliance Survey",
    "credits": 3,
    "offered": "Online"
  },
  "JURI620": {
    "title": "Law and Economics",
    "credits": 3,
    "note": "LL.M. students must meet additional legal brief component as described in course syllabus.",
    "offered": "Online"
  },
  "JURI625": {
    "title": "Administrative Law",
    "credits": 3,
    "offered": "Online"
  },
  "JURI630": {
    "title": "International Business Law",
    "credits": 3,
    "note": "LL.M. students must meet additional legal brief component as described in course syllabus.",
    "offered": "Online"
  },
  "JURI635": {
    "title": "Risk Management and Compliance",
    "credits": 3,
    "offered": "Online"
  },
  "JURI640": {
    "title": "International Public Law",
    "credits": 3,
    "note": "LL.M. students must meet additional legal brief component as described in course syllabus.",
    "offered": "Online"
  },
  "JURI645": {
    "title": "Intellectual Property Law",
    "credits": 3,
    "offered": "Online"
  },
  "JURI650": {
    "title": "International Trade Law",
    "credits": 3,
    "note": "LL.M. students must meet additional legal brief component as described in course syllabus.",
    "offered": "Online"
  },
  "JURI660": {
    "title": "International Law and Diplomacy",
    "credits": 3,
    "note": "LL.M. students must meet additional legal brief component as described in course syllabus.",
    "offered": "Online"
  },
  "JURI670": {
    "title": "The Law of Armed Conflict",
    "credits": 3,
    "note": "LL.M. students must meet additional legal brief component as described in course syllabus.",
    "offered": "Online"
  },
  "JURI680": {
    "title": "International Human Rights Law",
    "credits": 3,
    "note": "LL.M. students must meet additional legal brief component as described in course syllabus.",
    "offered": "Online"
  },
  "JURI690": {
    "title": "Legal Research and Writing I - Capstone",
    "credits": 3,
    "offered": "Online"
  },
  "JURI695": {
    "title": "Legal Research and Writing II - Capstone",
    "credits": 3,
    "prereqs": "JURI 690",
    "offered": "Online"
  },
  "LANG500": {
    "title": "Applied Language Studies",
    "credits": 3,
    "offered": "Online"
  },
  "LANG501": {
    "title": "Analysis of World Language",
    "credits": 3,
    "offered": "Online"
  },
  "LAW501": {
    "title": "Foundations of Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW502": {
    "title": "Foundations of Law II",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW505": {
    "title": "Contracts I",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW506": {
    "title": "Contracts II",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW511": {
    "title": "Torts I",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW512": {
    "title": "Torts II",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW515": {
    "title": "Property I",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW516": {
    "title": "Property II",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW520": {
    "title": "Legal Methods",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW521": {
    "title": "Civil Procedure I",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW522": {
    "title": "Civil Procedure II",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW525": {
    "title": "Lawyering Skills I",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW526": {
    "title": "Lawyering Skills II",
    "credits": 1,
    "offered": "Resident"
  },
  "LAW531": {
    "title": "Constitutional Law I",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW532": {
    "title": "Constitutional Law II",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW535": {
    "title": "Criminal Law",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW541": {
    "title": "Criminal Procedure",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW542": {
    "title": "Advanced Criminal Procedure",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW545": {
    "title": "Evidence",
    "credits": 3,
    "note": "This course is a prerequisite for Virginia Third-Year Practice.",
    "offered": "Resident"
  },
  "LAW561": {
    "title": "Business Associations",
    "credits": 4,
    "offered": "Resident"
  },
  "LAW565": {
    "title": "Professional Responsibility",
    "credits": 2,
    "note": "This course is a prerequisite for Virginia Third-Year Practice; it must be taken in the spring semester of the student's second year or during an intensive session.",
    "offered": "Resident"
  },
  "LAW571": {
    "title": "Lawyering Skills III",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW572": {
    "title": "Lawyering Skills IV",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW575": {
    "title": "Wills, Trusts &amp; Estates",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW580": {
    "title": "Statutory Interpretation",
    "credits": 1,
    "offered": "Resident"
  },
  "LAW581": {
    "title": "Jurisprudence",
    "credits": 3,
    "note": "This course is offered in the spring semester of odd-numbered years.",
    "offered": "Resident"
  },
  "LAW582": {
    "title": "Law and Economics",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW585": {
    "title": "Legal History",
    "credits": 3,
    "note": "This course is offered in the spring semester of even-numbered years.",
    "offered": "Resident"
  },
  "LAW591": {
    "title": "Taxation of Individuals",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW595": {
    "title": "Law Skills V - Trial Advocacy",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW601": {
    "title": "Family Law",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW605": {
    "title": "Children &amp; the Law Seminar",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW608": {
    "title": "Adoption Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW610": {
    "title": "Child Abuse and the Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW615": {
    "title": "Taxation of Estates &amp; Gifts",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW621": {
    "title": "Estate Planning",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW630": {
    "title": "Accounting &amp; Finance for Lawyers",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW631": {
    "title": "Statistics/Quantitative Method",
    "credits": 2
  },
  "LAW632": {
    "title": "Financial Planning Survey",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW635": {
    "title": "Secured Transactions",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW636": {
    "title": "Payment Systems",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW637": {
    "title": "Basic Uniform Commercial Code",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW641": {
    "title": "Taxation of Businesses",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW643": {
    "title": "Mergers and Acquisitions",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW644": {
    "title": "Securities Regulation",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW645": {
    "title": "Business Planning",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW648": {
    "title": "Law of Nonprofits",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW651": {
    "title": "Real Estate Transactions and Development",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW654": {
    "title": "Business Planning",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW655": {
    "title": "Bankruptcy",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW661": {
    "title": "Intellectual Property",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW662": {
    "title": "Intellectual Property Law Clinic",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW663": {
    "title": "IP Clinic II",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW665": {
    "title": "Entertainment Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW701": {
    "title": "Constitutional Litigation",
    "credits": 3
  },
  "LAW705": {
    "title": "1st Amendment Seminar",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW711": {
    "title": "Federal Jurisdiction",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW715": {
    "title": "Conflict of Laws",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW720": {
    "title": "State Constitutional Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW721": {
    "title": "State &amp; Local Government",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW725": {
    "title": "School Law Seminar",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW730": {
    "title": "State Constitutional Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW732": {
    "title": "Race and the Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW741": {
    "title": "International Law",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW743": {
    "title": "International Human Rights",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW745": {
    "title": "International Business Transactions",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW747": {
    "title": "Immigration Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW755": {
    "title": "Bioethics and the Law",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW760": {
    "title": "Public Policy Lawyering Skills",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW761": {
    "title": "Public Policy Survey",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW765": {
    "title": "Sexual Behavior and the Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW771": {
    "title": "Administrative Law",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW773": {
    "title": "Health Law Survey",
    "credits": 3
  },
  "LAW774": {
    "title": "Medical Negligence",
    "credits": 2
  },
  "LAW775": {
    "title": "Environmental Law",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW779": {
    "title": "Disability Law",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW781": {
    "title": "Employment Law",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW783": {
    "title": "Trademark Law &amp; Practice",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW784": {
    "title": "Corporate Compliance Survey",
    "credits": 2
  },
  "LAW785": {
    "title": "Land Use &amp; Zoning",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW801": {
    "title": "Remedies",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW802": {
    "title": "Virginia Practice",
    "credits": 1,
    "offered": "Resident"
  },
  "LAW803": {
    "title": "Virginia Civil Procedure",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW804": {
    "title": "Virginia Criminal Procedure",
    "credits": 1,
    "note": "Course offered as a Winter intensive.",
    "offered": "Resident"
  },
  "LAW805": {
    "title": "Insurance Law",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW809": {
    "title": "Virginia Legal Aid Survey",
    "credits": 1,
    "offered": "Resident"
  },
  "LAW810": {
    "title": "Virginia Legal Aid Clinic I",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW811": {
    "title": "Virginia Legal Aid Clinic II",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW812": {
    "title": "Complex Litigation",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW815": {
    "title": "Law Office Management",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW821": {
    "title": "Mediation",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW825": {
    "title": "Advanced Trial Advocacy",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW826": {
    "title": "Real Property Litigation",
    "credits": 1,
    "offered": "Resident"
  },
  "LAW831": {
    "title": "Appellate Advocacy",
    "credits": 2,
    "note": "This course is offered in the fall semester and is designed for those who are interested in participating in Moot Court.",
    "offered": "Resident"
  },
  "LAW832": {
    "title": "Advanced Appellate Advocacy",
    "credits": 1,
    "note": "Course credit is pass/fail.",
    "offered": "Resident"
  },
  "LAW833": {
    "title": "Trial Team",
    "credits": 1,
    "note": "Course credit is pass/fail.",
    "offered": "Resident"
  },
  "LAW851": {
    "title": "Constitutional Litigation Clinic",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW855": {
    "title": "Prosecution Clinic",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW861": {
    "title": "Externship",
    "credits": 2,
    "note": "The normal externship is for two credit hours.  Three credit hours are approved only in special circumstances.",
    "offered": "Resident"
  },
  "LAW862": {
    "title": "Criminal Law Externship",
    "credits": 2,
    "note": "The normal externship is for two credit hours.  Three credit hours are approved only in special circumstances.",
    "offered": "Resident"
  },
  "LAW863": {
    "title": "Judicial Clerk Externship",
    "credits": 2,
    "note": "The normal externship is for two credit hours.  Three credit hours are approved only in special circumstances.",
    "offered": "Resident"
  },
  "LAW868": {
    "title": "Directed Research in Law &amp; Policy",
    "credits": 2,
    "offered": "Resident"
  },
  "LAW871": {
    "title": "Independent Study",
    "credits": 1,
    "offered": "Resident"
  },
  "LAW881": {
    "title": "Law Review Candidacy",
    "credits": 1,
    "note": "Course credit is pass/fail.",
    "offered": "Resident"
  },
  "LAW882": {
    "title": "Law Review Junior Staff",
    "credits": 1,
    "note": "Course credit is pass/fail.",
    "offered": "Resident"
  },
  "LAW883": {
    "title": "Law Review Senior Staff I",
    "credits": 1,
    "note": "Course credit is pass/fail.",
    "offered": "Resident"
  },
  "LAW884": {
    "title": "Law Review Senior Staff II",
    "credits": 1,
    "note": "Course credit is pass/fail.",
    "offered": "Resident"
  },
  "LAW885": {
    "title": "Law Review Editorial Board I",
    "credits": 2,
    "note": "Course credit is pass/fail.",
    "offered": "Resident"
  },
  "LAW886": {
    "title": "Law Review Editorial Board II",
    "credits": 2,
    "note": "Course credit is pass/fail.",
    "offered": "Resident"
  },
  "LAW901": {
    "title": "Advanced Bar Studies",
    "credits": 3,
    "offered": "Resident"
  },
  "LAW903": {
    "title": "Advanced Legal Writing",
    "credits": 1,
    "offered": "Resident"
  },
  "LAW904": {
    "title": "Advanced Research &amp; Writing",
    "credits": 2,
    "offered": "Resident"
  },
  "LEAD110": {
    "title": "Introduction to Leadership: Connecting with Others",
    "credits": 1,
    "offered": "Resident"
  },
  "LEAD112": {
    "title": "Self-Leadership Development",
    "credits": 1,
    "offered": "Resident"
  },
  "LEAD122": {
    "title": "Leadership: Connecting with Others and Self Leadership",
    "credits": 2,
    "offered": "Online"
  },
  "LEAD210": {
    "title": "The Art and Science of Leading Others",
    "credits": 1,
    "offered": "Resident"
  },
  "LEAD212": {
    "title": "The Art and Science of Culture Change",
    "credits": 1,
    "offered": "Resident"
  },
  "LEAD222": {
    "title": "Leadership: Leading Others and Culture Change",
    "credits": 2,
    "offered": "Online"
  },
  "LEAD302": {
    "title": "Changing Culture through Empowerment, Leadership, and Cultural Intelligence",
    "credits": 1,
    "offered": "Resident"
  },
  "LEAD505": {
    "title": "Church Administration",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "LEAD510": {
    "title": "Biblical Foundations of Leadership",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "LEAD520": {
    "title": "The Life of Leaders",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "LEAD610": {
    "title": "Team Leadership and Conflict Resolution",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "LEAD620": {
    "title": "Mission, Vision, and Strategic Planning",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "LEAD625": {
    "title": "Preventing Ministry Failure",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "LEAD630": {
    "title": "The Art of Developing Leaders",
    "credits": 3,
    "offered": "Online"
  },
  "LEAD635": {
    "title": "Theology of Pastoral Ministry",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "LEAD695": {
    "title": "Directed Research in Leadership",
    "credits": 1
  },
  "LEAD697": {
    "title": "Seminar in Leadership",
    "credits": 1,
    "offered": "Online"
  },
  "LEAD698": {
    "title": "Practicum in Pastoral Leadership",
    "credits": 1
  },
  "LEAD699": {
    "title": "Internship in Pastoral Leadership",
    "credits": 3,
    "prereqs": "DSMN 500 and (EVAN 565 or EVAN 525) and (HOMI 500 or HOMI 501 or HOMI 601 or DSMN 601) and (LEAD 635 or PLED 635)",
    "offered": "Resident and Online"
  },
  "LEAD810": {
    "title": "Strategies for Developing Leaders",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "LEAD820": {
    "title": "Organizational Leadership in the Church",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "LEAD830": {
    "title": "Ministry Leadership",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "Admission to DMIN program",
    "offered": "Online"
  },
  "LEAD895": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Online"
  },
  "LEAD897": {
    "title": "Seminar in Leadership Studies",
    "credits": 3,
    "offered": "Online"
  },
  "LIFC201": {
    "title": "Introduction to Life Coaching",
    "credits": 3,
    "prereqs": "PSYC 101 or PSYC 210",
    "offered": "Online"
  },
  "LIFC202": {
    "title": "Advanced Skills in Life Coaching",
    "credits": 3,
    "prereqs": "PSYC 101 or PSYC 210",
    "offered": "Online"
  },
  "LIFC301": {
    "title": "Health and Wellness Coaching",
    "credits": 3,
    "prereqs": "PSYC 101 or PSYC 210",
    "offered": "Online"
  },
  "LIFC302": {
    "title": "Marriage Coaching",
    "credits": 3,
    "prereqs": "PSYC 101 or PSYC 210",
    "offered": "Online"
  },
  "LIFC303": {
    "title": "Financial Life Coaching",
    "credits": 3,
    "prereqs": "PSYC 101 or PSYC 210",
    "offered": "Online"
  },
  "LIFC304": {
    "title": "Leadership Coaching",
    "credits": 3,
    "prereqs": "PSYC 101 or PSYC 210",
    "offered": "Online"
  },
  "LIFC501": {
    "title": "Introduction to Life Coaching",
    "credits": 3,
    "offered": "Online"
  },
  "LIFC502": {
    "title": "Advanced Life Coaching Skills",
    "credits": 3,
    "offered": "Online"
  },
  "LIFC601": {
    "title": "Health and Wellness Coaching",
    "credits": 3,
    "offered": "Online"
  },
  "LIFC602": {
    "title": "Marriage Coaching",
    "credits": 3,
    "offered": "Online"
  },
  "LIFC603": {
    "title": "Financial Life Coaching",
    "credits": 3,
    "offered": "Online"
  },
  "LIFC604": {
    "title": "Leadership Professional Life Coaching",
    "credits": 3,
    "offered": "Online"
  },
  "LING213": {
    "title": "Introduction to Linguistics",
    "credits": 3,
    "offered": "Resident"
  },
  "LING280": {
    "title": "Field Language Learning",
    "credits": 3,
    "offered": "Resident"
  },
  "LING300": {
    "title": "Introduction to Cultural Anthropology",
    "credits": 3,
    "offered": "Resident"
  },
  "LING301": {
    "title": "Introduction to Linguistics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "LING305": {
    "title": "Linguistic Analysis",
    "credits": 3,
    "prereqs": "LING 301",
    "offered": "Resident"
  },
  "LING451": {
    "title": "Phonetics and Phonology",
    "credits": 3,
    "prereqs": "LING 301 and LING 305",
    "offered": "Resident"
  },
  "LING452": {
    "title": "Morphology and Syntax",
    "credits": 3,
    "prereqs": "(MLAN 305 or LING 305) and LING 301",
    "offered": "Resident"
  },
  "LING453": {
    "title": "World Languages",
    "credits": 3,
    "prereqs": "LING 301",
    "offered": "Resident and Online"
  },
  "LING495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "LING497": {
    "title": "Seminar",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "LING499": {
    "title": "Internship in Linguistics",
    "credits": 3,
    "offered": "Resident"
  },
  "LING600": {
    "title": "Advanced Semantics and Pragmatics",
    "credits": 3,
    "prereqs": "LANG 500 or Applied Linguistics-TESL302 with a score of 5",
    "offered": "Online"
  },
  "LING605": {
    "title": "Advanced Phonetics",
    "credits": 3,
    "prereqs": "(LANG 500 and LANG 501) or (Intro Linguistics-LING301 with a score of 5 and Linguistics Analysis-LING305 with a score of 5)",
    "offered": "Online"
  },
  "LING610": {
    "title": "Advanced Phonology",
    "credits": 3,
    "prereqs": "(LANG 500 and LANG 501) or (Intro Linguistics-LING301 with a score of 5 and Linguistics Analysis-LING305 with a score of 5)",
    "offered": "Online"
  },
  "LING615": {
    "title": "Advanced Morphology and Syntax",
    "credits": 3,
    "prereqs": "(LANG 500 and LANG 501) or (Intro Linguistics-LING301 with a score of 5 and Linguistics Analysis-LING305 with a score of 5)",
    "offered": "Online"
  },
  "LING620": {
    "title": "History of Language",
    "credits": 3,
    "prereqs": "LANG 501 or World Languages-LING453 with a score of 5",
    "offered": "Online"
  },
  "LING630": {
    "title": "Applied Linguistics I",
    "credits": 3,
    "prereqs": "TESL 600",
    "offered": "Online"
  },
  "LING633": {
    "title": "Applied Linguistics II",
    "credits": 3,
    "prereqs": "LING 630",
    "offered": "Online"
  },
  "LING650": {
    "title": "Linguistic Field Studies",
    "credits": 3,
    "prereqs": "LING 605 and LING 610 and LING 615",
    "offered": "Online"
  },
  "LING695": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Online"
  },
  "LING697": {
    "title": "Special Topics",
    "credits": 3,
    "offered": "Online"
  },
  "LPCY700": {
    "title": "Foundations of the American Legal Process and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "LPCY702": {
    "title": "Constitutional Law and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "LPCY704": {
    "title": "Law, Economics, and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "LPCY800": {
    "title": "Administrative Law and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "LPCY802": {
    "title": "Human Rights Law and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "LPCY804": {
    "title": "Law and Policy: Research, Writing, and Analysis",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "LPCY806": {
    "title": "Public Policy Lawyering Skills",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "LPCY885": {
    "title": "Research Concept",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 702 and PLCY 703 and PLCY 804 and PLCY 805 and LPCY 700 and LPCY 702 and LPCY 704 and LPCY 800 and LPCY 802 and LPCY 804 and LPCY 806 and PLCY 810 and PLCY 812",
    "offered": "Online"
  },
  "LPCY887": {
    "title": "Capstone I",
    "credits": 5,
    "prereqs": "LPCY 885",
    "offered": "Online"
  },
  "LPCY888": {
    "title": "Capstone II",
    "credits": 5,
    "prereqs": "LPCY 887",
    "offered": "Online"
  },
  "LPCY889": {
    "title": "Capstone III",
    "credits": 5,
    "prereqs": "LPCY 888",
    "offered": "Online"
  },
  "LPCY890": {
    "title": "Capstone IV",
    "credits": 0,
    "prereqs": "LPCY 889",
    "offered": "Online"
  },
  "LUIX000": {
    "title": "Office of Equity &amp; Compliance: Discrimination, Harassment, &amp; Sexual Misconduct",
    "credits": 0,
    "offered": "Resident"
  },
  "MAOP520": {
    "title": "Foundations in I/O Psychology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Psychological Measurement with a score of 3",
    "offered": "Resident"
  },
  "MAOP526": {
    "title": "Organizational Psychology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Psychological Measurement with a score of 3",
    "offered": "Resident"
  },
  "MAOP646": {
    "title": "Personnel Psychology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Psychological Measurement with a score of 3 and MAOP 520",
    "offered": "Resident"
  },
  "MAOP650": {
    "title": "Current Issues in I/O Psychology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Psychological Measurement with a score of 3",
    "offered": "Resident"
  },
  "MAOP655": {
    "title": "Psychology of Performance",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Psychological Measurement with a score of 3 and MAOP 520 and MAOP 646",
    "offered": "Resident"
  },
  "MAOP658": {
    "title": "Special Topic in I/O Psychology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Psychological Measurement with a score of 3 and PSYC 510 and PSYC 515",
    "offered": "Resident"
  },
  "MAOP660": {
    "title": "Industrial Psychology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Psychological Measurement with a score of 3 and MAOP 520 and MAOP 646 and MAOP 655",
    "offered": "Resident"
  },
  "MAOP693": {
    "title": "Candidacy Exam",
    "credits": 0,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Psychological Measurement with a score of 3 and MSPS 513 and MAOP 526 and MAOP 646 and MAOP 650 and MAOP 655 and MAOP 658 and MAOP 660",
    "offered": "Resident"
  },
  "MAOP698": {
    "title": "Applied Organizational Practicum",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Psychological Measurement with a score of 3 and MAOP 526 and MAOP 646 and MAOP 650 and MAOP 655 and MAOP 658",
    "offered": "Resident"
  },
  "MATH000": {
    "title": "Math Assessment",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "MATH100": {
    "title": "Fundamentals of Mathematics",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 40 or (CLST 103 and Assessment - Mathematics with a score of 01)",
    "offered": "Resident and Online"
  },
  "MATH100L": {
    "title": "Fundamentals of Mathematics Companion Lab",
    "credits": 1,
    "prereqs": "MATH 100 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "MATH105": {
    "title": "Algebra for the Liberal Arts",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 60 or CLST 103",
    "offered": "Resident"
  },
  "MATH108": {
    "title": "Elementary and Intermediate Algebra",
    "credits": 3,
    "prereqs": "Assessment - Mathematics with a score of 09 or SAT Section Math with a score of 470 or ACT Math with a score of 17 or (pre2016 post1995)SAT Math with a score of 470",
    "offered": "Resident"
  },
  "MATH109": {
    "title": "Beginning/Intermediate Algebra",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MATH110": {
    "title": "Intermediate Algebra",
    "credits": 3,
    "prereqs": "MATH 100 or Placement Score-Math with a score of 070 or (CLST 103 and Assessment - Mathematics with a score of 23) or MATH 105",
    "offered": "Resident and Online"
  },
  "MATH110L": {
    "title": "Intermediate Algebra Companion Lab",
    "credits": 1,
    "prereqs": "MATH 110 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "MATH112": {
    "title": "Technical Mathematics",
    "credits": 3,
    "prereqs": "(pre2016 post1995)SAT Math with a score of 490 or SAT Section Math with a score of 490 or ACT Math with a score of 18 or MATH 100",
    "offered": "Online"
  },
  "MATH114": {
    "title": "Quantitative Reasoning",
    "credits": 3,
    "prereqs": "MATH 100 or Placement Score-Math with a score of 070 or (CLST 103 and Assessment - Mathematics with a score of 23) or MATH 105",
    "offered": "Resident and Online"
  },
  "MATH115": {
    "title": "Mathematics for Liberal Arts",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 075 or (CLST 103 and Assessment - Mathematics with a score of 23 and Assessment - Mathematics II with a score of 15) or MATH 105 or MATH 108 or MATH 110 or MATH 2XX",
    "offered": "Resident and Online"
  },
  "MATH116": {
    "title": "Logic and Social Reasoning",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 075 or Assessment - Mathematics II with a score of 15 or MATH 110 or MATH 114 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 131 or MATH 201 or BUSI 230 or MATH 2XX",
    "offered": "Resident and Online"
  },
  "MATH117": {
    "title": "Elements of Mathematics",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 075 or (CLST 103 and Assessment - Mathematics II with a score of 15 and Assessment - Mathematics with a score of 23) or MATH 108 or MATH 110 or MATH 121 or MATH 126 or MATH 128 or MATH 131 or MATH 2XX",
    "offered": "Resident and Online"
  },
  "MATH121": {
    "title": "College Algebra",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 075 or (CLST 103 and Assessment - Mathematics with a score of 23 and Assessment - Mathematics II with a score of 15) or MATH 108 or MATH 110 or MATH 126 or MATH 128 or MATH 131",
    "offered": "Resident and Online"
  },
  "MATH122": {
    "title": "Trigonometry",
    "credits": 3,
    "prereqs": "MATH 121",
    "offered": "Resident"
  },
  "MATH123": {
    "title": "Introduction to Discrete Mathematics",
    "credits": 3
  },
  "MATH125": {
    "title": "Finite Mathematics",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 075 or (CLST 103 and Assessment - Mathematics with a score of 23 and Assessment - Mathematics II with a score of 15) or MATH 108 or MATH 110 or MATH 126 or BUSI 128 or MATH 131",
    "offered": "Resident"
  },
  "MATH126": {
    "title": "Elementary Calculus for Business and Science",
    "credits": 3,
    "prereqs": "MATH 121 or ACT Math with a score of 25 or (pre2016 post1995)SAT Math with a score of 570 or SAT Section Math with a score of 590",
    "offered": "Resident and Online"
  },
  "MATH128": {
    "title": "Elementary Functions and Coordinate Geometry",
    "credits": 4,
    "prereqs": "McGraw Hill ALEKS PPL with a score of 68 or ACT Math with a score of 25 or (pre2016 post1995)SAT Math with a score of 570 or SAT Section Math with a score of 590 or MATH 121",
    "offered": "Resident and Online"
  },
  "MATH130": {
    "title": "Advanced Technical Mathematics",
    "credits": 3,
    "prereqs": "(MATH 110 or Placement Score-Math with a score of 075) and AVIA 102 (may be taken concurrently)",
    "offered": "Resident"
  },
  "MATH131": {
    "title": "Calculus and Analytic Geometry I",
    "credits": 4,
    "prereqs": "((MATH 128 or McGraw Hill ALEKS PPL with a score of 78 or (pre2016 post1995)SAT Math with a score of 620 or SAT Section Math with a score of 620 or ACT Math with a score of 27) and (MATH 121 or (pre2016 post1995)SAT Math with a score of 570 or SAT Section Math with a score of 590 or ACT Math with a score of 25))",
    "note": "(MATH 133 is required for mathematics major or minors).",
    "offered": "Resident and Online"
  },
  "MATH132": {
    "title": "Calculus and Analytic Geometry II",
    "credits": 4,
    "prereqs": "MATH 131 or ENGR 131",
    "offered": "Resident and Online"
  },
  "MATH133": {
    "title": "Calculus with Mathematica Lab",
    "credits": 1,
    "prereqs": "MATH 131 (may be taken concurrently) or ENGR 131 (may be taken concurrently)",
    "offered": "Resident"
  },
  "MATH200": {
    "title": "Introduction to Mathematical Reasoning",
    "credits": 3,
    "prereqs": "MATH 132",
    "offered": "Resident"
  },
  "MATH201": {
    "title": "Introduction to Probability and Statistics",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 075 or (CLST 103 and Assessment - Mathematics with a score of 23 and Assessment - Mathematics II with a score of 15) or MATH 105 or MATH 108 or MATH 110 or MATH 115 or MATH 116 or MATH 121 or MATH 126 or MATH 128 or MATH 131 or MATH 1XX or MATH 2XX",
    "offered": "Resident and Online"
  },
  "MATH202": {
    "title": "Professional Statistics",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 75 or MATH 110 or (CLST 103 and Assessment - Mathematics with a score of 23 and Assessment - Mathematics II with a score of 15)",
    "offered": "Resident and Online"
  },
  "MATH211": {
    "title": "Introduction to Statistical Analysis",
    "credits": 3,
    "prereqs": "MATH 131",
    "note": "Only one of MATH 201 or 211 may be taken for credit. MATH 201 may not be substituted for MATH 211 degree completion program requirement.",
    "offered": "Resident and Online"
  },
  "MATH217": {
    "title": "Elementary Geometry",
    "credits": 3,
    "prereqs": "Placement Score-Math with a score of 75 or (CLST 103 and Assessment - Mathematics with a score of 23 and Assessment - Mathematics II with a score of 15) or MATH 108 or MATH 110 or MATH 121 or MATH 126 or MATH 128 or MATH 131",
    "offered": "Resident and Online"
  },
  "MATH221": {
    "title": "Applied Linear Algebra",
    "credits": 3,
    "prereqs": "MATH 132 and ENGR 133",
    "offered": "Resident"
  },
  "MATH231": {
    "title": "Calculus and Analytical Geometry III",
    "credits": 4,
    "prereqs": "MATH 132",
    "offered": "Resident"
  },
  "MATH250": {
    "title": "Introduction to Discrete Mathematics",
    "credits": 3,
    "prereqs": "MATH 121 or MATH 128 or MATH 131 or ENGR 131",
    "offered": "Resident and Online"
  },
  "MATH299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "MATH301": {
    "title": "Methods of Operations Research",
    "credits": 3,
    "prereqs": "MATH 311 or ENGR 210",
    "offered": "Resident"
  },
  "MATH302": {
    "title": "Introduction to Experimental Design in Statistics",
    "credits": 3,
    "prereqs": "MATH 311 or ENGR 210",
    "offered": "Resident"
  },
  "MATH304": {
    "title": "Financial Mathematics",
    "credits": 3,
    "prereqs": "MATH 132",
    "offered": "Resident"
  },
  "MATH305": {
    "title": "Modern Geometry",
    "credits": 3,
    "prereqs": "MATH 200",
    "offered": "Resident"
  },
  "MATH307": {
    "title": "Introductory Number Theory",
    "credits": 3,
    "prereqs": "MATH 200",
    "offered": "Resident"
  },
  "MATH311": {
    "title": "Probability and Statistics I",
    "credits": 3,
    "prereqs": "MATH 231",
    "offered": "Resident"
  },
  "MATH321": {
    "title": "Linear Algebra",
    "credits": 3,
    "prereqs": "MATH 200",
    "offered": "Resident"
  },
  "MATH331": {
    "title": "Complex Variables",
    "credits": 3,
    "prereqs": "MATH 231",
    "offered": "Resident"
  },
  "MATH332": {
    "title": "Advanced Calculus",
    "credits": 3,
    "prereqs": "MATH 231 and (MATH 200 or MATH 250)",
    "offered": "Resident"
  },
  "MATH334": {
    "title": "Differential Equations",
    "credits": 3,
    "prereqs": "MATH 231 and PHYS 231",
    "offered": "Resident"
  },
  "MATH345": {
    "title": "Introduction to the History of Mathematics",
    "credits": 3,
    "prereqs": "MATH 301 or MATH 302 or MATH 305 or MATH 307 or MATH 311 or MATH 321 or MATH 331 or MATH 332 or MATH 334 or MATH 350 or MATH 352 or MATH 400 or MATH 401 or MATH 405 or MATH 411 or MATH 419 or MATH 420 or MATH 421 or MATH 422 or MATH 423 or MATH 431 or MATH 450 or MATH 495 or MATH 497",
    "offered": "Online"
  },
  "MATH350": {
    "title": "Discrete Mathematics",
    "credits": 3,
    "prereqs": "MATH 200 or MATH 250",
    "offered": "Resident and Online"
  },
  "MATH352": {
    "title": "Numerical Analysis",
    "credits": 3,
    "prereqs": "MATH 321 or MATH 221",
    "offered": "Resident"
  },
  "MATH400": {
    "title": "History of Mathematics",
    "credits": 3,
    "prereqs": "MATH 301 or MATH 302 or MATH 305 or MATH 307 or MATH 321 or MATH 331 or MATH 332 or MATH 334 or MATH 350 or MATH 401",
    "offered": "Resident"
  },
  "MATH401": {
    "title": "Introduction to Mathematical Statistics",
    "credits": 3,
    "prereqs": "MATH 211 and MATH 231",
    "offered": "Resident"
  },
  "MATH402": {
    "title": "Linear Regression",
    "credits": 3,
    "prereqs": "MATH 211 or MATH 311 or ENGR 210",
    "offered": "Resident"
  },
  "MATH405": {
    "title": "Fundamentals of Modern Geometry",
    "credits": 3,
    "prereqs": "MATH 250",
    "offered": "Online"
  },
  "MATH410": {
    "title": "Matrix and Linear Algebra",
    "credits": 3,
    "prereqs": "MATH 132 and MATH 250",
    "offered": "Online"
  },
  "MATH411": {
    "title": "Probability and Statistics II",
    "credits": 3,
    "prereqs": "MATH 311",
    "offered": "Resident"
  },
  "MATH419": {
    "title": "Teaching Mathematics in Secondary Schools",
    "credits": 3,
    "prereqs": "(MATH 301 or MATH 302 or MATH 305 or MATH 321 or MATH 331 or MATH 332 or MATH 334 or MATH 350 or MATH 401) and Undergraduate Initial Gate 2 with a score of 5 and (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5)",
    "note": "Must be taken the semester prior to student teaching in mathematics.",
    "offered": "Resident and Online"
  },
  "MATH420": {
    "title": "Teaching Mathematics in Secondary Schools Practicum",
    "credits": 0,
    "prereqs": "MATH 419 (may be taken concurrently) and Undergraduate Initial Gate 2 with a score of 5 and (Background Check Clearance with a score of 5 or Background Clear International with a score of 5 or Background Clear Out of State with a score of 5 or Background Clear Virginia with a score of 5)",
    "offered": "Resident"
  },
  "MATH421": {
    "title": "Elementary Abstract Algebra I",
    "credits": 3,
    "prereqs": "MATH 321",
    "offered": "Resident"
  },
  "MATH422": {
    "title": "Elementary Abstract Algebra II",
    "credits": 3,
    "prereqs": "MATH 421",
    "offered": "Resident"
  },
  "MATH423": {
    "title": "Abstract Algebraic Structures",
    "credits": 3,
    "prereqs": "MATH 410",
    "offered": "Online"
  },
  "MATH430": {
    "title": "Multivariable Calculus",
    "credits": 3,
    "prereqs": "MATH 132 and MATH 250",
    "offered": "Online"
  },
  "MATH431": {
    "title": "Real Analysis",
    "credits": 3,
    "prereqs": "MATH 231 and MATH 321",
    "offered": "Resident"
  },
  "MATH432": {
    "title": "Applied Differential Equations",
    "credits": 3,
    "prereqs": "MATH 231 or MATH 430",
    "offered": "Online"
  },
  "MATH441": {
    "title": "Probability I",
    "credits": 3,
    "prereqs": "MATH 132",
    "offered": "Online"
  },
  "MATH442": {
    "title": "Probability II",
    "credits": 3,
    "prereqs": "MATH 441",
    "offered": "Online"
  },
  "MATH450": {
    "title": "Mathematics Capstone Seminar",
    "credits": 2,
    "prereqs": "MATH 421 (may be taken concurrently) and MATH 431 (may be taken concurrently) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "MATH460": {
    "title": "Mathematical Modeling and Simulation",
    "credits": 3,
    "prereqs": "MATH 334 or MATH 432",
    "offered": "Online"
  },
  "MATH495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "MATH497": {
    "title": "Special Topics in Mathematics",
    "credits": 1,
    "offered": "Resident"
  },
  "MATH500": {
    "title": "Calculus Concepts",
    "credits": 3,
    "prereqs": "Elem Func&Coord Geom-MATH128 with a score of 3",
    "offered": "Online"
  },
  "MATH505": {
    "title": "Fundamentals of Modern Geometry",
    "credits": 3,
    "prereqs": "MATH 500 or (Discrete Math-MATH250 with a score of 5 and Calc & Analyt Geom II-MATH132 with a score of 5)",
    "offered": "Online"
  },
  "MATH510": {
    "title": "Applied Linear Algebra",
    "credits": 3,
    "prereqs": "MATH 500 or (Discrete Math-MATH250 with a score of 5 and Calc & Analyt Geom II-MATH132 with a score of 5)",
    "offered": "Online"
  },
  "MATH520": {
    "title": "Abstract Algebraic Systems",
    "credits": 3,
    "prereqs": "MATH 510",
    "offered": "Online"
  },
  "MATH530": {
    "title": "Foundations of Multivariable Calculus",
    "credits": 3,
    "prereqs": "MATH 510",
    "offered": "Online"
  },
  "MATH545": {
    "title": "History of Mathematics",
    "credits": 3,
    "prereqs": "Calc & Analyt Geom II-MATH132 with a score of 3",
    "offered": "Online"
  },
  "MATH595": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Online"
  },
  "MATH597": {
    "title": "Seminar",
    "credits": 3,
    "offered": "Online"
  },
  "MENT100": {
    "title": "Foundations for Academic Success",
    "credits": 3,
    "offered": "Resident"
  },
  "MENT101": {
    "title": "Mentoring for University Transition",
    "credits": 1,
    "offered": "Resident"
  },
  "MGMT501": {
    "title": "Executive Leadership and Management",
    "credits": 3,
    "offered": "Online"
  },
  "MGMT527": {
    "title": "Leading Project Teams",
    "credits": 3,
    "prereqs": "BMAL 590 or WRIT 601 or Bus Cmn Pro Cpnt/27hr BUSI Req with a score of 3",
    "offered": "Online"
  },
  "MGMT602": {
    "title": "Non-Profit Management",
    "credits": 3,
    "offered": "Online"
  },
  "MGMT610": {
    "title": "Risk Management",
    "credits": 3,
    "prereqs": "BUSI 681 or ENGR 500 or Admission to MBA/DBA Six Sigma with a score of 5",
    "offered": "Online"
  },
  "MGMT620": {
    "title": "Project Evaluation &amp; Assessment",
    "credits": 3,
    "prereqs": "BUSI 681",
    "offered": "Online"
  },
  "MGMT625": {
    "title": "Project Planning &amp; Scheduling",
    "credits": 3,
    "prereqs": "BUSI 680 and BUSI 681",
    "offered": "Online"
  },
  "MGMT645": {
    "title": "Quality Management",
    "credits": 3,
    "prereqs": "BUSI 680 or BUSI 681 or ENGR 500 or Admission to MBA/DBA Six Sigma with a score of 5",
    "offered": "Online"
  },
  "MGMT651": {
    "title": "Agile Project Management",
    "credits": 3,
    "prereqs": "BUSI 681 or Admission to MBA/DBA Six Sigma with a score of 5",
    "offered": "Online"
  },
  "MGMT652": {
    "title": "Lean Six Sigma",
    "credits": 3,
    "offered": "Online"
  },
  "MGMT690": {
    "title": "Capstone, Project Management",
    "credits": 3,
    "prereqs": "MGMT 620 and MGMT 625 and MGMT 645",
    "offered": "Resident and Online"
  },
  "MILT275": {
    "title": "The Resilient Warrior",
    "credits": 3,
    "prereqs": "PSYC 101 or PSYC 210",
    "offered": "Online"
  },
  "MILT325": {
    "title": "Resilient Marriage and Family",
    "credits": 3,
    "prereqs": "MILT 275",
    "offered": "Online"
  },
  "MILT375": {
    "title": "Military Career and Community Transition",
    "credits": 3,
    "prereqs": "MILT 275",
    "offered": "Online"
  },
  "MILT475": {
    "title": "Military Mental Health and Behavioral Health",
    "credits": 3,
    "prereqs": "MILT 275",
    "offered": "Online"
  },
  "MILT525": {
    "title": "Advanced Resilience for Leaders and Caregivers",
    "credits": 3,
    "offered": "Online"
  },
  "MILT575": {
    "title": "Resilient Marriage and Family",
    "credits": 3,
    "offered": "Online"
  },
  "MILT625": {
    "title": "Military Career and Community Transition",
    "credits": 3,
    "offered": "Online"
  },
  "MILT675": {
    "title": "Advanced Military Mental and Behavioral Health",
    "credits": 3,
    "offered": "Online"
  },
  "MISC001": {
    "title": "Introduction to Applied Military Leadership I",
    "credits": 1,
    "offered": "Resident"
  },
  "MISC002": {
    "title": "Introduction to Applied Military Leadership II",
    "credits": 1,
    "prereqs": "MISC 001",
    "offered": "Resident"
  },
  "MISC003": {
    "title": "Intermediate Applied Military Leadership I",
    "credits": 1,
    "prereqs": "MISC 002",
    "offered": "Resident"
  },
  "MISC004": {
    "title": "Intermediate Applied Military Leadership II",
    "credits": 1,
    "prereqs": "MISC 003",
    "offered": "Resident"
  },
  "MISC005": {
    "title": "Advanced Applied Military Leadership I",
    "credits": 1,
    "prereqs": "MISC 004",
    "offered": "Resident"
  },
  "MISC006": {
    "title": "Advanced Applied Military Leadership II",
    "credits": 1,
    "prereqs": "MISC 005",
    "offered": "Resident"
  },
  "MISC007": {
    "title": "Advanced Applied Military Leadership III",
    "credits": 1,
    "prereqs": "MISC 006",
    "offered": "Resident"
  },
  "MISC008": {
    "title": "Advanced Applied Military Leadership IV",
    "credits": 1,
    "prereqs": "MISC 007",
    "offered": "Resident"
  },
  "MISC101": {
    "title": "Introduction to the Army",
    "credits": 1,
    "offered": "Resident"
  },
  "MISC102": {
    "title": "Foundations of Leadership",
    "credits": 1,
    "prereqs": "MISC 101",
    "offered": "Resident"
  },
  "MISC201": {
    "title": "Leadership and Ethics",
    "credits": 1,
    "prereqs": "MISC 102",
    "offered": "Resident"
  },
  "MISC202": {
    "title": "Army Doctrine and Decision Making",
    "credits": 1,
    "prereqs": "MISC 201",
    "offered": "Resident"
  },
  "MISC211": {
    "title": "Basic Military Skills I",
    "credits": 1
  },
  "MISC221": {
    "title": "Basic Military Skills II",
    "credits": 1
  },
  "MISC300": {
    "title": "Methods of Military Analysis",
    "credits": 3,
    "offered": "Online"
  },
  "MISC301": {
    "title": "Training Management and Warfighting Functions",
    "credits": 2,
    "prereqs": "MISC 202",
    "offered": "Resident"
  },
  "MISC302": {
    "title": "Applied Leadership in Small Unit Operations",
    "credits": 2,
    "prereqs": "MISC 301",
    "offered": "Resident"
  },
  "MISC310": {
    "title": "Tactical Concepts I",
    "credits": 2
  },
  "MISC320": {
    "title": "Tactical Concepts II",
    "credits": 2
  },
  "MISC350": {
    "title": "Military Leaders and Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "MISC401": {
    "title": "The Army Officer",
    "credits": 2,
    "prereqs": "MISC 302",
    "offered": "Resident"
  },
  "MISC402": {
    "title": "Company Grade Leadership",
    "credits": 2,
    "prereqs": "MISC 401",
    "offered": "Resident"
  },
  "MISC410": {
    "title": "Ethics, Professionalism &amp; Mili",
    "credits": 2
  },
  "MISC420": {
    "title": "Military Leadership",
    "credits": 2
  },
  "MISC490": {
    "title": "Research in Military Doctrine",
    "credits": 3,
    "prereqs": "MISC 300",
    "offered": "Online"
  },
  "MISC491": {
    "title": "Senior Capstone",
    "credits": 3,
    "prereqs": "MISC 300",
    "offered": "Online"
  },
  "MISC495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "MISC497": {
    "title": "Special Topics in Military Science",
    "credits": 1,
    "offered": "Resident"
  },
  "MISC501": {
    "title": "Research, Doctrine, and Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "MISC502": {
    "title": "Command Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "MISC503": {
    "title": "Virtues of Ethical Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "MISC504": {
    "title": "Leadership in Context",
    "credits": 3,
    "offered": "Online"
  },
  "MISC520": {
    "title": "Military Intelligence",
    "credits": 3,
    "offered": "Online"
  },
  "MISC530": {
    "title": "Military Operations",
    "credits": 3,
    "offered": "Online"
  },
  "MISC540": {
    "title": "Military Logistics",
    "credits": 3,
    "offered": "Online"
  },
  "MISC550": {
    "title": "Military Planning",
    "credits": 3,
    "offered": "Online"
  },
  "MISC695": {
    "title": "Directed Research in Military Science",
    "credits": 3,
    "offered": "Online"
  },
  "MISC697": {
    "title": "Special Topics in Military Science",
    "credits": 3,
    "offered": "Online"
  },
  "MLAN301": {
    "title": "Instructional Design in Teaching Modern Languages",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MLAN419": {
    "title": "Methodology and Curriculum in Teaching Modern Languages",
    "credits": 2,
    "prereqs": "MLAN 403",
    "note": "Must be taken before student teaching. May not be counted toward the Modern Language Major. Offered fall semester.",
    "offered": "Resident"
  },
  "MLAN420": {
    "title": "Methods Teaching Practicum",
    "credits": 1,
    "prereqs": "MLAN 403",
    "offered": "Resident"
  },
  "MLAN453": {
    "title": "World Languages",
    "credits": 3,
    "prereqs": "MLAN 213 and MLAN 305",
    "note": "(Offered spring semester)",
    "offered": "Resident"
  },
  "MLAN495": {
    "title": "Directed Research",
    "credits": 1,
    "note": "(Offered on demand)",
    "offered": "Resident"
  },
  "MLAN497": {
    "title": "Special topics in TES/FL",
    "credits": 3,
    "offered": "Resident"
  },
  "MLAN499": {
    "title": "TES/FL Internship",
    "credits": 1,
    "note": "(Offered on demand)",
    "offered": "Resident"
  },
  "MLAN519": {
    "title": "Second Language Acquisition",
    "credits": 3,
    "offered": "Online"
  },
  "MRKT600": {
    "title": "Applied Market Research",
    "credits": 3,
    "prereqs": "BUSI 520 and BUSI 614",
    "offered": "Online"
  },
  "MRKT640": {
    "title": "Consumer Behavior",
    "credits": 3,
    "prereqs": "BUSI 520",
    "offered": "Online"
  },
  "MRKT661": {
    "title": "Ethical and Legal Issues in Marketing",
    "credits": 3,
    "prereqs": "BUSI 520 and MRKT 640",
    "offered": "Online"
  },
  "MRKT670": {
    "title": "Brand Management",
    "credits": 3,
    "prereqs": "BUSI 520 and BUSI 612",
    "offered": "Online"
  },
  "MRKT690": {
    "title": "Marketing Strategy Capstone",
    "credits": 3,
    "prereqs": "MRKT 661 and MRKT 600 and MRKT 670 (may be taken concurrently)",
    "offered": "Online"
  },
  "MSCI500": {
    "title": "Foundations of Biomedical Sciences",
    "credits": 3,
    "offered": "Online"
  },
  "MSCI505": {
    "title": "Principle of Medical Genetics",
    "credits": 3,
    "prereqs": "MSCI 510 or BIOM 523 and MSCI 512 or BIOM 524 and MSCI 520 or BIOM 525 and MSCI 522 or BIOM 526",
    "offered": "Online"
  },
  "MSCI510": {
    "title": "Foundations of Medical Anatomy I",
    "credits": 4,
    "offered": "Online"
  },
  "MSCI512": {
    "title": "Foundations of Medical Anatomy II",
    "credits": 2,
    "prereqs": "MSCI 510 or BIOM 523",
    "offered": "Online"
  },
  "MSCI520": {
    "title": "Principles of Physiology I",
    "credits": 4,
    "offered": "Online"
  },
  "MSCI522": {
    "title": "Principles of Physiology II",
    "credits": 1,
    "prereqs": "MSCI 520 or BIOM 525",
    "offered": "Online"
  },
  "MSCI530": {
    "title": "Introduction to Human Metabolism and Disease",
    "credits": 4,
    "prereqs": "(MSCI 510 or BIOM 523) and (MSCI 512 or BIOM 524) and (MSCI 520 or BIOM 525) and (MSCI 522 or BIOM 526)",
    "offered": "Online"
  },
  "MSCI640": {
    "title": "Ethics in Health Sciences",
    "credits": 3,
    "prereqs": "(MSCI 510 or BIOM 523) and (MSCI 512 or BIOM 524) and (MSCI 520 or BIOM 525) and (MSCI 522 or BIOM 526)",
    "offered": "Online"
  },
  "MSCI650": {
    "title": "Fundamentals of Neuroscience",
    "credits": 3,
    "prereqs": "(MSCI 510 or BIOM 523) and (MSCI 512 or BIOM 524) and (MSCI 520 or BIOM 525) and (MSCI 522 or BIOM 526)",
    "offered": "Online"
  },
  "MSCI660": {
    "title": "Principles of Cellular Biology",
    "credits": 4,
    "prereqs": "(MSCI 510 or BIOM 523) and (MSCI 512 or BIOM 524) and (MSCI 520 or BIOM 525) and (MSCI 522 or BIOM 526)",
    "offered": "Online"
  },
  "MSCI670": {
    "title": "Principles of Immunobiology",
    "credits": 3,
    "prereqs": "(MSCI 510 or BIOM 523) and (MSCI 512 or BIOM 524) and (MSCI 520 or BIOM 525) and (MSCI 522 or BIOM 526)",
    "offered": "Online"
  },
  "MSCI680": {
    "title": "Pathogens and Human Diseases",
    "credits": 3,
    "prereqs": "(MSCI 510 or BIOM 523) and (MSCI 512 or BIOM 524) and (MSCI 520 or BIOM 525) and (MSCI 522 or BIOM 526)",
    "offered": "Online"
  },
  "MSCI690": {
    "title": "Fundamentals of Human Pathology",
    "credits": 3,
    "prereqs": "(MSCI 510 or BIOM 523) and (MSCI 512 or BIOM 524) and (MSCI 520 or BIOM 525) and (MSCI 522 or BIOM 526)",
    "offered": "Online"
  },
  "MSPS500": {
    "title": "Statistics and Research Design I",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS505": {
    "title": "Statistics and Research Design II",
    "credits": 3,
    "prereqs": "(MSPS 500 or PSYC 510) and Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS513": {
    "title": "Social Psychology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS521": {
    "title": "Psychology and Christianity Integration",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Online"
  },
  "MSPS531": {
    "title": "Cognitive Psychology: Theories &amp; Methodology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS540": {
    "title": "Developmental Psychology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS570": {
    "title": "Conditioning and Learning",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS580": {
    "title": "Developmental Neuropsychology",
    "credits": 3,
    "prereqs": "(MSPS 540 or PSYC 525) and Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS610": {
    "title": "Developmental Psychopathology",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS625": {
    "title": "Behavior Modification",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS627": {
    "title": "Child Development",
    "credits": 3,
    "prereqs": "(MSPS 540 or PSYC 525) and Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS637": {
    "title": "Adolescent Development",
    "credits": 3
  },
  "MSPS646": {
    "title": "Organizational Behavior",
    "credits": 3,
    "prereqs": "(MSPS 526 or PSYC 516) and Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS647": {
    "title": "Adult Development",
    "credits": 3,
    "prereqs": "(MSPS 540 or PSYC 525) and Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS657": {
    "title": "Geropsychology",
    "credits": 3,
    "prereqs": "(MSPS 540 or PSYC 525) and Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS658": {
    "title": "Leadership Theories and Practice",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS689": {
    "title": "Thesis Proposal and Research",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MSPS691": {
    "title": "Master's Thesis",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Research Methods with a score of 3 and Additional Psychology with a score of 3",
    "offered": "Resident"
  },
  "MUSC000": {
    "title": "Undergraduate Music Assessment",
    "credits": 0,
    "offered": "Resident"
  },
  "MUSC010": {
    "title": "Graduate Music Assessment",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "MUSC100": {
    "title": "Fundamental Harmony and Musicianship",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC103": {
    "title": "Music Appreciation",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MUSC105": {
    "title": "Harmonic Practices and Theory I",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC106": {
    "title": "Harmonic Practices and Theory II",
    "credits": 3,
    "prereqs": "MUSC 105 or WMUS 103 or WRSP 103",
    "note": "Group or private piano instruction for students needing to successfully pass the Piano Proficiency Examination (PPE).",
    "offered": "Resident"
  },
  "MUSC107": {
    "title": "Musicianship I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC108": {
    "title": "Musicianship II",
    "credits": 1,
    "prereqs": "(MUSC 105 or WMUS 103 or WRSP 103) and (MUSC 107 or WMUS 105 or WRSP 105)",
    "offered": "Resident"
  },
  "MUSC109": {
    "title": "Harmonic Practices and Musicianship for Musical Theatre",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC111": {
    "title": "Group Piano I",
    "credits": 1,
    "note": "(Lessons meet two days each week)",
    "offered": "Resident"
  },
  "MUSC112": {
    "title": "Group Piano II",
    "credits": 1,
    "note": "(Lessons meet two days each week)",
    "offered": "Resident"
  },
  "MUSC118": {
    "title": "Vocal Techniques for Musical Theatre I",
    "credits": 1,
    "note": "Student must be majoring in BFA in Acting or BFA in Musical Theatre",
    "offered": "Resident"
  },
  "MUSC119": {
    "title": "Vocal Techniques for Musical Theatre II",
    "credits": 1,
    "prereqs": "MUSC 118",
    "offered": "Resident"
  },
  "MUSC120": {
    "title": "Group Voice I",
    "credits": 1,
    "note": "(Lessons meet two days each week)",
    "offered": "Resident"
  },
  "MUSC121": {
    "title": "Voice (Freshman)",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC122": {
    "title": "Voice (Freshman)",
    "credits": 1,
    "prereqs": "MUSC 121",
    "offered": "Resident"
  },
  "MUSC125": {
    "title": "Vocal Techniques for Musical Theatre",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC133": {
    "title": "Contemporary Techniques in Composition I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC139": {
    "title": "Contemporary Techniques in Composition II",
    "credits": 1,
    "prereqs": "MUSC 133",
    "offered": "Resident"
  },
  "MUSC141": {
    "title": "Private Piano (Freshman)",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC142": {
    "title": "Private Piano (Freshman)",
    "credits": 1,
    "prereqs": "MUSC 141",
    "offered": "Resident"
  },
  "MUSC143": {
    "title": "Jazz Improvisation and Lab I",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC150": {
    "title": "Group Guitar I",
    "credits": 1,
    "note": "(Lessons meet two days each week)",
    "offered": "Resident"
  },
  "MUSC151": {
    "title": "Guitar, Strings, Brass, Woodwinds, Percussion Freshman",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC152": {
    "title": "Guitar, Strings, Brass, Woodwinds, Percussion Freshman",
    "credits": 1,
    "prereqs": "MUSC 151",
    "offered": "Resident"
  },
  "MUSC178": {
    "title": "The Worship Choir I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC179": {
    "title": "Classical Guitar Ensemble I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC180": {
    "title": "University Chorale I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC181": {
    "title": "Concert Choir I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC182": {
    "title": "Chamber Singers I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC183": {
    "title": "Jazz Ensemble I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC184": {
    "title": "Marching Band I",
    "credits": 1,
    "note": "Fall semesters only.",
    "offered": "Resident"
  },
  "MUSC185": {
    "title": "Symphony Orchestra I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC186": {
    "title": "Brass Choir I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC187": {
    "title": "University Band I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC188": {
    "title": "Woodwind Choir I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC189": {
    "title": "Celebration Choir",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC192": {
    "title": "Percussion Ensemble I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC193": {
    "title": "Chamber Music Ensemble I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC194": {
    "title": "Wind Symphony I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC200": {
    "title": "Music, Art, Worship and Culture",
    "credits": 3,
    "prereqs": "ENGL 101 (may be taken concurrently)",
    "offered": "Resident"
  },
  "MUSC201": {
    "title": "Creative Worship",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC202": {
    "title": "Old and New Testament Music and Worship",
    "credits": 3,
    "prereqs": "(MUSC 200 or WRSP 101) and (MUSC 201 or WRSP 102)",
    "note": "Offered Fall semester.",
    "offered": "Resident"
  },
  "MUSC203": {
    "title": "Commercial Music Theory and Harmonic Practices I",
    "credits": 2,
    "prereqs": "(MUSC 105 or WRSP 103 or WMUS 103) and (MUSC 106 or WMUS 104 or WRSP 104)",
    "offered": "Resident"
  },
  "MUSC204": {
    "title": "Commercial Music Theory and Harmonic Practices II",
    "credits": 2,
    "prereqs": "(MUSC 105 or WMUS 103 or WRSP 103) and (MUSC 106 or WRSP 104 or WMUS 104) and (MUSC 203 or WMUS 203)",
    "note": "Offered Spring semester.",
    "offered": "Resident"
  },
  "MUSC205": {
    "title": "Chromatic Harmony",
    "credits": 3,
    "prereqs": "(MUSC 105 or WRSP 103 or WMUS 103) and (MUSC 106 or WMUS 104 or WRSP 104)",
    "offered": "Resident"
  },
  "MUSC206": {
    "title": "Chromatic Harmony II",
    "credits": 3,
    "prereqs": "(MUSC 105 or WRSP 103 or WMUS 103) and (MUSC 106 or WRSP 104 or WMUS 104) and MUSC 205",
    "note": "Offered Spring semester",
    "offered": "Resident"
  },
  "MUSC207": {
    "title": "Muscianship III",
    "credits": 1,
    "prereqs": "(MUSC 106 or WRSP 104 or WMUS 104) and (MUSC 108 or WMUS 106 or WRSP 106)",
    "offered": "Resident"
  },
  "MUSC208": {
    "title": "Muscianship IV",
    "credits": 1,
    "prereqs": "(MUSC 106 or WRSP 104 or WMUS 104) and (MUSC 108 or WRSP 106 or WMUS 106) and (MUSC 203 or WMUS 203 or WRSP 203 or MUSC 205) and (MUSC 207 or WMUS 205 or WRSP 205)",
    "offered": "Resident"
  },
  "MUSC209": {
    "title": "Supplemental Music Theory for Transfer Students",
    "credits": 2,
    "offered": "Resident"
  },
  "MUSC210": {
    "title": "Introduction to Music Education",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC213": {
    "title": "Survey of Popular and Jazz Literature Music",
    "credits": 3,
    "prereqs": "ENGL 101",
    "offered": "Resident"
  },
  "MUSC218": {
    "title": "Fundamentals of Music Production and Audio Engineering",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC220": {
    "title": "Group Voice II",
    "credits": 1,
    "prereqs": "MUSC 120 or WMUS 120 or WRSP 120",
    "note": "(Lessons meet two days each week)",
    "offered": "Resident"
  },
  "MUSC221": {
    "title": "Voice Sophomore",
    "credits": 1,
    "prereqs": "MUSC 122 or MUSC 121 or WMUS 125 or WRSP 125",
    "offered": "Resident"
  },
  "MUSC222": {
    "title": "Voice Sophomore",
    "credits": 1,
    "prereqs": "MUSC 221",
    "offered": "Resident"
  },
  "MUSC233": {
    "title": "Private Composition (Sophomore)",
    "credits": 1,
    "prereqs": "MUSC 139",
    "offered": "Resident"
  },
  "MUSC239": {
    "title": "Private Composition (Sophomore)",
    "credits": 1,
    "prereqs": "MUSC 233",
    "offered": "Resident"
  },
  "MUSC241": {
    "title": "Private Piano Sophomore",
    "credits": 1,
    "prereqs": "MUSC 142 or MUSC 141 or WMUS 145",
    "offered": "Resident"
  },
  "MUSC242": {
    "title": "Private Piano Sophomore",
    "credits": 1,
    "prereqs": "MUSC 241",
    "offered": "Resident"
  },
  "MUSC243": {
    "title": "Group Piano III",
    "credits": 1,
    "prereqs": "MUSC 112 or WMUS 140 or WRSP 140",
    "note": "(Lessons meet two days each week)",
    "offered": "Resident"
  },
  "MUSC244": {
    "title": "Group Piano IV",
    "credits": 1,
    "prereqs": "MUSC 243 or WMUS 240 or WRSP 141",
    "note": "(Lessons meet two days each week)",
    "offered": "Resident"
  },
  "MUSC247": {
    "title": "Jazz Piano I",
    "credits": 1,
    "prereqs": "MUSC 243",
    "offered": "Resident"
  },
  "MUSC248": {
    "title": "Jazz Guitar",
    "credits": 1
  },
  "MUSC250": {
    "title": "Group Guitar II",
    "credits": 1,
    "prereqs": "MUSC 150 or WMUS 150 or WRSP 150",
    "note": "(Lessons meet two days each week)",
    "offered": "Resident"
  },
  "MUSC251": {
    "title": "Guitar, Strings, Brass, Woodwinds, Percussion Sophomore",
    "credits": 1,
    "prereqs": "MUSC 151 or WMUS 155 or MUSC 152",
    "offered": "Resident"
  },
  "MUSC252": {
    "title": "Guitar, Strings, Brass, Woodwinds, Percussion Sophomore",
    "credits": 1,
    "prereqs": "MUSC 251",
    "offered": "Resident"
  },
  "MUSC262": {
    "title": "Musical Theatre Production I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC266": {
    "title": "Applied Worship Voice",
    "credits": 1,
    "prereqs": "MUSC 201 or MUSC 302",
    "offered": "Resident"
  },
  "MUSC267": {
    "title": "Applied Worship Instrument",
    "credits": 1,
    "prereqs": "MUSC 201 or MUSC 302",
    "offered": "Resident"
  },
  "MUSC268": {
    "title": "Worship Platform Techniques",
    "credits": 1,
    "prereqs": "MUSC 200 or MUSC 201",
    "offered": "Resident"
  },
  "MUSC269": {
    "title": "Worship Rhythm Section Methods",
    "credits": 1,
    "prereqs": "MUSC 200 or MUSC 201",
    "offered": "Resident"
  },
  "MUSC279": {
    "title": "Artist Presentation I",
    "credits": 3,
    "prereqs": "MUSC 373 or WRSP 373",
    "offered": "Resident"
  },
  "MUSC285": {
    "title": "The Worship Orchestra I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC286": {
    "title": "The Gospel Choir I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC287": {
    "title": "Jazz Guitar Ensemble I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC289": {
    "title": "The Worship Choir II",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "MUSC301": {
    "title": "Brass Pedagogy",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC302": {
    "title": "Commercial Music Techniques for Worship",
    "credits": 3,
    "prereqs": "MUSC 203 or MUSC 205",
    "offered": "Resident"
  },
  "MUSC303": {
    "title": "Dynamics of Leading Vocal Team and Ensemble",
    "credits": 3,
    "prereqs": "(MUSC 204 or WRSP 204 or WMUS 204) and (MUSC 302 or WMUS 302 or WRSP 302) and (MUSC 315)",
    "offered": "Resident"
  },
  "MUSC304": {
    "title": "Keyboard Pedagogy",
    "credits": 3,
    "note": "(Offered Spring semester)",
    "offered": "Resident"
  },
  "MUSC305": {
    "title": "Woodwind Pedagogy",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC306": {
    "title": "Form and Analysis",
    "credits": 3,
    "prereqs": "MUSC 204 or MUSC 206 or WMUS 204 or WRSP 204",
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC308": {
    "title": "Percussion Pedagogy",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC309": {
    "title": "Orchestration",
    "credits": 3,
    "prereqs": "MUSC 206 or MUSC 204",
    "note": "(Offered Spring semester)",
    "offered": "Resident"
  },
  "MUSC310": {
    "title": "Principles of Arranging",
    "credits": 3,
    "prereqs": "MUSC 330 and (MUSC 203 or MUSC 205)",
    "offered": "Resident"
  },
  "MUSC311": {
    "title": "Music History: Antiquity - 1750",
    "credits": 3,
    "prereqs": "(MUSC 105 or WRSP 103 or WMUS 103) and (MUSC 106 or WRSP 104 or WMUS 104)",
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC312": {
    "title": "Music History: Since 1750",
    "credits": 3,
    "prereqs": "(MUSC 105 or CMUS 105 or WRSP 103 or WMUS 103) and (MUSC 106 or CMUS 106 or WRSP 104 or WMUS 104)",
    "note": "(Offered Spring semester)",
    "offered": "Resident and Online"
  },
  "MUSC313": {
    "title": "History of Music and Worship",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC314": {
    "title": "Music in World Cultures",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC315": {
    "title": "Basic Conducting",
    "credits": 2,
    "prereqs": "(MUSC 105 or WRSP 103 or WMUS 103) and (MUSC 106 or WRSP 104 or WMUS 104)",
    "offered": "Resident"
  },
  "MUSC316": {
    "title": "Choral Conducting",
    "credits": 2,
    "prereqs": "MUSC 315 or WMUS 315 or WRSP 315",
    "offered": "Resident"
  },
  "MUSC317": {
    "title": "Instrumental Conducting",
    "credits": 2,
    "prereqs": "MUSC 315 or WMUS 315 or WRSP 315",
    "offered": "Resident"
  },
  "MUSC318": {
    "title": "Choral Arranging",
    "credits": 2,
    "prereqs": "MUSC 205 or MUSC 203",
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC319": {
    "title": "Choral Literature",
    "credits": 3,
    "prereqs": "MUSC 206",
    "note": "(Offered Fall semester, even numbered years, on demand)",
    "offered": "Resident"
  },
  "MUSC320": {
    "title": "Group Voice III",
    "credits": 1,
    "prereqs": "MUSC 220 or WMUS 220 or WRSP 220",
    "offered": "Resident"
  },
  "MUSC321": {
    "title": "Voice (Junior)",
    "credits": 1,
    "prereqs": "MUSC 221 or WMUS 225 or MUSC 222 or WRSP 225",
    "offered": "Resident"
  },
  "MUSC322": {
    "title": "Voice (Junior)",
    "credits": 1,
    "prereqs": "MUSC 321",
    "offered": "Resident"
  },
  "MUSC323": {
    "title": "Leadership, Philosophy, Music and Organization",
    "credits": 3,
    "prereqs": "(MUSC 201 or WRSP 102) and (MUSC 313 or WRSP 320)",
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC325": {
    "title": "Technology and Assessment for Music Education",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC326": {
    "title": "History of Jazz",
    "credits": 3,
    "prereqs": "MUSC 203",
    "offered": "Resident"
  },
  "MUSC327": {
    "title": "Jazz Styles and Analysis",
    "credits": 3,
    "prereqs": "MUSC 203",
    "offered": "Resident"
  },
  "MUSC329": {
    "title": "Fundamentals of Sound Reinforcement",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC330": {
    "title": "Music Technology: Notation and DAW",
    "credits": 3,
    "prereqs": "(MUSC 106 or WRSP 104 or WMUS 104) and (MUSC 108 or WRSP 106 or WMUS 106)",
    "offered": "Resident"
  },
  "MUSC331": {
    "title": "Composition I",
    "credits": 2,
    "prereqs": "(MUSC 204 or WRSP 204 or WMUS 204 or MUSC 206) and (MUSC 208 or WMUS 206 or WRSP 206)",
    "note": "May be repeated.",
    "offered": "Resident"
  },
  "MUSC332": {
    "title": "Composition II",
    "credits": 2,
    "prereqs": "MUSC 331",
    "note": "May be repeated.",
    "offered": "Resident"
  },
  "MUSC333": {
    "title": "Private Composition (Junior)",
    "credits": 1,
    "prereqs": "MUSC 239",
    "offered": "Resident"
  },
  "MUSC334": {
    "title": "Music Technology: Logic and ProTools",
    "credits": 3,
    "prereqs": "(MUSC 106 or WRSP 104 or WMUS 104) and (MUSC 108 or WRSP 106 or WMUS 106) and (MUSC 330 or WMUS 330 or WRSP 330)",
    "offered": "Resident"
  },
  "MUSC335": {
    "title": "Introduction to Film Scoring",
    "credits": 3,
    "prereqs": "MUSC 309 and MUSC 310",
    "offered": "Resident"
  },
  "MUSC336": {
    "title": "Orchestration for Film and Media",
    "credits": 3,
    "prereqs": "(MUSC 334 or CINE 271) and MUSC 335",
    "offered": "Resident"
  },
  "MUSC337": {
    "title": "Scoring Techniques for Film and Media",
    "credits": 3,
    "prereqs": "(MUSC 334 or CINE 271) and MUSC 335",
    "offered": "Resident"
  },
  "MUSC338": {
    "title": "Groove Writing",
    "credits": 2,
    "prereqs": "MUSC 334 or CINE 271",
    "offered": "Resident"
  },
  "MUSC339": {
    "title": "Private Composition (Junior)",
    "credits": 1,
    "prereqs": "MUSC 333",
    "offered": "Resident"
  },
  "MUSC340": {
    "title": "Technology and Media for Worship",
    "credits": 3,
    "prereqs": "MUSC 218 or MUSC 330",
    "offered": "Resident"
  },
  "MUSC341": {
    "title": "Private Piano (Junior)",
    "credits": 1,
    "prereqs": "MUSC 241 or WMUS 245",
    "offered": "Resident"
  },
  "MUSC342": {
    "title": "Private Piano (Junior)",
    "credits": 1,
    "prereqs": "MUSC 341",
    "offered": "Resident"
  },
  "MUSC343": {
    "title": "Jazz Improvisation and Lab II",
    "credits": 3,
    "prereqs": "MUSC 143",
    "offered": "Resident"
  },
  "MUSC345": {
    "title": "Group Piano V",
    "credits": 1,
    "prereqs": "MUSC 244 or WMUS 340",
    "note": "(Lessons meet two hours each week)",
    "offered": "Resident"
  },
  "MUSC346": {
    "title": "Group Piano VI",
    "credits": 1,
    "prereqs": "MUSC 345 or MUSC 245 or WMUS 440 or WRSP 340",
    "note": "(Lessons meet two hours each week)",
    "offered": "Resident"
  },
  "MUSC347": {
    "title": "Jazz Piano II",
    "credits": 1,
    "prereqs": "MUSC 247",
    "offered": "Resident"
  },
  "MUSC348": {
    "title": "Jazz Guitar II",
    "credits": 1
  },
  "MUSC349": {
    "title": "Ethnic Music Ensemble",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC350": {
    "title": "Group Guitar III",
    "credits": 1,
    "prereqs": "MUSC 250 or WMUS 250 or WRSP 250",
    "note": "(Lessons meet two hours each week)",
    "offered": "Resident"
  },
  "MUSC351": {
    "title": "Guitar, Strings, Brass, Woodwinds, Percussion Junior",
    "credits": 1,
    "prereqs": "MUSC 251 or MUSC 252 or WMUS 255",
    "offered": "Resident"
  },
  "MUSC352": {
    "title": "Guitar, Strings, Brass, Woodwinds, Percussion Junior",
    "credits": 1,
    "prereqs": "MUSC 351",
    "offered": "Resident"
  },
  "MUSC355": {
    "title": "Brass Techniques",
    "credits": 2,
    "note": "(Offered Spring semester)",
    "offered": "Resident"
  },
  "MUSC357": {
    "title": "Woodwind Techniques",
    "credits": 2,
    "prereqs": "(MUSC 105 or WMUS 103 or WRSP 103) and (MUSC 106 or WMUS 104 or WRSP 104)",
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC358": {
    "title": "The Musical Director",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MUSC360": {
    "title": "Commercial Improvisation Techniques",
    "credits": 2,
    "prereqs": "MUSC 203 or MUSC 205",
    "offered": "Resident"
  },
  "MUSC362": {
    "title": "Studio Producing, Mixing, and Audio Engineering",
    "credits": 3,
    "prereqs": "MUSC 218 and MUSC 329",
    "offered": "Resident"
  },
  "MUSC363": {
    "title": "Percussion Techniques",
    "credits": 2,
    "prereqs": "(MUSC 105 or WMUS 103 or WRSP 103) and (MUSC 106 or WMUS 104 or WRSP 104)",
    "note": "(Offered Spring semester)",
    "offered": "Resident"
  },
  "MUSC364": {
    "title": "Contemporary Styles Survey I",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC365": {
    "title": "Contemporary Styles Survey II",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC366": {
    "title": "Jazz Arranging",
    "credits": 3,
    "prereqs": "MUSC 330",
    "offered": "Resident"
  },
  "MUSC367": {
    "title": "Jazz Pedagogy",
    "credits": 3,
    "prereqs": "MUSC 360 and (MUSC 364 or MUSC 365)",
    "offered": "Resident"
  },
  "MUSC368": {
    "title": "Junior Commercial Music Program",
    "credits": 1,
    "prereqs": "MUSC 362",
    "offered": "Resident"
  },
  "MUSC369": {
    "title": "Principles of Audio Mixing and Producing",
    "credits": 3,
    "prereqs": "MUSC 362",
    "offered": "Resident"
  },
  "MUSC370": {
    "title": "Private Songwriting",
    "credits": 1,
    "prereqs": "MUSC 371 or WMUS 371 or WRSP 371",
    "offered": "Resident"
  },
  "MUSC371": {
    "title": "Survey of Songwriting Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC372": {
    "title": "Entrepreneurship in the Christian Music Community",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC373": {
    "title": "Artist Spiritual Formation",
    "credits": 3,
    "note": "Admission to songwriting or artist development programs.",
    "offered": "Resident"
  },
  "MUSC374": {
    "title": "String Techniques",
    "credits": 2,
    "prereqs": "(MUSC 105 or WMUS 103 or WRSP 103) and (MUSC 106 or WMUS 104 or WRSP 104)",
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC375": {
    "title": "String Pedagogy",
    "credits": 3,
    "prereqs": "MUSC 374",
    "note": "(Offered on demand)",
    "offered": "Resident"
  },
  "MUSC376": {
    "title": "Principles for Songwriting I",
    "credits": 2,
    "prereqs": "(MUSC 371 or WMUS 371 or WRSP 371) and (MUSC 330 or WRSP 330 or WMUS 330) and MUSC 334",
    "offered": "Resident"
  },
  "MUSC377": {
    "title": "Principles for Songwriting II",
    "credits": 2,
    "prereqs": "MUSC 376 or WMUS 332 or WRSP 332",
    "offered": "Resident"
  },
  "MUSC378": {
    "title": "Music Industry Process and Copyright Law",
    "credits": 3,
    "prereqs": "MUSC 372 or WRSP 372",
    "offered": "Resident"
  },
  "MUSC379": {
    "title": "Artist Presentation II",
    "credits": 3,
    "prereqs": "MUSC 279",
    "offered": "Resident"
  },
  "MUSC380": {
    "title": "Instrumental Overview",
    "credits": 2,
    "prereqs": "(MUSC 105 or WMUS 103 or WRSP 103) and (MUSC 106 or WMUS 104 or WRSP 104)",
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC381": {
    "title": "Guitar Literature",
    "credits": 2,
    "offered": "Resident"
  },
  "MUSC382": {
    "title": "Woodwind Literature",
    "credits": 2,
    "offered": "Resident"
  },
  "MUSC383": {
    "title": "Brass Literature",
    "credits": 2,
    "offered": "Resident"
  },
  "MUSC384": {
    "title": "Percussion Literature",
    "credits": 2,
    "offered": "Resident"
  },
  "MUSC385": {
    "title": "The Worship Orchestra II",
    "credits": 1,
    "prereqs": "MUSC 285 or WMUS 285 or WRSP 285",
    "offered": "Resident"
  },
  "MUSC386": {
    "title": "The Gospel Choir II",
    "credits": 1,
    "prereqs": "MUSC 286 or WMUS 286 or WRSP 286",
    "offered": "Resident"
  },
  "MUSC387": {
    "title": "Jazz Guitar Ensemble II",
    "credits": 1,
    "prereqs": "MUSC 287 or WMUS 287 or WRSP 287",
    "offered": "Resident"
  },
  "MUSC388": {
    "title": "String Literature",
    "credits": 2,
    "offered": "Resident"
  },
  "MUSC389": {
    "title": "The Worship Choir III",
    "credits": 1,
    "prereqs": "MUSC 289 or WMUS 289 or WRSP 289",
    "offered": "Resident"
  },
  "MUSC390": {
    "title": "Foundations of Vocal Technique",
    "credits": 2,
    "prereqs": "MUSC 106 or WMUS 104 or WRSP 104",
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC391": {
    "title": "Keyboard Literature",
    "credits": 2,
    "offered": "Resident"
  },
  "MUSC392": {
    "title": "Ethnic Music Program",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC393": {
    "title": "Vocal Diction",
    "credits": 3,
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC394": {
    "title": "Practicum I",
    "credits": 1,
    "prereqs": "MUSC 106",
    "offered": "Resident"
  },
  "MUSC395": {
    "title": "Practicum II",
    "credits": 1,
    "prereqs": "MUSC 203 or MUSC 205 or MUSC 394",
    "offered": "Resident"
  },
  "MUSC396": {
    "title": "Junior Artist or Worship Program",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC398": {
    "title": "Junior Recital",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC400": {
    "title": "Music Resources and Literature",
    "credits": 3,
    "prereqs": "(MUSC 302 or WRSP 302 or WMUS 302) and (MUSC 303 or WRSP 303 or WMUS 303)",
    "offered": "Resident"
  },
  "MUSC401": {
    "title": "Art of Accompaniment",
    "credits": 2,
    "note": "(Offered on demand)",
    "offered": "Resident"
  },
  "MUSC402": {
    "title": "Ethnic Music Theory",
    "credits": 3,
    "prereqs": "MUSC 314",
    "offered": "Resident"
  },
  "MUSC404": {
    "title": "Accompanying I",
    "credits": 1,
    "prereqs": "MUSC 401",
    "offered": "Resident"
  },
  "MUSC405": {
    "title": "Accompanying II",
    "credits": 1,
    "prereqs": "MUSC 404",
    "offered": "Resident"
  },
  "MUSC407": {
    "title": "Solo Vocal Literature",
    "credits": 3,
    "prereqs": "MUSC 206 or MUSC 204",
    "note": "Required for all voice majors. Offered Spring semester, odd numbered years",
    "offered": "Resident"
  },
  "MUSC408": {
    "title": "Vocal Pedagogy",
    "credits": 3,
    "note": "(Offered Spring semester, even numbered years)",
    "offered": "Resident"
  },
  "MUSC411": {
    "title": "Marching Band Techniques",
    "credits": 2,
    "note": "(Offered on demand in Fall semesters)",
    "offered": "Resident"
  },
  "MUSC412": {
    "title": "Instrumental Pedagogy Lab for Instrumental Music Education",
    "credits": 1,
    "prereqs": "MUSC 355 or MUSC 357 or MUSC 363 or MUSC 374",
    "offered": "Resident"
  },
  "MUSC413": {
    "title": "Vocal Pedagogy Lab for Music Education",
    "credits": 1,
    "prereqs": "MUSC 222",
    "offered": "Resident"
  },
  "MUSC420": {
    "title": "Group Voice IV",
    "credits": 1,
    "prereqs": "MUSC 320 or WMUS 320 or WRSP 221",
    "note": "(Meets 2 hours per week)",
    "offered": "Resident"
  },
  "MUSC421": {
    "title": "Voice (Senior)",
    "credits": 1,
    "prereqs": "MUSC 321 or MUSC 322 or WMUS 325 or WRSP 325",
    "offered": "Resident"
  },
  "MUSC422": {
    "title": "Voice (Senior)",
    "credits": 1,
    "prereqs": "MUSC 421",
    "offered": "Resident"
  },
  "MUSC423": {
    "title": "Congregational Contextualization and Leadership",
    "credits": 1,
    "prereqs": "(MUSC 323 or WRSP 321) and (MUSC 499 or WRSP 499) and (MUSC 395)",
    "note": "(Offered spring semester)",
    "offered": "Resident"
  },
  "MUSC424": {
    "title": "Arts in Global Outreach",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC425": {
    "title": "Worship Contextualization Capstone",
    "credits": 1,
    "prereqs": "MUSC 323 and (MUSC 395 or MUSC 499)",
    "offered": "Resident"
  },
  "MUSC429": {
    "title": "Sound Reinforcement II",
    "credits": 3,
    "prereqs": "MUSC 329",
    "offered": "Resident"
  },
  "MUSC430": {
    "title": "Music Resources, Literature, and Technology",
    "credits": 2,
    "prereqs": "MUSC 302 or MUSC 303",
    "offered": "Resident"
  },
  "MUSC433": {
    "title": "Private Composition (Senior)",
    "credits": 1,
    "prereqs": "MUSC 339",
    "offered": "Resident"
  },
  "MUSC436": {
    "title": "Christian Music Industry Seminar",
    "credits": 1,
    "prereqs": "(MUSC 372 (may be taken concurrently) or WMUS 372 or WRSP 372) and (MUSC 220 or WRSP 220 or WMUS 220 or WRSP 240 or MUSC 243 or WMUS 240 or WRSP 250 or WMUS 250 or MUSC 250)",
    "offered": "Resident"
  },
  "MUSC437": {
    "title": "Elementary Music Methods and Materials",
    "credits": 2,
    "prereqs": "MUSC 438 (may be taken concurrently) and Undergraduate Initial Gate 2 with a score of 5 and Background Clear Virginia with a score of 5",
    "note": "(Offered Spring semester)",
    "offered": "Resident"
  },
  "MUSC438": {
    "title": "Elementary Music Methods and Materials Practicum",
    "credits": 1,
    "prereqs": "MUSC 437 (may be taken concurrently) and Background Clear Virginia with a score of 5 and Undergraduate Initial Gate 2 with a score of 5",
    "offered": "Resident"
  },
  "MUSC439": {
    "title": "Private Composition (Senior)",
    "credits": 1,
    "prereqs": "MUSC 433",
    "offered": "Resident"
  },
  "MUSC440": {
    "title": "Ethnic Music Seminar",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC441": {
    "title": "Private Piano Senior",
    "credits": 1,
    "prereqs": "MUSC 341 or MUSC 342 or WMUS 345",
    "offered": "Resident"
  },
  "MUSC442": {
    "title": "Private Piano Senior",
    "credits": 1,
    "prereqs": "MUSC 441",
    "note": "May be repeated as needed.",
    "offered": "Resident"
  },
  "MUSC450": {
    "title": "Group Guitar IV",
    "credits": 1,
    "prereqs": "MUSC 350 or WMUS 350 or WRSP 251",
    "offered": "Resident"
  },
  "MUSC451": {
    "title": "Guitar, Strings, Brass, Woodwinds Percussion (Senior)",
    "credits": 1,
    "prereqs": "MUSC 351 or MUSC 352 or WMUS 355",
    "offered": "Resident"
  },
  "MUSC452": {
    "title": "Guitar, Strings, Brass, Woodwinds Percussion (Senior)",
    "credits": 1,
    "prereqs": "MUSC 451",
    "offered": "Resident"
  },
  "MUSC461": {
    "title": "Marketing Commercial Music and Record Label Operations",
    "credits": 3,
    "prereqs": "MUSC 378",
    "offered": "Resident"
  },
  "MUSC462": {
    "title": "Advanced Digital Audio Production",
    "credits": 3,
    "prereqs": "CINE 272",
    "offered": "Resident"
  },
  "MUSC463": {
    "title": "Music Mixing and Post Production",
    "credits": 3,
    "prereqs": "MUSC 368 and MUSC 329",
    "offered": "Resident"
  },
  "MUSC468": {
    "title": "Senior Commercial Music Program",
    "credits": 1,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident"
  },
  "MUSC470": {
    "title": "Opera Workshop I: Opera Production",
    "credits": 1,
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC471": {
    "title": "Opera Workshop II: Opera Scenes",
    "credits": 1,
    "note": "(Offered Spring semesters)",
    "offered": "Resident"
  },
  "MUSC477": {
    "title": "Guitar Pedagogy",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC479": {
    "title": "Classical Guitar Ensemble II",
    "credits": 1,
    "prereqs": "MUSC 179",
    "offered": "Resident"
  },
  "MUSC480": {
    "title": "University Chorale II",
    "credits": 1,
    "prereqs": "MUSC 180",
    "offered": "Resident"
  },
  "MUSC481": {
    "title": "Concert Choir II",
    "credits": 1,
    "prereqs": "MUSC 180 or MUSC 182 or MUSC 181",
    "offered": "Resident"
  },
  "MUSC482": {
    "title": "Chamber Singers II",
    "credits": 1,
    "prereqs": "MUSC 180 or MUSC 182 or MUSC 181",
    "offered": "Resident"
  },
  "MUSC483": {
    "title": "Jazz Ensemble II",
    "credits": 1,
    "prereqs": "MUSC 183",
    "offered": "Resident"
  },
  "MUSC484": {
    "title": "Marching Band II",
    "credits": 1,
    "prereqs": "(MUSC 184 or MUSC 185) and (MUSC 184 or MUSC 185)",
    "offered": "Resident"
  },
  "MUSC485": {
    "title": "Symphony Orchestra II",
    "credits": 1,
    "prereqs": "MUSC 185 or MUSC 194 or MUSC 184",
    "offered": "Resident"
  },
  "MUSC486": {
    "title": "Brass Choir II",
    "credits": 1,
    "prereqs": "MUSC 186",
    "offered": "Resident"
  },
  "MUSC487": {
    "title": "University Band II",
    "credits": 1,
    "prereqs": "MUSC 187 or MUSC 184 or MUSC 194",
    "offered": "Resident"
  },
  "MUSC488": {
    "title": "Woodwind Choir II",
    "credits": 1,
    "prereqs": "MUSC 188",
    "offered": "Resident"
  },
  "MUSC489": {
    "title": "Supervised Praise and Worship Ensemble",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC490": {
    "title": "Secondary Music Methods and Materials",
    "credits": 2,
    "prereqs": "Undergraduate Initial Gate 2 with a score of 5 and Background Clear Virginia with a score of 5",
    "note": "(Offered Fall semester)",
    "offered": "Resident"
  },
  "MUSC491": {
    "title": "Secondary Music Methods and Materials Practicum",
    "credits": 1,
    "prereqs": "Undergraduate Initial Gate 2 with a score of 5 and Background Clear Virginia with a score of 5",
    "offered": "Resident"
  },
  "MUSC492": {
    "title": "Percussion Ensemble II",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC493": {
    "title": "Chamber Music Ensemble II",
    "credits": 1,
    "prereqs": "MUSC 193",
    "offered": "Resident"
  },
  "MUSC494": {
    "title": "Wind Symphony II",
    "credits": 1,
    "note": "(Offered Spring semester)",
    "offered": "Resident"
  },
  "MUSC495": {
    "title": "Directed Research in Music or Music and Worship",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC496": {
    "title": "Senior Artist or Worship Program",
    "credits": 1,
    "prereqs": "MUSC 396 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "MUSC497": {
    "title": "Special Topics: Music or Music and Worship",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC498": {
    "title": "Senior Recital",
    "credits": 1,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research (prior to 2017-2018) with a score of 80 or Research Assessment with a score of 80",
    "offered": "Resident"
  },
  "MUSC499": {
    "title": "Internship",
    "credits": 1,
    "prereqs": "MUSC 394 and MUSC 395 and (MUSC 203 or MUSC 205)",
    "offered": "Resident"
  },
  "MUSC510": {
    "title": "Foundations of Music Education",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MUSC514": {
    "title": "Basic Conducting",
    "credits": 3,
    "prereqs": "Graduate Conducting Assessmen with a score of 0",
    "offered": "Online"
  },
  "MUSC515": {
    "title": "Graduate Conducting",
    "credits": 3,
    "prereqs": "MUSC 514 or  Graduate Conducting Assessmen with a score of 70",
    "offered": "Resident and Online"
  },
  "MUSC516": {
    "title": "Advanced Graduate Conducting",
    "credits": 3,
    "prereqs": "MUSC 515",
    "offered": "Online"
  },
  "MUSC522": {
    "title": "Introduction to Music Theory",
    "credits": 3,
    "prereqs": "Graduate Music Assessment with a score of 0",
    "offered": "Online"
  },
  "MUSC524": {
    "title": "Analytical Techniques",
    "credits": 3,
    "prereqs": "MUSC 522 or Graduate Music Assessment with a score of 125",
    "offered": "Resident and Online"
  },
  "MUSC525": {
    "title": "Advanced Contemporary Arranging Techniques",
    "credits": 3,
    "prereqs": "MUSC 630",
    "offered": "Resident and Online"
  },
  "MUSC531": {
    "title": "Bibliography and Research in Music Education",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MUSC550": {
    "title": "Applied Music",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MUSC560": {
    "title": "Ensemble Pedagogy",
    "credits": 1,
    "prereqs": "MUSC 589",
    "offered": "Resident"
  },
  "MUSC589": {
    "title": "Graduate Ensemble",
    "credits": 1,
    "offered": "Resident"
  },
  "MUSC620": {
    "title": "Music in America",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MUSC630": {
    "title": "Principles of Music Technology",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC640": {
    "title": "History and Philosophy of Music Education in America",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MUSC650": {
    "title": "Research in Music Education",
    "credits": 3,
    "prereqs": "MUSC 531",
    "offered": "Resident and Online"
  },
  "MUSC660": {
    "title": "Performance Pedagogy &amp; Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC670": {
    "title": "Principles of Curricula and Pedagogy for Music Education",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC675": {
    "title": "Entrepreneurism in Music",
    "credits": 3,
    "offered": "Resident"
  },
  "MUSC687": {
    "title": "Music Education Curriculum Project",
    "credits": 3,
    "prereqs": "MUSC 689",
    "offered": "Resident and Online"
  },
  "MUSC689": {
    "title": "Masters Thesis Proposal &amp; Research",
    "credits": 3,
    "prereqs": "MUSC 650 and MUSC 692 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "MUSC690": {
    "title": "Thesis",
    "credits": 3,
    "prereqs": "MUSC 689",
    "offered": "Resident and Online"
  },
  "MUSC691": {
    "title": "Lecture Performance Recital",
    "credits": 3,
    "prereqs": "MUSC 689",
    "offered": "Resident and Online"
  },
  "MUSC692": {
    "title": "Graduate Music Comprehensive Exam",
    "credits": 0,
    "prereqs": "MUSC 689",
    "offered": "Resident and Online"
  },
  "MUSC695": {
    "title": "Graduate Research in Music",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "MUSC697": {
    "title": "Seminar in Music",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "MUSC801": {
    "title": "Historical Developments Influencing Music Education",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC805": {
    "title": "Foundations of Doctoral Research in Music Education",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC807": {
    "title": "Literature Review for Music Education",
    "credits": 3,
    "prereqs": "MUSC 805",
    "offered": "Online"
  },
  "MUSC820": {
    "title": "The Music Educator",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC835": {
    "title": "Philosophies of Music Education",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC840": {
    "title": "Current Issues in Music Education",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC843": {
    "title": "The Music Educator as Advocate",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC845": {
    "title": "The Role of the College Music Teacher",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC846": {
    "title": "The Role of the Music Education Administrator",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC850": {
    "title": "Applied Music",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC851": {
    "title": "Community, Culture and Relationship in Music Education",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC870": {
    "title": "Curriculum Development",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC880": {
    "title": "Introduction to Thesis Writing Project",
    "credits": 3,
    "offered": "Online"
  },
  "MUSC888": {
    "title": "Thesis Project Proposal Research I",
    "credits": 4,
    "prereqs": "MUSC 880 and MUSC 892 (may be taken concurrently)",
    "offered": "Online"
  },
  "MUSC889": {
    "title": "Thesis Project Proposal &amp; Research II",
    "credits": 3,
    "prereqs": "MUSC 880 or MUSC 888",
    "offered": "Online"
  },
  "MUSC890": {
    "title": "Thesis Project Defense",
    "credits": 3,
    "prereqs": "MUSC 889",
    "offered": "Online"
  },
  "MUSC892": {
    "title": "Comprehensive Exam",
    "credits": 0,
    "prereqs": "MUSC 888 (may be taken concurrently)",
    "offered": "Online"
  },
  "MUSC915": {
    "title": "Quantitative Methods of Research",
    "credits": 3,
    "prereqs": "MUSC 805",
    "offered": "Online"
  },
  "MUSC917": {
    "title": "Qualitative Methods of Research",
    "credits": 3,
    "prereqs": "MUSC 805",
    "offered": "Online"
  },
  "MUSC982": {
    "title": "Qualitative Comprehensive Exam",
    "credits": 0,
    "prereqs": "MUSC 987 (may be taken concurrently)",
    "offered": "Online"
  },
  "MUSC983": {
    "title": "Quantitative Comprehensive Exam",
    "credits": 0,
    "prereqs": "MUSC 987 (may be taken concurrently)",
    "offered": "Online"
  },
  "MUSC987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "((MUSC 915 and MUSC 917) and (MUSC 982 (may be taken concurrently) or MUSC 983 (may be taken concurrently)))",
    "offered": "Online"
  },
  "MUSC988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "MUSC 987",
    "offered": "Online"
  },
  "MUSC989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "MUSC 988",
    "offered": "Online"
  },
  "MUSC990": {
    "title": "Dissertation Defense",
    "credits": 0,
    "prereqs": "MUSC 989",
    "offered": "Online"
  },
  "NASC210": {
    "title": "Science and Society",
    "credits": 3,
    "offered": "Online"
  },
  "NASC315": {
    "title": "Environmental Science",
    "credits": 4,
    "prereqs": "(MATH 110 or MATH 115 or MATH 117 or MATH 121 or MATH 122 or MATH 123 or MATH 125 or MATH 126 or MATH 128 or MATH 131 or MATH 200 or MATH 201 or BUSI 230 or MATH 108) and BIOL 101 or BIOL 102",
    "note": "(Offered spring semester)",
    "offered": "Resident"
  },
  "NBST500": {
    "title": "The New Testament World",
    "credits": 3,
    "offered": "Online"
  },
  "NBST510": {
    "title": "New Testament Introduction",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST515": {
    "title": "New Testament Orientation I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST520": {
    "title": "New Testament Orientation II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST595": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "NBST610": {
    "title": "Hermeneutics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST611": {
    "title": "Life of Christ",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST615": {
    "title": "John",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST616": {
    "title": "Acts",
    "credits": 3,
    "offered": "Resident"
  },
  "NBST617": {
    "title": "Romans",
    "credits": 3,
    "offered": "Resident"
  },
  "NBST618": {
    "title": "The Corinthian Correspondence",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST620": {
    "title": "Pastoral Epistles",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST621": {
    "title": "Hebrews",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST623": {
    "title": "I and II Peter",
    "credits": 3
  },
  "NBST625": {
    "title": "Revelation",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST640": {
    "title": "Apologetics and the New Testament",
    "credits": 3,
    "prereqs": "APOL 500 and NBST 610",
    "offered": "Resident and Online"
  },
  "NBST680": {
    "title": "New Testament Development of Old Testament Themes",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST695": {
    "title": "Directed Research in New Testament Biblical Studies",
    "credits": 3,
    "offered": "Online"
  },
  "NBST697": {
    "title": "Seminar in New Testament",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NBST800": {
    "title": "New Testament Backgrounds",
    "credits": 3,
    "prereqs": "BIBL 700 and BIBL 715 and (NGRK 505 and NGRK 511 or NGRK 620 and NGRK 643 or NGRK 644 or NGRK 645 or NGRK 646) and (OTCL 505 and OTCL 511 or OTCL 640 and OTCL 643)",
    "offered": "Online"
  },
  "NBST815": {
    "title": "Gospels",
    "credits": 3,
    "prereqs": "NBST 800",
    "offered": "Online"
  },
  "NBST830": {
    "title": "Acts/Pauline Epistles",
    "credits": 3,
    "prereqs": "NBST 800",
    "offered": "Online"
  },
  "NBST845": {
    "title": "General Epistles/Revelation",
    "credits": 3,
    "prereqs": "NBST 800",
    "offered": "Online"
  },
  "NBST900": {
    "title": "Reading Seminar in Judaism and Greco-Roman History",
    "credits": 3,
    "offered": "Resident"
  },
  "NBST910": {
    "title": "Uses of the Old Testament in the New Testament",
    "credits": 3,
    "offered": "Resident"
  },
  "NBST935": {
    "title": "Theology of Paul",
    "credits": 3,
    "offered": "Resident"
  },
  "NBST950": {
    "title": "Special Topics in the New Testament",
    "credits": 3,
    "offered": "Resident"
  },
  "NBST968": {
    "title": "Current Biblical and Theological Issues",
    "credits": 3,
    "offered": "Resident"
  },
  "NBST995": {
    "title": "Directed Research in New Testament Biblical Studies",
    "credits": 3,
    "offered": "Resident"
  },
  "NBST997": {
    "title": "Seminar in New Testament",
    "credits": 3,
    "offered": "Resident"
  },
  "NGRK505": {
    "title": "Greek Language Tools",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NGRK511": {
    "title": "Advanced Greek Language Tools",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NGRK520": {
    "title": "Beginning Greek I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NGRK525": {
    "title": "Beginning Greek II",
    "credits": 3,
    "prereqs": "NGRK 500 or NGRK 520",
    "offered": "Resident and Online"
  },
  "NGRK620": {
    "title": "Greek Syntax",
    "credits": 3,
    "prereqs": "(NGRK 520 or NGRK 500) and (NGRK 525 or NGRK 501)",
    "offered": "Resident and Online"
  },
  "NGRK643": {
    "title": "Greek Exegesis: Galatians",
    "credits": 3,
    "prereqs": "NGRK 620",
    "offered": "Resident and Online"
  },
  "NGRK644": {
    "title": "Greek Exegesis Ephesians",
    "credits": 3,
    "prereqs": "NGRK 620",
    "offered": "Resident and Online"
  },
  "NGRK645": {
    "title": "Greek Exegesis: Philippians",
    "credits": 3,
    "prereqs": "NGRK 620",
    "offered": "Resident and Online"
  },
  "NGRK646": {
    "title": "Greek Exegesis: Colossians",
    "credits": 3
  },
  "NGRK650": {
    "title": "New Testament Textual Criticism",
    "credits": 3,
    "prereqs": "NGRK 620",
    "offered": "Resident and Online"
  },
  "NGRK675": {
    "title": "Advanced Greek Grammar",
    "credits": 3,
    "prereqs": "NGRK 620",
    "offered": "Resident and Online"
  },
  "NGRK695": {
    "title": "Directed Research in Greek",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "NGRK697": {
    "title": "Seminar in Greek",
    "credits": 3,
    "offered": "Resident"
  },
  "NGRK997": {
    "title": "Reading Seminar in New Testament Greek Literature",
    "credits": 3,
    "offered": "Resident"
  },
  "NSEC501": {
    "title": "National Security Structure and Responsibilities",
    "credits": 3,
    "offered": "Online"
  },
  "NSEC502": {
    "title": "Ethics in National Security",
    "credits": 3,
    "prereqs": "NSEC 501",
    "offered": "Online"
  },
  "NSEC503": {
    "title": "National Security, National Defense, &amp; Foreign Policy",
    "credits": 3,
    "prereqs": "NSEC 501",
    "offered": "Online"
  },
  "NSEC504": {
    "title": "Historic Lessons of National Security in War &amp; Peace",
    "credits": 3,
    "prereqs": "NSEC 501",
    "offered": "Online"
  },
  "NSEC505": {
    "title": "Cyberspace Policy/Operations &amp; Political Challenges",
    "credits": 3,
    "prereqs": "NSEC 501",
    "offered": "Online"
  },
  "NSEC506": {
    "title": "Sovereignty &amp; National Security Challenges",
    "credits": 3,
    "prereqs": "NSEC 501",
    "offered": "Online"
  },
  "NSEC507": {
    "title": "Terrorism &amp; National Security",
    "credits": 3,
    "prereqs": "NSEC 501",
    "offered": "Online"
  },
  "NSEC688": {
    "title": "Thesis Proposal",
    "credits": 3,
    "offered": "Online"
  },
  "NSEC689": {
    "title": "Thesis Research",
    "credits": 3,
    "prereqs": "NSEC 688",
    "offered": "Online"
  },
  "NSEC690": {
    "title": "Thesis Defense",
    "credits": 3,
    "prereqs": "NSEC 689",
    "offered": "Online"
  },
  "NURS010": {
    "title": "Health Assessment Clinical",
    "credits": 0,
    "offered": "Resident"
  },
  "NURS021": {
    "title": "Fundamentals in Nursing Clinical",
    "credits": 0,
    "offered": "Resident"
  },
  "NURS031": {
    "title": "Strategies for Adult Health Care I Clinical",
    "credits": 0,
    "offered": "Resident"
  },
  "NURS032": {
    "title": "Strategies for Adult Health Care II Clinical",
    "credits": 0,
    "offered": "Resident"
  },
  "NURS051": {
    "title": "Strategies for Mental Health Care Clinical",
    "credits": 0,
    "offered": "Resident"
  },
  "NURS061": {
    "title": "Advanced Strategies for Adult Health Care Clinical",
    "credits": 0,
    "offered": "Resident"
  },
  "NURS070": {
    "title": "International Student Support",
    "credits": 0,
    "offered": "Resident"
  },
  "NURS090": {
    "title": "Transition to Practice Clinical",
    "credits": 0,
    "offered": "Resident"
  },
  "NURS101": {
    "title": "Introduction to Nursing",
    "credits": 1,
    "offered": "Resident"
  },
  "NURS104": {
    "title": "Introduction to Nursing and Medical Terminology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NURS105": {
    "title": "Medical Terminology",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "NURS115": {
    "title": "Pre-licensure Pathophysiology",
    "credits": 3,
    "prereqs": "BIOL 213 and BIOL 214",
    "offered": "Resident"
  },
  "NURS116": {
    "title": "Cellular Pathophysiology for Nurses",
    "credits": 3,
    "prereqs": "BIOL 213 and BIOL 214",
    "offered": "Resident"
  },
  "NURS200": {
    "title": "Nursing Process Application",
    "credits": 2,
    "prereqs": "Nursing Gate 1 with a score of 3",
    "offered": "Resident"
  },
  "NURS207": {
    "title": "Research and Writing in Nursing",
    "credits": 3,
    "offered": "Resident"
  },
  "NURS209": {
    "title": "Health Assessment Accelerated",
    "credits": 3,
    "prereqs": "NURS 207 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS210": {
    "title": "Pre-licensure Health Assessment",
    "credits": 3,
    "prereqs": "NURS 010 (may be taken concurrently) and Nursing Gate 1 with a score of 3",
    "offered": "Resident"
  },
  "NURS211": {
    "title": "Post-Licensure Health Assessment",
    "credits": 3,
    "offered": "Online"
  },
  "NURS215": {
    "title": "Post-licensure Pathophysiology",
    "credits": 3,
    "prereqs": "NURS 220 or NURS 350",
    "offered": "Online"
  },
  "NURS220": {
    "title": "Advanced Nursing Communication",
    "credits": 3,
    "prereqs": "Nursing Gate 1 with a score of 3",
    "offered": "Resident and Online"
  },
  "NURS221": {
    "title": "Fundamentals in Nursing",
    "credits": 4,
    "prereqs": "NURS 200 and NURS 210 and NURS 021 (may be taken concurrently) and Nursing Gate 1 with a score of 3",
    "offered": "Resident"
  },
  "NURS225": {
    "title": "Pre-licensure Research in Nursing",
    "credits": 3,
    "prereqs": "NURS 200 and NURS 210 and Nursing Gate 1 with a score of 3",
    "offered": "Resident"
  },
  "NURS226": {
    "title": "Post-Licensure Research in Nursing",
    "credits": 3,
    "prereqs": "NURS 220",
    "offered": "Online"
  },
  "NURS231": {
    "title": "Fundamentals in Nursing Accelerated",
    "credits": 4,
    "prereqs": "NURS 209",
    "offered": "Resident"
  },
  "NURS299": {
    "title": "Internship",
    "credits": 0,
    "prereqs": "Nursing Gate 1 with a score of 3",
    "offered": "Resident"
  },
  "NURS301": {
    "title": "Strategies for Adult Health Care I",
    "credits": 5,
    "prereqs": "NURS 200 and NURS 221 and NURS 225 and NURS 031 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS302": {
    "title": "Strategies for Adult Health Care II",
    "credits": 5,
    "prereqs": "NURS 305 and NURS 301 and NURS 032 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS303": {
    "title": "Nursing Care of the Adult I Accelerated",
    "credits": 5,
    "prereqs": "NURS 231",
    "offered": "Resident"
  },
  "NURS304": {
    "title": "Nursing Care of the Adult II Accelerated",
    "credits": 5,
    "prereqs": "NURS 303",
    "offered": "Resident"
  },
  "NURS305": {
    "title": "Pharmacology",
    "credits": 3,
    "prereqs": "NURS 200 and NURS 221 and (NURS 225 or RESP 324)",
    "note": "NURS 305 has 3 credit hours for the residential course and 2 hours for the online course.",
    "offered": "Resident and Online"
  },
  "NURS306": {
    "title": "Pharmacology II",
    "credits": 3,
    "prereqs": "NURS 305",
    "offered": "Resident and Online"
  },
  "NURS307": {
    "title": "Pharmacology I Accelerated",
    "credits": 3,
    "prereqs": "NURS 303 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS308": {
    "title": "Pharmacology II Accelerated",
    "credits": 3,
    "prereqs": "NURS 304 (may be taken concurrently) and NURS 307",
    "offered": "Resident"
  },
  "NURS316": {
    "title": "Global Health Nursing Field Experience",
    "credits": 3,
    "prereqs": "NURS 221",
    "offered": "Resident and Online"
  },
  "NURS325": {
    "title": "Nursing Concepts",
    "credits": 1,
    "prereqs": "NURS 220 and Nursing Gate 1 with a score of 3",
    "note": "Restricted to Registered Nurses only",
    "offered": "Resident and Online"
  },
  "NURS340": {
    "title": "Nursing Care of the Childbearing Family Accelerated",
    "credits": 4,
    "prereqs": "NURS 303 and NURS 304 and NURS 307 and NURS 308",
    "offered": "Resident"
  },
  "NURS341": {
    "title": "Nursing Care of the Child Accelerated",
    "credits": 4,
    "prereqs": "PSYC 210 and NURS 303 and NURS 304 and NURS 307 and NURS 308",
    "offered": "Resident"
  },
  "NURS350": {
    "title": "Advanced Nursing Communication",
    "credits": 3
  },
  "NURS352": {
    "title": "Caring for the Childbearing Family I",
    "credits": 4,
    "prereqs": "NURS 210 and NURS 221 and (NURS 215 or NURS 115) and Nursing Gate 1 with a score of 3",
    "offered": "Resident"
  },
  "NURS353": {
    "title": "Caring for the Childbearing Family II",
    "credits": 4,
    "prereqs": "NURS 210 and NURS 221 and PSYC 210 and (NURS 215 or NURS 115) and Nursing Gate 1 with a score of 3",
    "offered": "Resident"
  },
  "NURS354": {
    "title": "Nursing Care of the Childbearing Family Lecture",
    "credits": 3,
    "prereqs": "NURS 200 and NURS 221 and NURS 225",
    "offered": "Resident"
  },
  "NURS355": {
    "title": "Nursing Care of Children Lecture",
    "credits": 3,
    "prereqs": "NURS 200 and NURS 221 and NURS 225 and PSYC 210 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS356": {
    "title": "Nursing Care of the Childbearing Family Clinical",
    "credits": 1,
    "prereqs": "NURS 200 and NURS 221 and NURS 225",
    "offered": "Resident"
  },
  "NURS357": {
    "title": "Nursing Care of Children Clinical",
    "credits": 1,
    "prereqs": "NURS 200 and NURS 221 and NURS 225 and PSYC 210 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS415": {
    "title": "Cross-Cultural Nursing",
    "credits": 3,
    "prereqs": "NURS 301 and NURS 305",
    "offered": "Resident and Online"
  },
  "NURS416": {
    "title": "Preceptorship in Nursing",
    "credits": 3,
    "prereqs": "NURS 302 and NURS 306 and NURS 354 and NURS 355 and NURS 356 and NURS 357",
    "offered": "Resident"
  },
  "NURS417": {
    "title": "Crisis Nursing",
    "credits": 3,
    "prereqs": "NURS 301 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS419": {
    "title": "Strategies for End of Life Care",
    "credits": 3,
    "prereqs": "NURS 301",
    "offered": "Resident"
  },
  "NURS420": {
    "title": "Comprehensive Pain Management",
    "credits": 3,
    "prereqs": "NURS 302 and NURS 306",
    "offered": "Resident"
  },
  "NURS440": {
    "title": "Post-licensure Strategies for Community Health Care",
    "credits": 4,
    "prereqs": "NURS 301 and NURS 302 and NURS 352 and NURS 353 and BIOL 203 and Nursing Gate 1 with a score of 3",
    "offered": "Resident and Online"
  },
  "NURS441": {
    "title": "Pre-licensure Strategies for Community Health Nursing Lecture",
    "credits": 3,
    "prereqs": "NURS 302 and NURS 306 and NURS 354 and NURS 355 and NURS 356 and NURS 357",
    "offered": "Resident"
  },
  "NURS442": {
    "title": "Pre-licensure Strategies for Community Health Nursing Clinical",
    "credits": 1,
    "prereqs": "NURS 302 and NURS 306 and NURS 354 and NURS 355 and NURS 356 and NURS 357",
    "offered": "Resident"
  },
  "NURS443": {
    "title": "Nursing Care of the Community Accelerated",
    "credits": 4,
    "prereqs": "NURS 303 and NURS 304 and NURS 307 and NURS 308 and NURS 340 and NURS 341",
    "offered": "Resident"
  },
  "NURS444": {
    "title": "Contemporary Issues in Nursing &amp; Healthcare Accelerated",
    "credits": 3,
    "prereqs": "NURS 303 and NURS 304 and NURS 307 and NURS 308 and NURS 340 and NURS 341",
    "offered": "Resident"
  },
  "NURS445": {
    "title": "Contemporary Issues in Nursing and Healthcare",
    "credits": 3,
    "prereqs": "NURS 302 and NURS 306 and NURS 354 and NURS 355 and NURS 356 and NURS 357",
    "offered": "Resident"
  },
  "NURS446": {
    "title": "Post-Licensure Population Health",
    "credits": 3,
    "prereqs": "NURS 220",
    "offered": "Online"
  },
  "NURS451": {
    "title": "Strategies for Mental Health Care",
    "credits": 3,
    "prereqs": "NURS 302 and NURS 306 and NURS 354 and NURS 355 and NURS 356 and NURS 357 and NURS 051 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS452": {
    "title": "Nursing Care for the Mental Health Accelerated",
    "credits": 3,
    "prereqs": "NURS 303 and NURS 304 and NURS 307 and NURS 308 and NURS 340 and NURS 341",
    "offered": "Resident"
  },
  "NURS460": {
    "title": "Advanced Strategies for Adult Health Care",
    "credits": 4,
    "prereqs": "NURS 302 and NURS 306 and NURS 354 and NURS 355 and NURS 356 and NURS 357 and NURS 061 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS462": {
    "title": "Nursing Care of the Critically Ill Accelerated",
    "credits": 4,
    "prereqs": "NURS 303 and NURS 304 and NURS 307 and NURS 308 and NURS 340 and NURS 341",
    "offered": "Resident"
  },
  "NURS464": {
    "title": "Advanced Medical Surgical Nursing",
    "credits": 3,
    "prereqs": "NURS 302 and NURS 306 and NURS 354 and NURS 355 and NURS 356 and NURS 357 and NURS 490 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS465": {
    "title": "Advanced Strategies for the Critically Ill",
    "credits": 3,
    "prereqs": "NURS 460 and NURS 490 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS466": {
    "title": "Advanced Critical Care II",
    "credits": 3,
    "prereqs": "NURS 460 and NURS 490 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS475": {
    "title": "Research in Nursing",
    "credits": 3,
    "prereqs": "(MATH 201 or BUSI 230 and NURS 210 and NURS 215 and NURS 221 and NURS 301 and NURS 305) or (MATH 201 and NURS 201 and NURS 210 and NURS 215 and NURS 301 and NURS 305) or (MATH 201 and NURS 205 and NURS 210 and NURS 215 and NURS 221 and NURS 301) or (MATH 201 and NURS 201 and NURS 205 and NURS 210 and NURS 215 and NURS 301)"
  },
  "NURS489": {
    "title": "Leadership in Nursing",
    "credits": 3,
    "prereqs": "NURS 350 or NURS 220",
    "offered": "Online"
  },
  "NURS490": {
    "title": "Transition to Practice",
    "credits": 5,
    "prereqs": "NURS 302 and NURS 306 and NURS 354 and NURS 355 and NURS 356 and NURS 357 and NURS 090 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS491": {
    "title": "Nursing Management",
    "credits": 3,
    "prereqs": "NURS 220 or NURS 350",
    "offered": "Online"
  },
  "NURS492": {
    "title": "Advanced Concepts of Nursing Practice",
    "credits": 3,
    "prereqs": "((NURS 210 or NURS 211) and (NURS 220 or NURS 350) and NURS 215 and NURS 225 and NURS 325 and NURS 440 and NURS 445 and NURS 490 and NURS 491 )",
    "offered": "Resident and Online"
  },
  "NURS493": {
    "title": "Transition to Practice Accelerated",
    "credits": 5,
    "prereqs": "NURS 443 and NURS 444 and NURS 452 and NURS 462 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "note": "Must be taken the last semester of nursing major.",
    "offered": "Resident"
  },
  "NURS495": {
    "title": "Directed Research",
    "credits": 3,
    "prereqs": "Nursing Gate 1 with a score of 3",
    "offered": "Resident"
  },
  "NURS497": {
    "title": "Seminar",
    "credits": 1
  },
  "NURS499": {
    "title": "Nursing Internship",
    "credits": 6,
    "offered": "Resident"
  },
  "NURS500": {
    "title": "Research",
    "credits": 3,
    "prereqs": "(Research Met (NURS 225 or 226) with a score of 3 and Stats Met (MATH 201) with a score of 3) or (BSN Met with a score of 3 and Stats Met (MATH 201) with a score of 3)",
    "offered": "Online"
  },
  "NURS501": {
    "title": "Health Policy and Ethics",
    "credits": 3,
    "offered": "Online"
  },
  "NURS502": {
    "title": "Nursing Theory and Advanced Practice",
    "credits": 3,
    "offered": "Online"
  },
  "NURS503": {
    "title": "Managing Population Health",
    "credits": 3,
    "offered": "Online"
  },
  "NURS504": {
    "title": "Advanced Pharmacology for the Nurse Educator",
    "credits": 3,
    "prereqs": "(Research Met (NURS 225 or 226) with a score of 3 and Community Met (NURS 440) with a score of 3 and Ldr Management Met (NURS 490) with a score of 3 and Pop. Hlth Met (NURS445 or 446) with a score of 3 and Nrs Management Met (NURS 491) with a score of 3 and NURS 505 and NURS 506) or (BSN Met with a score of 3 and NURS 505 and NURS 506)",
    "offered": "Online"
  },
  "NURS505": {
    "title": "Advanced Health / Physical Assessment",
    "credits": 3,
    "prereqs": "(BSN Met with a score of 3 and Hlth Asmnt Met (NURS210 or211) with a score of 3) or (Hlth Asmnt Met (NURS210 or211) with a score of 3 and Research Met (NURS 225 or 226) with a score of 3 and Community Met (NURS 440) with a score of 3 and Ldr Management Met (NURS 490) with a score of 3 and Pop. Hlth Met (NURS445 or 446) with a score of 3 and Nrs Management Met (NURS 491) with a score of 3)",
    "offered": "Online"
  },
  "NURS506": {
    "title": "Advanced Physiology and Pathophysiology",
    "credits": 3,
    "prereqs": "BSN Met with a score of 3 or (Research Met (NURS 225 or 226) with a score of 3 and Community Met (NURS 440) with a score of 3 and Ldr Management Met (NURS 490) with a score of 3 and Pop. Hlth Met (NURS445 or 446) with a score of 3 and Nrs Management Met (NURS 491) with a score of 3) or (EXSC 510 and EXSC 525)",
    "offered": "Online"
  },
  "NURS507": {
    "title": "Advanced Acute Adult Care I",
    "credits": 3
  },
  "NURS518": {
    "title": "Foundations of Pain Management",
    "credits": 3,
    "offered": "Online"
  },
  "NURS519": {
    "title": "Strategies for End of Life Care",
    "credits": 3,
    "offered": "Online"
  },
  "NURS521": {
    "title": "Nursing Issues, Informatics and Technology",
    "credits": 3,
    "prereqs": "(NURS 501 and BSN Met with a score of 3 and Hlth Asmnt Met (NURS210 or211) with a score of 3) or (NURS 501 and Hlth Asmnt Met (NURS210 or211) with a score of 3 and Research Met (NURS 225 or 226) with a score of 3 and Community Met (NURS 440) with a score of 3 and Ldr Management Met (NURS 490) with a score of 3 and Pop. Hlth Met (NURS445 or 446) with a score of 3 and Nrs Management Met (NURS 491) with a score of 3)",
    "offered": "Online"
  },
  "NURS522": {
    "title": "Performance Management in Healthcare",
    "credits": 3,
    "offered": "Online"
  },
  "NURS523": {
    "title": "Financial and Resource Management for Nurse Leaders",
    "credits": 3,
    "prereqs": "NURS 521",
    "offered": "Online"
  },
  "NURS524": {
    "title": "Systems Management and Leadership for Nurse Leaders",
    "credits": 3,
    "prereqs": "NURS 523",
    "offered": "Online"
  },
  "NURS525": {
    "title": "Clinical Considerations of Pain Management",
    "credits": 3,
    "offered": "Online"
  },
  "NURS600": {
    "title": "Evaluation Strategies for Nurse Educators",
    "credits": 3,
    "offered": "Online"
  },
  "NURS613": {
    "title": "Advanced Community Health II",
    "credits": 3
  },
  "NURS617": {
    "title": "Nurse Educator I: Advanced Clinical Applications",
    "credits": 3,
    "prereqs": "NURS 504 and NURS 505 and NURS 506 and NURS 521",
    "offered": "Online"
  },
  "NURS618": {
    "title": "Nurse Educator II: Teaching Strategies",
    "credits": 3,
    "prereqs": "NURS 504 and NURS 505 and NURS 506 and NURS 600 and NURS 617",
    "offered": "Online"
  },
  "NURS619": {
    "title": "Nurse Educator III: Curriculum Development",
    "credits": 3,
    "prereqs": "NURS 618",
    "offered": "Online"
  },
  "NURS620": {
    "title": "Nurse Educator IV: Role of the Nurse Educator",
    "credits": 3,
    "prereqs": "NURS 619",
    "note": "Students admitted in the program prior to Fall 2012, follow the prior Nurse Education track and the course/practicum hours for those students is 6 hours.",
    "offered": "Online"
  },
  "NURS622": {
    "title": "Pain Management Seminar",
    "credits": 3,
    "prereqs": "NURS 501 and NURS 518 and NURS 525",
    "offered": "Online"
  },
  "NURS623": {
    "title": "Nursing Administration I: The Role of the Nurse Administrator",
    "credits": 3,
    "prereqs": "NURS 500 and NURS 501 and NURS 502 and NURS 503 and NURS 521 and NURS 523 and BUSI 610",
    "offered": "Online"
  },
  "NURS624": {
    "title": "Nursing Administration II: Organizational Leadership and Management",
    "credits": 3,
    "prereqs": "NURS 524 and NURS 623",
    "offered": "Online"
  },
  "NURS625": {
    "title": "Nursing Administration III: Management of Resources",
    "credits": 3,
    "prereqs": "NURS 624 and BUSI 642",
    "offered": "Online"
  },
  "NURS626": {
    "title": "Nursing Administration IV: Nursing Administration Capstone",
    "credits": 3,
    "prereqs": "NURS 625",
    "offered": "Online"
  },
  "NURS627": {
    "title": "Practicum I Health Policy Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "NURS628": {
    "title": "Practicum II Health Policy Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "NURS629": {
    "title": "Practicum III Health Policy Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "NURS630": {
    "title": "Nursing Informatics Capstone",
    "credits": 3,
    "prereqs": "NURS 524 and INFO 668",
    "offered": "Online"
  },
  "NURS631": {
    "title": "Community Health Practicum I Health Policy Leadership",
    "credits": 3,
    "prereqs": "NURS 500 and NURS 501 and NURS 502 and NURS 503 and NURS 521",
    "offered": "Online"
  },
  "NURS632": {
    "title": "Community Health Practicum II",
    "credits": 3,
    "offered": "Online"
  },
  "NURS633": {
    "title": "Community Health Practicum III",
    "credits": 3,
    "offered": "Online"
  },
  "NURS635": {
    "title": "Nursing Informatics Data Management",
    "credits": 3,
    "prereqs": "NURS 524 and INFO 668",
    "offered": "Online"
  },
  "NURS636": {
    "title": "Nursing Informatics Capstone",
    "credits": 3,
    "prereqs": "NURS 635",
    "offered": "Online"
  },
  "NURS668": {
    "title": "Health/Wellness Capstone Project",
    "credits": 3,
    "prereqs": "NURS 501 and NURS 503 and NURS 519",
    "note": "Students must be in the final semester of their Health Services degree program.",
    "offered": "Online"
  },
  "NURS695": {
    "title": "Independent Study",
    "credits": 1
  },
  "NURS700": {
    "title": "Advanced Nursing Research",
    "credits": 3,
    "note": "(BSN-DNP only)",
    "offered": "Online"
  },
  "NURS711": {
    "title": "Advanced Physiology/Pathophysiology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NURS712": {
    "title": "Advanced Health Assessment for Nurse Practitioners",
    "credits": 3,
    "prereqs": "NURS 711",
    "offered": "Resident and Online"
  },
  "NURS713": {
    "title": "Advanced Pharmacology for Nurse Practitioners",
    "credits": 3,
    "prereqs": "NURS 711 and NURS 712",
    "offered": "Resident and Online"
  },
  "NURS715": {
    "title": "Theoretical Application for Advanced Practice Nursing",
    "credits": 3
  },
  "NURS716": {
    "title": "Applications of Evidence-Based Care",
    "credits": 3,
    "prereqs": "NURS 715 and NURS 700",
    "offered": "Online"
  },
  "NURS718": {
    "title": "Informatics, Technology and Trends for Transforming Health Care",
    "credits": 3,
    "prereqs": "NURS 715 and (NURS 700 or Grad Rsrch Methods (NURS 500) with a score of 3)",
    "offered": "Online"
  },
  "NURS721": {
    "title": "Leadership, Policy and Ethics",
    "credits": 3,
    "prereqs": "NURS 715",
    "offered": "Online"
  },
  "NURS722": {
    "title": "Nursing Theory Development",
    "credits": 3,
    "offered": "Online"
  },
  "NURS730": {
    "title": "Family Nurse Practitioner Practicum I",
    "credits": 2,
    "prereqs": "NURS 700 and NURS 711 and NURS 712 and NURS 713 and NURS 715 and NURS 721 and NURS 732 and NURS 733 (may be taken concurrently) and NURS 734 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS732": {
    "title": "Interprofessional Collaboration and Outcomes Management for Quality in Health Care",
    "credits": 3,
    "prereqs": "NURS 715 and NURS 716 and NURS 721 and NURS 718 (may be taken concurrently)",
    "offered": "Online"
  },
  "NURS733": {
    "title": "Women's Health",
    "credits": 3,
    "prereqs": "NURS 734 and NURS 735 and (NURS 736 (may be taken concurrently) or NURS 743 (may be taken concurrently))",
    "offered": "Resident and Online"
  },
  "NURS734": {
    "title": "Family Nursing I: Acute Health",
    "credits": 3,
    "prereqs": "NURS 711 and NURS 712 and NURS 713 and (NURS 730 (may be taken concurrently) or NURS 740 (may be taken concurrently))",
    "offered": "Resident and Online"
  },
  "NURS735": {
    "title": "Infant and Children's Health",
    "credits": 3,
    "prereqs": "NURS 711 and NURS 712 and NURS 713 and (NURS 730 (may be taken concurrently) or NURS 734 (may be taken concurrently) or NURS 740 (may be taken concurrently))",
    "offered": "Resident and Online"
  },
  "NURS736": {
    "title": "Family Nurse Practitioner Practicum II",
    "credits": 4,
    "prereqs": "NURS 730 and NURS 733 and NURS 734 and NURS 735 (may be taken concurrently) and NURS 737 (may be taken concurrently)",
    "offered": "Resident"
  },
  "NURS737": {
    "title": "Family Nursing II: Chronic Health",
    "credits": 3,
    "prereqs": "NURS 734 and NURS 735 and NURS 733 (may be taken concurrently) or NURS 736 (may be taken concurrently) or (NURS 743 (may be taken concurrently) and NURS 744 (may be taken concurrently))",
    "offered": "Resident and Online"
  },
  "NURS740": {
    "title": "Family Nurse Practitioner I",
    "credits": 1,
    "prereqs": "NURS 700 and NURS 711 and NURS 712 and NURS 713 and NURS 715 and NURS 721 and NURS 732 and NURS 734 (may be taken concurrently)",
    "offered": "Online"
  },
  "NURS741": {
    "title": "Family Nurse Practitioner I",
    "credits": 1,
    "prereqs": "NURS 740 and NURS 734 and NURS 735 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "NURS742": {
    "title": "Nursing Seminar: Issues in Global Health",
    "credits": 2,
    "prereqs": "NURS 735 and NURS 736 and NURS 737 and NURS 838 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "NURS743": {
    "title": "Family Nurse Practitioner II",
    "credits": 2,
    "prereqs": "NURS 734 and NURS 735 and NURS 740 and NURS 741 and NURS 733 (may be taken concurrently)",
    "offered": "Online"
  },
  "NURS744": {
    "title": "Family Nurse Practitioner II",
    "credits": 2,
    "prereqs": "NURS 733 and NURS 734 and NURS 735 and NURS 740 and NURS 741 and NURS 743 and NURS 737 (may be taken concurrently)",
    "offered": "Online"
  },
  "NURS750": {
    "title": "Spiritual Care",
    "credits": 3,
    "offered": "Online"
  },
  "NURS751": {
    "title": "Neurobiology and Differential Diagnosis of Mental Disorders",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "NURS752": {
    "title": "Clinical Psychopharmacology",
    "credits": 2,
    "prereqs": "NURS 751 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "NURS753": {
    "title": "Psychotherapeutic Theories, Frameworks, and Modalities",
    "credits": 3,
    "prereqs": "NURS 752 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "NURS754": {
    "title": "Psychiatric Mental Health Nurse Practitioner Practicum I Adult/Gero",
    "credits": 4,
    "prereqs": "NURS 751 and NURS 752 and NURS 753",
    "offered": "Resident and Online"
  },
  "NURS755": {
    "title": "Psychiatric Mental Health Nurse Practitioner Practicum II Pediatrics/Family",
    "credits": 5,
    "prereqs": "NURS 751 and NURS 752 and NURS 753 and NURS 754",
    "offered": "Resident and Online"
  },
  "NURS764": {
    "title": "Learning Theories and Teaching Methods for Nurse Educators",
    "credits": 3,
    "offered": "Online"
  },
  "NURS765": {
    "title": "Curriculum Development and Program Evaluation for Nurse Educators",
    "credits": 3,
    "offered": "Online"
  },
  "NURS766": {
    "title": "Advanced Evaluation Strategies for Nurse Educators",
    "credits": 3,
    "prereqs": "NURS 764 and NURS 765",
    "offered": "Online"
  },
  "NURS767": {
    "title": "Transition to the Nurse Educator Role",
    "credits": 3,
    "prereqs": "NURS 766",
    "offered": "Online"
  },
  "NURS768": {
    "title": "Psychiatric Mental Health Nurse Practitioner Practicum I Adult/Gero",
    "credits": 4,
    "prereqs": "NURS 751 and NURS 752 and NURS 753",
    "offered": "Online"
  },
  "NURS769": {
    "title": "Psychiatric Mental Health Nurse Practitioner Practicum II Pediatrics/Family",
    "credits": 5,
    "prereqs": "NURS 751 and NURS 752 and NURS 753 and NURS 754",
    "offered": "Online"
  },
  "NURS784": {
    "title": "Assessment and Accreditation for Nursing Programs",
    "credits": 3,
    "offered": "Online"
  },
  "NURS815": {
    "title": "Quantitative Methods of Research",
    "credits": 3,
    "prereqs": "EDUC 812",
    "offered": "Online"
  },
  "NURS817": {
    "title": "Qualitative Methods of Research",
    "credits": 3,
    "prereqs": "EDUC 812",
    "offered": "Online"
  },
  "NURS820": {
    "title": "Comprehensive Exam",
    "credits": 0,
    "prereqs": "NURS 721 and NURS 716 and NURS 834 and NURS 718 and NURS 836 and NURS 832 and NURS 732 and NURS 731",
    "offered": "Resident and Online"
  },
  "NURS821": {
    "title": "Comprehensive Exam: Psychiatric Mental Health Nurse Practitioner",
    "credits": 0,
    "prereqs": "NURS 751 and NURS 752 and NURS 753 and NURS 754 and NURS 755 (may be taken concurrently)",
    "offered": "Online"
  },
  "NURS832": {
    "title": "Clinical Prevention and Biostatistics",
    "credits": 3,
    "prereqs": "NURS 715 and NURS 716 and NURS 718 and NURS 721 and Grad Biostatistics with a score of 3",
    "offered": "Online"
  },
  "NURS833": {
    "title": "Higher Educational Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "NURS834": {
    "title": "Health Care Operations and Financial Management",
    "credits": 3,
    "prereqs": "NURS 832",
    "offered": "Online"
  },
  "NURS835": {
    "title": "Theories of Nursing",
    "credits": 3,
    "offered": "Online"
  },
  "NURS836": {
    "title": "Translational Research in Health Care",
    "credits": 3,
    "prereqs": "NURS 715 and NURS 716 and NURS 718 and NURS 832",
    "offered": "Online"
  },
  "NURS837": {
    "title": "Grant Writing and Publication",
    "credits": 3,
    "offered": "Online"
  },
  "NURS838": {
    "title": "Family Nurse Practitioner Practicum III",
    "credits": 5,
    "prereqs": "NURS 736 or NURS 744",
    "offered": "Resident and Online"
  },
  "NURS839": {
    "title": "Proposal Development",
    "credits": 2,
    "prereqs": "NURS 716 and NURS 832 and NURS 836 and (NURS 700 or Grad Rsrch Methods (NURS 500) with a score of 3)",
    "offered": "Resident and Online"
  },
  "NURS840": {
    "title": "DNP Practicum I",
    "credits": 2,
    "prereqs": "NURS 832 and NURS 834 and NURS 836 and (NURS 820 or NURS 821)",
    "offered": "Resident"
  },
  "NURS841": {
    "title": "DNP Practicum II",
    "credits": 2,
    "prereqs": "NURS 840",
    "offered": "Resident"
  },
  "NURS842": {
    "title": "DNP Practicum III",
    "credits": 2,
    "prereqs": "NURS 841",
    "offered": "Resident"
  },
  "NURS843": {
    "title": "DNP Practicum IV",
    "credits": 2,
    "prereqs": "NURS 842",
    "offered": "Resident"
  },
  "NURS844": {
    "title": "DNP Practicum V",
    "credits": 2,
    "prereqs": "NURS 843",
    "offered": "Resident"
  },
  "NURS915": {
    "title": "Advanced Quantitative Methods of Nursing Research",
    "credits": 3,
    "prereqs": "NURS 815",
    "offered": "Online"
  },
  "NURS917": {
    "title": "Advanced Qualitative Methods of Nursing Research",
    "credits": 3,
    "prereqs": "NURS 817",
    "offered": "Online"
  },
  "NURS947": {
    "title": "Scholarly Project Planning",
    "credits": 1,
    "prereqs": "NURS 836",
    "offered": "Online"
  },
  "NURS948": {
    "title": "Scholarly Project I",
    "credits": 1,
    "prereqs": "NURS 947",
    "offered": "Online"
  },
  "NURS949": {
    "title": "Scholarly Project II",
    "credits": 1,
    "prereqs": "NURS 948",
    "offered": "Online"
  },
  "NURS950": {
    "title": "Scholarly Project Defense",
    "credits": 1,
    "prereqs": "NURS 949",
    "offered": "Online"
  },
  "NURS980": {
    "title": "Nursing Comprehensive Exam",
    "credits": 0,
    "prereqs": "NURS 700 and NURS 721 and NURS 722 and NURS 835 and EDUC 703 and NURS 764 and NURS 765 and NURS 766 and NURS 784 and NURS 833 and EDUC 812 and NURS 815 and NURS 817 and NURS 837 and (NURS 915 or NURS 917)",
    "offered": "Online"
  },
  "NURS987": {
    "title": "Dissertation Planning",
    "credits": 5,
    "prereqs": "NURS 980",
    "offered": "Online"
  },
  "NURS988": {
    "title": "Dissertation I",
    "credits": 5,
    "offered": "Online"
  },
  "NURS989": {
    "title": "Dissertation II",
    "credits": 5,
    "offered": "Online"
  },
  "NURS990": {
    "title": "Dissertation Defense",
    "credits": 0,
    "prereqs": "NURS 989",
    "offered": "Online"
  },
  "NUTR641": {
    "title": "Nutritional Biochemistry I",
    "credits": 3,
    "prereqs": "HLTH 640",
    "offered": "Online"
  },
  "NUTR642": {
    "title": "Nutritional Biochemistry II",
    "credits": 3,
    "prereqs": "NUTR 641",
    "offered": "Online"
  },
  "NUTR645": {
    "title": "Child and Adolescent Nutrition",
    "credits": 3,
    "offered": "Online"
  },
  "NUTR646": {
    "title": "Nutrition for Pregnancy and Lactation",
    "credits": 3,
    "offered": "Online"
  },
  "NUTR647": {
    "title": "Geriatric Nutrition",
    "credits": 3,
    "offered": "Online"
  },
  "NUTR648": {
    "title": "Nutritional Program Planning",
    "credits": 3,
    "offered": "Online"
  },
  "NUTR649": {
    "title": "Nutrition Education",
    "credits": 3,
    "offered": "Online"
  },
  "NUTR650": {
    "title": "Nutrition Research",
    "credits": 3,
    "prereqs": "HLTH 501 and HLTH 503 and HLTH 640",
    "offered": "Online"
  },
  "OBST510": {
    "title": "Old Testament Introduction",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST515": {
    "title": "Old Testament Orientation I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST520": {
    "title": "Old Testament Orientation II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST640": {
    "title": "Apologetics and the Old Testament",
    "credits": 3,
    "prereqs": "APOL 500 and NBST 610",
    "offered": "Resident and Online"
  },
  "OBST650": {
    "title": "Genesis",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST651": {
    "title": "Creation, Cosmology and Genesis",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST655": {
    "title": "Joshua-Kings",
    "credits": 3,
    "offered": "Online"
  },
  "OBST659": {
    "title": "Job-Song of Songs and Lamentations",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST660": {
    "title": "Psalms",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST661": {
    "title": "Isaiah",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST662": {
    "title": "Jeremiah and Ezekiel",
    "credits": 3,
    "offered": "Resident"
  },
  "OBST663": {
    "title": "Daniel",
    "credits": 3
  },
  "OBST664": {
    "title": "Pre-Exilic Minor Prophets",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST680": {
    "title": "New Testament Development of Old Testament Themes",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST695": {
    "title": "Directed Research in Old Testament Biblical Studies",
    "credits": 3,
    "offered": "Online"
  },
  "OBST697": {
    "title": "Seminar in Old Testament",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OBST800": {
    "title": "Old Testament Backgrounds",
    "credits": 3,
    "prereqs": "BIBL 700 and BIBL 715 and (NGRK 505 and NGRK 511 or NGRK 620 and NGRK 643 or NGRK 644 or NGRK 645 or NGRK 646) and (OTCL 505 and OTCL 511 or OTCL 640 and OTCL 643)",
    "offered": "Resident and Online"
  },
  "OBST815": {
    "title": "Law",
    "credits": 3,
    "prereqs": "OBST 800",
    "offered": "Online"
  },
  "OBST830": {
    "title": "Prophets I",
    "credits": 3,
    "prereqs": "OBST 800",
    "offered": "Online"
  },
  "OBST845": {
    "title": "Prophets II",
    "credits": 3,
    "prereqs": "OBST 800",
    "offered": "Online"
  },
  "OBST860": {
    "title": "Writings",
    "credits": 3,
    "prereqs": "OBST 800",
    "offered": "Online"
  },
  "OBST900": {
    "title": "Reading Seminar in the Ancient Near East",
    "credits": 3,
    "offered": "Resident"
  },
  "OBST910": {
    "title": "Uses of the Old Testament in the New Testament",
    "credits": 3,
    "offered": "Resident"
  },
  "OBST922": {
    "title": "The Theology of the Torah",
    "credits": 3,
    "offered": "Resident"
  },
  "OBST933": {
    "title": "Isaiah",
    "credits": 3
  },
  "OBST935": {
    "title": "Daniel",
    "credits": 3
  },
  "OBST938": {
    "title": "Daniel",
    "credits": 3
  },
  "OBST950": {
    "title": "Special Topics in the Old Testament",
    "credits": 3,
    "offered": "Resident"
  },
  "OBST968": {
    "title": "Current Biblical and Theological Issues",
    "credits": 3,
    "offered": "Resident"
  },
  "OBST995": {
    "title": "Directed Research in Old Testament Biblical Studies",
    "credits": 3,
    "offered": "Resident"
  },
  "OBST997": {
    "title": "Seminar in Old Testament",
    "credits": 3,
    "offered": "Resident"
  },
  "OTCL505": {
    "title": "Hebrew Language Tools",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OTCL511": {
    "title": "Advanced Hebrew Language Tools",
    "credits": 3,
    "prereqs": "OTCL 505",
    "offered": "Online"
  },
  "OTCL520": {
    "title": "Beginning Hebrew I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "OTCL525": {
    "title": "Beginning Hebrew II",
    "credits": 3,
    "prereqs": "OTCL 520",
    "offered": "Resident and Online"
  },
  "OTCL640": {
    "title": "Hebrew Syntax and Exegesis",
    "credits": 3,
    "prereqs": "OTCL 525",
    "offered": "Resident and Online"
  },
  "OTCL643": {
    "title": "Hebrew Exegesis Elective",
    "credits": 3,
    "prereqs": "OTCL 520 and OTCL 525",
    "offered": "Resident and Online"
  },
  "OTCL660": {
    "title": "Biblical Aramaic",
    "credits": 3,
    "offered": "Resident"
  },
  "OTCL695": {
    "title": "Directed Research in Hebrew",
    "credits": 1
  },
  "OTCL697": {
    "title": "Seminar in Old Testament Language",
    "credits": 1,
    "offered": "Resident"
  },
  "OTCL997": {
    "title": "Seminar in Old Testament Language",
    "credits": 3
  },
  "PACO500": {
    "title": "Introduction to Pastoral Counseling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PACO501": {
    "title": "Foundational Doctrines for Pastoral Counselors",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PACO504": {
    "title": "Multicultural Issues in Pastoral Counseling",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Resident and Online"
  },
  "PACO506": {
    "title": "Integration of Psychology and Theology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PACO507": {
    "title": "Theology and Spirituality in Counseling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PACO509": {
    "title": "Spiritual Formation in Pastoral Counseling",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Resident and Online"
  },
  "PACO597": {
    "title": "Seminar",
    "credits": 1
  },
  "PACO603": {
    "title": "Premarital and Marital Counseling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PACO604": {
    "title": "Crisis Intervention in Pastoral Counseling",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Resident and Online"
  },
  "PACO611": {
    "title": "Counseling the Child and Their Families",
    "credits": 3,
    "offered": "Online"
  },
  "PACO615": {
    "title": "Marriage and Family Counseling",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Online"
  },
  "PACO617": {
    "title": "Theories and Techniques in Pastoral Counseling",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Resident and Online"
  },
  "PACO618": {
    "title": "Advanced Marriage and Family Counseling",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501 and PACO 615",
    "offered": "Online"
  },
  "PACO620": {
    "title": "Counseling the Adolescent and Their Families",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Online"
  },
  "PACO622": {
    "title": "Counseling the Child and Adolescent",
    "credits": 3
  },
  "PACO625": {
    "title": "Healthy Sexuality",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Online"
  },
  "PACO630": {
    "title": "Gerontology and Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "PACO687": {
    "title": "Counseling Women",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501",
    "offered": "Online"
  },
  "PACO695": {
    "title": "Directed Research in Pastoral Counseling",
    "credits": 3,
    "offered": "Resident"
  },
  "PACO697": {
    "title": "Seminar in Pastoral Counseling",
    "credits": 3
  },
  "PACO698": {
    "title": "Practicum",
    "credits": 3
  },
  "PACO699": {
    "title": "Pastoral Counseling Internship",
    "credits": 3,
    "prereqs": "PACO 500 and PACO 501 and PACO 504 and PACO 509 and PACO 604 and PACO 615 and PACO 617",
    "offered": "Online"
  },
  "PACO821": {
    "title": "Ethics and Issues in Pastoral Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "PACO825": {
    "title": "Growth &amp; Development of the Contemporary Minister",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "PACO826": {
    "title": "Growth and Development of the Pastoral Counselor",
    "credits": 3,
    "offered": "Online"
  },
  "PACO830": {
    "title": "Individual &amp; Family Issues in Pastoral Counseling",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "PACO835": {
    "title": "Premarital &amp; Marital Issues in Pastoral Counseling",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "PACO840": {
    "title": "Crises and Current Issues in Pastoral Counseling",
    "credits": 3,
    "prereqs": "DMIN 810",
    "offered": "Online"
  },
  "PACO895": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Online"
  },
  "PACO897": {
    "title": "Seminar in Pastoral Counseling",
    "credits": 3,
    "offered": "Online"
  },
  "PACO989": {
    "title": "Dissertation",
    "credits": 3,
    "offered": "Online"
  },
  "PACO990": {
    "title": "Dissertation Defense",
    "credits": 3,
    "offered": "Online"
  },
  "PADM360": {
    "title": "Introduction to Public Administration",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "PADM462": {
    "title": "Public Financing &amp; Budgeting",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "PADM475": {
    "title": "Advanced Public Administration",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Resident and Online"
  },
  "PADM480": {
    "title": "Legal &amp; Political Issues in Public Administration",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Online"
  },
  "PADM485": {
    "title": "Public Administration Leadership &amp; Community Engagement",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Online"
  },
  "PADM492": {
    "title": "Public Administration Seminar",
    "credits": 3,
    "prereqs": "GOVT 200",
    "offered": "Online"
  },
  "PADM501": {
    "title": "Fundamentals of Public Administration",
    "credits": 3,
    "offered": "Online"
  },
  "PADM510": {
    "title": "Fundamentals of Public Safety Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "PADM530": {
    "title": "Politics, Strategies, and Initiatives of Community Economic Development",
    "credits": 3,
    "offered": "Online"
  },
  "PADM550": {
    "title": "Public Policy Analysis",
    "credits": 3,
    "offered": "Online"
  },
  "PADM600": {
    "title": "Politics &amp; Policy of Public Sector Budgeting",
    "credits": 3,
    "offered": "Online"
  },
  "PADM610": {
    "title": "Management of Public Sector Organizations",
    "credits": 3,
    "offered": "Online"
  },
  "PADM620": {
    "title": "Public Administration Praxis: Legal &amp; Contemporary Issues",
    "credits": 3,
    "offered": "Online"
  },
  "PADM688": {
    "title": "Thesis Proposal",
    "credits": 3,
    "offered": "Online"
  },
  "PADM689": {
    "title": "Thesis Research",
    "credits": 3,
    "prereqs": "PADM 688",
    "offered": "Online"
  },
  "PADM690": {
    "title": "Thesis Defense",
    "credits": 3,
    "offered": "Online"
  },
  "PADM700": {
    "title": "Public Administration Ethics, Statesmanship, &amp; Governance",
    "credits": 3,
    "offered": "Online"
  },
  "PADM702": {
    "title": "Advanced Public Administration Finance and Budgeting",
    "credits": 3,
    "offered": "Online"
  },
  "PADM704": {
    "title": "Human Resources and the Legal and Regulatory Context of Public Administration",
    "credits": 3,
    "prereqs": "PADM 700",
    "offered": "Online"
  },
  "PADM708": {
    "title": "Studies in Urban Planning and State and Local Government",
    "credits": 3,
    "prereqs": "PADM 700",
    "offered": "Online"
  },
  "PADM710": {
    "title": "Information Management in Public Sector Organizations",
    "credits": 3,
    "prereqs": "PADM 700",
    "offered": "Online"
  },
  "PADM712": {
    "title": "Organizational Leadership and Behavior in Public Administration",
    "credits": 3,
    "prereqs": "PADM 700",
    "offered": "Online"
  },
  "PADM804": {
    "title": "Intergovernmental Relations and Public Administration",
    "credits": 3,
    "prereqs": "PADM 700",
    "offered": "Online"
  },
  "PADM805": {
    "title": "Public Administration and Research Design",
    "credits": 3,
    "prereqs": "PADM 700",
    "offered": "Online"
  },
  "PADM810": {
    "title": "Quantitative Methods for Public Administration",
    "credits": 3,
    "prereqs": "PADM 700",
    "offered": "Online"
  },
  "PADM812": {
    "title": "Qualitative Methods for Public Administration",
    "credits": 3,
    "prereqs": "PADM 810",
    "offered": "Online"
  },
  "PADM885": {
    "title": "Research Concept",
    "credits": 3,
    "prereqs": "PADM 700 and PADM 702 and PADM 704 and PADM 708 and PADM 710 and PADM 712 and PLCY 804 and PLCY 805 and PADM 810 and PADM 812",
    "note": "A dissertation chair and reader must be selected using the Dissertation Pairing tool, prior to enrolling in this course.",
    "offered": "Online"
  },
  "PADM887": {
    "title": "Capstone I",
    "credits": 5,
    "prereqs": "PADM 885",
    "offered": "Online"
  },
  "PADM888": {
    "title": "Capstone II",
    "credits": 5,
    "prereqs": "PADM 887",
    "offered": "Online"
  },
  "PADM889": {
    "title": "Capstone III",
    "credits": 5,
    "prereqs": "PADM 888",
    "offered": "Online"
  },
  "PADM890": {
    "title": "Capstone IV",
    "credits": 0,
    "prereqs": "PADM 889",
    "offered": "Online"
  },
  "PADM987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "PADM 885",
    "offered": "Online"
  },
  "PADM988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "PADM 987",
    "offered": "Online"
  },
  "PADM989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "PADM 988",
    "offered": "Online"
  },
  "PADM990": {
    "title": "Dissertation IV",
    "credits": 0,
    "prereqs": "PADM 989",
    "offered": "Online"
  },
  "PDBC101": {
    "title": "Test",
    "credits": 0
  },
  "PDBC103": {
    "title": "Lab for Lecture",
    "credits": 0
  },
  "PDCT101": {
    "title": "How to Create Eye-Popping Visuals Using Canva",
    "credits": 0
  },
  "PDCT102": {
    "title": "The Thriving Professor: Finishing the Semester with Fervor",
    "credits": 0
  },
  "PDCT103": {
    "title": "Camp Canvas Base Camp",
    "credits": 0
  },
  "PDCT104": {
    "title": "Camp Canvas Next-Level Camp",
    "credits": 0
  },
  "PDCT105": {
    "title": "Tackling Top Hat (for New or Nearly New Users)",
    "credits": 0
  },
  "PDCT106": {
    "title": "Tips for Microsoft Teams",
    "credits": 0
  },
  "PDCT107": {
    "title": "Pre-Recording Lectures with Microsoft Teams or Kaltura",
    "credits": 0
  },
  "PDCT108": {
    "title": "Building Interactive Presentations with Adobe Spark",
    "credits": 0
  },
  "PDCT109": {
    "title": "Communicating with Students",
    "credits": 0
  },
  "PDCT110": {
    "title": "Formative and Summative Assessment with Top Hat",
    "credits": 0
  },
  "PDCT111": {
    "title": "Managing the Gradebook in Canvas",
    "credits": 0
  },
  "PDCT112": {
    "title": "Feedback and Assessment in Canvas",
    "credits": 0
  },
  "PDCT113": {
    "title": "Substantive Grading Feedback",
    "credits": 0
  },
  "PDCT114": {
    "title": "Best Practices for Creating Tests and Quizzes in Canvas",
    "credits": 0
  },
  "PDCT115": {
    "title": "Creating Assignments in Canvas",
    "credits": 0
  },
  "PDCT116": {
    "title": "Enhancing Visual Fluency with Adobe Spark",
    "credits": 0
  },
  "PDCT117": {
    "title": "Canvas Features for Grading",
    "credits": 0
  },
  "PDCT118": {
    "title": "Creating High-Impact Visuals with Canva",
    "credits": 0
  },
  "PDCT119": {
    "title": "Group Projects in Canvas",
    "credits": 0
  },
  "PDCT121": {
    "title": "Learning Analytics in Canvas",
    "credits": 0
  },
  "PDCT122": {
    "title": "Canvas Inbox Features",
    "credits": 0
  },
  "PDCT123": {
    "title": "Teaching Students Study Skills",
    "credits": 0
  },
  "PDCT124": {
    "title": "Making Animated Videos with Adobe Spark",
    "credits": 0
  },
  "PDCT125": {
    "title": "Peer-Reviewed Assignments in Canvas",
    "credits": 0
  },
  "PDCT126": {
    "title": "Getting More Done (and Having More Fun) - Productivity Tips for Busy Faculty",
    "credits": 0
  },
  "PDCT128": {
    "title": "Helping Students Across the Finish Line",
    "credits": 0
  },
  "PDCT129": {
    "title": "Koinonia (New Faculty Mentoring) Meet and Greet",
    "credits": 0
  },
  "PDCT130": {
    "title": "UNIV 101 Academy",
    "credits": 0
  },
  "PDCT131": {
    "title": "Top Hat Course Set-Up and Sync",
    "credits": 0
  },
  "PDCT132": {
    "title": "Microsoft Teams Course Set-Up and Sync",
    "credits": 0
  },
  "PDCT135": {
    "title": "Mastering MS Teams and In-Person Instruction Simultaneously",
    "credits": 0
  },
  "PDCT136": {
    "title": "Pre-Recorded Lectures with Kaltura",
    "credits": 0
  },
  "PDCT137": {
    "title": "Faculty Office Hours Management",
    "credits": 0
  },
  "PDCT138": {
    "title": "Building Tests and Quizzes in Canvas",
    "credits": 0
  },
  "PDCT139": {
    "title": "Strategies to Increase Student Submission Rates",
    "credits": 0
  },
  "PDCT140": {
    "title": "Increasing Student Success Through Email",
    "credits": 0
  },
  "PDCT141": {
    "title": "How Reliable is Your Quiz? Canvas Quiz Item Analysis",
    "credits": 0
  },
  "PDCT142": {
    "title": "Working with Difficult Students - Classroom Management",
    "credits": 0
  },
  "PDCT143": {
    "title": "Creating High-Integrity Assignments",
    "credits": 0
  },
  "PDCT144": {
    "title": "Building Assignments in Canvas",
    "credits": 0
  },
  "PDCT145": {
    "title": "Managing the Canvas Gradebook and Using Speed Grader",
    "credits": 0
  },
  "PDCT147": {
    "title": "Creating Secure Exams in Canvas",
    "credits": 0
  },
  "PDCT148": {
    "title": "Working with Second-Language Learners",
    "credits": 0
  },
  "PDCT149": {
    "title": "Five Faculty FAQs with Canvas",
    "credits": 0
  },
  "PDCT150": {
    "title": "Motivating Students to Finish Strong",
    "credits": 0
  },
  "PDCT153": {
    "title": "Faith Across the Disciplines",
    "credits": 0
  },
  "PDCT155": {
    "title": "Presentation Modes in Microsoft Teams",
    "credits": 0
  },
  "PDCT156": {
    "title": "Teaching Academies: Announcements and Presentations that Students Will Watch",
    "credits": 0
  },
  "PDCT157": {
    "title": "Teaching Academies: Edit, Caption, and Subdivide Videos for Students",
    "credits": 0
  },
  "PDCT158": {
    "title": "Teaching Academies: How to Build a Live Escape Room for Your Class",
    "credits": 0
  },
  "PDCT159": {
    "title": "Teaching Academies: How to Create a Virtual Escape Room in Your Subject",
    "credits": 0
  },
  "PDCT160": {
    "title": "Teaching with Technology Bootcamp",
    "credits": 0
  },
  "PDCT161": {
    "title": "Canvas Training for Teachers",
    "credits": 0
  },
  "PDCT162": {
    "title": "Best Practices for Making a Video",
    "credits": 0
  },
  "PDCT163": {
    "title": "5 Common Canvas Design Mistakes that Confuse Students",
    "credits": 0
  },
  "PDCT164": {
    "title": "Teaching Students How to Read, Understand, and Retain University-Level Texts",
    "credits": 0
  },
  "PDCT165": {
    "title": "Recording On-Camera and Screen Capture Video with Kaltura",
    "credits": 0
  },
  "PDCT166": {
    "title": "Transferring Videos from Teams to Kaltura to Canvas",
    "credits": 0
  },
  "PDCT167": {
    "title": "Making Simple Animated Videos with Adobe Express Video",
    "credits": 0
  },
  "PDCT168": {
    "title": "Teaching Students to Read Research Articles",
    "credits": 0
  },
  "PDCT169": {
    "title": "How to Keep Your RESDEV Updated Throughout the Year (For Course Designers Only)",
    "credits": 0
  },
  "PDCT170": {
    "title": "Video Editing in Kaltura",
    "credits": 0
  },
  "PDCT171": {
    "title": "Canvas Settings to Prevent Cheating on Midterms",
    "credits": 0
  },
  "PDCT172": {
    "title": "Making Great Slide Presentation Templates with Adobe Express Post",
    "credits": 0
  },
  "PDCT173": {
    "title": "Increasing Student Submission Rates",
    "credits": 0
  },
  "PDCT174": {
    "title": "Captioning Videos in Kaltura",
    "credits": 0
  },
  "PDCT175": {
    "title": "Adding Hotspots in Kaltura Videos",
    "credits": 0
  },
  "PDCT176": {
    "title": "Making Great Interactive Presentations with Adobe Express Page",
    "credits": 0
  },
  "PDCT177": {
    "title": "Maximum Efficiency Grading that Saves You Time and Increases Student Succes",
    "credits": 0
  },
  "PDCT178": {
    "title": "Adding Interactive Questions in Kaltura Videos",
    "credits": 0
  },
  "PDCT179": {
    "title": "How to Prepare Your RESDEV for Next Semester (For Course Designers Only)",
    "credits": 0
  },
  "PDCT180": {
    "title": "Things You Probably Didn't Know About Kaltura",
    "credits": 0
  },
  "PDCT182": {
    "title": "Canvas Training for Course Builders/Designers",
    "credits": 0
  },
  "PDCT185": {
    "title": "Tech Coaching for Faculty: Covering Concourse for the Classroom",
    "credits": 0
  },
  "PDCT186": {
    "title": "Tech Coaching for Faculty: Kickoff with Kaltura for the Classroom",
    "credits": 0
  },
  "PDCT187": {
    "title": "Tech Coaching for Faculty: Tackling Microsoft Teams in the Classroom",
    "credits": 0
  },
  "PDCT188": {
    "title": "Tech Coaching for Faculty: Tackling Top Hat in the Classroom",
    "credits": 0
  },
  "PDCT189": {
    "title": "Top Hat &amp; Liberty: Enhancing our Partnership",
    "credits": 0
  },
  "PDCT190": {
    "title": "Welcome Vid Make Gr First Impr",
    "credits": 0
  },
  "PDCT191": {
    "title": "Prov Transform Feedback Stud",
    "credits": 0
  },
  "PDCT192": {
    "title": "How Create &amp; Grade Ex Cr Assig",
    "credits": 0
  },
  "PDCT193": {
    "title": "Giv Aud &amp; Vid Feedback Canvas",
    "credits": 0
  },
  "PDEL101": {
    "title": "eLearning 175",
    "credits": 0
  },
  "PDEL102": {
    "title": "eLearning 177",
    "credits": 0
  },
  "PDEL103": {
    "title": "eLearning 171",
    "credits": 0
  },
  "PDEL104": {
    "title": "eLearning 173",
    "credits": 0
  },
  "PDEL105": {
    "title": "eLearning 304",
    "credits": 0
  },
  "PDEL106": {
    "title": "eLearning 303",
    "credits": 0
  },
  "PDEL107": {
    "title": "eLearning 150",
    "credits": 0
  },
  "PDEM101": {
    "title": "MILT_RT",
    "credits": 0
  },
  "PDFN100": {
    "title": "Foundations of Finance",
    "credits": 0
  },
  "PDFN102": {
    "title": "FOAPAL (LU Chart of Accounts)",
    "credits": 0,
    "prereqs": "PDFN 100"
  },
  "PDFN200": {
    "title": "Travel: Policies and Procedures",
    "credits": 0,
    "prereqs": "PDFN 100"
  },
  "PDFN210": {
    "title": "Introduction to buyLU",
    "credits": 0,
    "prereqs": "PDFN 100 and PDFN 102"
  },
  "PDFN220": {
    "title": "Infor Expense Reports",
    "credits": 0,
    "prereqs": "PDFN 100"
  },
  "PDFN300": {
    "title": "Principles of Strategic Financial Planning",
    "credits": 0,
    "prereqs": "PDFN 100 and PDFN 102"
  },
  "PDFN310": {
    "title": "Managing Budget Line Items",
    "credits": 0,
    "prereqs": "PDFN 100 and PDFN 102"
  },
  "PDFN320": {
    "title": "Approver Best Practices",
    "credits": 0,
    "prereqs": "PDFN 100 and PDFN 102"
  },
  "PDHR101": {
    "title": "DPC 101",
    "credits": 0
  },
  "PDIE101": {
    "title": "IE_Train 100",
    "credits": 0
  },
  "PDIE102": {
    "title": "IE_CourseLeaf",
    "credits": 0
  },
  "PDIE103": {
    "title": "IE_ASMTResearch",
    "credits": 0
  },
  "PDIE104": {
    "title": "IE_Workshop 20",
    "credits": 0
  },
  "PDIT101": {
    "title": "ITT 100",
    "credits": 0
  },
  "PDIT102": {
    "title": "WMT",
    "credits": 0
  },
  "PDIT103": {
    "title": "ITT 270",
    "credits": 0
  },
  "PDIT104": {
    "title": "LCM 101",
    "credits": 0
  },
  "PDIT105": {
    "title": "ITT 287",
    "credits": 0
  },
  "PDIT106": {
    "title": "ITT 127B",
    "credits": 0
  },
  "PDIT107": {
    "title": "MS Teams 100",
    "credits": 0
  },
  "PDIT108": {
    "title": "WRDP102",
    "credits": 0
  },
  "PHED101": {
    "title": "Physical Fitness",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED140": {
    "title": "Introduction to Athletic Training",
    "credits": 2
  },
  "PHED141": {
    "title": "Advanced Athletic Training",
    "credits": 2
  },
  "PHED170": {
    "title": "Equestrian: Horsemanship I",
    "credits": 2,
    "offered": "Resident"
  },
  "PHED189": {
    "title": "PE Observations in Schools",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED200": {
    "title": "Basketball/Soccer",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED201": {
    "title": "Flag Football/Innovative Games",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED202": {
    "title": "Racquet Sports",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED203": {
    "title": "Tumbling and Rhythmic Activities",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED204": {
    "title": "Softball/Volleyball",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED205": {
    "title": "Innovative Games",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED207": {
    "title": "History and Foundations of Physical Education",
    "credits": 2,
    "offered": "Resident"
  },
  "PHED208": {
    "title": "Motor Learning",
    "credits": 2,
    "offered": "Resident"
  },
  "PHED209": {
    "title": "Motor Learning Lab",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED216": {
    "title": "Field Hockey",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED217": {
    "title": "Lacrosse",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED218": {
    "title": "Tennis",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED219": {
    "title": "Mountain Biking",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED220": {
    "title": "Bowling",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED221": {
    "title": "Golf",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED222": {
    "title": "Archery",
    "credits": 1
  },
  "PHED224": {
    "title": "Tumbling/Gymnastics",
    "credits": 1
  },
  "PHED225": {
    "title": "Weight Training/Conditioning",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED226": {
    "title": "Wrestling",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED227": {
    "title": "Fencing",
    "credits": 1
  },
  "PHED228": {
    "title": "Beginning Swimming",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED229": {
    "title": "Intermediate/Advanced Swimming",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED230": {
    "title": "Lifeguard Training (American Red Cross)",
    "credits": 2,
    "offered": "Resident"
  },
  "PHED231": {
    "title": "Water Safety Instructor (American Red Cross)",
    "credits": 3,
    "offered": "Resident"
  },
  "PHED232": {
    "title": "Recreational Sports",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED233": {
    "title": "Mixed Martial Arts",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED234": {
    "title": "Hapkido",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED235": {
    "title": "Beginning Running",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED236": {
    "title": "Advanced Running",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED237": {
    "title": "Ice Hockey",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED270": {
    "title": "Equestrian: Horsemanship II",
    "credits": 2,
    "prereqs": "PHED 170",
    "offered": "Resident"
  },
  "PHED280": {
    "title": "Equestrian: Horsemanship III",
    "credits": 2,
    "prereqs": "PHED 270",
    "offered": "Resident"
  },
  "PHED289": {
    "title": "PE Student Aide: Elementary",
    "credits": 1,
    "prereqs": "(PHED 189 or PHED 245) and Undergraduate Initial Gate 2 with a score of 5 and Background Check Clearance with a score of 5",
    "note": "(Offered spring semester)",
    "offered": "Resident"
  },
  "PHED299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "PHED304": {
    "title": "Coaching Football",
    "credits": 3
  },
  "PHED306": {
    "title": "Coaching Basketball",
    "credits": 3
  },
  "PHED310": {
    "title": "Physiology of Exercise",
    "credits": 3
  },
  "PHED311": {
    "title": "Kinesiology",
    "credits": 3
  },
  "PHED314": {
    "title": "Officiating in Athletics",
    "credits": 2
  },
  "PHED320": {
    "title": "Measure &amp; Eval in Hlth and PE",
    "credits": 3
  },
  "PHED326": {
    "title": "PE Student Aide:Middle or Seco",
    "credits": 1
  },
  "PHED333": {
    "title": "Adapted PE",
    "credits": 2
  },
  "PHED334": {
    "title": "Adapted PE Lab",
    "credits": 1
  },
  "PHED335": {
    "title": "Adapted Physical Activity",
    "credits": 2,
    "offered": "Resident"
  },
  "PHED336": {
    "title": "Adapted Physical Activity Lab",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED340": {
    "title": "Coaching Strength and Weight Training",
    "credits": 3
  },
  "PHED352": {
    "title": "Teaching Physical Education in the Elementary School",
    "credits": 2,
    "offered": "Resident"
  },
  "PHED389": {
    "title": "PE Student Aide: Secondary",
    "credits": 1,
    "prereqs": "(PHED 189 or PHED 245) and PHED 451 and Undergraduate Initial Gate 2 with a score of 5 and Background Check Clearance with a score of 5",
    "note": "(Offered fall semester)",
    "offered": "Resident"
  },
  "PHED401": {
    "title": "Physical Education Practicum-S",
    "credits": 2
  },
  "PHED404": {
    "title": "Adm/Org of PE, SMGT, Exer.Sci",
    "credits": 3
  },
  "PHED405": {
    "title": "Administration and Organization of Physical Education, Exercise and Fitness",
    "credits": 3,
    "offered": "Resident"
  },
  "PHED435": {
    "title": "Seminar for Student Teachers",
    "credits": 2,
    "prereqs": "EDUC 475 (may be taken concurrently) and EDUC 476 (may be taken concurrently)",
    "offered": "Resident"
  },
  "PHED450": {
    "title": "Elementary Physical Education Methods &amp; Behavior Management",
    "credits": 3,
    "prereqs": "PHED 207 and PHED 208 and Undergraduate Initial Gate 2 with a score of 5 and Background Check Clearance with a score of 5",
    "note": "(Offered spring semester)",
    "offered": "Resident"
  },
  "PHED451": {
    "title": "Secondary Physical Education Methods",
    "credits": 3,
    "prereqs": "PHED 207 and PHED 208 and Undergraduate Initial Gate 2 with a score of 5 and Background Check Clearance with a score of 5",
    "note": "(Offered fall semester)",
    "offered": "Resident"
  },
  "PHED460": {
    "title": "Exercise Test/Eval/Perscriptio",
    "credits": 3
  },
  "PHED461": {
    "title": "Exercise Leadership",
    "credits": 3
  },
  "PHED495": {
    "title": "Independent Study",
    "credits": 1
  },
  "PHED496": {
    "title": "Directed Research in Kinesiology",
    "credits": 1,
    "offered": "Resident"
  },
  "PHED497": {
    "title": "Special Topics in Kinesiology",
    "credits": 1
  },
  "PHED499": {
    "title": "Professional Practicum in PE",
    "credits": 3
  },
  "PHGT510": {
    "title": "Public Health Orientation",
    "credits": 0,
    "offered": "Online"
  },
  "PHGT512": {
    "title": "Public Health Essay",
    "credits": 0,
    "prereqs": "HLTH 501 and PHGT 510",
    "offered": "Online"
  },
  "PHGT513": {
    "title": "Public Health Portfolio",
    "credits": 0,
    "prereqs": "HLTH 501 and HLTH 503 and HLTH 505 and HLTH 507 and HLTH 509 and HLTH 511 (may be taken concurrently) and PHGT 512",
    "offered": "Online"
  },
  "PHGT514": {
    "title": "Public Health Competency Exam",
    "credits": 0,
    "prereqs": "HLTH 501 and HLTH 503 and HLTH 505 and HLTH 507 and HLTH 509 and HLTH 511 and PHGT 513",
    "offered": "Online"
  },
  "PHIL200": {
    "title": "Pursuits of Happiness",
    "credits": 3,
    "offered": "Online"
  },
  "PHIL201": {
    "title": "Philosophy and Contemporary Ideas",
    "credits": 3,
    "prereqs": "ENGL 101",
    "offered": "Resident and Online"
  },
  "PHIL210": {
    "title": "Logic",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL240": {
    "title": "Christian Evidences",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PHIL301": {
    "title": "History of Philosophy I",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL302": {
    "title": "History of Philosophy II",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL303": {
    "title": "History of Philosophy III",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL310": {
    "title": "Symbolic Logic",
    "credits": 3,
    "prereqs": "PHIL 210",
    "offered": "Resident"
  },
  "PHIL346": {
    "title": "Eastern Philosophies",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL350": {
    "title": "Ethics",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL360": {
    "title": "Philosophy of Science",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL380": {
    "title": "Biomedical Ethics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PHIL420": {
    "title": "Epistemology",
    "credits": 3,
    "prereqs": "PHIL 201 or PHIL 210 or PHIL 240 or PHIL 301 or PHIL 302 or PHIL 303 or PHIL 310 or PHIL 346 or PHIL 350 or PHIL 360 or PHIL 380 or PHIL 429 or PHIL 465 or PHIL 468",
    "offered": "Resident"
  },
  "PHIL429": {
    "title": "The Thought of St. Augustine",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL430": {
    "title": "Metaphysics",
    "credits": 3,
    "prereqs": "(PHIL 201 or PHIL 210 or PHIL 240 or PHIL 301 or PHIL 302 or PHIL 303 or PHIL 310 or PHIL 346 or PHIL 350 or PHIL 360 or PHIL 380 or PHIL 429 or PHIL 465 or PHIL 468) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "PHIL440": {
    "title": "Philosophy of Religion",
    "credits": 3,
    "prereqs": "PHIL 201 or PHIL 210 or PHIL 240 or PHIL 301 or PHIL 302 or PHIL 303 or PHIL 310 or PHIL 346 or PHIL 350 or PHIL 360 or PHIL 380 or PHIL 429 or PHIL 465 or PHIL 468",
    "offered": "Resident"
  },
  "PHIL465": {
    "title": "The Thought of C.S. Lewis",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL468": {
    "title": "The Thought of J.R.R. Tolkien",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "PHIL497": {
    "title": "Special Topics in Philosophy",
    "credits": 1,
    "prereqs": "PHIL 201 or PHIL 210 or PHIL 240 or PHIL 301 or PHIL 302 or PHIL 303 or PHIL 310 or PHIL 346 or PHIL 350 or PHIL 360 or PHIL 380 or PHIL 429 or PHIL 465 or PHIL 468",
    "offered": "Resident"
  },
  "PHIL565": {
    "title": "Modern Philosophy",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL575": {
    "title": "Contemporary Philosophy",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL597": {
    "title": "Seminar in Philosophy",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL615": {
    "title": "The Problem of Evil",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL689": {
    "title": "Thesis Project Proposal and Research",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL690": {
    "title": "Thesis Defense",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL695": {
    "title": "Directed Research in Philosophy",
    "credits": 3,
    "offered": "Resident"
  },
  "PHIL995": {
    "title": "Directed Research in Philosophy",
    "credits": 3,
    "offered": "Online"
  },
  "PHIL997": {
    "title": "Seminar in Philosophy",
    "credits": 3,
    "offered": "Online"
  },
  "PHSC101": {
    "title": "Elements of Physics",
    "credits": 3
  },
  "PHSC102": {
    "title": "Elements of Physical Science",
    "credits": 3,
    "offered": "Resident"
  },
  "PHSC103": {
    "title": "Elements of Physics Lab",
    "credits": 1
  },
  "PHSC104": {
    "title": "Elements of Physical Science Lab",
    "credits": 1,
    "offered": "Resident"
  },
  "PHSC121": {
    "title": "Introduction to Astronomy",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PHSC122": {
    "title": "Elements of Astronomy Lab",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "PHSC210": {
    "title": "Elements of Earth Science",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PHSC211": {
    "title": "Elements of Earth Science Lab",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "PHSC310": {
    "title": "Astronomy: An Integrated Approach",
    "credits": 4,
    "prereqs": "PHSC 101 or PHSC 102 or PHYS 101",
    "offered": "Resident"
  },
  "PHSC311": {
    "title": "Oceanography",
    "credits": 3,
    "prereqs": "PHSC 210",
    "offered": "Online"
  },
  "PHSC312": {
    "title": "Meteorology",
    "credits": 3,
    "prereqs": "CHEM 105 or CHEM 107 or CHEM 108 or CHEM 115 or CHEM 121 or CHEM 122 or CHEM 131 or CHEM 132 or CHEM 135 or CHEM 136 or CHEM 301 or CHEM 302 or CHEM 321 or CHEM 322 or CHEM 400 or CHEM 461 or CHEM 462 or CHEM 465 or CHEM 466 or CHEM 471 or CHEM 495 or CHEM 497 or CHEM 499 or PHSC 102 or PHSC 103 or PHSC 104 or PHSC 121 or PHSC 122 or PHSC 210 or PHSC 211 or PHSC 310 or PHSC 311 or PHSC 313 or PHYS 101 or PHYS 103 or PHYS 201 or PHYS 202 or PHYS 231 or PHYS 232 or PHYS 305 or PHYS 310 or PHYS 320 or PHYS 321 or PHYS 331 or PHYS 432 or PHYS 433 or PHYS 440 or PHYS 491 or PHYS 495 or PHYS 497 or GEOG 200",
    "note": "Course prerequisite requirement is GEOG 200 or any course with a PHYS, PHSC, or CHEM prefix",
    "offered": "Online"
  },
  "PHSC313": {
    "title": "Mineralogy and Petrology",
    "credits": 4,
    "prereqs": "PHSC 210 and PHSC 211",
    "offered": "Online"
  },
  "PHYS101": {
    "title": "Elements of Physics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PHYS103": {
    "title": "Elements of Physics Lab",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "PHYS201": {
    "title": "General Physics I",
    "credits": 4,
    "prereqs": "MATH 121 or MATH 122 or MATH 126 or MATH 128 or MATH 131",
    "note": "Includes lab",
    "offered": "Resident and Online"
  },
  "PHYS201L": {
    "title": "General Physics Lab I",
    "credits": 0,
    "prereqs": "(MATH 121 or MATH 122 or MATH 126 or MATH 128 or MATH 131) and PHYS 201 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "PHYS202": {
    "title": "General Physics II",
    "credits": 4,
    "prereqs": "PHYS 201",
    "offered": "Resident"
  },
  "PHYS202L": {
    "title": "General Physics Lab II",
    "credits": 0,
    "prereqs": "PHYS 201 and PHYS 202 (may be taken concurrently)",
    "offered": "Resident"
  },
  "PHYS231": {
    "title": "University Physics I",
    "credits": 4,
    "prereqs": "(MATH 131 or ENGR 131) and MATH 132 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "PHYS231L": {
    "title": "University Physics Lab I",
    "credits": 0,
    "prereqs": "(MATH 131 (may be taken concurrently) or ENGR 131 (may be taken concurrently)) and MATH 132 (may be taken concurrently) and PHYS 231 (may be taken concurrently)",
    "offered": "Resident"
  },
  "PHYS232": {
    "title": "University Physics II",
    "credits": 4,
    "prereqs": "PHYS 231",
    "offered": "Resident and Online"
  },
  "PHYS232L": {
    "title": "University Physics Lab II",
    "credits": 0,
    "prereqs": "PHYS 231 and PHYS 232 (may be taken concurrently)",
    "offered": "Resident"
  },
  "PHYS305": {
    "title": "Introduction to Modern Physics",
    "credits": 3,
    "prereqs": "PHYS 232 and (MATH 231 or MATH 430)",
    "offered": "Online"
  },
  "PHYS310": {
    "title": "Numerical Methods in Physics",
    "credits": 3,
    "prereqs": "PHYS 232 and (MATH 231 or MATH 430)",
    "offered": "Online"
  },
  "PHYS320": {
    "title": "Thermodynamics",
    "credits": 3,
    "prereqs": "PHYS 231 and MATH 231",
    "offered": "Resident"
  },
  "PHYS321": {
    "title": "Mechanics",
    "credits": 3,
    "prereqs": "PHYS 231 and (MATH 231 or MATH 430)",
    "offered": "Online"
  },
  "PHYS331": {
    "title": "Electricity and Magnetism",
    "credits": 3,
    "prereqs": "PHYS 232 and (MATH 231 or MATH 430)",
    "offered": "Online"
  },
  "PHYS432": {
    "title": "Thermodynamics and Statistical Mechanics",
    "credits": 3,
    "prereqs": "PHYS 305 and PHYS 321",
    "offered": "Online"
  },
  "PHYS433": {
    "title": "Quantum Physics",
    "credits": 3,
    "prereqs": "PHYS 305 and PHYS 321",
    "offered": "Online"
  },
  "PHYS440": {
    "title": "Wave Optics",
    "credits": 4,
    "prereqs": "PHYS 331",
    "offered": "Online"
  },
  "PHYS491": {
    "title": "Physics Capstone",
    "credits": 3,
    "prereqs": "PHYS 305 and PHYS 310 and PHYS 321 and PHYS 331",
    "offered": "Online"
  },
  "PHYS495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "PHYS497": {
    "title": "Special Topics in Physics",
    "credits": 1,
    "offered": "Online"
  },
  "PLCY700": {
    "title": "Foundations of Public Policy",
    "credits": 3,
    "offered": "Online"
  },
  "PLCY701": {
    "title": "Natural Law, The State &amp; The Gospel",
    "credits": 3,
    "offered": "Online"
  },
  "PLCY702": {
    "title": "Founding Era and the Constitution",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY703": {
    "title": "Contemporary Challenges to Constitutional Order and the Role of the State",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY704": {
    "title": "Economics and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY707": {
    "title": "Education and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY710": {
    "title": "Social Issues and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY800": {
    "title": "National Security and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY801": {
    "title": "Foreign Policy and Public Policy",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY802": {
    "title": "Competing Visions of Statesmanship",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY804": {
    "title": "Federalism and Intergovernmental Relations",
    "credits": 3,
    "prereqs": "PLCY 700 or PADM 700",
    "offered": "Online"
  },
  "PLCY805": {
    "title": "Policy Analysis and Research Design",
    "credits": 3,
    "prereqs": "((PLCY 840 or PLCY 850 or PLCY 860 or PLCY 866 or PLCY 870 or PLCY 880) and PLCY 700 )",
    "offered": "Online"
  },
  "PLCY809": {
    "title": "Data and Analysis for Policymakers",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY810": {
    "title": "Quantitative Methods I",
    "credits": 3,
    "prereqs": "PLCY 805",
    "offered": "Online"
  },
  "PLCY811": {
    "title": "Quantitative Methods II",
    "credits": 3,
    "prereqs": "PLCY 810",
    "offered": "Online"
  },
  "PLCY812": {
    "title": "Qualitative Methods",
    "credits": 3,
    "prereqs": "PLCY 811",
    "offered": "Online"
  },
  "PLCY815": {
    "title": "Advanced Quantitative Methods I",
    "credits": 3,
    "prereqs": "PLCY 700",
    "offered": "Online"
  },
  "PLCY816": {
    "title": "Advanced Quantitative Methods II",
    "credits": 3,
    "prereqs": "PLCY 815",
    "offered": "Online"
  },
  "PLCY840": {
    "title": "Introduction to Education Policy Studies",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 812",
    "offered": "Online"
  },
  "PLCY841": {
    "title": "Research Seminar in Education Policy",
    "credits": 3,
    "prereqs": "PLCY 840",
    "offered": "Online"
  },
  "PLCY842": {
    "title": "Research Prospectus in Education Policy",
    "credits": 5,
    "prereqs": "PLCY 841",
    "offered": "Online"
  },
  "PLCY850": {
    "title": "Introduction to Social Policy Studies",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 812",
    "offered": "Online"
  },
  "PLCY851": {
    "title": "Research Seminar in Social Policy",
    "credits": 3,
    "prereqs": "PLCY 850",
    "offered": "Online"
  },
  "PLCY852": {
    "title": "Research Prospectus in Social Policy",
    "credits": 5,
    "prereqs": "PLCY 851",
    "offered": "Online"
  },
  "PLCY860": {
    "title": "Introduction to Foreign Policy Studies",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 812",
    "offered": "Online"
  },
  "PLCY861": {
    "title": "Research Seminar in Foreign Policy",
    "credits": 3,
    "prereqs": "PLCY 860",
    "offered": "Online"
  },
  "PLCY862": {
    "title": "Research Prospectus in Foreign Policy",
    "credits": 5,
    "prereqs": "PLCY 861",
    "offered": "Online"
  },
  "PLCY866": {
    "title": "Advanced Research: Chinese Political Economy",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 812",
    "offered": "Online"
  },
  "PLCY868": {
    "title": "Advanced Research: Strategic Thought in Western and Chinese Perspectives",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 812",
    "offered": "Online"
  },
  "PLCY869": {
    "title": "Advanced Research: The Grand Strategy of the People’s Republic of China",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 812",
    "offered": "Online"
  },
  "PLCY870": {
    "title": "Introduction to Economic Policy Studies",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 812",
    "offered": "Online"
  },
  "PLCY871": {
    "title": "Research Seminar in Economic Policy",
    "credits": 3,
    "prereqs": "PLCY 870",
    "offered": "Online"
  },
  "PLCY872": {
    "title": "Research Prospectus in Economic Policy",
    "credits": 5,
    "prereqs": "PLCY 871",
    "offered": "Online"
  },
  "PLCY880": {
    "title": "Introduction to National Security Policy Studies",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 812",
    "offered": "Online"
  },
  "PLCY881": {
    "title": "Research Seminar in National Security Policy",
    "credits": 3,
    "prereqs": "PLCY 880",
    "offered": "Online"
  },
  "PLCY882": {
    "title": "Research Prospectus in National Security Policy",
    "credits": 5,
    "prereqs": "PLCY 881",
    "offered": "Online"
  },
  "PLCY885": {
    "title": "Research Concept",
    "credits": 3,
    "prereqs": "PLCY 700 and PLCY 701 and PLCY 702 and PLCY 703 and PLCY 704 and (PLCY 800 or PLCY 801) and PLCY 802 and PLCY 804 and PLCY 805 and PLCY 810 and PLCY 811 and PLCY 812",
    "note": "A dissertation chair and reader must be selected using the Dissertation Pairing tool, prior to enrolling in this course.",
    "offered": "Online"
  },
  "PLCY980": {
    "title": "Dissertation Prospectus",
    "credits": 5,
    "prereqs": "PLCY 700 and PLCY 701 and PLCY 702 and PLCY 703 and PLCY 704 and PLCY 800 and PLCY 801 and PLCY 802 and PLCY 804 and PLCY 805 and PLCY 810 and PLCY 811 and PLCY 812",
    "offered": "Online"
  },
  "PLCY987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "PLCY 885",
    "offered": "Online"
  },
  "PLCY988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "PLCY 987",
    "offered": "Online"
  },
  "PLCY989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "PLCY 988",
    "offered": "Online"
  },
  "PLCY990": {
    "title": "Dissertation IV - Dissertation Defense",
    "credits": 5,
    "prereqs": "PLCY 989",
    "offered": "Online"
  },
  "PLED201": {
    "title": "Foundation to Pastoral Leadership",
    "credits": 3,
    "offered": "Resident"
  },
  "PLED205": {
    "title": "Practicum I Small Groups",
    "credits": 1,
    "prereqs": "PLED 201 (may be taken concurrently)",
    "offered": "Resident"
  },
  "PLED251": {
    "title": "Church Planting and Development",
    "credits": 3,
    "offered": "Resident"
  },
  "PLED299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "PLED300": {
    "title": "Practicum II Outreach",
    "credits": 1,
    "prereqs": "PLED 201 (may be taken concurrently) and PLED 251 (may be taken concurrently)",
    "offered": "Resident"
  },
  "PLED301": {
    "title": "Family Ministry in the Church",
    "credits": 3,
    "prereqs": "PLED 201 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "PLED302": {
    "title": "Staff Management and Relations in Pastoral Leadership",
    "credits": 3,
    "prereqs": "PLED 201",
    "offered": "Resident"
  },
  "PLED325": {
    "title": "Theories and Issues in Pastoral Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "PLED350": {
    "title": "Pastoral Duties",
    "credits": 3,
    "prereqs": "PLED 201",
    "offered": "Resident"
  },
  "PLED351": {
    "title": "Church Assimilation and Development",
    "credits": 3,
    "prereqs": "PLED 201",
    "offered": "Resident"
  },
  "PLED400": {
    "title": "Practicum III",
    "credits": 1,
    "prereqs": "PLED 201 (may be taken concurrently) and PLED 302 (may be taken concurrently) and PLED 351 (may be taken concurrently)",
    "offered": "Resident"
  },
  "PLED421": {
    "title": "Homiletics I",
    "credits": 3,
    "prereqs": "BIBL 350 and PLED 201 and (COMS 101 or GLST 220)",
    "offered": "Resident"
  },
  "PLED422": {
    "title": "Homiletics II",
    "credits": 3,
    "prereqs": "PLED 421",
    "offered": "Resident"
  },
  "PLED446": {
    "title": "Christocentric Preaching",
    "credits": 3,
    "prereqs": "BIBL 480 and PLED 421 and PLED 201",
    "offered": "Resident"
  },
  "PLED450": {
    "title": "Leadership and Management in the Local Church",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PLED452": {
    "title": "Critical Issues in Pastoral Leadership",
    "credits": 3,
    "prereqs": "PLED 201 and PLED 301 and PLED 302",
    "offered": "Resident"
  },
  "PLED495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "PLED497": {
    "title": "Special Topics in Pastoral Ministries",
    "credits": 1,
    "offered": "Resident"
  },
  "PLED499": {
    "title": "Pastoral Leadership Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "PLMB101": {
    "title": "Foundations of Plumbing",
    "credits": 4,
    "prereqs": "CRFT 101 (may be taken concurrently)",
    "offered": "Resident"
  },
  "PLMB201": {
    "title": "Intermediate Plumbing",
    "credits": 4,
    "prereqs": "PLMB 101 and CRFT 101",
    "offered": "Resident"
  },
  "PLMB301": {
    "title": "Advanced Plumbing",
    "credits": 4,
    "prereqs": "PLMB 201 and CRFT 101",
    "offered": "Resident"
  },
  "PLMB401": {
    "title": "Special Topics in Plumbing",
    "credits": 4,
    "prereqs": "PLMB 301 and CRFT 101",
    "offered": "Resident"
  },
  "PLST200": {
    "title": "Introduction to Paralegal Studies",
    "credits": 3,
    "offered": "Online"
  },
  "PLST201": {
    "title": "Legal Research",
    "credits": 3,
    "offered": "Online"
  },
  "PLST202": {
    "title": "Legal Writing",
    "credits": 3,
    "prereqs": "PLST 201",
    "offered": "Online"
  },
  "PLST205": {
    "title": "Foundations of Law",
    "credits": 3,
    "offered": "Online"
  },
  "PLST206": {
    "title": "Ethics and Professional Responsibility",
    "credits": 3,
    "prereqs": "(PLAW 200 or PLST 200) and (PLAW 205 or PLST 205)",
    "offered": "Online"
  },
  "PLST210": {
    "title": "Introduction to E-Discovery",
    "credits": 3,
    "offered": "Online"
  },
  "PLST215": {
    "title": "Data Management and E-Discovery",
    "credits": 3,
    "offered": "Online"
  },
  "PLST220": {
    "title": "Civil Practice",
    "credits": 3,
    "offered": "Online"
  },
  "PLST222": {
    "title": "Real Estate Transactions and Property",
    "credits": 3,
    "offered": "Online"
  },
  "PLST225": {
    "title": "Tort Law",
    "credits": 3,
    "offered": "Online"
  },
  "PLST226": {
    "title": "Contracts",
    "credits": 3,
    "prereqs": "(PLAW 200 or PLST 200) and (PLAW 205 or PLST 205)",
    "offered": "Online"
  },
  "PLST230": {
    "title": "Criminal Practice and Procedures",
    "credits": 3,
    "offered": "Online"
  },
  "PLST235": {
    "title": "Wills, Trusts, and Estates",
    "credits": 3,
    "offered": "Online"
  },
  "PLST310": {
    "title": "Case Management and Ethical Considerations",
    "credits": 3,
    "offered": "Online"
  },
  "PLST315": {
    "title": "Digital Forensics and the Legal Implications",
    "credits": 3,
    "offered": "Online"
  },
  "PLST320": {
    "title": "Constitutional Law",
    "credits": 3,
    "prereqs": "PLAW 205 or PLST 205",
    "offered": "Online"
  },
  "PLST340": {
    "title": "Family Law",
    "credits": 3,
    "offered": "Online"
  },
  "PLST350": {
    "title": "Corporate and Business Organizational Law",
    "credits": 3,
    "offered": "Online"
  },
  "PLST355": {
    "title": "Bankruptcy and Secured Transactions",
    "credits": 3,
    "prereqs": "(PLAW 222 or PLST 222) and (PLAW 350 or PLST 350)",
    "offered": "Online"
  },
  "PLST380": {
    "title": "Law of Non-Profits",
    "credits": 3,
    "prereqs": "PLAW 350 or PLST 350",
    "offered": "Online"
  },
  "PLST400": {
    "title": "Employment Law",
    "credits": 3,
    "prereqs": "PLAW 350 or PLST 350",
    "offered": "Online"
  },
  "PLST405": {
    "title": "Administrative Law",
    "credits": 3,
    "prereqs": "PLAW 350 or PLST 350",
    "offered": "Online"
  },
  "PLST420": {
    "title": "Intellectual Property Law",
    "credits": 3,
    "prereqs": "PLAW 350 or PLST 350",
    "offered": "Online"
  },
  "PLST450": {
    "title": "Negotiations",
    "credits": 3,
    "prereqs": "(PLAW 200 or PLST 200) and (PLAW 205 or PLST 205)",
    "offered": "Online"
  },
  "PLST460": {
    "title": "Law Office Management",
    "credits": 3,
    "prereqs": "(PLAW 200 or PLST 200) and (PLAW 205 or PLST 205)",
    "offered": "Online"
  },
  "PLST499": {
    "title": "Field Research (Internship)",
    "credits": 3,
    "offered": "Online"
  },
  "PPOG500": {
    "title": "Introduction to Research and Writing",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PPOG502": {
    "title": "Economics and Public Policy",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "PPOG503": {
    "title": "Political Philosophy",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "PPOG504": {
    "title": "Leadership, Statesmanship, and Governance",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "PPOG506": {
    "title": "Introduction to Geopolitics and International Diplomacy",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "PPOG530": {
    "title": "Domestic Policy",
    "credits": 3,
    "offered": "Online"
  },
  "PPOG540": {
    "title": "Foreign Policy",
    "credits": 3,
    "offered": "Online"
  },
  "PPOG595": {
    "title": "Directed Readings in Public Policy",
    "credits": 3
  },
  "PPOG597": {
    "title": "Special Topics in Public Policy",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Resident"
  },
  "PPOG600": {
    "title": "Think Tank, Research, Training, and Policy Development",
    "credits": 3,
    "prereqs": "PPOG 500",
    "offered": "Resident"
  },
  "PPOG624": {
    "title": "Presidential Leadership",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Online"
  },
  "PPOG625": {
    "title": "Legislative Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "PPOG626": {
    "title": "State and Local Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "PPOG635": {
    "title": "Speech Writing for Candidates and Officeholders",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Online"
  },
  "PPOG640": {
    "title": "Middle East Law and Policy",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Online"
  },
  "PPOG641": {
    "title": "U.S. Middle East Foreign Policy",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Online"
  },
  "PPOG664": {
    "title": "China's Political Worldview",
    "credits": 3,
    "prereqs": "PPOG 500 and PPOL 505",
    "offered": "Online"
  },
  "PPOG665": {
    "title": "Chinese Politics",
    "credits": 3,
    "prereqs": "PPOG 500 and PPOL 505",
    "offered": "Online"
  },
  "PPOG667": {
    "title": "Chinese Foreign Policy",
    "credits": 3,
    "prereqs": "PPOG 500 and PPOL 505",
    "offered": "Online"
  },
  "PPOG688": {
    "title": "Thesis Proposal",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PPOG689": {
    "title": "Thesis Research",
    "credits": 3,
    "prereqs": "PPOG 688 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "PPOG690": {
    "title": "Thesis Defense",
    "credits": 3,
    "prereqs": "PPOG 689",
    "offered": "Resident and Online"
  },
  "PPOG695": {
    "title": "Direct Research",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PPOL501": {
    "title": "Foundations of American Governance: An Introduction to Public Policy",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "PPOL505": {
    "title": "Applied Public Policy Research Methods",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "PPOL506": {
    "title": "Introduction to Geopolitics",
    "credits": 3
  },
  "PPOL630": {
    "title": "Campaign Tactics, Strategies, and Management",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Online"
  },
  "PPOL631": {
    "title": "Message, Media and Political Communication",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Online"
  },
  "PPOL650": {
    "title": "International Law, Policy, and Politics",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Online"
  },
  "PPOL652": {
    "title": "U.S. Foreign Policy and Sovereignty Issues",
    "credits": 3,
    "prereqs": "PPOG 500 (may be taken concurrently)",
    "offered": "Online"
  },
  "PRTH140": {
    "title": "Church Administration",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "PRTH141": {
    "title": "Pastoral Theology",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "PRTH172": {
    "title": "Hermeneutics I",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "PRTH173": {
    "title": "Hermeneutics II",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "PRTH701": {
    "title": "Ministry Foundations for Practical Theology",
    "credits": 3,
    "prereqs": "RTCH 805 and THEO 706",
    "offered": "Online"
  },
  "PRTH702": {
    "title": "Philosophical Foundations for Practical Theology",
    "credits": 3,
    "prereqs": "RTCH 805",
    "offered": "Online"
  },
  "PRTH815": {
    "title": "Dissertation Concept Development for Practical Theology",
    "credits": 3,
    "prereqs": "RTCH 805",
    "offered": "Online"
  },
  "PRTH845": {
    "title": "Practical Theology Literature Review I",
    "credits": 3,
    "prereqs": "APOL 701 and APOL 702 and APOL 815 and RTCH 710 and RTCH 805 and THEO 706",
    "offered": "Online"
  },
  "PRTH846": {
    "title": "Practical Theology Literature Review II",
    "credits": 3,
    "prereqs": "PRTH 845",
    "offered": "Online"
  },
  "PRTH847": {
    "title": "Practical Theology Topical Research I",
    "credits": 3,
    "prereqs": "PRTH 845 and PRTH 846",
    "offered": "Online"
  },
  "PRTH848": {
    "title": "Practical Theology Topical Research II",
    "credits": 3,
    "prereqs": "PRTH 847",
    "offered": "Online"
  },
  "PRTH849": {
    "title": "Practical Theology Dissertation Presentation I",
    "credits": 3,
    "prereqs": "PRTH 847 and PRTH 848",
    "offered": "Online"
  },
  "PRTH850": {
    "title": "Practical Theology Dissertation Presentation II",
    "credits": 3,
    "prereqs": "PRTH 849",
    "offered": "Online"
  },
  "PRTH945": {
    "title": "Practical Theology I: Literature Review",
    "credits": 6,
    "prereqs": "PRTH 815 and RTCH 710 and RTCH 805 and THEO 706",
    "offered": "Online"
  },
  "PRTH946": {
    "title": "Practical Theology II: Topical Research",
    "credits": 6,
    "prereqs": "PRTH 945",
    "offered": "Online"
  },
  "PRTH947": {
    "title": "Practical Theology III: Dissertation Presentation",
    "credits": 6,
    "prereqs": "PRTH 946",
    "offered": "Online"
  },
  "PRTH987": {
    "title": "Dissertation Writing in Practical Theology I",
    "credits": 5,
    "prereqs": "PRTH 850",
    "offered": "Online"
  },
  "PRTH988": {
    "title": "Dissertation Writing in Practical Theology II",
    "credits": 5,
    "prereqs": "PRTH 987",
    "offered": "Online"
  },
  "PRTH989": {
    "title": "Dissertation Writing in Practical Theology III",
    "credits": 5,
    "prereqs": "PRTH 988",
    "offered": "Online"
  },
  "PRTH990": {
    "title": "Dissertation Defense for Practical Theology",
    "credits": 0,
    "prereqs": "PRTH 989",
    "offered": "Online"
  },
  "PSCI501": {
    "title": "Political Science, Public Policy &amp; Statesmanship",
    "credits": 3,
    "offered": "Online"
  },
  "PSCI600": {
    "title": "Comparative Politics",
    "credits": 3,
    "offered": "Online"
  },
  "PSCI610": {
    "title": "Contemporary Political Process &amp; Trends",
    "credits": 3,
    "offered": "Online"
  },
  "PSCI688": {
    "title": "Thesis Proposal",
    "credits": 3,
    "offered": "Online"
  },
  "PSCI689": {
    "title": "Thesis Research",
    "credits": 3,
    "prereqs": "PSCI 688",
    "offered": "Online"
  },
  "PSCI690": {
    "title": "Thesis Defense",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC101": {
    "title": "General Psychology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PSYC200": {
    "title": "General Psychology",
    "credits": 3
  },
  "PSYC210": {
    "title": "Developmental Psychology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "PSYC221": {
    "title": "Psychology of Childhood",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 101 or PSYC 210 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC231": {
    "title": "Psychology of Adolescence",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 101 or PSYC 210 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC235": {
    "title": "Psychology of Adulthood",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 101 or PSYC 210 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC255": {
    "title": "Introduction to Research",
    "credits": 3,
    "prereqs": "PSYC 200 or PSYC 210 or PSYC 101 or GEED 201",
    "offered": "Resident and Online"
  },
  "PSYC299": {
    "title": "Internship",
    "credits": 0,
    "prereqs": "PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC305": {
    "title": "Overview of Theory and Treatment of Substance Abuse",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 210 or SOCI 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC306": {
    "title": "Advanced Theory and Treatment of Substance Abuse",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 210 or SOCI 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC307": {
    "title": "Treatment and Recovery of Addictions",
    "credits": 3,
    "prereqs": "PSYC 305 and (PSYC 101 or PSYC 210) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC308": {
    "title": "Diagnosis and Treatment of Sexual Addiction",
    "credits": 3,
    "prereqs": "PSYC 305 and (PSYC 101 or PSYC 210) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC309": {
    "title": "Healthy Sexuality",
    "credits": 3,
    "prereqs": "PSYC 305 and (PSYC 101 or PSYC 210) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC310": {
    "title": "Cognitive Psychology",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC311": {
    "title": "Educational Psychology",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC312": {
    "title": "Social Psychology",
    "credits": 3,
    "prereqs": "(PSYC 200 or SOCI 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC313": {
    "title": "Multicultural Counseling &amp; Res",
    "credits": 3
  },
  "PSYC315": {
    "title": "Applied Psychology",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC316": {
    "title": "Industrial and Organizational Psychology",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 210 or PSYC 200 or GEED 201) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC317": {
    "title": "Crisis Intervention",
    "credits": 3,
    "prereqs": "PSYC 255 and (PSYC 101 or PSYC 210)",
    "offered": "Resident and Online"
  },
  "PSYC318": {
    "title": "Consumer Psychology",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 210 or PSYC 200 or GEED 201) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC320": {
    "title": "Behavior Modification",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC321": {
    "title": "Psychology of Childhood",
    "credits": 3
  },
  "PSYC331": {
    "title": "Psychology of Adolescence",
    "credits": 3
  },
  "PSYC335": {
    "title": "Psychology of Adulthood",
    "credits": 3
  },
  "PSYC336": {
    "title": "Gerontology",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC341": {
    "title": "Psychology of Personality",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC345": {
    "title": "Exceptional Child",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC350": {
    "title": "Bibliotherapy",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC351": {
    "title": "Multicultural Counseling and Research Issues",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 210 or PSYC 200 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC354": {
    "title": "Statistics for the Social Sciences",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 210) and (MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 123 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 132 or MATH 200 or MATH 201 or BUSI 230 or MATH 217 or MATH 221 or MATH 231 or MATH 250) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC355": {
    "title": "Statistics in Psychology",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 210) and (MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 123 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 132 or MATH 200 or MATH 201 or BUSI 230 or MATH 211 or MATH 217 or MATH 221 or MATH 231 or MATH 250) and PSYC 354 and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC356": {
    "title": "Introduction to Qualitative Research",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 200 or PSYC 210 or GEED 201) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC360": {
    "title": "Psychology of Wisdom Tradition",
    "credits": 3
  },
  "PSYC361": {
    "title": "Marriage and Family",
    "credits": 3,
    "prereqs": "PSYC 255 and (PSYC 101 or PSYC 210)",
    "offered": "Resident"
  },
  "PSYC365": {
    "title": "Psychological Foundations of Learning",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC371": {
    "title": "Theories in Counseling and Psychotherapy",
    "credits": 3,
    "prereqs": "PSYC 341 and PSYC 255 and (PSYC 101 or PSYC 210)",
    "offered": "Resident and Online"
  },
  "PSYC380": {
    "title": "Physiological Psychology",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "PSYC401": {
    "title": "History and Systems of Psychology",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC405": {
    "title": "Group Dynamics",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 210 or PSYC 101 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC406": {
    "title": "Addictions and the Recovery Process",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 210) and PSYC 255 and PSYC 306",
    "offered": "Resident"
  },
  "PSYC407": {
    "title": "Addictions Groups, Ethics and the Community",
    "credits": 3,
    "prereqs": "PSYC 371 and PSYC 406 and PSYC 255 and (PSYC 101 or PSYC 210)",
    "offered": "Resident"
  },
  "PSYC410": {
    "title": "Psychology of Religion",
    "credits": 3,
    "prereqs": "(PSYC 101 or PSYC 210 or PSYC 200 or GEED 201) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC420": {
    "title": "Psychology and Christianity",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 101 or PSYC 210 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC421": {
    "title": "Psychological Measurement",
    "credits": 3,
    "prereqs": "PSYC 355 and PSYC 255 and (PSYC 101 or PSYC 210)",
    "offered": "Resident and Online"
  },
  "PSYC425": {
    "title": "Psychology of Criminal Behavior",
    "credits": 3,
    "prereqs": "(PSYC 101 and PSYC 341) or (PSYC 210 and PSYC 345) or (PSYC 341 and SOCI 200) or (PSYC 200 and PSYC 341) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC430": {
    "title": "Abnormal Psychology",
    "credits": 3,
    "prereqs": "PSYC 255 and (PSYC 101 or PSYC 210)",
    "offered": "Resident and Online"
  },
  "PSYC440": {
    "title": "Experimental Design in Research: Application and Construction",
    "credits": 3,
    "prereqs": "PSYC 355 and PSYC 255 and (PSYC 101 or PSYC 210)",
    "offered": "Resident"
  },
  "PSYC450": {
    "title": "Children in Healthcare",
    "credits": 3,
    "prereqs": "PSYC 255 and (PSYC 101 or PSYC 210)",
    "note": "Successful completion of Children in Healthcare will meet the child life course criteria outlined by the Child Life Council. Students interested in pursuing the Child Life Professional Certification Examination are responsible for meeting with the professor after the completion of the course to complete their verification form.",
    "offered": "Resident and Online"
  },
  "PSYC460": {
    "title": "Counseling Processes and Techniques",
    "credits": 3,
    "prereqs": "PSYC 341 and PSYC 371 and PSYC 255 and (PSYC 101 or PSYC 210)",
    "offered": "Resident"
  },
  "PSYC475": {
    "title": "Psychology of Criminal Behavior",
    "credits": 3,
    "prereqs": "PSYC 341 and (PSYC 101 or PSYC 210) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC491": {
    "title": "Capstone in Psychology",
    "credits": 3,
    "prereqs": "PSYC 255 and (PSYC 101 or PSYC 200 or PSYC 210 or GEED 201)",
    "offered": "Online"
  },
  "PSYC495": {
    "title": "Directed Research",
    "credits": 1,
    "prereqs": "(PSYC 101 or PSYC 200 or PSYC 210 or GEED 201) and PSYC 255",
    "offered": "Resident"
  },
  "PSYC497": {
    "title": "Special Topics in Psychology",
    "credits": 3,
    "prereqs": "(PSYC 200 or PSYC 101 or PSYC 210 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC498": {
    "title": "Senior Project",
    "credits": 3,
    "prereqs": "PSYC 355 and PSYC 440",
    "offered": "Resident and Online"
  },
  "PSYC499": {
    "title": "Internship",
    "credits": 1,
    "prereqs": "(PSYC 101 or PSYC 200 or PSYC 210 or GEED 201) and PSYC 255",
    "offered": "Resident and Online"
  },
  "PSYC510": {
    "title": "Research Methods and Statistics in Psychology I",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC512": {
    "title": "Social Psychology",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC515": {
    "title": "Research Methods and Statistics in Psychology II",
    "credits": 3,
    "prereqs": "PSYC 510",
    "offered": "Online"
  },
  "PSYC516": {
    "title": "Industrial/Organizational Psychology",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC520": {
    "title": "Psychology and Christianity",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC525": {
    "title": "Developmental Psychology",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC541": {
    "title": "Introduction to Public Mental Health: Theories, Practice, and Prevention.",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC545": {
    "title": "Test Construction/Validation",
    "credits": 3,
    "prereqs": "PSYC 510",
    "offered": "Online"
  },
  "PSYC565": {
    "title": "Psychology of Learning",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC575": {
    "title": "Cognitive Psychology",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC620": {
    "title": "Intervention and Behavior Support",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC621": {
    "title": "Child Psychology",
    "credits": 3,
    "prereqs": "PSYC 525",
    "offered": "Online"
  },
  "PSYC631": {
    "title": "Adolescent Psychology",
    "credits": 3,
    "prereqs": "PSYC 525",
    "offered": "Online"
  },
  "PSYC635": {
    "title": "Adult Psychology",
    "credits": 3,
    "prereqs": "PSYC 525",
    "offered": "Online"
  },
  "PSYC636": {
    "title": "Geropsychology",
    "credits": 3,
    "prereqs": "PSYC 525",
    "offered": "Online"
  },
  "PSYC640": {
    "title": "Organizational Behavior and Development",
    "credits": 3,
    "prereqs": "PSYC 516 or PSYC 716",
    "offered": "Online"
  },
  "PSYC641": {
    "title": "Public Mental Health from Patients to Systems",
    "credits": 3,
    "prereqs": "PSYC 541",
    "offered": "Online"
  },
  "PSYC642": {
    "title": "Human Resource Training and Development",
    "credits": 3,
    "prereqs": "PSYC 516",
    "offered": "Online"
  },
  "PSYC644": {
    "title": "Organizational Ethics",
    "credits": 3,
    "prereqs": "PSYC 516",
    "offered": "Online"
  },
  "PSYC645": {
    "title": "Developmental Psychopathology",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC648": {
    "title": "Leadership and Motivation",
    "credits": 3,
    "prereqs": "PSYC 516 or PSYC 716",
    "offered": "Online"
  },
  "PSYC651": {
    "title": "Personnel and Performance Management",
    "credits": 3,
    "prereqs": "PSYC 516 or PSYC 716",
    "offered": "Online"
  },
  "PSYC661": {
    "title": "Program Development, Implementation, and Evaluation",
    "credits": 3,
    "prereqs": "PSYC 541",
    "offered": "Online"
  },
  "PSYC662": {
    "title": "Substance Abuse and Severe Mental Health Problems",
    "credits": 3,
    "prereqs": "PSYC 541",
    "offered": "Online"
  },
  "PSYC676": {
    "title": "Developmental Neuropsychology",
    "credits": 3,
    "prereqs": "PSYC 525",
    "offered": "Online"
  },
  "PSYC689": {
    "title": "Thesis Proposal and Research",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC690": {
    "title": "Master's Thesis",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC700": {
    "title": "Foundations of Doctoral Study in Psychology",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC710": {
    "title": "Psychological Research &amp; Biblical Worldview",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC712": {
    "title": "Theories and Research in Social Psychology",
    "credits": 3,
    "prereqs": "PSYC 700",
    "offered": "Online"
  },
  "PSYC716": {
    "title": "Theories and Research in Industrial/Organizational Psychology",
    "credits": 3,
    "prereqs": "PSYC 700",
    "offered": "Online"
  },
  "PSYC718": {
    "title": "Theories and Research in Behavioral Health",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC725": {
    "title": "Theories and Research in Developmental Psychology",
    "credits": 3,
    "prereqs": "PSYC 700",
    "offered": "Online"
  },
  "PSYC750": {
    "title": "Biological Bases of Behavior",
    "credits": 3,
    "prereqs": "PSYC 700",
    "offered": "Online"
  },
  "PSYC775": {
    "title": "Teaching of Psychology",
    "credits": 3,
    "prereqs": "PSYC 700",
    "offered": "Online"
  },
  "PSYC780": {
    "title": "Strategic Planning and Management",
    "credits": 3,
    "prereqs": "PSYC 718",
    "offered": "Online"
  },
  "PSYC800": {
    "title": "Grant Writing",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC802": {
    "title": "Program Evaluation",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC810": {
    "title": "Advanced Research: Qualitative Research &amp; Analysis",
    "credits": 3,
    "prereqs": "PSYC 510 and PSYC 515 and PSYC 700 and PSYC 815",
    "offered": "Online"
  },
  "PSYC812": {
    "title": "Social Cognitive Development",
    "credits": 3,
    "prereqs": "PSYC 700",
    "offered": "Online"
  },
  "PSYC815": {
    "title": "Advanced Research: Quantitative Research &amp; Analysis",
    "credits": 3,
    "prereqs": "PSYC 510 and PSYC 515 and PSYC 700",
    "offered": "Online"
  },
  "PSYC820": {
    "title": "Seminar on the Integration of Theology and Psychology",
    "credits": 3,
    "prereqs": "THEO 525 and THEO 530 and CLED 800",
    "offered": "Online"
  },
  "PSYC825": {
    "title": "Contemporary Topics in Developmental Psychology",
    "credits": 3,
    "prereqs": "PSYC 725",
    "offered": "Online"
  },
  "PSYC826": {
    "title": "Contemporary Topics in Industrial/Organizational Psychology",
    "credits": 3,
    "prereqs": "PSYC 716",
    "offered": "Online"
  },
  "PSYC827": {
    "title": "Contemporary Topics in Social Psychology",
    "credits": 3,
    "prereqs": "PSYC 712",
    "offered": "Online"
  },
  "PSYC828": {
    "title": "Contemporary Topics in Behavioral Health",
    "credits": 3,
    "prereqs": "PSYC 718",
    "offered": "Online"
  },
  "PSYC830": {
    "title": "Child and Adolescent Development in the Digital Age",
    "credits": 3,
    "prereqs": "PSYC 725",
    "offered": "Online"
  },
  "PSYC831": {
    "title": "Advanced Child and Adolescent Development",
    "credits": 3,
    "offered": "Online"
  },
  "PSYC832": {
    "title": "Language and Cognitive Development",
    "credits": 3,
    "prereqs": "PSYC 725",
    "offered": "Online"
  },
  "PSYC833": {
    "title": "Moral Development",
    "credits": 3,
    "prereqs": "PSYC 725",
    "offered": "Online"
  },
  "PSYC840": {
    "title": "Leadership and Development",
    "credits": 3,
    "prereqs": "PSYC 718",
    "offered": "Online"
  },
  "PSYC845": {
    "title": "Measurement &amp; Testing in I/O Psychology",
    "credits": 3,
    "prereqs": "PSYC 545",
    "offered": "Online"
  },
  "PSYC847": {
    "title": "Organizational Consulting &amp; Change",
    "credits": 3,
    "prereqs": "PSYC 716",
    "offered": "Online"
  },
  "PSYC850": {
    "title": "Workplace Attitudes, Measurement, &amp; Change",
    "credits": 3,
    "prereqs": "PSYC 716",
    "offered": "Online"
  },
  "PSYC855": {
    "title": "Psychology of Contemporary &amp; Virtual Organizations",
    "credits": 3,
    "prereqs": "PSYC 716",
    "offered": "Online"
  },
  "PSYC857": {
    "title": "Behavioral Healthcare Policy and Governance",
    "credits": 3,
    "prereqs": "PSYC 718",
    "offered": "Online"
  },
  "PSYC858": {
    "title": "Healthcare Financial Management",
    "credits": 3,
    "prereqs": "PSYC 718",
    "offered": "Online"
  },
  "PSYC860": {
    "title": "Attitudes, Measurement, and Change",
    "credits": 3,
    "prereqs": "PSYC 712",
    "offered": "Online"
  },
  "PSYC865": {
    "title": "Survey Research Methods",
    "credits": 3,
    "prereqs": "PSYC 510 and PSYC 515",
    "offered": "Online"
  },
  "PSYC866": {
    "title": "Social Relationships",
    "credits": 3,
    "prereqs": "PSYC 712",
    "offered": "Online"
  },
  "PSYC867": {
    "title": "Social Cognitive Neuroscience",
    "credits": 3,
    "prereqs": "PSYC 712",
    "offered": "Online"
  },
  "PSYC868": {
    "title": "Social Psychology of the Digital Age",
    "credits": 3,
    "prereqs": "PSYC 712",
    "offered": "Online"
  },
  "PSYC870": {
    "title": "Prospectus: Developing the Dissertation Concept",
    "credits": 3,
    "prereqs": "PSYC 510 and PSYC 515 and PSYC 700 and PSYC 710 and PSYC 775 and PSYC 810 and PSYC 815",
    "offered": "Online"
  },
  "PSYC987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "PSYC 870",
    "offered": "Online"
  },
  "PSYC988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "PSYC 987",
    "offered": "Online"
  },
  "PSYC989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "PSYC 988",
    "offered": "Online"
  },
  "PSYC990": {
    "title": "Dissertation Defense",
    "credits": 0,
    "prereqs": "PSYC 989",
    "offered": "Online"
  },
  "PSYD600": {
    "title": "Introduction to Clinical Practice",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD601": {
    "title": "Introduction to Clinical Practice II",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD605": {
    "title": "Lifespan Development",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD610": {
    "title": "Child and Adolescent Psychopathology",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD615": {
    "title": "History and Systems",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD700": {
    "title": "Research Design I",
    "credits": 3,
    "offered": "Resident"
  },
  "PSYD701": {
    "title": "Adult Psychopathology",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD702": {
    "title": "Biological Bases of Behavior",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Abnormal Psych/Psychopathology with a score of 3 and PersnPsych/Theor Psychotherapy with a score of 3 and Physiological Psych with a score of 3 and Trad ScientifcSubdisciplines with a score of 3",
    "offered": "Resident"
  },
  "PSYD703": {
    "title": "Statistics I",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD704": {
    "title": "Statistics II",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD705": {
    "title": "Research Design II",
    "credits": 3,
    "prereqs": "Statistics with a score of 3 and General Psychology with a score of 3 and Abnormal Psych/Psychopathology with a score of 3 and PersnPsych/Theor Psychotherapy with a score of 3 and Physiological Psych with a score of 3 and Trad ScientifcSubdisciplines with a score of 3",
    "offered": "Resident"
  },
  "PSYD706": {
    "title": "Diversity and Cross Cultural Psychology",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD707": {
    "title": "Social Bases of Behavior",
    "credits": 3,
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD708": {
    "title": "Ethics and Professional Issues in Clinical Psychology",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD709": {
    "title": "Advanced Family Systems and Development",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD710": {
    "title": "Advanced Theories of Psychotherapy",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD715": {
    "title": "Psychometrics",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD735": {
    "title": "Cognitive and Affective Bases of Behavior",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD740": {
    "title": "Evidence-Based Psychotherapy for Adults",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD745": {
    "title": "Evidence Based Psychotherapy for Children",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD750": {
    "title": "Advanced Group Psychotherapy",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD755": {
    "title": "Applied Theology for Clinical Psychologists",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD770": {
    "title": "Clinical Competency Exam I",
    "credits": 0,
    "prereqs": "PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD780": {
    "title": "Clinical Neuropsychology",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD785": {
    "title": "Clinical Health Psychology",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD796": {
    "title": "Clinical Seminar I",
    "credits": 1,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "note": "Course goes toward MA in Clinical Psychology",
    "offered": "Resident"
  },
  "PSYD797": {
    "title": "Clinical Seminar II",
    "credits": 1,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD798": {
    "title": "Clinical Practicum I and II",
    "credits": 2,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD805": {
    "title": "Psychological Assessment I: Cognitive and Intellectual Assessment",
    "credits": 3,
    "offered": "Resident"
  },
  "PSYD810": {
    "title": "Psychological Assessment II: Personality Assessment: Objective and Projective Methods",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD815": {
    "title": "Psychological Assessment III: Integrative Assessment",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD820": {
    "title": "Psychopharmacology in Clinical Psychology",
    "credits": 3,
    "offered": "Resident"
  },
  "PSYD825": {
    "title": "Consultation",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815 and PSYD 715 and PSYD 735 and PSYD 750 and PSYD 755 and PSYD 797 and PSYD 889 and PSYD 898",
    "offered": "Resident"
  },
  "PSYD830": {
    "title": "Supervision",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815 and PSYD 715 and PSYD 735 and PSYD 750 and PSYD 755 and PSYD 797 and PSYD 889 and PSYD 898",
    "offered": "Resident"
  },
  "PSYD831": {
    "title": "Clinical Interventions for Depressive Disorders",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD835": {
    "title": "Projective Personality Assessment",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 701 and PSYD 702 and PSYD 805 and PSYD 810",
    "offered": "Resident"
  },
  "PSYD840": {
    "title": "Advanced Learning Theories",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD845": {
    "title": "Developmental Psychopathology",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "note": "Required Elective",
    "offered": "Resident"
  },
  "PSYD850": {
    "title": "Neuropsychology",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD855": {
    "title": "Clinical Health Psychology",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD860": {
    "title": "Advanced Cognitive-Behavior Therapy",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805",
    "offered": "Resident"
  },
  "PSYD861": {
    "title": "Advanced Psychodynamic Therapy",
    "credits": 3,
    "offered": "Resident"
  },
  "PSYD889": {
    "title": "Dissertation",
    "credits": 2,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815 and PSYD 715 and PSYD 737 and PSYD 750 and PSYD 755 and PSYD 797 and PSYD 898",
    "offered": "Resident"
  },
  "PSYD890": {
    "title": "Dissertation Defense",
    "credits": 0,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815 and PSYD 715 and PSYD 737 and PSYD 750 and PSYD 755 and PSYD 797 and PSYD 889 and PSYD 898 and PSYD 820 and PSYD 825 and PSYD 830 and PSYD 970 and PSYD 997 and PSYD 998",
    "offered": "Resident"
  },
  "PSYD897": {
    "title": "Advanced Seminar in Psychotherapy I",
    "credits": 3,
    "prereqs": "PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD898": {
    "title": "Clinical Practicum III and IV",
    "credits": 2,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD970": {
    "title": "Clinical Competency Exam II",
    "credits": 0,
    "prereqs": "PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD997": {
    "title": "Clinical Seminar III",
    "credits": 1,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815",
    "offered": "Resident"
  },
  "PSYD998": {
    "title": "Clinical Practicum V and VI",
    "credits": 2,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 706 and PSYD 707 and PSYD 805 and PSYD 704 and PSYD 705 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 740 and PSYD 745 and PSYD 770 and PSYD 796 and PSYD 798 and PSYD 810 and PSYD 815 and PSYD 715 and PSYD 737 and PSYD 750 and PSYD 755 and PSYD 797 and PSYD 889 and PSYD 898",
    "offered": "Resident"
  },
  "PSYD999": {
    "title": "Clinical Leadership",
    "credits": 3,
    "prereqs": "PSYD 600 and PSYD 601 and PSYD 605 and PSYD 610 and PSYD 615 and PSYD 700 and PSYD 701 and PSYD 702 and PSYD 703 and PSYD 704 and PSYD 705 and PSYD 706 and PSYD 707 and PSYD 708 and PSYD 709 and PSYD 710 and PSYD 715 and PSYD 735 and PSYD 740 and PSYD 745 and PSYD 750 and PSYD 755 and PSYD 770 and PSYD 796 and PSYD 797 and PSYD 798 and PSYD 805 and PSYD 810 and PSYD 815 and PSYD 820 and PSYD 825 and PSYD 830 and PSYD 898 and PSYD 970 and PSYD 997 and PSYD 998 and PSYD 889 and PSYD 890",
    "offered": "Resident"
  },
  "RASP500": {
    "title": "Research Administration &amp; Sponsored Programs",
    "credits": 3,
    "offered": "Online"
  },
  "RASP602": {
    "title": "Grant Evaluation &amp; Supervision",
    "credits": 3,
    "prereqs": "WRIT 601",
    "offered": "Online"
  },
  "RASP630": {
    "title": "Contracts for Sponsored Programs",
    "credits": 3,
    "offered": "Online"
  },
  "RESP300": {
    "title": "Respiratory Health and Disease",
    "credits": 3,
    "offered": "Resident"
  },
  "RESP302": {
    "title": "Respiratory Care Equipment and Techniques",
    "credits": 4,
    "offered": "Resident"
  },
  "RESP304": {
    "title": "Introduction to Respiratory Care",
    "credits": 3,
    "offered": "Resident"
  },
  "RESP306": {
    "title": "Pulmonary Function and Testing",
    "credits": 4,
    "offered": "Resident"
  },
  "RESP308": {
    "title": "Artificial Ventilation",
    "credits": 3,
    "offered": "Resident"
  },
  "RESP310": {
    "title": "Clinical Observation",
    "credits": 4,
    "offered": "Resident"
  },
  "RESP320": {
    "title": "Neonatal Respiratory Care",
    "credits": 2,
    "offered": "Online"
  },
  "RESP321": {
    "title": "Pediatric Respiratory Care",
    "credits": 2,
    "prereqs": "RESP 320",
    "offered": "Resident and Online"
  },
  "RESP322": {
    "title": "Respiratory Care for Special Populations",
    "credits": 3,
    "offered": "Resident"
  },
  "RESP324": {
    "title": "Respiratory Pharmacology",
    "credits": 3,
    "offered": "Resident"
  },
  "RESP400": {
    "title": "Critical Respiratory Care",
    "credits": 3,
    "offered": "Resident"
  },
  "RESP402": {
    "title": "Clinical Experience I",
    "credits": 4,
    "offered": "Resident and Online"
  },
  "RESP404": {
    "title": "Guided Study in Respiratory Care",
    "credits": 3,
    "offered": "Resident"
  },
  "RESP406": {
    "title": "Advanced Ventilatory Support",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "RESP408": {
    "title": "Pulmonary Disease Management",
    "credits": 3,
    "offered": "Resident"
  },
  "RESP410": {
    "title": "Seminar",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "RESP412": {
    "title": "Clinical Experiences II",
    "credits": 4,
    "offered": "Resident and Online"
  },
  "RESP420": {
    "title": "Cardiopulmonary Physiology and Monitoring",
    "credits": 3,
    "offered": "Online"
  },
  "RESP422": {
    "title": "Current Issues in Respiratory Care",
    "credits": 3,
    "offered": "Online"
  },
  "RESP424": {
    "title": "Teaching and Learning Respiratory Therapy",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "RESP430": {
    "title": "Fundamentals of Respiratory Care Research",
    "credits": 3,
    "offered": "Online"
  },
  "RESP432": {
    "title": "Respiratory Care Management and Leadership",
    "credits": 3,
    "offered": "Online"
  },
  "RLGN104": {
    "title": "Christian Life and Biblical Worldview",
    "credits": 4,
    "offered": "Resident and Online"
  },
  "RLGN105": {
    "title": "Introduction to Biblical Worldview",
    "credits": 2,
    "offered": "Resident and Online"
  },
  "RLGN210": {
    "title": "Introduction to Cultural Engagement",
    "credits": 3,
    "offered": "Online"
  },
  "RLGN301": {
    "title": "Research and Writing for Religious Disciplines",
    "credits": 3,
    "prereqs": "BIBL 105 and BIBL 110 and ENGL 101 and THEO 201 and THEO 202 and (INFT 101 or UNIV 101 or UNIV 104 or Exemption: UNIV 104 Score of 5 with a score of 5)",
    "offered": "Online"
  },
  "RLGN340": {
    "title": "Global Religious Movements",
    "credits": 3,
    "prereqs": "APOL 220",
    "offered": "Online"
  },
  "RLGN350": {
    "title": "World Religions",
    "credits": 3,
    "offered": "Resident"
  },
  "RLGN360": {
    "title": "Practical Teaching of Scripture",
    "credits": 3,
    "prereqs": "(RLGN 301 and THEO 360 and BIBL 360 and BIBL 105 and BIBL 110) or (RLGN 301 and THEO 360 and BIBL 360 and BIBL 205 and BIBL 210) or (RLGN 301 and THEO 360 and BIBL 360 and BIBL 110 and BIBL 205) or (RLGN 301 and THEO 360 and BIBL 360 and BIBL 105 and BIBL 210) or (RLGN 301 and THEO 360 and BIBL 360 and BIBL 104)",
    "offered": "Online"
  },
  "RLGN410": {
    "title": "Contextualization and Cultural Engagement",
    "credits": 3,
    "prereqs": "THEO 310",
    "offered": "Online"
  },
  "RLGN480": {
    "title": "Cultural Engagement Capstone Seminar",
    "credits": 3,
    "prereqs": "RLGN 410",
    "offered": "Online"
  },
  "RLGN489": {
    "title": "Ministry Praxis Capstone",
    "credits": 3,
    "prereqs": "(BIBL 360 or BIBL 350) and (THEO 360 or THEO 350) and (RLGN 360 or CHMN 387)",
    "offered": "Online"
  },
  "RLGN490": {
    "title": "Research and Scholarly Capstone",
    "credits": 3,
    "prereqs": "(RLGN 360 or RLGN 350) and (BIBL 360 or BIBL 350) and (THEO 360 or CHMN 387)",
    "offered": "Online"
  },
  "RLGN681": {
    "title": "World Religions Survey",
    "credits": 3,
    "offered": "Resident"
  },
  "RLST489": {
    "title": "Religious Studies Capstone",
    "credits": 3,
    "prereqs": "BIBL 350 and THEO 350 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "RLST499": {
    "title": "Biblical and Theological Studies Internship",
    "credits": 3,
    "prereqs": "(BIBL 350 or BIBL 360) and (THEO 350 or THEO 360)",
    "offered": "Resident"
  },
  "RMGT210": {
    "title": "Introduction to Paddling",
    "credits": 2,
    "offered": "Resident"
  },
  "RSCH000": {
    "title": "Research Assessment",
    "credits": 0,
    "offered": "Resident"
  },
  "RSCH201": {
    "title": "Research",
    "credits": 3,
    "prereqs": "INQR 101 or Inquiry Research with a score of 80 or Inquiry Assessment with a score of 80",
    "offered": "Resident"
  },
  "RSCH202": {
    "title": "Interdisciplinary Research",
    "credits": 3,
    "prereqs": "INQR 101 or INQR 102",
    "offered": "Online"
  },
  "RSCH301": {
    "title": "Research Verification",
    "credits": 3,
    "prereqs": "((RSCH 202 or RSCH 201) and PSYC 355 or (MATH 131 or MATH 132 or MATH 133 or MATH 201 or MATH 202 or MATH 211 or MATH 217 or MATH 250))",
    "offered": "Online"
  },
  "RSCH401": {
    "title": "Interdisciplinary Research Methods",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Online"
  },
  "RSCH490": {
    "title": "Interdisciplinary Research Project",
    "credits": 3,
    "prereqs": "RSCH 401",
    "offered": "Online"
  },
  "RTCH500": {
    "title": "Research, Writing, and Ministry Preparation",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "RTCH680": {
    "title": "Research Methods",
    "credits": 3,
    "offered": "Online"
  },
  "RTCH710": {
    "title": "Teaching Methods",
    "credits": 3,
    "prereqs": "THEO 706",
    "offered": "Online"
  },
  "RTCH805": {
    "title": "Research Methods",
    "credits": 3,
    "prereqs": "THEO 706",
    "offered": "Online"
  },
  "RTCH900": {
    "title": "Research Methods",
    "credits": 3,
    "offered": "Resident"
  },
  "RTCH901": {
    "title": "Teaching in Higher Education",
    "credits": 3,
    "offered": "Resident"
  },
  "RUSS101": {
    "title": "Elementary Russian I",
    "credits": 3,
    "offered": "Resident"
  },
  "RUSS102": {
    "title": "Elementary Russian II",
    "credits": 3,
    "prereqs": "RUSS 101",
    "offered": "Resident"
  },
  "RUSS201": {
    "title": "Intermediate Russian I",
    "credits": 3,
    "prereqs": "RUSS 102",
    "offered": "Resident"
  },
  "RUSS202": {
    "title": "Intermediate Russian II",
    "credits": 3,
    "prereqs": "RUSS 201",
    "offered": "Resident"
  },
  "SCOM110": {
    "title": "Media and Culture",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SCOM201": {
    "title": "Public Speaking",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM210": {
    "title": "Theoretical Foundations in Communication",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM212": {
    "title": "Criticism of Popular Culture",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SCOM220": {
    "title": "Communication &amp; Diversity",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM226": {
    "title": "Interpersonal and Group Communication",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "SCOM300": {
    "title": "Communication Research",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SCOM315": {
    "title": "Narrative, Story-telling and Performance",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM325": {
    "title": "Interpersonal Communication",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM330": {
    "title": "Creative Problem Solving in Teams",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM335": {
    "title": "Argumentation",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM345": {
    "title": "Persuasion",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident and Online"
  },
  "SCOM355": {
    "title": "Organizational Communication",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM358": {
    "title": "Essentials of Customer Service",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM360": {
    "title": "Leadership Communication",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM365": {
    "title": "Communication and Christian Ministry",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM370": {
    "title": "Motivational Speaking",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM380": {
    "title": "Vendor Communication &amp; Strategic Relations",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM387": {
    "title": "Forensics Practicum",
    "credits": 1,
    "offered": "Resident"
  },
  "SCOM388": {
    "title": "King's Players Practicum",
    "credits": 1,
    "offered": "Resident"
  },
  "SCOM410": {
    "title": "Communication in a Technological Age",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM420": {
    "title": "Advanced Public Communication",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM430": {
    "title": "Event Planning &amp; Communicative Coordination",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM440": {
    "title": "Communication in the Family",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM450": {
    "title": "Political Rhetoric",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM455": {
    "title": "Communication Theory",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM460": {
    "title": "Communication in the Marketplace",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM465": {
    "title": "Rhetorical Theory and Criticism",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM475": {
    "title": "Criticism of Public Address",
    "credits": 3,
    "offered": "Resident"
  },
  "SCOM490": {
    "title": "Crisis Communication and Negotiation",
    "credits": 3,
    "offered": "Resident"
  },
  "SETM205": {
    "title": "Practicum in Sport and Hospitality",
    "credits": 3,
    "prereqs": "HMGT 200 or SMGT 200",
    "offered": "Resident and Online"
  },
  "SETM299": {
    "title": "Non-Credit Internship in Sport &amp; Hospitality",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "SETM399": {
    "title": "Interim Internship in Sport &amp; Hospitality",
    "credits": 3,
    "prereqs": "SETM 205",
    "offered": "Resident and Online"
  },
  "SETM415": {
    "title": "Research Methods in Sport &amp; Hospitality Management",
    "credits": 3,
    "prereqs": "HMGT 310 or SMGT 310",
    "offered": "Resident and Online"
  },
  "SETM497": {
    "title": "Special Topics in Sport &amp; Hospitality",
    "credits": 1,
    "prereqs": "SETM 205",
    "offered": "Resident and Online"
  },
  "SETM499": {
    "title": "Internship in Sport &amp; Hospitality",
    "credits": 1,
    "prereqs": "SETM 205",
    "offered": "Resident and Online"
  },
  "SFME510": {
    "title": "Supervised Field Ministry Expe",
    "credits": 0
  },
  "SFME610": {
    "title": "Supervised Field Ministry Expe",
    "credits": 0
  },
  "SFME611": {
    "title": "Advanced Supervised Field Ministry",
    "credits": 0,
    "offered": "Resident"
  },
  "SFME612": {
    "title": "Advanced Supervised Field Ministry",
    "credits": 0
  },
  "SFME613": {
    "title": "Advanced Supervised Field Ministry I",
    "credits": 0
  },
  "SMGT200": {
    "title": "Introduction to Sport Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT201": {
    "title": "History of Sport",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT300": {
    "title": "Introduction to Coaching",
    "credits": 3,
    "offered": "Resident"
  },
  "SMGT302": {
    "title": "Sport Facilities and Events",
    "credits": 3,
    "prereqs": "SMGT 200 and SMGT 201 and (ISYS 201 or CMIS 201 or BUSI 201) and ENGL 101 and COMS 101 and INQR 101 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "SMGT304": {
    "title": "Coaching Football",
    "credits": 3,
    "prereqs": "SMGT 300",
    "note": "Offered in the fall semester",
    "offered": "Resident"
  },
  "SMGT305": {
    "title": "Sport Law",
    "credits": 3,
    "prereqs": "SMGT 200 and SMGT 201 and BUSI 201 and ENGL 101 and COMS 101 and INQR 101 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "SMGT306": {
    "title": "Coaching Basketball",
    "credits": 3,
    "prereqs": "SMGT 300",
    "note": "Offered in the spring semester",
    "offered": "Resident"
  },
  "SMGT307": {
    "title": "Coaching Fall Sports",
    "credits": 3,
    "prereqs": "SMGT 300",
    "note": "Offered in the fall semester",
    "offered": "Resident"
  },
  "SMGT308": {
    "title": "Coaching Spring Sports",
    "credits": 3,
    "prereqs": "SMGT 300",
    "note": "Offered in the spring semester",
    "offered": "Resident"
  },
  "SMGT310": {
    "title": "Communication in Sport",
    "credits": 3,
    "prereqs": "COMS 101 and ENGL 101 and (SETM 205 or SMGT 205) and (ISYS 201 or CMIS 201 or BUSI 201) and ECON 110 and INQR 101 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80) and (MATH 114 or MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)",
    "offered": "Resident and Online"
  },
  "SMGT312": {
    "title": "Introduction to Sport Ministry Outreach",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT314": {
    "title": "Coaching Dynamics",
    "credits": 3,
    "prereqs": "SMGT 300",
    "note": "Offered in spring semester",
    "offered": "Resident"
  },
  "SMGT315": {
    "title": "Concepts and Practices in Sport Outreach",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT317": {
    "title": "Mentoring in Sport",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT321": {
    "title": "Global Sport Outreach",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT330": {
    "title": "Sport Communication Technology",
    "credits": 3,
    "prereqs": "SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT400": {
    "title": "Sport and Exercise Psychology",
    "credits": 3,
    "prereqs": "PSYC 101 and SMGT 300 and (PHED 208 or KINE 208) and (PHED 209 or KINE 209)",
    "note": "Offered in the spring semester",
    "offered": "Resident"
  },
  "SMGT401": {
    "title": "Sport Methodology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT402": {
    "title": "Outreach in Organized Sport",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT404": {
    "title": "Administration and Organization in Sport and Recreation",
    "credits": 3,
    "prereqs": "SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT405": {
    "title": "Sport Finance",
    "credits": 3,
    "prereqs": "SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT406": {
    "title": "Issues and Trends in Sport",
    "credits": 3,
    "prereqs": "SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT410": {
    "title": "Sport Marketing",
    "credits": 3,
    "prereqs": "SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT421": {
    "title": "Policy &amp; Governance in Sport",
    "credits": 3,
    "prereqs": "SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT422": {
    "title": "Sport Analytics",
    "credits": 3,
    "prereqs": "SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT430": {
    "title": "Sport Media Strategies",
    "credits": 3,
    "prereqs": "SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT440": {
    "title": "Guest Service Management",
    "credits": 3,
    "prereqs": "HMGT 310 or SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT441": {
    "title": "Sport Venue Operations",
    "credits": 3,
    "prereqs": "SMGT 310",
    "offered": "Resident and Online"
  },
  "SMGT495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "SMGT501": {
    "title": "Social Issues in Sport Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT502": {
    "title": "Sport Marketing and Public Relations",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT503": {
    "title": "Ethics in Sport",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT504": {
    "title": "Foundations of Sport Outreach",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT505": {
    "title": "Legal Issues in Sport",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT506": {
    "title": "Economics and Financial Management of Sport",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT520": {
    "title": "Understanding Research in Sport, Recreation, and Tourism",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT600": {
    "title": "Comprehensive Examination",
    "credits": 0,
    "prereqs": "SMGT 501 and SMGT 502 and SMGT 503 and SMGT 504 and SMGT 505 and SMGT 506 and SMGT 520",
    "offered": "Resident and Online"
  },
  "SMGT611": {
    "title": "Foundations of Outdoor Adventure Sport",
    "credits": 3,
    "offered": "Online"
  },
  "SMGT612": {
    "title": "Outdoor Adventure Programming",
    "credits": 3,
    "offered": "Online"
  },
  "SMGT613": {
    "title": "Leadership and Administration of Outdoor Adventure Sport",
    "credits": 3,
    "offered": "Online"
  },
  "SMGT621": {
    "title": "Advanced Coaching Theory",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT622": {
    "title": "Strategic Sport Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT623": {
    "title": "Sport Governance",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT631": {
    "title": "Sport Event and Facility Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT632": {
    "title": "Sport Development and Sales",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT633": {
    "title": "Management and Leadership in Sport Organizations",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT689": {
    "title": "Thesis Proposal and Research",
    "credits": 3,
    "prereqs": "SMGT 600",
    "offered": "Resident and Online"
  },
  "SMGT690": {
    "title": "Thesis Defense",
    "credits": 3,
    "prereqs": "SMGT 600 and SMGT 689",
    "offered": "Resident and Online"
  },
  "SMGT697": {
    "title": "Seminar",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SMGT699": {
    "title": "Internship",
    "credits": 3,
    "prereqs": "SMGT 600",
    "offered": "Resident and Online"
  },
  "SOCI200": {
    "title": "Introduction to Sociology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SOCI201": {
    "title": "Social Problems",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SOCI299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "SOCI313": {
    "title": "Social Organizations",
    "credits": 3,
    "prereqs": "SOCI 200 or SOCI 201",
    "note": "Offered fall semester",
    "offered": "Resident"
  },
  "SOCI340": {
    "title": "Human Societies: A Global View",
    "credits": 3,
    "prereqs": "SOCI 200 or SOCI 201",
    "note": "Offered spring semester",
    "offered": "Resident"
  },
  "SOCI349": {
    "title": "Sociology of Disability",
    "credits": 3,
    "prereqs": "SOCI 200 or SOCI 201",
    "offered": "Resident"
  },
  "SOCI495": {
    "title": "Directed Research",
    "credits": 1,
    "prereqs": "SOCI 200 or SOCI 201",
    "offered": "Resident"
  },
  "SOCI497": {
    "title": "Special Topics in Sociology",
    "credits": 1,
    "prereqs": "SOCI 200 or SOCI 201",
    "offered": "Resident"
  },
  "SOWK101": {
    "title": "Introduction to Social Work",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SOWK135": {
    "title": "Social Work Professional Exploration",
    "credits": 3,
    "prereqs": "ENGL 102",
    "offered": "Resident and Online"
  },
  "SOWK250": {
    "title": "Health of the Social Worker",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SOWK260": {
    "title": "Chemical Dependency",
    "credits": 3,
    "prereqs": "ENGL 102",
    "offered": "Resident and Online"
  },
  "SOWK270": {
    "title": "Ethics in Professional Helping",
    "credits": 3,
    "prereqs": "(SOWK 101 or PSYC 101) and ENGL 102",
    "offered": "Resident and Online"
  },
  "SOWK294": {
    "title": "BSSW GATE 1 &amp; Approval Process",
    "credits": 0,
    "prereqs": "((BIOL 101 (may be taken concurrently) or BIOL 102 (may be taken concurrently)) and PSYC 101 (may be taken concurrently) and SOWK 135 (may be taken concurrently) and SOWK 250 (may be taken concurrently) and SOWK 260 (may be taken concurrently) and SOWK 270 (may be taken concurrently) and ENGL 102 (may be taken concurrently) and SOWK 101 )",
    "offered": "Resident and Online"
  },
  "SOWK300": {
    "title": "Human Behavior and the Social Environment",
    "credits": 3,
    "prereqs": "SOWK 101 and ENGL 102",
    "offered": "Resident and Online"
  },
  "SOWK325": {
    "title": "Social Welfare and Policy",
    "credits": 3,
    "prereqs": "SOWK 101 and ENGL 102",
    "offered": "Resident and Online"
  },
  "SOWK350": {
    "title": "Social Work Practice with Individuals and Families",
    "credits": 3,
    "prereqs": "(SOWK 294 or Social Work Gate 1 with a score of 3) and SOWK 300 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "SOWK355": {
    "title": "Social Work Practice with Groups",
    "credits": 3,
    "prereqs": "SOWK 101",
    "offered": "Resident and Online"
  },
  "SOWK365": {
    "title": "BSSW GATE 2 &amp; Junior Field Enrollment",
    "credits": 0,
    "prereqs": "PSYC 255 (may be taken concurrently) and (SOWK 294 or Social Work Gate 1 with a score of 3) and (GLST 220 (may be taken concurrently) and SOWK 300 (may be taken concurrently) and SOWK 355 (may be taken concurrently)) and (MATH 115 (may be taken concurrently) or MATH 116 (may be taken concurrently) or MATH 117 (may be taken concurrently) or MATH 121 (may be taken concurrently) or MATH 122 (may be taken concurrently) or MATH 125 (may be taken concurrently) or MATH 126 (may be taken concurrently) or MATH 128 (may be taken concurrently) or MATH 130 (may be taken concurrently) or MATH 131 (may be taken concurrently) or MATH 201 (may be taken concurrently) or MATH 217 (may be taken concurrently)) and SOWK 270 and ENGL 102",
    "offered": "Resident and Online"
  },
  "SOWK370": {
    "title": "Junior Field Experience and Seminar",
    "credits": 3,
    "prereqs": "SOWK 101 and SOWK 120 and SOWK 150 and SOWK 270 and (SOWK 294 or Social Work Gate 1 with a score of 3) and SOWK 300 and SOWK 350 (may be taken concurrently) and SOWK 355 and (SOWK 365 or Social Work Gate 2 with a score of 3) and GLST 220 and PSYC 255 and (MATH 115 or MATH 116 or MATH 117 or MATH 121 or MATH 122 or MATH 125 or MATH 126 or MATH 128 or MATH 130 or MATH 131 or MATH 201 or MATH 217)",
    "offered": "Resident and Online"
  },
  "SOWK375": {
    "title": "Junior Field Seminar",
    "credits": 1,
    "prereqs": "SOWK 270",
    "offered": "Resident and Online"
  },
  "SOWK410": {
    "title": "Social Work Macro Practice",
    "credits": 3,
    "prereqs": "(RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80) and (SOWK 294 or Social Work Gate 1 with a score of 3) and SOWK 325 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "SOWK425": {
    "title": "Social Work in International Settings",
    "credits": 3,
    "prereqs": "SOWK 101 and SOWK 270 and GLST 220",
    "offered": "Resident and Online"
  },
  "SOWK431": {
    "title": "Social Work in Mental Health",
    "credits": 3,
    "prereqs": "SOWK 101 and SOWK 270",
    "offered": "Resident and Online"
  },
  "SOWK432": {
    "title": "Social Work with Aging Adults",
    "credits": 3,
    "prereqs": "SOWK 101 and SOWK 270",
    "offered": "Resident and Online"
  },
  "SOWK435": {
    "title": "Social Work in the Military",
    "credits": 3,
    "prereqs": "SOWK 101 and SOWK 270",
    "offered": "Online"
  },
  "SOWK439": {
    "title": "International Social Work Experience",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SOWK450": {
    "title": "Social Work Practice with Diverse Populations",
    "credits": 3,
    "prereqs": "GLST 220 and (SOWK 294 or Social Work Gate 1 with a score of 3)",
    "offered": "Resident and Online"
  },
  "SOWK465": {
    "title": "BSSW GATE 3 &amp; Senior Field Enrollment",
    "credits": 0,
    "prereqs": "(PSYC 354 (may be taken concurrently) and SOWK 325 (may be taken concurrently) and SOWK 350 (may be taken concurrently) and SOWK 370 (may be taken concurrently)) and (SOWK 294 or Social Work Gate 1 with a score of 3 and SOWK 350 and SOWK 365 or Social Work Gate 2 with a score of 3) and SOWK 431 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "SOWK470": {
    "title": "Senior Field Experience and Seminar",
    "credits": 9,
    "prereqs": "(SOWK 294 or Social Work Gate 1 with a score of 3) and (SOWK 365 or Social Work Gate 2 with a score of 3) and SOWK 370 and SOWK 410 (may be taken concurrently) and SOWK 431 and SOWK 450 (may be taken concurrently) and (SOWK 465 or Social Work Gate 3 with a score of 3)",
    "offered": "Resident and Online"
  },
  "SOWK494": {
    "title": "BSSW GATE 4 &amp; Comprehensive Exam",
    "credits": 0,
    "prereqs": "(SOWK 465 or Social Work Gate 3 with a score of 3 and SOWK 294 or Social Work Gate 1 with a score of 3 and SOWK 365 or Social Work Gate 2 with a score of 3) or SOWK 470 (may be taken concurrently) and (SOWK 410 (may be taken concurrently) and SOWK 450 (may be taken concurrently))",
    "offered": "Resident and Online"
  },
  "SOWK495": {
    "title": "Directed Social Work Research",
    "credits": 3,
    "prereqs": "PSYC 255 and PSYC 354 and SOWK 101",
    "offered": "Resident and Online"
  },
  "SOWK497": {
    "title": "Special Topics in Social Work",
    "credits": 3,
    "offered": "Resident"
  },
  "SOWK501": {
    "title": "Generalist Social Work Concepts",
    "credits": 4,
    "offered": "Resident and Online"
  },
  "SOWK510": {
    "title": "Generalist Social Work Macro Practice",
    "credits": 3,
    "prereqs": "SOWK 501 and SOWK 530",
    "offered": "Resident and Online"
  },
  "SOWK530": {
    "title": "Human Behavior and the Social Environment",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SOWK545": {
    "title": "Generalist Field Enrollment",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "SOWK550": {
    "title": "Generalist Practice with Individuals and Families",
    "credits": 3,
    "prereqs": "SOWK 501 and SOWK 530",
    "offered": "Resident and Online"
  },
  "SOWK555": {
    "title": "Generalist Social Work Practice with Groups",
    "credits": 3,
    "prereqs": "SOWK 501 and SOWK 530",
    "offered": "Resident and Online"
  },
  "SOWK560": {
    "title": "Generalist Field Experience and Seminar A",
    "credits": 4,
    "prereqs": "SOWK 501 and SOWK 530 and SOWK 545 and (SOWK 550 or SOWK 555) and SOWK 570",
    "offered": "Resident and Online"
  },
  "SOWK565": {
    "title": "Generalist Field Experience and Seminar B",
    "credits": 4,
    "prereqs": "SOWK 501 and SOWK 530 and SOWK 545 and SOWK 570 and (SOWK 550 or SOWK 555)",
    "offered": "Resident and Online"
  },
  "SOWK570": {
    "title": "Generalist Social Work Communication and Ethics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SOWK580": {
    "title": "Generalist Social Work Statistics, Research, and Ethics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "SOWK588": {
    "title": "Generalist Comprehensive Exam",
    "credits": 0,
    "prereqs": "SOWK 501 and SOWK 510 (may be taken concurrently) and SOWK 530 and SOWK 545 and SOWK 550 and SOWK 555 and SOWK 560 and (SOWK 565 (may be taken concurrently) or SOWK 590 (may be taken concurrently)) and SOWK 570 and SOWK 580 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "SOWK590": {
    "title": "Generalist Field Experience and Seminar",
    "credits": 8,
    "prereqs": "SOWK 501 and SOWK 530 and SOWK 545 and (SOWK 550 or SOWK 555) and SOWK 570",
    "offered": "Resident and Online"
  },
  "SOWK610": {
    "title": "Advanced Social Work Macro Practice",
    "credits": 3,
    "prereqs": "SOWK 510 and (SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5) and SOWK 655",
    "offered": "Resident and Online"
  },
  "SOWK612": {
    "title": "Program Development and Supervision",
    "credits": 3,
    "prereqs": "(SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5) and SOWK 655",
    "offered": "Resident and Online"
  },
  "SOWK625": {
    "title": "Social Policy, Justice, and Advocacy",
    "credits": 3,
    "prereqs": "SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5",
    "offered": "Resident and Online"
  },
  "SOWK641": {
    "title": "Advanced Clinical Social Work Practice",
    "credits": 3,
    "prereqs": "SOWK 655",
    "offered": "Resident and Online"
  },
  "SOWK643": {
    "title": "Child and Family Social Work Clinical Practice",
    "credits": 3,
    "prereqs": "SOWK 655",
    "offered": "Resident and Online"
  },
  "SOWK644": {
    "title": "Social Development and International Social Work Practice",
    "credits": 3,
    "prereqs": "(SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5) and SOWK 655",
    "offered": "Resident and Online"
  },
  "SOWK645": {
    "title": "Psychopathology and Addictions",
    "credits": 3,
    "prereqs": "SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5",
    "offered": "Resident and Online"
  },
  "SOWK647": {
    "title": "Military Social Work Practice",
    "credits": 3,
    "prereqs": "(SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5) and SOWK 655",
    "offered": "Resident and Online"
  },
  "SOWK650": {
    "title": "Diversity and Cultural Humility",
    "credits": 3,
    "prereqs": "SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5",
    "offered": "Resident and Online"
  },
  "SOWK655": {
    "title": "Advanced Generalist Social Work Practice",
    "credits": 3,
    "prereqs": "SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5",
    "offered": "Resident and Online"
  },
  "SOWK665": {
    "title": "Advanced Generalist Field Enrollment",
    "credits": 0,
    "prereqs": "((SOWK 560 and SOWK 565) or SOWK 590 ) and SOWK 545 and (SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5)",
    "offered": "Resident and Online"
  },
  "SOWK670": {
    "title": "Advanced Generalist Field Experience and Seminar",
    "credits": 6,
    "prereqs": "SOWK 655 and SOWK 665",
    "offered": "Resident and Online"
  },
  "SOWK675": {
    "title": "Advanced Generalist Field Experience and Seminar A",
    "credits": 4,
    "prereqs": "SOWK 655 and SOWK 665",
    "offered": "Resident and Online"
  },
  "SOWK677": {
    "title": "Advanced Generalist Field Experience and Seminar B",
    "credits": 5,
    "prereqs": "SOWK 655 and SOWK 665 and SOWK 675",
    "offered": "Resident and Online"
  },
  "SOWK680": {
    "title": "Applied Research and Ethics",
    "credits": 3,
    "prereqs": "SOWK 580",
    "offered": "Resident and Online"
  },
  "SOWK688": {
    "title": "Advanced Generalist Comprehensive Exam",
    "credits": 0,
    "prereqs": "(SOWK 588 or Generalist Comp Exam (SOWK588) with a score of 5) and SOWK 625 (may be taken concurrently) and SOWK 650 (may be taken concurrently) and SOWK 655 (may be taken concurrently) and SOWK 665 (may be taken concurrently) and SOWK 670 (may be taken concurrently) and SOWK 680 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "SOWK697": {
    "title": "Special Topics in Advanced Generalist Social Work",
    "credits": 3,
    "prereqs": "SOWK 501",
    "offered": "Resident and Online"
  },
  "SPAN101": {
    "title": "Elementary Spanish I",
    "credits": 3,
    "offered": "Resident"
  },
  "SPAN102": {
    "title": "Elementary Spanish II",
    "credits": 3,
    "prereqs": "SPAN 101 or Spanish Placement with a score of 35",
    "offered": "Resident"
  },
  "SPAN201": {
    "title": "Intermediate Spanish I",
    "credits": 3,
    "prereqs": "SPAN 102 or Spanish Placement with a score of 70",
    "offered": "Resident"
  },
  "SPAN202": {
    "title": "Intermediate Spanish II",
    "credits": 3,
    "prereqs": "SPAN 201 or Spanish Placement with a score of 90",
    "offered": "Resident"
  },
  "SPAN299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "SPAN301": {
    "title": "Advanced Spanish Grammar and Composition",
    "credits": 3,
    "prereqs": "SPAN 202",
    "offered": "Resident"
  },
  "SPAN302": {
    "title": "Advanced Spanish Composition and Conversation",
    "credits": 3,
    "prereqs": "SPAN 202",
    "note": "Conducted in Spanish",
    "offered": "Resident"
  },
  "SPAN304": {
    "title": "Civilization and Culture of Latin America",
    "credits": 3,
    "prereqs": "SPAN 202",
    "offered": "Resident"
  },
  "SPAN305": {
    "title": "Civilization and Culture of Spain",
    "credits": 3,
    "prereqs": "SPAN 202",
    "note": "Conducted in Spanish",
    "offered": "Resident"
  },
  "SPAN310": {
    "title": "Introduction to Translation: Spanish-English",
    "credits": 3,
    "prereqs": "SPAN 202 and (ENGL 102 or MUSC 200)",
    "note": "Conducted in Spanish",
    "offered": "Resident"
  },
  "SPAN311": {
    "title": "Advanced Span Conversation/Gra",
    "credits": 3
  },
  "SPAN312": {
    "title": "Advanced Span Conv/Gramr-Prac",
    "credits": 3
  },
  "SPAN320": {
    "title": "Cinema and Dramatic Literature",
    "credits": 3,
    "prereqs": "SPAN 202",
    "note": "Conducted in Spanish",
    "offered": "Resident"
  },
  "SPAN321": {
    "title": "Modern Spanish Literature",
    "credits": 3,
    "prereqs": "SPAN 202 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "note": "Conducted in Spanish",
    "offered": "Resident"
  },
  "SPAN322": {
    "title": "Peninsular Literature",
    "credits": 3,
    "prereqs": "SPAN 202",
    "note": "Conducted in Spanish",
    "offered": "Resident"
  },
  "SPAN323": {
    "title": "Latin American Literature",
    "credits": 3,
    "prereqs": "SPAN 202",
    "offered": "Resident"
  },
  "SPAN324": {
    "title": "Christianity in Latin America",
    "credits": 3,
    "prereqs": "ENGL 201 or ENGL 202 or ENGL 221 or ENGL 222 or ENGL 215 or ENGL 216",
    "offered": "Resident"
  },
  "SPAN325": {
    "title": "Modern Spanish Short Stories",
    "credits": 3,
    "prereqs": "SPAN 202",
    "offered": "Resident"
  },
  "SPAN330": {
    "title": "Introduction to Hispanic Linguistics",
    "credits": 3,
    "prereqs": "SPAN 202",
    "offered": "Resident"
  },
  "SPAN403": {
    "title": "Second Language Acquisition",
    "credits": 3,
    "prereqs": "SPAN 101 and (LING 301 or SPAN 330)",
    "offered": "Resident"
  },
  "SPAN410": {
    "title": "Advanced Translation",
    "credits": 3,
    "prereqs": "SPAN 310",
    "note": "Conducted in Spanish",
    "offered": "Resident"
  },
  "SPAN419": {
    "title": "Methodology and Curriculum in Teaching Modern Languages",
    "credits": 3,
    "prereqs": "SPAN 403 and Undergraduate Initial Gate 2 with a score of 5 and Background Check Clearance with a score of 5",
    "offered": "Resident"
  },
  "SPAN420": {
    "title": "Methods Teaching Practicum",
    "credits": 0,
    "prereqs": "SPAN 419 (may be taken concurrently) and Undergraduate Initial Gate 2 with a score of 5 and Background Check Clearance with a score of 5",
    "offered": "Resident"
  },
  "SPAN421": {
    "title": "Masterpieces of Spanish Literature",
    "credits": 3,
    "prereqs": "SPAN 302 or SPAN 304 or SPAN 305 or SPAN 310 or SPAN 320 or SPAN 321 or SPAN 322 or SPAN 323",
    "note": "Conducted in Spanish",
    "offered": "Resident"
  },
  "SPAN450": {
    "title": "Senior Seminar: Comparison Between Spanish and Latin American Literature",
    "credits": 3,
    "prereqs": "SPAN 304 or SPAN 305 or SPAN 321 or SPAN 322 or SPAN 323 or SPAN 325 or SPAN 421",
    "offered": "Resident"
  },
  "SPAN495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "SPAN497": {
    "title": "Special Topics in Spanish",
    "credits": 1,
    "prereqs": "SPAN 202",
    "offered": "Resident"
  },
  "SPAN499": {
    "title": "Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "SPAN501": {
    "title": "Advanced Spanish Grammar and Composition",
    "credits": 3,
    "offered": "Online"
  },
  "SPAN503": {
    "title": "Second Language Acquisition and Methodology",
    "credits": 3,
    "offered": "Online"
  },
  "SPAN505": {
    "title": "Cultures of the Spanish-Speaking World",
    "credits": 3,
    "offered": "Online"
  },
  "STCO289": {
    "title": "Digital Promotion Technologies and Application",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO307": {
    "title": "Strategic Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO346": {
    "title": "Persuasive Advertising and Storytelling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO348": {
    "title": "Strategic Social Media",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO356": {
    "title": "Digital/Social/Mobile Communication Strategies",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident and Online"
  },
  "STCO357": {
    "title": "Public Relations and Promotion Tactics",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO367": {
    "title": "Best Practices: Strategic Communications Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO372": {
    "title": "Employee and Organizational Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO422": {
    "title": "Social Media Development",
    "credits": 3,
    "prereqs": "STCO 307 and STCO 348",
    "offered": "Resident and Online"
  },
  "STCO426": {
    "title": "Creating Affiliate Loyalty in a Digital Age",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO460": {
    "title": "Career Preparation",
    "credits": 3,
    "offered": "Resident"
  },
  "STCO462": {
    "title": "Using the Social and Digital Future",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO487": {
    "title": "Agency/Field Projects",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO497": {
    "title": "Special Topics in Strategic Communication",
    "credits": 3,
    "offered": "Resident"
  },
  "STCO526": {
    "title": "Strategic Storytelling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO532": {
    "title": "Media Technologies &amp; Communication Strategies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO533": {
    "title": "Video, Social &amp; Mobile Promotion",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO534": {
    "title": "Strategic Media Analysis",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO546": {
    "title": "Effective Media Analysis",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO550": {
    "title": "Best Practices: Transforming the Digital Organization",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO562": {
    "title": "Using Emerging Trends in Strategic Communication",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO622": {
    "title": "Organizational Communication Theory and Practice",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO638": {
    "title": "Video Storytelling",
    "credits": 3,
    "offered": "Online"
  },
  "STCO639": {
    "title": "Digital Storytelling",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO648": {
    "title": "Setting Social &amp; Interactive Goals",
    "credits": 3,
    "offered": "Online"
  },
  "STCO658": {
    "title": "Strategic Communication Campaigns for the Digital Age",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO670": {
    "title": "Challenge Examination",
    "credits": 3,
    "offered": "Online"
  },
  "STCO681": {
    "title": "New Beginnings: Research, Insight, and Application",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO690": {
    "title": "Thesis Defense",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "STCO691": {
    "title": "Project",
    "credits": 3,
    "offered": "Online"
  },
  "SUBS505": {
    "title": "Addictions and the Recovery Process",
    "credits": 3,
    "offered": "Online"
  },
  "SUBS606": {
    "title": "Biological Aspects of Addiction and Recovery",
    "credits": 3,
    "prereqs": "SUBS 505",
    "offered": "Online"
  },
  "SUBS607": {
    "title": "Treatment and the Recovery Process",
    "credits": 3,
    "prereqs": "SUBS 505",
    "offered": "Online"
  },
  "SUBS608": {
    "title": "Diagnosis and Treatment of Sexual Addiction",
    "credits": 3,
    "prereqs": "SUBS 505",
    "offered": "Online"
  },
  "SUBS609": {
    "title": "Healthy Sexuality",
    "credits": 3,
    "offered": "Online"
  },
  "TESL299": {
    "title": "Internship",
    "credits": 0
  },
  "TESL302": {
    "title": "Applied Linguistics",
    "credits": 3,
    "prereqs": "LING 301",
    "offered": "Resident and Online"
  },
  "TESL333": {
    "title": "Modern Grammar",
    "credits": 3,
    "prereqs": "LING 301",
    "offered": "Resident and Online"
  },
  "TESL373": {
    "title": "Applied Grammar",
    "credits": 3,
    "prereqs": "LING 301",
    "offered": "Resident and Online"
  },
  "TESL403": {
    "title": "Second Language Acquisition",
    "credits": 3,
    "prereqs": "LING 301 and (ASLI 101 or ARAB 101 or CHIN 101 or FREN 101 or GRMN 101 or RUSS 101 or SPAN 101) and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident and Online"
  },
  "TESL405": {
    "title": "Issues and Practices in TES/FL",
    "credits": 3,
    "prereqs": "TESL 403",
    "offered": "Resident and Online"
  },
  "TESL419": {
    "title": "Methodology and Curriculum in Teaching Modern Languages",
    "credits": 3,
    "prereqs": "MLAN 403 or TESL 403 or SPAN 403",
    "offered": "Resident and Online"
  },
  "TESL420": {
    "title": "Methods Teaching Practicum",
    "credits": 0,
    "prereqs": "TESL 419 (may be taken concurrently) and Undergraduate Initial Gate 2 with a score of 5 and Background Check Clearance with a score of 5",
    "offered": "Resident"
  },
  "TESL495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "TESL497": {
    "title": "Special Topics in TES/FL",
    "credits": 1,
    "offered": "Resident"
  },
  "TESL499": {
    "title": "TES/FL Internship",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "TESL600": {
    "title": "Introduction to TESL",
    "credits": 3,
    "offered": "Online"
  },
  "TESL601": {
    "title": "Methods and Materials for TESL",
    "credits": 3,
    "offered": "Online"
  },
  "TESL602": {
    "title": "Curriculum, Testing, and Assessment",
    "credits": 3,
    "prereqs": "TESL 600",
    "offered": "Online"
  },
  "TESL603": {
    "title": "Teaching Grammar, Lexicon, and Pronunciation",
    "credits": 3,
    "prereqs": "TESL 600",
    "offered": "Online"
  },
  "TESL630": {
    "title": "Applied Linguistics I",
    "credits": 3,
    "prereqs": "TESL 600",
    "offered": "Online"
  },
  "TESL633": {
    "title": "Applied Linguistics II",
    "credits": 3,
    "prereqs": "TESL 630",
    "offered": "Online"
  },
  "TESL699": {
    "title": "Internship",
    "credits": 3,
    "prereqs": "Forgn Lang Prereq Met (6 hrs.) with a score of 6",
    "offered": "Online"
  },
  "THEA101": {
    "title": "Theatre Appreciation",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA102": {
    "title": "Acting for Non-Majors",
    "credits": 3,
    "prereqs": "ENGL 100 or Placement Score-English with a score of 70",
    "offered": "Resident"
  },
  "THEA108": {
    "title": "Ballet and Modern",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA109": {
    "title": "Tap and Jazz",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA200": {
    "title": "Play Production I",
    "credits": 1,
    "offered": "Resident"
  },
  "THEA201": {
    "title": "Acting I",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA202": {
    "title": "Stagecraft",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA206": {
    "title": "History of Dance",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA208": {
    "title": "Ballet and Modern II",
    "credits": 3,
    "prereqs": "THEA 108",
    "offered": "Resident"
  },
  "THEA209": {
    "title": "Tap and Jazz II",
    "credits": 3,
    "prereqs": "THEA 109",
    "offered": "Resident"
  },
  "THEA211": {
    "title": "Theatre History I",
    "credits": 3,
    "note": "(Offered fall semester)",
    "offered": "Resident"
  },
  "THEA212": {
    "title": "Theatre History II",
    "credits": 3,
    "note": "(Offered spring semester)",
    "offered": "Resident"
  },
  "THEA221": {
    "title": "Introduction to Theatre History and Performance",
    "credits": 3
  },
  "THEA231": {
    "title": "Script Analysis",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA241": {
    "title": "Voice for the Stage I",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA243": {
    "title": "Voice for the Stage II",
    "credits": 3,
    "prereqs": "THEA 241 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA251": {
    "title": "Musical Theatre I",
    "credits": 3,
    "prereqs": "THEA 201 and THEA 241 and (MUSC 125 or MUSC 118)",
    "offered": "Resident"
  },
  "THEA271": {
    "title": "Introduction to Theatrical Design",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA299": {
    "title": "Internship",
    "credits": 0,
    "offered": "Resident"
  },
  "THEA300": {
    "title": "Theatre Practicum",
    "credits": 1,
    "offered": "Resident"
  },
  "THEA301": {
    "title": "Acting II",
    "credits": 3,
    "prereqs": "THEA 201",
    "offered": "Resident"
  },
  "THEA308": {
    "title": "Advanced Techniques in Musical Theatre Choreography",
    "credits": 3,
    "prereqs": "THEA 108 and THEA 109",
    "offered": "Resident"
  },
  "THEA311": {
    "title": "Acting for Film I",
    "credits": 3,
    "prereqs": "THEA 301 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA313": {
    "title": "Acting for Film II",
    "credits": 3,
    "prereqs": "THEA 311 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA320": {
    "title": "Directing",
    "credits": 3,
    "prereqs": "(THEA 211 and Theatre Comp with a score of 080) and (THEA 212 or THEA 220 or THEA 310 or THEA 312)",
    "note": "(Offered spring semester, odd-numbered years)",
    "offered": "Resident"
  },
  "THEA321": {
    "title": "Stage Movement I",
    "credits": 3,
    "prereqs": "THEA 301 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA323": {
    "title": "Stage Movement II",
    "credits": 3,
    "prereqs": "THEA 321 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA331": {
    "title": "Stage Management and Directing",
    "credits": 3,
    "prereqs": "THEA 231",
    "offered": "Resident"
  },
  "THEA341": {
    "title": "Makeup Design",
    "credits": 3,
    "prereqs": "THEA 231 and THEA 271",
    "offered": "Resident"
  },
  "THEA342": {
    "title": "Costume Design",
    "credits": 3,
    "prereqs": "THEA 231 and THEA 271",
    "offered": "Resident"
  },
  "THEA343": {
    "title": "Scenic Design",
    "credits": 3,
    "prereqs": "THEA 231 and THEA 271",
    "offered": "Resident"
  },
  "THEA344": {
    "title": "Lighting Design",
    "credits": 3,
    "prereqs": "THEA 231 and THEA 271",
    "offered": "Resident"
  },
  "THEA351": {
    "title": "Musical Theatre II",
    "credits": 3,
    "prereqs": "THEA 251 and THEA 321 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA381": {
    "title": "Christian Aesthetics in Theatre",
    "credits": 1,
    "prereqs": "THEA 201 and THEA 211 and THEA 212 and THEA 231",
    "offered": "Resident"
  },
  "THEA400": {
    "title": "Play Production III",
    "credits": 1,
    "prereqs": "(THEA 200 and THEA 300) or (DRAM 200 and THEA 300)",
    "offered": "Resident"
  },
  "THEA401": {
    "title": "Acting III",
    "credits": 3,
    "prereqs": "THEA 301 and THEA 321 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA411": {
    "title": "Stage and Theater Management",
    "credits": 3,
    "prereqs": "THEA 211 and THEA 212 and THEA 220 and THEA 312 and THEA 260 and Theatre Comp with a score of 080",
    "note": "(Offered spring semester, even-numbered years)",
    "offered": "Resident"
  },
  "THEA412": {
    "title": "Site-Specific Theatre",
    "credits": 3,
    "prereqs": "THEA 231 and THEA 331",
    "offered": "Resident and Online"
  },
  "THEA421": {
    "title": "Stage Combat I",
    "credits": 3,
    "prereqs": "THEA 301 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA423": {
    "title": "Stage Combat II",
    "credits": 3,
    "prereqs": "THEA 421 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA431": {
    "title": "Playwriting",
    "credits": 3,
    "prereqs": "THEA 201 and THEA 211 and THEA 212 and THEA 231",
    "offered": "Resident"
  },
  "THEA432": {
    "title": "Writing for Church Drama",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA441": {
    "title": "Stage Accents",
    "credits": 3,
    "prereqs": "THEA 243 and THEA 301 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA471": {
    "title": "Period Styles I",
    "credits": 3,
    "prereqs": "THEA 401 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA473": {
    "title": "Period Styles II",
    "credits": 3,
    "prereqs": "THEA 471 and Theatre Comp with a score of 80",
    "offered": "Resident"
  },
  "THEA481": {
    "title": "Careers in Professional Theatre",
    "credits": 3,
    "prereqs": "RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80",
    "offered": "Resident and Online"
  },
  "THEA491": {
    "title": "Senior Capstone",
    "credits": 1,
    "offered": "Resident"
  },
  "THEA495": {
    "title": "Directed Research",
    "credits": 1,
    "note": "(Offered on demand)",
    "offered": "Resident"
  },
  "THEA497": {
    "title": "Special Topics in Theatre",
    "credits": 3,
    "offered": "Resident"
  },
  "THEA499": {
    "title": "Theatre Internship",
    "credits": 3,
    "prereqs": "(THEA 200 and THEA 211) or (THEA 200 and THEA 212)",
    "offered": "Resident"
  },
  "THEO104": {
    "title": "Introduction to Theology Survey",
    "credits": 4,
    "offered": "Resident and Online"
  },
  "THEO107": {
    "title": "Theological Survey I",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "THEO108": {
    "title": "Theological Survey II",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "THEO109": {
    "title": "Theological Survey III",
    "credits": 3,
    "note": "Willmington School of the Bible course",
    "offered": "Online"
  },
  "THEO201": {
    "title": "Theology Survey I",
    "credits": 2,
    "offered": "Resident and Online"
  },
  "THEO202": {
    "title": "Theology Survey II",
    "credits": 2,
    "offered": "Resident and Online"
  },
  "THEO310": {
    "title": "Theology of Humanity",
    "credits": 3,
    "prereqs": "RLGN 210 or THEO 104 or (THEO 201 and THEO 202)",
    "offered": "Online"
  },
  "THEO311": {
    "title": "God, Revelation, and Reason",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO313": {
    "title": "The Person and Work of Christ",
    "credits": 3,
    "offered": "Online"
  },
  "THEO320": {
    "title": "A Theology of Humanitarian Response",
    "credits": 3,
    "prereqs": "((THEO 201 and THEO 202) or THEO 104 )",
    "offered": "Online"
  },
  "THEO324": {
    "title": "A Theology of Suffering and Disability",
    "credits": 3,
    "prereqs": "((BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210) and THEO 201 and THEO 202 and ENGL 101 )",
    "offered": "Resident"
  },
  "THEO325": {
    "title": "Theological Foundations for Human Rights",
    "credits": 3,
    "prereqs": "((THEO 201 and THEO 202) or THEO 104 ) and THEO 320",
    "offered": "Online"
  },
  "THEO330": {
    "title": "Theology of the Family",
    "credits": 3,
    "prereqs": "(THEO 201 and THEO 202) or THEO 104",
    "offered": "Resident and Online"
  },
  "THEO340": {
    "title": "Theology and Politics",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO345": {
    "title": "Theology of Race and Culture",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO350": {
    "title": "Methods and Issues in Theology",
    "credits": 3,
    "prereqs": "((THEO 201 and THEO 202) or THEO 104 )",
    "offered": "Resident"
  },
  "THEO360": {
    "title": "Biblical Theology",
    "credits": 3,
    "prereqs": "(RLGN 301 and BIBL 360 and BIBL 105 and BIBL 110) or (RLGN 301 and BIBL 360 and BIBL 205 and BIBL 210) or (RLGN 301 and BIBL 360 and BIBL 110 and BIBL 205) or (RLGN 301 and BIBL 360 and BIBL 105 and BIBL 210) or (RLGN 301 and BIBL 360 and BIBL 104)",
    "offered": "Online"
  },
  "THEO362": {
    "title": "Historical Theology",
    "credits": 3,
    "prereqs": "THEO 201 and THEO 202",
    "offered": "Resident and Online"
  },
  "THEO412": {
    "title": "The Spirit, the Church, and Its Hope",
    "credits": 3,
    "prereqs": "THEO 201 and THEO 202",
    "offered": "Resident and Online"
  },
  "THEO415": {
    "title": "Examining and Applying Biblical and Theological Concepts",
    "credits": 3,
    "prereqs": "THEO 201 and THEO 202",
    "offered": "Online"
  },
  "THEO430": {
    "title": "Modern and Contemporary Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO450": {
    "title": "Middle East Conflict in Biblical Perspective",
    "credits": 3,
    "prereqs": "(BIBL 105 or BIBL 205) and (BIBL 110 or BIBL 210)",
    "offered": "Resident"
  },
  "THEO495": {
    "title": "Directed Research",
    "credits": 1,
    "offered": "Resident"
  },
  "THEO497": {
    "title": "Special Topics in Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO510": {
    "title": "Survey of Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO525": {
    "title": "Systematic Theology I",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "THEO530": {
    "title": "Systematic Theology II",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "THEO601": {
    "title": "Patristic and Medieval Christian Thought",
    "credits": 3
  },
  "THEO602": {
    "title": "Renaissance and Reformation Christian Thought",
    "credits": 3,
    "prereqs": "THEO 525 or THEO 530",
    "offered": "Online"
  },
  "THEO603": {
    "title": "Modern and Contemporary Christian Thought",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "THEO605": {
    "title": "Theology of Global Engagement",
    "credits": 3,
    "offered": "Online"
  },
  "THEO610": {
    "title": "Biblical Theology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "THEO615": {
    "title": "Theological Foundations for Humanitarian Action and Human Rights",
    "credits": 3,
    "offered": "Online"
  },
  "THEO620": {
    "title": "Ecclesiology",
    "credits": 3,
    "prereqs": "THEO 530",
    "offered": "Online"
  },
  "THEO626": {
    "title": "Doctrine of God",
    "credits": 3,
    "prereqs": "THEO 525",
    "offered": "Resident and Online"
  },
  "THEO630": {
    "title": "Eschatology",
    "credits": 3,
    "prereqs": "THEO 530",
    "offered": "Online"
  },
  "THEO635": {
    "title": "Contemporary Theological Issues",
    "credits": 3
  },
  "THEO641": {
    "title": "Advanced Bibliology",
    "credits": 3,
    "prereqs": "THEO 525",
    "offered": "Resident"
  },
  "THEO642": {
    "title": "Advanced Christology",
    "credits": 3,
    "prereqs": "THEO 530",
    "offered": "Resident"
  },
  "THEO644": {
    "title": "Johannine Theology",
    "credits": 3,
    "note": "Offered to M.A. and Th.M. students."
  },
  "THEO650": {
    "title": "Public Theology",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "THEO654": {
    "title": "Pneumatology",
    "credits": 3,
    "prereqs": "THEO 530",
    "offered": "Resident and Online"
  },
  "THEO675": {
    "title": "Contextualization and Global Theology",
    "credits": 3,
    "offered": "Online"
  },
  "THEO678": {
    "title": "Western and New Religions",
    "credits": 3
  },
  "THEO679": {
    "title": "Theology Capstone",
    "credits": 3,
    "prereqs": "(THEO 603 or THEO 503) and THEO 610",
    "offered": "Online"
  },
  "THEO695": {
    "title": "Directed Research in Theology",
    "credits": 1,
    "offered": "Online"
  },
  "THEO697": {
    "title": "Seminar in Theological Studies",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "THEO698": {
    "title": "Thesis Project Proposal and Research",
    "credits": 1,
    "offered": "Resident"
  },
  "THEO706": {
    "title": "Theological Foundations",
    "credits": 3,
    "offered": "Online"
  },
  "THEO725": {
    "title": "Systematic Theology I",
    "credits": 3
  },
  "THEO810": {
    "title": "Theology of the Gospel",
    "credits": 3,
    "prereqs": "DMIN 810",
    "note": "(Available to DMIN students only) Crosslisted with BIBL 810",
    "offered": "Online"
  },
  "THEO900": {
    "title": "Seminar in Theological Method",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO901": {
    "title": "Contemporary Issues in the Doctrine of God",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO903": {
    "title": "Historical Development of Christian Thought",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO904": {
    "title": "Bibliology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO905": {
    "title": "Christology in Contemporary Theological Perspective",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO908": {
    "title": "Reading Seminar in Systematic Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO915": {
    "title": "Natural Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO935": {
    "title": "Christianity and Politics",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO945": {
    "title": "Seminar in Modern Theologies and Theologians",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO946": {
    "title": "Contemporary Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO950": {
    "title": "Approaches to Public Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO960": {
    "title": "Christian Ethics",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO968": {
    "title": "Current Issues in Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO995": {
    "title": "Directed Research in Theology",
    "credits": 3,
    "offered": "Resident"
  },
  "THEO997": {
    "title": "Seminar in Theological Studies",
    "credits": 3,
    "offered": "Resident"
  },
  "THES689": {
    "title": "Thesis Project Proposal and Research",
    "credits": 3,
    "prereqs": "RTCH 680",
    "offered": "Resident and Online"
  },
  "THES690": {
    "title": "Thesis Defense",
    "credits": 3,
    "prereqs": "THES 689",
    "offered": "Resident and Online"
  },
  "TOUR300": {
    "title": "Principles of Tourism Management",
    "credits": 3,
    "prereqs": "HMGT 200",
    "offered": "Resident"
  },
  "TOUR601": {
    "title": "Current Issues and Theories for Hospitality and Tourism Management",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "TOUR602": {
    "title": "Hospitality and Tourism Marketing Strategy",
    "credits": 3,
    "offered": "Online"
  },
  "TOUR603": {
    "title": "Sport and Event Tourism Planning And Impacts",
    "credits": 3,
    "offered": "Online"
  },
  "TRMA800": {
    "title": "Child Adolescent Trauma Research Design",
    "credits": 3,
    "offered": "Online"
  },
  "TRMA810": {
    "title": "Adult and Familial Trauma",
    "credits": 3,
    "offered": "Online"
  },
  "TRMA820": {
    "title": "Disaster Mental Health and Community Response",
    "credits": 3,
    "offered": "Online"
  },
  "TRMA830": {
    "title": "Assessment and Testing in the Treatment of Trauma",
    "credits": 3,
    "offered": "Online"
  },
  "TRMA840": {
    "title": "Empirically-Supported Treatments for Trauma",
    "credits": 3,
    "prereqs": "TRMA 830",
    "offered": "Online"
  },
  "TRMA999": {
    "title": "Internship",
    "credits": 3,
    "offered": "Online"
  },
  "UNIV101": {
    "title": "Foundational Skills",
    "credits": 1,
    "offered": "Resident"
  },
  "UNIV104": {
    "title": "Instructional Technology for Successful Online Learning",
    "credits": 3,
    "offered": "Online"
  },
  "WELD101": {
    "title": "Foundations of Welding",
    "credits": 4,
    "prereqs": "CRFT 101 (may be taken concurrently)",
    "offered": "Resident"
  },
  "WELD201": {
    "title": "Intermediate Welding",
    "credits": 4,
    "prereqs": "WELD 101 and CRFT 101",
    "offered": "Resident"
  },
  "WELD301": {
    "title": "Advanced Pipe Welding",
    "credits": 4,
    "prereqs": "WELD 201 and CRFT 101",
    "offered": "Resident"
  },
  "WELD401": {
    "title": "Advanced Topics in Welding: Aluminum",
    "credits": 4,
    "prereqs": "WELD 301 and CRFT 101",
    "offered": "Resident"
  },
  "WLED220": {
    "title": "Survey of Women's Ministries",
    "credits": 3,
    "offered": "Resident"
  },
  "WLED320": {
    "title": "Spiritual Formation and Development for Women in Leadership",
    "credits": 3,
    "prereqs": "WLED 220 (may be taken concurrently) or WMIN 220 (may be taken concurrently)",
    "offered": "Resident"
  },
  "WLED330": {
    "title": "The Role of Christian Women in Ministry",
    "credits": 3,
    "prereqs": "WLED 220 (may be taken concurrently) or WMIN 220 (may be taken concurrently)",
    "offered": "Resident"
  },
  "WLED387": {
    "title": "Methods of Teaching the Bible and Communication Skills for Women",
    "credits": 3,
    "prereqs": "WLED 220 (may be taken concurrently) or WMIN 220 (may be taken concurrently)",
    "offered": "Resident"
  },
  "WLED410": {
    "title": "Leadership Development and Strategies for Women in Ministry",
    "credits": 3,
    "prereqs": "WLED 220 or WMIN 220",
    "offered": "Resident"
  },
  "WLED499": {
    "title": "Women's Ministries Internship",
    "credits": 3,
    "offered": "Resident"
  },
  "WMIN500": {
    "title": "Introduction to Ministry for Women",
    "credits": 3,
    "offered": "Online"
  },
  "WMIN520": {
    "title": "Biblical and Theological Foundations of Women in Ministry",
    "credits": 3,
    "prereqs": "WMIN 500",
    "offered": "Online"
  },
  "WMIN697": {
    "title": "Seminar in Women's Ministry",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WMU3101": {
    "title": "Introduction to Worship Studies",
    "credits": 0,
    "offered": "Online"
  },
  "WMU3102": {
    "title": "Introduction to Creative Worship",
    "credits": 0,
    "offered": "Online"
  },
  "WMU3103": {
    "title": "Basic Music Skills for Worship Leading",
    "credits": 0,
    "offered": "Online"
  },
  "WMU3201": {
    "title": "Old and New Testament Principles of Worship",
    "credits": 0,
    "offered": "Online"
  },
  "WMUS103": {
    "title": "Basic Music Skills for Worship Leading",
    "credits": 3,
    "offered": "Online"
  },
  "WMUS303": {
    "title": "Dynamics of Worship Leading",
    "credits": 3,
    "offered": "Online"
  },
  "WMUS315": {
    "title": "Basic Conducting for the Worship Leader",
    "credits": 3,
    "prereqs": "WMUS 103",
    "offered": "Online"
  },
  "WMUS400": {
    "title": "Tools, Techniques and Literature for Worship",
    "credits": 3,
    "prereqs": "WMUS 103",
    "offered": "Online"
  },
  "WMUS514": {
    "title": "Basic Conducting",
    "credits": 3,
    "prereqs": "Graduate Conducting Assessmen with a score of 0",
    "offered": "Online"
  },
  "WMUS515": {
    "title": "Graduate Conducting for the Worship Leader",
    "credits": 3,
    "prereqs": "WMUS 514 or MUSC 514 or  Graduate Conducting Assessmen with a score of 70",
    "offered": "Resident and Online"
  },
  "WMUS516": {
    "title": "Advanced Graduate Conducting",
    "credits": 3,
    "prereqs": "WMUS 515",
    "offered": "Online"
  },
  "WMUS522": {
    "title": "Basic Music Theory for the Worship Leader",
    "credits": 3,
    "prereqs": "Graduate Music Assessment with a score of 0",
    "offered": "Online"
  },
  "WMUS524": {
    "title": "Analytical Techniques for the Worship Leader",
    "credits": 3,
    "prereqs": "WMUS 522 or MUSC 522 or Graduate Music Assessment with a score of 125",
    "offered": "Resident and Online"
  },
  "WMUS525": {
    "title": "Advanced Contemporary Arranging Techniques for Worship",
    "credits": 3,
    "prereqs": "WMUS 630",
    "offered": "Resident and Online"
  },
  "WMUS526": {
    "title": "Songwriting Seminar",
    "credits": 3,
    "prereqs": "WMUS 630",
    "offered": "Online"
  },
  "WMUS550": {
    "title": "Applied Music",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WMUS600": {
    "title": "Music Resources and Literature for Worship Leading",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WMUS610": {
    "title": "Tools and Techniques for Contemporary Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WMUS630": {
    "title": "Principles of Worship Technology",
    "credits": 3,
    "offered": "Online"
  },
  "WMUS637": {
    "title": "Technology and Media for Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WMUS638": {
    "title": "Ableton Live for Contemporary Worship",
    "credits": 3,
    "prereqs": "WMUS 630",
    "offered": "Online"
  },
  "WMUS670": {
    "title": "Principles of Music and Worship Pedagogy",
    "credits": 3,
    "offered": "Online"
  },
  "WMUS687": {
    "title": "Music and Worship Ministry Project",
    "credits": 3,
    "prereqs": "WRSP 689",
    "offered": "Resident and Online"
  },
  "WMUS690": {
    "title": "Worship Program Recital",
    "credits": 3,
    "prereqs": "WMUS 692",
    "offered": "Resident and Online"
  },
  "WMUS691": {
    "title": "Worship Lecture Recital",
    "credits": 3,
    "prereqs": "WRSP 689",
    "offered": "Resident and Online"
  },
  "WMUS692": {
    "title": "Graduate Music and Worship Comprehensive Exam",
    "credits": 0,
    "prereqs": "WRSP 689 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "WMUS697": {
    "title": "Seminar in Worship Music",
    "credits": 1,
    "offered": "Online"
  },
  "WRI3201": {
    "title": "Introduction to Creative Writing",
    "credits": 0,
    "prereqs": "LAN 3101",
    "offered": "Online"
  },
  "WRI3304": {
    "title": "Novellas",
    "credits": 0,
    "offered": "Online"
  },
  "WRI3305": {
    "title": "Introduction to Inspirational Writing",
    "credits": 0,
    "offered": "Online"
  },
  "WRI3400": {
    "title": "Editing for Publishing",
    "credits": 0,
    "offered": "Online"
  },
  "WRI3402": {
    "title": "Methods and Materials of Research",
    "credits": 0,
    "prereqs": "LAN 3101",
    "offered": "Online"
  },
  "WRIT201": {
    "title": "Introduction to Creative Writing",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRIT303": {
    "title": "Writing Poetry",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT304": {
    "title": "Novellas",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRIT305": {
    "title": "Introduction to Inspirational Writing",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRIT400": {
    "title": "Editing for Publishing",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRIT401": {
    "title": "Grant-Writing",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT402": {
    "title": "Methods and Materials of Research",
    "credits": 3,
    "prereqs": "ENGL 101",
    "offered": "Online"
  },
  "WRIT403": {
    "title": "Technical Writing",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT405": {
    "title": "Fashion Writing",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT490": {
    "title": "Creative Writing Workshop",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT491": {
    "title": "Senior Capstone",
    "credits": 3,
    "prereqs": "ENGL 101",
    "offered": "Online"
  },
  "WRIT499": {
    "title": "Internship",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT500": {
    "title": "Workplace Writing",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT501": {
    "title": "Research Methods and Bibliography",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT502": {
    "title": "Writing in the Disciplines",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT601": {
    "title": "Grant Writing",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT610": {
    "title": "Writing Fiction",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT611": {
    "title": "Writing Poetry",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT612": {
    "title": "Creative Nonfiction",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT613": {
    "title": "Creative Screenwriting",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT633": {
    "title": "Technical Writing",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT650": {
    "title": "Fiction Workshop",
    "credits": 3,
    "prereqs": "WRIT 610",
    "offered": "Online"
  },
  "WRIT651": {
    "title": "Poetry Workshop",
    "credits": 3,
    "prereqs": "WRIT 611",
    "offered": "Online"
  },
  "WRIT652": {
    "title": "Creative Nonfiction Workshop",
    "credits": 3,
    "prereqs": "WRIT 612",
    "offered": "Online"
  },
  "WRIT653": {
    "title": "Creative Screenwriting Workshop",
    "credits": 3,
    "prereqs": "WRIT 613",
    "offered": "Online"
  },
  "WRIT689": {
    "title": "Thesis Proposal and Research",
    "credits": 3,
    "offered": "Online"
  },
  "WRIT690": {
    "title": "Thesis Defense",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP010": {
    "title": "Graduate Conducting Assessment",
    "credits": 0,
    "offered": "Resident and Online"
  },
  "WRSP101": {
    "title": "Introduction to Worship Studies",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP102": {
    "title": "Introduction to Creative Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP106": {
    "title": "Musicianship II",
    "credits": 1,
    "prereqs": "WRSP 103 and WRSP 105 and WRSP 104 (may be taken concurrently)",
    "note": "(Offered spring semester only)",
    "offered": "Resident"
  },
  "WRSP183": {
    "title": "Music Ministry Team: Campus Ba",
    "credits": 1
  },
  "WRSP201": {
    "title": "Old and New Testament Principles of Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP204": {
    "title": "Harmonic Practices and Theory IV",
    "credits": 2,
    "prereqs": "WRSP 203",
    "note": "(Offered spring semester)",
    "offered": "Resident"
  },
  "WRSP206": {
    "title": "Musicianship IV",
    "credits": 1,
    "prereqs": "WRSP 103 and WRSP 203 and WRSP 104 and WRSP 105 and WRSP 106 and WRSP 205",
    "note": "(Offered spring semester)",
    "offered": "Resident"
  },
  "WRSP281": {
    "title": "Music Ministry Team: Exodus",
    "credits": 1
  },
  "WRSP282": {
    "title": "Music Ministry Team: Crimson F",
    "credits": 1
  },
  "WRSP283": {
    "title": "Music Ministry Team: Campus Ba",
    "credits": 1
  },
  "WRSP284": {
    "title": "Fellowship Gospel Choir",
    "credits": 1
  },
  "WRSP285": {
    "title": "Worship Orchestra",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP286": {
    "title": "The Gospel Choir",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP287": {
    "title": "Worship Guitar Ensemble",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP289": {
    "title": "Celebration Worship Choir",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP302": {
    "title": "Dynamics of Instrumental Worship",
    "credits": 3,
    "prereqs": "WRSP 103 and WRSP 104 and WRSP 105 and WRSP 106 and WRSP 203 and WRSP 204 and WRSP 205 and WRSP 206",
    "offered": "Resident"
  },
  "WRSP303": {
    "title": "Dynamics of Worship Leading",
    "credits": 3,
    "prereqs": "WRSP 103 and WRSP 104 and WRSP 105 and WRSP 106 and WRSP 203 and WRSP 204 and WRSP 205 and WRSP 206 and WRSP 302",
    "offered": "Resident and Online"
  },
  "WRSP310": {
    "title": "Arranging for Contemporary Worship",
    "credits": 3,
    "prereqs": "WRSP 103 and WRSP 104 and WRSP 105 and WRSP 106 and WRSP 203 and WRSP 205 and WRSP 206 and WRSP 330",
    "offered": "Resident"
  },
  "WRSP311": {
    "title": "Worship Practicum I",
    "credits": 1,
    "prereqs": "WRSP 320",
    "offered": "Resident"
  },
  "WRSP312": {
    "title": "Worship Practicum II",
    "credits": 1,
    "prereqs": "WRSP 311 and WRSP 321",
    "offered": "Resident"
  },
  "WRSP315": {
    "title": "Basic Conducting for the Worship Leader",
    "credits": 3,
    "prereqs": "WRSP 105 and WRSP 103 and WRSP 104 and WRSP 106",
    "offered": "Resident and Online"
  },
  "WRSP320": {
    "title": "History and Philosophy of Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP321": {
    "title": "Principles of Worship Leadership",
    "credits": 3,
    "prereqs": "WRSP 320",
    "offered": "Online"
  },
  "WRSP330": {
    "title": "Worship Technology I: Music Notation",
    "credits": 3,
    "prereqs": "WRSP 103 and WRSP 104 and WRSP 105 and WRSP 106 and WRSP 203",
    "note": "Offered every semester.",
    "offered": "Resident"
  },
  "WRSP334": {
    "title": "Artist and the Business Community",
    "credits": 3,
    "prereqs": "WRSP 372",
    "offered": "Resident"
  },
  "WRSP335": {
    "title": "Artist and Worship Ministry Presentation",
    "credits": 3,
    "prereqs": "WRSP 334 and WRSP 373",
    "offered": "Resident"
  },
  "WRSP372": {
    "title": "Christian Music Industry",
    "credits": 3,
    "prereqs": "WRSP 101",
    "note": "Offered Spring semester only.",
    "offered": "Resident"
  },
  "WRSP373": {
    "title": "Artist Spiritual Formation",
    "credits": 3,
    "offered": "Resident"
  },
  "WRSP381": {
    "title": "Music Ministry Team: Exodus",
    "credits": 1
  },
  "WRSP382": {
    "title": "Music Ministry Team: Crimson F",
    "credits": 1
  },
  "WRSP384": {
    "title": "Fellowship Gospel Choir",
    "credits": 1
  },
  "WRSP385": {
    "title": "Worship Orchestra",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP386": {
    "title": "The Gospel Choir",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP387": {
    "title": "Worship Guitar Ensemble",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP389": {
    "title": "Celebration Worship Choir",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP400": {
    "title": "Music Literature for Worship",
    "credits": 3,
    "prereqs": "WRSP 302 and WRSP 303",
    "offered": "Resident and Online"
  },
  "WRSP401": {
    "title": "The Dynamics of Corporate Worship",
    "credits": 3
  },
  "WRSP410": {
    "title": "The Mission and Mandate for Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP420": {
    "title": "A Biblical Model for 21st Century Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP421": {
    "title": "Congregational Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP430": {
    "title": "Building Relationships through Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP440": {
    "title": "Strategies for Worship Leading",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP480": {
    "title": "Tools and Techniques for the Contemporary Worship Leader",
    "credits": 3
  },
  "WRSP489": {
    "title": "Supervised Praise and Worship Ensemble",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP497": {
    "title": "Worship Seminar",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP499": {
    "title": "Internship",
    "credits": 1,
    "prereqs": "WRSP 311 and WRSP 312",
    "offered": "Resident"
  },
  "WRSP501": {
    "title": "Principles of Worship and Ministry",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP502": {
    "title": "A History of Worship Music",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP510": {
    "title": "Biblical Foundations of Worship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP520": {
    "title": "The Role of the Worship Leader",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP530": {
    "title": "Principles of Leadership for the Worship Leader",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP540": {
    "title": "Current Issues in Worship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP545": {
    "title": "Global Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP551": {
    "title": "Building a Balanced Worship Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP595": {
    "title": "Directed Research",
    "credits": 3
  },
  "WRSP631": {
    "title": "Spiritual Formation for Leading African American Worship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP632": {
    "title": "Emerging Issues in African American Worship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP635": {
    "title": "Building a Theology of Worship",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP641": {
    "title": "Team Building in African American Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP645": {
    "title": "The Role of the Pastor with the Worship Leader",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "WRSP650": {
    "title": "Bibliography &amp; Research in Music &amp; Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP671": {
    "title": "God's People and the History of African American Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP689": {
    "title": "Master's Thesis Proposal and Research",
    "credits": 3,
    "prereqs": "WRSP 650 and WMUS 692 (may be taken concurrently)",
    "offered": "Resident and Online"
  },
  "WRSP690": {
    "title": "Thesis",
    "credits": 3,
    "prereqs": "WRSP 689",
    "offered": "Resident and Online"
  },
  "WRSP695": {
    "title": "Directed Research in Worship",
    "credits": 1,
    "offered": "Online"
  },
  "WRSP697": {
    "title": "Seminar in Worship Studies",
    "credits": 1,
    "offered": "Resident and Online"
  },
  "WRSP698": {
    "title": "Worship Practicum (Apprenticeship)",
    "credits": 1,
    "offered": "Resident"
  },
  "WRSP699": {
    "title": "Graduate Worship Internship",
    "credits": 3,
    "prereqs": "WMUS 692",
    "offered": "Resident and Online"
  },
  "WRSP801": {
    "title": "Historical Developments of Christian Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP805": {
    "title": "Foundations of Doctoral Research in Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP810": {
    "title": "Biblical Foundations of Christian Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP811": {
    "title": "Principles of Ethno-doxology",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP812": {
    "title": "Cultural Contextualization in Christian Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP820": {
    "title": "History and Practice of Congregational Song",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP835": {
    "title": "Theology of Christian Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP840": {
    "title": "Current Trends and Transitions in Christian Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP845": {
    "title": "Philosophy of Music and Christian Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP846": {
    "title": "Growth, Development, and Spiritual Formation",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP851": {
    "title": "Planning and Leading Christian Worship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP880": {
    "title": "Introduction to the Thesis Writing Project",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP888": {
    "title": "Thesis Project Proposal &amp; Research I",
    "credits": 4,
    "prereqs": "WRSP 880",
    "offered": "Online"
  },
  "WRSP889": {
    "title": "Thesis Project Proposal &amp; Research II",
    "credits": 3,
    "prereqs": "WRSP 880 or WRSP 888",
    "offered": "Online"
  },
  "WRSP890": {
    "title": "Thesis Project Defense",
    "credits": 3,
    "prereqs": "WRSP 889",
    "offered": "Online"
  },
  "WRSP895": {
    "title": "Directed Research in Worship",
    "credits": 1,
    "offered": "Online"
  },
  "WRSP897": {
    "title": "Seminar in Worship Studies",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP899": {
    "title": "Worship Self-Study and Apprenticeship",
    "credits": 3,
    "offered": "Online"
  },
  "WRSP915": {
    "title": "Quantitative Methods of Research",
    "credits": 3,
    "prereqs": "WRSP 805",
    "offered": "Online"
  },
  "WRSP917": {
    "title": "Qualitative Methods of Research",
    "credits": 3,
    "prereqs": "WRSP 805",
    "offered": "Online"
  },
  "WRSP987": {
    "title": "Dissertation I",
    "credits": 5,
    "prereqs": "WRSP 915 or WRSP 917",
    "offered": "Online"
  },
  "WRSP988": {
    "title": "Dissertation II",
    "credits": 5,
    "prereqs": "WRSP 987",
    "offered": "Online"
  },
  "WRSP989": {
    "title": "Dissertation III",
    "credits": 5,
    "prereqs": "WRSP 988",
    "offered": "Online"
  },
  "WRSP990": {
    "title": "Dissertation Defense",
    "credits": 0,
    "prereqs": "WRSP 989",
    "offered": "Online"
  },
  "WRSP997": {
    "title": "Advanced Seminar in Worship Studies",
    "credits": 3,
    "offered": "Online"
  },
  "YOUT201": {
    "title": "Survey of Youth Ministries",
    "credits": 3,
    "offered": "Resident and Online"
  },
  "YOUT202": {
    "title": "Foundations of Youth Ministry",
    "credits": 3
  },
  "YOUT220": {
    "title": "Global Youth Culture",
    "credits": 3,
    "offered": "Resident"
  },
  "YOUT299": {
    "title": "Internship",
    "credits": 1,
    "offered": "Resident"
  },
  "YOUT301": {
    "title": "Foundations of Youth Ministry",
    "credits": 3,
    "prereqs": "YOUT 201",
    "offered": "Resident and Online"
  },
  "YOUT310": {
    "title": "Strategies for Student Outreach",
    "credits": 3,
    "prereqs": "YOUT 201 and YOUT 220",
    "offered": "Resident"
  },
  "YOUT340": {
    "title": "Current Issues in Youth Ministry",
    "credits": 3,
    "prereqs": "YOUT 201 and YOUT 220 and (RSCH 201 or Inquiry Research with a score of 80 or Research Assessment with a score of 80 or Research (prior to 2017-2018) with a score of 80)",
    "offered": "Resident"
  },
  "YOUT350": {
    "title": "Campus Ministry",
    "credits": 3,
    "prereqs": "YOUT 201",
    "offered": "Online"
  },
  "YOUT360": {
    "title": "Camping Ministry",
    "credits": 3,
    "prereqs": "YOUT 201 and YOUT 220",
    "offered": "Resident"
  },
  "YOUT370": {
    "title": "Managing the Christian Youth Organization",
    "credits": 3,
    "prereqs": "YOUT 201",
    "offered": "Resident"
  },
  "YOUT380": {
    "title": "Ministering to Adolescents in Crisis",
    "credits": 3,
    "prereqs": "YOUT 220 and (YOUT 201 or CLCM 210)",
    "offered": "Resident"
  },
  "YOUT447": {
    "title": "Discipleship in Youth Ministry",
    "credits": 3,
    "prereqs": "CHMN 201 and CHMN 205 and CHMN 300 and CHMN 360",
    "offered": "Resident"
  },
  "YOUT448": {
    "title": "Contemporary Youth Communication",
    "credits": 3,
    "prereqs": "BIBL 350 and YOUT 201 and YOUT 220 and YOUT 310 and YOUT 340 and YOUT 380",
    "offered": "Resident"
  },
  "YOUT450": {
    "title": "Professional Orientation to Youth Ministry",
    "credits": 3,
    "prereqs": "CHMN 201 and CHMN 205 and CHMN 300 and CHMN 360",
    "offered": "Resident"
  },
  "YOUT460": {
    "title": "Programs for Youth Ministry",
    "credits": 3,
    "prereqs": "CHMN 201 and CHMN 205 and CHMN 360 and YOUT 201 and YOUT 220 and YOUT 310 and YOUT 340 and YOUT 380 and YOUT 447 and YOUT 448",
    "offered": "Resident"
  },
  "YOUT495": {
    "title": "Directed Research",
    "credits": 3,
    "offered": "Resident"
  },
  "YOUT497": {
    "title": "Special Topics in Youth Ministry",
    "credits": 3,
    "offered": "Resident"
  },
  "YOUT499": {
    "title": "Youth Ministry Internship",
    "credits": 1,
    "prereqs": "YOUT 447 and YOUT 448",
    "offered": "Resident"
  },
  "YOUT510": {
    "title": "Developing a Philosophy of Youth Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "YOUT520": {
    "title": "Organizing Youth Ministries",
    "credits": 3,
    "prereqs": "YOUT 510",
    "offered": "Online"
  },
  "YOUT615": {
    "title": "Integrating Youth Ministry into the Home and Church",
    "credits": 3,
    "prereqs": "YOUT 510",
    "offered": "Online"
  },
  "YOUT630": {
    "title": "Contextualization of Evangelism and Discipleship in Youth Ministry",
    "credits": 3,
    "offered": "Online"
  },
  "YOUT695": {
    "title": "Directed Research in Youth Ministries",
    "credits": 3
  },
  "YOUT697": {
    "title": "Seminar in Youth Ministries",
    "credits": 1
  },
  "YOUT698": {
    "title": "Youth Practicum",
    "credits": 1
  }
};