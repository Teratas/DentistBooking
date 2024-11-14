import MainBanner from "@/components/MainBanner";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
export default function MainPage() {
    

    return (
        <main className='text-black'>
            <div className={`z-0 w-[100vw] h-[100vh] z-10 top-0 absolute bg-gradient-to-r from-white to-cyan-400`}>
            <Suspense fallback={<CircularProgress />}>
                    <MainBanner />
                
                </Suspense>
            </div>
           
        </main>
    );
}