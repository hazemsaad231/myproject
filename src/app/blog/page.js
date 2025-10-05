

import Bg from "../components/bg";

const BlogPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
       <div className="relative w-full h-80">
                    <Bg/>
      
                    <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/30">

                    <h1 className="text-3xl font-bold text-white">مدونة تقريب</h1>
                    </div>
                  </div>
                  <div className="py-12">
  <video
                        src="/sadaka.mp4"
                        controls
                        className="h-96"
                    />
                  </div>
                  
    </div>
  );
};

export default BlogPage;