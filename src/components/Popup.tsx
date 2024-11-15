import { CircularProgress } from "@mui/material";
export default function Popup({children, trigger, isSuccess, setTrigger} 
    : {children : React.ReactNode, trigger : boolean, isSuccess : boolean, setTrigger : Function}){
    return (
        <div className='w-[100vw] h-[100vh] relative'>
            <div className='font-serif absolute top-[50%] translate-y-[-50%] w-[50%] h-[20%] left-[50%] bg-cyan-300 translate-x-[-50%]'>
                {
                    (trigger == true) ?
                <div className='w-full h-full z-10 border-2 border-black'>
                    
                    {
                        (isSuccess == true) ?
                    <div className='w-full text-center h-full z-30'>
                        <div className='absolute top-[45%] left-[45%] text-xl font-bold'>
                            {children}
                        </div>
                        <button onClick={() => {
                            setTrigger(false)
                            }} className='z-20 w-[20%] h-[10%] bg-slate-300 rounded-lg absolute right-8 top-5'>Close</button>
                    </div> :
                    <div className=''>

                        <div className='absolute top-[30%] left-[50%] translate-x-[-50%]'>
                            <CircularProgress />
                            <div className=' '>Loading...</div>
                        </div>

                    </div>

                    }
                </div> : ''
                }
            </div>
        </div>
    );
}