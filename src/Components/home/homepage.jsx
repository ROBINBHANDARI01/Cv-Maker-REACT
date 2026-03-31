import { useNavigate } from "react-router-dom";
import HomeNav from "./homeNav";
function Homepage() {
  const navigate = useNavigate();
  return (
    <>
    <HomeNav/>
      <div className=" flex flex-col justify-center text-center  mt-15">
        <div className="p-1">
        <h1 class="font-inter text-5xl text-blue-500 lg:text-5xl font-bold ">
          Get Your Dream Job
        </h1></div>
        <div>
        <h1 class="font-inter text-3xl font-medium mb-1 lg:text-3xl">With Our Resume Maker</h1></div>
      </div>
      <div class="mt-4 flex justify-center ">
       <p class="font-Inter text-center text-[13px] mx-10 md:text-[14px] ">Get your resume noticed with our intutive builder Designed to help you build a professional profile that gets result.</p>
      </div>
      <div class="flex justify-center mt-8">
        <button onClick={()=> navigate("/navigation")} class="bg-blue-400 rounded-xl px-5 py-1.5  text-white cursor-pointer">Create Resume</button>
      </div>


      <div>
        <div class="h-140 bg-blue-200 m-9 rounded-2xl w-xl">

        </div>
        <div>
        <h1>Let’s build your free, job-winning resume in 3 simple steps</h1>
      </div>
      </div>

      <div className="bg-linear-to-r from-[#21b1c1] via-[#1d80ea] to-[#1d8fbc] h-[80vh] mt-6 p-2">
        
        <h2 className="text-center text-[20px] font-bold font-Inter  text-white ">Choose between many templates </h2>
        <p className="text-sm text-white font-extralight text-center mt-2 mx-10">Land more interviews with a professional edge. Our Resume Builder helps you create a standout resumes in minutes. </p>
  
     </div>
    </>
  );
}
export default Homepage;
