/* Injections — THE TOOL's questions. The lecturers' Exam Content page names "Vital signs, injections,
   blood glucose monitoring"; injections are taught in no lecture, only on the Clinical Learning Suite
   page "Inpatient Prep - Injections" (Canvas, harvested 12 Oct 2026), which is adapted from Potter &
   Perry's Fundamentals of Nursing (ANZ ed., 2026, ch. "Ensuring medication safety"). These were
   written from that page alone; its three site pictures carry no text. */
const R = { sys: 'clin', quiz: 'a-inject', quizName: 'Injections (CLS Inpatient Prep) — the tool’s questions' };
const D = 'the CLS page “Inpatient Prep – Injections”, ';

export const MCQS = [
  { ...R, q: "At what angle is the needle inserted for an intramuscular injection?",
    options: ["15 degrees","45 degrees","90 degrees","30 degrees"],
    correct: 2,
    why: "Angles of insertion: intramuscular 90°, subcutaneous 45° (90° when 5 cm of tissue can be grasped), intradermal 15°. An IM needle is longer and heavier-gauge, to pass through the subcutaneous tissue into deep muscle.",
    src: "the CLS page “Inpatient Prep – Injections”, the angles figure and “Intramuscular injections”" },
  { ...R, q: "An intradermal injection is given into the:",
    options: ["Muscle","Dermis","Subcutaneous tissue","Vein"],
    correct: 1,
    why: "Intradermal (ID): into the dermis immediately below the epidermis, at 15°. Subcutaneous (SC): into the tissues just below the dermis. Intramuscular (IM): into a muscle. Intravenous (IV): into a vein. All four are parenteral — given by injection, bypassing the skin and mucous membranes.",
    src: "the CLS page “Inpatient Prep – Injections”, the list of major injection sites" },
  { ...R, q: "Which site is most often recommended for heparin and insulin injections?",
    options: ["Deltoid","Ventrogluteal","Vastus lateralis","Abdomen"],
    correct: 3,
    why: "The best subcutaneous sites are the outer posterior upper arms, the abdomen (from below the costal margins to the iliac crests) and the anterior thighs; the abdomen is the site most often recommended for heparin and insulin. The site should be free of skin lesions, bony prominences and large underlying muscles or nerves.",
    src: "the CLS page “Inpatient Prep – Injections”, “Subcutaneous injections”" },
  { ...R, q: "Which intramuscular site is safe for all patients, up to 4 mL?",
    options: ["Deltoid","Ventrogluteal","Vastus lateralis","Dorsogluteal"],
    correct: 1,
    why: "Ventrogluteal: safe for all patients, maximum 4 ml — a deep site away from major nerves and blood vessels, with less chance of contamination in incontinent adults or infants, and injuries are rare. The patient lies on their side or back with knee and hip flexed. Vastus lateralis takes up to 5 ml; deltoid 2 ml or less.",
    src: "the CLS page “Inpatient Prep – Injections”, “Characteristics of intramuscular injection sites”" },
  { ...R, q: "Subcutaneous, intramuscular and intradermal injections are avoided in a patient:",
    options: ["Who is anxious about needles","Who is nil by mouth","With diabetes","With a bleeding tendency"],
    correct: 3,
    why: "The subcut, IM and ID routes are avoided in patients with bleeding tendencies. The page’s other disadvantages: risk of infection, cost, repeated needle-sticks, tissue damage with subcut, rapid absorption making IM and IV dangerous, and considerable anxiety — especially in children.",
    src: "the CLS page “Inpatient Prep – Injections”, the advantages and disadvantages table" },
];

export const SAQS = [
  { ...R, pts: 4, q: 'Name the four parenteral injection routes. For each, say where the medicine is deposited and, where the CLS Inpatient Prep page gives one, the needle angle.',
    steps: [
      'Intradermal (ID): into the dermis, just below the epidermis — 15°.',
      'Subcutaneous (SC): into the tissue just below the dermis — 45°, or 90° if 5 cm of tissue can be grasped.',
      'Intramuscular (IM): into a muscle — 90°.',
      'Intravenous (IV): into a vein.',
    ],
    src: D + 'the list of injection sites, the angles figure and “Subcutaneous injections”' },
];
