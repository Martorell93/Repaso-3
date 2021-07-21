//Import clase Punto
import { Punto } from "./punto";

//Declaración clase Triangulo
export class Triangulo
{
    //Declaración de atributos
    private vertice1: Punto;
    private vertice2: Punto;
    private vertice3: Punto;

    //Constructor
    constructor (vertice1: Punto, vertice2: Punto,vertice3:Punto)
    {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }

    //Métodos
    public getVertice1():Punto {
        return this.vertice1;
    }
    public getVertice2():Punto {
        return this.vertice2;
    }
    public getVertice3():Punto {
        return this.vertice3;
    }
    public setVertice1(vertice1:Punto) {
        this.vertice1 = vertice1;
    }
    public setVertice2(vertice2:Punto) {
        this.vertice1 = vertice2;
    }
    public setVertice3(vertice3:Punto) {
        this.vertice3 = vertice3;
    }
    public calcularLongitudLados():number[] {
        let posiciones:number[] = [];
        let posicionX:number = this.vertice1.calcularDistancia(this.vertice2);
        let posicionY:number = this.vertice1.calcularDistancia(this.vertice3);
        let posicionZ:number = this.vertice2.calcularDistancia(this.vertice3);
        posiciones.push(posicionX);
        posiciones.push(posicionY);
        posiciones.push(posicionZ);
        return posiciones;
    }
}