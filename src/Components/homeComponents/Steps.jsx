import { FileText, SquarePen, Download } from "lucide-react";
import one from "../../assets/number-one.png"
import two from "../../assets/number-2.png"
import three from "../../assets/number-3.png"

export default function Steps() {
  return (
    <>
      <div>
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
      <div className="flex items-center justify-center gap-6 mt-10">
        <div className="bg-(--color-badge-bg) p-3 rounded-full z-10">
          <FileText className="size-7 text-blue-700" />
        </div>

        <div className="md:w-54 md:border md:border-dashed md:border-blue-300"></div>

        <div className="bg-(--color-badge-bg) p-3 rounded-full z-10">
          <SquarePen className="size-7 text-blue-700" />
        </div>

        <div className="md:w-54 md:border md:border-dashed border-blue-300"></div>

        <div className="bg-(--color-badge-bg) p-3 rounded-full z-10">
          <Download className="size-7 text-blue-700" />
        </div>
      </div>

      {/* steps content */}
     <div className="flex justify-center gap-40 mt-5 flex-wrap">

  <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
    <img src={one} className="h-8" />
    <h2 className="font-bold">Choose a Template</h2>
  </div>

  <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
    <img src={two} className="h-8" />
    <h2 className="font-bold">Add Your Details</h2>
  </div>

  <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
    <img src={three} className="h-8" />
    <h2 className="font-bold">Download & Apply</h2>
  </div>

</div>
    </>
  );
}
