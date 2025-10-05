
'use client';

import { useForm } from "react-hook-form";
import axios from "axios";



const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({});


    const onSubmit = async (data) => {
        try {
                const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
                console.log(response);
                setTimeout(() => {
                    navigate("/book")
                },2000)
                       } catch (error) {
            console.error(error);
        }


      }

    

    return (
        <div className="min-h-screen flex py-6">

            <div className="rounded-xl bg-[#028E81] w-max p-2 py-2 m-auto">
    
    <div className="flex flex-col  justify-center items-center w-full m-auto">
    <form onSubmit={handleSubmit(onSubmit)}>
             <div className="grid grid-cols-1 place-items-center gap-4 p-2 sm:p-4 md:p-8 lg:p-12 xl:p-16 w-[300px] sm:w-[500px] md:w:[600px] lg:w-[650px]">
              {/* الصف الاول */}
              <div className="flex my-2 w-full m-auto gap-6">
                 <div className="flex flex-col w-full">
                     <input type="text" placeholder="الاسم بالكامل" className="rounded-md w-full p-2 bg-white shadow outline-blue-500" {...register("name", { required: true })} />
                     {errors.name && <span className="text-red-500 mt-3">الاسم مطلوب </span>}
                </div>
                <div className="flex flex-col w-full">
                     <input type="text" placeholder="رقم الجوال " className="rounded-md  w-full p-2 bg-white shadow outline-blue-500" {...register("description", { required: true })} />
                    {errors.description && <span className="text-red-500 mt-3">رقم الجوال مطلوب</span>}
                </div>
              </div>

               {/* الصف الثاني */}
                 <div className="flex flex-col w-full">
                     <input type="text" placeholder="البريد الالكتروني" className="rounded-md w-full p-2 bg-white shadow outline-blue-500" {...register("author", { required: true })} />
                     {errors.author && <span className="text-red-500 mt-3">البريد الالكتروني مطلوب</span>}
                </div>

{/* الصف الثالث */}
                <div className="flex my-2 w-full m-auto gap-6">
                 <div className="flex flex-col w-full">
                     <input type="text" placeholder="الدولة" className="rounded-md  w-full p-2 bg-white shadow outline-blue-500" {...register("name", { required: true })} />
                     {errors.name && <span className="text-red-500"></span>}
                </div>
                <div className="flex flex-col w-full">
                     <input type="text" placeholder="المحافظة" className="rounded-md  w-full p-2 bg-white shadow outline-blue-500" {...register("description", { required: true })} />
                    {errors.description && <span className="text-red-500"></span>}
                </div>
              </div>
{/* الصف الرابع */}
                  <div className="flex flex-col w-full">
                     <input type="text" placeholder="عنوان الرساله" className="rounded-md w-full p-2 bg-white shadow outline-blue-500" {...register("author", { required: true })} />
                     {errors.author && <span className="text-red-500"></span>}
                </div>

    {/*الصف الخامس */}
                  <div className="flex flex-col w-full mt-4">
                     <input type="text" placeholder="الرسالة" className="rounded-md w-full h-20 bg-white shadow outline-blue-500" {...register("author", { required: true })} />
                     {errors.author && <span className="text-red-500"></span>}
                </div>
                <div className="flex items-center gap-2 text-start w-full mt-4">
                  <input type="checkbox" className="w-4 h-4 cursor-pointer"/>
                  <h1 className="text-sm md:text-md text-white">أرغب في الاشتراك في مجموعة الرسائل البريدية *</h1>
                </div>
{/* الزر */}
                 <div className="flex justify-center w-full">
                <button className="bg-[#08332e] hover:bg-[#050b0a] cursor-pointer text-white w-full py-2 rounded-md mt-10">ارسال</button>
             </div>
            </div>
           
            
       </form>
    </div>


            </div>
           
        </div>
    );

  }
export default Contact;