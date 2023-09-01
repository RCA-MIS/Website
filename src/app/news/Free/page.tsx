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

const About = () => {
    const news = [
        {
            image: newOne,
            title:"World Bank Fund RCA tomorrow",
            content:"We're thrilled to share a notable accomplishment from our RCA community. Our fellows recently took first place in the prestigious Daiho Hackathon. Five students emerged victorious.This achievement demonstrates their commitment to learning and innovation, which reflects the high educational standards of our school.",
            date:"Sunday 24th September, 2020"
        },
        {
            image: newOne,
            title:"Experts from South Korea at RCA",
            content:"Experts from South Korea have arrived at RCA training AI and Cyber-security.",
            date:"Sunday 24th September, 2020"
        },
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
        {
            image: newOne,
            title:"RCA at the 19th ILO Regional Seminar",
            content:"Two RCA students showcase their prototype application called “KUICK RENT”.",
            date:"Sunday 24th September, 2020"
        },
        {
            image: newOne,
            title:"1st cohort  pF RCA participates in the NE",
            content:"At the first time RCA participates in the NE, it scores the highest nationwide",
            date:"Sunday 24th September, 2020"
        },
    ]
    const [newsPaper, setNewsPaper] = useState(news[0])

    return (
        <div className="flex flex-col w-full md:flex-row">
            <div className="w-full md:w-3/5 pl-4">

                <h5 className="font-bold mb-4 ml-4">News Papers &gt; <Link href={"/"} className="text-[#523873]">Free square</Link></h5>
                <Newspaper title={newsPaper.title} content={newsPaper.content} date={newsPaper.date} appreciations={"298"} feedbackMessages={"290"} buttonText={"Write to us about our News"} />
            </div>
            <div className="flex flex-col h-full md:w-2/5 gap-4">
                <h4 className="text-[#523873] font-extrabold">Trending News</h4>

                <div className="w-full overflow-y-auto">
                    {news.map((news=>{
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