/* Health Screening — THE TOOL's questions. The lecture (Tue 20 Oct) has no Canvas quiz, so these were
   written from its deck "Health Screening.pptx" (Canvas, harvested 26 Oct 2026). Every entry names the
   slide it was written from. The bowel screening starting age is left out: the deck gives 60–74 "lowering
   to 58 from October 2025", so no question turns on it. The Standards of Competence half of the focus row
   has no deck of its own; its only questions are the lecturers' two Practice Quiz items on scope. */
const R = { sys: 'pop', quiz: 'a-screen', quizName: 'Health Screening — the tool’s questions' };
const D = 'the Health Screening deck, ';

export const MCQS = [
  { ...R, q: "A false-negative screening result can lead to:",
    options: ["Increased anxiety and further tests","False reassurance and delayed diagnosis","An immediate diagnosis of the condition","Referral for a colonoscopy"],
    correct: 1,
    why: "A false negative puts a person who DOES have the condition in the lower-chance group: it gives false reassurance and delays diagnosis and treatment. A false positive is the reverse — increased anxiety and referral for diagnostic tests.",
    src: D + "slide 9" },
  { ...R, q: "A person with a positive screening result will be:",
    options: ["Diagnosed with the condition","Re-screened in five years","Discharged from the programme","Offered a diagnostic test"],
    correct: 3,
    why: "Screening does not give a diagnosis. A positive result means an increased chance of the condition, so the person is offered a diagnostic test; a negative result means no diagnostic test, though they may be invited back for screening later.",
    src: D + "slides 6 and 15–16" },
  { ...R, q: "Student nurses check blood pressures at a wellness clinic in a school. This is:",
    options: ["Opportunistic screening","Organised screening","A diagnostic test","Diagnostic testing for hypertension"],
    correct: 0,
    why: "Opportunistic screening happens when a person asks for a check, or a health professional — such as MIT student nurses — offers one. Organised screening is a national programme that invites set population groups, overseen by the National Screening Unit.",
    src: D + "slides 24–26" },
  { ...R, q: "BreastScreen Aotearoa offers free mammograms every two years to women aged:",
    options: ["25–69","45–69","50–74","60–74"],
    correct: 1,
    why: "BreastScreen Aotearoa: free mammograms every 2 years for asymptomatic women aged 45–69 who are eligible for public health services (not pregnant, no mammogram in the last 12 months). Women with symptoms are referred through their GP.",
    src: D + "slide 19" },
  { ...R, q: "The newborn metabolic screening heel-prick test is taken:",
    options: ["Before the cord is cut","At the six-week check","At 24–48 hours after birth","Before school entry"],
    correct: 2,
    why: "The heel-prick blood spot is taken 24–48 hours after birth and screens for rare but treatable metabolic and genetic disorders such as cystic fibrosis. It is free for every baby born in New Zealand, optional but strongly recommended; results come back within 10 days.",
    src: D + "slide 22" },
];

export const SAQS = [
  { ...R, pts: 4, q: 'Explain the purpose of health screening, the difference between organised and opportunistic screening, and the nurse’s role in screening.',
    steps: [
      'Purpose: screening identifies people at risk before symptoms appear, so health issues are detected early and treated in time for better outcomes — but screening does not give a diagnosis.',
      'Organised screening: national programmes overseen by the National Screening Unit, inviting the population groups at highest risk — e.g. BreastScreen Aotearoa, the National Cervical and Bowel Screening Programmes, newborn metabolic and hearing screening.',
      'Opportunistic screening: a check or test a person asks for, or a health professional offers — e.g. blood pressure, blood glucose or cholesterol checks at a wellness clinic.',
      'The nurse: educates and encourages people to take part, facilitates the assessments, explains the risks (false positives and false negatives) to ensure informed consent, and supports follow-up and communication after the result.',
    ],
    src: D + 'slides 6, 9–11, 16–17 and 24–25' },
];
