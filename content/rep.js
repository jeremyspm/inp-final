/* The guided-recall page (rep.html, built by rep.build.mjs) for the INP written section, 27 Oct 2026: the HS2 Final
   ladder on this paper. Lisa sets no practice short answers, so the written section is learned from the lecturers' own
   material, in this order:
     1. pieces — Janine's revision deck (Revision Semester 2 2026, 111 slides, on Canvas), slide by slide in HER words:
        the topics she chose to revise, each with the key words bolded. The question above each ("ask") is the tool's
        framing; every line under it is her slide.
     2. recall — the lecturers' own Canvas quiz questions, asked without their options: the answer to type is her key.
        Only questions with one answer that stands on its own (no "All of these", no "which is NOT", no "give an
        example of" with many right answers). Several to a card, per lecture.
     3. the tool's 26 written questions (content/authored/), last, in their own group and tagged.
   Not here: upstream/midstream/downstream (on the Exam Content list, but its Primary Health Care slides are pictures with
   no text to learn from). Source deck text: canvas-harvest/CanvasArchive/2026/Introduction to Nursing Practice …/text/
   files/Revision Semester 2 2026.pptx.txt. */
const S = n => `Janine’s revision deck (Revision Semester 2 2026), slide ${n}`;

const groups = [
  { id: 'process', title: 'Nursing process & care plans', hue: 28 },
  { id: 'hha', title: 'Holistic health assessment', hue: 38 },
  { id: 'consent', title: 'Informed consent', hue: 340 },
  { id: 'literacy', title: 'Health literacy & patient education', hue: 190 },
  { id: 'vitals', title: 'Vital signs', hue: 158 },
  { id: 'ebp', title: 'Evidence-based practice', hue: 250 },
  { id: 'docs', title: 'Clinical documentation', hue: 210 },
  { id: 'selfcare', title: 'Self-care in nursing', hue: 300 },
  { id: 'ipc', title: 'Infection prevention & control', hue: 120 },
  { id: 'ltc', title: 'Long-term conditions, diabetes & rheumatic fever', hue: 0 },
  { id: 'pop', title: 'Population health & equity', hue: 268 },
  { id: 'prof', title: 'Professional practice', hue: 220 },
  { id: 'tool', title: 'The tool’s short answers', hue: 45 },
];

