/* Everything that makes this sim INP rather than HS2 lives in this one file.
   template.html, build.mjs, stem-html.mjs, bind-images.mjs, resplice.mjs and
   content/explain.mjs are the shared Paper Sim pipeline: a new sim is
   template + bank + this file (EXAM-ROOM-SPEC §3a). Nothing here authors a question:
   the tool’s own questions live in content/authored/, one file per lecture. */

export const PATHS = {
  /* bank/questions.json is written by the shared parser, unchanged:
       HS2_EXPORT="<cap>" HS2_OUT="<repo>/bank" node hs2-test1/audit/parse-quizzes.mjs
     The capture dir is outside the repo (the graded pages are 1.4 MB each); override it
     with SIM_CAP when the estate lives somewhere else. */
  bank: './bank',
  cap: process.env.SIM_CAP || 'C:/Users/USER/Desktop/github/_inbox/INP Capture',
};

/* Canvas quiz id -> [group, display name]. One quiz = one exam topic in this course.
   Names are the Canvas titles, minus the word "Quiz". */
export const QUIZ = {
  210104: ['care', 'Nursing Process'],
  210126: ['care', 'Nursing Care Plans'],
  210122: ['care', 'Holistic Health Assessment'],
  210115: ['care', 'Clinical Documentation'],
  210111: ['clin', 'Vital Signs'],
  210118: ['clin', 'Infection Prevention & Control'],
  210102: ['clin', 'Diabetes'],
  210130: ['clin', 'Health Literacy & Patient Education'],
  210103: ['pop', 'Social Determinants of Health'],
  210107: ['pop', 'Population Health'],
  210116: ['pop', 'Epidemiology & Demography'],
  210119: ['prof', 'Informed Consent'],
  210129: ['prof', 'Evidence-based Practice'],
  210105: ['prof', 'Self-care in Nursing'],
  210108: ['prof', 'Knowledge Check (orientation)'],
};

/* deal-weight routing for mixed quizzes — this course has none */
export const ROUTE = [];

/* Questions that stay in the bank (Pick my rep, Learn) but are never DEALT into a mock
   paper. The Knowledge Check sits in the course's orientation module, and ten of its
   sixteen questions are about being a student here — attendance, extensions, academic
   integrity, online-exam rules, netiquette — not nursing practice. The six that ARE
   nursing content (professional values, health-information privacy, the NZNO social media
   guideline, the NCNZ Code of Conduct principles, the Professional Boundaries guideline)
   are dealt like any other. Read by hand; matched by quiz + stem prefix; a stale entry
   fails the build. */
export const NO_MOCK = [
  { quiz: '210108', k: 'question two ' },       // attendance expectation
  { quiz: '210108', k: 'question three ' },     // applying for an extension
  { quiz: '210108', k: 'question five ' },      // academic integrity values
  { quiz: '210108', k: 'question six ' },       // plagiarism
  { quiz: '210108', k: 'question seven ' },     // misconduct (typed blanks)
  { quiz: '210108', k: 'question eight ' },     // translator app in an online exam
  { quiz: '210108', k: 'question nine ' },      // music in an online exam
  { quiz: '210108', k: 'question twleve ' },    // netiquette dropdowns (the quiz's own spelling)
  { quiz: '210108', k: 'question thirteen ' },  // replying to course email
  { quiz: '210108', k: 'question sixteen ' },   // online communication dropdowns
];

export const EXCLUDE = [];
export const NO_IMAGE_OK = [];

