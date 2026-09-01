function calcularSalario(salario: number, bonus: number): number {
  if (bonus > 1000) {
    return salario + 1000;
  } else {
    return salario + bonus;
  }
}

console.log(calcularSalario(3000, 500));
console.log(calcularSalario(3000, 1500));
