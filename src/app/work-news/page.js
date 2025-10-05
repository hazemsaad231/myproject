

import Image from "next/image";
import { ImStatsBars } from "react-icons/im";
import Link from "next/link";

const NewsPage = async() => {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const theData = data.slice(0, 24);
  console.log(data);

  return (
    <div className="flex flex-col">
       <div className="relative w-full h-80">
                    <Image src="/bg.webp" alt="about" fill className="w-full h-full object-cover" priority/>
      
                    <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/30">

                    <h1 className="text-3xl font-bold text-white">أخبار العمل الخيري</h1>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] sm:w-[80%] md:w-[80%] lg:w-[75%] xl:w-[75%] py-12 m-auto">
    {theData.map((item)=>(
<Link href={`work-news/${item.id}`} key={item.id}>
      <div key={item.id} className="border border-gray-300 rounded shadow-sm hover:shadow-lg opacity-90 hover:opacity-100
      duration-300" data-aos = "zoom-in">
        <Image src="/photo.webp" alt="news" width={1000} height={1000} className="w-full shadow-sm object-cover" />
        <h2 className="text-xl font-semibold p-4">مستوى الاستجابة الإنسانية في اليمن حتى شهر يوليو 2025م</h2>
         <div className="flex  items-center gap-1 px-4 mb-12">
     <ImStatsBars className="text-[#0c7f73] text-2xl" />
     <p className="text-gray-500 text-sm">عدد المشاهدات 7 </p>
     </div>
       <hr className="w-full h-[2px] bg-gray-100 border-0 rounded"/>
       <p className="px-4 py-2 text-gray-500 text-[12px]">سبتمبر 27, 2025</p>
      </div>
      </Link>
    ))}
  </div>
    </div>
  );
};

export default NewsPage;