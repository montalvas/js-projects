class ValidateCpf {
    constructor(cpf) {
        this.cpf = cpf;
        this.cleanCpf = cpf.replace(/\D+/g, '');
    }

    getCPF() {
        return this.cpf
    }

    cpfIsEqual() {
        let partialCpf = this.cleanCpf.slice(0, -2);
        const firstDigit = ValidateCpf.createDigit(partialCpf);
        const secondDigit = ValidateCpf.createDigit(partialCpf + firstDigit);
    
        partialCpf += firstDigit + secondDigit;

        return partialCpf === this.cleanCpf
    }
    
    validate() {
        if (typeof this.cleanCpf === undefined) return false
        if (this.cleanCpf.length !== 11) return false
        if (this.isSequential()) return false
        
        return this.cpfIsEqual()
    }

    static createDigit(partialCpf) {
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

    isSequential() {
        return this.cleanCpf[0].repeat(11) === this.cleanCpf
    }

}