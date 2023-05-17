import React from "react";
import { motion } from "framer-motion"
import IMGprogammer from "../images/programmer.png"

import Footer from '../components/Footer'
function Homepage() {


    return (
        <>
        
        <div  className="text-white">
            <motion.div animate={{ y: 0, scale: 1 }} transition={{ type: 'tween', duration: 2 }} initial={{ scale: 100 }} className="max-w-[800px] mt-[-106px] w-full h-screen mx-auto text-center flex flex-col justify-center  items-center">
                <p className="primary--text--color font-bold text-xl"> GROWING WITH A.I 4 ALGO </p>
                <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6"> GROW WITH CODE CLUB</h1>
                <div className="flex justify-center items-center ">

                    <p className="md:text-5xl sm:text-5xl text-xl font-bold ">Easy,fast coding for <span></span>
                    </p>

                </div>
                <div className="flex justify-center items-center ">

                    <p className="md:text-2xl sm:text-1xl text-xl font-bold text-gray-500 mt-2">Unlock Your Potential, Sharpen Your Skills with Challenging Problems.<span></span>
                    </p>

                </div>
                <button className="rounded-md font-medium py-3 btn--homepage--chat w-[200px] mt-2 text-black" > Get Started coding</button>
            </motion.div>
            <div className="w-full py-14 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className="mx-auto my-4" src={IMGprogammer} alt="/"/>
                    <div className="flex flex-col justify-center">
                        <p className="primary--text--color font-bold text-xl mt-9"> What Are We All About?</p>
                        <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">Elevate Your Skills, Solve with Ease.</h1>
                        <p>At our platform, we are dedicated to empowering individuals in their coding journey. We provide a dynamic and interactive environment where you can hone your programming
                             skills and tackle challenging problems head-on. With a vast collection of coding challenges and comprehensive resources, we aim to equip you with the knowledge and confidence 
                             to excel in the world of coding. For beginners seeking to learn the fundamentals, our platform is designed
                              to support your growth and help you unlock your full coding potential.</p>
                    </div>

                </div>

            </div>
        </div>
        <Footer/>
 </>

    )
}

export default Homepage;