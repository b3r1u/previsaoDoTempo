//API
const key = "ef6c5090e72e0d433cea1e516c9c6ba1";


function showDates(dates) {
    console.log(dates);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dates.name;
    document.querySelector(".temp").innerHTML = Math.floor(dates.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dates.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dates.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dates.weather[0].icon}.png`;
}

async function gotCity(cidade) {
    const dates = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    showDates(dates);
}

function onSearch() {
    const cidade = document.querySelector(".input-cidade").value;
    gotCity(cidade);
}



//CARD
