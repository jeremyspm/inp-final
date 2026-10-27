# INP · Paper Sim — Final exam

**Live: https://jeremyspm.github.io/inp-final/** · sister sim: [Pharm](https://jeremyspm.github.io/pharm-final/)

Every practice quiz posted on Canvas for **Introduction to Nursing Practice (722.556)**, unlocked:
sit them as often as you like, marked instantly, or let the tool deal mock papers from the whole
bank in the real paper's shape. Same format as [hs2-test2](https://jeremyspm.github.io/hs2-test2/).

The final: **Mon 2 Nov 2026 · two sittings between 08:00 and 16:00 · rooms 214, 215 & 314 ·
40 multi-choice + 15 short-answer · 50%** (moved on 2 Oct 2026 from Wed 4 Nov 1:00–3:40 pm; Canvas
calendar + Semester Timetable page; the syllabus said 60 + 10 until October, and the mock followed it
to 40 + 15 on 12 Oct). Which sitting a student is in, and how long it runs, are not published yet;
the mock keeps the old slot's **160 min**.

## What is in it

- **153 questions from 15 Canvas quizzes**, captured from graded attempts on 19 Sep 2026 (4 more quizzes on 27 Oct, below) and parsed
  by the estate's shared parser, unchanged. 153 of 153 keyed, 0 held. Stems, options and keys ship
  exactly as set — 146 multi-choice, 4 true/false, 3 blank questions.
- **120 questions written by this tool** (19 Sep 2026), every one labelled as the tool's on the page
  and naming the deck and slide it came from: **62 multi-choice + 23 short answers** for the eight
  taught lectures that have no Canvas quiz (one row each under Pick my rep), and a **35-question
  short-answer section** across the 14 quizzed topics (one row per group). They live one file per
  lecture in `content/authored/`; the build gates a missing source, fewer than two model steps, a
  bad key or a repeated stem. The full mock deals the real shape: 40 multi-choice + 15 written.
- **45 more written by this tool on 12 Oct 2026** (35 multi-choice + 10 short answers, every
  written one with a short version): **Rheumatic Fever** (`rf.js`, 12 + 4, from Janine's deck and
  the KidzFirst guest speaker's), **Long-term Conditions & Self-management** (`ltc.js`, 12 + 3, from
  the deck and the Te Kete Haerenga workbook posted with it) and **Injections** (`injections.js`,
  11 + 3, from the Clinical Learning Suite page "Inpatient Prep – Injections" — the Exam Content
  list names injections, no lecture teaches them). Key-longest 14% (5 of 35), key positions A–D 9/9/9/8.
  The two RF decks disagree on the acute antibiotic, so no question turns on it. Bank now 318.
- **38 more of the lecturers' questions on 27 Oct 2026**, from four Canvas quizzes the September
  capture missed because they sit in no Canvas module (found by listing the course's quizzes
  through the API): **Long-Term Health Conditions** (210101, 10) and **Practice Quizzes 1–3**
  (210120 · 210127 · 210117, 9 + 9 + 10). All keyed. The Practice Quizzes mix topics, so their QUIZ
  group is `mixed` (a "Practice" group under Pick my rep) and `ROUTE` deals each question under its
  lecture's group. The focus rows claim the same questions by stem (`PQ(...)` in `focus.js`), and the
  build checks that each one lands in exactly one row. This gives pain, family-centred care, the
  Health Strategy, therapeutic use of self, nurses' roles and student scope of practice their first
  lecturer questions. Bank now 356.
