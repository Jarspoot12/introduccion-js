var number = Number(prompt("Digite un número"));
var list = [];
for(var i = 1; i<=number; i++){
    if(i%2 != 0){
            list.push(i);
    }
}
console.log(list);