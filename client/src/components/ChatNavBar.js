import React from "react";
import JPG from "../images/rilakumma.jpg"


function ChatNavBar(){

    return(
        <div className="flex items-center bg--container--black h-12 p-[10px] justify-between">
            <span className=" font-bold">CODECLUB</span>
            <div className="user flex gab-[10]">
                <img className="bg-white h-[40px] w-[40px] rounded-2xl object-cover" src={JPG}/>
                <span> Matthew</span>
            </div>

            </div>
    )
}


export default ChatNavBar