// metodo push

//const frutas = ["banana", "frutilla"];
//const nuevaFruta = "pera";

//console.log(frutas);

//frutas.push(nuevaFruta);

//frutas.pop();

//console.log(frutas);

//metodo shift

//const frutaEliminada = frutas.shift();
//console.log(frutaEliminada);

const bebidas = "Sprite";
const array = ["Bianca", "Papas con cheddar", "Nuggets"];

function procesarPedidos(pedidos) {
  const cliente = pedidos.shift();
  pedidos.push(cliente);
  pedidos.unshift(bebidas);
  return pedidos;
}

console.log(procesarPedidos(array));
