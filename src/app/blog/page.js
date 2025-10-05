

import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
       <div className="relative w-full h-80">
                    <Image src="/bg.webp" alt="about" fill className="w-full h-full object-cover" priority/>
      
                    <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/30">

                    <h1 className="text-3xl font-bold text-white">مدونة تقريب</h1>
                    </div>
                  </div>
                  <div className="py-24">
                    <video
                        src="/sadaka.mp4"
                        controls
                        className="h-96 md:rounded-r-lg rounded-t-lg"
                    />
                  </div>
    </div>
  );
};

export default BlogPage;