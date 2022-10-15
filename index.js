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

function chile(parsing){
    var muestra = '<h1> Representantes de Chile</h1>' + '<ol>';

    for (let i in parsing[0].nombres) {
        muestra += '<li>' + parsing[0].nombres[i] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}

function espana(parsing){
    var muestra = '<h1> Representantes de España</h1>' + '<ol>';

    for (let i in parsing[0].nombres) {
        muestra += '<li>' + parsing[0].nombres[i] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}

function mexico(parsing){
    var muestra = '<h1> Representantes de México</h1>' + '<ol>';

    for (let i in parsing[0].nombres) {
        muestra += '<li>' + parsing[0].nombres[i] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}

function argentina(parsing){
    var muestra = '<h1> Representantes de Argentina</h1>' + '<ol>';

    for (let i in parsing[0].nombres) {
        muestra += '<li>' + parsing[0].nombres[i] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}
