//Import clase Punto
import { Punto } from "./punto";
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