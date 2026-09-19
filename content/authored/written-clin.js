/* The written section, part 2 — THE TOOL's short-answer questions for the quizzed topics in
   the "Clinical knowledge" group. These topics have Canvas quizzes (multi-choice only); the
   real paper also has ten short answers and Canvas has none, so these were written from
   each topic's own lecture deck (Canvas, harvested 19 Sep 2026). */
const R = { sys: 'clin', quiz: 'w-clin', quizName: 'Written section · Clinical knowledge — the tool’s questions' };

export const MCQS = [];

export const SAQS = [
  { ...R, pts: 5, q: 'A primary survey gives essential information about a patient in order of clinical importance. State what each letter of A–E stands for and what the nurse assesses under it.',
    steps: [
      'A — Airway: is the patient alert, talking normally, able to cough? Anything blocking the airway, drooling, distress? Obstruction can be life-threatening within minutes.',
      'B — Breathing: respiratory rate, pattern, depth and sounds, work of breathing, and oxygen saturation.',
      'C — Circulation: blood pressure and pulse (rate, rhythm, strength, equality).',
      'D — Disability: level of consciousness — AVPU (Alert, responds to Voice, responds to Pain, Unresponsive) or the Glasgow Coma Scale.',
      'E — Exposure: temperature.',
    ],
    src: 'Vital Signs 2026 deck, slides 3, 6–8, 15 and 27–28' },
  { ...R, pts: 4, q: 'Give the normal adult ranges taught in this course for oxygen saturation, blood pressure (systolic and diastolic) and temperature, and define tachycardia and bradycardia.',
    steps: [
      'SpO2: 95–100%.',
      'Blood pressure: systolic usually 110–140 mmHg, diastolic usually 60–90 mmHg.',
      'Temperature: 36.5–37.5 °C (36–36.4 °C is usually considered safe; 37.6–37.9 °C is a low-grade fever; above 38 °C is pyrexia; below 35 °C is hypothermia).',
      'Tachycardia: heart rate above 100 bpm. Bradycardia: heart rate below 60 bpm.',
    ],
    src: 'Vital Signs 2026 deck, slides 13, 17, 24 and 30–32' },
  { ...R, pts: 3, q: 'What is the New Zealand Early Warning Score (NZEWS), what is it calculated from, and what does it trigger?',
    steps: [
      'A safety tool on the national vital signs chart for adult patients who acutely deteriorate in hospital: each vital sign is scored 0–3, scoring higher the further it is from normal, and the scores are added to give the total EWS.',
      'It is calculated from seven routine measurements: respiratory rate, oxygen supplementation, oxygen saturation, heart rate, blood pressure (systolic is the trigger), temperature and level of consciousness.',
      'The total — or any single significantly abnormal vital sign (red or blue zone) — triggers an escalating clinical response, so clinicians intervene and manage the deterioration.',
    ],
    src: 'Vital Signs 2026 deck, slides 40–41' },
  { ...R, pts: 3, q: 'Define a healthcare-associated infection (HAI) and name three common types.',
    steps: [
      'Definition: an infection that was not apparent or incubating at the time of admission but appears at least 48 hours after admission (previously called nosocomial infection). It may be exogenous or endogenous.',
      'Types (any three): surgical site infection · urinary tract infection · pneumonia · bloodstream infection.',
      'Multi-drug resistant organisms are one of the main causes; up to 10% of patients admitted to hospital in the developed world develop one or more HAI.',
    ],
    src: 'Infection Prevention & Control 2026 deck, slides 7, 9 and 11' },
  { ...R, pts: 6, q: 'Name the six links of the chain of infection in order.',
    steps: [
      'Infectious agent — bacteria, viruses, fungi, protozoa.',
      'Reservoir — where the agent survives: the human body, water, food, soil, animals, fomites.',
      'Portal of exit — how it escapes the reservoir: respiratory, GI, urinary or reproductive tract, skin, mucous membranes, blood.',
      'Mode of transmission — contact, droplet, airborne, ingestion, fomites, vector.',
      'Portal of entry — how it enters the new host: mucous membranes, broken skin, respiratory, GI or urinary tract, blood.',
      'Susceptible host — babies and children, pregnant women, the elderly, people with weakened immune systems, hospital patients, the unvaccinated.',
    ],
    src: 'Infection Prevention & Control 2026 deck, slides 15–22' },
  { ...R, pts: 4, q: 'Define standard precautions, and distinguish them from transmission-based precautions, naming the three types of the latter.',
    steps: [
      'Standard precautions: the MINIMUM precautions for ALL patients, whatever their known infection status, whenever contact with blood or body fluids is possible — because you cannot tell by looking who is infectious.',
      'They include hand hygiene, PPE, respiratory hygiene and cough etiquette, safe sharps practice, linen and waste management, aseptic technique, reprocessing of equipment, and environmental cleaning.',
      'Transmission-based precautions are ADDED for a known or suspected pathogen, according to how it spreads — PPE, single-room allocation, air-quality controls.',
      'The three types: contact (e.g. MRSA, gastro infections), droplet (e.g. influenza, mumps, meningitis) and airborne (e.g. measles, chickenpox, TB, COVID-19 — N95/P2 respirator and a negative-pressure room).',
    ],
    src: 'Infection Prevention & Control 2026 deck, slides 24, 26–27 and 48–52' },
  { ...R, pts: 4, q: 'Compare type 1 and type 2 diabetes mellitus: the cause of each and how each is managed.',
    steps: [
      'Type 1 — cause: an auto-immune disease in which the immune system destroys the insulin-making (beta) cells of the pancreas, so no insulin is made. About 5–10% of people with diabetes; usually begins under 40.',
      'Type 1 — management: insulin therapy, blood glucose monitoring, healthy eating, physical activity.',
      'Type 2 — cause: the body becomes resistant to insulin or secretes too little; linked to genetics, lifestyle factors and obesity. About 90–95% of people with diabetes; usually adult onset, increasingly seen in younger people.',
      'Type 2 — management: diet control, physical activity, oral medicines, possibly insulin, blood glucose monitoring.',
    ],
    src: 'Diabetes Mellitus deck, slides 10–12 and 16' },
  { ...R, pts: 4, q: 'Define hypoglycaemia. Give two causes and two symptoms.',
    steps: [
      'Definition: low blood glucose — a level below 4 mmol/L, or symptoms of hypoglycaemia at a level close to this (normal without diabetes is 4–7.5 mmol/L).',
      'Causes (any two): too little carbohydrate with a meal · a missed or delayed meal or snack · physical activity without adjusting insulin or eating more · too much insulin · alcohol in excess or without food.',
      'Symptoms (any two): shaky, sweaty or suddenly unwell · racing pulse · tingling around the mouth and tongue · suddenly “strange” and unable to concentrate · suddenly very hungry · pale · headache · restless or anxious.',
      'Why it happens on insulin: injected insulin cannot be “switched off”, so glucose keeps moving into the cells and the liver does not release its store — the level keeps falling.',
    ],
    src: 'Diabetes Mellitus deck, slides 17 and 19–22' },
  { ...R, pts: 3, q: 'Define health literacy at its two levels, and name the three steps to better health literacy.',
    steps: [
      'Personal health literacy: an individual’s ability to find, understand and use information and services to inform health-related decisions and actions for themselves and others. It is not determined by intelligence.',
      'Organisational health literacy: the degree to which organisations equitably ENABLE individuals to find, understand and use that information and those services.',
      'The three steps: Ask · Build · Check — with teach-back (“tell and show me what you understand”) as the gold standard for checking.',
    ],
    src: 'Health Literacy & Patient Education 2026 deck, slides 3, 11, 16 and 34' },
];
