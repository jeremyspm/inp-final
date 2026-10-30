/* One file per lecture under content/authored/, each exporting MCQS and SAQS.
   Add a lecture = add its file + one line here.
   The lecture files cover lectures with NO Canvas quiz (eight from 19 Sep; Rheumatic Fever and
   Long-term Conditions added 12 Oct 2026 once their decks were on Canvas); injections.js covers
   the CLS "Inpatient Prep - Injections" page, which the Exam Content list names but no lecture
   teaches. Primary Health Care & Health Promotion (phc.js) and Health Screening (screening.js) were
   added 30 Oct 2026, once both lectures had been given. The four written-* files are the
   short-answer section for the quizzed topics. */
import * as cna from './cna.js';
import * as tikanga from './tikanga.js';
import * as pain from './pain.js';
import * as fcc from './fcc.js';
import * as nzhs from './nzhs.js';
import * as discharge from './discharge.js';
import * as tus from './tus.js';
import * as roles from './roles.js';
import * as rf from './rf.js';
import * as ltc from './ltc.js';
import * as injections from './injections.js';
import * as phc from './phc.js';
import * as screening from './screening.js';
import * as writtenCare from './written-care.js';
import * as writtenClin from './written-clin.js';
import * as writtenPop from './written-pop.js';
import * as writtenProf from './written-prof.js';

export const LECTURES = [cna, tikanga, pain, fcc, nzhs, discharge, tus, roles, rf, ltc, injections, phc, screening, writtenCare, writtenClin, writtenPop, writtenProf];
