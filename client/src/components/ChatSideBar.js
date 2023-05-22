import React from "react";
import ChatNavBar from "./ChatNavBar";
import ChatSearch from "./ChatSearch";
import NavBarChats from "./NavChats";

function ChatSidebar(){



    return(
        <div className="flex-[1]  bg--container--black hidden lg:block" >
        <ChatNavBar />
        <ChatSearch/>
        <NavBarChats/>
        </div>
    )
}

export default ChatSidebar