type Usuario = {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
};

const usuario: Usuario = {
  id: 1,
  nome: "Leonardo",
  email: "leo@email.com",
  ativo: true,
};

console.log(usuario);
