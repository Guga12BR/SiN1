const Calc_Idade = document.getElementById('Calcular_Idade');
const Calculadora = document.getElementById('Calculadora');

Calc_Idade.addEventListener('submit', function(event) {
    event.preventDefault();
});

Calculadora.addEventListener('submit', function(event) {
    event.preventDefault();
});

function Calcular_Idade() {
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let ano = document.getElementById('ano').value;
    
    let completo_hoje = new Date
    let hoje = new date (completo_hoje.getFullYear(), completo_hoje.getMonth();)
    let ano_calculado = (2025-ano);
    
    let responder = document.getElementById('resposta_Idade');
    let resposta = ano_calculado;
    responder.innerHTML= resposta
}