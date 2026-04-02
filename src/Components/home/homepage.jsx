import { useNavigate } from "react-router-dom";

import temp7 from "../../assets/template7.webp";
import temp19 from "../../assets/template19.webp";
import temp18 from "../../assets/template18.webp";

import select from "../../assets/icon-select.svg";
import download from "../../assets/icon-dwn.svg";
import edit from "../../assets/icon-edit.svg";
import HomeNav from "./homeNav";
import { resume } from "react-dom/server";
function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <HomeNav />
      <div className=" flex flex-col justify-center text-center  mt-15">
        <div className="p-1">
          <h1 class="font-inter text-5xl text-blue-500 lg:text-7xl font-bold">
            Get Your Dream Job
          </h1>
        </div>
        <div>
          <h1 class="font-inter text-3xl font-medium mb-1 lg:text-5xl">
            With Our Resume Maker
          </h1>
        </div>
      </div>
      <div class="mt-6 flex justify-center ">
        <p class="font-Inter text-center text-[13px] mx-10 md:text-9 lg:text-lg ">
          Get your resume noticed with our intutive builder Designed to help you
          build a professional profile that gets result.
        </p>
      </div>
      <div class="flex justify-center mt-8">
        <button
          onClick={() => navigate("/navigation")}
          class="bg-blue-400 rounded-xl px-5 py-1.5  text-white cursor-pointer lg:scale-120"
        >
          Create Resume
        </button>
      </div>

      <div class="p-5 mt-10 md:flex  md:mx-10 lg:md:mx-60 lg:mt-20 lg:justify-between">
        <div class="relative overflow-hidden h-105 bg-blue-200 rounded-2xl group md:w-190 lg:w-[35vw]  flex justify-center items-end">
          <img
            src={temp7}
            class="absolute top-25 left-6 h-[89%] 
         opacity-95 rotate-[-2deg]
         transition-transform duration-500 ease-out
         group-hover:-translate-y-6 
         group-hover:scale-110 
         group-hover:rotate-[-6deg]"
          />

          <img
            src={temp19}
            class="absolute top-25 right-6 h-[89%] 
         opacity-95 rotate-[2deg]
         transition-transform duration-500 ease-out
         group-hover:-translate-y-6 
         group-hover:scale-110 
         group-hover:rotate-6"
          />

          <img
            src={temp18}
            class="absolute top-19 left-1/2 -translate-x-1/2 h-[95%] 
         z-10 shadow-xl
         transition-transform duration-500 ease-out
         group-hover:-translate-y-10 
         group-hover:scale-110"
          />
        </div>
        <div>
          <h1 class="mt-19 text-4xl font-medium md:text-4xl md:m-1 lg:mt-2">
            Let’s build your free, job-winning
          </h1>
          <span class="text-blue-600 font-medium text-4xl">
            {" "}
            resume in 3 simple steps
          </span>

          <div class="mt-9  lg:ml-10 ">
            <div class="mb-5">
              <span class="flex items-center gap-3">
                <div class="flex items-center justify-center">
                  <img
                    class="h-13.5"
                    src={select}
                  ></img>
                </div>
                <h2 class="font-medium md:text-lg">Step1: Choose desired template</h2>
              </span>
              <p class="text-gray-500 ml-14">
                Select you prefered resume templates from a vide variety of
                templates.
              </p>
            </div>

            <div class="mb-5">
              <span class="flex items-center gap-3">
                <div class="flex items-center justify-center">
                  <img
                    class="h-14 "
                    src={edit}
                  ></img>
                </div>
                <h2 class="font-medium md:text-lg md:ml-1">Step2: Add your details</h2>
              </span>
              <p class="text-gray-500 ml-14">
                Add details about your experience, education, and skills with
                one click..
              </p>
            </div>
            <span class="flex items-center gap-1">
              <div class="flex items-center justify-center">
                <img
                  class="h-14 md:ml-1"
                  src={download}
                ></img>
              </div>
              <h2 class="font-medium md:text-lg">Step1: Download your resume 4 free</h2>
            </span>
            <p class="text-gray-500 ml-14">
              Add details about your experience, education, and skills with one
              click..
            </p>
          </div>
        </div>
      </div>

      <div className="mt-15 bg-linear-to-r from-[#21b1c1] via-[#1d80ea] to-[#1d8fbc] h-[80vh] p-2">
        <h2 className="text-center text-[20px] font-bold font-Inter  text-white lg:text-3xl">
          Choose between many templates{" "}
        </h2>
        <p className="text-sm text-white font-extralight text-center mt-2 mx-10 lg:text-[1.1rem] lg:font-light">
          Land more interviews with a professional edge. Our Resume Builder
          helps you create a standout resumes in minutes.{" "}
        </p>
      </div>
    </>
  );
}
export default Homepage;
