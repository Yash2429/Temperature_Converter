const cfrom = document.querySelector('#from')
const cto = document.querySelector('#to')
const button = document.querySelector('.btn')
const ipt = document.querySelector('#txt')
const result = document.querySelector('.result')
ipt.addEventListener('click', function (e) {
    e.target.select()
})
let value = 0
value = parseFloat(value)
button.addEventListener('click', function () {
    let inpt = ipt.value
    inpt = parseFloat(inpt)
    let valueFrom = cfrom.value
    let valueTo = cto.value
    if (valueFrom == 'Fahrenheit') {
        if (valueTo == 'Fahrenheit') {
            value = inpt
            console.log(value)
        }
        else if (valueTo == 'Celsius') {
            value = (inpt - 32) * (5 / 9)
            console.log(value)
        }
        else {
            value = ((inpt - 32) * 5 / 9) + 273.15
            console.log(value)
        }
    }
    else if (valueFrom == 'Celsius') {
        if (valueTo == 'Fahrenheit') {
            value = (inpt * (9 / 5)) + 32
        }
        else if (valueTo == 'Celsius') {
            value = inpt
        }
        else {
            value = inpt + 273.15
        }
    }
    else {
        if (valueTo == 'Fahrenheit') {
            value = ((inpt - 273.15) * 9 / 5) + 32
        }
        else if (valueTo == 'Celsius') {
            value = inpt - 273.15
        }
        else {
            value = inpt
        }
    }
    value = value.toString()
    result.innerHTML = value
})