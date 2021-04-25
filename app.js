fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
    const countryInfo = document.getElementById('countryInfoContainer')

    countries.forEach(country => {
        const nameAndCapital = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        h3.innerText = country.name;
        p.innerText = country.capital;

        nameAndCapital.appendChild(h3);
        nameAndCapital.appendChild(p);

        countryInfo.appendChild(nameAndCapital);
    });
}
