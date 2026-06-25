import { useNavigate, Link } from "react-router-dom";
import star from "../../assets/slider/star.png"


import RenderTemplate from "../home/renderTemplate";

export default function TemplateSlider() {
  return (
    <>
      <div className=" relative pb-10 md:pb-15 overflow-hidden py-5 mt-10 bg-linear-to-b z-10 from-white via-blue-50 to-[#eef4ff]">

  {/* Background Blobs */}
  <div className="absolute  -left-32 h-87.5 w-87.5 rounded-full bg-blue-300/30 blur-3xl"></div>

  <div className="absolute top-0 right-0 h-75 w-75 rounded-full bg-indigo-200/30 blur-3xl"></div>

  <div className="absolute bottom-0 left-1/2 h-62.5 w-62.5 -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl"></div>

  {/* Decorative Dots */}
  <div className="absolute left-10 top-40 grid grid-cols-5 gap-2 opacity-20">
    {[...Array(15)].map((_, i) => (
      <span
        key={i}
        className="h-2 w-2 rounded-full bg-blue-400"
      ></span>
    ))}
  </div>

  <div className="absolute  right-10 top-60 grid grid-cols-5 gap-2 opacity-20">
    {[...Array(15)].map((_, i) => (
      <span
        key={i}
        className="h-2 w-2 rounded-full bg-blue-400"
      ></span>
    ))}
  </div>

  {/* Main Content */}
  <div className="relative  z-10 max-w-7xl mx-auto px-3">

    {/* Badge */}
    <div className="text-xs md:text-sm w-fit mx-auto bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold mb-6 shadow-sm">
      Design To Impress
    </div>

    {/* Heading */}
    <div className="text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
        Professional Templates for Every
      </h2>

      <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-600">
        Every Career
      </span>
    </div>

    {/* Paragraph */}
    <p className="text-slate-500 text-center mt-4 max-w-2xl mx-auto text-base md:text-md ">
      Land more interviews with a professional edge.
      Our Resume Builder helps you create standout resumes in minutes.
    </p>

    {/* Template Section */}
    <div className="mt-6 custom-scrollbar overflow-x-auto pb-2">
      <RenderTemplate />
    </div>
  </div>

  {/* Bottom Wave Divider */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-30"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        d="M0,224L80,218.7C160,213,320,203,480,208C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L0,320Z"
      ></path>
    </svg>
  </div>
</div>
     <div className="mb-15 md:mb-8 md:py-5 flex flex-col items-center justify-center text-center">
      {/* Icon */}
      <div>
        <img
          src={star}
          alt="Star"
          className="w-9 h-9"
        />
      </div>

      {/* Heading */}
      <h2 className="mt-4  text-2xl font-bold text-gray-900">
          Not sure which one to choose?
        </h2>


      {/* Description */}
       <p className="mt-2 text-gray-500">
          All templates are ATS-friendly and fully customizable.
        </p>

      {/* Button */}
        <Link
                    to={"/templateGallery"}
      className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm">
        View All Templates →
      </Link>
    </div>
    </>
  );
}
