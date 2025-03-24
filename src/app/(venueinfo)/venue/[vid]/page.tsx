import Image from "next/image";
import getVenue from "@/libs/getVenue"

export default async function VenueDetailPage({params}:{params: {vid:string}}){

    /*
    const mockVenueRepo = new Map();
    mockVenueRepo.set("001", { name:"The Bloom Pavilion", image:"/img/bloom.jpg"})
    mockVenueRepo.set("002", { name:"Spark Space", image:"/img/sparkspace.jpg"})
    mockVenueRepo.set("003", { name:"The Grand Table", image:"/img/grandtable.jpg"})
    */

    const venueInfo = await getVenue(params.vid);

    return(
        <main className="p-5">
            <h1 className='text-xl text-center font-medium'>{venueInfo.data.name}</h1>
            <div className="flex felx-row my-10">
                <Image src={venueInfo.data.picture}
                    alt='Venue Picture'
                        width={0}
                        height={0}
                        sizes="100vw"
                        className='rounded-lg w-[30%] bg-black'/>
                        <div className="flex flex-col mx-5 my-5">
                        <div className='text-md text-black'>Name : {venueInfo.data.name}</div>
                        <div className='text-md text-black'>Address : {venueInfo.data.address}</div>
                        <div className='text-md text-black'>District : {venueInfo.data.district}</div>
                        <div className='text-md text-black'>Province : {venueInfo.data.province}</div>
                        <div className='text-md text-black'>Postalcode : {venueInfo.data.postalcode}</div>
                        <div className='text-md text-black'>Tel : {venueInfo.data.tel}</div>
                        <div className='text-md text-black'>DailyRate : {venueInfo.data.dailyrate}</div>
                        </div>

            </div>
        </main>
    )
}