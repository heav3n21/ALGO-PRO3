import React from "react";
import{BiImageAdd, BiLink} from "react-icons/bi"

function InputChat() {
    return (
        <div className="input  bg-white p-[10] flex items-center justify-between ">
            <input type="text" placeholder="Type something..." className="w-[100%] border-none outline-none p-4 pl-2 text-black placeholder:text-[lightgray] " />
            <div className="send flex items-center gap-[10px] pr-2" >
                <BiImageAdd size={20} className="text-black cursor-pointer"/>
                <input type="file" style={{ display: "none" }} id="file" />
                <label className="text-black" htmlFor="file">
                    <BiLink size={20} className="text-black cursor-pointer"/>

                </label>
                <button className="text-[11px] py-[10px] rounded-md text-white px-[15px] bg-black textwhite"> Send</button>
            </div>
        </div>
    )
}


export default InputChat;