const pieces = [
  /* ── the nursing process ── */
  { id: 'np-def', group: 'process', title: 'The nursing process', src: S(4), ask: 'What is the nursing process?',
    facts: ['An organised sequence of **problem-solving** steps', 'Used to identify and manage the **actual & potential** health problems of patients',
      'It requires **critical thinking**', 'It delivers **holistic**, patient-focused care'] },
  { id: 'np-adpie', group: 'process', title: 'ADPIE', src: S(5), ask: 'Name the five steps of the nursing process, in order.', hook: 'ADPIE',
    facts: ['**Assessment**', '**Diagnosis** (nursing)', '**Planning**', '**Implementation**', '**Evaluation**'] },
  { id: 'np-data', group: 'process', title: 'Data and its sources', src: S(6), ask: 'In assessment, define objective and subjective data, and name the three sources of data.',
    facts: ['Objective data: **observable** and **measurable** facts (**signs**)', 'Subjective data: what only the patient **feels** & can describe (**symptoms**)',
      'Primary source: the **patient**', 'Secondary source: **family**, reports, test results, **records**, other health care workers', 'Tertiary source: **textbooks**, journals, policies'] },
  { id: 'np-dx', group: 'process', title: 'Nursing diagnosis', src: S(7), ask: 'What is a nursing diagnosis, and how is it written?',
    facts: ['Problems or potential problems that can be prevented, reduced or resolved through **independent nursing interventions**', '**Prioritised**',
      'Written as **diagnostic statements**, using **NANDA**-I'] },
  { id: 'np-impl', group: 'process', title: 'Interventions must be…', src: S(9), ask: 'Nursing interventions are evidence-based. What three things must they also be?',
    facts: ['**Safe**', 'Within the **legal scope** of nursing practice', 'Compatible with **medical orders**'] },
  { id: 'np-eval', group: 'process', title: 'Evaluation', src: S(10), ask: 'What happens in the evaluation step of the nursing process?',
    facts: ['The nurse determines whether the patient has **achieved the goal**', 'It analyses the patient’s **response** to each intervention — the **effectiveness** of care',
      'Each evaluation is **timed**, **dated** & **signed**', 'Overall: the goal is **met**, **partially met**, or **not met**'] },

  /* ── holistic health assessment ── */
  { id: 'hha-holism', group: 'hha', title: 'Holism in nursing', src: S(12), ask: 'What is holism in nursing, and what does a holistic health assessment cover?',
    facts: ['It goes beyond **physical** health', 'It also addresses **psychological**, **social** & **spiritual** health',
      'The **whole condition** of the patient is considered, not just the presenting problem', 'It identifies **actual and potential needs**, from which care is planned'] },
  { id: 'hha-phys', group: 'hha', title: 'Physical assessment', src: S(14), ask: 'List what a physical assessment covers.',
    facts: ['Physical examination — **review of body systems**', '**Developmental** stage', 'Level of independence with **ADL’s**', 'Mobility — **falls risk** assessment',
      'Skin integrity — **wound** assessment', '**Sleep**, **diet**, **exercise**', '**Vital signs**', '**Diagnostic tests**'] },
  { id: 'hha-falls', group: 'hha', title: 'Falls', src: S(15), ask: 'Who is at risk of falls, what raises the risk, and what can a fall lead to?',
    facts: ['Common in adults **65** years and older', 'Risk factors: **balance** issues, **long-term** health conditions, impaired **vision**',
      'Can lead to **bruising**, **fractures**, **head injuries** or **death**', 'A fall risk assessment finds a **low**, **moderate** or **high** risk'] },
  { id: 'hha-morse', group: 'hha', title: 'The Morse Fall Scale', src: S(16), ask: 'Name the six areas of the Morse Fall Scale, and the score for a high risk of falling.',
    facts: ['**History** of falling', '**Secondary diagnosis**', '**Ambulatory aid**', '**IV** therapy / heparin lock', '**Gait**', '**Mental status**', 'High risk: over **45**'] },
  { id: 'hha-time', group: 'hha', title: 'Wound assessment: T.I.M.E.', src: S(17) + ' (and the Holistic Health Assessment deck, slide 24)', ask: 'Wound assessment uses T.I.M.E. What does each letter stand for, with what you look for?', hook: 'T.I.M.E.',
    facts: ['T: **Tissue** — granulation, **slough**, **necrotic**, epithelial', 'I: **Inflammation**/**Infection** — pain, **erythema**, swelling, **exudate**',
      'M: **Moisture** balance — dry, moist, wet, saturated, leaking', 'E: **Epidermal edges** — wound **closure**, measurements'] },
  { id: 'hha-psych', group: 'hha', title: 'Psychological assessment', src: S(18), ask: 'List what a psychological assessment covers.',
    facts: ['Level of **consciousness** / **orientation** to time, place & person', '**Cognition** / educational level', '**Communication** patterns',
      '**Memory**, long- and short-term', '**Mental health** history', '**Stressors** and **coping** mechanisms', '**Pain** assessment'] },
  { id: 'hha-social', group: 'hha', title: 'Social assessment', src: S(19), ask: 'List what a social assessment covers.',
    facts: ['**Culture**, primary language / need for an **interpreter**', '**Family** situation and support', '**Employment** — effect of hospitalisation on **finances**',
      '**Lifestyle** factors — alcohol, drugs & smoking', 'Social **relationships** & support, and the **community**'] },
  { id: 'hha-spirit', group: 'hha', title: 'Spiritual assessment', src: S(20), ask: 'List what a spiritual assessment covers.',
    facts: ['Spiritual / **religious** practices & beliefs', '**Values**', '**Meaning** / purpose', '**Impact of illness** on spirituality',
      'Concerns around **death** & dying', '**Resuscitation** status'] },

  /* ── informed consent ── */
  { id: 'ic-def', group: 'consent', title: 'Informed consent', src: S(22) + ' and slide 23', ask: 'Define informed consent, and name the two pieces of law that make it a right.',
    facts: ['Communicating the **benefits**, **risks**, and **alternatives** of a procedure or treatment', 'So the patient can make an **informed decision** whether to accept it',
      'The Code of Health and Disability Services Consumers’ Rights: **Right 7**', 'New Zealand **Bill of Rights** Act 1990, section 11: the right to **refuse**'] },
  { id: 'ic-who', group: 'consent', title: 'Who can consent', src: S(24) + ' and slide 25', ask: 'Who can give informed consent in New Zealand, and who can’t?',
    facts: ['Anyone **16** years and older, for their own treatment', 'For someone 16+ who is incompetent: a **legal guardian** or **enduring power of attorney**',
      'Under 16: a **parent**, guardian or person in place of a parent', 'A **Court Order**', 'Can’t: a patient committed under the **Mental Health** (Compulsory Assessment & Treatment) Act 1992'] },
  { id: 'ic-role', group: 'consent', title: 'The nurse’s role in consent', src: S(28), ask: 'Describe the nurse’s role in the consent process.',
    facts: ['Be an **advocate** for the patient', 'Organise **interpreter** services and **whānau** support', 'Ensure the medical team gave **all the information** in a way the patient understands',
      'Give the patient a chance to **ask questions**; verify they **understand**', 'Sometimes **witness** the signature, and that the patient is of **legal age** and **competent**'] },

  /* ── health literacy & patient education ── */
  { id: 'hl-def', group: 'literacy', title: 'Health literacy: two levels', src: S(30) + ' and slide 31', ask: 'Define personal and organisational health literacy.',
    facts: ['Personal: an individual’s ability to **find**, **understand**, & **use** information & services', '…to inform **health-related decisions** for themselves & others',
      'Organisational: how far **organisations** equitably **enable** individuals to find, understand & use information & services'] },
  { id: 'hl-poor', group: 'literacy', title: 'Poor health literacy', src: S(32), ask: 'What does research show about people with poor health literacy?',
    facts: ['Less likely to use **prevention** services (screening)', 'Less **knowledge** of their illness, treatment & medicines', 'Less likely to **manage** a long-term condition',
      'More likely to be **hospitalised**', 'More likely to use **emergency** services'] },
  { id: 'hl-factors', group: 'literacy', title: 'Factors affecting health literacy', src: S(34), ask: 'What affects a person’s health literacy — and what doesn’t?',
    facts: ['Past **experiences**, resources & the quality of **information** received', '**Priorities** and **interests**', '**Stress** levels', '**Language** difficulties', '**Disabilities**',
      'Not determined by **intelligence** or **income**'] },
  { id: 'hl-learn', group: 'literacy', title: 'Optimal learning', src: S(38), ask: 'What makes for optimal patient learning?',
    facts: ['The patient’s **motivation** to learn', 'The patient’s **ability** to learn', 'The learning **environment** — lighting, ventilation, temperature, quiet, private',
      '**Children** versus **adult** learners', 'Appropriate **methods** & **resources**'] },
  { id: 'hl-abc', group: 'literacy', title: 'Ask, Build, Check', src: S(39), ask: 'Name the 3 steps to better health literacy, and the gold-standard method.',
    facts: ['**Ask**', '**Build**', '**Check**', '**Teach back** — the gold standard: “Tell and **show me** what you understand”'] },
  { id: 'hl-steps', group: 'literacy', title: 'Practical steps for nurses', src: S(40), ask: 'Give practical steps a nurse takes to support health literacy and patient education.',
    facts: ['Arrange **translation** services', 'Use **simple language** or explain medical terms', 'Limit information to **3-5 key points**', 'Be **specific**, not general',
      '**Demonstrate**, draw pictures, use models, videos'] },

  /* ── vital signs ── */
  { id: 'vs-abcde', group: 'vitals', title: 'The primary survey', src: S(42), ask: 'A primary survey gives information in order of clinical importance. What does each letter cover?',
    facts: ['A: **Airway**', 'B: **Breathing** — respirations & oxygen **saturations**', 'C: **Circulation** — **blood pressure** & **pulse**', 'D: **Disability** — level of **consciousness**', 'E: **Exposure** — **temperature**'] },
  { id: 'vs-resp', group: 'vitals', title: 'Respirations', src: S(45) + ' and slide 46', ask: 'How do you count respirations, what is the adult normal range, and define the abnormal patterns?',
    facts: ['Count while taking the **pulse**, for **30 seconds** × 2 (a **full minute** if irregular)', 'Normal adult: **12** to **20** breaths/min',
      '**Apnoea**: cessation of respirations', '**Bradypnoea**: slow, less than 12', '**Tachypnoea**: rapid, more than 20', '**Cheyne-Stokes**: irregular rate & depth with periods of **apnoea**'] },
  { id: 'vs-distress', group: 'vitals', title: 'Respiratory distress', src: S(47), ask: 'List the signs of respiratory distress.',
    facts: ['**Nasal flaring**', 'Use of **intercostal** muscles (rib **retraction**)', '**Cyanosis**', '**Tracheal tug**', '**Paradoxical** breathing', 'Looks **anxious**'] },
  { id: 'vs-bp', group: 'vitals', title: 'Blood pressure', src: S(49) + ' and slide 50', ask: 'Define blood pressure, systolic and diastolic, with the normal adult ranges.',
    facts: ['The **force** of blood pushing against the walls of the **arteries**', 'Measured with a **sphygmomanometer**, in **mmHg**',
      'Systolic: the **first sound** — the highest pressure as the heart **pumps**; normal **110–140**', 'Diastolic: the **last sound** — as the heart **relaxes**; normal **60–90**'] },
  { id: 'vs-bpfactors', group: 'vitals', title: 'What changes blood pressure', src: S(51), ask: 'Name the alterations of blood pressure, and the factors that affect it.',
    facts: ['**Hypertension**, **hypotension**, **postural** hypotension', '**Pain**, **anxiety**, **exertion**', '**White coat** syndrome', '**Age**, **medications**', '**Blood**/fluid loss'] },
  { id: 'vs-pulse', group: 'vitals', title: 'The pulse', src: S(53) + ' and slide 54', ask: 'What do you assess in a pulse, and what are the normal range and the alterations?',
    facts: ['**Rate**: 30 seconds × 2 (a **full minute** if irregular); normal **60** to **100** beats/min', '**Rhythm**: regular, irregular (**arrhythmia**)',
      '**Strength**: bounding, strong, weak, **thready**', '**Equality** — never check **carotid** pulses together', '**Bradycardia** below 60 · **tachycardia** above 100 · **asystole**: none'] },
  { id: 'vs-avpu', group: 'vitals', title: 'Consciousness: AVPU and GCS', src: S(55), ask: 'How is level of consciousness assessed?',
    facts: ['A = **Alert**', 'V = responsive to **Verbal** stimuli', 'P = responsive to **Pain**', 'U = **Unresponsive**', 'The **Glasgow Coma Scale**: **eye** opening, **verbal**, **motor** response, scored **3** - **15**'] },
  { id: 'vs-temp', group: 'vitals', title: 'Temperature', src: S(56), ask: 'What regulates body temperature, what is the normal range, and how is heat lost?',
    facts: ['The heat-regulating centre: the **hypothalamus**', 'Heat loss: **radiation**, **conduction**, **convection** & **evaporation**', 'Normal range **36.5** to **37.5** °C',
      'Sites: **oral**, **axillary**, **rectal**, **tympanic**, forehead', 'Alterations: **pyrexia**/hyperthermia, **hypothermia**'] },

  /* ── evidence-based practice ── */
  { id: 'ebp-def', group: 'ebp', title: 'Evidence-based practice', src: S(58), ask: 'Define evidence-based practice and name the three things it brings together.',
    facts: ['A shift away from **opinion** and **past practice**, toward **research** and evidence to guide decisions', 'It involves best **research**, **clinical expertise**, & **patient values**',
      '…to improve **patient outcomes**'] },
  { id: 'ebp-levels', group: 'ebp', title: 'Levels of evidence', src: S(62) + ' (its pyramid, strongest at the top)', ask: 'Rank the levels of evidence from strongest to weakest.',
    facts: ['Strongest: **systematic review**', '**Non-randomised** controlled trial', '**Quantitative** study', '**Qualitative** study', 'Weakest: **expert opinion**'] },
  { id: 'ebp-find', group: 'ebp', title: 'Finding the evidence', src: S(63), ask: 'Name electronic databases for finding research evidence.',
    facts: ['**CINAHL**', '**Cochrane** Library', '**JBI** (Joanna Briggs Institute)', '**PubMed** and **MEDLINE**'] },

  /* ── clinical documentation ── */
  { id: 'doc-why', group: 'docs', title: 'Why nurses document', src: S(65), ask: 'Documentation in nursing is three things. Name them.',
    facts: ['A **legal** requirement', 'A **professional** responsibility', 'A **communication** tool'] },
  { id: 'doc-what', group: 'docs', title: 'What to document', src: S(69), ask: 'What must be documented?',
    facts: ['What you **observed** and the nursing **interventions** you took', 'Clinical **judgement**, **escalation**/referral & **evaluation** of care',
      'Care that could **not be given**, and why', 'Deviations from **standard care**', 'If care is **not recorded**, it is assumed it was **not given**'] },
  { id: 'doc-how', group: 'docs', title: 'How to document', src: S(70), ask: 'How must an entry in the clinical notes be made?',
    facts: ['Patient **identifier label** (name, DOB, **NHI**) on every page', '**Date** and **time** (24-hr clock) at the top of the entry', '**Name**, **signature** & **designation** at the end',
      '**Chronological** order, at the time or as soon as possible', 'At least every **8 hours**', 'Legibly, in permanent **blue** or **black** ink'] },
  { id: 'doc-donts', group: 'docs', title: 'Don’ts of documentation', src: S(71) + ' and slide 72', ask: 'Give the don’ts of documentation.',
    facts: ['Don’t rely on your **memory**', 'Don’t **erase**: cross an error out with **one line**, sign it, note it is an **error**', 'Don’t leave **blank spaces**',
      'Don’t write for **another** health professional', 'Don’t use **generalisations** (“condition unchanged”), **judgmental** language or **abbreviations**'] },
  { id: 'doc-isbar', group: 'docs', title: 'ISBAR(R)', src: S(73), ask: 'What does each letter of ISBAR(R) stand for?',
    facts: ['I = **Identify**', 'S = **Situation**', 'B = **Background**', 'A = **Assessment**', 'R = **Recommendation**', 'R = **Review**'] },
  { id: 'doc-ai2det', group: 'docs', title: 'AI2DET', src: S(74), ask: 'What does AI2DET stand for, and what is it for?',
    facts: ['Steps for speaking with **patients** or **whānau** about care', 'A = **Acknowledge**', 'I = **Introduce**, I = **Identify**', 'D = **Duration**', 'E = **Explanation**', 'T = **Thank you**'] },

  /* ── self-care ── */
  { id: 'sc-burnout', group: 'selfcare', title: 'Burnout', src: S(79), ask: 'What is burnout, and what are its three characteristics?',
    facts: ['An **occupational** phenomenon, not a medical condition', 'From long-term, **unmanaged workplace stress**', '**Exhaustion** — energy depletion',
      'Mental **distance** from one’s job — **cynicism**', 'Reduced professional **efficacy**'] },
  { id: 'sc-cf', group: 'selfcare', title: 'Compassion fatigue', src: S(80) + ' and slide 81', ask: 'What is compassion fatigue, and how does it differ from burnout?',
    facts: ['The emotional demands of caring for patients through **suffering** — **secondary trauma**', 'Leads to a lack of **empathy**; symptoms: **irritability**, anger, **depression**',
      'Burnout: nurses **still feel compassion**; caused by a negative **work environment**; builds **over time**', 'Compassion fatigue: affects the ability to **feel compassion**; may **interfere** with relationships outside work'] },
  { id: 'sc-resilience', group: 'selfcare', title: 'Self-care and resilience', src: S(82) + ' and slide 83', ask: 'Define self-care and resilience, and how they connect.',
    facts: ['Self-care: **deliberate** actions to take care of all aspects of our health & wellbeing', 'It is **not selfish**; a barrier to it is **procrastination**',
      'Resilience: the ability to **adapt** positively to stress and **recover** quickly from difficulties', 'Self-care **builds resilience**, which protects against **burnout** & **compassion fatigue**'] },

  /* ── infection prevention & control ── */
  { id: 'ipc-hai', group: 'ipc', title: 'HAIs and MDROs', src: S(86), ask: 'Define a healthcare-associated infection and a multi-drug resistant organism.',
    facts: ['HAI: acquired by patients during a stay in a **healthcare facility**', 'From **cross-transmission**, **surgery**, and **medical devices**; the most reported **adverse event**',
      'MDRO: organisms **resistant** to antimicrobial medicines', 'Common in hospitals, where **antibiotics** are heavily used'] },
  { id: 'ipc-std', group: 'ipc', title: 'Standard precautions', src: S(88), ask: 'What are standard precautions, and what do they include?',
    facts: ['The **minimum** precautions for **all patients**, whatever their known status', 'When contact with **blood** & bodily **fluids** is required',
      '**Hand hygiene** and **PPE**', '**Respiratory hygiene** & cough etiquette', 'Safe **sharps**; **linen**/**waste** management', '**Aseptic** technique; **environmental** cleaning'] },
  { id: 'ipc-tbp', group: 'ipc', title: 'Transmission-based precautions', src: S(90) + ', slides 91 and 92', ask: 'For contact, droplet and airborne precautions, give an example infection and the measures.',
    facts: ['Contact (e.g. **MRSA**, gastro): **gowns** and **gloves**', 'Droplet (e.g. **influenza**, mumps): gown, **medical mask**, **eye protection**, gloves',
      'Airborne (e.g. **measles**, **TB**, chickenpox): **N95**/P2 respirator and a **negative pressure** room'] },

  /* ── long-term conditions, diabetes, rheumatic fever ── */
  { id: 'ltc-def', group: 'ltc', title: 'Long-term conditions', src: S(94) + ' and slide 95', ask: 'Define a long-term condition, multi-morbidity and self-management.',
    facts: ['**Ongoing**, long-term or **recurring** conditions with a significant impact on people’s lives', 'Also known as **chronic** conditions',
      'Several LTCs at once: **multi-morbidity**', 'Self-management: how a person manages their condition **by themselves** — an **ongoing process**'] },
  { id: 'ltc-sms', group: 'ltc', title: 'Self-management support', src: S(96) + ', slides 102 and 103', ask: 'What is self-management support, and what four components should its programmes have?',
    facts: ['Help given to people with LTCs to manage their health **day to day** — a **collaborative partnership**', '**Health literacy**', '**Cultural relevance**', '**Behaviour change**',
      'The **role of the health professional**'] },
  { id: 'ltc-nurse', group: 'ltc', title: 'The nurse’s role in self-management', src: S(100) + ' and slide 101', ask: 'Describe the nurse’s role in self-management support.',
    facts: ['Provide **information** for informed decisions and **goals**', 'Acknowledge people as **experts in their own lives**', 'Support them to attend self-management **groups**',
      'Ensure it is **culturally appropriate**', '**Follow up** after education; **refer** to support agencies'] },
  { id: 'dm-def', group: 'ltc', title: 'Diabetes mellitus', src: S(105), ask: 'What is diabetes mellitus, what causes it, and how is it treated?',
    facts: ['The body cannot control **blood sugar** — not enough **insulin**, or cells **resistant** to insulin', 'Caused by an **auto-immune** response, **genetic** &/or **lifestyle** factors',
      'Treated with **insulin**, **oral medications** &/or **diet**', 'An **annual** diabetes check matters'] },
  { id: 'dm-sx', group: 'ltc', title: 'Symptoms of diabetes', src: S(106), ask: 'List the symptoms of type 1 diabetes, and what type 2 can add.',
    facts: ['Extreme hunger (**polyphagia**)', 'Increased thirst (**polydipsia**)', 'Frequent urination (**polyuria**)', 'Unintentional **weight loss**, **blurry** vision, **tiredness**',
      'Type 2 adds: recurrent **infections** and sores **slow to heal**'] },
  { id: 'dm-bgl', group: 'ltc', title: 'Blood glucose', src: S(107), ask: 'Give the normal blood glucose range, and define hypoglycaemia and hyperglycaemia.',
    facts: ['Normal without diabetes: **4** – **7.5** mmol/L', 'Hypoglycaemia: less than **4** mmol/L', 'Hyperglycaemia: over **7.5** mmol/L **fasting**', '…or over **11.1** mmol/L two hours after **meals**'] },
  { id: 'rf', group: 'ltc', title: 'Rheumatic fever', src: S(109), ask: 'Describe rheumatic fever: its cause, who it affects, its symptoms and its ongoing management.',
    facts: ['A serious **auto-immune** disease after an untreated **Strep throat**', 'Mostly **children** & teenagers, more in **Māori** & **Pacific** young people; **crowded** living raises the risk',
      'Up to **5 weeks** after: **fever**, aching **joints**, fatigue, **jerky movements**, heart issues', '**Penicillin** injections every **28 days**, and antibiotic cover for **dental** visits',
      'Complication: **rheumatic heart disease**'] },
];

