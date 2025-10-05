import Image from "next/image";

const productDetails = async ({ params }) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = await response.json();
  console.log(data);
  return (
    <div className="min-h-screen flex justify-center items-center w-2/3 m-auto py-8">
       { data && (
        <div className="w-full flex flex-col gap-4 py-10">
          <h1 className="text-4xl font-bold mb-4">مؤسسة غراس التنموية يوم السرد القرآني الثالث بمركز الإحسان التعليمي النموذجي بثبي – تريم</h1>
          <Image src="/news.webp" alt="news" width={500} height={500} className="w-full object-cover" />
        </div>
       )}
    </div>
  );
}
export default productDetails;