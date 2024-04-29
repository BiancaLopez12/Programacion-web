//Declarar funciones

//Funcion tradicicional

/*

function myFunction() {

}
*/

//Funcion flecha o arrow function
/*
const myFunction = () {

}*/





let contador = 0;

//Dato importante: siempre los nombres de las funciones siguen la nomenclatura camelcase
function incrementarNumero(){
  //  number = document.getElementById('number').textContent;
    contador = contador + 1;
    document.getElementById("number").textContent = contador;
}