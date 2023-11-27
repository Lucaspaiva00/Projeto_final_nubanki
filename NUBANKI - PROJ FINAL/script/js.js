const valor_inic = document.querySelector("h1#valor_inic");
const valor_mes = document.querySelector("h1#valor_mes");
const res_final = document.querySelector("h1#res_final");
const total_inv = document.querySelector("h2#total_inv");
const poupanca = document.querySelector("h2#poupanca");
const prefixado = document.querySelector("h2#prefixado");

let contador = 250;

function calc() {

    contador += 250;

    valor_inic.innerHTML = `R$${contador},00`
    res_final.innerHTML = `R$${contador * 0.006 + contador},00`;
    total_inv.innerHTML = `Total investido: R$${contador * 0.014 + contador},00`;
    poupanca.innerHTML = `Na poupanca, seu dinheiro renderia:  R$${contador * 0.001 + contador},00`;
    prefixado.innerHTML = `No Tesouro Prefixado, seu dinheiro renderia: R$${contador * 0.006 + contador},00`;
}

function diminu() {
    contador -= 250;

    valor_inic.innerHTML = `R$${contador},00`
    res_final.innerHTML = `R$${contador * 2},00`
    if (contador < 0) {
        valor_inic.innerHTML = `R$0,00`
        res_final.innerHTML = `R$0,00`
    }
}

function calc_mes() {
    contador += 250;
    valor_mes.innerHTML = `R$${contador},00`
    res_final.innerHTML = `R$${contador * 0.1 + contador},00`;

    total_inv.innerHTML = `Total investido: R$${contador * 0.014 + contador},00`;
    poupanca.innerHTML = `Na poupanca, seu dinheiro renderia:  R$${contador * 0.001 + contador},00`;
    prefixado.innerHTML = `No Tesouro Prefixado, seu dinheiro renderia: R$${contador * 0.006 + contador},00`;
}

function diminu_mes() {
    contador -= 250;
    valor_mes.innerHTML = `R$${contador},00`
    res_final.innerHTML = `R$${contador * 3},00`
    if (contador < 0) {
        valor_mes.innerHTML = `R$0,00`
        res_final.innerHTML = `R$0,00`
    }
}