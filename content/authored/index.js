/* One file per lecture under content/authored/, each exporting MCQS and SAQS.
   Add a lecture = add its file + one line here.
   The eight lecture files cover lectures with NO Canvas quiz; the four written-* files are
   the short-answer section for the quizzed topics, one file per group. */
import * as cna from './cna.js';
import * as tikanga from './tikanga.js';
import * as pain from './pain.js';
import * as fcc from './fcc.js';
import * as nzhs from './nzhs.js';
import * as discharge from './discharge.js';
import * as tus from './tus.js';
import * as roles from './roles.js';
import * as writtenCare from './written-care.js';
import * as writtenClin from './written-clin.js';
import * as writtenPop from './written-pop.js';
import * as writtenProf from './written-prof.js';

export const LECTURES = [cna, tikanga, pain, fcc, nzhs, discharge, tus, roles, writtenCare, writtenClin, writtenPop, writtenProf];
