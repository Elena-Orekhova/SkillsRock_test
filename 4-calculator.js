class Calculator {
  constructor(initialValue = 0) {
    this.result = initialValue;
  }

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

divide(a, b) {
    if (b === 0) {
      return 'Ошибка: деление на ноль';
    }
    this.result = a / b;
    return this.result;
  }
}

// Экземпляр
const calc = new Calculator();

// Вывод
function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;
  if (operation === 'add') result = calc.add(num1, num2);
  if (operation === 'subtract') result = calc.subtract(num1, num2);
  if (operation === 'multiply') result = calc.multiply(num1, num2);
  if (operation === 'divide') result = calc.divide(num1, num2);
  document.getElementById('calculatorOutput').textContent = `Результат: ${result}`;
}

