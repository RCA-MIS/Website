"use client"
import Newspaper from "../../news/components/Newspaper/Newspaper"
import Link from "next/link"
import News from "../components/Publication/Publication"
import newOne from "../../../assets/newOne.png"
import newTwo from "../../../assets/newTwo.png"
import newThree from "../../../assets/newThree.png"
import Image from "next/image"
import axios from "axios"
import { useState, useEffect } from "react"
import { url, token } from "@/src/utils/url"
// import { useInnovationsData } from "./InnovationContext"

const fetchInnovations = async ()=>{
    const res = await axios.get(`${url}/projects/all`, {
        headers:{
            authorization: `Bearer ${token}`
        }
    })
    const projData = res.data;
    console.log(projData)
    return projData
}


let news = [
    {
        image: newOne,
        title:"Robotics on a roll here in Rwanda Coding Academy",
        content:"Obstacle Avoiding/Following robot cars assembled and programmed by students of Rwanda Coding Academy",
        date:"Sunday 24th September, 2020",
        category:"research"
    },
    {
        image: newOne,
        title:"Club for \"Artificial Intelligence, Robotics, IoT\" by instructor Gabriel Baziramwabo",
        content:"Students were able to create their very own weather station with the assistance instructors.",
        date:"Sunday 24th September, 2020",
        category:"fundraisation"
    },
    {
        image: newOne,
        title:"Club for \"Artificial Intelligence, Robotics, IoT\" by instructor Gabriel Baziramwabo",
        content:"Students at RCA have built their very own weather station with the provision of resources by the school ",
        date:"Sunday 24th September, 2020",
        category:"startup"
    },
]


const Research = ()=>{
    const [projectInnovations, setProjectInnovations] = useState([])
    useEffect(()=>{
        const projects = fetchInnovations()
        projects.then(res=>{

            setProjectInnovations(res.length ? res: news)
        })
    },[])

    const researchInnovations = news.filter(single=>{
        return single.category == "startup" || single.category == undefined
    })
    const [publication, setPublication] = useState(researchInnovations[0])
    return(
        <div className="w-full">

            <h5 className="font-bold mb-4 ml-4">Innovation Hub &gt; <Link href={"/"} className="text-[#523873]">Startups</Link></h5>
            <div className="w-full md:h-[50vh] flex justify-evenly px-2 flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-full bg-[#f8f8f8] mx-1">
                    <Image src={newTwo} alt="student" className="w-full rounded-lg" />

                </div>
                <div className="w-full md:w-1/2 h-full bg-[#f8f8f8] my-2 md:my-0 mx-1">
                    <Image src={newThree} alt="student" className="w-full rounded-lg" />

                </div>
            </div>
            <div className="w-full pl-3 mt-9 flex flex-col md:flex-row">

                <Newspaper title={publication.title} content={publication.content} date={publication.date} appreciations={"298"} feedbackMessages={"290"} buttonText={"Write to us about our News"} />
                <div className="flex flex-col gap-4">
                    <h4 className="text-[#523873] font-extrabold">More Innovations</h4>

                    <div>
                        {researchInnovations.map((newsComp, index)=>{
                            return(
                                <News key={index} image={newsComp.image} date={newsComp.date} title={newsComp.title} content={newsComp.content} setPublication={setPublication}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research