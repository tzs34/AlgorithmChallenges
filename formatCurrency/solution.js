let str = ' My bank account balance is'
let amount = 300
let currency = 'us'


function formatCurrency(currency){

    const currencies = {
        'us': '$',
        'gb': '£'
    }
    return function (strings, ...values) {
        let formatted = ''
        for(let i = 0; i < strings.length; i++){
            if(i > 0){
                formatted += `${currencies[currency]}${values[i-1]}`
            }
            formatted += strings[i]
        }

        return formatted
    }
}

let formatUSCurrency = formatCurrency('us')
let unformatted = `My bank account balance is ${amount}`
let formatted = formatUSCurrency`My bank account balance is ${amount}`

console.log(unformatted)
console.log(formatted)
