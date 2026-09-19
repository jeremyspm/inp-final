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
  { ...R, pts: 3, q: 'Distinguish health inequality from health inequity, and explain what “the social gradient in health” means.',
    steps: [
      'Health inequality: differences in health between population groups — it describes WHAT is happening, not why.',
      'Health inequity: differences that are UNFAIR and AVOIDABLE, arising from systemic barriers and the unequal allocation of power, money and resources; they could be reduced by the right mix of government policies.',
      'The social gradient: health follows socioeconomic position step by step — the lower the position, the worse the health; the higher, the progressively better the health.',
    ],
    src: 'Social Determinants of Health deck, slides 10–11 and 26–27; Population Health vs Personal Health deck, slide 17' },
  { ...R, pts: 3, q: 'Distinguish population health from personal health, and give one nursing intervention at each level.',
    steps: [
      'Population health looks at the health outcomes of a GROUP of people, how those outcomes are distributed, and the social, economic and environmental factors and policies behind them; personal health concerns one individual’s own circumstances, risk factors and symptoms.',
      'Population-level intervention (any one): health education programmes · community health campaigns · health policy advocacy · national screening · the Healthy Homes Initiative.',
      'Personal-level intervention (any one): direct patient care · one-to-one health education with a GP or practice nurse, tailored to the person’s life.',
    ],
    src: 'Population Health vs Personal Health deck, slides 9, 11, 13–14, 16 and 36' },
  { ...R, pts: 5, q: 'The Waitangi Tribunal recommended five principles of Te Tiriti o Waitangi for the health sector. Name them (in te reo Māori or English) with a brief meaning for nursing.',
    steps: [
      'Tino rangatiratanga — self-determination: Māori lead decisions about Māori health; nurses work alongside Māori, not for Māori.',
      'Mana taurite — equity: a fair opportunity for good health; resources targeted where need is greatest — not the same thing for everyone.',
      'Whakamarumarutia — active protection: health is a taonga; act to prevent harm and address inequities rather than only responding to problems.',
      'Kōwhiringa — options: properly resourced, culturally appropriate choices, including kaupapa Māori services and Māori models of health.',
      'Pātuitanga — partnership: Māori involved in planning, delivering and evaluating services — decisions made with the community, not for it. (The “three Ps” are outdated and should not be used.)',
    ],
    src: 'Population Health vs Personal Health deck, slides 20–31' },
  { ...R, pts: 4, q: 'PROGRESS is the equity framework taught in this course. State what it is used for and list what its letters stand for.',
    steps: [
      'Purpose: a mnemonic for the social factors that shape who gets sick, why, and who benefits from health interventions — it helps a nurse ask who is benefiting, who is missing out, and which barriers are systemic rather than individual.',
      'P — Place of residence · R — Race / ethnicity / culture / language',
      'O — Occupation · G — Gender / sex · R — Religion',
      'E — Education · S — Socioeconomic status · S — Social capital (support, networks, relationships)',
    ],
    src: 'Population Health vs Personal Health deck, slides 32–34' },
  { ...R, pts: 2, q: 'Define demography and epidemiology.',
    steps: [
      'Demography: the study of the size, distribution and characteristics of human populations (demographers study fertility, mortality, marriage, migration and social mobility).',
      'Epidemiology: the study of the patterns, causes and control of disease in groups of people.',
    ],
    src: 'Demography & Epidemiology deck, slides 11 and 13' },
  { ...R, pts: 4, q: 'Name the three parts of the epidemiological triangle, and give one way of breaking the triangle at each part.',
    steps: [
      'Agent — the cause of the disease (virus, bacterium, parasite). Break it by removing the agent, e.g. with medicine.',
      'Host — the person or animal that gets sick. Protect the host, e.g. by vaccination.',
      'Environment — everything around the host that helps the agent spread (air, water, other people). Change it, e.g. by improving hygiene and sanitation.',
      'Disease occurs when all three meet; breaking any one connection stops it.',
    ],
    src: 'Demography & Epidemiology deck, slides 33–35' },
  { ...R, pts: 4, q: 'Define primordial, primary, secondary and tertiary prevention and give an example of each.',
    steps: [
      'Primordial — prevents risk factors from developing in a population, through large-scale social and environmental change. Example: the Healthy Homes Initiative.',
      'Primary (“Prevent”) — action before the onset of disease so that it never occurs. Example: vaccination clinics, sexual health education, PPE at work.',
      'Secondary (“Screen”) — detect disease early and stop it progressing. Example: cervical screening, mammograms, colonoscopy.',
      'Tertiary (“Treatment”) — manage an existing condition to prevent it worsening, further disability or death. Example: an insulin regime in diabetes to prevent cardiovascular or renal disease.',
    ],
    src: 'Demography & Epidemiology deck, slides 38–45' },
  { ...R, pts: 2, q: 'Define “epidemic” and “endemic”.',
    steps: [
      'Epidemic: the occurrence of cases in excess of what is normally expected in a community or region.',
      'Endemic: a relatively stable pattern of occurrence in a given geographical area or population group.',
    ],
    src: 'Demography & Epidemiology deck, slide 36' },
];
