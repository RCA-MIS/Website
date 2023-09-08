'use client'
import Link from "next/link"
import logo from "../../assets/logo.png"
import Image from "next/image"
import search from "../../assets/search.png"
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'
import { useState } from "react"

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)
    const handleMenu = ()=>{
        setShowMenu((prev)=>!prev)
    }
    return (
        <div className="w-full">
            <div className="upper-container w-full sm:flex justify-between px-9 py-2">
                <Link className="text-lg" href={"/"}>Welcome to <span className="text-purpleColor">Rwanda Coding Academy</span></Link>

                <span className="flex gap-1"><Link href={"https://rca-student.vercel.app/"}>Student</Link> / <Link href={"https://mis-app-lake.vercel.app/"}>Staff Portal</Link></span>
            </div>
            <div className="w-full flex justify-between lg:px-6 md:px-1  lower-navbar py-6 items-center text-white">
                <Link href={"/"}><Image src={logo} alt={""} /></Link>
                <div className="hidden md:flex md:gap-1 lg:gap-6 bg-[#]">
                    <Link href={"/about_us"}>
                        About&nbsp;us<span>| </span>
                    </Link>
                    <Link href={"/academics"}>Academics<span>| </span></Link>
                    <Link href={"/news"}>News<span>| </span></Link>
                    <Link href={"/innovations"}>Innovations<span>| </span></Link>
                    <Link href={"/campus_life"}>Campus&nbsp;life<span>| </span></Link>
                    <Link href={"/admissions"}>Admissions<span>| </span></Link>
                    <Link href={"/alumni"}>Alumni<span>| </span></Link>
                    <Link href={"/contact_us"}>Contact&nbsp;us</Link>
                </div>

                <div className=" py-2 md:px-1 lg:px-4 rounded-md cursor-pointer relative ">
                    <input className="w-[30px] focus:w-full px-2 pr-7 py-2 md:px-1 lg:px-4 bg-[#D9D9D9] rounded-md cursor-pointer"/>
                    <Image src={search} alt="" className="absolute top-4 right-1 md:right-5 w-6 h-6"/>
                </div>
                <div className="text-2xl md:hidden hover:cursor-pointer" onClick={()=>handleMenu()}>
                    {showMenu?(<AiFillCloseCircle />):(  <AiOutlineMenu />)}
                  
                </div>
                    
                {/* </div> */}  
            </div>
            {showMenu &&(
            <div className=" flex flex-col md:hidden bg-white z-40 divide-y-2 flex flex-col space-y-2 z-20 mb-4">
                    <Link href={"/about_us"}>
                        About us
                    </Link>
                    <Link href={"/academics"}>Academics</Link>
                    <Link href={"/news"}>News</Link>
                    <Link href={"/innovations"}>Innovations</Link>
                    <Link href={"/campus_life"}>Campus life</Link>
                    <Link href={"/admissions"}>Admissions</Link>
                    <Link href={"/alumni"}>Alumni</Link>
                    <Link href={"/contact_us"}>Contact us</Link>
                </div>

            )}
        {
      

        }
            
        </div>
    )
}

export default Navbar