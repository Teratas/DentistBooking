import Image from "next/image";
import { assets } from "../../public/images/assets";
export default function MainBanner() {
    return (
        <div>
            <Image src={assets.mainBanner} alt=''/>
        </div>
    );
}