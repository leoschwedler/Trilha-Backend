interface Pedido {
  id: number;
  produto: string;
  quantidade: number;
  observacao?: string;
}

const lista: Pedido[] = [
  {
    id: 1,
    produto: "pc",
    quantidade: 1,
  },

  {
    id: 2,
    produto: "mac",
    quantidade: 2,
    observacao: "caro",
  },
];

function listarProdutos(pedidos: Pedido[]): void {
  pedidos.forEach((element) => {
    console.log(
      `Produto: ${element.produto} | Quantidade: ${element.quantidade}`,
    );
  });
}

listarProdutos(lista);
