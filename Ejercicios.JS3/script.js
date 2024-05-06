function agregarElemento() {
  let lista = document.getElementById("lista");
  let input = document.getElementById("textarea").value;
  const elementoLista = document.createElement("li");
  const button = document.createElement("button");

  elementoLista.textContent = input;
  button.textContent = "Borrar";
  lista.appendChild(elementoLista);
  elementoLista.appendChild(button);

  button.onclick = function () {
    lista.removeChild(elementoLista);
  };
}
