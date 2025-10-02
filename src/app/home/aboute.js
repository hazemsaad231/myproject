import Image from "next/image";

const AboutPage = () => {
  return (
    <>
    <div className="flex flex-col py-10 gap-8">
      {/* الجزء الاول */}
      <div className="flex justify-center py-12">
        <Image src="/icon.webp" alt="about" width={1000} height={1200}
         className="w-[95%] sm:w-[95%] md:w-[80%] lg:w-[70%]" />
      </div>
      <div className="flex justify-around mt-10">

        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="title text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2" data-aos="fade-out">زوار المنصه</h1>
          <p className="font-bold text-xl"> 1000</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="title text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2" data-aos="fade-out">زوار اليوم</h1>
          <p className="font-bold text-xl">100</p>
        </div>
      </div>

      {/* الجزء الثاني */}
      <div className="flex justify-center items-center flex-col md:flex-row p-4 mt-10 w-full sm:w-full md:w-1/2 lg:w-1/2 m-auto"
      >
        <video
          src="/Taqreeb-2.mp4"
          controls
          className="h-80  object-cover"
        >
          Your browser does not support the video tag.
        </video>
<div className="flex flex-col gap-2 justify-center items-center bg-gray-100 md:h-80 w-full rounded-l-3xl text-center py-5">
        <h1 className="title text-2xl md:text-3xl lg:text-4xl" data-aos="fade-out">منصة تقريب</h1>
        <p className="text-xl w-[300px] sm:w-[320px]  md:w-[350px] lg:w-[400px] xl:w-[500px] p-2  text-gray-500"
        data-aos="fade-out">
        منصة الكترونية غير ربحية تسعى لتقريب الوضع الاجتماعي والإنساني في مختلف محافظات اليمن لنقل صورة عن الواقع الذي يعيشه أهل اليمن في ظل الظروف الحالية وكذلك تعتبر تقريب دليلك للجهات العاملة في اليمن .
        </p>
        </div>

      </div>
    </div><div>
      {/* الجزء الثالث */}

      <div className="w-[98%] p-4 m-auto rounded-2xl bg-gray-100 flex justify-center items-center flex-col md:flex-row gap-10 py-10 my-10">
      <div className="flex flex-col gap-2 ">
<h1  className="title text-2xl md:text-3xl lg:text-4xl" data-aos="fade-out">الوضع الاجتماعي في اليمن</h1>
<p className="text-xl w-[300px] sm:[320px]  md:w-[350px] lg:w-[400px] xl:w-[500px]  text-gray-500 py-2" data-aos="fade-out">يعيش اليمنــيون وضعاً ســيئا للـغاية منذ عـام 2014 , حيث توالت الصراعات المسلحة والحروب العسكــرية والنكبـــات السياسيـــة والأزمــــات الاقــــــتصــادية والمشـــــاكــل الاجــتــماعية.</p>
<div className="flex gap-2 items-center mt-2">
  <button className="bg-[#056158] text-white p-3 rounded-lg" data-aos="fade-out">تحميل التقرير </button>
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
      </>
  );
}
export default AboutPage;