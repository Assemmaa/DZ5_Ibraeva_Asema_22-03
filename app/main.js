const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (elem, target, target2 ,isTrue) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "usd.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                target.value = ( elem.value / response.usd ).toFixed(2)
            } else {
                target.value = ( elem.value * response.usd ).toFixed(2)
            }
            elem.value === '' && (target.value = '')
        }
        const request1 = new XMLHttpRequest()
        request1.open("GET", "eur.json")
        request1.setRequestHeader("Content-type", "application/json")
        request1.send()
        request1.onload = () => {
            const response = JSON.parse(request1.response)
            if (isTrue) {
                target2.value = ( target2.value / response.eur ).toFixed(2)
            } else {
                target2.value = ( target2.value * response.eur ).toFixed(2)
            }
            target2.value === '' && (target2.value = '')
        }
    }
}


// 0, '', false, undefined, null, NaN
convert(som, eur,  usd, true)
convert(eur, usd, som, false)
