import { useNavigate, Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import HomeNav from "../home/homeNav";
import temp18 from "../../assets/slider/robin.jpg";
import temp7 from "../../assets/template7.webp";
import temp19 from "../../assets/template19.webp";


export default function Hero() {
  
  return (
    <>
<div className="relative overflow-hidden min-h-[95vh] bg-[url('/resMobile.svg')] md:bg-none bg-cover">

  {/* Static overlay SVG - CSS bg is fine here */}
  <div className="absolute inset-0 md:bg-[url('/res.svg')] bg-cover opacity-50" />

  {/* Animated SVG — only loads on desktop */}
  <div className="hidden md:block absolute inset-0">
    <img 
      src="/anime3.svg" 
      className="w-full h-full object-cover"
      alt=""
      fetchPriority="high"
      loading="lazy"
    />
  </div>
        {/* ── Dot grid right half ── */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-60">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="11" cy="11" r="1.5" fill="rgba(99,122,210,0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
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

        <div className="gap-5 h-auto lg:h-[86vh] flex flex-col md:flex-row items-center lg:overflow-hidden justify-between px-5  lg:px-45 py-6">
          {/* MAIN CONTENT CONTAINER */}
          <div className="flex z-10 flex-col items-center lg:items-start self-start lg:pt-10 text-center lg:text-left max-w-xl w-full">
            <div className="text-[.7rem] md:text-[.80rem]  bg-white text-(--color-primary-dark) px-3 py-1.5 rounded-full font-semibold shadow-sm mb-6 flex items-center gap-2">
              <Sparkles className="h-5" /> Build . Personalize . Get Hired.
            </div>
            <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-(--color-text-primary) ">
              Get Your
            </h1>
            <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-(--color-primary)">
              Dream Job
            </h1>
            <p className="text-2xl md:text-2xl text-(--color-text-primary) lg:text-3xl font-semibold mt-3">
              With My Resume Maker
            </p>
            <p className="mt-4 text-sm md:text-base text-(--color-text-secondary) max-w-md">
              Create a perfect resume in minutes with our intuitive builder
              designed to help you stand out and get hired faster.
            </p>

            {/* MOBILE/TABLET IMAGE SECTION (Hidden on lg screens) */}
           
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                  <Link
                    to="/dashboard"
                    className="bg-(--color-primary) hover:opacity-90 border-2 border-white/70  px-6 py-3 rounded-2xl text-white font-semibold shadow-md"
                  >
                    Create Resume — It's Free
                  </Link>
                  <Link
                    to={"/templateGallery"}
                    className=" border-2 text-blue-700 border-blue-500/70  font-semibold   px-6 py-3 rounded-2xl  bg-white/80 hover:border-blue-600">
                    View Templates
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="relative z  mt-25 w-full max-w-md md:max-w-lg lg:max-w-xl flex justify-center group">
                <div className="h-87.5">
                  <img
                    src={temp7}
                    fetchPriority="high" 
                    loading="eager"
                    alt="Resume1"
                    className="absolute hidden md:block rounded-xl left-12 bg-white/40 p-4 h-[95%] border-2 border-white/70 shadow-blue-300 shadow-2xl opacity-95 -rotate-5"
                  />
                  <img
                    alt="Resume2"
                    src={temp19}
                    className="absolute hidden md:block rounded-xl right-9 bg-white/40 p-4 h-[95%] opacity-95 shadow-blue-400 shadow-2xl border-2 border-white/40 -rotate-[-4deg]"
                  />
                  <img
                  alt="Resume3"
                    src={temp18}
                    className="absolute bottom-0 md:-rotate-3 rounded-xl left-1/2 bg-white/30 -translate-x-1/2 h-[130%] z-10  backdrop-blur-xs border-2 md:shadow-blue-300 shadow-2xl border-white/70 p-6"
                  />
                </div>
              </div>
            </div>
          </div>

    </>
  );
}
