function verificarAcesso(usuario: string, ativo: boolean): string {
  if (ativo) {
    return `${usuario} está com acesso liberado.`;
  } else {
    return `${usuario} está sem acesso.`;
  }
}

console.log(verificarAcesso("leonardo", true));
