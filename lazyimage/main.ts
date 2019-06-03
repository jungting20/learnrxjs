import { from } from "rxjs";
import { map, tap, mergeMap, switchMap, toArray, bufferCount, buffer } from "rxjs/operators";
import { Image } from "./interfaces";
import { Images, $ } from "./namespace";



const renderimage = from(Images.fetch())
.pipe(
  map((imgs:Image[])=> $.el(Images.tmpl(imgs))),
  tap(a => document.getElementById("container").append(a)),
  switchMap(a => Images.loader($.all('img'))
  ),
);

renderimage.subscribe(a=>a);


