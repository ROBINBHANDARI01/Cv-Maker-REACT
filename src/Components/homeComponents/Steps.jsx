import { FileText, SquarePen, Download } from "lucide-react";
import one from "../../assets/number-one.png";
import bubbleMobile from "../../assets/world.svg";

import two from "../../assets/number-2.png";
import three from "../../assets/number-3.png";
export default function Steps() {
  return (
    <section className="relative py-28">
      {/* Background Blur */}
      <div className="absolute   w-72 h-72  blur-3xl rounded-full"></div>

      <div className="relative overflow-hidden bg-blue-100/30 mx-auto pb-10  rounded-4xl  z-10 w-full px-4">
        {/* Heading */}
        <img
          alt="bg"
          loading="lazy"
          src={bubbleMobile}
          aria-hidden="true"
          className="absolute  inset-0 w-full h-full object-cover opacity-30 md:top-35  pointer-events-none mt-10 z-[-1]"
        />
        <div className="text-center mb-20">
          <div
            className="
            inline-flex
            items-center
            px-4
            py-2
            mt-5
            rounded-full
            bg-white
            shadow-md

           text-(--color-primary-dark)
            font-semibold
            text-sm
            mb-6
          "
          >
            Easy as 1-2-3
          </div>

          <h2
            className="
            text-[2.5rem]
            md:text-5xl
            font-extrabold
            tracking-tight
            text-slate-900
            leading-tight
          "
          >
            Let’s build your free, 
          </h2>

          <div
            className="
            flex
            flex-col
            lg:flex-row
            justify-center
            items-center
            gap-2
            mt-2
          "
          >
            <span
              className="
              text-[2rem]
              md:text-5xl
              font-extrabold
              tracking-tight
              text-slate-900
              w-fit
            "
            >
             job- winning resume in
            </span>

            <span
              className="
              text-[2rem]
              md:text-5xl
              font-extrabold
              tracking-tight
              text-blue-600
            "
            >
              3 simple steps
            </span>
          </div>
        </div>

        {/* Timeline Icons */}
        <div className="flex justify-center md:flex-col">
          <div
            className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-center
          gap-5
          md:gap-6
          mr-5
          md:mr-0
          mb-20
        "
          >
            {/* Step Icon 1 */}
            <div
              className="
            md:h-20
           md:w-20
           h-15
           w-15

            rounded-3xl
            bg-white/70
            backdrop-blur-xl
            border border-white/40
            shadow-lg
            flex items-center justify-center
          "
            >
              <FileText className="size-9 text-blue-600" />
            </div>

            <div
              className="
            hidden md:block
            w-45
            border-t-3
            border-dashed
            border-blue-300
          "
            ></div>

            <div
              className="
            block md:hidden
            h-30
            border
            border-dashed
            border-blue-300
          "
            ></div>

            {/* Step Icon 2 */}
            <div
              className="
            md:h-20
           md:w-20
           h-15
           w-15
            rounded-3xl
            bg-white/70
            backdrop-blur-xl
            border border-white/40
            shadow-lg
            flex items-center justify-center
          "
            >
              <SquarePen className="size-9 text-blue-600" />
            </div>

            <div
              className="
            hidden md:block
            w-45
            border-t-3
            border-dashed
            border-blue-300
          "
            ></div>

            <div
              className="
            block md:hidden
            h-30
            border
            border-dashed
            border-blue-300
          "
            ></div>

            {/* Step Icon 3 */}
            <div
              className="
           md:h-20
           md:w-20
           h-15
           w-15
            rounded-3xl
            bg-white/70
            backdrop-blur-xl
            border border-white/40
            shadow-lg
            flex items-center justify-center
          "
            >
              <Download className="size-9 text-blue-600" />
            </div>
          </div>

          {/* Step Cards */}
          <div
            className="
          grid
          md:grid-cols-3
          gap-20
          md:gap-25
          mx-auto
          lg:gap-10
          lg:px-20
          max-w-6xl
          md:overflow-x-clip
        "
          >
            {/* Card 1 */}
            <div className="
    w-full          
    bg-white/70
    backdrop-blur-sm
    hover:bg-white/90
    border border-white/40
    rounded-3xl
    p-4
    shadow-lg
    hover:shadow-2xl
    transition-all
    duration-300
  ">
              <div className="flex">
              <img src={one} alt="1" className="h-8 mr-2" />

              <h3
                className="
              text-lg
              font-bold
              text-slate-900
              mb-3">

                Choose a Template
              </h3>
              </div>
          
            <p
              className="
              text-slate-500
              leading-6
            "
            >
              Select from a wide variety of professionally designed templates.
            </p>
              </div>

            {/* Card 2 */}
            <div className="
    w-full          
    bg-white/80
    backdrop-blur-sm
    hover:bg-white/90
    border border-white/40
    rounded-3xl
    p-4
    shadow-lg
    hover:shadow-2xl
    transition-all
    duration-300
  ">
              <div className="flex">
              <img src={two} alt="2" className="h-8 mr-2" />

              <h3
                className="
              text-lg
              font-bold
              text-slate-900
              mb-3">

                Add Your Details
              </h3>
              </div>
          
            <p
              className="
              text-slate-500
              leading-6
            "
            >
            Add your information quickly and easily using our simple and intuitive interface.
            </p>
              </div>
            {/* Card 3 */}
             <div className="
    w-full          
    bg-white/75
    backdrop-blur-sm
    hover:bg-white/90
    border border-white/40
    rounded-3xl
    p-4
    shadow-lg
    hover:shadow-2xl
    transition-all
    duration-300
  ">
              <div className="flex">
              <img src={three} alt="3" className="h-8 mr-2" />

              <h3
                className="
              text-lg
              font-bold
              text-slate-900
              mb-3">

                Download & apply 
              </h3>
              </div>
          
            <p
              className="
              text-slate-500
              leading-6
            "
            >
             Download your resume in PDF format and apply with confidence.
            </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
