var autoplayInterval = 10000;
var autoplayTimer = null;
var autoplay = true;
var newIndex = 1;

if (autoplay) {
     autoplayTimer = setInterval(function() {
     newIndex++;
     navigateSlider();
   }, autoplayInterval);
}

function resetSlider() { 
  clearInterval(autoplayTimer);
}

function navigateSlider() { 
  const slide1 = document.getElementById('slide1');
  const slide2 = document.getElementById('slide2');
  const slide3 = document.getElementById('slide3');
  const slide4 = document.getElementById('slide4');
  if (newIndex == 1) {
    slide1.checked = true;
  } else if (newIndex == 2) {
    slide2.checked = true;
  } else if (newIndex == 3) {
    slide3.checked = true;
  } else if (newIndex == 4) {
    slide4.checked = true;
    newIndex = 0;
  }
}

// Obtener todos los botones
const buttons = document.querySelectorAll('#slider button');

// Obtener todos los inputs de radio
const radioButtons = document.querySelectorAll('#slider input[type="radio"]');

// Agregar un event listener a cada input de radio
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    // Ocultar todos los botones
    buttons.forEach(button => {
      button.style.display = 'none';
    });

    // Mostrar el botón correspondiente a la diapositiva activa
    const activeSlideId = radioButton.id; 
    const activeButtonId = `button-${activeSlideId.slice(-1)}`; 
    const activeButton = document.getElementById(activeButtonId);
    if (activeButton) {
      activeButton.style.display = 'block';
    }
  });
});