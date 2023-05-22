import React from "react";
import PNGcPlusPlus from '../images/C++.png'
import PNGJS from '../images/JS.png'
import JPGpython from '../images/python.png'
import { AnimatePresence, motion } from "framer-motion";


function CommunityPage(){

    


    return (
        <>
            <section className="bg-gradient-to-b from-[#181818]  w-full text-white md:h-screen">

                <motion.div initial={{opacity:0}} transition={{}}animate={{opacity:20}} exit={{opacity:20}} className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline "> CommunityPage </p>
                        <p className="py-6">Dive Deep into Your Favorite Programming Languages with Others!</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                        <div className="shadow-lg  shadow-black rounded-lg content">
                            <img className="rounded-md duration-200 hover:scale-105 " src={PNGcPlusPlus}></img>
                            <div>
                                <button className="font-bold w-full px-6 py-3 m-4 ">C++ </button>
                            </div>
                        </div>
                        <div className="shadow-lg shadow-black rounded-lg content">
                            <img className="rounded-md duration-200 hover:scale-105 " src={PNGJS}></img>
                            <div>
                                <button className="font-bold w-full px-6 py-3 m-4 ">Chat</button>
                            </div>
                            
                            

                        </div>
                        <div className="shadow-lg  shadow-black rounded-lg content">
                            <img className="rounded-md duration-200 hover:scale-105 " src={PNGcPlusPlus}></img>
                            <div>
                                <button className="font-bold w-full px-6 py-3 m-4 ">Chat</button>
                            </div>
                        </div>
                        <div className="shadow-lg shadow-black rounded-lg content">
                            <img className="rounded-md duration-200 hover:scale-105 " src={PNGJS}></img>
                            <div>
                                <button className="font-bold w-full px-6 py-3 m-4 ">JavaScript</button>
                            </div>
                            
                            

                        </div>
                        
                        <div className="shadow-lg shadow-black rounded-lg content">
                            <img className="rounded-md duration-200 hover:scale-105 " src={JPGpython}></img>
                            <div>
                                <button className="font-bold w-full px-6 py-3 m-4 ">Python</button>
                            </div>
                            
                            

                        </div>
                        <div className="shadow-lg shadow-black rounded-lg content">
                            <img className="rounded-md duration-200 hover:scale-105 " src={JPGpython}></img>
                            <div>
                                <button className="font-bold w-full px-6 py-3 m-4 ">Python</button>
                            </div>
                            
                            

                        </div>
                        
                    </div>
                </motion.div>
            </section>



        </>
    )

}


export default CommunityPage;