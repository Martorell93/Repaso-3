//Import clase Punto y triangulo
import { Punto } from "./punto";
import { Triangulo } from './triangulo';
console.log("-------------------------------------------------");
console.log("\n");

//Creación objetos tipo Punto
let punto1: Punto = new Punto(4,8);
console.log("Imprimo por consola las coordenadas del punto1:");
console.log(punto1.toString());
let punto2: Punto = new Punto(-2,-10);
console.log("Imprimo por consola las coordenadas del punto2:");
console.log(punto2.toString());
console.log("-------------------------------------------------");
console.log("\n");

//Distancia al origen
console.log("Distancia al origen del punto1: ");
console.log(punto1.distanciaAlOrigen());
console.log("Distancia al origen del punto2: ");
console.log(punto2.distanciaAlOrigen());
console.log("-------------------------------------------------");
console.log("\n");

//Disntacia entre los puntos
console.log("Distancia entre los puntos: punto1 y punto2 ");
console.log(punto1.calcularDistancia(punto2));
console.log("-------------------------------------------------");
console.log("\n");

//Calcular cuadrante de los puntos
console.log("El cuadrante del punto1 es: ");
console.log(punto1.calcularCuadrante());
console.log("El cuadrante del punto2 es: ");
console.log(punto2.calcularCuadrante());
console.log("-------------------------------------------------");
console.log("\n");

//Calcular el punto más cercano
console.log("Calcular el punto más cercano al punto1, dado un "
+ "array de puntos.");
console.log("Ejemplo: [(-2,-10); (0, 5); (-7,2); (1,-3)]");
let punto3: Punto = new Punto(0,5);
let punto4: Punto = new Punto(-7,2);
let punto5: Punto = new Punto(1,-3);
let puntos:Punto[] = [punto2, punto3, punto4, punto5];
console.log(punto1.calcularMasCercano(puntos));
console.log("-------------------------------------------------");
console.log("\n");

//Crear un objeto clase triangulo
console.log("Creación de objeto de la clase Triangulo: ");
console.log("Ejemplo: [(-2, -10); (0, 5); (4, 8)]")
let triangulo1:Triangulo = new Triangulo(punto2, punto3, punto1);
console.log("Calculamos la longuitud de cada lado en un array:");
console.log(triangulo1.calcularLongitudLados());
console.log("-------------------------------------------------");
console.log("\n");