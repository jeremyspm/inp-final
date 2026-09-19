/* Roles of Nurses — THE TOOL's questions. The lecture has no Canvas quiz, so these were
   written from the lecture deck "Roles of Nurses (2).pptx" (Canvas, harvested 19 Sep 2026).
   Every entry names the slide it was written from. */
const R = { sys: 'prof', quiz: 'a-roles', quizName: 'Roles of Nurses — the tool’s questions' };
const D = 'the Roles of Nurses deck, ';

export const MCQS = [
  { ...R, q: 'In the aged-care section of the Roles of Nurses lecture, what is “multi-morbidity”?',
    options: ['Several chronic diseases at once — a result and a cause of functional decline', 'Dying from more than one cause listed on the death certificate', 'Taking five or more regular medicines at once, with the risk of interactions', 'Being admitted to hospital three or more times within a single year'],
    correct: 0,
    why: 'Ageing is a major risk factor for developing chronic diseases — a state called multi-morbidity, which is the result (and cause) of functional decline in older age. Lost function means difficulty with activities of daily living, and with that a reduction in social life and wellbeing.',
    src: D + 'slide 4' },
  { ...R, q: 'Which are the three levels of RESIDENTIAL-based aged care in New Zealand named in the Roles of Nurses lecture?',
    options: ['Private house, retirement village, assisted living', 'Primary, secondary and tertiary care', 'Rest home, hospital and dementia level of care', 'Respite, rehabilitation and palliative care'],
    correct: 2,
    why: 'Residential-based care: rest home level, hospital level and dementia level of care — 24-hour care from trained staff. Private houses, retirement villages and assisted living are the “extra-mural” settings, where services support the older person to keep living independently.',
    src: D + 'slide 5' },
  { ...R, q: 'How does the Roles of Nurses lecture define primary healthcare?',
    options: ['The first treatment a patient receives in the emergency department', 'Healthcare services provided outside the hospital', 'Care delivered only by general practitioners', 'The most urgent tier of hospital care'],
    correct: 1,
    why: 'Primary healthcare is healthcare provided outside the hospital. Community-based nursing takes place where clients live, work and play — a school, a work site, a home — with clients from pre-birth to very old age, across the whole continuum from health promotion to care of illness.',
    src: D + 'slides 10–11' },
  { ...R, q: 'Which definition of acute care matches the Roles of Nurses lecture?',
    options: ['Long-term management of chronic conditions in the community, to keep people well and out of hospital for as long as possible', 'Any care provided by a registered nurse in a hospital, as opposed to care provided in the home or a clinic', 'Care for people in the last days or weeks of life, focused on comfort and on support for their family', 'Treatment of sudden, urgent or emergent illness or injury that could cause death or disability without rapid intervention'],
    correct: 3,
    why: 'Acute care: the parts of the health system used to treat sudden, often unexpected, urgent or emergent episodes of injury and illness that can lead to death or disability without rapid intervention — emergency, trauma, acute surgery, critical care, urgent care and short-term inpatient stabilisation.',
    src: D + 'slide 16' },
  { ...R, q: 'In mental health nursing today, what does “recovery” mean?',
    options: ['Living well with mental health problems, with hope at the centre — not “cure”', 'Complete and permanent cure of the illness, confirmed by a psychiatrist’s review', 'Discharge from the inpatient unit back to the care of the GP', 'No longer needing any medication or contact with services'],
    correct: 0,
    why: 'The current concept of recovery does not mean “cure” as it does elsewhere in healthcare; it refers to living with mental health problems. Hope is central — it sustains people through distress and supports them in keeping their personal life goals.',
    src: D + 'slide 26' },
  { ...R, q: 'Mental health nursing is underpinned by interpersonal theory. What does that theory place at the centre of mental healthcare?',
    options: ['The diagnosis and its classification', 'The medication regimen and the person’s adherence to taking it', 'The relationship between the service user and the nurse', 'The routine and structure of the inpatient ward'],
    correct: 2,
    why: 'Interpersonal theory places the relationship between service user and nurse at the centre of mental healthcare, and uses that relationship to help service users reach their health goals.',
    src: D + 'slide 26' },
  { ...R, q: 'A nurse phones the doctor about a deteriorating patient using ISBAR. What belongs under “B”?',
    options: ['“My assessment is that she is becoming septic.”', '“By way of background, she is day two after a bowel resection.”', '“I recommend you review her now.”', '“The situation is her blood pressure has dropped to 85/50.”'],
    correct: 1,
    why: 'Introduction/Identify (who and where you are, why you are calling) → Situation (what is happening now) → Background (what led to the situation) → Assessment (what you consider the problem is) → Request/Recommend (what should be done).',
    src: D + 'slide 29' },
  { ...R, q: 'Which is an example of nursing informatics given in the Roles of Nurses lecture?',
    options: ['A nurse’s handwritten reflective journal kept for their portfolio', 'Hand hygiene between patients, audited with a paper checklist', 'A face-to-face verbal handover at the bedside at the change of shift', 'The NHI number, electronic charts and computerised drug cupboards'],
    correct: 3,
    why: 'Nursing informatics is the use of computer technology to support nursing — clinical practice, administration, education and research. The deck’s examples: NHI, care plans and charts, staff email and automated rostering, data collection, computerised drug cupboards, patient education.',
    src: D + 'slide 31 and the speaker notes to slide 1' },
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
  { ...R, pts: 3, q: 'Define primary healthcare and give two examples of where or how nurses work in it.',
    steps: [
      'Definition: healthcare services provided outside the hospital — community-based nursing takes place where clients live, work and play, for clients from pre-birth to very old age, from health promotion and prevention through to care of illness.',
      'Example (any two, one mark each): district nursing — seeing patients in their homes or running a clinic · Plunket / Well Child clinics and home visits.',
      'General practice / primary care nursing — booked appointments or drop-in clinics, patient education, wound care, screening, immunisation · school or workplace nursing.',
    ],
    src: D + 'slides 10–11 and 15' },
  { ...R, pts: 3, q: 'Give three skills the Roles of Nurses lecture says matter especially for nurses working in acute care.',
    steps: [
      'Any three, one mark each: recognising and responding to patient deterioration · communicating assessment findings (e.g. with ISBAR).',
      'Correct patient identification · delivering health education, particularly for discharge.',
      'Quickly establishing rapport and really listening — admission brings fear, anxiety and loss of control for patients and families.',
    ],
    src: D + 'slides 18–19' },
];
