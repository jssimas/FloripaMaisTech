const minhaPromise = new Promise(function(resolve, reject) {
 teste = true

 if (teste) {
   resolve("Teste promise") }
   else {
    reject("Deu ruim")
   }
});

minhaPromise.then((valor)=> {console.log("Deu tudo certo") }, (erro)=> {console.log("Deu errado")});

