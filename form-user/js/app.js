class CriaUsuario {
    
    constructor() {
        this.form = document.querySelector('.main-form');
        this.camposValidos = true;
        this.eventos();
    }

    eventos() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validaCampos();
            if(this.camposValidos) this.form.submit();
        })
    }

    validaCampos() {
        let senha;
        let listaCampos = this.form.querySelectorAll('input');
        
        this.limpaAvisos();

        listaCampos.forEach(el => {
            let label = el.previousElementSibling.innerText;

            if(el.value === '') {
                const aviso = this.criaAviso(`Campo ${label} não pode estar vazio!`);
                el.after(aviso);
                this.camposValidos = false;
            }

            if(el.classList.contains('cpf')) {
                const cpf = new ValidateCpf(el.value);
                if (!cpf.validate()) {
                    const aviso = this.criaAviso(`${label} é inválido!`);
                    el.after(aviso);
                    this.camposValidos = false;
                }
            }

            if(el.classList.contains('usuario')) {
                if((!/^[A-Za-z0-9]*$/.test(el.value))) {
                    const aviso = this.criaAviso('Usuário só poderá conter letras e/ou números!');
                    el.after(aviso);
                    this.camposValidos = false;
                }

                if((el.value.length < 3 || el.value.length > 12)) {
                    const aviso = this.criaAviso('Usuário deverá ter entre 3 e 12 caracteres!');
                    el.after(aviso);
                    this.camposValidos = false;
                }
            }

            if(el.classList.contains('senha')) {
                senha = el.value;
                if(el.value.length < 6 || el.value.length > 12) {
                    const aviso = this.criaAviso('Senha precisa ter entre 6 e 12 caracteres!');
                    el.after(aviso);
                    this.camposValidos = false;
                }
            } 

            if(el.classList.contains('senharepetida') && el.value !== senha) {
                const aviso = this.criaAviso('As senhas precisam ser iguais!');
                el.after(aviso);
                this.camposValidos = false;
            }
        })
    }

    criaAviso(msg) {
        const p = document.createElement('p');
        p.innerText = msg;
        p.style.color = 'red';
        return p
    }

    limpaAvisos() {
        const avisos = this.form.querySelectorAll('p');
        avisos.forEach(aviso => {
            this.form.removeChild(aviso);
        });
    }
}

const novoUsuario = new CriaUsuario();