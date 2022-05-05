
function sum(numbers){
    total = 0;
    for( let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;

}
console.log(sum([1, 2, 3, 4, 10, 11]));