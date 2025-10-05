import Image from "next/image";
import Link from "next/link";
import MapFromPublic from "./mapReact";
import YemenMap from "./mapReact";
import ScrollAnimate from "../components/effects";
const Maps = () => {
    return (
        <div className="p-6 flex flex-col gap-12">
{/* الواقع الاجتماعي في المحافظات */}
            <div className="flex flex-col xl:flex-row gap-5 justify-center items-center">
                <ScrollAnimate> <h1 className="title text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    <Link href="/maps">الواقع الاجتماعي في المحافظات </Link>
                </h1></ScrollAnimate>
               
                <Image src="/map.webp" alt="map" width={1000} height={1000} className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]" />
            </div>
            {/* الواقع الاجتماعي في المحافظات */}
            <div className="flex flex-col xl:flex-row gap-5 justify-center items-center">
                <ScrollAnimate>
                <h1 className="title text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    <Link href="/maps">الواقع الاجتماعي في المحافظات </Link>
                </h1>
                </ScrollAnimate>
                <YemenMap/>
            </div>
        </div>
    );
};

export default Maps