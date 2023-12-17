window.addEventListener('DOMContentLoaded', (event) => {
    // Замените 'YOUR_API_KEY' на ваш собственный API-ключ OpenWeatherMap
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';

    // Замените 'CITY_NAME' на название города, для которого вы хотите получить прогноз погоды
    const city = 'Odesa';
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cit = document.getElementById('city');
    weatherElement.innerHTML = `${city}`;
    // // Формируем URL для запроса к API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Отправляем GET-запрос к API
    fetch(url).then((response) => response.json()).then((data) => {

        weatherElement.innerHTML = `${city}`;
        const temperature = data.main.temp;
        const ct = data; // весь объект - результат
        console.log(ct);
        const description = data.weather[0].description;
        const icn = data.weather[0].icon;
        console.log(data.name);
        cit.innerText = data.name;

        iconw.src = `https://openweathermap.org/img/wn/${icn}.png`
        weatherElement.innerHTML = `Текущая температура: ${temperature}°C<br>Описание: ${description}`;
    })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
});



window.addEventListener('DOMContentLoaded', (event) => {
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cit = document.getElementById('city');
    const additionalInfo = document.getElementById('additional-info');

    function getWeather() {
        let cityInput = document.getElementById('cityInput').value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                cit.innerText = data.name;
                let temperature = data.main.temp;
                let description = data.weather[0].description;
                let icn = data.weather[0].icon;

                iconw.src = `https://openweathermap.org/img/wn/${icn}.png`
                weatherElement.innerHTML = `Текущая температура: ${temperature}°C<br>Описание: ${description}`;

                // Дополнительная информация о погоде
                additionalInfo.innerHTML = `Влажность: ${data.main.humidity}%<br>Ветер: ${data.wind.speed} м/с`;
            })
            .catch((error) => {
                console.error('Произошла ошибка:', error);
            });
    }

    // Привязываем функцию к кнопке
    let button = document.querySelector('button');
    button.addEventListener('click', getWeather);
});
