/* The written section, part 2 — THE TOOL's short-answer questions for the quizzed topics in
   the "Clinical knowledge" group. These topics have Canvas quizzes (multi-choice only); the
   real paper also has ten short answers and Canvas has none, so these were written from
   each topic's own lecture deck (Canvas, harvested 19 Sep 2026). */
const R = { sys: 'clin', quiz: 'w-clin', quizName: 'Written section · Clinical knowledge — the tool’s questions' };

export const MCQS = [];

export const SAQS = [
  { ...R, pts: 4, q: 'Give the normal adult ranges taught in this course for oxygen saturation, blood pressure (systolic and diastolic) and temperature, and define tachycardia and bradycardia.',
    steps: [
      'SpO2: 95–100%.',
      'Blood pressure: systolic usually 110–140 mmHg, diastolic usually 60–90 mmHg.',
      'Temperature: 36.5–37.5 °C (36–36.4 °C is usually considered safe; 37.6–37.9 °C is a low-grade fever; above 38 °C is pyrexia; below 35 °C is hypothermia).',
      'Tachycardia: heart rate above 100 bpm. Bradycardia: heart rate below 60 bpm.',
    ],
    src: 'Vital Signs 2026 deck, slides 13, 17, 24 and 30–32' },
  { ...R, pts: 4, q: 'Define standard precautions, and distinguish them from transmission-based precautions, naming the three types of the latter.',
    steps: [
      'Standard precautions: the MINIMUM precautions for ALL patients, whatever their known infection status, whenever contact with blood or body fluids is possible — because you cannot tell by looking who is infectious.',
      'They include hand hygiene, PPE, respiratory hygiene and cough etiquette, safe sharps practice, linen and waste management, aseptic technique, reprocessing of equipment, and environmental cleaning.',
      'Transmission-based precautions are ADDED for a known or suspected pathogen, according to how it spreads — PPE, single-room allocation, air-quality controls.',
      'The three types: contact (e.g. MRSA, gastro infections), droplet (e.g. influenza, mumps, meningitis) and airborne (e.g. measles, chickenpox, TB, COVID-19 — N95/P2 respirator and a negative-pressure room).',
    ],
    src: 'Infection Prevention & Control 2026 deck, slides 24, 26–27 and 48–52' },
  { ...R, pts: 4, q: 'Define hypoglycaemia. Give two causes and two symptoms.',
    steps: [
      'Definition: low blood glucose — a level below 4 mmol/L, or symptoms of hypoglycaemia at a level close to this (normal without diabetes is 4–7.5 mmol/L).',
      'Causes (any two): too little carbohydrate with a meal · a missed or delayed meal or snack · physical activity without adjusting insulin or eating more · too much insulin · alcohol in excess or without food.',
      'Symptoms (any two): shaky, sweaty or suddenly unwell · racing pulse · tingling around the mouth and tongue · suddenly “strange” and unable to concentrate · suddenly very hungry · pale · headache · restless or anxious.',
      'Why it happens on insulin: injected insulin cannot be “switched off”, so glucose keeps moving into the cells and the liver does not release its store — the level keeps falling.',
    ],
    src: 'Diabetes Mellitus deck, slides 17 and 19–22' },
];
