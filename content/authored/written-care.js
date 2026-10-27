/* The written section, part 1 — THE TOOL's short-answer questions for the quizzed topics in
   the "Nursing process & assessment" group. These topics have Canvas quizzes (multi-choice
   only); the real paper also has ten short answers and Canvas has none, so these were
   written from each topic's own lecture deck (Canvas, harvested 19 Sep 2026). */
const R = { sys: 'care', quiz: 'w-care', quizName: 'Written section · Process & assessment — the tool’s questions' };

export const MCQS = [];

export const SAQS = [
  { ...R, pts: 5, q: 'List the five steps of the nursing process in order and state briefly what happens in each.',
    steps: [
      'Assessment — collect data about the patient by observation, interview and examination (subjective and objective), then validate and document it.',
      'Diagnosis (nursing) — actual and potential problems found in the assessment are prioritised and written as diagnostic statements; not a medical diagnosis.',
      'Planning — patient-centred goals and outcome criteria are set, with priorities and a time frame.',
      'Implementation — the nursing interventions are carried out: evidence-based, safe, within the nurse’s scope and compatible with medical orders.',
      'Evaluation — the patient’s response to each intervention is analysed and the goal is judged met, partially met or not met; the process is ongoing and cyclical.',
    ],
    src: 'The Nursing Process 2026 deck, slides 8, 11, 17, 23, 29 and 33' },
  { ...R, pts: 4, q: 'Define objective data and subjective data, and give one example of each from a patient admitted with nausea.',
    steps: [
      'Objective data: observable and measurable facts — signs.',
      'Example: pallor, sweating, a measured temperature or pulse, an observed vomit.',
      'Subjective data: information that only the patient can feel and describe — symptoms.',
      'Example: the patient saying “I feel like I’m about to be sick” or rating their nausea.',
    ],
    src: 'Holistic Health Assessment 2026 deck, slide 9; example from The Nursing Process 2026 deck, slide 21' },
  { ...R, pts: 3, q: 'Give the three reasons nurses document that are taught in this course, with one sentence on each.',
    steps: [
      'A legal requirement — the clinical record is a legal document and evidence of your practice; it may be examined months or years later (“if it isn’t documented, it didn’t happen”).',
      'A professional responsibility — the Nursing Council’s standards of competence and Code of Conduct require clear, accurate, legible, timely records, signed, dated and timed.',
      'A communication tool — it carries information between the multi-disciplinary team, gives an accurate account of care, allows problems to be detected early and supports continuity of care.',
    ],
    src: 'Clinical Documentation 2026 deck, slides 4–10' },
];
