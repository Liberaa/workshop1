

let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let operator = document.querySelector('#operation')
const result = document.querySelector('#result')
const result2 = document.querySelector('#result2')


function updateSum() {
    const n1 = Number(num1.value)
    const n2 = Number(num2.value)
    result.textContent = "result: " + (n1 + n2)
}

function subSum () {
     const n1 = Number(num1.value)
    const n2 = Number(num2.value)
    result2.textContent = 'res' + (n1 - n2)
}

num1.addEventListener("input", updateSum)
num2.addEventListener("input", updateSum)




num1.addEventListener("input", subSum)
num2.addEventListener("input", subSum)





