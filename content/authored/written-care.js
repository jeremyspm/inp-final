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
  { ...R, pts: 3, q: 'Explain how a nursing diagnosis differs from a medical diagnosis, and state the three parts of a nursing diagnostic statement.',
    steps: [
      'A medical diagnosis defines the patient’s disease or condition. A nursing diagnosis defines the patient’s actual or potential RESPONSE to it that the nurse can manage — issues that can be prevented, reduced, resolved or enhanced through independent nursing interventions.',
      'The statement has three parts: the problem (from the NANDA-I list) + “related to” the aetiology (its cause / the medical diagnosis) + “as evidenced by” the signs and symptoms (assessment findings).',
      'Example: “Nausea related to appendicitis as evidenced by pallor, sweating and the patient reporting they are about to vomit.”',
    ],
    src: 'The Nursing Process 2026 deck, slides 17 and 20–21; Nursing Care Plans 2026 deck, slide 9' },
  { ...R, pts: 5, q: 'Patient-centred goals in a nursing care plan must be SMART. State what each letter stands for.',
    steps: [
      'S — Specific: states clearly what is to be achieved.',
      'M — Measurable: quantifiable (e.g. “a soft stool, type 3 or 4 on the Bristol stool chart”).',
      'A — Achievable: able to be achieved by the patient with the resources available.',
      'R — Realistic: possible for this patient to achieve.',
      'T — Timed: has a time limit by which the goal is achieved and evaluated (e.g. “within 12 hours”). The goal describes PATIENT behaviour, not nurse behaviour.',
    ],
    src: 'Nursing Care Plans 2026 deck, slides 16–17; The Nursing Process 2026 deck, slide 26' },
  { ...R, pts: 3, q: 'Evaluation is the last column of a nursing care plan. State what must be written there, and the three possible verdicts on the goal.',
    steps: [
      'An evaluation statement for EACH intervention — the patient’s response to it — each one dated, timed and signed (initialled).',
      'ONE overarching statement about the goal.',
      'The verdicts: MET (the response matches or exceeds the outcome criteria), PARTIALLY MET (behaviour is beginning to change but does not yet meet the criteria), NOT MET (no progress).',
    ],
    src: 'Nursing Care Plans 2026 deck, slides 24–25' },
  { ...R, pts: 4, q: 'Define objective data and subjective data, and give one example of each from a patient admitted with nausea.',
    steps: [
      'Objective data: observable and measurable facts — signs.',
      'Example: pallor, sweating, a measured temperature or pulse, an observed vomit.',
      'Subjective data: information that only the patient can feel and describe — symptoms.',
      'Example: the patient saying “I feel like I’m about to be sick” or rating their nausea.',
    ],
    src: 'Holistic Health Assessment 2026 deck, slide 9; example from The Nursing Process 2026 deck, slide 21' },
  { ...R, pts: 4, q: 'Define holism, and name the aspects of a person that a holistic health assessment covers.',
    steps: [
      'Holism (from the Greek holos — entire, whole): the body, mind, emotions and spirit are interconnected rather than a collection of parts, so the nurse focuses on the patient as a whole rather than just the healthcare problem.',
      'Physical — body systems, ADLs and independence, mobility and falls risk, skin integrity, sleep, diet, vital signs, diagnostic tests.',
      'Psychological — orientation and cognition, communication, mental health history, stressors and coping, pain.',
      'Social (including cultural) and spiritual — family situation, community, finances, lifestyle, language; beliefs, values, meaning, concerns about death and dying. Each aspect is linked to and influences the others.',
    ],
    src: 'Holistic Health Assessment 2026 deck, slides 3–4, 14, 20 and 26–30' },
  { ...R, pts: 3, q: 'Give the three reasons nurses document that are taught in this course, with one sentence on each.',
    steps: [
      'A legal requirement — the clinical record is a legal document and evidence of your practice; it may be examined months or years later (“if it isn’t documented, it didn’t happen”).',
      'A professional responsibility — the Nursing Council’s standards of competence and Code of Conduct require clear, accurate, legible, timely records, signed, dated and timed.',
      'A communication tool — it carries information between the multi-disciplinary team, gives an accurate account of care, allows problems to be detected early and supports continuity of care.',
    ],
    src: 'Clinical Documentation 2026 deck, slides 4–10' },
  { ...R, pts: 3, q: 'A nurse writes an entry in the wrong patient’s paper notes. State how the error must be corrected, and give two other “don’ts” of documentation.',
    steps: [
      'Cross the entry out with ONE line so the original can still be read, note that it is an error and sign it — never erase it or use “white out”.',
      'Don’t (any two, one mark each): rely on memory · leave blank spaces · make entries on behalf of another health professional · use unapproved abbreviations.',
      'Don’t: add information later without marking it as retrospective (with both date/times and a signature) · use generalisations such as “condition unchanged” · make assumptions · use subjective, judgemental or unprofessional language.',
    ],
    src: 'Clinical Documentation 2026 deck, slides 20 and 22–23' },
  { ...R, pts: 3, q: 'AI²DET guides how staff speak with patients and whānau. State what its letters stand for, and why it was introduced.',
    steps: [
      'A = Acknowledge · I = Introduce · I = Identify',
      'D = Duration · E = Explanation · T = Thank you',
      'It was introduced at Counties Manukau Health in 2011 by Māori Health after patient complaints — “people are talking about us and not to us”, “we don’t know who is in the room”, “we feel invisible”. It also opens the bedside handover checklist.',
    ],
    src: 'Clinical Documentation 2026 deck, slides 36–38' },
];
