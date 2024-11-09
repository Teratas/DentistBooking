import UserProfile from "@/components/UserProfile";
import MyBooking from "@/components/MyBooking";
export default function ProfilePage() {
    return (
        <main className='text-black w-full h-[100%]'>
            <div className="w-[100vw] h-[100vh] z-10 top-0 absolute bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <div className=" m-auto w-[100%] h-[100vh] ">
                    <div className='relative top-0'>

                        <div>
                            <div className='text-2xl text-white font-serif absolute left-[25%] top-[16vh]'>Your Profile</div>
                            <UserProfile />
                        </div>
                        <div>
                            <div className='text-2xl text-white font-serif absolute left-[25%] top-[46vh]'>
                                Booking
                            </div>
                            < MyBooking/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}