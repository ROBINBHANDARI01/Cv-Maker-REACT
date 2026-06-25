import { Component } from "lucide-react";
import brenda from "../../assets/slider/brenda.webp";
import robin from "../../assets/template-thumbnails/amanGreen.jpg"
import millie from "../../assets/slider/millieImage.webp";
import waldo from "../../assets/slider/waldoImage.webp";

export const templates=[
    {
        id:1,
        name:"Brenda",
        category: "Professional",
        thumbnail: brenda,
        themeId: "blue"
    },
    {
        id:2,
        name:"Robin",
        category:"Creative",
        thumbnail: robin,
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
        themeId: "blue" 
    }
]