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
    public distanciaAlOrigen():number {
        let distanciaX : number = this.x - 0;
        let distanciaY : number = this.y - 0;
        let distancia:number = (distanciaX **2 + distanciaY**2)**(1/2);
        return distancia;
    }
    public calcularDistancia(otroPunto:Punto):number {
        let distanciaX:number = this.x - otroPunto.getX();
        let distanciaY:number = this.y - otroPunto.getY();
        let distancia:number = (distanciaX **2 + distanciaY**2)**(1/2);
        return distancia;
    }
}