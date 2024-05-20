import HotelForm from '@/components/HotelForm'
import {  readHotelsService } from '@/server/BL/services/hotel.service'
import { connectToMongo } from '@/server/connectToMongo'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'


export default async function Airbnb() {
  // unstable_noStore()
  // await new Promise(resolve => setTimeout(resolve, 7000))
  await connectToMongo()
  const hotels = await readHotelsService()

  return (
    <div>

      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {hotels.map((hotel) => (
          <Link className='flex flex-col' key={hotel._id} href={`/airbnb/${hotel._id}`} >
            <Image src={hotel.image} alt={hotel.title} width={600} height={400} />
            {hotel.title}
          </Link>
        ))}
      </section>
      <HotelForm/>

    </div>
  )
}
