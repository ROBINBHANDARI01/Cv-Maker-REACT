import Hero from "../homeComponents/Hero";
import Steps from "../homeComponents/Steps";

import TemplateSlider from "./templateSlider";

import { resume } from "react-dom/server";
function Homepage() {
  return (
    <>
       
        <Hero />
        <Steps />
        <TemplateSlider />


    </>
  );
}
export default Homepage;
