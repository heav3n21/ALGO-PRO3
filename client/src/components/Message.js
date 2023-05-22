import React from "react";
import JPG from "../images/rilakumma.jpg"
import PNG from "../images/C++.png"
function Message() {
    const owner = false;
    const user = true;
    return (
<>
        <div className={owner ? "message owner flex gap-[20px] mb-[20px] flex-row-reverse" : "message  flex gap-[20px] mb-[20px]"}  >
            <div className="messageinfo flex flex-col text-[lightgray] font-[300] text-sm">
                <img src={JPG} className="w-[40px] h-[40px] rounded-lg object-cover" />
                <span className="whitespace-nowrap">Just now</span>

            </div>
            <div className={owner ? "items-end messageContent max-w-[80%] flex flex-col gap-[10px] " : "messageContent max-w-[80%] flex flex-col gap-[10px] "}>
                <img src={PNG} className="w-[50%]  " />
                <p className={owner ? "owner max-w-max bg-[#0D0D0D] text-[#0D0D0D] py-[10px] px-[20px] rounded-tr-[2px] rounded-br-[10px] rounded-bl-[10px] rounded-tl-[10px]" : "bg-[#0D0D0D] max-w-max text-white py-[10px] px-[20px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] rounded-tl-[2px]"}>hello </p>

            </div>
         
        </div>
                <div className={user ? "message owner flex gap-[20px] mb-[20px] flex-row-reverse" : "message  flex gap-[20px] mb-[20px]"}  >
                <div className="messageinfo flex flex-col text-[lightgray] font-[300] text-sm">
                    <img src={JPG} className="w-[40px] h-[40px] rounded-lg object-cover" />
                    <span className="whitespace-nowrap">Just now</span>
    
                </div>
                <div className={user ? "items-end messageContent max-w-[80%] flex flex-col gap-[10px] " : "messageContent max-w-[80%] flex flex-col gap-[10px] "}>
                    <img src={PNG} className="w-[50%]  " />
                    <p className={user ? "owner max-w-max bg-[#0D0D0D] text-white py-[10px] px-[20px] rounded-tr-[2px] rounded-br-[10px] rounded-bl-[10px] rounded-tl-[10px]" : "bg-[#0D0D0D] max-w-max text-white py-[10px] px-[20px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] rounded-tl-[2px]"}>hello </p>
    
                </div>
             
  
            </div>
            </>
    )
}


export default Message;