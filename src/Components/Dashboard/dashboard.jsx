import { Outlet } from "react-router-dom";
import Navbar from "../form/formNavigation"
import Template1 from "../Template/Template1";
import FormNav from "../form/formNav";
import '../../Style/App.css'


export default function Dashboard(){
    return(
        <>

         <FormNav/>
            <div className="grid  md:grid-cols-3 grid-rows-1 gap-4 overflow-hidden">
             <aside className=" border-r  border-gray-200 overflow-y-auto bg-gray-50">
                 <Navbar/>
             </aside>
            
            <main className="overflow-y-auto  p-8">   
                <Outlet/>
            </main>

            <section className="border border-gray-200 overflow-y-auto p-4 bg-slate">
                <Template1/>
            </section>
        </div>
        </>
    )
}