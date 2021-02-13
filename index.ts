
import { CreatePVObject, ModifySource, PVObject, startAnimation, stopAnimation } from "./PVObject";
import { InitializeSystemTags } from "./SystemTags";

InitializeSystemTags();


// when double click
let t = CreatePVObject(PVObject);

console.log(t);

// when modify a read tag
ModifySource(t, "x", "@ClockSecond");

console.log(t);

startAnimation(t);

console.log(t);

setTimeout(() => {
    console.log( "go stop after 10 seconds");
    stopAnimation(t);
}, 10000);

