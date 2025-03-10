import ValidaCPF from './ValidaCPF';

export default class GeradorCPF {
    static rand(min = 100000000,max = 123456789) {
        return String(Math.floor(Math.random() *(max - min) + min));
    }

    static formatado(cpf){
        return(
            cpf.slice(0,3) + '.'  +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)  
        );
    }

    static geraNovoCPF() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.criaDigito(cpfSemDigito, 10);
        const digito2 = ValidaCPF.criaDigito(cpfSemDigito + digito1, 11);
        const cpf = cpfSemDigito + digito1 + digito2;
        return this.formatado(cpf);
    }
}