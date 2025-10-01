import { TheData, Statistics } from "@/data/data";

const Add = () => {
    return (
        <div className="p-20 flex flex-col justify-center items-center ">

            {/* الجزء الاول */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16">
            {TheData.map((item) => (
                <div key={item.id} className="cursor-pointer px-20 py-10 flex flex-col justify-center items-center bg-gray-100 rounded-4xl">
                    <h1 className="text-8xl text-[#0c7f73] mb-6">{item.icon}</h1>
                    <h1 className="title w-80 text-center">{item.title}</h1>
                    
                </div>
            ))}
            </div>

            {/* الجزء الثاني */}
            <div>

             <div className="flex justify-center items-center gap-12">
  <hr className="w-24 sm:w-40 md:w-60 lg:w-96 h-1 bg-[#0c7f73] border-0 rounded" />
  <h1 className="title">إحصــائيـــاتـــنــا</h1>
  <hr className="w-24 sm:w-40 md:w-60 lg:w-96 h-2 bg-[#0c7f73] border-0 rounded" />
</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
                {Statistics.map((item) => (
                <div key={item.id} className="cursor-pointer p-4 flex flex-col justify-center items-center rounded-4xl">
                    <div className="bg-[#faedcd] w-20 h-20 rounded-full">  <h1 className="text-center text-5xl text-[#0c7f73] font-bold relative top-12">{item.number}</h1></div>
                    <h1 className="title  w-80 text-center mt-8">{item.title}</h1>
                    
                </div>
            ))}
                </div>
  
            </div>


        </div>
    );
}

export default Add