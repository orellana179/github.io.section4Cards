// Cuadrado
function perimetroCuadrado(lados) {
    return lados * 4;
}
function areaCuadrado(lados) {
    return lados * lados;
}

//Triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base,altura) {
    return (base * altura) / 2;
}

//Circulo
const PI = Math.PI;
function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

//Interactuamos con el HTML
const result = document.getElementById('result');

function calcularPerimetrocuadrado() {
    const input = document.getElementById('inputPerimetro');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    result.innerHTML = perimetro; 
}
function calcularAreacuadrado() {
    const input = document.getElementById('inputPerimetro');
    const value = input.value;
    const area = areaCuadrado(value);
    result.innerHTML = area;
}


//Triángulo
//Ocultar form

function mostrarFormArea() {
    const btnPerimetro = document.getElementById('formPerimetro');
    const btnArea = document.getElementById('formArea');

    btnPerimetro.classList.remove('active');
    btnPerimetro.classList.add('inactive');
    btnArea.classList.remove('inactive');
    btnArea.classList.add('active');
}
function mostrarFormPerimetro() {
    const btnPerimetro = document.getElementById('formPerimetro');
    const btnArea = document.getElementById('formArea');

    btnArea.classList.remove('active');
    btnArea.classList.add('inactive');
    btnPerimetro.classList.remove('inactive');
    btnPerimetro.classList.add('active');
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById('lado1PerimetroTriangulo');
    const input2 = document.getElementById('lado2PerimetroTriangulo');
    const inputBase = document.getElementById('basePerimetroTriangulo');
    const resultadoTriangulo = document.getElementById('resultTriangulo');

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(inputBase.value);

    const totalPerimetroTriangulo = perimetroTriangulo(lado1,lado2,base);
    resultadoTriangulo.innerHTML = totalPerimetroTriangulo;
}

