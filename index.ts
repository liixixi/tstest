import { startAnimation } from "./DontKnow";
import { CreatePVObject, ModifySource, PVObject } from "./PVObject";


// when double click
let t = CreatePVObject(PVObject);

console.log(t);

// when modify a read tag
ModifySource(t, "x", "tag1");

console.log(t);

startAnimation(t);

console.log(t);

