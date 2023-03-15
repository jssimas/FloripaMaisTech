function inserirAdicionais(){
    var massas = document.getElementById('massa');
    var bordas = document.getElementById('borda');

    var massasValue = massas.options[massas.selectedIndex];
    var bordasValue = bordas.options[bordas.selectedIndex];

    var textMassas = massasValue.text;
    var textBordas= bordasValue.text;
    //var posicaoMassas = massasValue.selectedIndex;
    //var posicaoBorda = bordasValue.selectedIndex;

    console.log(massasValue);
    console.log(bordasValue);

    //console.log(posicaoMassas);
    //console.log(posicaoBorda);

    localStorage.setItem("Massa", JSON.stringify(textMassas));
    localStorage.setItem("Bordas", JSON.stringify(textBordas));

}

var sabores = JSON.parse((localStorage.getItem("sabores"))) || [];

var elLista = document.getElementById("lista");
var elCampo = document.getElementById("campo");
var elBotao = document.getElementById("botao");

elBotao.onclick = function(){
    var nome = elCampo.value;
    sabores.push({pizza: nome})
    elCampo.value = "";
    salvarSabores();
    listaSabores();
}

function salvarSabores(){
    if (sabores.length > 3){
        alert("Permitido somente 3 sabores!")
    } else {
        localStorage.setItem("sabores", JSON.stringify(sabores))
    }
}

function listaSabores(){
    elLista.innerHTML = "";

    for(const sabor of sabores){
        var elSabor = document.createElement("li");
        var elNome = document.createTextNode(sabor.pizza);
        elSabor.appendChild(elNome)
        elLista.appendChild(elSabor)
        
    }
    
}