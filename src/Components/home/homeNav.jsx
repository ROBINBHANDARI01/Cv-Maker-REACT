import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
export default function HomeNav(){
    const navigate = useNavigate();
    return(
        <nav class="flex justify-between mx-7 my-4 sm:mx-17 lg:mx-60">

        <img onClick={()=> navigate("/")} src={logo} alt="logo" class="h-7 cursor-pointer"></img>
        <ul>
            <li><a onClick={()=> navigate("/navigation")} href="#" class="font-inter">Get Started</a></li>
        </ul>
        </nav>
    )
}