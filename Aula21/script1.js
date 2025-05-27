var Car = ['Volkswagen','Chevrolet','Ford','Fiat','Nissan','Mitsubishi','BMW','Mercedes-Benz'];
var text = "";
var i = 0;
while (i < 8) {
    document.writeln(i);
    text += "Carro-"+ (i+1) +' '+ Car[i]+ "<br>";
    i++
};

document.getElementById('Carro').innerHTML = text;
