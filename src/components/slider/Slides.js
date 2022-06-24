import React from "react";
import "./slider.css";

const slidesInfo = [
   
    {  
        src:"https://i.ibb.co/VjLjrTn/francopet.jpg",
        alt: "Proyecto-2",
        desc: "Pet Shop",
        link: "https://franco-petshop-vet.netlify.app/",
        linkCode: "https://github.com/danielmc22/pet-shop-web"
     },
     {  
        src:"https://i.ibb.co/0QwS9G7/figurappslider.jpg",
        alt: "Proyecto-3",
        desc: "FigurApp",
        link: "https://danielmc22.github.io/figurApp/",
        linkCode: "https://github.com/danielmc22/figurApp"
     },
     {  
        src:"https://i.ibb.co/k6SwzPR/shortUrl.jpg",
        alt: "Proyecto-4",
        desc: "Short Url",
        link: "https://url-saveandshort.herokuapp.com/",
        linkCode: "https://github.com/danielmc22/shortCut-url"
     },
     {  
        src:"https://i.ibb.co/9Y45hV1/hockey.jpg",
        alt: "Proyecto-5",
        desc: "Hockey League",
        link: "https://hockeyleague-web.netlify.app/",
        linkCode: "https://github.com/danielmc22/hockey-league-landing-page"
     },
     {  
        src:"https://i.ibb.co/jb86zNL/mitinerary.jpg",
        alt: "Proyecto-6",
        desc: "MyTinerary",
        link: "#",
        linkCode: "https://github.com/danielmc22/mytinerary-martinez-daniel"
     },
     {  
        src:"https://i.ibb.co/w0PKfxL/macchiato.jpg",
        alt: "Proyecto-1",
        desc: "Macchiato",
        link: "https://macchiatoapp.herokuapp.com/",
         linkCode: "https://github.com/danielmc22/coffeeStoreApp"
     },
]

const slides = slidesInfo.map((slide) => ( 
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
        <div className="buttons-slides">
            <a href={slide.link} target="_blank"> Demo </a>
            <a href={slide.linkCode} target="_blank"> Code </a>
        </div>
    </div>
   
));

export default slides