import { courses as c, coursesType } from "./courses";
import { DegreeType, electives as e } from "./electives";

const associatesBase = [
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
const bachelorsCommon = [
 // Communication & Information Literacy
 c.ENGL101,
 c.INQR101,
 e.communications,
 e.informationLiteracy,
 e.informationLiteracy,

 // Technological Solutions & Quantitative Reasoning
 c.UNIV101,
 e.math114OrHigher,
 e.technologyCompetency,

 // Critical Thinking
 c.RLGN105,
 c.RSCH201,
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

// General ed
// const gened:Record<string,Array<coursesType|any>> = {
const gened  = {
  [DegreeType.AAS]: [
    // Communication & Information Literacy
    c.ENGL101,
    e.communications,
    e.informationLiteracy,

    // Technological Solutions & Quantitative Reasoning
    e.busi101Or201,
    c.UNIV101,
    e.math114OrHigher,
    e.technologyCompetency,

    // Critical Thinking
    c.RLGN105,

    // Civic & Global Engagement
    c.EVAN101,
    e.culturalStudies,

    // Social & Scientific Inquiry
    e.naturalScience,
    e.psyc101OrSoci200,

    // Christianity & Contexts
    c.BIBL105,
    c.BIBL110,
    c.THEO201,
    c.THEO202,
  ],
  [DegreeType.BA]: [ ...bachelorsCommon, e.composition ],
  [DegreeType.BS]: bachelorsCommon,
  [DegreeType.AA]: associatesBase,
  [DegreeType.AS]: associatesBase,
};


export { gened };
