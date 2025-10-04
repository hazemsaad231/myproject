import Image from "next/image"
const Logo = () => {
    return (
       <div className="logo relative z-20 rounded-2xl bg-white p-2 shadow-2xl flex items-center justify-center">
  <Image
    src="/logo.webp"
    alt="logo"
    width={120}
    height={120}
    className="
      w-[40px] h-[40px]   /* موبايل */
      sm:w-[60px] sm:h-[60px]  /* شاشات صغيرة */
      md:w-[80px] md:h-[80px]  /* تابلت */
      lg:w-[120px] lg:h-[120px]  /* لابتوب */
      xl:w-[160px] xl:h-[160px]  /* شاشات كبيرة */
      object-contain
    "
    priority
  />
</div>

    );
}
export default Logo


export const SmallLogo = () => {
    return (
        <div className="relative z-20 rounded-2xl bg-white p-1 shadow">
                         <Image
                           src="/logo.webp"
                           alt="logo"
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="w-[56px] h-[56px] object-contain"
                           priority
                         />
                       </div>

    );
}
