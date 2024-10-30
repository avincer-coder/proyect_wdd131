// Función para obtener los datos desde la URL y mostrarlos
function showThankYouMessage() {
        const params = new URLSearchParams(window.location.search);
        document.getElementById("nombre").textContent = params.get("name");
        document.getElementById("correo").textContent = params.get("email");
        document.getElementById("mensaje").textContent = params.get("message");
    }
    
    // Ejecutar la función cuando la página cargue
    window.onload = showThankYouMessage;
    function actualizarContadorVisitas() {
        // Obtener el conteo actual del localStorage
        let contador = localStorage.getItem('contadorVisitas');

        // Si no hay contador, inicializarlo en 0
        if (!contador) {
            contador = 0;
        }

        // Convertir a número y aumentar el contador
        contador = parseInt(contador) + 1;

        // Guardar el nuevo valor en el localStorage
        localStorage.setItem('contadorVisitas', contador);

        // Mostrar el contador en la sección correspondiente
        document.getElementById('contadorVisitas').innerText = contador;
    }

    // Llamar a la función cuando se carga la página
    window.onload = actualizarContadorVisitas;