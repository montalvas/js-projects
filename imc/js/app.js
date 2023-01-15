function myScope() {
    const form = document.querySelector('.main-form');
    const container = document.querySelector('.container');
    const p = document.createElement('p');

    function validateWeight(w) {
        if (!isNaN(w) && w !== 0) {
            return true
        } else {
            return false
        }
    }

    function validateHeight(h) {
        if (!isNaN(h) && h !== 0) {
            return true
        } else {
            return false
        }
    }

    function calcImc(w, h) {
        imc = (w / h ** 2).toFixed(2);

        return `Seu IMC é ${imc} (${imcMessage(imc)})`
    }

    function imcMessage(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso'
        } else if (imc >= 18.5 && imc < 25) {
            return 'peso normal'
        } else if (imc >= 25 && imc < 30) {
            return 'sobrepeso'
        } else if (imc >= 30 && imc < 35) {
            return 'Obesidade grau 1'
        } else if (imc >= 35 && imc < 40) {
            return 'Obesidade grau 2'
        } else if (imc >= 40) {
            return 'Obesidade grau 3'
        }
    }

    form.onsubmit = function(e) {
        e.preventDefault();

        const w = Number(document.querySelector('#peso').value);
        const h = Number(document.querySelector('#altura').value);

        console.log(validateWeight(w), validateHeight(h))

        if(validateWeight(w) && validateHeight(h)) {
            p.innerHTML = calcImc(w, h);
            p.classList.remove('invalid');
            p.classList.add('result');
        } else if (!validateWeight(w)) {
            p.innerHTML = 'Peso inválido';
            p.classList.remove('result');
            p.classList.add('invalid');
        } else if (!validateHeight(h)) {
            p.innerHTML = 'Altura inválida';
            p.classList.remove('result');
            p.classList.add('invalid');
        }

        container.appendChild(p);
    }
}

myScope();