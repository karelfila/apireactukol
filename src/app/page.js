import Link from 'next/link';
async function getData() {
    const res = await fetch('https://restcountries.com/v3.1/all')


    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }

    console.log(res)
    return res.json()
}
export default async function Home() {

    const data = await getData()
    console.log(data)
  return (
      <div>
        <h1>Countries</h1>
        <ul>

            {data.map(country => (


                <li key={country.name}>
                    <Link href={`/${country.name.official}`}>

                        <h1> {country.name.official}</h1>

                        <h4>Population: {country.population}</h4>
                        <img src={country.flags.png}/>

                    </Link>
                </li>
            )

            )}

        </ul>
      </div>
  );
};


