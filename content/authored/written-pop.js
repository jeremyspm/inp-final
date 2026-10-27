/* The written section, part 3 — THE TOOL's short-answer questions for the quizzed topics in
   the "Population health & equity" group. These topics have Canvas quizzes (multi-choice
   only); the real paper also has ten short answers and Canvas has none, so these were
   written from each topic's own lecture deck (Canvas, harvested 19 Sep 2026). */
const R = { sys: 'pop', quiz: 'w-pop', quizName: 'Written section · Population health & equity — the tool’s questions' };

export const MCQS = [];

export const SAQS = [
  { ...R, pts: 3, q: 'Define the social determinants of health and give two examples, saying how each affects health.',
    steps: [
      'Definition: the conditions in which people are born, grow, live, work and age — the societal factors that give rise to social position (access to power, money and resources) and therefore to health. They account for at least half of health outcomes and inequities.',
      'Example (any two, one mark each, with the effect): housing — cold, damp, overcrowded homes lead to respiratory illness and communicable disease · food environments — food deserts and swamps in low-income areas drive obesity, cardiovascular disease and type 2 diabetes.',
      'Work and employment — insecure or unsafe work raises physical and mental health risk · education — linked to better income, job stability and health · transport — poor public transport limits access to care, work and education · the health system itself — how accessible and affordable care is.',
    ],
    src: 'Social Determinants of Health deck, slides 7, 9, 16–17 and 28–39' },
  { ...R, pts: 5, q: 'The Waitangi Tribunal recommended five principles of Te Tiriti o Waitangi for the health sector. Name them (in te reo Māori or English) with a brief meaning for nursing.',
    steps: [
      'Tino rangatiratanga — self-determination: Māori lead decisions about Māori health; nurses work alongside Māori, not for Māori.',
      'Mana taurite — equity: a fair opportunity for good health; resources targeted where need is greatest — not the same thing for everyone.',
      'Whakamarumarutia — active protection: health is a taonga; act to prevent harm and address inequities rather than only responding to problems.',
      'Kōwhiringa — options: properly resourced, culturally appropriate choices, including kaupapa Māori services and Māori models of health.',
      'Pātuitanga — partnership: Māori involved in planning, delivering and evaluating services — decisions made with the community, not for it. (The “three Ps” are outdated and should not be used.)',
    ],
    src: 'Population Health vs Personal Health deck, slides 20–31' },
  { ...R, pts: 4, q: 'Define primordial, primary, secondary and tertiary prevention and give an example of each.',
    steps: [
      'Primordial — prevents risk factors from developing in a population, through large-scale social and environmental change. Example: the Healthy Homes Initiative.',
      'Primary (“Prevent”) — action before the onset of disease so that it never occurs. Example: vaccination clinics, sexual health education, PPE at work.',
      'Secondary (“Screen”) — detect disease early and stop it progressing. Example: cervical screening, mammograms, colonoscopy.',
      'Tertiary (“Treatment”) — manage an existing condition to prevent it worsening, further disability or death. Example: an insulin regime in diabetes to prevent cardiovascular or renal disease.',
    ],
    src: 'Demography & Epidemiology deck, slides 38–45' },
];
