

import Image from "next/image";

const ReportsPage = () => {
  return (
    <div className="flex flex-col">
       <div className="relative w-full h-80">
                    <Image src="/bg.webp" alt="about" fill className="w-full h-full object-cover" priority/>
      
                    <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/30">

                    <h1 className="text-3xl font-bold text-white">الدراسات والتقارير</h1>
                    </div>
                  </div>
                  {/* الجزء الثالث */}
                  
                        <div className="w-[95%] p-4 m-auto rounded-2xl bg-gray-100 flex justify-center items-center flex-col md:flex-row gap-10 py-10 my-10">
                        <div className="flex flex-col gap-2 ">
                         <h1  className="title text-2xl md:text-3xl lg:text-4xl" >الوضع الاجتماعي في اليمن</h1>
                  
                  <p className="text-xl w-[300px] sm:[320px]  md:w-[350px] lg:w-[400px] xl:w-[500px]  text-gray-500 py-2" data-aos="fade-out">يعيش اليمنــيون وضعاً ســيئا للـغاية منذ عـام 2014 , حيث توالت الصراعات المسلحة والحروب العسكــرية والنكبـــات السياسيـــة والأزمــــات الاقــــــتصــادية والمشـــــاكــل الاجــتــماعية.</p>
                  <div className="flex gap-2 items-center mt-2">
                    <button className="bg-[#056158] text-white p-3 rounded-lg" >تحميل التقرير </button>
                    <h3>عدد مرات التحميل : 122</h3>
                  </div>
                        </div>
                  
                  <div>
                    <Image src="/img.webp" alt="about" width={800} height={800} 
                    className="w-[400px] rounded-2xl"/>
                  </div>
                  
                        </div>
                  
                  <div></div>
    </div>
  );
};

export default ReportsPage;