const minhaPromise = new Promise(function(resolve, reject) {
 teste = true

 if (teste) {
   resolve("Deu tudo certo") }
   else {
    reject("Deu ruim")
   }
});

minhaPromise.then(casoSucesso, casoErro);

function casoSucesso(valor) {
  console.log(valor);
};

function casoErro(erro) {
  console.log(erro);
};