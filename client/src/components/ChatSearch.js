import React from "react";
import JPG from "../images/rilakumma.jpg"


function ChatSearch(){

    return(
        <div className="search border-b-[1px] ">
            <div className="mx-2 mb- rounded-md searchForm bg-[#0D0D0D] py-2" >
            <input type="text" placeholder="search a friends username" className= " mx-2 w-full text-start placeholder:text-gray-400 bg-transparent border-none shadow outline-none"/>
            </div>
            <div className=" userChat hover:bg-[#0D0D0D] p-[10px] flex items-center gap-[10px] cursor-pointer">
                <img className=" w-[50px] h-[50px] rounded-md object-cover" src={JPG}/>
                <div  >
                    <span className="font-bold"> JOE</span>
                  

                </div>
            </div>
        </div>
    )
}


export default ChatSearch