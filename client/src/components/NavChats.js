import React from "react";
import JPG from "../images/rilakumma.jpg"

function NavBarChats(){


    return(
        <section className="chats">
        <div className="userChat p-[10px] flex items-center gap-[10px] cursor-pointer">
        <img className=" w-[50px] h-[50px] rounded-md object-cover" src={JPG}/>
        <div  >
            <span className="font-bold text-[18px]"> JOE</span>
            <p className="text-gray-400 text-[14px]">Hello</p>
        </div>
    </div>
    </section>
    )
}

export default NavBarChats