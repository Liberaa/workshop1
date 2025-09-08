let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let operator = document.querySelector('#operation')
const result = document.querySelector('#result')

function updateSum() {
  const n1 = Number(num1.value)
  const n2 = Number(num2.value)
  const operation = operator.value
  let output = ''

  if (operation == 'add') {
    output = n1 + n2
  } else if (operation == 'sub') {
    output = n1 - n2
  } else if (operation == 'mul') {
    output = n1 * n2
  } else if (operation == 'div') {
    if (n2 == 0) {
      output = 'cannot divide by zero'
    } else {
      output = n1 / n2
    }
  }
  result.textContent = 'Result: ' + output
}


num1.addEventListener('input', updateSum)
num2.addEventListener('input', updateSum)
