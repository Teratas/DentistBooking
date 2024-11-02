import mongoose from "mongoose";
import { dataType } from "@/libs/updateDentistProfile";
const DentistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"],
      },
      hospital: {
        type: String,
        required: [true, "Please add hospital"],
      },
      address: {
        type: String,
        required: [true, "Please add an address"],
      },
      expertist: {
        type: String,
        required: [true, "Please add expertist"],
      },
      tel: {
        type: String,
      },
      picture: {
        type: String,
        required: [true, "Please add URL to dentist picture"],
      },
})
const dentist = mongoose.models.dentist || mongoose.model('dentist', DentistSchema)
export default dentist;
/*
export interface dataType  {
    name : string,
    hospital : string,
    address : string,
    expertise : string,
    tel : string,
    picture : string,
    id : string,
}
*/