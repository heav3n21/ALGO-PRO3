import React, { useState } from "react";
import{ Link } from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav)
    }
    return (
            <div className="sticky top-0">
        <nav className="flex  justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white  nav--bar">
            <h1 className="w-full text-3xl font-bold primary--text--color"> CODE CLUB</h1>
            <ul className="hidden md:flex">
                <Link to={'/'}  className="p-4 nav--links">HOME</Link>
                <Link to={'/login'} className="p-4">LOGIN</Link>
                <Link className="p-4">CHAT</Link>
                <Link className="p-4">CREATORS</Link>
                <Link className="p-4">CONTACT</Link>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full nav--bar ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold primary--text--color m-4"> CODE CLUB</h1>
                <ul className="p-4 flex flex-col">
                   
                    <Link onClick={() =>{ setNav(false) }} to={'/'} className="p-4 border-b border-gray-500 w-[100%]">HOME</Link>
                    <Link onClick={() =>{ setNav(false) }} to={'/login'} className="p-4 border-b border-gray-500">LOGIN</Link>
                    <Link onClick={() =>{ setNav(false) }} className="p-4 border-b border-gray-500">CHAT</Link>
                    <Link onClick={() =>{ setNav(false) }} className="p-4 border-b border-gray-500">CREATORS</Link>
                    <Link onClick={() =>{ setNav(false) }} className="p-4">CONTACT</Link>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar