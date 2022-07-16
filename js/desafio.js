function calcular(){
    const valorHora = document.querySelector('#valor-hora')
    const horaProjeto = document.querySelector('#horas-projeto')
    const calcHora = valorHora.value * horaProjeto.value

    const resposta = document.querySelector('#resposta')
    resposta.innerHTML = calcHora
}
