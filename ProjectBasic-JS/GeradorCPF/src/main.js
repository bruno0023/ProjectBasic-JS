import GeradorCPF from './modules/GeradorCPF'
import './assets/css/style.css';

// o main.jss é o arquivo de entrada do webpack como estamo importando o geradorCPF ele carrega o arquivo tmb e dentro do gerador
// estamos importando validCPF que tambem é carregado pelo webpack

(function(){
    const resultado = document.querySelector('.resultado')
    const cpfGerado = GeradorCPF.geraNovoCPF();
    resultado.innerHTML = cpfGerado;
}());