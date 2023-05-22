import React from "react";

import {AiOutlineVideoCamera, AiOutlineUserAdd,AiOutlineUnorderedList } from "react-icons/ai"
import Messages from "./Messages";
import InputChat from "./InputChat";

function ChatBox(){

    return(
        <div className="flex-[2]  ">
            <div className="flex chatInfo h-[48px] bg--container--black  items-center justify-between p-[10px] text-gray-300">
                <span className="cursor-default">Joe</span>
                <div className="chatIcons flex justify-between ">
                    <AiOutlineVideoCamera size={20}  className="mr-4 cursor-pointer  hover:text-white"/>
                    <AiOutlineUserAdd size={20} className="mr-4 cursor-pointer hover:text-white"/>
                    <AiOutlineUnorderedList size={20} className="mr-4 cursor-pointer hover:text-white"/>
                </div>
            </div>

                <Messages/>
        
                <InputChat/>
            </div>
    )
}

export default ChatBox;