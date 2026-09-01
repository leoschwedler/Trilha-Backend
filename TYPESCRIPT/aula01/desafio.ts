function processarCompra(preco: number, quantidade: number): number {
  const precoTotal = quantidade * preco;
  let resultado = 0;
  let desconto = 0;
  if (precoTotal >= 500) {
    desconto = precoTotal * 0.1;
    resultado = precoTotal - desconto;
  } else {
    resultado = precoTotal;
  }

  if (resultado >= 300) {
    return resultado;
  } else {
    return resultado + 30;
  }
}

console.log(processarCompra(100, 6));

console.log(processarCompra(100, 4));
