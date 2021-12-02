let canvas = document.getElementById('cetka');
let ctx = canvas.getContext('2d');
let myColor = 'black'
let clearBtn = document.getElementById('clear');
let setka = document.getElementById('setka');
let scrim = document.getElementById('scrim');
let random = document.getElementById('random');

let color = document.getElementById('color').oninput = function () {
    myColor = this.value;
}

random.onclick = function () {
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    myColor = color;
}

scrim.onclick = function () {
    ctx.fillStyle = myColor;
    ctx.fillRect(0, 0, 1200, 650);
}

function range() {
    return document.getElementById('range').value;
}

canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event) {
        let pero = range();
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.fillRect(x, y, pero, pero);
        ctx.fillStyle = myColor;
    }
    canvas.onmouseup = function (event) {
        canvas.onmousemove = null;
    }
}

clearBtn.onclick = function () {
    ctx.clearRect(0, 0, 1200, 650);
}

setka.onclick = setkaOn;

function setkaOn() {
    canvas.style.backgroundImage = "url(img/1.png)";
    setka.onclick = setkaOff;
    setka.innerHTML = 'Выключить сетку';
}

function setkaOff() {
    canvas.style.backgroundImage = "url()";
    setka.onclick = setkaOn;
    setka.innerHTML = 'Включить сетку';
}
