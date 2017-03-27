export class Mytools{
    private num:number;

    constructor(a:number){
        this.num = a;
    }
    addNumers(a:number,b:number):number
    {
        return a+b+this.num;
    }
    static addNumersStatic(a:number,b:number):number
    {
        
        return a+Math.pow(2,8);
    }
}

export const totalnum:number=100;

export function add3Numbers(a:number,b:number,c:number):number
{
    return a+b+c;
}