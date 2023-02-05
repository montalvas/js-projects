function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickButton();
            this.pressKey();
        },

        clickButton() {
            document.addEventListener('click', e => {
                const el = e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.insertDisplay(el.innerText);
                };

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };

                if(el.classList.contains('btn-del')) {
                    this.deleteDisplay();
                }

                if(el.classList.contains('btn-eq')) {
                    this.calculate();
                }
            });
        },

        pressKey() {
            document.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.calculate();
                }

                if (e.key === 'Backspace') {
                    this.deleteDisplay();
                }
            });
        },

        insertDisplay(text) {
            this.display.value += text;
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate() {
            let res = this.display.value;

            if(!res) {
                alert('Faça uma conta!');
                return
            }

            try {
                res = eval(res);                
                this.display.value = String(res);
            } catch(e) {
                alert('Conta inváida!');
                return
            }
        }
    }
}

const calculator = createCalculator();
calculator.start();