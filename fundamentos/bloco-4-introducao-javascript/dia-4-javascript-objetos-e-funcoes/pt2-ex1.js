// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false


let palavraUm = 'arara'
let palavraDois = 'cabuloso'

function verificaPalindrome(let) {
  let palindromo = palavraDois.split('').reverse().join('');
  if (palindromo === palavraDois) {
    return true;
  }
  else {
    return false;
  }
}

console.log(verificaPalindrome());