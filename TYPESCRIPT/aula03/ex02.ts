interface Produto {
  id: number;
  nome: string;
  preco: number;
  emEstoque: boolean;
}

const produto: Produto = {
  id: 12,
  nome: "Maça",
  preco: 128.0,
  emEstoque: false,
};
