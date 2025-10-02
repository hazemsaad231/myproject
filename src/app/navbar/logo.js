import Image from "next/image"
const Logo = () => {
    return (
        <div className="relative z-20 rounded-2xl bg-white p-1 shadow-2xl" >
            <Image src="/logo.webp" alt="logo" width={150} height={150} />
        </div>
    );
}
export default Logo