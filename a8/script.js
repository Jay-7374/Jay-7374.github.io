function calculate(operation) {
  const num1 = +document.getElementById('num1').value;
  const num2 = +document.getElementById('num2').value;
  const outputElement = document.getElementById('output');

  if (isNaN(num1) || isNaN(num2)) {
    outputElement.innerHTML = "Invalid input!";
    outputElement.classList.add("show-output"); 
    return;
  }

  let result;
  switch (operation) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? Math.floor(num1 / num2) : "Cannot divide by zero"; break;
  }

  outputElement.innerHTML = `Result: ${result}`;
  outputElement.classList.add("show-output"); 
}
