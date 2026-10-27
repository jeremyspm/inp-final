/* The written section, part 4 — THE TOOL's short-answer questions for the quizzed topics in
   the "Professional & legal" group. These topics have Canvas quizzes (multi-choice only);
   the real paper also has ten short answers and Canvas has none, so these were written from
   each topic's own lecture deck (Canvas, harvested 19 Sep 2026). */
const R = { sys: 'prof', quiz: 'w-prof', quizName: 'Written section · Professional & legal — the tool’s questions' };

export const MCQS = [];

export const SAQS = [
  { ...R, pts: 3, q: 'Define informed consent, and name the two pieces of New Zealand law that make it a requirement.',
    steps: [
      'Definition: the PROCESS of communicating to a patient the benefits, risks and alternatives of a procedure or treatment, so that the patient can make an informed decision to accept it or not — more than a signature on a piece of paper.',
      'The Code of Health and Disability Services Consumers’ Rights, Right 7 — the right to make an informed choice and give informed consent (the Code is a regulation under the Health and Disability Commissioner Act 1994).',
      'The New Zealand Bill of Rights Act 1990, section 11 — the right to refuse to undergo medical treatment.',
    ],
    src: 'Informed consent 2026 deck, slides 3–4 and 28' },
  { ...R, pts: 3, q: 'Who can give consent to treatment in New Zealand? Cover an adult, a 14-year-old, and an adult who is not competent.',
    steps: [
      'Anyone aged 16 or over can consent to — or refuse — their own treatment.',
      'Under 16: a parent, guardian or other person acting in the place of a parent gives consent (or a court order).',
      'A person aged 16 or over who is not competent: a legal guardian or someone holding a current enduring power of attorney. The nurse must still act in the person’s best interests and take reasonable steps to find out their views.',
    ],
    src: 'Informed consent 2026 deck, slides 8 and 21' },
  { ...R, pts: 3, q: 'Define evidence-based practice and name the three things it integrates.',
    steps: [
      'Definition: a shift away from basing decisions on opinion and past practice, towards research and evidence guiding clinical decision-making, in order to improve patient outcomes.',
      'It integrates (1) the best research evidence and (2) clinical expertise…',
      '…and (3) the patient’s values and preferences.',
    ],
    src: 'Evidence-based Practice 2026 deck, slides 11 and 13' },
];
