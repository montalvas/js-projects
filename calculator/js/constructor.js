function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.clickButton();
        this.pressKey();
    }

    this.clickButton = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            
            if(el.classList.contains('btn-num')) this.insertDisplay(el.innerText);

            if(el.classList.contains('btn-clear')) this.clearDisplay();

            if(el.classList.contains('btn-del')) this.deleteDisplay();

            if(el.classList.contains('btn-eq')) this.calculate();
        });
    }

    this.pressKey = () => {
        document.addEventListener('keyup', e => {

            if(e.key === 'Enter') this.calculate() ;

            if(e.key === 'Backspace') this.deleteDisplay();
        });
    }

    this.insertDisplay = text => this.display.value += text;

    this.clearDisplay = () => this.display.value = '';

    this.deleteDisplay = () => this.display.value = this.display.value.slice(0, -1);

    this.calculate = () => {
        let res = this.display.value;

        if (res === '') return alert('Preencha para realizar uma conta');

        try {
            res = eval(res);
            this.display.value = String(res);
        } catch(e) {
            alert('Conta inválida!');
            return
        }

    }
}

const calculator = new Calculator();
calculator.start();