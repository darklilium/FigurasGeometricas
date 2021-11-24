//#Abres
console.group("asdasd");
//#Cierras
console.groupEnd();

console.group("Cuadrado");

const perimetroCuadrado = (ladoCuadrado) => {
    return ladoCuadrado*4;
}

const areaCuadrado = (ladoCuadrado) => {
    return ladoCuadrado*ladoCuadrado;
} 


console.group('Triangulo');

const perimetroTriangulo = (baseTriangulo, ladoTriangulo1, ladoTriangulo2) =>{
    console.log(baseTriangulo,ladoTriangulo1, ladoTriangulo2, "asd");
    return baseTriangulo + ladoTriangulo1 + ladoTriangulo2;
}

const areaTriangulo = () =>{
    return (baseTriangulo * alturaTriangulo) / 2;
} 



console.group('Circulo')

const PI = Math.PI;

//Circunferencia
const perimetroCirculo = (diametroCirculo) =>{
    return diametroCirculo*PI;
}


const areaCirculo = (radioCirculo) =>{
    return (radioCirculo*radioCirculo)*PI;
}


//
function calculoCuadrado(){
    let lado = document.getElementById("inputLadoCuadrado");
    let perimetro = document.getElementById("perimetroCuadradoValor");
    let area = document.getElementById("areaCuadradoValor");

    perimetro.value = perimetroCuadrado(lado.value)
    area.value = areaCuadrado(lado.value)
}



function calculoTriangulo(){
    let lado1 = parseInt(document.getElementById("inputLadoTriangulo1").value);
    let lado2 = parseInt(document.getElementById("inputLadoTriangulo2").value);
    let lado3 = parseInt(document.getElementById("inputLadoTriangulo3").value);
  
    let perimetro = document.getElementById("perimetroTrianguloValor");
    let area = document.getElementById("areaTrianguloValor");

    perimetro.value = perimetroTriangulo(lado1, lado2, lado3)
    
    //semi perimetro para calcular area del triangulo basado en sus lados
    //semi perimetro = (lado1+lado2+lado3) / 2
    //area es = sqrt(sp*(sp-lado1)*(sp-lado2)*(sp-lado3))

    let semiPerimetro = (lado1+lado2+lado3) / 2;
    
    let insideSqrt = semiPerimetro*((semiPerimetro-lado1)*(semiPerimetro-lado2)*(semiPerimetro-lado3));
   
    let calcArea = Math.sqrt(insideSqrt);

    //let base = Math.max(l1,l2,l3);
    //console.log(base, "la base es");
    if (calcArea==0) {
        area.value = 0
    } else {
        area.value = calcArea.toFixed(0);
    }
   

}


function calculoCirculo(){
    let radio = document.getElementById("inputRadioCirculo").value;

    let perimetro = document.getElementById("inputPerimetroCirculoValor");
    let area = document.getElementById("inputAreaCirculoValor");

    console.log(perimetroCirculo(radio*2).toFixed(1))
    console.log(areaCirculo(radio).toFixed(1));

    perimetro.value = perimetroCirculo(radio*2).toFixed(1);
    
    area.value = areaCirculo(radio).toFixed(1);
}

