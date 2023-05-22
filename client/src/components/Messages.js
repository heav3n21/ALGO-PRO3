import React from "react";
import Message from "./Message";


function Messages(){
    return(
        <>
        <section className="messages bg- p-[10px] overflow-y-scroll  h-[489px]  ">
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>

              </section>
        </>
    )
}

export default Messages;