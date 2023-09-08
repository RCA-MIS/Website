"use client"
// import Hero from "@/src/components/Hero/Hero"
import Sidemenu from "@/src/components/Sidemenu/Sidemenu"
import Footer from "@/src/components/Footer/Footer"
import News from "../components/NewsComponent/NewsComponent"
import facebookIcon from "../../assets/facebook.png"
import Newspaper from "../components/Newspaper/Newspaper"
import Link from "next/link"
import newOne from "../../../assets/newOne.png"
import newTwo from "../../../assets/newTwo.png"
import newThree from "../../../assets/newThree.png"
import newFour from "../../../assets/newFour.png"
import { useState } from "react"
import axios from "axios"
import { StaticImageData } from "next/image"

interface Props{
    news: singleNews[]
}

interface singleNews{
    title: string,
    content: string,
    date: string,
    image: StaticImageData
}

export const fetchNews = async ()=>{
    const res = await axios.get("http://194.163.167.131:8060/news/all", {
        headers:{
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6W3siY3JlYXRlZEF0IjoiMjAyMy0wOS0wM1QxOTozMjozNS4zOTlaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0wM1QyMTozMzowMC40ODlaIiwiaWQiOjEsInJvbGVfbmFtZSI6IlNUVURFTlQifV0sImlkIjoxLCJuYXRpb25hbF9pZCI6IjgyNzQwOTcyMDM0NzA0NzkiLCJpYXQiOjE2OTM3Nzk5NDMsImV4cCI6MTY5Mzc4MDU0M30.-F-L8hJH9ZrcR75v696NT0-S1zZeldvX4AG4KGCUVbI"
        }
    })
    
    return res.data
}

const About = async () => {
    const news = await fetchNews()
    console.log("news noted", news)
    let newsArray = news || [
        {
            image: newOne,
            title:"RCA reaches the National level in Basketball",
            content:"Experts from South Korea have arrived at RCA training AI and Cyber-security.",
            date:"Sunday 24th September, 2020"
        },
        {
            image: newOne,
            title:"Year 3 students visit to RCAA",
            content:"A visit from the World Bank at RCA, showcasing the nurtured talents at the school.",
            date:"Sunday 24th September, 2020"
        },
    ]
    // const news = [
    //     {
    //         image: newOne,
    //         title:"World Bank Fund RCA tomorrow",
    //         content:"We're thrilled to share a notable accomplishment from our RCA community. Our fellows recently took first place in the prestigious Daiho Hackathon. Five students emerged victorious.This achievement demonstrates their commitment to learning and innovation, which reflects the high educational standards of our school.",
    //         date:"Sunday 24th September, 2020"
    //     },
    //     {
    //         image: newOne,
    //         title:"Experts from South Korea at RCA",
    //         content:"Experts from South Korea have arrived at RCA training AI and Cyber-security.",
    //         date:"Sunday 24th September, 2020"
    //     },
    //     {
    //         image: newOne,
    //         title:"RCA reaches the National level in Basketball",
    //         content:"Experts from South Korea have arrived at RCA training AI and Cyber-security.",
    //         date:"Sunday 24th September, 2020"
    //     },
    //     {
    //         image: newOne,
    //         title:"Year 3 students visit to RCAA",
    //         content:"A visit from the World Bank at RCA, showcasing the nurtured talents at the school.",
    //         date:"Sunday 24th September, 2020"
    //     },
    //     {
    //         image: newOne,
    //         title:"RCA at the 19th ILO Regional Seminar",
    //         content:"Two RCA students showcase their prototype application called “KUICK RENT”.",
    //         date:"Sunday 24th September, 2020"
    //     },
    //     {
    //         image: newOne,
    //         title:"1st cohort  pF RCA participates in the NE",
    //         content:"At the first time RCA participates in the NE, it scores the highest nationwide",
    //         date:"Sunday 24th September, 2020"
    //     },
    // ]
    const [newsPaper, setNewsPaper] = useState(newsArray[0])
    console.log(newsArray, newsPaper)

    return (
        <div className="flex flex-col w-full md:flex-row">
            <div className="w-full md:w-3/5 pl-4">

                <h5 className="font-bold mb-4 ml-4">News Papers &gt; <Link href={"/"} className="text-[#523873]">Events</Link></h5>
                <Newspaper title={newsPaper.title} content={newsPaper.content} date={newsPaper.date} appreciations={"298"} feedbackMessages={"290"} buttonText={"Write to us about our News"} />
            </div>
            <div className="flex flex-col h-full md:w-2/5 gap-4">
                <h4 className="text-[#523873] font-extrabold">Trending News</h4>

                <div className="w-full overflow-y-auto">
                    {newsArray.map(((news:any)=>{
                        return(
                            <News image={news.image} date={news.date} title={news.title} content={news.content} setNewsPaper={setNewsPaper}/>
                        )
                    }))}

                </div>
            </div>
        </div>
    )
}
export default About