- **27 Oct 2026: the tool's 165 questions cut to 63.** Too much of the bank was the tool's. What is left is
  where the lecturers' quizzes say little:
  - **40 multi-choice**, rewritten in the lecturers' shape (their stems average 14 words and their options
    5; the tool's ran 18 and 9). Five each for the lectures their quizzes never ask (Community Needs
    Assessment, Tikanga, Discharge Planning, Rheumatic Fever, Injections), three each where the 27 Oct
    Practice Quizzes now ask one or two (Pain, Family-centred Care, the Health Strategy, Therapeutic Use
    of Self, Roles of Nurses), none for Long-term Conditions (the lecturers' own 10 cover it). Explanation
    and source lines are unchanged.
  - **23 short answers**, unchanged: one per lecture row above (plus one for Long-term Conditions) and
    three per written-section group, on the core exam themes (nursing process, data, documentation, normal
    ranges, precautions, hypoglycaemia, the determinants of health, Te Tiriti principles, prevention,
    consent, evidence-based practice). Lisa sets no practice short answers, and the real paper has 15, so
    the mock still needs these; each keeps its short version.
  - **Every deal serves the lecturers' questions first**: among equally-seen questions, a tool's question
    ranks after theirs (`pickN` in the shared template), in Learn, topic drills and both mocks. Bank now
    254: 191 theirs, 63 the tool's.
- **Still not in:** Rheumatic Fever (210112, one attempt only, not sat); the Module 11 Te Tiriti /
  Kawa Whakaruruhau video quiz (213107 captured, but its 14 written questions have no answers, so the
  build holds them all); and its second copy 213478, which has the same title and count and was not captured.
- **The focus checklist** (`content/focus.js`, 28 rows: the 26 lectures + injections + the
  orientation Knowledge Check): per row what you must be able to DO, how the lecturers' own quiz asks it, where it stops.
  Each row names where its questions come from and **the build counts them and fails unless every
  question sits in exactly one row**. It is NOT a marks ranking — the lecturers' quizzes are flat
  (8–14 marks a lecture) and nobody has pointed at anything yet — so the top band is "a learning
  outcome names it and it recurs", and the band above it stays empty until the revision lectures
  (23 and 27 Oct). Two rows (the lectures still to come) have nothing behind them and say so.
  **The lecturers' Exam Content page** (8 Oct 2026, 29 themes in one flat list) names 27 of the 28
  rows — all but the Knowledge Check. Each named row carries flag `EC` (chip "📌 on the exam themes
  list") and `crit` = the page's exact wording plus what this bank lacks for it (wound assessment,
  scope of practice, upstream/midstream/downstream: no question asks them). It ranks
  nothing, but it lifted Self-care and Roles of Nurses out of the bottom band.
- **Learn as you go** (Check marks each question in place), **mock tests** (mini 12 · full 40 + 15, dealt
  in proportion across four groups, least-seen first, misses first), **Pick my rep** (tick any
  quizzes and run them as one), a misses pile, and a score line per browser.
- The four groups — Process · Clinical · Population · Professional — are **this tool's sorting** of
  the 15 quizzes. The course runs by week, not by theme.

## What is not in it, said plainly

- **The lecturers' own short-answer questions.** Canvas has none. All fifteen written questions in a
  mock are the tool's, from the decks; the marks per question are unpublished, so each carries one
  mark per point in its model answer (2–6). Treat them as practice in the shape, not a forecast.
- **Two of the course's 26 lectures**, still to be taught: Primary Health Care & Health Promotion
  (14 Oct), Health Screening & Standards of Competence (20 Oct). Both are on the Exam Content list;
  their questions go in `content/authored/` once the decks are on Canvas. Ten other no-quiz
  lectures (and injections) are covered only by the tool's questions — not the lecturers' wording.
  Revision lectures 23 and 27 Oct are where the exam gets pointed at.
- Slide references under a question, and videos. Not built for this paper.
- Ten Knowledge Check questions about being a student here (attendance, extensions, online-exam
  rules, netiquette) stay under Pick my rep but are **never dealt into a mock** (`NO_MOCK`).

## Write the short answers (`rep.html`) and Flashcards (`cards.html`)

Lisa sets no practice short answers.

**The ladder holds the verbatim material only**: the lecturers' own written questions from the Module 11 video quiz
"Te Tiriti, Māori Health, Kawa Whakaruruhau, Cultural Safety" (Canvas quiz 213107, which publishes no answers),
answered in the speaker's own words from the Nursing Council's video series, by timestamp (`verbatim` in
`content/rep.js`). So far 4 of its 14: Q5–Q8, from video 3 (Dean Cowles, "Moving beyond competence to safety",
vimeo.com/1180647014). Videos 2, 4, 5 and 7 are unlisted on Vimeo and were not found; Q1 asks for your own view.

**Flashcards hold the rest, 173 cards in 13 decks**: Janine's revision deck (Revision Semester 2 2026) slide by slide in
her words, 53 cards (the question is the tool's framing, every answer line is her slide; upstream/midstream/downstream
is not in, its slides are pictures); 97 of the lecturers' own quiz questions asked without their options, one card
each, her key the answer (only keys that stand on their own — no "All of these", no "which is NOT"); and the tool's
23 short answers, last, in their own deck.

**Flashcards (`cards.html`, 27 Oct 2026)** — his call the same evening: "we only leave the verbatim things the way
HS2 is approached and the rest of it becomes straight up SRS cards, copy anki basically". A stripped-down Anki:
decks with New · Learn · Due counts, a deck overview, the study screen (Show answer, then Again · Hard · Good · Easy,
each showing its next interval; keys Space and 1–4), undo, bury, suspend, flag, mark, leeches (8 lapses suspends and
tags), a card browser with search and filters, stats (today, card counts, a 30-day forecast, reviews a day, young and
mature retention) and the options Anki has (new and review limits, learning and relearning steps, graduating and easy
intervals, starting ease, easy bonus, hard interval, interval modifier, maximum interval, leech threshold, new-card
order, the 4 am rollover), with export, import and reset. The scheduler is `srs-engine.mjs` — Anki's SM-2 with its v3
defaults, not FSRS — and `node cards.check.mjs` checks it against Anki's rules. The Decks screen says when the
new-card limit will not reach every card before the exam. Progress lives under `<prefix>srs.v1`.

**Toned down, the same night** ("no one needs to know or see those settings", "the CSS is way too much"): the
Flashcards page is now Decks only. Browse, Stats, Options and the bury, suspend, flag, mark and info buttons are off
the page (the engine still has them); Undo stays. With no Options tab, the new-card limit follows the exam date by
itself: enough a day to meet every card before the exam, never fewer than Anki's 20. The whole sim lost its loud skin
at the same time: no colour-gradient header (a line in the paper's colour under it instead), no giant-name banner
(a plain title), no drifting specks on featured rows, and a fainter page tint. `rep.html` is now **Write the short
answers**, and its back link goes to the hub's Write side.

**The split.** `rep.build.mjs` builds both pages from `content/rep.js`: a question whose question AND answer come from
the lecturer (or the source she set) goes on the ladder (`rep.html`); everything else becomes a card, one per question.
`cards.template.html`, `cards.js`, `cards.css`, `srs-engine.mjs` and `cards.check.mjs` are shared files
(`shared-check.mjs`). Do not edit the generated `rep.html` or `cards.html`.

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
