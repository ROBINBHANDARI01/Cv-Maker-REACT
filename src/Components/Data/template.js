import { Component } from "lucide-react";
import robin from "../../assets/slider/robin.jpg";
import brenda from "../../assets/slider/temp1.jpg"
import millie from "../../assets/slider/temp2.png";
import waldo from "../../assets/slider/temp3.jpg";

export const templates=[
    {
        id:1,
        name:"Robin Blue",
        category: "Professional",
        thumbnail: robin,
        themeId: "blue"
    },
    {
        id:2,
        name:"Brenda Davis",
        category:"Creative",
        thumbnail: brenda,
        themeId: "green"
    },
    {
        id:3,
        name:"Millie Smith",
        category:"Modern",
        thumbnail: millie,
        themeId: "gray"  
    },
    {
        id:4,
        name:"Waldo Smith",
        category:"Simple",
        thumbnail: waldo,
        themeId: "dark" 
    }
]