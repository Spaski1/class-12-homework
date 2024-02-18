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

async function dataForEuro(country) {
    loaderFunction();
    try {
        let response = await fetch(`https://restcountries.com/v2/name/${country}`);
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
        let response = await fetch(`https://restcountries.com/v2/name/${country}`);
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
        <h2>Name: ${data[i].name}</h2>
        <p>Population: ${data[i].population}</p>
        <p>Capital: ${data[i].capital}</p>
        <p>Area: ${data[i].area} km2&sup2</p>
        `;
         countryContainer.appendChild(div);
    }
}


countriesUsingEurBtn.addEventListener("click", () => {
    countryContainer.innerHTML = "";
    dataForEuro(inputCountry.value);
})
function getCountriesUsingEur(data) {
   for (let i = 0; i < data.length; i++) {
    if (data[i].currencies[0].name === "Euro") {
        let div = document.createElement("div");
        div.classList.add("country");
        div.innerHTML = `
        <img src="${data[i].flag}">
        <h2>Name: ${data[i].name}</h2>
        <p>Population: ${data[i].population}</p>
        <p>Capital: ${data[i].capital}</p>
        <p>Area: ${data[i].area} km2&sup2</p>
        <p>currency: ${data[i].currencies[0].name}</p>
        `;
         countryContainer.appendChild(div);
    }
    
   }
}

continueTakingEnglishBtn.addEventListener("click", () => {
    countryContainer.innerHTML = "";
    dataForEnglish(inputCountry.value);
})
function getCountriesTakingEnglish(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].languages[0].name === "English") {
            let div = document.createElement("div");
            div.classList.add("country");
            div.innerHTML = `
            <img src="${data[i].flag}">
            <h2>Name: ${data[i].name}</h2>
            <p>Population: ${data[i].population}</p>
            <p>Capital: ${data[i].capital}</p>
            <p>Area: ${data[i].area} km2&sup2</p>
            <p>language: ${data[i].languages[0].name}</p>
            `;
             countryContainer.appendChild(div);
        }
       }
}
function loaderFunction() {
    loader.style.display = "block";
}
function loaderFunction2() {
    loader.style.display = "none";
}

