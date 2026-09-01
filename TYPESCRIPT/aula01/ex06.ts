function calcularDesconto(preco: number, desconto: number): number {
  const descontoFinal = preco * (desconto / 100);
  return preco - descontoFinal;
}

console.log(calcularDesconto(100, 20));