/* the lecturers' own quiz questions, recalled: [question id, key words in her key (default: all of it), group if not the quiz's] */
const recall = {
  group: { 210101: 'ltc', 210102: 'ltc', 210103: 'pop', 210104: 'process', 210105: 'selfcare', 210107: 'pop', 210108: 'prof', 210111: 'vitals',
    210115: 'docs', 210116: 'pop', 210118: 'ipc', 210119: 'consent', 210122: 'hha', 210126: 'process', 210129: 'ebp', 210130: 'literacy' },
  items: [
    ['q7e9739204f', 'Smoking cessation'], ['q072695a044', 'Multi-morbidity'], ['q80fcdb7639', ['Pain management', 'improving function']],
    ['q3e2b47899b', ['Prevent complications', 'quality of life']], ['qeaefe96546', ['Empowering', 'knowledge and skills']], ['q6bd7bd597b', 'wider social context'],
    ['q4410782285', 'Insulin'], ['q473cdfabe8', 'Type 1'], ['q1bfd5bdf57', '4 – 7.5'], ['q1b1d54d924', 'Diabetic Ketoacidosis'], ['qf88aafad1a', 'Auto-immune'],
    ['qf2a9105c5f', 'health literacy'], ['q4ad28157d3', ['socio-economic', 'worse health outcomes']], ['q075a9aad17', ['Tailoring', 'specific needs']],
    ['q6daba18d77', 'Assessment'], ['q289ca84c1a', ['Patient-centered', 'measurable']], ['q9c91cc09d0', ['Collecting', 'data']], ['q255edd796b', ['Carrying out', 'care plan']],
    ['q9b8968b86f', 'effective'], ['q74aee9b07f', ['cyclical', 'dynamic']],
    ['q9702dd9649', '7-9 hours'], ['q377035f21d', ['burnout', 'well-being']], ['qf7a2e166a8', ['recover', 'difficulties']],
    ['qec898a4a6d', 'Pertussis'], ['qf96179abb6', ['community', 'group']],
    ['qe3feaa6c27', 'Principle 8'], ['q074e22c267', 'Principle 1'], ['q046452abf6', 'Professional Boundaries'], ['q07c8d557d7', 'Social Media'], ['q5f51ef1ea0', 'patients I am caring for'],
    ['qbf660128ff', 'Systolic'], ['qa6f33bc332', 'Tachypnoea'], ['q563138aefc', 'Hypothermia'], ['q172ff478e3', 'Alert'], ['q305624afb4', '95-100%'], ['qee02f25285', 'full minute'],
    ['q79ba9e2699', ['recognition', 'response', 'deterioration']],
    ['q0432d7ba97', 'black'], ['q7f74ca9bcd', 'organisation'], ['q121b023b40', 'plan'], ['q11b6c61d2a', 'cyanosis'], ['qe2f2da8942', ['line through', 'initial', 'error']],
    ['q986f68bb3c', ['dated', 'timed', 'signed']],
    ['q6ec6abb481', ['populations', 'size', 'structure', 'distribution']], ['qfb897a94b1', ['distribution', 'determinants']], ['q639b3e3e23', 'Primordial'],
    ['qbd13361d62', 'Tertiary'], ['qc4874d2002', 'Primary'],
    ['qff2a877957', 'physiological functioning', 'vitals'], ['qa0492d6e0d', 'blood pressure', 'vitals'], ['q8816381054', 'apnoea', 'vitals'], ['qd6d90b6ffa', 'pyrexia', 'vitals'],
    ['qad997d12b9', 'respirations', 'vitals'], ['qeae5410d46', 'bradycardia', 'vitals'], ['q994196da57', 'hyperglycaemia', 'ltc'],
    ['qfb2721eac7', ['competent communication', 'emotional intelligence'], 'prof'], ['q91e134d683', 'body fluids', 'ipc'],
    ['q842960826a', 'Hand hygiene'], ['q6023126e44', 'Contact precautions'], ['qd57ffd0d23', 'Airborne precautions'], ['q0aa6aa917d', 'chain of infection'],
    ['q45488dca8e', ['Gown', 'mask', 'eye protection', 'gloves']], ['qdefb3c9a0b', 'protect healthcare workers'],
    ['q45d0e2532e', '16'], ['q71a8fd998e', 'performing the procedure'], ['qa319a4a09a', 'professional interpreter'], ['q0e51ff3d70', ['Respect', 'stop', 'notify the prescriber']],
    ['qad2ae8b5a1', 'legal guardian'],
    ['q5b005466c9', 'Dyspnoea', 'vitals'], ['qb2b6a827b1', 'client', 'process'], ['qcffd8b9722', 'Chronic', 'ltc'], ['q9d1b90cdc4', ['Assess', 'pain scale'], 'hha'],
    ['q2381faec83', ['scope of practice', 'RN preceptor'], 'prof'], ['qa783920b38', 'legal requirements', 'docs'],
    ['q88d812e2c1', ['physical', 'psychological', 'social', 'spiritual']], ['q4b2c46dca4', 'Secondary'], ['q8ecf36cb0e', ['Vital signs', 'Falls risk']],
    ['q03c2cd09f9', 'Acute pain'], ['qc82aa23c6d', 'North American Nursing Diagnosis'],
    ['qf63e2e2ccf', '100', 'vitals'], ['qc779818192', 'Hand hygiene', 'ipc'], ['qe99d0c142a', 'Assessment', 'hha'], ['q999b7f8523', 'Advocate', 'prof'],
    ['q7963e3d7a4', 'Pae Ora', 'pop'], ['q668732d107', 'health equity', 'pop'], ['qb8e891016a', 'Every time', 'hha'], ['q3bdc09c2d6', ['Decline', 'scope of practice'], 'prof'],
    ['qb4e77ec896', 'patient outcomes'], ['q97beff903a', 'clinical question'], ['qc620d35fa9', 'Systematic reviews'], ['q88cbcd43a9', 'Cochrane'],
    ['q46d0f0adbf', ['validity', 'reliability']], ['qacad8172c7', 'clinical experience'],
    ['qa477254180', 'Play therapy'], ['qad880fc739', ['understand', 'use health information']], ['qdb7b1847b9', ['repeat back', 'confirm']], ['q38c07beaf7', 'teach-back'],
  ],
};

