import { useNavigate } from "react-router-dom";
import temp7 from "../../assets/template7.webp";
import temp19 from "../../assets/template19.webp";
import temp18 from "../../assets/template18.webp";
import blob from "../../assets/blob.svg";
export default function Hero() {
  
  return (
    <>
    
    
      <div className="bg-linear-to-br from-white  to-blue-200 relative min-h-[80vh] flex flex-col lg:flex-row items-center overflow-hidden justify-between px-6 md:px-12 lg:px-40 py-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          {/* Badge */}
          <div className="text-xs md:text-sm bg-(--color-badge-bg) text-(--color-badge-text) px-3 py-1.5 rounded-full font-medium mb-6">
            Build . Personalize . Get Hired
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-(--color-text-primary)">
            Get Your
          </h1>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-(--color-primary)">
            Dream Job
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-3">
            With My Resume Maker
          </p>

          <p className="mt-4 text-sm md:text-base text-(--color-text-secondary) max-w-md">
            Create a perfect resume in minutes with our intuitive builder
            designed to help you stand out and get hired faster.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={() => navigate("/navigation")}
              className="bg-(--color-primary) hover:opacity-90 px-6 py-3 rounded-xl text-white font-medium shadow-md"
            >
              Create Resume — It’s Free
            </button>

            <button className="border-gray-400 border px-6 py-3 rounded-xl   hover:shadow-xl hover:opacity-75">
              View Templates
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative overflow-hidden mt-10 lg:mt-0 w-full max-w-md md:max-w-lg lg:max-w-xl flex justify-center">
          <div className="relative w-full h-87.5 md:h-112.5 bg-(--color-bg-soft) rounded-2xl group">
            <img
              src={temp7}
              class="absolute top-25 left-6 h-full opacity-95 -rotate-2 transition-transform duration-500 ease-out group-hover:-translate-y-6 group-hover:scale-110 group-hover:rotate-[-6deg]"
            />{" "}
            <img
              src={temp19}
              class="absolute top-25 right-6 h-full opacity-95 rotate-2 transition-transform duration-500 ease-out group-hover:-translate-y-6 group-hover:scale-110 group-hover:rotate-6"
            />{" "}
            <img
              src={temp18}
              class="absolute top-12 left-1/2 -translate-x-1/2 h-[110%] z-10 shadow-xl transition-transform duration-500 ease-out group-hover:-translate-y-10 group-hover:scale-110"
            />
          </div>
        </div>

        {/* BLOB BACKGROUND */}
        <img
          src={blob}
          className="absolute top-85  right-320 w-100  pointer-events-none select-none"
        />
      </div>
    </>
  );
}
