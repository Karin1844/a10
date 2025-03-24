'use client'

import Card from "./Card";
import { useReducer, useEffect } from "react";
import Link from "next/link";

export default function CardPanel() {
    const ratingReducer = ( ratingList:Map<string,number>, action:{type:string, venueName:string, newRating:number})=>{
        switch(action.type){
            case 'change' : 
                let newRatingList = new Map(ratingList);
                newRatingList.set(action.venueName, action.newRating);
                return newRatingList;
                break;
            case 'remove' :
                ratingList.delete(action.venueName);
                return new Map(ratingList);
                break;
            default : 
                return new Map(ratingList);
                break;
        }
    }

    const [ratingList, dispatchChange] = useReducer(ratingReducer, new Map<string,number>)

    const mockVenueRepo = [
    {vid: "001", name:"The Bloom Pavilion", image:"/img/bloom.jpg"},
    {vid: "002", name:"Spark Space", image:"/img/sparkspace.jpg"},
    {vid: "003", name:"The Grand Table", image:"/img/grandtable.jpg"},
    ]

  return (
    <div>
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-around",
        justifyContent: "space-around",
      }}
    >
      {
        mockVenueRepo.map( (venueItem)=>(
          <Link href={`/venue/${venueItem.vid}`} className="w-1/5" key={venueItem.vid}>
          <Card venueName={venueItem.name} imgSrc={venueItem.image} 
          onRate={(venueName:string, value:number)=>dispatchChange({type : 'change', venueName:venueName, newRating:value})}
          />
          </Link>

        ))
      }
    </div>
    <div className="w-full text-xl font-medium">Venue List with Ratings : {ratingList.size}</div>
    { Array.from(ratingList).map((venue)=>(<div key={venue[0]} data-testid={venue[0]}
    onClick={()=>dispatchChange({type:'remove', venueName: venue[0], newRating: venue[1] })}
    className="text-black"
    >{venue[0]} Rating : {venue[1]}</div>))}
    </div>
  );
}
