import Image from "next/image";
import stypes from './animation.module.css'
import { assets } from "../../public/images/assets";
export default function MainBanner() {
    return (
        <div data-test = "banner" className='text-black'>
                <div className='z-0 relative w-[100vw] h-[100vh] w-[100vw]'>
                    {/* <Image src={assets.mainBackground} alt='' fill={true}/> */}
                    <div className=' absolute mt-[60px]'>
                        <div className='z-20 w-[50vw] absolute left-[10vw] top-[20vh]'>
                            <div className="font-bold tracking-wider font-serif text-5xl ">
                                <div>
                                    Dental Care
                                </div>
                                <div className='text-teal-500'>
                                    Stay healthy
                                </div>
                            </div>
                            <div className='py-[2vh]'>
                                Good health begins with a confident smile. Book your dental appointment today and take the first step towards your best self!
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-[10vw] top-[20vh] z-10'>
                        {/* <div className='w-[30vw]/ bg-black h-[30vh] absolute z-0'></div> */}
                        <div className='z-10'>
                            <Image src={assets.mainImg} alt='' width={250} className=' w-[22vw] h-[65vh] rounded-lg hover:shadow-lg'/>
                        </div>
                     </div>
                </div>
                
                


        </div>
    );
}