type Usuario = {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
};

const usuario: Usuario[] = [
  {
    id: 26,
    nome: "Leonardo",
    email: "Leonardo@gmail.com",
    ativo: false,
  },
  {
    id: 27,
    nome: "Eduardo",
    email: "Eduardo@gmail.com",
    ativo: true,
  },
];

usuario.forEach((element) => {
  console.log(element.nome);
});
