function verificarMaioridade(idade: number): string {
  if (idade >= 18) {
    return "Maior de 18";
  } else {
    return "Menor de 18";
  }
}

console.log(verificarMaioridade(17));
console.log(verificarMaioridade(18));
