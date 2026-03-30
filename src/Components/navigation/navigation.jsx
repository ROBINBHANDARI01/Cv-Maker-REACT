import { Outlet } from "react-router-dom";
import Navbar from "../form/navbar"
import Template1 from "../Template/Template1";
import '../../Style/App.css'


export default function Navigation(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Template1/>
        </>
    )
}