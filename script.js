// NO TOCAR EL JAVASCRIPT

//si no hay conocimientos básicos solidos no tocar, puede provocar varios problemas en el código ya que es la parte más dificil y compleja de todas el JavaScript

// Inicializa Swiper
function carrusel () {
    var swiper = new Swiper('.swiper-container', {
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 3000, // Cambia de diapositiva cada 3 segundos
      },
  });
};

carrusel();

// Selecciona el botón de menú desplegable y su menú
function menú() {
  const dropdownButton = document.querySelector('.dropdown-toggle');
  const submenu = document.querySelector('.submenu');

  // Añade un evento 'click' al botón para mostrar/ocultar el menú
  dropdownButton.addEventListener('click', () => {
      submenu.classList.toggle('active');
  });
};

menú();


// contaminantes


// Calculadora de carbono 

function calcularHuella() {
  const transporte = document.getElementById("transporte").value;
  const consumoEnergia = parseFloat(document.getElementById("consumo-energia").value) || 0;
  const reciclaje = parseFloat(document.getElementById("reciclaje").value) || 0;
  
  // Realiza cálculos de huella de carbono según tus propias ecuaciones.
  // Estos son valores de ejemplo y deben reemplazarse con ecuaciones reales.
  let huellaCarbono = 0;
  if (transporte === "coche") {
      huellaCarbono += 2.0;
  } else if (transporte === "transporte-publico") {
      huellaCarbono += 0.5;
  } else if (transporte === "bicicleta") {
      huellaCarbono += 0.0;
  }
  huellaCarbono += consumoEnergia * 0.2;
  huellaCarbono -= reciclaje * 0.1;
  
  // Muestra el resultado en la página.
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Tu huella de carbono es de ${huellaCarbono.toFixed(2)} kg de CO2 al año.`;
}


function formularioContaminacion() {
    document.addEventListener("DOMContentLoaded", function () {
        const opinionForm = document.getElementById("opinionForm");
    
        opinionForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(opinionForm);
    
            // Crear un objeto para almacenar los datos
            const formDataObj = {};
            for (let [key, value] of formData.entries()) {
                formDataObj[key] = value;
            }
    
            // Enviar los datos al servidor (debes implementar un servidor para esta parte)
    
            // Ejemplo de cómo guardar los datos en un archivo de texto en el lado del servidor (usando Node.js)
            fetch("/guardar-datos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDataObj),
            })
            .then(response => response.text())
            .then(data => {
                alert("Datos guardados con éxito.");
                opinionForm.reset(); // Limpiar el formulario después de enviarlo
            })
            .catch(error => {
                console.error("Error al guardar los datos: " + error);
            });
        });
    });    
};

formularioContaminacion();

