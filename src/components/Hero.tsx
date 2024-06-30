import React from "react"
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
   return (
    <div className="pb-20 pt-36">
        <div className="">
            <Spotlight className="-top-40 -left-20 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
            <Spotlight className="top-28 left-80 h-[80v] w-[50vw]" fill="white" />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Made with Next.js
                </h2>

                <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words={"Jyotsna's Portfolio"} />

                <p className="text-center mb-4 md:tracking-wider text-xs md:text-xl lg:text-2xl">
                    I am Jyotsna Sabne. I am a full stack dot net developer. 
                </p>

                <a href="#about">
                    <MagicButton 
                        title="See my skills"
                        icon={ <FaLocationArrow />}
                        position="right"
                    />
                </a>  

            </div>
        </div>

        
    </div>
   );
}

export default Hero;

