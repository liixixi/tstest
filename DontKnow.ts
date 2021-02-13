import { PVObject } from "./PVObject";
import { ISourceRead } from "./Source";

export function startAnimation(obj :PVObject) : any
{
    let keys = Object.keys(obj);
    console.log(keys);

    keys.forEach( key => {
        let binding = Reflect.getMetadata("binding", obj, key);
        if (binding == 'read')
        {
            let source = obj.sources.get(key);
            if (source == undefined)
                return;

            let readSource =  source as ISourceRead;
            if (readSource.ReourceName == "tag1")
            {
                setInterval( function(){
                    if (readSource.OnSourceDataChanged)
                        readSource.OnSourceDataChanged(new Date().getSeconds()); 
                }, 1000);
            }
        }
    });
}