/* the tool's written questions: their own group, last in the queue */
const writtenGroup = Object.fromEntries(['a-cna', 'a-tikanga', 'a-pain', 'a-fcc', 'a-nzhs', 'a-discharge', 'a-tus', 'a-roles', 'a-rf', 'a-ltc', 'a-inject', 'a-phc', 'a-screen',
  'w-care', 'w-clin', 'w-pop', 'w-prof'].map(q => [q, 'tool']));

/* VERBATIM — the ladder (27 Oct 2026, his call: only verbatim material stays on the HS2-style ladder; the rest is cards).
   The lecturers' own written questions from the Module 11 video quiz "Te Tiriti, Māori Health, Kawa Whakaruruhau,
   Cultural Safety" (Canvas quiz 213107; Canvas publishes no answers), each answered in the speaker's own words from the
   Nursing Council's video series, by timestamp. Only the questions on video 3 (Dean Cowles, "Moving beyond competence to
   safety", vimeo.com/1180647014) are answered so far: videos 2, 4, 5 and 7 are unlisted and were not found. Q5
   (wairuatanga) sits under video 2 in the quiz; it is answered from Dean's definition in video 3. Q1 asks for your own
   view before watching, so it has no answer to learn. Question wording is the quiz's, typos and all. */
const V3 = 'Nursing Council video 3, “Moving beyond competence to safety” (Dean Cowles, Ngāti Awa), vimeo.com/1180647014';
const verbatim = [
  { id: 'tt-wairua', group: 'tiriti', title: 'Wairuatanga', src: V3 + ' [04:53–05:31]', ask: 'What is \'wairuatanga\'',
    facts: ['The **unwritten fourth element** of Te Tiriti — not in its text, but threaded throughout', 'It refers to **holistic health**',
      'It brings in the **spiritual dimension** of hauora — health and wellbeing'] },
  { id: 'tt-pou1', group: 'tiriti', title: 'The purpose of Pou 1', src: V3 + ' [01:16–01:40]', ask: 'According to Dean, what is the purpose of Pou 1: Maori Health',
    facts: ['It ensures registered nurses are **advocating** for **equitable** care that is **culturally safe**',
      'Nurses demonstrate Kawa Whakaruruhau by addressing **power imbalances** and working **collaboratively** with Māori'] },
  { id: 'tt-epitome', group: 'tiriti', title: 'The epitome of kawa whakaruruhau', src: V3 + ' [01:40–02:02]', ask: 'What does the speaker say is "the epitomy of kawa whakaruruhau"?',
    facts: ['The nursing profession is called to **actively resist** and **dismantle** any potential **racist systems**', '…rather than remaining **passive** or **complicit**'] },
  { id: 'tt-articles', group: 'tiriti', title: 'Upholding the articles', src: V3 + ' [02:52–04:53]', ask: 'What examples are given of how we can uphold kawanatanga, tino rangatiratanga, oritetanga',
    facts: ['Kāwanatanga: use **Māori leadership** and **consultation** — the **hauora Māori** support service, **kaiāwhina**, **kaumātua**',
      'Tino rangatiratanga: **health literacy** — education that is easily understood', '…**wellness tools** developed in **partnership**, so they can manage their own health',
      '…incorporating **tikanga** and **te ao Māori**', 'Ōritetanga: **equity** — address and respond to the **determinants of health**'] },
];

