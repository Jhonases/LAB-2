function main() {
    var value = document.getElementById('prueba').value;
    var xhttp;

    if (value == '0') {
    }

    if (value == '1') {
        url = 'chile.json';
    }

    if (value == '2') {
        url = 'espana.json';
    }

    if (value == '3') {
        url = 'mexico.json';
    }

    if (value == '4') {
        url = 'argentina.json';
    }

    xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (value == '0') {
            }

            if (value == '1') {
                url = 'chile.json';
                var data = JSON.parse(this.responseText);
                chile(data);
            }

            if (value == '2') {
                url = 'espana.json';
                var data = JSON.parse(this.responseText);
                espana(data);
            }

            if (value == '3') {
                url = 'mexico.json';
                var data = JSON.parse(this.responseText);
                mexico(data);
            }

            if (value == '4') {
                url = 'argentina.json';
                var data = JSON.parse(this.responseText);
                argentina(data);
            }
        }
    }
}

function agregarNombre() {
    if (document.getElementById("mc1").value) {
        var nombre = document.getElementById("mc1").value;
        document.getElementById('nombre-mc1').innerHTML = nombre
        document.getElementById('nombre-mc1-2').innerHTML = nombre
    }

    if (document.getElementById("mc2").value) {
        var nombre = document.getElementById("mc2").value;
        document.getElementById('nombre-mc2').innerHTML = nombre
        document.getElementById('nombre-mc2-2').innerHTML = nombre
    }
}

function chile(parsing) {
    var muestra = '<h1> Representantes de Chile</h1>' + '<ol>';

    for (let i in parsing[0].nombres) {
        muestra += '<li>' + parsing[0].nombres[i] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}

function espana(parsing) {
    var muestra = '<h1> Representantes de España</h1>' + '<ol>';

    for (let i in parsing[0].nombres) {
        muestra += '<li>' + parsing[0].nombres[i] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}

function mexico(parsing) {
    var muestra = '<h1> Representantes de México</h1>' + '<ol>';

    for (let i in parsing[0].nombres) {
        muestra += '<li>' + parsing[0].nombres[i] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}

function argentina(parsing) {
    var muestra = '<h1> Representantes de Argentina</h1>' + '<ol>';

    for (let i in parsing[0].nombres) {
        muestra += '<li>' + parsing[0].nombres[i] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}

function calcularResultado() {
    // ! Fila 1  
    let fila = document.getElementById("fila1");
    let elementos = fila.getElementsByTagName("input");
    let resultado = 0;
    for (var i = 0; i <= 8; i++) {
        resultado += parseInt(elementos[i].value);
        console.log(elementos[i].value);
    }
    console.log(resultado);
    document.getElementById('result1').innerHTML = resultado

    // ! Fila 2  
    let fila2 = document.getElementById("fila2");
    let elementos2 = fila2.getElementsByTagName("input");
    let resultado2 = 0;
    for (var i = 0; i <= 8; i++) {
        resultado2 += parseInt(elementos2[i].value);
        console.log(elementos2[i].value);
    }
    console.log(resultado2)
    document.getElementById('result2').innerHTML = resultado2;
}

function calcular_Resultado() {
    // ! Fila 3  
    let fila3 = document.getElementById("fila3");
    let elementos3 = fila3.getElementsByTagName("input");
    let resultado3 = 0;
    for (var i = 0; i <= 8; i++) {
        resultado3 += parseInt(elementos3[i].value);
        console.log(elementos3[i].value);
    }
    console.log(resultado3)
    document.getElementById('result3').innerHTML = resultado3;

    // ! Fila 4  
    let fila4 = document.getElementById("fila4");
    let elementos4 = fila4.getElementsByTagName("input");
    let resultado4 = 0;
    for (var i = 0; i <= 8; i++) {
        resultado4 += parseInt(elementos4[i].value);
        console.log(elementos4[i].value);
    }
    console.log(resultado4)
    document.getElementById('result4').innerHTML = resultado4;
}




