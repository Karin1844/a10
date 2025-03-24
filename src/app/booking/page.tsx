"use client"
import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField, SelectChangeEvent } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { useRef } from "react";


export default function Booking() {

  const [bookDate, setBookDate] = useState<Dayjs|null>(null)
  const [nameLastname, setNameLastname] = useState<string|null>(null);
  const [tel, setTel] = useState<string|null>(null);
  const [ venueName, setVenueName ] = useState('Bloom');


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameLastname(event.target.value)
  }

  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target.value)
  }

  const handleVenueChange = (event: SelectChangeEvent) => {
    setVenueName(event.target.value)
  }

  const dispatch = useDispatch<AppDispatch>()

  const makeBooking = () => {
    if( bookDate && nameLastname && tel && venueName){
      const item:BookingItem = {
        nameLastname : nameLastname,
        tel : tel,
        venue : "placeholder",
        bookDate : dayjs(bookDate).format("YYYY/MM/DD")
      }
      switch( venueName ){
        case "Bloom" :
          item.venue = "The Bloom Pavilion"
          break
        case "Spark" :
          item.venue = "Spark Space"
          break
        case "GrandTable" :
          item.venue = "The Grand Table"
          break
        default : 
          break
      }
      alert("Booking Successful")
      dispatch(addBooking(item))
    }
  }

  return (
    <main className ="w-[100%] flex flex-col items-center space-y-9 my-25">
        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
          className="w-[15%]"
          value={nameLastname}
          onChange={handleNameChange}
        />
        <TextField
          variant="standard"
          name="Contract-Number"
          label="Contact-Number"
          className="w-[15%]"
          value={tel}
          onChange={handleTelChange}
        />
        <Select variant="standard" id="venue" className="w-[15%]" value={venueName} onChange={(e)=>handleVenueChange(e)}>
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
        <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}/>
        <button name="Book Venue" className="block rounded-mg bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" onClick={makeBooking}>Book Venue</button>
    </main>
  );
}
