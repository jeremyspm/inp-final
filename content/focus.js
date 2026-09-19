/* focus.js — what to learn for the INP final, and how far. One row per lecture (26) plus the
 * orientation Knowledge Check, in the format hs2-test2 set (estate rule 2026-09-17).
 *
 * WHERE THE NUMBERS COME FROM. Nothing here is counted by hand: each row says where its
 * questions live (`from`), and build.mjs fills n / pts / qz / saq / na and FAILS unless every
 * one of the bank's questions lands in exactly one row. The four "Written section" quiz rows
 * hold short answers for several lectures each, so they are split by the deck each question
 * names as its source.
 *
 * WHY THE TIERS ARE NOT A MARKS RANKING. In HS2 the lecturer's bank is lumpy and she points at
 * things, so marks + her signals rank the topics. INP has neither yet: the lecturers' quizzes
 * give every lecture 8–14 marks, and as of 19 Sep 2026 nobody has said anything about the
 * exam beyond the syllabus line "60 multi-choice + 10 short answer, LO 1, 2, 3 & 4". So:
 *   tier 0  EMPTY ON PURPOSE. It fills from Revision One (Fri 23 Oct) and Revision Two
 *           (Tue 27 Oct) — whatever is named there outranks everything below.
 *   tier 1  a learning outcome names the topic outright AND its content comes back in other
 *           lectures (flag X) — the course's own emphasis, the only kind on record.
 *   tier 2  examinable, one lecture's worth. Includes every lecture with NO lecturer quiz
 *           (flag noquiz: the only questions are the tool's) and the three not taught yet.
 *   tier 3  thin, or about being a student rather than nursing practice.
 * flag letters: LO1–LO4 = the syllabus learning outcome the topic serves (the exam assesses
 * LO 1–4, not LO5) · X = returns in other lectures · noquiz · untaught.
 *
 * `done` = what you must be able to DO to tick it · `ask` = the shape the lecturers' own quiz
 * uses (read from all 153 captured questions) · `cap` = where it stops, with the evidence. */
const W = (quiz, deck) => ({ quiz: [quiz], src: new RegExp('· from ' + deck.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) });

