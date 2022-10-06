function randomDec(low, high){
    return Math.random() * (high - low) + low;
}

function randomInt(low, high){
    return Math.floor(randomDec(low, high));
}

function randomArray(array){
    return array[randomInt(0, array.length)]
}