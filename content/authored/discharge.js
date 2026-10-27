/* Discharge Planning — THE TOOL's questions. The lecture has no Canvas quiz, so these were
   written from the lecture deck "Discharge Planning Lecture.pptx" (Canvas, harvested
   19 Sep 2026). Every entry names the slide it was written from. */
const R = { sys: 'care', quiz: 'a-discharge', quizName: 'Discharge Planning — the tool’s questions' };
const D = 'the Discharge Planning deck, ';

export const MCQS = [
  { ...R, q: "When does discharge planning begin?",
    options: ["When the doctor says the patient is fit to go","The day before discharge","On admission","Once the discharge summary is written"],
    correct: 2,
    why: "The deck puts it in capitals: DISCHARGE PLANNING BEGINS AT THE TIME OF ADMISSION. Gathering information from admission — “what brought you to hospital? how have you been managing?” — is already the start of the discharge process.",
    src: "the Discharge Planning deck, slides 10, 14 and 31" },
  { ...R, q: "Discharge planning is best defined as:",
    options: ["An interdisciplinary approach to continuity of care","The doctor’s decision that a patient is well","The paperwork done on the day of discharge","A phone follow-up after discharge"],
    correct: 0,
    why: "Discharge planning is an interdisciplinary approach to continuity of care: a process of identification, assessment, goal setting, planning, implementation, coordination and evaluation, and the quality link between hospitals, community-based services, non-government organisations and carers.",
    src: "the Discharge Planning deck, slides 3 and 6" },
  { ...R, q: "Effective discharge planning leads to:",
    options: ["Longer hospital stays","More readmissions","Fewer readmissions and shorter stays","More emergency presentations"],
    correct: 2,
    why: "Effective discharge planning is associated with a decrease in readmission rates, a reduction in length of hospital stay and a reduction in the degree of follow-up community care. Poor planning — poor instruction, inadequate information, poor coordination and communication — leads the other way.",
    src: "the Discharge Planning deck, slide 8" },
  { ...R, q: "The nurse’s role in discharge is best described as:",
    options: ["The decision-maker","The coordinator","A bystander","The referrer only"],
    correct: 1,
    why: "The nurse coordinates the discharge process — the “middle-man”, often the final point of contact before the patient leaves — and ensures the patient and family understand and agree with the plan and have all the information and tools to transition home or to another facility.",
    src: "the Discharge Planning deck, slides 12 and 14" },
  { ...R, q: "The patient nods after you explain the discharge medicines. You should still:",
    options: ["Use teach-back to check understanding","Document that teaching is complete","Give the written summary only","Ask the family to explain it later"],
    correct: 0,
    why: "Teach-back is a safety tool: patients often nod even when confused, and stress, pain, fatigue and health literacy affect recall. Ask–Build–Check, plain words instead of abbreviations, an interpreter or written and visual resources where needed, and a support person present.",
    src: "the Discharge Planning deck, slides 19–20" },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Define discharge planning and state two benefits of doing it well.',
    steps: [
      'Definition: an interdisciplinary approach to continuity of care — a process (identification, assessment, goal setting, planning, implementation, coordination, evaluation) that helps a person move smoothly from one setting or level of care to another without losing the progress already made. It begins at admission.',
      'Benefit (any two, one mark each): fewer readmissions · shorter length of hospital stay · less follow-up community care needed.',
      'Also accepted as a benefit: the patient and family leave understanding their medicines, warning signs, follow-up and who to contact — a safe link between hospital, community services and carers.',
    ],
    src: D + 'slides 3, 6, 8 and 10' },
];
