//variables booleanas
// let edadUsuario = parseInt(prompt("ingrese su edad")); //ejemplo 3
// let esMayorDeEdad = (edadUsuario > 17);
// console.log("el usuario es mayor de edad" + esMayorDeEdad);
// if (esMayorDeEdad) {
//     alert("usted es mayor de edad");
// } else {
//     alert("usted es menor de edad");
// }


//-----------------------------variables generales--------------------//
//precio de retratos
const portraitdrawingPrice = 200;
const oilportraitPrice = 450;
const portraitoilpastelPrice = 400;

//Amount
let portraitdrawingAmount = 200;
let oilportraitAmount = 450;
let portraitoilpastelAmount = 400;

//variables generales
let qty = 0;
let total = 0;

//---------------------------variables generales--------------------//
//---------------------------ciclo principal------------------------//
alert("Hola! gracias por visitarnos")
const option = parseInt(prompt("por favor seleccione el retrato que necesita: \n1.-Retrato al carboncillo \n2.-Retrato al oleo \n3.-retrato oleo pastel \n4.-Salir"));

if(option === 1){
    qty = parseInt(prompt("Ingrese cuantos retratos necesita"));
    if(qty <= portraitdrawingAmount){
        total = qty * portraitdrawingPrice;
        alert("el precio a pagar es: " + total);
        portraitdrawingAmount = portraitdrawingAmount - qty;
    }else{
        alert("No contamos con suficiente cantidades, solo tenemos:" + portraitdrawingAmount + "cantidad");
    }

}else if(option === 2){
    qty = parseInt(prompt("Ingrese cuantos retratos necesita"));
    if(qty <= oilportraitAmount){
        total = qty * oilportraitPrice;
        alert("el precio a pagar es: " + total);
        oilportraitAmount = oilportraitAmount - qty;
    }else{
        alert("No contamos con suficiente cantidades, solo tenemos:" + oilportraitAmount + "cantidad");
    }

}else if(option === 3){
    qty = parseInt(prompt("Ingrese cuantos retratos necesita"));
    if(qty <= portraitoilpastelAmount){
        total = qty * portraitoilpastelPrice;
        alert("el precio a pagar es: " + total);
        portraitoilpastelAmount = portraitoilpastelAmount - qty;
    }else{
        alert("No contamos con suficiente cantidades, solo tenemos:" + portraitoilpastelAmount + "cantidad");
    }

}else if(option === 4){
    alert("gracias por su visita");
}

alert("gracias , vuelva pronto")


