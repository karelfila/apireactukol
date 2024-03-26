import Link from 'next/link';


export default async function Detail({params}) {

    async function getData() {
        const res = await fetch(`https://restcountries.com/v3.1/name/${params.country}`)


        if (!res.ok) {

            throw new Error('Failed to fetch data')
        }

        console.log(res)
        return res.json()
    }

    const data = await getData();

    return (
        <main>
        {
            data.map(country => (<div key={country.name}>

                    <h1>{country.name.official}</h1>

                    <img src={country.flags.png}/>

                    <h2>Continent: {country.continents}</h2>

                    <h2>Borders: {country.borders}</h2>
                    <h2>Area: {country.area}</h2>
                    <h2>Acronym: {country.cca2}</h2>
                </div>
            ))
        }
     </main>
    );
}