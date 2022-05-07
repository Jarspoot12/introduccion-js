//inicializar contador
let count = 0;
//traer elemento 
let value = document.getElementById("contador");
function increment(){
    count++;
    value.textContent = count;
}
function decrement(){
    count--;
    if(count<0){
        count=0;

    }
    value.textContent = count;
}
function reset(){
    count = 0;
    value.textContent = count;
}
