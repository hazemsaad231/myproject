import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#056158] text-white text-center p-3">
      <div className="flex justify-around items-center">
        <div className="flex gap-2">
            <div className="bg-white rounded-xl p-2">
                <FaFacebook className="inline m-2 text-2xl text-[#056158]"/>
            </div>
        <div className="bg-white rounded-xl p-2">
                <FaXTwitter className="inline m-2 text-2xl text-[#056158]"/>
            </div>
        </div>
        <p>جميع الحقوق محفوظة لمنصة تقريب - ٢٠٢٤</p>
      </div>
    </footer>
  );
};

export default Footer;