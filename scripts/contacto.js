
// function saveFormData(name, email, message) {
//     localStorage.setItem("formName", name);
//     localStorage.setItem("formEmail", email);
//     localStorage.setItem("formMessage", message);
// }


// function loadFormData() {
//     document.getElementById("name").value = localStorage.getItem("formName") || "";
//     document.getElementById("email").value = localStorage.getItem("formEmail") || "";
//     document.getElementById("message").value = localStorage.getItem("formMessage") || "";
// }

// window.onload = loadFormData;


// document.getElementById("submitBtn").addEventListener("click", function () {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (validateForm(name, email, message)) {
//         saveFormData(name, email, message);  // Guardar en localStorage
//         window.location.href = `gracias.html?name=${name}&email=${email}&message=${message}`;  // Redirigir a la página de agradecimiento
//     }
// });

// document.getElementById("name").addEventListener("input", validateName);
        
        // function validateName() {
        //     console.log("validateName")
        //     const nameInput = document.getElementById("name").value.trim();
        //     const errorMessage = document.getElementById("error-message");

        //     // Verificar si el nombre tiene menos de 3 palabras
        //     if (nameInput.split(" ").filter(word => word.length > 0).length < 3) {
        //         errorMessage.style.display = "block";
        //     } else {
        //         errorMessage.style.display = "none";
        //     }
            
        // }
       // Seleccionamos el input
    const input = document.getElementById('name');
    const errorDiv = document.getElementById('errorDiv');


    function verificarTexto() {
        console.log(input.value.length);
        if (input.value.length < 3) {
            errorDiv.style.display = 'block'; // Mostramos el mensaje de error
        } else {
            errorDiv.style.display = 'none'; // Ocultamos el mensaje de error
        }
    }

    // Agregamos los eventos de teclado
    input.addEventListener('keydown', function() {
        verificarTexto(); // Llamamos a la función de verificación
    });
    console.log(input)
    console.log("hola")
