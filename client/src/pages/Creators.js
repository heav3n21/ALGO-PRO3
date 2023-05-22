import React from "react";
import JPGrila from "../images/rilakumma.jpg"


function Creators() {


    return (
        <>
            <section className="w-full text-white content-center justify-center h-full bg-gradient-to-b from-[#141414] to-[#d8143f]">
                <div className="pb-8 m-10 text-center">
                    <h1 className="inline font-bold text-6xl content-center justify-center mb-7 "> Creators</h1>
                </div>
                <div className=" rounded-lg mb-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-3 sm:px-10 items-center justify-center ">
                    <div className="shadow-lg rounded-lg shadow-black">
                        <img src={JPGrila} className="rounded-lg p-3" />
                        <div className="text-center">
                            <h1 className="m-4 font-bold text-4xl border-b border-b-[#17BEBB]">Matthew</h1>
                        </div>
                        <div className="m-4 p-4">
                            <p className="mt-3 font-semibold">About me: My name is matthew Garcia</p>
                            <p className="mt-3 font-semibold">Job description: WEB DEV</p>
                            <p> </p>
                        </div>

                    </div>
                    <div className="shadow-lg rounded-lg shadow-black">
                        <img src={JPGrila} className="rounded-lg p-3" />
                        <div className="text-center">
                            <h1 className="m-4 font-bold text-4xl border-b border-b-[#17BEBB]">Malik</h1>
                        </div>
                        <div className="m-4 p-4">
                            <p className="mt-3 font-semibold">About me: My name is matthew Garcia</p>
                            <p className="mt-3 font-semibold">Job description: WEB DEV</p>
                            <p> </p>
                        </div>

                    </div>
                    <div className="shadow-lg rounded-lg shadow-black">
                        <img src={JPGrila} className="rounded-lg p-3" />
                        <div className="text-center">
                            <h1 className="m-4 font-bold text-4xl border-b border-b-[#17BEBB]">Nathaniel</h1>
                        </div>
                        <div className="m-4 p-4">
                            <p className="mt-3 font-semibold">About me: My name is matthew Garcia</p>
                            <p className="mt-3 font-semibold">Job description: WEB DEV</p>
                            <p> </p>
                        </div>

                    </div>


                </div>
            </section>

        </>
    )
}


export default Creators