# INP · Paper Sim — Final exam

Every practice quiz posted on Canvas for **Introduction to Nursing Practice (722.556)**, unlocked:
sit them as often as you like, marked instantly, or let the tool deal mock papers from the whole
bank in the real paper's shape. Same format as [hs2-test2](https://jeremyspm.github.io/hs2-test2/).

The final: **Wed 4 Nov 2026 · 1:00–3:40 pm (160 min) · 60 multi-choice + 10 short-answer · 50%**
(course syllabus; times from the Canvas Semester Timetable page).

## What is in it

- **153 questions from 15 Canvas quizzes**, captured from graded attempts on 19 Sep 2026 and parsed
  by the estate's shared parser, unchanged. 153 of 153 keyed, 0 held. Stems, options and keys ship
  exactly as set — 146 multi-choice, 4 true/false, 3 blank questions.
- **Learn as you go** (Check marks each question in place), **mock tests** (mini 12 · full 60, dealt
  in proportion across four groups, least-seen first, misses first), **Pick my rep** (tick any
  quizzes and run them as one), a misses pile, and a score line per browser.
- The four groups — Process · Clinical · Population · Professional — are **this tool's sorting** of
  the 15 quizzes. The course runs by week, not by theme.

## What is not in it, said plainly

- **The 10 short-answer questions.** The Canvas quizzes contain no written question at all. The
  tool's own, each naming the deck it was written from, go in `content/authored-saqs.js`; the page
  labels them as the tool's. Until then the full mock is the multi-choice section, and says so.
- **The bank covers 14 of the course's 26 lectures.** Nine taught lectures have no quiz: Community
  Needs Assessment, Tikanga & Kawa Whakaruruhau, Pain Assessment, Family-centred Care, NZ Health
  Strategy, Discharge Planning, Therapeutic Use of Self (decks on disk), Rheumatic Fever, Roles of
  Nurses (16 Sep — not harvested yet). Three are still to be taught: Long-term Conditions (7 Oct),
  Primary Health Care & Health Promotion (14 Oct), Health Screening & Standards of Competence
  (20 Oct). Examinable, invisible to this bank; their questions go in `content/authored-*.js`.
  Revision lectures 23 and 27 Oct are where the exam gets pointed at.
- **The focus checklist** (what to learn, how far, per topic) — owed; every Paper Sim ships one.
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
| `content/` | authored layers (all labelled as the tool's on the page); most are empty for now |

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
