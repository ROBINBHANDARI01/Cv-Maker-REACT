

import Hero from "../homeComponents/Hero"
import Steps from "../homeComponents/Steps";

import TemplateSlider from "./templateSlider";



import HomeNav from "./homeNav";
import { resume } from "react-dom/server";
function Homepage() {
 
  return (
    <>
      <HomeNav />
      <Hero/>
      <Steps/>
      

      
      

      <div className="mt-15 bg-linear-to-r from-[#21b1c1] via-[#1d80ea] to-[#1d8fbc] h-[80vh] p-2">
        <h2 className="text-center text-[20px] font-bold font-Inter  text-white lg:text-2xl">
          Choose between many templates{" "}
        </h2>
        <p className="text-sm text-white font-extralight text-center mt-2 mx-10  lg:font-light">
          Land more interviews with a professional edge. Our Resume Builder
          helps you create a standout resumes in minutes.{" "}
        </p>

        <TemplateSlider />
      </div>
    </>
  );
}
export default Homepage;
