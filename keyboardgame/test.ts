// RxJS v6+
import { interval, fromEvent, combineLatest, BehaviorSubject } from 'rxjs';
import { scan, startWith, map, takeWhile, switchMap,tap } from 'rxjs/operators';


const intervalSubject = new BehaviorSubject(600);
const $test = interval(1000).pipe(
    scan<number,number>((a:number,b:number) => a+b,0)
    )

$test.subscribe((a:any) => console.log(a));