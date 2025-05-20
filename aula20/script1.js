

const Form = document.getElementById('Form');

Form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Your form submission logic here, e.g., sending data via AJAX
});

function Calcular_idade() {
    
var Idade = document.getElementById('Idadeinput').value;
var resposta = document.getElementById('Resposta')
    
// idade > 0 e idade < 10 = criança         1
// idade > 9 e idade < 15 é adolescente     2
// idade > 14 e idade < 25 é jovem          3
// idade > 24 e idade < 60 é adulto         4
// idade > 59 é idoso                       5
// else = sistema errou.                    6
// se a idade < 1 = invalida 

// && and
// || ou



if (Idade > 0 && Idade < 10) { // idade > 0 e idade < 10 = criança                  1

    resposta.innerHTML='A idade é de uma Criança';

} else if (Idade > 9 && Idade < 15) { // idade > 9 e idade < 15 é adolescente       2

    resposta.innerHTML=('A idade é de um Adolescente');

} else if (Idade > 14 && Idade < 25) { // idade > 14 e idade < 25 é jovem           3

    resposta.innerHTML=('A idade é de um Jovem');

} else if (Idade > 24 && Idade < 60) { // idade > 24 e idade < 60 é adulto          4

    resposta.innerHTML=('A idade é de um Adulto');

} else if (Idade > 59) { // idade > 59 é idoso                                      5

    resposta.innerHTML=('A idade é de um Idoso');

} else {// else = sistema errou.                                                    6

    resposta.innerHTML=('O Sistema Errou');

};


}