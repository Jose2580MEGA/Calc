var numero = 0
var cadnumero = ''
var operacion = 1

 //1 es la suma
 //2 es la resta

function captura(numero){
cadnumero += numero
document.getElementById("resultado").value =  cadnumero
} 


function limpiar() {
    if (cadnumero.length>0 ) 
    {
        cadnumero=cadnumero.slice (0,-1)
    }
    
document.getElementById("resultado").value= cadnumero;

}

function limpiarTodo() {  
    cadnumero = '';
    numero = 0;
    operacion = 0;
    document.getElementById("resultado").value = ''
    

}

function Agregar(value) {

// Solo agrega el valor sin eliminar el contenido previo
cadnumero += value;
document.getElementById("resultado").value = cadnumero;


}

function calcular() {
    try {
        const result = eval(document.getElementById("resultado").value);
        document.getElementById("resultado").value = result;
        cadnumero = result.toString();  // Almacena el resultado para posibles cálculos futuros
    } catch (error) {
        document.getElementById("resultado").value = "Error";
        cadnumero = '';  // Resetea en caso de error
    }
}

// Función para agregar un efecto de "pulsar" cuando se presiona un botón
function animarBoton(button) {
    button.classList.add('boton-animado');

    // Remover la animación después de 150ms para que pueda aplicarse de nuevo
    setTimeout(() => {
        button.classList.remove('boton-animado');
    }, 150);
}

// Agrega un evento a todos los botones para animarlos
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        animarBoton(this);
    });
});