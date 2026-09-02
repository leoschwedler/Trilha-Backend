function identificarValor(valor: unknown): string {
  if (typeof valor === "string") {
    return "Recebeu uma string";
  } else if (typeof valor === "number") {
    return "Recebeu um number";
  } else if (typeof valor === "boolean") {
    return "Recebeu um boolean";
  } else {
    return "Recebeu um tipo desconhecido";
  }
}

console.log(identificarValor("leo"));
console.log(identificarValor(25));
console.log(identificarValor(true));
