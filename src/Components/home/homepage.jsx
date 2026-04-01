import { useNavigate } from "react-router-dom";
import resumeImg from "../../assets/resume.webp";
import temp7 from "../../assets/template7.webp";
import temp19 from "../../assets/template19.webp";
import temp18 from "../../assets/template18.webp";
import HomeNav from "./homeNav";
import { resume } from "react-dom/server";
function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <HomeNav />
      <div className=" flex flex-col justify-center text-center  mt-15">
        <div className="p-1">
          <h1 class="font-inter text-5xl text-blue-500 lg:text-5xl font-bold ">
            Get Your Dream Job
          </h1>
        </div>
        <div>
          <h1 class="font-inter text-3xl font-medium mb-1 lg:text-3xl">
            With Our Resume Maker
          </h1>
        </div>
      </div>
      <div class="mt-4 flex justify-center ">
        <p class="font-Inter text-center text-[13px] mx-10 md:text-[14px] ">
          Get your resume noticed with our intutive builder Designed to help you
          build a professional profile that gets result.
        </p>
      </div>
      <div class="flex justify-center mt-8">
        <button
          onClick={() => navigate("/navigation")}
          class="bg-blue-400 rounded-xl px-5 py-1.5  text-white cursor-pointer"
        >
          Create Resume
        </button>
      </div>

      <div class="p-5 mt-10 md:flex md:mx-10 lg:md:mx-30 ">
       <div class="relative overflow-hidden h-105 bg-blue-200 rounded-2xl group md:w-[65vw] lg:w-[50vw] flex justify-center items-end">


  <img 
    src={temp7}
    class="absolute top-50 left-6 h-[85%] 
           opacity-80 rotate-[-6deg]
           transition-all duration-500 ease-out
           group-hover:-translate-y-6 group-hover:scale-110"
  />

 
  <img 
    src={temp19}
    class="absolute top-50 right-6 h-[85%] 
            opacity-80 rotate-[6deg]
           transition-all duration-500 ease-out
           group-hover:-translate-y-6 group-hover:scale-110"
  />

  
  <img 
    src={temp18}
    class="absolute top-25 left-1/2 -translate-x-1/2 h-[95%] 
           z-10 shadow-xl
           transition-all duration-500 ease-out
           group-hover:-translate-y-10 group-hover:scale-110"
  />

</div>
        <div class="px-2">
          <h1 class="text-4xl font-medium md:text-4xl mt-10">
            Let’s build your free, job-winning
          </h1>
          <span class="text-blue-600 font-medium text-4xl">
            {" "}
            resume in 3 simple steps
          </span>

          <div>
            <h2>Step1: Choose desired template</h2>
            <h2>Step1: Choose desired template</h2>
            <h2>Step1: Choose desired template</h2>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-[#21b1c1] via-[#1d80ea] to-[#1d8fbc] h-[80vh] mt-6 p-2">
        <h2 className="text-center text-[20px] font-bold font-Inter  text-white ">
          Choose between many templates{" "}
        </h2>
        <p className="text-sm text-white font-extralight text-center mt-2 mx-10">
          Land more interviews with a professional edge. Our Resume Builder
          helps you create a standout resumes in minutes.{" "}
        </p>
      </div>
    </>
  );
}
export default Homepage;
