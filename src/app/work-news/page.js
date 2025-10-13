

import { ImStatsBars } from "react-icons/im";
import Link from "next/link";
import Bg from "../components/bg";
import Image from "next/image";
import { Api } from "../components/api";

const NewsPage = async() => {

  const response = await fetch(Api);
  const data = await response.json();
  const theData = data
  console.log(data);

  return (
    <div className="flex flex-col">
       <div className="relative w-full h-80">
                  <Bg/>
      
                    <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/30">

                    <h1 className="text-3xl font-bold text-white">أخبار العمل الخيري</h1>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] sm:w-[80%] md:w-[80%] lg:w-[75%] xl:w-[75%] py-12 m-auto">
    {theData.map((item)=>(
<Link href={`work-news/${item.id}`} key={item.id}>
      <div key={item.id} className="border border-gray-300 rounded shadow-sm hover:shadow-lg opacity-90 hover:opacity-100
      duration-300">
        <Image src={item.img} alt="news" width={1000} height={1000} className="w-full shadow-sm object-cover h-60" />
        <h2 className="text-xl font-semibold p-4 mb-4 h-24">{item.title}</h2>
         <div className="flex  items-center gap-1 px-4 mb-12">
     <ImStatsBars className="text-[#0c7f73] text-2xl" />
     <p className="text-gray-500 text-sm">عدد المشاهدات {item.views} </p>
     </div>
       <hr className="w-full h-[2px] bg-gray-100 border-0 rounded"/>
       <p className="px-4 py-2 text-gray-500 text-[12px]">{item.date}</p>
      </div>
      </Link>
    ))}
  </div>
    </div>
  );
};

export default NewsPage;