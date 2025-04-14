/* 
Divide el texto en palabras individuales utilizando el método .split(' ') en la cadena.
Desliza una ventana que recorra cada palabra del arreglo y compara su longitud con la palabra más larga encontrada hasta ese momento.
Devuelve la palabra más larga al final del proceso.
*/
function findLongestWord(text) {
    // Dividir el texto en palabras
    const words = text.split(' ');

    let longestWords = []; // Cambiar a un arreglo para almacenar múltiples palabras
    let maxLength = 0; // Variable para almacenar la longitud máxima

    // Recorrer las palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
        // Si encontramos una palabra más larga, actualizamos el maxLength y limpiamos longestWords
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWords = [words[i]]; // Solo agregamos la nueva palabra más larga
        } 
        // Si la palabra tiene la misma longitud que la más larga, la agregamos al arreglo
        else if (words[i].length === maxLength) {
            longestWords.push(words[i]);
        }
    }

    // Retornar las palabras más largas
    return longestWords;
}


const text = "El algoritmo de Sliding Window (ventana deslizante) es una técnica utilizada en programación para resolver problemas que involucran subconjuntos continuos de datos, como arreglos o cadenas. ";
console.log(findLongestWord(text));