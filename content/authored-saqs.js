/* Written questions THE TOOL wrote — the course's 15 Canvas quizzes contain no written
   question at all, and the final has ten. Every entry names the deck it was written from,
   and the page labels both the question and its model answer as the tool's, never the
   lecturers'. The questions live one file per lecture in content/authored/.
   Shape: { sys, quiz, quizName, q, steps:[one mark each], src, pts? }.
   The build fails on a missing source, fewer than two steps, or a repeated stem. */
import { LECTURES } from './authored/index.js';
export const AUTHORED_SAQS = LECTURES.flatMap(m => m.SAQS || []);
