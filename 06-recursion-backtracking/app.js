// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función para buscar el regalo recursivamente
function findGift(gifts, giftName, index = 0) {
    // Caso base 1: Si llegamos al final de la lista y no encontramos el regalo
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base 2: Si encontramos el regalo en la lista
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva: Continuar buscando en el siguiente índice
    return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Lego está en la posición 3."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Camión no está en la lista."
