function reversaoString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const inputString = "Target Sistemas";
const inputString1 = "Marcos AND Lima";
const inputString2 = "Obrigado pelo desafio, target sistemas!";

console.log(reversaoString(inputString));
console.log(reversaoString(inputString1));
console.log(reversaoString(inputString2));
