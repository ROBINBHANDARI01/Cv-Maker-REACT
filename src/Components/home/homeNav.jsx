import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
export default function HomeNav(){
    const navigate = useNavigate();
    return(
        <nav class="flex justify-between mx-7 my-4 sm:mx-15 lg:mx-70">

        <img onClick={()=> navigate("/")} src={logo} alt="logo" class="h-5 cursor-pointer md:h-9"></img>
        <div >
            <a  onClick={()=> navigate("/navigation")} href="#" class="text-[0.7rem] font-medium text-blue-700 hover:bg-blue-100   font-inter border p-2  border-blue-200 rounded-md lg:text-sm">Login</a>
            <a onClick={()=> navigate("/navigation")} href="#" class="ml-1 text-[0.7rem] font-medium bg-(--color-primary) text-white hover:bg-blue-100 hover:text-blue-900 hover:border-blue-500 font-inter border p-2 rounded-md lg:text-sm">Get Started</a>
        </div>
        </nav>
    )
}