/* Discharge Planning — THE TOOL's questions. The lecture has no Canvas quiz, so these were
   written from the lecture deck "Discharge Planning Lecture.pptx" (Canvas, harvested
   19 Sep 2026). Every entry names the slide it was written from. */
const R = { sys: 'care', quiz: 'a-discharge', quizName: 'Discharge Planning — the tool’s questions' };
const D = 'the Discharge Planning deck, ';

export const MCQS = [
  { ...R, q: 'According to the Discharge Planning lecture, when does discharge planning begin?',
    options: ['When the medical team decides the patient is fit to go', 'The day before the expected discharge date', 'At the time of admission', 'Once the discharge summary has been written'],
    correct: 2,
    why: 'The deck puts it in capitals: DISCHARGE PLANNING BEGINS AT THE TIME OF ADMISSION. Gathering information from admission — “what brought you to hospital? how have you been managing?” — is already the start of the discharge process.',
    src: D + 'slides 10, 14 and 31' },
  { ...R, q: 'Which is the Discharge Planning lecture’s definition of discharge planning?',
    options: ['An interdisciplinary approach to continuity of care, linking hospital, community services and carers', 'The medical team’s decision that a patient is clinically well enough to give up a hospital bed', 'The summary, prescription and other paperwork completed on the day a patient leaves hospital', 'A nursing follow-up task carried out by phone once the patient has gone home, to check how they are managing'],
    correct: 0,
    why: 'Discharge planning is an interdisciplinary approach to continuity of care: a process of identification, assessment, goal setting, planning, implementation, coordination and evaluation, and the quality link between hospitals, community-based services, non-government organisations and carers.',
    src: D + 'slides 3 and 6' },
  { ...R, q: 'Effective discharge planning is associated with which outcomes?',
    options: ['More follow-up community care, longer stays and more referrals', 'Fewer referrals, less patient education and fewer follow-up appointments', 'Higher bed occupancy, more ED presentations and quicker medical discharge decisions', 'Fewer readmissions, shorter hospital stays and less follow-up community care'],
    correct: 3,
    why: 'Effective discharge planning is associated with a decrease in readmission rates, a reduction in length of hospital stay and a reduction in the degree of follow-up community care. Poor planning — poor instruction, inadequate information, poor coordination and communication — leads the other way.',
    src: D + 'slide 8' },
  { ...R, q: 'Which list gives the Discharge Planning lecture’s four key elements of discharge planning?',
    options: ['A confirmed diagnosis, a discharge prescription, transport home and a follow-up appointment with the GP', 'Collaboration with person and family, efficient communication, interdisciplinary approach, prompt assessment of needs at home', 'The hospital’s bed status, the acuity of waiting patients, expected length of stay and readmission risk', 'Informed consent, complete documentation, a verbal handover to the community team and an audit of the written discharge summary'],
    correct: 1,
    why: 'The four key elements: collaboration with the person and family; efficient communication; an interdisciplinary approach; and prompt assessment of potential interventions needed at home.',
    src: D + 'slide 10' },
  { ...R, q: 'How does the Discharge Planning lecture describe the nurse’s role in discharge?',
    options: ['The decision-maker, who judges from the clinical picture and the bed status when the patient is medically fit to be discharged home', 'A referrer, whose part in the discharge ends once the referral forms have been sent to the community services', 'The coordinator or “middle-man”, often the last point of contact, who checks the patient and family understand the plan', 'A bystander, who hands the whole discharge over to the social worker and needs assessor once the date has been set'],
    correct: 2,
    why: 'The nurse coordinates the discharge process — the “middle-man”, often the final point of contact before the patient leaves — and ensures the patient and family understand and agree with the plan and have all the information and tools to transition home or to another facility.',
    src: D + 'slides 12 and 14' },
  { ...R, q: 'A nurse has explained the discharge medicines and the patient nods. Why does the Discharge Planning lecture say the nurse should still use teach-back?',
    options: ['Patients often nod even when confused — stress, pain and fatigue affect recall', 'Teach-back is a legal requirement that must be documented before any discharge', 'It replaces the written discharge summary for patients who cannot read English', 'It tests whether the patient was listening, so the nurse knows who needs a reminder'],
    correct: 0,
    why: 'Teach-back is a safety tool: patients often nod even when confused, and stress, pain, fatigue and health literacy affect recall. Ask–Build–Check, plain words instead of abbreviations, an interpreter or written and visual resources where needed, and a support person present.',
    src: D + 'slides 19–20' },
  { ...R, q: 'The Discharge Planning lecture’s discharge process is “A P (& prepare) I E”. What does the added “prepare” refer to?',
    options: ['Preparing the bed space and equipment for the next admission to the ward', 'Preparing the discharge prescription and the medicines to take home', 'Preparing the ambulance or hospital transport booking for the patient’s journey home', 'Psychological preparation — feeling mentally and emotionally ready to go home'],
    correct: 3,
    why: 'Psychological preparation: what will life look like at home, day to day and in the longer term? Does the patient or their caregiver feel confident to continue care? What limitations will they have, and how will that affect the family’s lifestyle? Support, empower, communicate.',
    src: D + 'slides 11, 38 and 43' },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Define discharge planning and state two benefits of doing it well.',
    steps: [
      'Definition: an interdisciplinary approach to continuity of care — a process (identification, assessment, goal setting, planning, implementation, coordination, evaluation) that helps a person move smoothly from one setting or level of care to another without losing the progress already made. It begins at admission.',
      'Benefit (any two, one mark each): fewer readmissions · shorter length of hospital stay · less follow-up community care needed.',
      'Also accepted as a benefit: the patient and family leave understanding their medicines, warning signs, follow-up and who to contact — a safe link between hospital, community services and carers.',
    ],
    src: D + 'slides 3, 6, 8 and 10' },
  { ...R, pts: 4, q: 'Mr Lear, 60, was admitted with cellulitis of his right lower leg and has finished IV antibiotics. He was unsteady on admission, fell at home before coming in, and lives alone; his daughter lives five minutes away. Give four things the nurse must address in his discharge plan.',
    steps: [
      'Medicines: explain what he is going home with (antibiotics? pain relief? regular medicines), how and when to take them, and what to do if pain increases despite taking them.',
      'Wound: a District Nurse referral to monitor the wound and change dressings; education — written in words he can read — on the signs of infection and who to contact.',
      'Mobility and falls risk: physiotherapy review before discharge (is he safe on stairs? does he need a mobility aid or an exercise programme?) and home safety.',
      'Support at home: can he cook, shop and shower? Involve his daughter with his consent, or set up supports (needs assessment, home care, meals on wheels); arrange transport home and follow-up appointments.',
    ],
    src: D + 'slides 29–37 (the Cyril Lear scenario)' },
  { ...R, pts: 4, q: 'List four items that a written discharge summary should contain for the patient.',
    steps: [
      'Any four, one mark each: mode of discharge (ambulatory, wheelchair, stretcher) · instructions for self-care — medicines, diet, wound care, pain management, treatments.',
      'Signs and symptoms of complications or drug reactions, and the action to take.',
      'Permissible activities (e.g. lifting, driving) · correct settings for any equipment · health-promoting education.',
      'Follow-up instructions and appointments · what to do if things do not go well — emergency procedures explained in meaningful language or print.',
    ],
    src: D + 'slide 40' },
];
