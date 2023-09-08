import Footer from "@/src/components/Footer/Footer"
import Hero from "@/src/components/Hero/Hero"
import Sidemenu from "@/src/components/Sidemenu/Sidemenu"
import Navbar from "@/src/components/Navbar/Navbar"

export default function AboutUsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Navbar/>
        <Hero pageTitle={"Campus Life at RCA"} heroContent={"Rwanda Coding Academy Campus is situated in the western part of the country, in Nyabihu, a perfect atmosphere for learning. The academy has a vast campus and an environment comprising talented students from all parts of the country, together creating an enjoyable and diverse experience for learning."}/>
        <div className="dynamic-content-container p-12 flex relative">
            <Sidemenu parent={"campus_life"} tabs={["Academic Year", "Accomodation", "Student Activities", "School Clubs", "Sports and Leisure", "Gallery and Videos"]}/>
            {children}
        </div>
        
        <Footer/>
      </>
    )
  }