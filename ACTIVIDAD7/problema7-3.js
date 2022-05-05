function palindromo(word){
    var size = Number(word.length);

    if(word.length % 2 != 0){
        for(var i = 0; i< (size-1)/2; i++){
            if(word[i]==word[word.length-(i+1)]){
                
            }
            else{
                 return false;
            }
        }return true;
    }
    else{
        for(var i = 0; i< (word.length)/2; i++){
            if(word[i]===word[size-(i+1)]){
            }
            else{
                return false;
            }
        }return true;
    }
}
console.log(palindromo("madam"));
