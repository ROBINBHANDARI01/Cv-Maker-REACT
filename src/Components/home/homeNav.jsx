import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
export default function HomeNav(){
    const navigate = useNavigate();
    return(
        <nav class="flex justify-between mx-7 my-4 sm:mx-17 lg:mx-70">

        <img onClick={()=> navigate("/")} src={logo} alt="logo" class="h-7 cursor-pointer md:h-10"></img>
        <ul>
            <li><a onClick={()=> navigate("/navigation")} href="#" class="text-[0.9rem] font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 hover:border-blue-500 font-inter border p-2  border-blue-200 rounded-md lg:text-lg">Get Started</a></li>
        </ul>
        </nav>
    )
}