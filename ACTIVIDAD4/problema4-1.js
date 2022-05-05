var numberUser = Number(prompt('Digite un número'));
var list = [1];
var i = 1;
while(i<=numberUser){
    if(i%5==0){
        list.push(i)
    }
    i++;
}
console.log(list);