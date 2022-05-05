function findWord(text, word){
    if(text.indexOf(word) != -1){
        return true;
    }
    else{
        return false;
    }
}

console.log(findWord("espero esta cosa sirva", "esta"));