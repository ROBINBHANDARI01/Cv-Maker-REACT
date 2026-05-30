import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

export default function FormNav(){
    const navigate = useNavigate();
    return(
        <>
        <div className="flex justify-between mx-4 py-4">
            <div className="flex items-center">
                <img src={logo} alt="Logo"  onClick={() => navigate("/")} className="h-7 cursor-pointer md:h-8 mr-2"></img>
                <h1 className="font-semibold">MakeMyResume</h1>
            </div>
            <div>
                <button>Preview</button>
                <button className="ml-1 text-[0.8rem]  bg-(--color-primary) text-white hover:bg-blue-100 hover:text-blue-900 px-4 hover:border-blue-500 font-inter border inline-flex items-center  p-2 rounded-2xl lg:text-sm">Download</button>
            </div>
        </div>
        </>
    )
}