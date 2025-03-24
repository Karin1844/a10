import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems: []}

export const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            const newItems = state.bookItems.filter(obj => {
                return ((obj.bookDate != action.payload.bookDate)
                || (obj.venue != action.payload.venue)
            )
            })
            newItems.push(action.payload);
            state.bookItems = newItems;
        },
        removeBooking: (state, action:PayloadAction<BookingItem>)=>{
            const newItems = state.bookItems.filter(obj => {
                return ((obj.bookDate != action.payload.bookDate)
                || (obj.venue != action.payload.venue)
            )
            })
            state.bookItems = newItems;
        }
    }

})

export const { addBooking , removeBooking } = bookSlice.actions
export default bookSlice.reducer