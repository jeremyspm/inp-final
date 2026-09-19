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
  { ...R, pts: 4, q: 'List four pieces of information a patient must be given before they can give informed consent to a procedure.',
    steps: [
      'Any four, one mark each: the diagnosis, if known · the nature and purpose of the proposed treatment or procedure — what happens during it and what to expect afterwards.',
      'The risks and benefits of the treatment or procedure.',
      'Who will be performing it.',
      'What other options there are, with their risks and benefits · the risks and benefits of having no treatment at all. (All of it in a language and way the patient can understand, with an interpreter and a support person if wanted.)',
    ],
    src: 'Informed consent 2026 deck, slides 6 and 9' },
  { ...R, pts: 3, q: 'Who can give consent to treatment in New Zealand? Cover an adult, a 14-year-old, and an adult who is not competent.',
    steps: [
      'Anyone aged 16 or over can consent to — or refuse — their own treatment.',
      'Under 16: a parent, guardian or other person acting in the place of a parent gives consent (or a court order).',
      'A person aged 16 or over who is not competent: a legal guardian or someone holding a current enduring power of attorney. The nurse must still act in the person’s best interests and take reasonable steps to find out their views.',
    ],
    src: 'Informed consent 2026 deck, slides 8 and 21' },
  { ...R, pts: 3, q: 'Describe the nurse’s role in the informed consent process.',
    steps: [
      'Advocate for the patient: arrange an interpreter if required and whānau support if appropriate.',
      'Make sure the medical team has given all the information the patient needs in a way they understand, and that the patient has had the chance to ask questions — if not, call the team back.',
      'Be knowledgeable about the proposed treatment; the nurse may be accountable for witnessing that the patient (or legal representative) signed the form in their presence and is of legal age and competent.',
    ],
    src: 'Informed consent 2026 deck, slides 24–25' },
  { ...R, pts: 3, q: 'Define evidence-based practice and name the three things it integrates.',
    steps: [
      'Definition: a shift away from basing decisions on opinion and past practice, towards research and evidence guiding clinical decision-making, in order to improve patient outcomes.',
      'It integrates (1) the best research evidence and (2) clinical expertise…',
      '…and (3) the patient’s values and preferences.',
    ],
    src: 'Evidence-based Practice 2026 deck, slides 11 and 13' },
  { ...R, pts: 5, q: 'List the five steps of the evidence-based practice methodology in order.',
    steps: [
      'Develop a research (clinical) question.',
      'Find the research evidence — e.g. CINAHL, the Cochrane Library, JBI, PubMed.',
      'Appraise the evidence — systematic reviews are the strongest level, expert opinion the weakest.',
      'Implement the evidence in practice.',
      'Evaluate the practice change and patient outcomes — has it made a difference?',
    ],
    src: 'Evidence-based Practice 2026 deck, slides 22–24' },
  { ...R, pts: 4, q: 'Define burnout and compassion fatigue, and give two differences between them.',
    steps: [
      'Burnout: an occupational phenomenon (not a medical condition) — a syndrome from long-term, unmanaged WORKPLACE stress, marked by exhaustion, mental distance or cynicism about the job, and reduced professional efficacy.',
      'Compassion fatigue: physical, psychological and spiritual exhaustion from the emotional demands of caring for suffering patients — absorbing their suffering as secondary trauma — leading to a loss of empathy.',
      'Difference: in burnout the nurse still feels compassion; compassion fatigue affects the ability to feel compassion. Burnout is caused by a stressful work environment; compassion fatigue by the impact of caring for others.',
      'Difference: burnout builds up over time and may not affect relationships outside work; compassion fatigue can follow straight after secondary trauma and may interfere with relationships outside work.',
    ],
    src: 'Self-care in nursing deck, slides 11 and 13–14' },
  { ...R, pts: 3, q: 'Define self-care and resilience, and explain how the two are linked.',
    steps: [
      'Self-care: deliberate actions to take care of all aspects of our health and wellbeing — enjoyable, re-energising and not selfish (and not activities that numb or avoid reality).',
      'Resilience: the ability to adapt positively to stress, cope with difficult situations and recover quickly from difficulties, by learning new ways of thinking and behaving.',
      'Link: self-care builds resilience, and resilience protects nurses from the effects of stress that lead to burnout and compassion fatigue.',
    ],
    src: 'Self-care in nursing deck, slides 20, 22 and 25–26' },
];
