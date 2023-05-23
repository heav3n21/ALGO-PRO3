import React, { useState } from "react";
import { FiEdit } from "react-icons/fi"
import Auth from "../utils/auth";
import JPG from "../images/rilakumma.jpg"
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";





function Profile() { 
    const [showEditContainer , setShowEditContainer] = useState(false);
    const { loading, data } = useQuery(QUERY_USER, {
        variables:{email : "email."}
    })
    
    if(loading === false){
        
        console.log(data.oneUser.username, loading)
        let name = data.oneUser.username;

    }

    const handleLogout = (mobile) => {
        Auth.logout();
    };


    return (
        <>
 

        {!loading? (

            <section className="App h-screen flex justify-center items-center bg-gradient-to-r  bg-[#0D0D0D]">
                <div className=" text-white rounded-lg p-12 mt-[-290px] flex flex-col items-center shadow-lg  bg-[#0D0D0D] ">
                    Profile
                    <div>

                    </div>
                    <div>
                        <img src={JPG} className=" h-[270px] rounded-3xl" />
                    </div>
                    <div id="title" className=" text-white font-bold text-3xl mt-2 flex text-center">{data.oneUser.username}
                        <FiEdit size={20} className="ml-4 mt-2 text-gray-300 cursor-pointer hover:text-white" />
                    </div>
                    <div id="Subtitle" className="text-sm text-gray-400 font-semibold "> USER BIO of the user </div>
                 
                    <div id="actions" className="justify-between flex ">
                        <button onClick={() => { handleLogout("mobile") }} className="text-white primary--background--color py-1 px-2 rounded-md mr-4 ">Logout</button>


                    </div>

                </div>

            </section>
        ):
            (
                <div className="h-screen">hi</div>
            )



        }







        </>
    )
}


export default Profile