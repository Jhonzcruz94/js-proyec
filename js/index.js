debugger

let Welcome = alert("Bienvenidos a GulpShop")
let username =prompt ("Ingrese su nombre")
let edad = parseInt (prompt ("Ingresa tu edad"))

if (edad <18){
    alert(" eres menor de edad")
}
 
else(edad>=18);
    console.log ("Bienvenido", username)

let bebidas= prompt("cerveza,gaseosas,agua,jugos,aguas saborizadas,energizantes,vinos").toLowerCase()

switch (bebidas){
   case "cerveza":
    console.log("Ingrese su cerveza favorita")
     break

   case "gaseosas":
   console.log("Ingrese su gaseosa favorita")
    break

   case "agua":
    console.log("Ingrese su agua favorita")  
    break

    case"jugos":
    console.log("Ingrese sus jugos favoritos")
    break

    case"aguas saborizadas":
    console.log("Ingrese su agua saborizada favorita")
    break

    case "energizantes":
      console.log("Ingrese su energizante favorito")
      break
      
      case "vinos":
        console.log("Ingrese su vino favorito")
        break
}

let cerveza = prompt("corona,brahma,patagonia").toLowerCase()

   
switch (cerveza){
  case "corona":
    console.log("Solo tenemos porron 330 ml")
    break
  case"brahma":
    console.log("solo hasta 48 unidades")
    break

default: 
console.warn("No Disponible")
}

let corona = true
let precio = 300
let cantidad = parseInt(prompt("¿Cuantas desea agregar?"))
let resultado = precio * cantidad
   
while (corona){
    console.log("Resultado", precio * cantidad)
    corona= confirm("¿Desea agregar mas a su orden?")  
    if (corona){
        cantidad++
}
}

 alert("Monto final",+ resultado)