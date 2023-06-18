function calculate(num1, num2) {
    const result = document.createElement("p");
    result.classList.add("result");
    result.textContent = num1 * num2;
    return result;
  }

  const result = calculate(5, 6);
document.body.appendChild(result);