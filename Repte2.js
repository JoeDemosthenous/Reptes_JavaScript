//Escriu un programa que demani una frase i escrigui quants cops apareixen cadascuna de les vocals.
var frase = prompt("Por favor, escribe una frase en JavaScript:");


function contarVocales(frase) {
    // Convertir la frase a minúsculas para hacer la búsqueda de vocales insensible a mayúsculas/minúsculas
    frase = frase.toLowerCase();

    // Definir un objeto para almacenar el recuento de cada vocal
    var contadorVocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };

    // Recorrer cada letra de la frase
    for (var i = 0; i < frase.length; i++) {
        var letra = frase[i];
        // Verificar si la letra es una vocal y actualizar el contador correspondiente
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            contadorVocales[letra]++;
        }
    }

    // Imprimir los resultados
    console.log("Número de veces que aparece cada vocal:");
    console.log("A: " + contadorVocales['a']);
    console.log("E: " + contadorVocales['e']);
    console.log("I: " + contadorVocales['i']);
    console.log("O: " + contadorVocales['o']);
    console.log("U: " + contadorVocales['u']);
}

// Solicitar al usuario que ingrese una frase
var fraseUsuario = prompt("Por favor, ingresa una frase:");

// Llamar a la función contarVocales con la frase proporcionada por el usuario
contarVocales(fraseUsuario);
