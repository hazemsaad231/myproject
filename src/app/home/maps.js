import Image from "next/image";
import Link from "next/link";
import MapFromPublic from "./mapReact";
import YemenMap from "./mapReact";
const Maps = () => {
    return (
        <div className="p-8">
{/* الواقع الاجتماعي في المحافظات */}
            <div className="flex gap-10 justify-center items-center">
                <h1 className="title mb-3">
                    <Link href="/maps">الواقع الاجتماعي في المحافظات </Link>
                </h1>
                <Image src="/map.webp" alt="map" width={1000} height={1000} className="w-1/2" />
            </div>
            {/* الواقع الاجتماعي في المحافظات */}
            <div className="flex gap-10 justify-center items-center">
                <h1 className="title mb-3">
                    <Link href="/maps"> دليل الجمعيات </Link>
                </h1>
                <YemenMap/>
            </div>
            {/* الواقع الاجتماعي في المحافظات */}
            <div className="flex">
               
            </div>
        </div>
    );
};

export default Maps