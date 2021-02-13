import { Tag, tagSystem } from "./TagSystem";

export function InitializeSystemTags() : void
{

    let systemSecond = new Tag();
    systemSecond.name = "@ClockSecond";

    setInterval( () => { 
        systemSecond.onValueChanged.next(new Date().getSeconds());
    }, 1000);

    tagSystem.AddTag(systemSecond);
}