export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    };

    static criaDigito(cpfParcial, contadorInicial) {
        let total = 0;

        for (let num of cpfParcial) {
            total += Number(num) * contadorInicial;
            contadorInicial--;
        }

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    valida() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.isSequencia()) return false

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial, 10);
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1, 11);
        const cpfCompleto = cpfParcial + digito1 + digito2

        return cpfCompleto === this.cpfLimpo;
    };

}
