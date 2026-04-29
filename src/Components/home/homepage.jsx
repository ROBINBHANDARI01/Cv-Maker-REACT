

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
      <TemplateSlider/>
    </>
  );
}
export default Homepage;
