let minhaDiv = document.querySelector(".resultado");
for (let i = 1; i <= 100; i++) {
    //VALOR 15 VEIO DO MMC DE 3 E 5 (CONDIÇÃO 3 DO DESAFIO)
    if (i % 15 == 0) {
        minhaDiv.innerHTML += '<span>FizzBuzz</span>';
    }
    else if (i % 3 == 0) {
        minhaDiv.innerHTML += '<span>Fizz</span>';
    } else if (i % 5 == 0) {
        minhaDiv.innerHTML += '<span>Buzz</span>';
    } else {
        minhaDiv.innerHTML += i;
    }
    minhaDiv.innerHTML += '<br>';
    
}