'use client'

import Image from 'next/image'
import styles from './card.module.css'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState, useEffect} from 'react';

export default function Card({venueName, imgSrc, onRate}:{venueName:string, imgSrc:string, onRate?:Function}){
    const [value, setValue] = useState<number | null>(0);

    if(onRate){
    useEffect( () => {
        if(value==null){
            onRate(venueName,0);
        }else{
            onRate(venueName,value);
        }
    }, []);
    }

    return(
        <InteractiveCard contentName={venueName}>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                    alt='Venue Image'
                    fill={true}
                    className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-black'>{venueName}</div>
            { 
            onRate?
            <Rating className='h-[10%] p-auto'
            id={venueName+" Rating"}
            name={venueName+" Rating"}
            data-testid={venueName+" Rating"}
            value = {value}
            onChange={(event, newValue) => {
                event.stopPropagation();
                setValue(newValue);
                onRate(venueName,newValue);
                if(newValue==null)onRate(venueName,0);
            }}
            onClick={(e)=>{
                e.stopPropagation();
            }}
            /> 
            : ''
          }
        </InteractiveCard>
    );
}