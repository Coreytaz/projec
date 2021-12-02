test = document.getElementById('test');
grade = 5;
proverka = document.getElementById('proverka');
time = document.getElementById('time');
plus = document.getElementById('plus');
minus = document.getElementById('minus');
mulity = document.getElementById('mulity');
delenue = document.getElementById('delenue');
p = document.querySelector('p');

function random() {
    label1 = Math.floor(Math.random() * 100);
    label2 = Math.floor(Math.random() * 100);
    label3 = Math.floor(Math.random() * 100);
    label4 = Math.floor(Math.random() * 100);
    label5 = Math.floor(Math.random() * 10 + 1);
    label6 = Math.floor(Math.random() * 10 + 1);
    label8 = Math.floor(Math.random() * 10 + 1);
    label7 = Math.floor(Math.random() * 10) * label8;
}


function f2() {

    random()
    plus.innerHTML = `${label1}  +  ${label2}  =`
    minus.innerHTML = `${label3}  -  ${label4}  =`
    mulity.innerHTML = `${label5}  *  ${label6}  =`
    delenue.innerHTML = `${label7}  /  ${label8}  =`
    document.getElementById('proverka').disabled = false;
    test.disabled = true;
      inter = setInterval(() =>{
        let time1 = time.innerHTML;
        time1--;
        time.innerHTML = time1;
        if(time1 == 0){
            clearInterval(inter);
            f1();
        }
    }
    , 1000);
}

function f1() {
    clearInterval(inter);
    let a = label1 + label2;
    let b = label3 - label4;
    input1 = document.getElementById('iplus').value;
    input2 = document.getElementById('iminus').value;
    input3 = document.getElementById('imulity').value;
    input4 = document.getElementById('idelenue').value;
    if(!a == input1){
        grade--;
        document.getElementById('1').innerHTML = 'Ошибка';

    }
    else
        document.getElementById('green1').innerHTML = 'Правильно';
    if(!b == input2){
        grade--;
        document.getElementById('2').innerHTML = 'Ошибка';

    }
    else
        document.getElementById('green2').innerHTML = 'Правильно';
    if(!label5 * label6 == input3){
        grade--;
        document.getElementById('3').innerHTML = 'Ошибка';

    }
    else
        document.getElementById('green3').innerHTML = 'Правильно';
    if(!label7 / label8 == input4){
        grade--;
        document.getElementById('4').innerHTML = 'Ошибка';

    }
    else{
        document.getElementById('green4').innerHTML = 'Правильно';
    }
    p.innerHTML = `Оценка: ${grade}`;
    document.getElementById('iplus').disabled = true;
    document.getElementById('iminus').disabled = true;
    document.getElementById('imulity').disabled = true;
    document.getElementById('idelenue').disabled = true;
    document.getElementById('proverka').disabled = true;

    test.onclick = clear;
    test.disabled = false;
}

function clear(){
    document.getElementById('proverka').disabled = true;
    p.innerHTML = `Оценка: `;
    time.innerHTML = 60;
    grade = 5;

    plus.innerHTML = `?  +  ?  =`
    minus.innerHTML = `?  -  ?  =`
    mulity.innerHTML = `? *  ?  =`
    delenue.innerHTML = `?  /  ?  =`

    document.getElementById('iplus').value = '';
    document.getElementById('iminus').value = '';
    document.getElementById('imulity').value = '';
    document.getElementById('idelenue').value = '';

    document.getElementById('iplus').disabled = false;
    document.getElementById('iminus').disabled = false;
    document.getElementById('imulity').disabled = false;
    document.getElementById('idelenue').disabled = false;

    document.getElementById('1').innerHTML = '';
    document.getElementById('green1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('green2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('green3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('green4').innerHTML = '';



    test.onclick = f2;
}

