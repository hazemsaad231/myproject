import { TheData, Statistics } from "@/data/data";
import ScrollAnimate from "../components/effects";

const Add = () => {
    return (
        <div className="py-20 px-5 flex flex-col justify-center items-center ">

            {/* الجزء الاول */}
             <ScrollAnimate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
            {TheData.map((item) => (
               
                <div key={item.id} className="cursor-pointer  p-10 flex flex-col justify-center items-center bg-gray-100 rounded-4xl">
                    <h1 className="text-8xl text-[#0c7f73] mb-6">{item.icon}</h1>
                     <h1 className="title w-full text-center text-xl sm:text-xl md:text-2xl">{item.title}</h1>
                </div>
               
            ))}
            </div>
 </ScrollAnimate>
            {/* الجزء الثاني */}
            <div>

             <div className="flex justify-center items-center gap-12">
                  <hr className="w-10 sm:w-28 md:w-60 lg:w-80 h-1 bg-[#0c7f73] border-0 rounded" />
                  <ScrollAnimate><h1 className="title text-2xl md:text-3xl lg:text-4xl">إحصــائيـــاتـــنــا</h1></ScrollAnimate>
  
    <hr className="w-10 sm:w-20 md:w-60 lg:w-80 h-2 bg-[#0c7f73] border-0 rounded" />

</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
                {Statistics.map((item) => (
                <div key={item.id} className="cursor-pointer p-4 flex flex-col justify-center items-center rounded-4xl">
                    <div className="bg-[#faedcd] w-20 h-20 rounded-full">  <h1 className="text-center text-5xl text-[#0c7f73] font-bold relative top-12">{item.number}</h1></div>
                    <h1 className="title  w-80 text-center mt-8" >{item.title}</h1>
                    
                </div>
            ))}
                </div>
  
            </div>


        </div>
    );
}

export default Add