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
        <Hero pageTitle={"Alumni Association"} heroContent={"Rwanda Coding Academy, a school in Nyabihu, western province of Rwanda, equips students with the skills to create highly functioning software programs of different varieties. Our aim is to create a generation of young people evolve with the ever-growing journey of evolutional tech and who are capable of contributing to that journey just as equally."}/>
        <div className="dynamic-content-container p-12 flex relative">
            <Sidemenu parent={"alumni"} tabs={["contributions", "Alumni Admissions", "Living Styles After College", "Galley and Videos"]}/>
            {children}
        </div>
        
        <Footer/>
      </>
    )
  }