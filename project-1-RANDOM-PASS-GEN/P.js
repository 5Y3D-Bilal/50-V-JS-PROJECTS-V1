const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
 
const randomfun = {
    lower: getrandomlower,
    upper: getrandomuppercase,
    number: getrandomNumber,
    symbol: getrandomsymbol
}


generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword (lower , upper , number ,symbol , length) {
        let genratedpassword = ''
        const typeCount = lower + upper + number + symbol
        const typearr = [{lower} , {upper} , {number} , {symbol}].filter(item => Object.values(item)[0])
        // console.log(typearr)

        if(typeCount === 0){
            return ''
        }

        for(let i = 0; i < length; i += typeCount){
            typearr.forEach(type =>{
                const funname = Object.keys(type) [0]
                genratedpassword += randomfun[funname]()
                // console.log(funname)
            })
        }

        const finalpassowrd = genratedpassword.slice(0,length)

        return finalpassowrd 
}

function getrandomlower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getrandomuppercase() {
    return Math.floor(Math.random() * 26)
}

function getrandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48)
}

function getrandomsymbol() {
    const symbol = '!@#$%^&*/+"><|{:|~-_=+'
    return symbol[Math.floor(Math.random() * symbol.length)]
}




