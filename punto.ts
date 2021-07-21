//Declaración clase punto
export class Punto 
{
    //Declaración tipos de variables
    private x:number;
    private y:number;

    //Constructor
    constructor (x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }
    //Métodos
    public toString():string {
        let text:string = "(" + this.x + "," + this.y + ")";
        return text;
    }
    public getX():number {
        return this.x;
    }
    public getY():number {
        return this.y;
    }
    public setX(x:number) {
        this.x = x;
    }
    public setY(y:number) {
        this.y = y;
    }
}