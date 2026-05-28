import logo from "../../assets/logo.png";

import Login from "../Auth/login";
import Register from "../Auth/register";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function HomeNav() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between mx-4 my-2 sm:mx-10 lg:mx-60  backdrop-blur-md  bg-white  border-white border-2 items-center py-2.5 px-5 rounded-xl shadow-[0_0_40px_rgba(96,165,250,0.5)]">
      <div className="flex items-center gap-1">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          className="h-7 cursor-pointer md:h-8"
        ></img>
        <span className="text-sm hidden sm:block font-medium">
          MakeMyResume
        </span>
      </div>
      <div className="flex">
        <a
          onClick={() => navigate("/login")}
          href="#"
          className="text-[0.8rem]  sm:flex text-blue-700 hover:bg-blue-100  hover:border-blue-400 font-inter border py-2 px-5 border-blue-200 mx-1 rounded-2xl lg:text-sm"
        >
          Login
        </a>
        <a
          onClick={() => navigate("/register")}
          href="#"
          className="ml-1 text-[0.8rem]  bg-(--color-primary) text-white hover:bg-blue-100 hover:text-blue-900 px-4 hover:border-blue-500 font-inter border inline-flex items-center  p-2 rounded-2xl lg:text-sm"
        >
          Register <ChevronRight className="h-5" />{" "}
        </a>
      </div>
    </nav>
  );
}
