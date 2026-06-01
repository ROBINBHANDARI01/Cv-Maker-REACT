import logo from "../../assets/logo.png"
import {Eye} from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function FormNav({onDownload}){
    const navigate = useNavigate();
    return(
        <>
        <div className="flex justify-between mx-4 py-4">
            <div className="flex items-center">
                <img src={logo} alt="Logo"  onClick={() => navigate("/")} className="h-7 cursor-pointer md:h-8 mr-2"></img>
                <h1 className="hidden sm:block">MakeMyResume</h1>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex gap-1 border p-1 text-[0.8rem] px-2 font-inter lg:text-sm rounded-2xl text-blue-700">
                    <Eye strokeWidth={1.3}/>
                    <button>Preview</button>
                </div>
                
                <button
                onClick={onDownload}
                className="ml-1 text-[0.8rem]  bg-(--color-primary) text-white hover:bg-blue-100 hover:text-blue-900 px-4 hover:border-blue-500 font-inter border inline-flex items-center  p-2 rounded-2xl lg:text-sm">Download</button>
            </div>
        </div>
        </>
    )
}