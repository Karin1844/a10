"use client";
import { useAppSelector } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BookingList() {
  const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {bookItems.length == 0
        ? "No Venue Booking"
        : bookItems.map((bookItem) => (
            <div
              className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
              key={bookItem.venue}
            >
              <div className="text-md">
                Name-LastName: {bookItem.nameLastname}
              </div>
              <div className="text-md">Tel: {bookItem.tel}</div>
              <div className="text-md">Venue: {bookItem.venue}</div>
              <div className="text-md">Booking Date: {bookItem.bookDate}</div>
              <button
                className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-10 rounded z-30 absolute bottom-0 right-0
                hover:bg-cyan-600 hover:text-white hover:border-transparent"
                onClick={(e) => {
                    dispatch(removeBooking(bookItem))
                }}
              >
                Remove Booking
              </button>
            </div>
          ))}
    </>
  );
}
