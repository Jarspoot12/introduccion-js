var list = [1];
var i = 1;
var numberUser = Number(prompt('Digite un número'));

do{
    if(i%5==0){
        list.push(i)
    }
    i++;
}while(i<=numberUser);
console.log(list);