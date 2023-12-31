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
import { useState, useEffect } from "react"
import axios from "axios"
import { StaticImageData } from "next/image"
import { url } from "@/src/utils/url"

interface Props{
    news: singleNews[]
}

interface singleNews{
    title: string,
    content: string,
    date: string,
    image: StaticImageData
}

const About = () => {
    const dummyNews = [
        {
            image: newOne,
            title:"World Bank Fund RCA tomorrow",
            content:"We're thrilled to share a notable accomplishment from our RCA community. .",
            date:"Sunday 24th September, 2020",
            category:"news"
        },
        {
            image: newOne,
            title:"Experts from South Korea at RCA",
            content:"Experts from South Korea have arrived at RCA training AI and Cyber-security.",
            date:"Sunday 24th September, 2020",
            category:"news"
        },
        {
            image: newOne,
            title:"RCA reaches the National level in Basketball",
            content:"Experts from South Korea have arrived at RCA training AI and Cyber-security.",
            date:"Sunday 24th September, 2020",
            category:"events"
        },
        {
            image: newOne,
            title:"Year 3 students visit to RCAA",
            content:"A visit from the World Bank at RCA, showcasing the nurtured talents at the school.",
            date:"Sunday 24th September, 2020",
            category:"events"
        },
        {
            image: newOne,
            title:"RCA at the 19th ILO Regional Seminar",
            content:"Two RCA students showcase their prototype application called “KUICK RENT”.",
            date:"Sunday 24th September, 2020",
            category:"notice"
        },
        {
            image: newOne,
            title:"1st cohort  pF RCA participates in the NE",
            content:"At the first time RCA participates in the NE, it scores the highest nationwide",
            date:"Sunday 24th September, 2020",
            category:"notice"
        },
    ]
    const [news, setNews] = useState(dummyNews)
    useEffect(()=>{
       const fetchNews = async ()=>{
            const res = await axios.get(`${url}/news/all`)
            console.log(res.data)
            setNews(res.data.length ? res.data : dummyNews)
            return res.data
        }
        fetchNews()
    },[])
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
    
    const [newsPaper, setNewsPaper] = useState(newsArray[0])

    return (
        <div className="flex flex-col w-full md:flex-row">
            <div className="w-full md:w-3/5 pl-4">

                <h5 className="font-bold mb-4 ml-4">News Papers &gt; <Link href={"/"} className="text-[#523873]">In the news</Link></h5>
                <Newspaper title={newsPaper.title} content={newsPaper.content} date={newsPaper.date} appreciations={"298"} feedbackMessages={"290"} buttonText={"Write to us about our News"} />
            </div>
            <div className="flex flex-col h-full md:w-2/5 gap-4">
                <h4 className="text-[#523873] font-extrabold">Trending News</h4>

                <div className="w-full overflow-y-auto">
                    {newsArray
                    .filter(news=>{
                        return news.category == "news"
                    })
                    .map(((news,index)=>{
                        return(
                            <News key={index} image={news.image} date={news.date} title={news.title} content={news.content} setNewsPaper={setNewsPaper}/>
                        )
                    }))}

                </div>
            </div>
        </div>
    )
}
export default About