import logo from "../../assets/logo.png";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function HomeNav() {
  const navigate = useNavigate();
  return (
    <nav class="flex justify-between mx-4 my-2 sm:mx-10 lg:mx-60 bg-white/60 backdrop-blur-md border-b border-white items-center py-2.5 px-5 rounded-xl shadow-2xl/50 shadow-blue-400">
      <div className="flex items-center gap-1">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          className="h-6 cursor-pointer md:h-8"
        ></img>
        <span className="text-sm hidden sm:block font-medium">MakeMyResume</span>
      </div>
      <div className="flex">
        <a
          onClick={() => navigate("/login")}
          href="#"
          class="text-[0.7rem] hidden sm:flex text-blue-700 hover:bg-blue-100   font-inter border py-2 px-5 border-blue-200 mx-1 rounded-2xl lg:text-sm"
        >
          Login
        </a>
        <a
          onClick={() => navigate("/navigation")}
          href="#"
          class="ml-1 text-[0.7rem]  bg-(--color-primary) text-white hover:bg-blue-100 hover:text-blue-900 px-4 hover:border-blue-500 font-inter border inline-flex items-center  p-2 rounded-2xl lg:text-sm"
        >
          Get Started <ChevronRight className="h-5" />{" "}
        </a>
      </div>
    </nav>
  );
}
