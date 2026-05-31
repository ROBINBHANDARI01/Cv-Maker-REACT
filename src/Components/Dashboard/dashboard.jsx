import { Outlet } from "react-router-dom";
import Navbar from "../form/formNavigation"
import Template1 from "../Template/Template1";
import FormNav from "../form/formNav";
import '../../Style/App.css'


export default function Dashboard(){
    return(
        <>
        <div className=" border-gray-200 border-b-2">
         <FormNav/>
         </div>
            <div className="grid md:grid-cols-[250px_1.5fr_2fr] grid-rows-1  md:gap-4 overflow-hidden">
             <aside className="border-r-2  border-gray-200 overflow-y-visible bg-gray-50">
                 <Navbar/>
             </aside>
            
            <main className="overflow-y-auto border-t-2 bg-black/2  border-gray-200 ">   
                <Outlet/>
            </main>

            <section className="md:border-l-border-gray-200 overflow-y-auto p-4 bg-slate">
                <Template1/>
            </section>
        </div>
        </>
    )
}