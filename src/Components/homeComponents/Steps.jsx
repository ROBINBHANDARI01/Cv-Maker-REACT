import { FileText, SquarePen, Download } from "lucide-react";
import one from "../../assets/number-one.png";
import two from "../../assets/number-2.png";
import three from "../../assets/number-3.png";

export default function Steps() {
  return (
    <>
      <div className="mx-5 mb-15">
        <div class="flex flex-col text-center mt-10">
          <div className="text-2xl md:text-3xl font-semibold">
            <h2 className="text-(--color-text-primary)">
              Let’s build your free,
            </h2>

            <span className="text-(--color-text-primary)">job-winning</span>

            <span class="text-(--color-primary)">
              {" "}
              resume in 3 simple steps
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mx-5 md:flex md:flex-col">
        <div className="flex flex-col gap-8 md:flex-row items-center md:gap-5">
          <div className="bg-(--color-badge-bg) p-3 rounded-full z-10">
            <FileText className="size-7 text-blue-700" />
          </div>

          <div className="h-30 border-l md:w-64 md:h-0 border border-dashed border-blue-300"></div>

          <div className="bg-(--color-badge-bg) p-3 rounded-full z-10">
            <SquarePen className="size-7 text-blue-700" />
          </div>

          <div className="h-30 border-l  md:w-64 md:h-0 border border-dashed border-blue-300"></div>

          <div className="bg-(--color-badge-bg) p-3 rounded-full z-10">
            <Download className="size-7 text-blue-700" />
          </div>
        </div>

        {/* steps content */}
        <div className="flex flex-col md:flex-row md:gap-50 justify-center gap-35 mt-5">
          {/* STEP 1 */}
          <div className="flex flex-col md:flex-row gap-2 items-center md:text-left relative">
            <img src={one} className="h-7" />

            <div className="max-w-sm">
              <h2 className="font-bold text-(--color-text-primary) m-2">
                Choose a Template
              </h2>
              <p className="text-sm absolute left-0 text-center text-(--color-text-secondary)">
                Select form a wide variety of professionally designed templates.
              </p>
            </div>
          </div>

          {/* STEP 2 */}

          <div className="flex flex-col md:flex-row gap-2 items-center md:text-left relative">
            <img src={two} className="h-7" />

            <div className="max-w-sm">
              <h2 className="font-bold text-(--color-text-primary) m-2">
                Add Your Details
              </h2>
              <p className="text-sm absolute left-0 text-center text-(--color-text-secondary)">
                Add your information easily with a simple and intuitive
                interface.
              </p>
            </div>
          </div>

          {/* STEP 3  */}

          <div className="flex flex-col md:flex-row gap-2 items-center md:text-left relative">
            <img src={three} className="h-7" />

            <div className="max-w-sm">
              <h2 className="font-bold text-(--color-text-primary) m-2">
                Download & Apply
              </h2>
              <p className="text-sm text-center absolute left-0 text-(--color-text-secondary)">
                Download your resume in PDF format and apply with confidence.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
