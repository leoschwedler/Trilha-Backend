type Cliente = {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
};

const cliente: Cliente = {
  id: 12,
  nome: "Leonardo",
  email: "leonardo@gmail.com",
};

const cliente2: Cliente = {
  id: 13,
  nome: "Eduardo",
  email: "eduargo@gmail.com",
  telefone: "41991267439",
};

console.log(cliente);
