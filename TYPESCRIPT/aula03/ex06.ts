interface Pedido {
  id: number;
  produto: string;
  quantidade: number;
  observacao?: string;
}

const pedido1: Pedido = {
  id: 1,
  produto: "pc",
  quantidade: 1,
};

const pedido2: Pedido = {
  id: 2,
  produto: "mac",
  quantidade: 2,
  observacao: "caro",
};
