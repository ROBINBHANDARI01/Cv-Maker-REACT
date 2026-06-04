import { useNavigate, Link } from "react-router-dom";
import HomeNav from "../home/homeNav";
import comming from "../../assets/slider/coming-soon.gif"
import { Home } from "lucide-react";

export default function TemplateGallery(){
    return(
        <>
        <HomeNav/>
        <div className="flex flex-col items-center mt-30 px-20 text-center justify-center">
            <img
            src={comming}
            className="h-50"
            ></img>
            <div><span className="text-2xl font-semibold ">More templates are being added so please wait for next update. For now we have one greate template.</span></div>
            <br/>
            <span>
                 <Link
                    to="/dashboard"
               className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm"
                  >
                    Check it out !!
                  </Link></span>
        </div>
        </>
    )
}