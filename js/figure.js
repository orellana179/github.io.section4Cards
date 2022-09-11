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
function areaTrinagulo(base,altura) {
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

function calcularPerimetrocuadrado() {
    const input = document.getElementById('inputPerimetro');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreacuadrado() {
    const input = document.getElementById('inputPerimetro');
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}