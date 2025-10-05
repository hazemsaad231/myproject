import Image from "next/image";
import { ImStatsBars } from "react-icons/im";
import Link from "next/link";

const News = async() => {

const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const theData = data.slice(0, 6);
  console.log(data);


    return (
        <div>
           <div className="flex justify-center items-center gap-12">
  <hr className="w-10 sm:w-28 md:w-60 lg:w-80 xl:w-96 h-[2px] bg-[#0c7f73] border-0 rounded" />
  <h1 className="title text-2xl md:text-3xl lg:text-4xl">اخر الاخبار</h1>
  <hr className="w-10 sm:w-28 md:w-60 lg:w-80 xl:w-96 h-[2px] bg-[#0c7f73] border-0 rounded" />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[70%] py-12 m-auto">
    {theData.map((item)=>(
<Link href={`work-news/${item.id}`} key={item.id}>
      <div key={item.id} className="border border-gray-300 rounded shadow-sm hover:shadow-lg opacity-90 hover:opacity-100
      duration-300" data-aos = "zoom-in">
        <Image src="/news.webp" alt="news" width={1000} height={1000} className="w-full shadow-sm object-cover" />
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

export default News;





   