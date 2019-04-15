/*var linternaverde: string ="linterna verde";
var volcannegro: string ="volcannegro";
var lacosa : string ="la cosa";
console.log(lacosa);
console.log(linternaverde);
console.log(volcannegro);
 var imprimir:string="los heroes son "+lacosa+linternaverde+volcannegro
var impr : string=("los heroes son"+ $(lacosa)+ $(linternaverde) + $(volcannegro))


class Avenger {
nombre:string="sin nombre"
equipo:string= undefined;
NombreReal:string=undefined;
puedePelear:boolean;
peleasGanadas:number=0;
 constructor(nombre:string,equipo:string,NombreReal:string,puedePelear:boolean,peleasGanadas:number){
     this.nombre=nombre;
     this. equipo=equipo
     this.NombreReal=NombreReal;
     this.puedePelear=puedePelear;
     this.peleasGanadas=peleasGanadas;
 }
}
var antman: Avenger=new Avenger("antman","capitan","Scott lang", true , 1);
var falcon: Avenger=new Avenger("falcon","capitan","sam willson",true,1);
var BlackWidow: Avenger= new Avenger("Blac Widow","Iron man","natasha romanof",true,1)
console.log(Object.values(antman));
alert(Object.values(antman));
console.log(falcon);
console.log(BlackWidow);
var n,e,nr,pg;
var pp:number;*/


interface Xmen{
    nombre:string;
    poder:string;

}
function enviarMision(Xmen:{nombre:string,poder:string}){
    console.log("Enviando a: "+ Xmen.nombre + "con poderes de "+ Xmen.poder);
}

function enviarCuartel(Xmen:{nombre:string,poder:string}){
    console.log("Enviando al cuartel: "+ Xmen.nombre);
}

