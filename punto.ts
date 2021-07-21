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
        let distanciaX:number = otroPunto.getX()- this.x;
        let distanciaY:number = otroPunto.getY()- this.y;
        let distancia:number = (distanciaX **2 + distanciaY**2)**(1/2);
        return distancia;
    }
    public calcularCuadrante():number {
        if (this.x === 0 && this.y === 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else {
            return 3;
        }
    }
    public calcularMasCercano(puntos:Punto[]):Punto {
        let puntoProximo: Punto = new Punto (0,0);
        let distancia:number = 10000000000;
        for (let i = 0; i < puntos.length; i++) {
            let distanciaPunto: number = this.calcularDistancia(puntos[i]);
            if (distanciaPunto < distancia) {
                distancia = distanciaPunto;
                puntoProximo.setX(puntos[i].getX());
                puntoProximo.setY(puntos[i].getY());
            }
        }
        return puntoProximo;
    }
}