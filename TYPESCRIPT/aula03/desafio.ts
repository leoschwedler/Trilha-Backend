interface PedidoDesafio {
  id: number;
  cliente: string;
  produtos: string[];
  total: number;
  observacao?: string;
}

const pedidos: PedidoDesafio[] = [
  {
    id: 1,
    cliente: "Leonardo",
    produtos: ["Pc", "Mac"],
    total: 3000.0,
  },
  {
    id: 2,
    cliente: "Eduardo",
    produtos: ["Windows", "Linuxs"],
    total: 4000.0,
    observacao: "Prefiro linux",
  },
  {
    id: 3,
    cliente: "Jose",
    produtos: ["AMD", "INTEL"],
    total: 5000.0,
    observacao: "Prefiro AMD",
  },
];

function resumirPedidos(pedidos: PedidoDesafio[]): void {
  pedidos.forEach((element) => {
    let observacao = "| Obs: ";
    if (element.observacao !== undefined) {
      observacao += element.observacao;
    }
    console.log(
      `Pedido ${element.id} | Cliente: ${element.cliente} | Produtos: ${element.produtos.length} | Total: R$ ${element.total}` +
        observacao,
    );
  });
}

resumirPedidos(pedidos);
