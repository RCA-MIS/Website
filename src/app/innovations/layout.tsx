"use client"
import Footer from "@/src/components/Footer/Footer"
import Hero from "@/src/components/Hero/Hero"
import Sidemenu from "@/src/components/Sidemenu/Sidemenu"
import Navbar from "@/src/components/Navbar/Navbar"
// import { PublicationProvider } from "./InnovationContext"
// import { useInnovationsData } from "./InnovationContext"


export default function PageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    // const innovations = useInnovationsData()
    return (
      <>
      {/* <PublicationProvider data={innovations}> */}
        <Navbar/>
        <Hero pageTitle={"RCA Innovation Hub"} heroContent={"Rwanda Coding Academy focuses on enlarging its students’ ways of thinking for them to think of the most effective ways to apply what they learn in the real world With this is mind, students are given freedom to explore and some up with ideas of their own and also provided with the tools necessary for that."}/>
        <div className="dynamic-content-container p-12 flex relative">
                <Sidemenu parent={"innovations"} tabs={["Research and Publications", "Startups", "Research In News", "Fundarisations"]}/>
                
                {children}
        </div>
          
        <Footer/>
       {/* </PublicationProvider> */}
      </>
    )
  }