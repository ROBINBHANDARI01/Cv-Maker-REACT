import { useNavigate } from "react-router-dom";
import { Sparkles} from "lucide-react";
import HomeNav from "../home/homeNav";
import temp18 from "../../assets/slider/robin.jpg";
import temp7 from "../../assets/template7.webp";
import temp19 from "../../assets/template19.webp";

export default function Hero() {
  return (
    <>
    <div className="relative overflow-hidden min-h-[80vh]
             bg-[linear-gradient(110deg,#dce8fb_50%,#c8d9f8_65%,#bdd0f7_50%,#c5cef5_50%,#d4d8fa_100%)]"
    >

      {/* ── Dot grid right half ── */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-60">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="11" cy="11" r="1.5" fill="rgba(99,122,210,0.3)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      


      <HomeNav />

     <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="w-full block"
      xmlns="http://www.w3.org/2000/svg"
        >
            {/* back wave — semi-transparent */}
            <path
        d="M0,30 C180,60 360,0 540,25 C720,50 900,10
           1080,30 C1260,50 1350,20 1440,30
           L1440,60 L0,60 Z"
        fill="white"
        fillOpacity="0.5"
            />
             
            {/* front wave — solid white */}
            <path
        d="M0,40 C200,15 400,55 600,35 C800,15
           1000,50 1200,30 C1320,20 1390,40
           1440,35 L1440,60 L0,60 Z"
        fill="white"
            />
            
        </svg>
        
    </div>


      <div className="gap-5 h-[80vh] flex flex-col lg:flex-row items-center overflow-hidden justify-between px-5 md:px-45 py-6">
        {/* LEFT CONTENT */}
        <div className="flex z-10 flex-col items-center lg:items-start self-start lg:pt-10 text-center lg:text-left max-w-xl ">
          <div className="text-[.7rem] md:text-[.75rem] bg-white text-(--color-primary-light) px-3 py-1.5 rounded-full font-semibold mb-6 flex items-center gap-2">
            <Sparkles className="h-5" /> Build . Personalize . Get Hired.
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-(--color-text-primary)">Get Your</h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-(--color-primary)">Dream Job</h1>
          <p className="text-xl md:text-2xl text-(--color-text-primary) lg:text-3xl font-semibold mt-3">With My Resume Maker</p>
          <p className="mt-4 text-sm md:text-base text-(--color-text-secondary) max-w-md">
            Create a perfect resume in minutes with our intuitive builder
            designed to help you stand out and get hired faster.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={() => navigate("/navigation")}
              className="bg-(--color-primary) hover:opacity-90 px-6 py-3 rounded-2xl text-white font-medium shadow-md"
            >
             
              Create Resume — It's Free
            </button>
            <button className="border-gray-400 border px-6 py-3 rounded-2xl hover:shadow-xl hover:opacity-75">
              View Templates
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative z mt-15 w-full max-w-md md:max-w-lg lg:max-w-xl flex justify-center group">
          <div className="h-87.5">
            <img src={temp7} className="absolute rounded-xl left-12 h-[90%] opacity-95 -rotate-5" />
            <img src={temp19} className="absolute rounded-xl right-10 h-[90%] opacity-95 -rotate-[-5deg]" />
            <img src={temp18} className="absolute bottom-0 -rotate-3 rounded-xl left-1/2 -translate-x-1/2 h-[130%] z-10 shadow-xl border-transparent p-6" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}