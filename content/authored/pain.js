/* Pain Assessment — THE TOOL's questions. The lecture has no Canvas quiz, so these were
   written from the lecture deck "Pain Assessment BN2.pptx" and the class handout
   "Pain Assessment Practice Handout.pdf" (Canvas, harvested 19 Sep 2026).
   Every entry names the slide it was written from. */
const R = { sys: 'care', quiz: 'a-pain', quizName: 'Pain Assessment — the tool’s questions' };
const D = 'the Pain Assessment deck, ';

export const MCQS = [
  { ...R, q: "A man with diabetes describes burning, shooting pain in his feet. This is:",
    options: ["Superficial somatic pain","Visceral pain","Neuropathic pain","Referred pain"],
    correct: 2,
    why: "Neuropathic pain comes from injury or dysfunction of the nervous system — abnormal processing of stimuli. It feels shooting, burning, numb or electric-shock-like, with pain on light touch. Diabetes, shingles and multiple sclerosis are the deck’s common causes.",
    src: "the Pain Assessment deck, slides 16–18" },
  { ...R, q: "A man says his flank pain is worse when he moves. Which letter of OLDCARTS is this?",
    options: ["O","C","A","T"],
    correct: 2,
    why: "A = Aggravating factors — what makes it worse (moving, walking, breathing, urinating, swallowing…). O is onset, C is characteristics (what it feels like) and T is timing (pattern and frequency, day or night).",
    src: "the Pain Assessment deck, slides 33 and 38; scenario from the Pain Assessment Practice Handout (James)" },
  { ...R, q: "The Wong-Baker FACES scale is especially helpful for:",
    options: ["Adults with chronic pain","Patients on opioid infusions","Anyone scoring above 7/10","Children, or where there is a language barrier"],
    correct: 3,
    why: "FACES is especially helpful for children, non-verbal persons or if there is a language barrier: the person picks the face that shows how they feel right now. Whatever scale is used, use the same one each time so the effect of pain relief can be compared.",
    src: "the Pain Assessment deck, slides 41 and 43" },
];

export const SAQS = [
  { ...R, pts: 4, q: 'OLDCARTS is the structured pain assessment tool taught in this course. State what each of its eight letters stands for.',
    steps: [
      'O = Onset (when did it start?) · L = Location (where is it? does it radiate?)',
      'D = Duration (how long does it last? does it come and go?) · C = Characteristics (what does it feel like?)',
      'A = Aggravating factors (what makes it worse?) · R = Relieving factors (what makes it better — medications and other interventions)',
      'T = Timing (pattern or frequency, day or night) · S = Severity (rated with an appropriate pain scale, e.g. 0–10 at rest and on movement)',
    ],
    src: D + 'slides 33–42' },
];
