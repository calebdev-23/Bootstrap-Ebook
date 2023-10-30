import Hero from "./Hero";
import Icon from "./Icons";
import Details from "./Details";
import React from "react";
import Testimonials from "./Testimonials";
import Download from "./Download";

export default function Home(){
    return(
        <>
            <Hero/>
            <Icon/>
            <Details/>
            <Testimonials/>
            <Download/>
        </>
    )
}