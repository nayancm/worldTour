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
        `
        nameAndCapitalDiv.innerHTML = nameAndCapitalInfo;
        countryInfo.appendChild(nameAndCapitalDiv);
    });
}
