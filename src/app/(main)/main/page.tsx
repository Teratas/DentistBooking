import MainBanner from "@/components/MainBanner";
import MainSlideBar from "@/components/MainSlideBar";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
export default function MainPage() {
    
    return (
        <main className='text-black'>
            <Suspense fallback={<CircularProgress />}>
                <MainBanner />
                
            </Suspense>
        </main>
    );
}