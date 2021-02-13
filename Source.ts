
export class ISource
{
    public ReourceName?:string;
}

export class ISourceRead extends ISource
{
    public OnSourceDataChanged?(v : any) : void;
}