import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#056158] text-white text-center p-3">
      <div className="flex justify-around items-center">
        <div className="flex gap-2">
            <div className="bg-white rounded-xl p-1">
                <FaFacebook className="inline m-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#056158]"/>
            </div>
        <div className="bg-white rounded-xl p-1">
                <FaXTwitter className="inline m-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#056158]"/>
            </div>
        </div>
        <p>جميع الحقوق محفوظة لمنصة تقريب - ٢٠٢٤</p>
      </div>
    </footer>
  );
};

export default Footer;