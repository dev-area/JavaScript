export class Question{
    num1:number;
    num2:number;
    res:number;
    op:OP;

    genOP(){
        let n=Math.floor(Math.random()*4 + 1);
        switch(n)
        {
            case 1: this.op = OP.ADD;
                    break;
            case 2: this.op = OP.SUB;
                    break;
            case 3: this.op = OP.MUL;
                    break;
            case 4: this.op = OP.DIV;
                    break;
                    
        }
    }
    getOPChar():string {
        switch(this.op)
        {
            case OP.ADD:
                    return '+';
            case OP.SUB:
                    return '-';
            case OP.MUL:
                    return '*';
            case OP.DIV:
                    return '/';
                    
                    
        }

    }
}

export enum OP{ ADD, SUB, MUL, DIV};