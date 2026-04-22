import temp1 from "../../assets/slider/temp1.jpg"
import temp2 from "../../assets/slider/temp2.jpg"
import temp3 from "../../assets/slider/temp3.jpg"

export default function TemplateSlider(){
    return(
        <div>
        <div class="flex overflow-x-scroll justify-center  gap-2 lg:gap-5  m-10">
            <img src={temp1} class="h-50 lg:h-100"></img>
            <img src={temp2} class="h-50 lg:h-100"></img>
            <img src={temp3} class="h-50 lg:h-100"></img>
        </div>
        </div>
    )
}