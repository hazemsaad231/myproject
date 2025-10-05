import Image from "next/image";

const Bg = () => {
    return (
        <div>
            <Image src="/bg.webp" alt="about" fill className="w-full h-full object-cover" priority/>
        </div>
    );
}

export default Bg