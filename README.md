# INP · Paper Sim — Final exam

**Live: https://jeremyspm.github.io/inp-final/** · sister sim: [Pharm](https://jeremyspm.github.io/pharm-final/)

Every practice quiz posted on Canvas for **Introduction to Nursing Practice (722.556)**, unlocked:
sit them as often as you like, marked instantly, or let the tool deal mock papers from the whole
bank in the real paper's shape. Same format as [hs2-test2](https://jeremyspm.github.io/hs2-test2/).

The final: **Wed 4 Nov 2026 · 1:00–3:40 pm (160 min) · 60 multi-choice + 10 short-answer · 50%**
(course syllabus; times from the Canvas Semester Timetable page).

## What is in it

- **153 questions from 15 Canvas quizzes**, captured from graded attempts on 19 Sep 2026 and parsed
  by the estate's shared parser, unchanged. 153 of 153 keyed, 0 held. Stems, options and keys ship
  exactly as set — 146 multi-choice, 4 true/false, 3 blank questions.
- **120 questions written by this tool** (19 Sep 2026), every one labelled as the tool's on the page
  and naming the deck and slide it came from: **62 multi-choice + 23 short answers** for the eight
  taught lectures that have no Canvas quiz (one row each under Pick my rep), and a **35-question
  short-answer section** across the 14 quizzed topics (one row per group). They live one file per
  lecture in `content/authored/`; the build gates a missing source, fewer than two model steps, a
  bad key or a repeated stem. The full mock now deals the real shape: 60 multi-choice + 10 written.
- **The focus checklist** (`content/focus.js`, 27 rows: the 26 lectures + the orientation Knowledge
  Check): per row what you must be able to DO, how the lecturers' own quiz asks it, where it stops.
  Each row names where its questions come from and **the build counts them and fails unless every
  question sits in exactly one row**. It is NOT a marks ranking — the lecturers' quizzes are flat
  (8–14 marks a lecture) and nobody has pointed at anything yet — so the top band is "a learning
  outcome names it and it recurs", and the band above it stays empty until the revision lectures
  (23 and 27 Oct). Four rows have nothing behind them and say so.
- **Learn as you go** (Check marks each question in place), **mock tests** (mini 12 · full 60, dealt
  in proportion across four groups, least-seen first, misses first), **Pick my rep** (tick any
  quizzes and run them as one), a misses pile, and a score line per browser.
- The four groups — Process · Clinical · Population · Professional — are **this tool's sorting** of
  the 15 quizzes. The course runs by week, not by theme.

## What is not in it, said plainly

- **The lecturers' own short-answer questions.** Canvas has none. All ten written questions in a
  mock are the tool's, from the decks; the marks per question are unpublished, so each carries one
  mark per point in its model answer (2–6). Treat them as practice in the shape, not a forecast.
- **Four of the course's 26 lectures.** Rheumatic Fever was taught but has no deck on Canvas yet.
  Three are still to be taught: Long-term Conditions (Fri 9 Oct), Primary Health Care & Health
  Promotion (14 Oct), Health Screening & Standards of Competence (20 Oct). Examinable, invisible to
  this bank until their decks exist; their questions go in `content/authored/`. Eight other
  no-quiz lectures are covered only by the tool's questions — not the lecturers' wording.
  Revision lectures 23 and 27 Oct are where the exam gets pointed at.
- Slide references under a question, and videos. Not built for this paper.
- Ten Knowledge Check questions about being a student here (attendance, extensions, online-exam
  rules, netiquette) stay under Pick my rep but are **never dealt into a mock** (`NO_MOCK`).

## How it is built

This is the first sim built as **template + bank + `sim.config.mjs`**. The pipeline files are
shared, byte-identical, with every other META-driven sim (`node shared-check.mjs` proves it):

| file | role |
|---|---|
| `sim.config.mjs` | everything INP: paths, quiz map, groups, the real paper's shape, all page copy |
| `template.html` | the whole app; reads every name, date, group and prefix from `DATA.meta` |
| `build.mjs` | bank + `content/` → `index.html`; gates fail the build both ways |
| `stem-html.mjs` · `bind-images.mjs` | structured stems and images from the same captures |
| `resplice.mjs` | template-only change → re-splice onto the bank already in `index.html` |
| `content/` | authored layers (all labelled as the tool's on the page); `content/authored/` holds the tool's questions, one file per lecture |

```
# re-parse after new captures land in _inbox/INP Capture (INPCAP-<quizid>.html)
HS2_EXPORT="../_inbox/INP Capture" HS2_OUT=bank node ../hs2-test1/audit/parse-quizzes.mjs
node bind-images.mjs && node build.mjs      # a question changed
node resplice.mjs                           # only the template changed
node shared-check.mjs                       # the shared files still match the sibling sims
```

Two capture traps these SingleFile pages had, fixed in the shared readers: attributes are left
unquoted when the value allows (`src=data:…` with no `=` padding), and Canvas's hidden `blank_id`
spans are dropped — typed blanks are then placed by document order, and the build prints every
such sentence with its answers so a person reads it.

State lives in this browser only (`inpf.*`). Nothing is sent anywhere.