export const FOCUS = [

/* ══════════ TIER 1 — a learning outcome names it, and it keeps coming back ══════════ */
{ id:'nursing-process', sys:'care', tier:1, t:'The nursing process (ADPIE)', flag:'LO1 X',
  from:[{ quiz:['210104'] }, W('w-care','The Nursing Process 2026 deck')],
  done:'Name the five steps in order and say what happens in each; tell subjective from objective data; recognise a nursing diagnosis (not a medical one) and write one in three parts — problem, related to, as evidenced by; say what makes a goal well written; say what evaluation decides (met / partially met / not met).',
  ask:'Ten single-best-answer questions at definition level: “which is the first step”, “which is an example of subjective data”, “which is a nursing diagnosis” (Risk for infection), “which is a measurable outcome” (walk 50 metres with assistance within 48 hours). No scenario longer than a line.',
  cap:'The quiz never asks you to WRITE a diagnosis or a goal — it asks you to recognise a good one. Writing them is the short-answer risk, and the Case Study assessment already made you do it. LO1 is literally “apply the nursing process”, and ADPIE returns in Care Plans, Holistic Assessment and Discharge Planning.',
  src:'The Nursing Process 2026 deck · Nursing Process quiz' },

{ id:'care-plans', sys:'care', tier:1, t:'Nursing care plans — diagnosis, SMART goal, interventions, rationale, evaluation', flag:'LO1 X',
  from:[{ quiz:['210126'] }, W('w-care','Nursing Care Plans 2026 deck')],
  done:'Say what a care plan is for; pick the correctly prioritised NANDA-I diagnosis for a patient (life-threatening → safety → patient-identified → nurse-identified); spell out SMART; tell a short-term from a long-term goal; tell a nurse-initiated (independent) from a collaborative intervention; say what goes in the evaluation column and the three verdicts.',
  ask:'One-line patients: fractured ribs → Acute pain; immobile → Risk for Impaired Skin Integrity; “which outcome shows the plan is working” (pain 2/10) or “needs revision” (frequent hypoglycaemia). Plus one piece of trivia — what NANDA stood for before 2002.',
  cap:'You are not asked to produce a full five-column plan in a multi-choice. Rationale with citations was for the assignment, not the exam. Know the columns and what belongs in each.',
  src:'Nursing Care Plans 2026 deck · Nursing Care Plans quiz' },

{ id:'hha', sys:'care', tier:1, t:'Holistic health assessment', flag:'LO1 LO3 X',
  from:[{ quiz:['210122'] }, W('w-care','Holistic Health Assessment 2026 deck')],
  done:'Define holism; list what each of the four aspects covers — physical, psychological, social (with cultural) and spiritual — and give a question you would ask under each; tell primary from secondary sources and subjective from objective data; know the two physical assessments the lecturers single out (vital signs, falls risk) and the Morse Fall Scale bands (<25 low · 25–45 moderate · >45 high).',
  ask:'“Which question assesses the PSYCHOLOGICAL aspect”, “which is an open-ended question”, “a family member tells you their mother is in pain — what source is this?” (secondary), “name two physical assessments done in a holistic assessment”.',
  cap:'The wound mnemonic T.I.M.E. and the Lily scenario are in the deck but nothing in the quiz touches them. It is the first stage of the nursing process — expect it to be asked as that.',
  src:'Holistic Health Assessment 2026 deck · Holistic Health Assessment quiz' },

{ id:'sdoh', sys:'pop', tier:1, t:'Social determinants of health, equity and the social gradient', flag:'LO2 X',
  from:[{ quiz:['210103'] }, W('w-pop','Social Determinants of Health deck')],
  done:'Define the social determinants; take any one — housing, food environment, work, education, transport, early childhood, stress, addiction, social exclusion — and say HOW it changes health; separate equity from equality and inequality from inequity; explain the social gradient; say why Te Tiriti makes equity an obligation.',
  ask:'“How does [stress / work / food / social exclusion / addiction] function as a determinant?” — the right answer is always the full causal sentence, the wrong ones are partial or blame the individual. Two straight equity questions and one on Te Tiriti. 14 questions: the biggest lecturer block in the bank.',
  cap:'No statistics are asked — not the 50% figure, not the disability numbers. The Rio Declaration is on a slide and nowhere in the quiz. LO2 is this lecture almost word for word, and equity-vs-equality comes back in Population Health, the Health Strategy and Community Needs Assessment.',
  src:'Social Determinants of Health deck · Social Determinants of Health quiz' },

{ id:'pop-health', sys:'pop', tier:1, t:'Population health, the five Te Tiriti principles and PROGRESS', flag:'LO1 LO2 X',
  from:[{ quiz:['210107'] }, W('w-pop','Population Health vs Personal Health deck')],
  done:'Tell population health from personal health and give a nursing intervention at each level; name public-health measures and what each is for (smokefree, water quality, vaccination, emergency planning); name the five Tribunal principles — tino rangatiratanga, mana taurite, whakamarumarutia, kōwhiringa, pātuitanga — with a nursing meaning for each; spell out PROGRESS.',
  ask:'The quiz stays on the population/personal distinction and on everyday public health — “why is water quality relevant”, “the objective of smokefree environments” — plus one recall item (whooping cough = pertussis).',
  cap:'The lecturers’ quiz asks NOTHING on the five principles or PROGRESS, yet the deck spends a third of its slides on them and says outright never to use the “three Ps”. That gap is why they are in the tool’s written section. The five principles return in Community Needs Assessment and Tikanga — learn them once, here.',
  src:'Population Health vs Personal Health deck · Population Health quiz' },

{ id:'ebp', sys:'prof', tier:1, t:'Evidence-based practice and nurse inquiry', flag:'LO3',
  from:[{ quiz:['210129'] }, W('w-prof','Evidence-based Practice 2026 deck')],
  done:'Define EBP as three things integrated — best research evidence, clinical expertise, patient values and preferences; give the five steps in order (question → find → appraise → implement → evaluate); rank the levels of evidence (systematic review at the top, expert opinion at the bottom); name a database (Cochrane, CINAHL, JBI); say what nurse inquiry is.',
  ask:'“Primary goal of EBP” (improve patient outcomes), “first step” (formulate a clinical question), “highest level of evidence” (systematic reviews), “which database”, “what is clinical expertise”. Two keys are “All of these”.',
  cap:'Gibbs and Kolb are pictured in the deck and never asked. No research-methods detail (RCT design, qualitative vs quantitative) is tested beyond the pyramid. LO3 opens with “discuss evidence-based practice”, which is why this small quiz sits in tier 1.',
  src:'Evidence-based Practice 2026 deck · Evidence-based Practice quiz' },

{ id:'documentation', sys:'care', tier:1, t:'Clinical documentation, ISBAR and SOAP', flag:'LO4 X',
  from:[{ quiz:['210115'] }, W('w-care','Clinical Documentation 2026 deck')],
  done:'Give the three reasons nurses document (legal, professional, communication); state the rules — black or blue pen, 24-hour time, sign with designation, no gaps, correct an error with ONE line plus “error” and initials, retrospective entries marked as such; say who owns the notes (the organisation); place a statement under the right ISBAR letter; say what each SOAP/SOAPIER letter stands for; give AI²DET.',
  ask:'Rule-recall: “what colour pen”, “why no gaps”, “who owns the notes”, “what do you do if you make a mistake”, “what is the P in SOAP”, and one applied item — which statement is the A in ISBAR (“temperature 39.3 and she is confused”). One on terminology: write cyanosis, not “blue lips”.',
  cap:'Abbreviation lists are in the deck; the quiz asks none. The legislation slide (HPCAA, HDC Act, Privacy Act) is not tested here — it is tested in the Knowledge Check and Informed Consent. ISBAR returns in Roles of Nurses with the same letters.',
  src:'Clinical Documentation 2026 deck · Clinical Documentation quiz' },

{ id:'health-literacy', sys:'clin', tier:1, t:'Health literacy and patient education — Ask · Build · Check, teach-back', flag:'LO4 X',
  from:[{ quiz:['210130'] }, W('w-clin','Health Literacy & Patient Education 2026 deck')],
  done:'Define health literacy at both levels (personal and organisational) and say it is not intelligence; give the consequences of low health literacy; run Ask–Build–Check on a patient and say what an “Ask” question sounds like; explain teach-back; adapt teaching to a child (play therapy) and to an adult; list practical steps — plain language, 3–5 key points, demonstrate, interpreter.',
  ask:'Half the quiz is small scenarios with the same right answer in different clothes: plain language + visual aids, demonstrate and have them show you, teach-back to confirm. One asks for an example of step A (“what do you already know about…?”), one on a six-year-old and an IV line (play therapy).',
  cap:'The Kōrero Mārama survey findings and the NZ framework’s three levels are on slides and not asked. Teach-back comes back in Discharge Planning and Tikanga as the same idea — one thing to learn, three places it scores.',
  src:'Health Literacy & Patient Education 2026 deck · Health Literacy quiz' },

/* ══════════ TIER 2 — examinable, one lecture's worth ══════════ */
{ id:'vitals', sys:'clin', tier:2, t:'Vital signs, the primary survey and the Early Warning Score', flag:'LO3',
  from:[{ quiz:['210111'] }, W('w-clin','Vital Signs 2026 deck')],
  done:'Run A–E and say what is assessed under each; give the normal adult ranges (SpO₂ 95–100%, BP 110–140 / 60–90, temperature 36.5–37.5 °C) and the named alterations — tachy/bradypnoea, tachy/bradycardia, hypo/hypertension, pyrexia >38, hypothermia <35; AVPU; signs of respiratory distress; the first Korotkoff sound; when to count for a full minute; what the EWS is for and what triggers escalation.',
  ask:'Terminology and ranges: “RR of 32 is called…”, “temperature below 35 is…”, “normal SpO₂”, “what does A in AVPU stand for”, “first Korotkoff sound represents…”, “irregular pulse — what do you do”. Three keys are “All of these”.',
  cap:'You already passed the practical. The exam side is words and numbers, not technique. The exact EWS scoring bands are not asked — only its purpose.',
  src:'Vital Signs 2026 deck · Vital Signs quiz' },

{ id:'ipc', sys:'clin', tier:2, t:'Infection prevention and control', flag:'LO3',
  from:[{ quiz:['210118'] }, W('w-clin','Infection Prevention & Control 2026 deck')],
  done:'Define an HAI (appears 48 hours or more after admission) and name the common four; give the six links of the chain of infection in order; define standard precautions and list them; match a condition to contact, droplet or airborne precautions and the PPE each needs; give the donning order; say why hand hygiene comes first.',
  ask:'Match-the-precaution vignettes — diarrhoea → contact; a child with vesicles, suspected chickenpox → airborne; “what PPE for droplet” — plus “most effective method” (hand hygiene), the donning order, and two “All of these”.',
  cap:'Spaulding’s classification, sterilisation methods and the named organisms are in the deck and absent from the quiz. Doffing order is on a slide; only DONNING is asked.',
  src:'Infection Prevention & Control 2026 deck · IPC quiz' },

{ id:'diabetes', sys:'clin', tier:2, t:'Diabetes mellitus — type 1 vs type 2, hypo- and hyperglycaemia, DKA', flag:'LO3',
  from:[{ quiz:['210102'] }, W('w-clin','Diabetes Mellitus deck')],
  done:'Say what insulin does and where it is made; contrast type 1 (auto-immune, no insulin, usually young) with type 2 (resistance, lifestyle and genetics, 90–95%); give the normal blood glucose (4–7.5 mmol/L), the hypo line (<4) and its causes and symptoms; recognise DKA from a vignette — high glucose, ketones, vomiting, abdominal pain; list risk factors and long-term complications.',
  ask:'Eight plain recall questions: a common symptom (frequent urination), the hormone, which type in children, the normal fasting range, the cause of type 1 — and one vignette (glucose 30, ketones, vomiting → DKA). Two keys are “All of these”.',
  cap:'Treatment of hyperglycaemia step by step, HbA1c detail and the annual-check list are slides the quiz ignores. This is the only disease-specific lecture with a quiz — Long-term Conditions (9 Oct) may widen it.',
  src:'Diabetes Mellitus deck · Diabetes quiz' },

{ id:'demo-epi', sys:'pop', tier:2, t:'Demography, epidemiology and the levels of prevention', flag:'LO2',
  from:[{ quiz:['210116'] }, W('w-pop','Demography & Epidemiology deck')],
  done:'Define demography and epidemiology and say why a nurse needs each; give the five processes demographers study; tell observational from experimental studies; draw the epidemiological triangle and break it at each corner; define epidemic and endemic; place any example at primordial, primary, secondary or tertiary prevention.',
  ask:'Definitions first (“what is demography”, “which best describes epidemiology”), then prevention levels by example — preventing risk factors → primordial; an insulin regime for someone with diabetes → tertiary; preventing disease occurring → primary. One key term (incidence rate).',
  cap:'None of the New Zealand figures (fertility 1.83, life expectancy, the 90+ projections) is asked. The Prevent / Screen / Treat hooks from the deck are all the quiz needs.',
  src:'Demography & Epidemiology deck · Epidemiology & Demography quiz' },

{ id:'consent', sys:'prof', tier:2, t:'Informed consent', flag:'LO1 LO4',
  from:[{ quiz:['210119'] }, W('w-prof','Informed consent 2026 deck')],
  done:'Define informed consent as a process; name its two legal roots (the Code of Rights, Right 7 · the NZ Bill of Rights Act, s 11); list what a patient must be told; say who can consent — 16 and over, a parent or guardian under 16, an EPOA or legal guardian for someone not competent; handle the three hard cases — emergency, surgery extended under anaesthetic, a patient under the Mental Health Act; give the nurse’s role (advocate, interpreter, call the team back, witness).',
  ask:'Short scenarios: limited English → professional interpreter; changes their mind mid-transfusion → stop and notify; dementia, not competent → legal guardian. Plus the age (16), who obtains consent (the person doing the procedure) and Gillick competence (true/false).',
  cap:'Gillick competence is asked in the quiz and is NOT on any slide in the deck — it is the one place the quiz reaches past the lecture, so read a paragraph on it. The NZNO duty-of-care slide is not tested.',
  src:'Informed consent 2026 deck · Informed Consent quiz' },

{ id:'pain', sys:'care', tier:2, t:'Pain assessment — OLDCARTS, types of pain, pain scales', flag:'LO3 noquiz',
  from:[{ quiz:['a-pain'] }],
  done:'Give McCaffery’s definition and what it means for assessment; separate nociceptive (somatic, visceral) from neuropathic pain by cause and by the words a patient uses; separate acute from chronic; list behavioural and physiological responses; run OLDCARTS letter by letter; choose a scale for the patient in front of you (numeric, Wong-Baker FACES, FLACC); say when pain is assessed.',
  ask:'Nobody knows — the lecturers have set no question on this lecture. The tool’s questions copy the shape of the quizzed lectures: definitions, “which type of pain is this” from a one-line description, and which letter of OLDCARTS a statement belongs under.',
  cap:'The second half of the deck — analgesic ladder, NSAIDs, opioids, routes — is pharmacology and belongs to the Pharm paper; the tool wrote nothing from it. The practice handout’s scenarios are the best rehearsal for a short answer.',
  src:'Pain Assessment BN2 deck + the Pain Assessment Practice Handout' },

{ id:'discharge', sys:'care', tier:2, t:'Discharge planning', flag:'LO1 noquiz X',
  from:[{ quiz:['a-discharge'] }],
  done:'Define discharge planning and say when it starts (at admission); give the four key elements; give the nurse’s role as coordinator; walk A–P–(prepare)–I–E for a patient; list what a written discharge summary contains; say why teach-back is a safety tool; work the Cyril Lear scenario — medicines, wound and District Nurse, mobility and falls, support at home.',
  ask:'Nobody knows — no lecturer question exists. The Cyril Lear scenario in the deck is the closest thing to a ready-made short answer in the whole course.',
  cap:'The bed-pressure slides (red days, acuity) are context, not content. Discharge planning is also one slide of Holistic Health Assessment, where it is said the same way.',
  src:'Discharge Planning Lecture deck' },

{ id:'fcc', sys:'care', tier:2, t:'Family-centred care and Whānau Ora', flag:'LO1 noquiz',
  from:[{ quiz:['a-fcc'] }],
  done:'Give the Stats NZ definition of family beside the nursing one (whoever the person says); name the four shared functions of families; give the three elements of facilitating family-centred care with an action each; say what a genogram and ecomap are for; state what may be shared with family under the Health Information Privacy Code; define family violence; describe Whānau Ora — who, when, how it is funded, what it does.',
  ask:'Nobody knows — no lecturer question exists. The deck ends on a Menti “recap and quiz” that was run live and not posted.',
  cap:'The history-of-the-family slides are scene-setting. Health Strategy Priority 1 appears here too — it is counted under the Health Strategy row.',
  src:'Family Centred Care deck' },

{ id:'cna', sys:'pop', tier:2, t:'Community needs assessment — McMurray’s framework', flag:'LO1 LO2 noquiz X',
  from:[{ quiz:['a-cna'] }],
  done:'Give the four steps in order — Engage, Map, Analyse, Empower — and what the nurse does in each; say who key community members are; tell primary from secondary data and place a windscreen survey; fill a SWOT grid and say which halves help and harm; apply a Te Tiriti principle to a finding.',
  ask:'Nobody knows — no lecturer question exists. You have already been assessed on this once: it is the framework behind the Community Profile presentation, and the lecture notes say ANALYSE is the step students skip.',
  cap:'The eight aspects of the community profile belong to the assignment brief, not the exam. The five Te Tiriti principles here are the same five as in Population Health.',
  src:'Community Needs Assessment Framework deck' },

{ id:'tikanga', sys:'prof', tier:2, t:'Tikanga best practice and Kawa Whakaruruhau (cultural safety)', flag:'LO1 LO4 noquiz X',
  from:[{ quiz:['a-tikanga'] }],
  done:'Define cultural safety and say who decides whether care was safe (the recipient); say why awareness, sensitivity and competence are not enough; define kawa, tikanga, tapu and noa; name the parts of the body that are tapu; give the principles of tikanga best practice with an action each — whakawhanaungatanga, manaakitanga, whānau-centred care, respect for tikanga and taonga, shared decision-making.',
  ask:'Nobody knows — no lecturer question exists. Several of the deck’s slides are pictures with no text, so the tool’s questions come only from the slides that carry words.',
  cap:'A short deck (23 slides). Cultural safety is also a Nursing Council pou and turns up in the Pharm paper’s legal lecture — same definition.',
  src:'Tikanga Best Practice and Kawa Whakaruruhau deck' },

{ id:'nzhs', sys:'pop', tier:2, t:'New Zealand Health Strategy 2023 and Pae Ora', flag:'LO2 noquiz X',
  from:[{ quiz:['a-nzhs'] }],
  done:'Say what the Pae Ora (Healthy Futures) Act 2022 changed; give the strategy’s two long-term goals; list the six priority areas and recognise any one from its description; separate equity from equality; name the partner strategies (Pae Tū, Te Mana Ola…); give the three priorities of the Government Policy Statement 2024–27 — access, timeliness, quality; say what equity in action looks like for a nurse.',
  ask:'Nobody knows — no lecturer question exists. The deck’s own learning outcomes are a list of things to “identify and describe” — 2 goals, 6 priorities — which is exactly how a short answer would be worded.',
  cap:'The politics of the Māori Health Authority’s disestablishment is context. The associated-strategies slides are a list nobody could be asked to reproduce.',
  src:'New Zealand Health Strategy 2023 deck' },

{ id:'tus', sys:'prof', tier:2, t:'Therapeutic use of self — communication and emotional intelligence', flag:'LO4 noquiz',
  from:[{ quiz:['a-tus'] }],
  done:'Say what professional agency is for; name Watson’s theory and its idea of a caring moment; separate responsive from assertive communication with an example; list verbal and non-verbal elements and barriers; name the five components of emotional intelligence; separate surface acting from deep acting and place both under self-regulation.',
  ask:'Nobody knows — no lecturer question exists. The deck’s role-plays (the frightened patient, the refused medication, the angry patient at the end of a shift) are scenario stems waiting to be used.',
  cap:'Watson’s ten carative factors are a picture on one slide — not reproducible, so not written into a question.',
  src:'Therapeutic Use of Self BN2 deck' },

{ id:'rheumatic-fever', sys:'clin', tier:2, t:'Rheumatic fever', flag:'noquiz',
  done:'Nothing can be listed yet: the lecture was taught, but as of the 19 Sep harvest there is no deck on Canvas and no quiz. If you have your own notes from it, they are the only source there is.',
  ask:'Unknown.',
  cap:'This row exists so that ticking every other row is not mistaken for covering the course. Check Canvas for the deck; when it appears the tool’s questions get written from it.',
  src:'No material on Canvas as of 19 Sep 2026' },

{ id:'ltc', sys:'clin', tier:2, t:'Long-term conditions', flag:'untaught',
  done:'Not taught yet — Fri 9 Oct, 2:30 pm, room 301 (moved from 7 Oct).',
  ask:'Unknown until the lecture and any quiz are posted.',
  cap:'Sits straight on top of Diabetes and Health Literacy (self-management), so those two rows are the preparation.',
  src:'Canvas timetable' },

{ id:'phc', sys:'pop', tier:2, t:'Primary health care and health promotion', flag:'untaught',
  done:'Not taught yet — Wed 14 Oct.',
  ask:'Unknown until the lecture and any quiz are posted.',
  cap:'The levels of prevention (Demography & Epidemiology) and the primary-care section of Roles of Nurses are the groundwork already in this bank.',
  src:'Canvas timetable' },

{ id:'screening', sys:'prof', tier:2, t:'Health screening and the Standards of Competence', flag:'untaught',
  done:'Not taught yet — Tue 20 Oct.',
  ask:'Unknown until the lecture and any quiz are posted.',
  cap:'Secondary prevention = screening (already in Demography & Epidemiology). The Nursing Council Standards of Competence (2025, six pou) are on Canvas now as a PDF.',
  src:'Canvas timetable' },

/* ══════════ TIER 3 — thin, or about being a student ══════════ */
{ id:'self-care', sys:'prof', tier:3, t:'Self-care, burnout and resilience', flag:'',
  from:[{ quiz:['210105'] }, W('w-prof','Self-care in nursing deck')],
  done:'Define stress, burnout, compassion fatigue, self-care and resilience; give two differences between burnout and compassion fatigue; name a physical and an emotional self-care activity; say who a struggling student turns to first (their preceptor).',
  ask:'Common-sense single answers — regular exercise, journalling, 7–9 hours’ sleep, prioritise with a schedule, “all of these” for the signs of burnout.',
  cap:'The quiz can be passed on general knowledge; only the burnout / compassion-fatigue distinction needs the deck. Eight marks, no learning outcome names it.',
  src:'Self-care in nursing deck · Self-care quiz' },

{ id:'roles', sys:'prof', tier:3, t:'Roles of nurses — aged care, primary, acute, mental health, informatics', flag:'noquiz X',
  from:[{ quiz:['a-roles'] }],
  done:'Define multi-morbidity, primary healthcare and acute care; name the three residential levels of aged care; say what recovery means in mental health and what interpersonal theory puts at the centre; run ISBAR; give an example of nursing informatics.',
  ask:'Nobody knows — no lecturer question exists. The deck is mostly videos and “a day in the life” timetables.',
  cap:'A survey lecture: a definition from each of five settings is as deep as it can go. ISBAR is the part that scores elsewhere (Clinical Documentation).',
  src:'Roles of Nurses deck' },

{ id:'knowledge-check', sys:'prof', tier:3, t:'Professional conduct basics (the orientation Knowledge Check)', flag:'',
  from:[{ quiz:['210108'] }],
  done:'Match Code of Conduct principles to their numbers (1 = dignity and individuality, 8 = public trust); name the NZNO social media guideline and the NCNZ Professional Boundaries guideline; state whose health information you may open on placement (only your own patients’).',
  ask:'“Which principle is this?” and “which guideline says this?” — six questions. The other ten in that quiz are about being a student here (attendance, extensions, plagiarism, online-exam rules) and are never dealt into a mock, so they are not counted on this row.',
  cap:'It sits in the orientation module, not the lecture series. The Code of Conduct’s eight principles are the only part with a life beyond this quiz — they return in the Pharm paper.',
  src:'Knowledge Check quiz (orientation module)' },
];
