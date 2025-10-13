

import Image from "next/image";
import { Api } from "@/app/components/api";

const ProductDetails = async ({ params }) => {
  const { id } = params;

  // جلب كل الأخبار
  const response = await fetch(Api);
  const json = await response.json();

  // البحث عن الخبر بالـ id
  const theData = json.find(item => item.id === parseInt(id));

  if (!theData) {
    return <p className="text-center py-20">الخبر غير موجود</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center w-2/3 m-auto py-8">
      <div className="w-full flex flex-col gap-4 py-10">
        <h1 className="text-4xl font-bold mb-4">{theData.title}</h1>
        <Image
          src={theData.img}
          alt={theData.title}
          width={500}
          height={500}
          className="w-full object-cover"
        />
        <p className="text-xl">{theData.details}</p>
        <p className="text-gray-500 mt-2">{theData.date} - {theData.views} views</p>
      </div>
    </div>
  );
};

export default ProductDetails;
