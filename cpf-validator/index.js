function ValidateCPF(cpf) {
    this.cleanCpf = cpf.replace(/\D+/g, '');
    this.getCpf = function() {
        return cpf
    }
}

ValidateCPF.prototype.validate = function() {
    if (typeof this.cleanCpf === undefined) return false
    if (this.cleanCpf.length !== 11) return false
    if (this.isSequential()) return false

    let partialCpf = this.cleanCpf.slice(0, -2);
    const firstDigit = this.createDigit(partialCpf);
    const secondDigit = this.createDigit(partialCpf + firstDigit);

    partialCpf += firstDigit + secondDigit;
    
    return partialCpf === this.cleanCpf
}

ValidateCPF.prototype.createDigit = function(partialCpf) {
    const arrCpf = Array.from(partialCpf);
    let index = arrCpf.length + 1;

    let digit = arrCpf.reduce((ac, val) => {
        ac += index * val;
        index--;

        return ac
    }, 0);

    digit = 11 - (digit % 11);

    return digit > 9 ? '0' : String(digit)
}

ValidateCPF.prototype.isSequential = function() {
    const sequential = this.cleanCpf[0].repeat(this.cleanCpf.length);
    return sequential === this.cleanCpf
}

const cpf = new ValidateCPF('058.681.915-01');
const cpf2 = new ValidateCPF('111.111.111-11');

console.log(`CPF: ${cpf.getCpf()} é válido: ${cpf.validate()}`);
console.log(`CPF: ${cpf2.getCpf()} é válido: ${cpf2.validate()}`);