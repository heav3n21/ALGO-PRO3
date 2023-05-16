import React from "react";
import { motion } from "framer-motion"
import IMGprogammer from "../images/programmer.png"
import PNGcomputer from "../images/computer-programming-web-development-computer-software-programming-language-theme-coder-d6c1028a0fd807e67bf049986ccd5b8b.png"
function Homepage() {


    return (
        <div className="text-white">
            <motion.div animate={{ y: 0, scale: 1 }} transition={{ type: 'tween', duration: 1 }} initial={{ scale: 2 }} className="max-w-[800px] mt-[-106px] w-full h-screen mx-auto text-center flex flex-col justify-center  items-center">
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
                <button className=" rounded-md font-semibold py-3 shadow--css w-[200px] mt-4 text-black bg--container--cyan" > Get Started coding</button>
            </motion.div>
            <div className="w-full py-14 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className="mx-auto my-4" src={IMGprogammer} alt="/" />
                    <div className="flex flex-col justify-center">
                        <p className="primary--text--color font-bold text-xl mt-9"> What Are We All About?</p>
                        <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">Elevate Your Skills, Solve with <span className="second--text--color">Ease.</span></h1>
                        <p>At our platform, we are dedicated to empowering individuals in their coding journey. We provide a dynamic and interactive environment where you can hone your programming
                            skills and tackle challenging problems head-on. <span className="primary--text--color font-semibold">With a vast collection of coding challenges and comprehensive resources </span>, we aim to equip you with the knowledge and confidence
                            to excel in the world of coding. For beginners seeking to learn the fundamentals, our platform is designed
                            to support your growth and help you unlock your full coding potential.</p>
                    </div>

                </div>
                
                <div className="w-full py-14 px-4 mt-60" >
                    <div className=" mx-auto grid md:grid-cols-2">
                        <div className="flex flex-col justify-center ">
                            <p className="primary--text--color font-bold text-xl mt-9"> Pick your Language!</p>
                            <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">Unleashing <span className="second--text--color">Algorithmic</span> Prowess in Your Preferred Language</h1>
                            <p>Whether you're a Python enthusiast, a Java aficionado, or a C++ guru, our platform caters to your coding preferences. Gone are the days of struggling to understand algorithmic
                                 concepts in an unfamiliar language. With <span className="primary--text--color font-semibold">Code Club</span>, you'll receive algorithmic challenges tailored to your chosen language, allowing you to practice and enhance your coding
                                  skills in a comfortable and familiar environment. Join us today and embark on a journey of algorithmic mastery, unlocking your coding potential like never before!</p>
                        </div>

                        <img className="sm:hidden md:block mx-auto my-4" src={PNGcomputer} alt="/" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Homepage;