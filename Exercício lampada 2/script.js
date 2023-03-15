let variavel;

function minhaFuncao(){
    variavel = setInterval(consoleLog, 2000)
};

function consoleLog() {
    console.log("Teste setInterval")
}

function pararFuncao() {
   clearInterval(variavel)
}

document.getElementById('btn').onclick = minhaFuncao;
document.getElementById('btn2').onclick = pararFuncao;