function maiorNumero(){
   
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);

    var maiorNumero;
  
    if (numero1 > numero2) {
      maiorNumero = numero1;
    } else if (numero2 > numero1) {
      maiorNumero = numero2;
    } else {
      maiorNumero = "Os números são iguais";
    }
  
    console.log(maiorNumero);
    document.getElementById('resultado1').textContent ="Resultado: " + maiorNumero;
  }

  function verificarNota(){
    var nota = parseFloat(document.getElementById('nota').value);
    var resultado;
    if(nota < 6){
      resultado = "Reprovado";
    }else if(nota >= 6 && nota < 8){
      resultado = "Aprovado";
    }else{
        resultado = "Aprovado com louvor";
    }
    document.getElementById('resultado2').textContent ="Resultado: " + resultado;
  }
  
  function media() {
    const input = document.getElementById('numerosInput').value;
    const numeros = input.split(/,| /).map(Number);
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    const media = soma / numeros.length;
    document.getElementById('resultado3').textContent = `Media: ${media}`;
  }

  function verificarLetra(){
    var letra = document.getElementById('letra').value;
    var resultado;
    if(letra == 'a' || letra == 'b'){
      resultado = letra.toUpperCase();
    }else{
      resultado = letra;
    }
    document.getElementById('resultado4').textContent ="Resultado: " + resultado;
  }

  function somaMatriz(){
    const input = document.getElementById('numerosInput2').value;
    const numeros = input.split(/,| /).map(Number);
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    document.getElementById('resultado5').textContent = `Resultado: ${soma}`;
  }

  function fatorial(){
    var numero = parseInt(document.getElementById('fat').value);
    var resultado = 1;
    for(var i = 1; i <= numero; i++){
      resultado *= i;
    }
    document.getElementById('resultado6').textContent ="Resultado: " + resultado;
  }

  function verificarOpcao() {
    var opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');
    if (opcaoSelecionada) {
      var resultado = "Opção " + opcaoSelecionada.id.slice(-1) + " escolhida";
      document.getElementById("resultado7").textContent = resultado;
    } else {
      document.getElementById("resultado7").textContent = "Opção inválida";
    }
  }

  function maiorNumeroVetor(){
    const input = document.getElementById('numerosInput3').value;
    const numeros = input.split(/,| /).map(Number);
    const resultado = Math.max(...numeros);
    document.getElementById('resultado8').textContent = `Resultado: ${resultado}`;
}

function mediaMatriz(){
    const input = document.getElementById('matrizInput').value;
    const numeros = input.split(/,| /).map(Number);
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    const media = soma / numeros.length;
    document.getElementById('resultado9').textContent = `Media: ${media}`;
}

function toggleSidebar(){
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
    menu.classList.toggle('show');
});
}

