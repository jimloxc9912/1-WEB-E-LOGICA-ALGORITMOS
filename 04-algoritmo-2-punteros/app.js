const guests = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function findPair(arr) {
    let firstPointer = 0;
    let secondPointer = 1;

    while (secondPointer < arr.length) {
        const currentGuest = arr[firstPointer];
        const nextGuest = arr[secondPointer];

        if (currentGuest[0] === nextGuest[0]) {
            return [currentGuest, nextGuest];
        }

        firstPointer++;
        secondPointer++;
    }

    return null;
}

console.log(findPair(guests));
// Expected output: ["Carlos", "Cecilia"]
