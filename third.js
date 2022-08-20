// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step


function matchHouses(step) {
    if (step === 0) {
        return 0
    }
    return 5 * step + 1
}

console.log(matchHouses(87))