export const REP = {
  name: 'Write the short answers',
  sub: 'The lecturers’ own written questions, verbatim · read it, type it, it comes back',
  groupWord: 'topics',
  how: 'Only verbatim material is here: the lecturers’ own written questions from the Module 11 Te Tiriti video quiz, answered in the speaker’s own words from the Nursing Council’s videos (four so far; the other videos have not been found). Everything else — Janine’s revision slides, the lecturers’ quiz questions recalled without their options, the tool’s short answers — is in Flashcards.',
  foot: 'Student-made revision from the INP lecturers’ quizzes and revision deck, and the Nursing Council’s video series. Not MIT material. Progress stays in this browser.',
  groups: [{ id: 'tiriti', title: 'Te Tiriti & Kawa Whakaruruhau (video quiz)', hue: 18 }, ...groups], verbatim, pieces, recall, writtenGroup,
  cardsName: 'Flashcards',
  cardsSub: 'Janine’s revision slides, the lecturers’ quiz answers and the tool’s short answers · Anki, stripped down',
  cardsHow: 'Lisa sets no practice short answers, so these come from the lecturers’ own material: <b>Janine’s revision deck</b> slide by slide (the question is the tool’s framing, every line of the answer is her slide), then <b>the lecturers’ own quiz questions</b> asked without their options, one card each, so you produce her key yourself. Last, in their own deck and tagged, the tool’s 26 short answers.',
};
