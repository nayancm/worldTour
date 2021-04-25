fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
    const countryInfo = document.getElementById('countryInfoContainer')

    countries.forEach(country => {
        const nameAndCapitalDiv = document.createElement("div");
        nameAndCapitalDiv.className = "nameAndCapitalClass";

        const nameAndCapitalInfo = `
        <h2 id="countryId">Country: ${country.name}</h2>
        <h3 id="capitalId">Capital: ${country.capital}</h3>
        <button id="countryDetail" onclick="showMoreInfo('${country.name}')">Details...</button>
        `
        nameAndCapitalDiv.innerHTML = nameAndCapitalInfo;
        countryInfo.appendChild(nameAndCapitalDiv);

    });
}

const showMoreInfo = countryName =>{
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderInfo(data[0]));
}

const renderInfo = oneCountry =>{
    const countryMoreInfos = document.getElementById('countryMoreInfo');
    countryMoreInfos.innerHTML = `
    <h1>Name: ${oneCountry.name}</h1>
    <h3>Area: ${oneCountry.area}</h3>
    <h3>Population: ${oneCountry.population}</h3>
    <img src="${oneCountry.flag}">
    `
}