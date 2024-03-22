import { CarCard, CustomFilter, Hero, SearchBar } from '@/components/Index'
import { CarProps } from '@/types'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length

  console.log(isDataEmpty)

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div id='discover' className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filers'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>

        {isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car: CarProps) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no result</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  )
}
