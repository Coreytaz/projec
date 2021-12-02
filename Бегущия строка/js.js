btn = document.querySelector('.btn');
run = document.querySelector('.run');
input = document.querySelector('.input');
document.querySelector('.range-input').disabled = true;


function f1() {
    if (!input.value == "") {
        run.innerHTML = `<marquee>${input.value}</marquee>`;
        document.querySelector('.range-input').disabled = false;
        btn.onclick = function() {
            run.innerHTML = input.value;
            btn.onclick = f1;
        }
    } else
        return false;
}

function changeSpeed() {
    let Speed = document.querySelector('.range-input').value;
    run.innerHTML = `<marquee scrollamount="${Speed}">${input.value}</marquee>`;
}

btn.onclick = f1;
