import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { bookingType } from "@/components/MyBooking";
import { dataType } from "@/libs/updateDentistProfile";

export type state = {
    bookingItem : [],
    token : string,
    userId : string,
    allBooking : bookingType[],
    allDentist : dataType[],

}
const initialState : state = {
    bookingItem : [],
    token : '',
    userId : '',
    allBooking : [],
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
            state.allBooking = action.payload
        },
        setAllDentist(state, action : PayloadAction<dataType[]>){
            state.allDentist = action.payload
        },
        addDentist(state, action : PayloadAction<dataType>){
            state.allDentist.push(action.payload);

        },
        removeDentist(state, action : PayloadAction<string>){
            const needDel = action.payload
            const newData = state.allDentist.filter((data) => data.id != needDel)
            state.allDentist = newData
        },
        changedentistData(state, action: PayloadAction<{data : dataType, id : string}>) {
            const currentData = state.allDentist.map((data) => {
                if(data.id == action.payload.id){
                    return action.payload.data
                }
                else return data
            } )
            state.allDentist = currentData
        },
        removeBooking(state, action : PayloadAction<string>) {
            const needDel = action.payload
            const newData = state.allBooking.filter((data) => data._id !== needDel)
            state.allBooking = newData;
        },
        addBooking(state, action : PayloadAction<bookingType>){
            state.allBooking.push(action.payload)
        },
        changeBooking(state, action : PayloadAction<{bookingDate : string, userId : string}>){
            const newData = state.allBooking.map((data) => {
                if(data.user == action.payload.userId){
                    data.bookingDate = action.payload.bookingDate
                    return data
                }
                else return data;
            })
            state.allBooking = newData
        },
        removeDentistAttackBooking(state, action : PayloadAction<string>) {
            const newBookingArray = state.allBooking.filter((data) => 
                data.dentist.id != action.payload
            )
            state.allBooking = newBookingArray
        },
        editDentistAttackBooking(state, action  : PayloadAction<dataType>){
            const newBookingArray = state.allBooking.map((data)=> {
                if(data.dentist.id == action.payload.id){
                    data.dentist = action.payload
                    return data
                }
                else return data
            })
            state.allBooking = newBookingArray
        }
    }
})

export const {editDentistAttackBooking, removeDentistAttackBooking, changeBooking, addBooking,removeBooking,changedentistData, addDentist, removeDentist, setAllDentist, setMyBooking,setToken, createUser, setUserId} = slice.actions
export default slice.reducer