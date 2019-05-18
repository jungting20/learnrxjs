const { timer, combineLatest,of } = require('rxjs');


const a = timer(100,5000);


a.subscribe(c => console.log(c));