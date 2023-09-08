"use client"
import Newspaper from "./../news/components/Newspaper/Newspaper"
import Link from "next/link"
import News from "./components/Publication/Publication"
import newOne from "../../assets/newOne.png"
import newTwo from "../../assets/newTwo.png"
import newThree from "../../assets/newThree.png"
import Image from "next/image"
import axios from "axios"
import { useState } from "react"
// import { useInnovationsData } from "./InnovationContext"

export const fetchInnovations = async ()=>{
    const res = await axios.get("http://194.163.167.131:8060/projects/all", {
        headers:{
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6W3siY3JlYXRlZEF0IjoiMjAyMy0wOS0wM1QxOTozMjozNS4zOTlaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0wM1QyMTozMzowMC40ODlaIiwiaWQiOjEsInJvbGVfbmFtZSI6IlNUVURFTlQifV0sImlkIjoxLCJuYXRpb25hbF9pZCI6IjgyNzQwOTcyMDM0NzA0NzkiLCJpYXQiOjE2OTM3Nzk5NDMsImV4cCI6MTY5Mzc4MDU0M30.-F-L8hJH9ZrcR75v696NT0-S1zZeldvX4AG4KGCUVbI"
        }
    })
    const projData = res.data;
    return projData
}

let news =[
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
    // const innovations = useInnovationsData()
    // console.log(innovations,"these are from the context")
    const researchInnovations = news.filter(single=>{
        return single.category == "research" || single.category == undefined
    })
    const [publication, setPublication] = useState(researchInnovations[0])
    return(
        <div className="w-full">

            <h5 className="font-bold mb-4 ml-4">Innovation Hub &gt; <Link href={"/"} className="text-[#523873]">Research and publications</Link></h5>
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