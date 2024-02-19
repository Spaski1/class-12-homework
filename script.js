let inputCountry = document.getElementById("inputCountry");
console.log(inputCountry);
let searchBtn = document.getElementById("searchBtn");
console.log(searchBtn);
let resetBtn = document.getElementById("resetBtn");
let countriesUsingEurBtn = document.getElementById("countriesUsingEurBtn");
let continueTakingEnglishBtn = document.getElementById("countriesTakingEnglishBtn");
let macedoniaBtn = document.getElementById("macedoniaBtn");
let countryContainer = document.getElementById("countryContainer");
let loader = document.getElementById("loader");


async function getCountryData(country) {
    loaderFunction();
    try {
        let response = await fetch(`https://restcountries.com/v2/name/${country}`);
        let data = await response.json();
        console.log(data);
        writeCountryData(data);
        loaderFunction2();
    } catch (error) {
        console.log(error);
    }
}

async function dataForEuro() {
    loaderFunction();
    try {
        let response = await fetch(`https://restcountries.com/v3.1/currency/eur`);
        let data = await response.json();
        console.log(data);
        getCountriesUsingEur(data)
        loaderFunction2();
    } catch (error) {
        console.log(error);
    }
}
async function dataForEnglish(country) {
    loaderFunction();
    try {
        let response = await fetch(`https://restcountries.com/v3.1/lang/english`);
        let data = await response.json();
        console.log(data);
        getCountriesTakingEnglish(data)
        loaderFunction2();
    } catch (error) {
        console.log(error);
    }
}

searchBtn.addEventListener("click", () => {
    countryContainer.innerHTML = "";
    getCountryData(inputCountry.value);
    
})
resetBtn.addEventListener("click", () => {
    countryContainer.innerHTML = "";
    inputCountry.value = "";
})
macedoniaBtn.addEventListener("click", () => {
    countryContainer.innerHTML = "";
    getCountryData("macedonia");
})

function writeCountryData(data) {
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.classList.add("country");
        div.innerHTML = `
        <img src="${data[i].flag}">
        <h2>${data[i].name}</h2>
        <p>${data[i].name} is a country with a population of ${data[i].population}
        with the capitol city ${data[i].capital}.
        </p>
        `;
         countryContainer.appendChild(div);
    }
}


countriesUsingEurBtn.addEventListener("click", () => {
    countryContainer.innerHTML = "";
    dataForEuro();
})
function getCountriesUsingEur(data) {
   for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.classList.add("country");
        div.innerHTML = `
        <img src="${data[i].flags.svg}">
        <h2>${data[i].name.common}</h2>
        <p>${data[i].name.common} is a country with a population of ${data[i].population}
        with the capitol city ${data[i].capital}.
        </p>
        `;
         countryContainer.appendChild(div);
    }
}

continueTakingEnglishBtn.addEventListener("click", () => {
    countryContainer.innerHTML = "";
    dataForEnglish();
})
function getCountriesTakingEnglish(data) {
    for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");
            div.classList.add("country");
            div.innerHTML = `
            <img src="${data[i].flags.svg}">
            <h2>${data[i].name.common}</h2>
            <p>${data[i].name.common} is a country with a population of ${data[i].population}
            with the capitol city ${data[i].capital}.
            </p>
            `;
             countryContainer.appendChild(div);
        }
}
function loaderFunction() {
    loader.style.display = "block";
}
function loaderFunction2() {
    loader.style.display = "none";
}

