const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91)); // Corrigido para ser uma função
const geraMinusculas = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));

const simbolos = ',.;~[]{}!@#$%^&*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];

    for (let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula()); // Agora são funções
        minusculas && senhaArray.push(geraMinusculas());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}
