import UserProfile from "@/components/UserProfile";
export default function ProfilePage() {
    return (
        <main className='text-black w-full h-[100%]'>
            <div className="w-full absolute h-full bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <div className=" m-auto w-[100%] h-[100vh] ">
                    <UserProfile />
                </div>
            </div>
        </main>
    );
}