import { Outlet } from "react-router-dom";
import Navbar from "../form/formNavigation"
import Template1 from "../Template/Template1";
import HomeNav from "../home/homeNav";
import '../../Style/App.css'


export default function Dashboard(){
    return(
        <>
         <HomeNav/>
        <Navbar/>
        <Outlet/>
        <Template1/>
        </>
    )
}