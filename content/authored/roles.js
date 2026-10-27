/* Roles of Nurses — THE TOOL's questions. The lecture has no Canvas quiz, so these were
   written from the lecture deck "Roles of Nurses (2).pptx" (Canvas, harvested 19 Sep 2026).
   Every entry names the slide it was written from. */
const R = { sys: 'prof', quiz: 'a-roles', quizName: 'Roles of Nurses — the tool’s questions' };
const D = 'the Roles of Nurses deck, ';

export const MCQS = [
  { ...R, q: "Primary healthcare is:",
    options: ["First treatment in the emergency department","Healthcare provided outside the hospital","Care given only by GPs","The most urgent hospital care"],
    correct: 1,
    why: "Primary healthcare is healthcare provided outside the hospital. Community-based nursing takes place where clients live, work and play — a school, a work site, a home — with clients from pre-birth to very old age, across the whole continuum from health promotion to care of illness.",
    src: "the Roles of Nurses deck, slides 10–11" },
  { ...R, q: "In mental health nursing, “recovery” means:",
    options: ["Living well, with hope at the centre","A complete and permanent cure","Discharge back to the GP","No longer needing medication"],
    correct: 0,
    why: "The current concept of recovery does not mean “cure” as it does elsewhere in healthcare; it refers to living with mental health problems. Hope is central — it sustains people through distress and supports them in keeping their personal life goals.",
    src: "the Roles of Nurses deck, slide 26" },
  { ...R, q: "Using ISBAR, what belongs under “B”?",
    options: ["“I think she is becoming septic”","“She is day two after a bowel resection”","“I recommend you review her now”","“Her blood pressure has dropped to 85/50”"],
    correct: 1,
    why: "Introduction/Identify (who and where you are, why you are calling) → Situation (what is happening now) → Background (what led to the situation) → Assessment (what you consider the problem is) → Request/Recommend (what should be done).",
    src: "the Roles of Nurses deck, slide 29" },
];

export const SAQS = [
  { ...R, pts: 5, q: 'State what each part of the ISBAR handover tool stands for and what the nurse says under it.',
    steps: [
      'I — Introduction / Identify: who you are, where you are, why you are calling (and is this a good time to talk?).',
      'S — Situation: what is happening now — “The situation is…”.',
      'B — Background: what led to the situation — “By way of background…”.',
      'A — Assessment: what you consider the problem to be — “My assessment is…”.',
      'R — Request / Recommend: what should be done to correct the problem — “I recommend…”.',
    ],
    src: D + 'slide 29' },
];