export const META = {
  id: 'inp-final',
  prefix: 'inpf.',
  title: 'INP Final · Paper Sim',
  h1: 'INP Final exam · Paper Sim',
  /* the home title card, header stripe and tab icon: what tells the four Paper Sims apart */
  tool: { kick: 'Intro to Nursing Practice · 722.556', name: 'INP Final exam', sub: '40 multi-choice + 15 short answers · 160 min', icon: '🩺', hue: '#16a34a' },
  short: 'INP Paper Sim',
  paper: 'Introduction to Nursing Practice',
  bankOf: 'the INP lecturers’',          // "dealt from … whole question bank"
  who: 'the INP lecturers',              // "Model answers are the tool’s, not …’s"
  aiCtx: 'I’m a first-year nursing student in New Zealand sitting the final exam for Introduction to Nursing Practice (40 multiple-choice + 15 short-answer questions).',
  /* moved 2 Oct 2026 from Wed 4 Nov 1300-1540: the Canvas calendar event "Final Exam" is Mon 2 Nov 08:00–16:00, rooms
     214, 215 & 314, and the Semester Timetable page (week 15) says "Mon 2/November: 0800-1600 - x2 sittings". Neither
     gives which sitting a student is in or how long one runs. */
  sitting: { what: 'the INP final', date: '2026-11-02', when: 'Mon 2 Nov · one of two sittings between 8 am and 4 pm, rooms 214, 215 and 314 (sitting times not published yet)', cohortClose: null },
  /* the real paper: "Final Exam - 40 Multi-Choice Questions + 15 Short-Answer Questions", 50% (course syllabus, read
     12 Oct 2026; it read "60 Multi-Choice Questions + 10 Short-Answer Questions" in the 5 Aug extract, and the mock
     dealt 60 + 10 until 12 Oct). 160 min = the OLD 1300-1540 slot on the Semester Timetable page, kept as the mock's
     timer because no length has been published for the new sittings. */
  shape: { closed: 40, saq: 15, minutes: 160, mini: 12 },
  shapeNote: 'A full mock here is <b>40 multi-choice + 15 short answers</b> — the shape the course syllabus gives now (until October it said 60 + 10, and this mock dealt that until 12 Oct). It is timed <b>160 minutes</b>, the length of the old 1:00–3:40 pm slot: no length has been published for the two sittings on Mon 2 Nov, so treat the timer as a guide. The multi-choice are dealt mostly from the lecturers’ Canvas quizzes, plus some this tool wrote for lectures that have no quiz. <b>All fifteen short answers are this tool’s</b>, written from the lecture decks — Canvas has no written questions. The marks per short answer have not been published; here each is worth 2–6, one mark per point in its model answer.',
  sys: {
    care: 'Nursing process & assessment',
    clin: 'Clinical knowledge',
    pop: 'Population health & equity',
    prof: 'Professional & legal',
  },
  sysShort: { care: 'Process', clin: 'Clinical', pop: 'Population', prof: 'Professional' },
  hue: { care: 28, clin: 158, pop: 268, prof: 210 },
  playlist: null,
  refLbl: { slide: 'Their slide', her: 'Their notes', course: 'Course file', patton: 'Textbook' },
  help: {
    what: 'Every practice quiz posted on Canvas for <b>Introduction to Nursing Practice</b>, unlocked: sit them as often as you like, marked instantly — or let the tool deal you mixed mock papers from the whole bank. The final is <b>Mon 2 Nov 2026 · one of two sittings between 8 am and 4 pm · rooms 214, 215 &amp; 314 · 40 multi-choice + 15 short answers · 50% of the paper</b> (course syllabus, Canvas calendar and timetable). Which sitting you are in, and how long it runs, are not published yet — the full mock keeps the old 1:00–3:40 pm slot’s 160 minutes. The syllabus said 60 + 10 until October; the mocks here changed to 40 + 15 on 12 Oct.',
    groups: 'The four groups (Process · Clinical · Population · Professional) are <b>this tool’s sorting</b> of the 15 quizzes, so a mock can be dealt in proportion and you can drill one area. The course itself runs by week, not by theme. One quiz = one lecture topic.',
    held: '<b>The lecturers’ quizzes cover 14 of the course’s 26 lectures.</b> Eight taught lectures with <b>no Canvas quiz</b> — Community Needs Assessment, Tikanga &amp; Kawa Whakaruruhau, Pain Assessment, Family-centred Care, NZ Health Strategy, Discharge Planning, Therapeutic Use of Self, Roles of Nurses — now have questions <b>written by this tool from their lecture decks</b> (the rows ending “the tool’s questions”), each naming its slide. They are a careful reading of the deck, not the lecturers’ wording. <b>Still not covered:</b> Rheumatic Fever and Long-term Conditions — both taught, both decks on Canvas now (20 Sep and 9 Oct), no quiz, and no questions written here from them yet — and two lectures still to come: Primary Health Care &amp; Health Promotion (14 Oct), Health Screening &amp; Standards of Competence (20 Oct). All four are on the lecturers’ Exam Content list, and this bank cannot test them yet.',
    authored: '<b>Every row ending “the tool’s questions” was written by this tool, not the lecturers</b>: multi-choice and short-answer questions for the eight taught lectures that have no Canvas quiz, and a short-answer section for the quizzed topics — because the real paper has fifteen short answers and Canvas has none. Each one is labelled as the tool’s and names the deck and slide it was written from. Marks per short answer are the tool’s (one per point in the model answer); the course has not published them. ',
  },
  focusCopy: {
    intro: 'One row per lecture — all 26, plus the orientation Knowledge Check. Open a row for what you must be able to DO, how the lecturers’ own quiz asks it, and where it stops. Tick it when you can do it cold. <b>📌 on the exam themes list</b> marks a row the lecturers’ Exam Content page names; open the row for their exact words. <b>Four rows have no questions behind them yet</b>: Rheumatic Fever and Long-term Conditions (taught, decks on Canvas, nothing written from them here yet) and two lectures still to come (14 and 20 Oct).',
    how: '<b>This is not a marks ranking, and it says so.</b> The lecturers’ quizzes give every lecture 8–14 marks, so the bank cannot separate the topics. On 8 Oct the lecturers posted an <b>Exam Content</b> page: 29 exam themes in one flat list, no order, no weighting. It names <b>26 of the 27 rows here — every lecture</b>; only the orientation Knowledge Check is missing. So it tells you what is examinable, not what is worth most, and it ranks nothing on its own. What it did change: Self-care and Roles of Nurses moved up out of the bottom band, and it names things <b>no question here asks yet</b> — injections, wound assessment, scope of practice, the upstream/midstream/downstream model — each said on its row. The syllabus gives the paper as 40 multi-choice + 15 short answers, assessing learning outcomes 1–4. So the top band rests on the only emphasis on record — <b>a topic a learning outcome names outright, whose content also comes back in other lectures</b>. The middle band is everything else examinable, including the eight lectures whose only questions are this tool’s (⚠ no quiz exists). <b>The band above all of them is empty on purpose</b>: it fills from Revision One (Fri 23 Oct) and Revision Two (Tue 27 Oct) — whatever is named there outranks this whole list. Every count on a row is made by the build from the bank, and the build fails unless each of the bank’s questions sits in exactly one row.',
    sources: 'the 15 Canvas quizzes (153 questions, every stem read), the 22 lecture decks, the course syllabus (learning outcomes and exam shape), the lecturers’ Exam Content page (8 Oct) and the Canvas timetable.',
    t1w: 'A learning outcome names these outright, and their content comes back in other lectures — the only emphasis the course has put on record so far.',
    t3w: 'Thin, or about being a student rather than nursing practice. Read once, then leave.',
    /* a row's `crit` = the exact wording of the Exam Content page's theme(s) it covers, plus what the bank lacks */
    critLbl: 'Exam Content page',
    flagn: {
      LO1: 'LO1 · nursing process + Te Tiriti', LO2: 'LO2 · determinants & inequities',
      LO3: 'LO3 · evidence & assessment skills', LO4: 'LO4 · communication',
      X: 'comes back in other lectures',
      EC: 'on the exam themes list',
    },
  },
};
