'use client'
import { dataType } from "@/libs/updateDentistProfile";
import Image from "next/image";
import { useAppSelector } from "@/redux/store";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import deleteDentistProfile from "@/libs/deleteDentistProfile";
import { AppDispatch } from "@/redux/store";
import { removeDentist } from "@/redux/features/slice";
export default function DentistCatalogItem({data} :{data : dataType}){
    const role = sessionStorage.getItem('role');
    const token = sessionStorage.getItem('token')
    const tokenX = (token == null) ? '' : token
    const userId = data.id
    const currentState = useAppSelector(state => state.slice.allDentist)

    // const userIdX = (userId == null) ? '' : userId
    console.log(token)
    const dispatch = useDispatch<AppDispatch>()
    // alert(userId)
    // console.log(data.)
    const deleteDentist = async (did : string) => {
        const res = await deleteDentistProfile((userId == undefined) ? '' : userId, tokenX)
        const newState = currentState.filter((data) => data.id != did)
        dispatch(removeDentist(newState))
        alert(res)
    }
    return (
        <div className='px-2'>
            <div className='relative text-black w-[200px] h-[250px] border-2 border-black bg-red-100'>
                {/* <Image src='https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={0} height={0} alt=''/> */}
                <div className='w-full h-[50%] bg-black'></div>
                <div>{data.name}</div>
                <div>{data.tel}</div>
                <div>{data.hospital}</div>
                <div>{data.expertist}</div>
                {
                    (role == 'admin') ?
                    <div className='flex flex-row absolute right-0 bottom-0 px-2'>
                        <button className='px-2'>Edit</button>
                        <button className='' onClick={() => deleteDentist((data.id == undefined) ? '' : data.id)}>Delete</button>
                    </div>
                    :''
                }
            </div>
        </div>
    );
}