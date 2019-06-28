// Seleccinar elementos del DOM y guardarlos en variables
let contador = document.querySelector(".counter");
const addCounter = document.querySelector(".add");
const lowerCounter = document.querySelector(".lower");

//contador de inicio para no obetener NaN al agregar o quitar a la cuenta
let cuenta = 0;

//Agregar listeners a los botones
addCounter.addEventListener("click", () => {
  //Agregar uno a la cuenta al hacer click en el boton agregar
  cuenta++;
  //Inyectar la cuenta actual al html
  contador.innerHTML = cuenta;
  // Si el contador es 0, mostrar la cuenta de color blanco
  if (contador.innerHTML == 0) {
    contador.style.color = "white";
  }
  // Si el contador es mayor que 0, mostrar la cuenta en color verde
  else if (cuenta > 0) {
    contador.style.color = "green";
  }
  //Animar el contador
  contador.animate([{ opacity: 0.2 }, { opacity: 1.0 }], {
    duration: 1000,
    fill: "forwards"
  });
});

//Listener para el boton de bajar la cuenta acual
lowerCounter.addEventListener("click", () => {
  // Restar uno a la cuenta al hacer click en el boton restar (lower count)
  cuenta--;
  //Inyectar la cuenta actual al HTML
  contador.innerHTML = cuenta;
  //Si la cuenta actual es 0, mostrar la cuenta en color blanco
  if (contador.innerHTML == 0) {
    contador.style.color = "white";
  }
  //Si la cuenta es menor que 0, mostrar la cuenta en color rojo
  else if (cuenta < 0) {
    contador.style.color = "red";
  }

  //Animar el contador
  contador.animate([{ opacity: 0.2 }, { opacity: 1.0 }], {
    duration: 500,
    fill: "forwards"
  });
});
