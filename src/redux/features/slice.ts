import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { bookingType } from "@/components/MyBooking";
import { dataType } from "@/libs/updateDentistProfile";
export type state = {
    bookingItem : [],
    token : string,
    userId : string,
    myBooking : bookingType[],
    allDentist : dataType[]
}
const initialState : state = {
    bookingItem : [],
    token : '',
    userId : '',
    myBooking : [],
    allDentist : [],
}
export const slice = createSlice({
    name : 'Slice',
    initialState,
    reducers : {
        setToken(state, action : PayloadAction<string>) {
            state.token = action.payload
        },
        createUser(state, action : PayloadAction<object>) {
            // state.user = action.payload
        },
        setUserId(state, action : PayloadAction<string>) {
            state.userId = action.payload;
        },
        setMyBooking(state, action : PayloadAction<bookingType[]>) {
            state.myBooking = action.payload
        },
        setAllDentist(state, action : PayloadAction<dataType[]>){
            state.allDentist = action.payload
        },
        addDentist(state, action : PayloadAction<dataType>){
            state.allDentist.push(action.payload);

        },
        removeDentist(state, action : PayloadAction<dataType[]>){
            state.allDentist = action.payload
        }
    }
})

export const {addDentist, removeDentist, setAllDentist, setMyBooking,setToken, createUser, setUserId} = slice.actions
export default slice.reducer