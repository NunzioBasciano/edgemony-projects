import { API_KEY } from "../key.js";
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

const cardGen = (obj, backgroundImage) => {

    const containerEl = document.createElement('div');
    containerEl.className = 'city-card';
    containerEl.style.backgroundImage = `url(${backgroundImage})`

    const titleCard = document.createElement('h2');
    titleCard.textContent = obj.name;
    titleCard.className = 'city-card-title';

    const iconWeatherEl = document.createElement('img');
    const image = obj.weather.map(el => el.icon)
    iconWeatherEl.src = `https://openweathermap.org/img/wn/${image}@2x.png`;
    const description = obj.weather.map(el => el.description)
    iconWeatherEl.alt = description;
    iconWeatherEl.className = 'city-card-weather-image';

    const containerTempEl = document.createElement('div');
    containerTempEl.className = 'city-card-container-temperature';

    const tempTitleEl = document.createElement('h3');
    tempTitleEl.textContent = 'TEMPERATURE';
    tempTitleEl.className = 'city-card-temperature-title';

    const containerBottomTempEl = document.createElement('div');
    containerBottomTempEl.className = 'city-card-temperature-bottom-section';

    const containerTempLeftEl = document.createElement('div');
    containerTempLeftEl.className = 'city-card-temperature-section-left';

    const temperatureValueEl = document.createElement('h4');
    temperatureValueEl.className = 'city-card-temperature-value';
    temperatureValueEl.textContent = `${obj.main.temp} °C`;

    const temperatureFeelsLikeEl = document.createElement('p');
    temperatureFeelsLikeEl.className = 'city-card-temperature-feels-like';
    temperatureFeelsLikeEl.textContent = 'PERCEPITA';

    const temperatureFeelsLikeValueEl = document.createElement('p');
    temperatureFeelsLikeValueEl.className = 'city-card-temperature-feels-like-value';
    temperatureFeelsLikeValueEl.textContent = `${obj.main.feels_like} °C`;

    const containerTempRightEl = document.createElement('div');
    containerTempRightEl.className = 'city-card-temperature-section-right';

    const containerTempMinEl = document.createElement('div');
    containerTempMinEl.className = 'city-card-temperature-min-container';

    const tempMinTitleEl = document.createElement('h5');
    tempMinTitleEl.className = 'city-card-temperature-min';
    tempMinTitleEl.textContent = 'MINIME';

    const tempMinValueEl = document.createElement('h4');
    tempMinValueEl.className = 'city-card-temperature-min-value';
    tempMinValueEl.textContent = `${obj.main.temp_min} °C`;

    const containerTempMaxEl = document.createElement('div');
    containerTempMaxEl.className = 'city-card-temperature-max-container';

    const tempMaxTitleEl = document.createElement('h5');
    tempMaxTitleEl.className = 'city-card-temperature-max';
    tempMaxTitleEl.textContent = 'MASSIME';

    const tempMaxValueEl = document.createElement('h4');
    tempMaxValueEl.className = 'city-card-temperature-max-value';
    tempMaxValueEl.textContent = `${obj.main.temp_max} °C`;

    const containerWindEl = document.createElement('div');
    containerWindEl.className = 'city-card-container-wind';

    const windTitleEl = document.createElement('h3');
    windTitleEl.textContent = 'VENTI';
    windTitleEl.className = 'city-card-wind-title';

    const containerBottomWindEl = document.createElement('div');
    containerBottomWindEl.className = 'city-card-wind-bottom-section';

    const containerWindSpeedEl = document.createElement('div');
    containerWindSpeedEl.className = 'city-card-wind-container-speed';

    const windSpeedTitleEl = document.createElement('h5');
    windSpeedTitleEl.className = 'city-card-wind-speed';
    windSpeedTitleEl.textContent = 'VELOCITA\'';

    const windSpeedValueEl = document.createElement('h4');
    windSpeedValueEl.className = 'city-card-wind-speed-value';
    windSpeedValueEl.textContent = `${obj.wind.speed} m/s`;

    const containerWindDirectionEl = document.createElement('div');
    containerWindDirectionEl.className = 'city-card-wind-container-direction';

    const windDirectionTitleEl = document.createElement('h5');
    windDirectionTitleEl.className = 'city-card-wind-direction';
    windDirectionTitleEl.textContent = 'DIREZIONE';

    const windDirectionValueEl = document.createElement('h4');
    windDirectionValueEl.className = 'city-card-wind-direction-value';

    windDirectionValueEl.textContent = getWindDirection(obj.wind.deg);

    const containerRainCloudsEl = document.createElement('div');
    containerRainCloudsEl.className = 'city-card-container-rain-clouds';

    const containerRainEl = document.createElement('div');
    containerRainEl.className = 'city-card-container-rain';

    const rainTitleEl = document.createElement('h5');
    rainTitleEl.className = 'city-card-rain-title';
    rainTitleEl.textContent = 'PIOGGE';

    const rainValueEl = document.createElement('h4');
    rainValueEl.className = 'city-card-rain-value';
    rainValueEl.textContent = obj.rain && obj.rain['1h'] > 0 ? `${obj.rain['1h']} mm/h` : '0 mm/h';

    /* rainValueEl.textContent = obj.rain || '0'; */

    const containerCloudsEl = document.createElement('div');
    containerCloudsEl.className = 'city-card-container-clouds';

    const cloudsTitleEl = document.createElement('h5');
    cloudsTitleEl.className = 'city-card-clouds-title';
    cloudsTitleEl.textContent = 'NUVOLE';

    const cloudsValueEl = document.createElement('h4');
    cloudsValueEl.className = 'city-card-clouds-value';
    cloudsValueEl.textContent = `${obj.clouds.all} %`;

    containerEl.append(titleCard,
        iconWeatherEl,
        containerTempEl,
        containerWindEl,
        containerRainCloudsEl);

    /* SEZIONE TEMPERATURA */
    containerTempEl.append(tempTitleEl, containerBottomTempEl);
    containerBottomTempEl.append(containerTempLeftEl, containerTempRightEl);
    containerTempLeftEl.append(temperatureValueEl, temperatureFeelsLikeEl, temperatureFeelsLikeValueEl);
    containerTempRightEl.append(containerTempMinEl, containerTempMaxEl);
    containerTempMinEl.append(tempMinTitleEl, tempMinValueEl);
    containerTempMaxEl.append(tempMaxTitleEl, tempMaxValueEl);
    /* END SEZIONE TEMPERATURA */

    /* SEZIONE VENTI */
    containerWindEl.append(windTitleEl, containerBottomWindEl);
    containerBottomWindEl.append(containerWindSpeedEl, containerWindDirectionEl);
    containerWindSpeedEl.append(windSpeedTitleEl, windSpeedValueEl);
    containerWindDirectionEl.append(windDirectionTitleEl, windDirectionValueEl);
    /* END SEZIONE VENTI */

    /* SEZIONE PIOGGE E NUVOLE */
    containerRainCloudsEl.append(containerRainEl, containerCloudsEl);
    containerRainEl.append(rainTitleEl, rainValueEl);
    containerCloudsEl.append(cloudsTitleEl, cloudsValueEl);
    return containerEl;
    /* END SEZIONE PIOGGE E NUVOLE */
}

