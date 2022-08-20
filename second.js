// Given the position of two queens on a chess board, indicate whether or not they are positioned so that they can attack each other.
// Create two variables that initializes the position for two queens
// Create a function canAttack which determines whether based on two position the queens can attack each other or not
// *Position will be based on matrix system ie first position will be [0,0] and last will be [7,7]

let [x1,y1] = [1,1] //Queen 1 Position
let [x2,y2] = [3,3] //Queen 2 Position

function attack(x1,y1,x2,y2){
    //case 1 : if x-coordinate of both the queen's is same
    if(x1===x2){
        return true
    }
    //case 2 : if y-coordinate of both the queen's is same
    if(y1===y2){
        return true
    }
    //case 3: If the other queen is along it's diagonal
    if(Math.abs(x1-x2)===Math.abs(y1-y2)){
        return true
    }
    return false
}

console.log(attack(x1,y1,x2,y2))
