let count = 0;
var prNum;
mt = document.getElementById('mt');
btn = document.getElementById('btn');
btn2 = document.createElement('button');
input = document.getElementById('mynum');
btn2.textContent = "Перезапуск";
btn2.classList.add('btn');
btn2.classList.add('btn-secondary');
mt.appendChild(btn2);
btn2.style.display = 'none';
btn2.onclick = function () {
    document.getElementById('btn1').disabled = 0;
    document.getElementById('mynum2').disabled = 0;
    document.getElementById('btn').disabled = true;
    document.getElementById('mynum2').value = "";
    btn2.style.display = 'none';
    btn.style.display = 'block';
    document.getElementById('count').innerHTML = "";
    document.getElementById('out').innerHTML = "";
    prNum = undefined;
    count = 0;
};

function f2() {
    num = parseInt(document.getElementById('mynum2').value);
    out = document.getElementById('out');
    if (!/^([1-9]\d*)$/.test(num)) {
        out.innerHTML = "Введите корректное число";
        document.getElementById("mynum2").value = "";
    } else {
        out.innerHTML = "";
        document.getElementById('mynum').disabled = false;
        document.getElementById('btn').disabled = false;
        document.getElementById('btn1').disabled = true;
        document.getElementById('mynum2').disabled = true;
        return Math.floor(Math.random() * num);
    }
}
input.ondblclick = function f3() {
    if (prNum === undefined) {
        prNum = f2();
        document.getElementById("mynum").value = prNum;
    } else
        document.getElementById("mynum").value = prNum;
}

function f1() {
    let num, out;
    if (prNum === undefined) {
        prNum = f2();
    }
    Pcount = document.getElementById('count');
    num = parseInt(document.getElementById('mynum').value);
    out = document.getElementById('out');

    if (/^([0-9]\d*)$/.test(num)) {
        if (num == prNum) {
            out.innerHTML = 'Угадали';
            Pcount.innerHTML = `Количество попыток: ${count}`;
            btn.style.display = 'none';
            document.getElementById("mynum").value = "";
            document.getElementById("mynum").disabled = true;
            btn2.style.display = 'block';

        } else if (num > prNum) {
            document.getElementById("mynum").value = "";
            out.innerHTML = 'Много';
            count++;
        } else {
            document.getElementById("mynum").value = "";
            out.innerHTML = 'Мало';
            count++;
        }
    } else {
        out.innerHTML = 'Введите корректное число';
        document.getElementById("mynum").value = "";
    }
}
