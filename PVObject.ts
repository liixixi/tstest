
import "reflect-metadata";
import {  } from "typescript";
import { ISource, ISourceRead } from "./Source";
import { tagSystem } from "./TagSystem";



export class PVObject
{
    // this is our requirement!!!
    @Reflect.metadata("binding", "read")
    public x : number = 0;

    public _mode: string = 'design';


    // magic begin

    public sources = new Map<string, ISource>();
}

export function CreatePVObject<T extends PVObject>(TCreator: new() => T) : T
{
    let obj : T = new TCreator();
    let keys = Object.keys(obj);
    keys.forEach( key => {
        let binding = Reflect.getMetadata("binding", obj, key);
        if (binding == 'read')
        {
            let s = new ISourceRead();
            s.OnSourceDataChanged = (v : any) : void => 
            {
                // we know we have the key!!!
                (obj as any)[key] = v;
                console.log(obj);
                console.log(key + " changed!");
            };
            obj.sources.set(key, s);
        }
    });
    return obj;
}

export function ModifySource(obj: PVObject, attributeName:string, sourceName:string) : boolean
{
    // check attribute exist and bindable before change

    let source = obj.sources.get(attributeName);
    if (source == undefined)
    {
        return false;
    }

    source.ReourceName = sourceName;

    return true;
}

export function startAnimation(obj :PVObject) : any
{
    obj.sources.forEach( source =>
    {
        let readSource =  source as ISourceRead;
        if (readSource.ReourceName)
        {
            var tag = tagSystem.GetTag(readSource.ReourceName);
            readSource.subscritpion = tag?.onValueChanged.subscribe( (v : any) => {
                if (readSource.OnSourceDataChanged)
                    readSource.OnSourceDataChanged(v);
            });
        }
    });
}

export function stopAnimation(obj :PVObject) : any
{
    obj.sources.forEach( source =>
    {
        let readSource =  source as ISourceRead;
        if (readSource.ReourceName)
        {
            if (readSource.subscritpion)
                readSource.subscritpion.unsubscribe();
        }
    });
}