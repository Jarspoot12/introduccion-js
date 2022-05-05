function conversion(scale){
    var scales = prompt("Digite las variables a convertir (Celsius a Fahrenheit o Fahrenheit a Celsius)");
    if(scales.toLowerCase() == "celsius a fahrenheit"){
        fahrenheit = 1.8*scale + 32;
        return fahrenheit;
    }
    else if(scales.toLowerCase() == "fahrenheit a celsius"){
        celsius = (scale - 32)/1.8;
        return celsius;
    }
}