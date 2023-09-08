"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import menu from "../../assets/menu.svg"
import Image from "next/image"

interface Props {
    tabs: String[],
    parent: String,
}
const Sidemenu = ({tabs, parent}: Props)=>{

    const [activeTab, setActiveTab] = useState(tabs[0])
    const [openSidebar,setOpenSidebar] = useState(true)

    return(
        <>
            <div className="hidden md:flex w-[30vw] h-fit flex flex-col bg-slate-100">
                    {tabs.map((tab,index) =>{
                        return(
                            <Link href={`/${parent}/${tab.split(" ")[0]}`} onClick={()=> setActiveTab(tab)} className={activeTab == tab ? "py-4 pl-4 border-b border-b-2 hover:bg-[#523873] text-white hover:text-white bg-[#523873]" : "py-4 pl-4 border-b border-b-2 hover:bg-[#523873] active:bg-[#523873] active:text-white hover:text-white"} key={index}>
                                {tab}
                            </Link>
                        )
                    })}
            </div>
            <Image src={menu} alt="" className="w-[30px] h-[30px] flex md:hidden" onClick={()=> setOpenSidebar(!openSidebar)}/>
            {openSidebar && (
                <div className="flex md:hidden w-[20rem] h-fit flex flex-col absolute top-[11vh] bg-slate-100">
                    {tabs.map((tab,index) =>{
                        return(
                            <Link href={`/${parent}/${tab.split(" ")[0]}`} onClick={()=> setActiveTab(tab)} className={activeTab == tab ? "py-4 pl-4 border-b border-b-2 hover:bg-[#523873] text-white hover:text-white bg-[#523873]" : "py-4 pl-4 border-b border-b-2 hover:bg-[#523873] active:bg-[#523873] active:text-white hover:text-white"} key={index}>
                                {tab}
                            </Link>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default Sidemenu