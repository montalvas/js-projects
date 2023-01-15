const form = document.querySelector('.main-form');

form.onsubmit = function(e) {
    e.preventDefault();

    const section = getSection();
    const w = Number(e.target.querySelector('#peso').value);
    const h = Number(e.target.querySelector('#altura').value);

    const p = createP();
    
    if(!w) {
        return addMessage(p, section, 'Peso inválido', false);
    }

    if(!h) {
        return addMessage(p, section, 'Altura inválida', false);
    }

    if(w && h) {
        const imc = getIMC(w, h);
        const result = getResult(imc);
        return addMessage(p, section, result, true);
    }
    
}

function getSection() {
    const section = document.querySelector('.section-imc');
    section.innerHTML = ''
    return section
}

function createP() {
    const p = document.createElement('p');
    return p
}

function addMessage(el, section, msg, isValid) {
    el.innerText = msg;
    
    if (isValid) {
        el.classList.add('main-text', 'result');
    } else {
        el.classList.add('main-text', 'invalid');
    }

    section.appendChild(el);
}

function getIMC(w, h) {
    const imc = (w / h ** 2).toFixed(2);
    return imc
}

function getResult(imc) {
    const description = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ];

    if (imc < 18.5) {
        return `Seu IMC é ${imc} (${description[0]})`
    } else if (imc >= 18.5 && imc < 25) {
        return `Seu IMC é ${imc} (${description[1]})`
    } else if (imc >= 25 && imc < 30) {
        return `Seu IMC é ${imc} (${description[2]})`
    } else if (imc >= 30 && imc < 35) {
        return `Seu IMC é ${imc} (${description[3]})`
    } else if (imc >= 35 && imc < 40) {
        return `Seu IMC é ${imc} (${description[4]})`
    } else if (imc >= 40) {
        return `Seu IMC é ${imc} (${description[5]})`
    } else {
        return 'Houve algum erro durante o cálculo.'
    }
}