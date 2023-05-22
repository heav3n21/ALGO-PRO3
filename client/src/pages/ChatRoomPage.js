import React from "react";

import ChatSideBar from "../components/ChatSideBar"
import ChatBox from "../components/ChatBox";

function ChatRoomPage() {



    return (

        <>
            <section className="chat--home text-white  h-screen flex items-center justify-center mt-[-60px]">
                <div className="chat--container shadow-lg shadow-black rounded-lg   h-[596px] w-[65%] flex overflow-hidden">
                    <ChatSideBar />
                    <ChatBox />
                </div>
            </section>
        </>
    )
}

export default ChatRoomPage;