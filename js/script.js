function calcularValorHora(){
    const ganhoMes = document.querySelector('#ganho-mes')
    const horasDia = document.querySelector('#horas-dia')
    const salarioHora = ganhoMes.value/(horasDia.value*22)
    const resposta = document.querySelector('#resposta')
    resposta.innerHTML = 'R$ ' + salarioHora.toFixed(2)
}