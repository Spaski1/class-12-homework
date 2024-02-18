let inputCountry = document.getElementById("inputCountry");
console.log(inputCountry);
let searchBtn = document.getElementById("searchBtn");
console.log(searchBtn);
let resetBtn = document.getElementById("resetBtn");
let continueUcingEurBtn = document.getElementById("countriesUsingEurBtn");
let continueTakingEnglishBtn = document.getElementById("countriesTakingEnglishBtn");
let macedoniaBtn = document.getElementById("macedoniaBtn");
let countryContainer = document.getElementById("countryContainer");
console.log(countryContainer);





async function getCountryData(country) {
    try {
        let response = await fetch(`https://restcountries.com/v2/name/${country}`);
        let data = await response.json();
        console.log(data);
        writeCountryData(data);
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
        <h2>Name:${data[i].name}</h2>
        <p>Population:${data[i].population}</p>
        <p>Capital:${data[i].capital}</p>
        <p>Area:${data[i].area}</p>
        
        `;
         countryContainer.appendChild(div);
    }
    
    
   
}
// List language names and currency names in the table as well ( only names and divided by, EX: Spanish, English )
// * Add loading image while it is getting the data
// * Add a filter by name, area, and population in descending order
// * Add a filter by name, area, and population in ascending order