const handleRequest = async (requestUrl, options = '') => {
    try {
        // Salviamo la risposta in una costante
        const res = await fetch(requestUrl);

        // Controllo dello Stato della Risposta: 

        if (!res.ok) { // Se res.ok è false, 
            const errorData = await res.json(); // viene tentato di leggere il corpo della risposta come JSON

            throw new Error(errorData.message || 'Request failed'); // Viene lanciato un errore con il messaggio preso dalla risposta JSON (errorData.message
            // Se errorData.message non è disponibile, viene usato il messaggio predefinito 'Request failed'.
        }
        if (res.status === 204) { // Se lo status della risposta è 204 (No Content) 

            return null; // la funzione restituisce null, perché una risposta con status 204 non ha contenuto

        }
        return await res.json();

    } catch (error) {

        throw error;
    }
};

const handleFeedback = (error, errorMessage = null, successMessage = null) => {

    // Seleziona gli elementi nel DOM per mostrare i feedback
    const errorFeedbackEl = document.querySelector('.feedback-error');
    const successFeedbackEl = document.querySelector('.feedback-success');

    if (error) {
        console.error(error);
        errorFeedbackEl.textContent = errorMessage || `Error: ${error.message}`;
        errorFeedbackEl.style.display = 'block';
        successFeedbackEl.style.display = 'none';
    } else {
        successFeedbackEl.textContent = successMessage || 'Operation successful';
        successFeedbackEl.style.display = 'block';
        errorFeedbackEl.style.display = 'none';
    }

    setTimeout(() => {
        errorFeedbackEl.style.display = 'none';
        successFeedbackEl.style.display = 'none';
    }, 3000); // Nasconde il feedback dopo 3 secondi
};

/*  const res = await fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=it`) */
const GET = async (cityName) => {
    try {
        const url = (`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=it`);

        const res = await handleRequest(url);
        return res;

    } catch (error) {
        handleFeedback(error, `Error in search product: ${error.message}`);
    }
};



function getWindDirection(degrees) {
    if (degrees >= 0 && degrees < 22.5) {
        return 'Tramontana - N';
    } else if (degrees >= 22.5 && degrees < 67.5) {
        return 'Grecale - NE';
    } else if (degrees >= 67.5 && degrees < 112.5) {
        return 'Levante - E';
    } else if (degrees >= 112.5 && degrees < 157.5) {
        return 'Scirocco - SE';
    } else if (degrees >= 157.5 && degrees < 202.5) {
        return 'Ostro - S';
    } else if (degrees >= 202.5 && degrees < 247.5) {
        return 'Libeccio - SO';
    } else if (degrees >= 247.5 && degrees < 292.5) {
        return 'Ponente - O';
    } else if (degrees >= 292.5 && degrees < 337.5) {
        return 'Maestrale -NO';
    } else if (degrees >= 337.5 && degrees <= 360) {
        return 'Tramontana - N';
    } else {
        return 'Invalid degrees'; // Gestione dei casi non validi
    }
}

const getDataTime = () => {

    const now = new Date();

    const huors = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const dayOfWeek = getStringday(now.getDay());

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${huors}:${minutes} - ${dayOfWeek} ${day}/${month}/${year}`;

    return formattedDate;
}

const getStringday = (value) => {
    if (value === 1) {
        return 'lunedì';
    } else if (value === 2) {
        return 'martedì';
    } else if (value === 3) {
        return 'mercoledì';
    } else if (value === 4) {
        return 'giovedì';
    } else if (value === 5) {
        return 'venerdì';
    } else if (value === 6) {
        return 'sabato';
    } else if (value === 7) {
        return 'domenica';
    }
}

const updateTime = () => {
    const currentDate = getDataTime();
    const dateEl = document.querySelector('.date');
    dateEl.textContent = currentDate;
}

updateTime();
setInterval(updateTime, 1000);

export {
    cardGen,
    handleRequest,
    handleFeedback,
    GET,
    getDataTime,
    getStringday
}