"use client"

import Image from 'next/image'
import styles from './banner.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner(){
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const[index, setIndex] = useState(0)
    const router = useRouter()
    const { data:session } = useSession();
    console.log(session?.user.token)

    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]}
                alt='cover'
                fill={true}
                objectFit='cover'/>
                <div className={styles.bannerText}>
                    <h1 className='text-4x1 font-medium'>where every event finds its venue</h1>
                    <h3 className='text-x1 font-serif'>We'll give you the best most ingenious and perfect venue you can think of; Whether it's a wedding, a corporate party or a private party, we'll make sure it's the best.</h3>
                </div>
                {
                    session?
                    <div className="z-30 absolute top-5 right-10 font-semibold text-white-200 text-xl">Welcome {session.user.name}</div>
                    :null
                }
                <button className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-10 rounded z-30 absolute bottom-0 right-0
                hover:bg-cyan-600 hover:text-white hover:border-transparent"
                onClick={(e)=>{e.stopPropagation(); router.push('/venue');}}>
                    Select Venue
                </button>
        </div>
    );
}