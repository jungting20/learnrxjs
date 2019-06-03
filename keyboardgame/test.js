// RxJS v6+
//import { timer, combineLatest } from 'rxjs';

const { timer, combineLatest,of } = require('rxjs');
const timerOne$ = timer(1000, 10000)
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(10000, 4000);

combineLatest(
  timerOne$,
  timerTwo$,
  timerThree$,
  // combineLatest also takes an optional projection function
  (one, two, three) => {
    return `Timer One (Proj) Latest: ${one}, 
              Timer Two (Proj) Latest: ${two}, 
              Timer Three (Proj) Latest: ${three}`;
  }
).subscribe(console.log);