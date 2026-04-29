import temp1 from "../../assets/slider/temp1.jpg";
import temp2 from "../../assets/slider/temp2.jpg";
import temp3 from "../../assets/slider/robin.jpg";
import temp4 from "../../assets/slider/temp3.jpg";

export default function TemplateSlider() {
  return (
    <>
      <div>
        <div className="mt-35 p-2 mx-5">
          <div className="text-xs m-auto md:text-sm w-fit  bg-(--color-badge-bg) text-(--color-badge-text) px-3 py-1.5 rounded-full font-semibold mb-6">
            Easy as 1-2-3
          </div>
          <div className="text-2xl text-center md:text-3xl font-semibold">
            <h2 className="text-(--color-text-primary)">
              Professional Templates for Every
            </h2>
            <span class="text-(--color-primary)">Every Career</span>
          </div>
          <p className="text-sm text-(--color-text-primary)  text-center mt-2 mx-10">
            Land more interviews with a professional edge. Our Resume Builder
            helps you create a standout resumes in minutes.{" "}
          </p>
          <div className="flex m-auto mt-15 gap-5 shadow-xl min-w-fit max-w-270  overflow-auto">
            <img src={temp1} class="h-50 lg:h-100"></img>
            <img src={temp2} class="h-50 lg:h-100"></img>
            <img src={temp3} class="h-50 lg:h-100"></img>
            <img src={temp4} class="h-50 lg:h-100"></img>
          </div>
        </div>
      </div>
    </>
  );
}
