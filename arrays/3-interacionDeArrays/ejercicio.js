//while
/*
let i = 0;
while (contador < array.leght) {
  console.log(array[contador]);
  i++;
}

// for

for (let i = 0; i < array.length; i++) {
  console.log([i], array);
}

// foreach
array.forEach((element) => {
  console.log(element);
});

//for
const lista = [1, 2, 3, 4, 5, 6, 7];

function sumandoPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.lenght; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  return suma;
}

console.log(sumandoPares(lista));*/

//while
const lista = [1, 2, 3, 4, 5, 6, 7];

function sumandoPares(numeros) {
  let suma = 0;
  let i = 0;
  while ( i < numeros.lenght; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  return suma;
}

console.log(sumandoPares(lista));