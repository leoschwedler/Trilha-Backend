function calcularFrete(valorCompra: number, frete: number): number {
  if (valorCompra >= 200) {
    return valorCompra;
  } else {
    return valorCompra + frete;
  }
}

console.log(calcularFrete(250, 30));
console.log(calcularFrete(150, 30));
