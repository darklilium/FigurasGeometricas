//#Abres
console.group("asdasd");
//#Cierras
console.groupEnd();

console.group("Cuadrado");
const ladoCuadrado = 5;

const perimetroCuadrado = (ladoCuadrado) => {
    return ladoCuadrado*4;
}

const areaCuadrado = (ladoCuadrado) => {
    return ladoCuadrado*ladoCuadrado;
} 

console.log('Los lados del cuadrado miden ' + ladoCuadrado);
console.log('El perimetro del cuadrado mide ' + perimetroCuadrado(ladoCuadrado) + 'cm');
console.log('El area del cuadrado mide ' + areaCuadrado(ladoCuadrado) + 'cm al cuadrado');
console.groupEnd();


const baseTriangulo = 5;
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const alturaTriangulo = 3.3;

console.group('Triangulo');

const perimetroTriangulo = (baseTriangulo, ladoTriangulo1, ladoTriangulo2) =>{
    return baseTriangulo + ladoTriangulo1 + ladoTriangulo2;
}

const areaTriangulo = () =>{
    return (baseTriangulo * alturaTriangulo) / 2;
} 

console.log('Triangulo base ' + baseTriangulo + ' altura ' + alturaTriangulo);
console.log('Triangulo perimetro ' + perimetroTriangulo(baseTriangulo, ladoTriangulo1, ladoTriangulo2));
console.log('Triangulo area '+ areaTriangulo (baseTriangulo, alturaTriangulo));
console.groupEnd();

console.group('Circulo')
const radioCirculo = 4;
const diametroCirculo = radioCirculo *2;
const PI = Math.PI;

//Circunferencia
const perimetroCirculo = (diametroCirculo) =>{
    return diametroCirculo*PI;
}


const areaCirculo = (radioCirculo) =>{
    return (radioCirculo*radioCirculo)*PI;
}

console.log('Circulo radio ' + radioCirculo );
console.log('Circulo perimetro ' + perimetroCirculo(diametroCirculo));
console.log('Circulo area ' + areaCirculo(radioCirculo));
console.groupEnd();

