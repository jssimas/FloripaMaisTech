const minhaPromise = new Promise(function(resolve, reject) {
 teste = true

 if (teste) {
   resolve("Deu tudo certo") }
   else {
    reject("Deu ruim")
   }
});

minhaPromise.then(casoSucesso, casoErro);

function casoSucesso (valor) {
  console.log("Deu valor certo");
};

function casoErro (erro) {
  console.log("Deu tudo errado");
};