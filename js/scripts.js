
//DOM (Document Object Model) Se activa sin esperar a que se carguen completamente las hojas de estilo e imágenes. 
document.addEventListener('DOMContentLoaded', function() { // El evento DOMContentLoaded se dispara.
    console.log('DOM completamente cargado y analizado'); //Mensaje en consola
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // ERvío por defecto del formulario
        alert('Formulario enviado'); // Mensaje de  alerta indicando que el formulario fue enviado
        location.reload(); // Recarga la página para limpiar los campos del formulario
    });
});
