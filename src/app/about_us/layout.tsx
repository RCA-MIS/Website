import Footer from "@/src/components/Footer/Footer"
import Hero from "@/src/components/Hero/Hero"
import Navbar from "@/src/components/Navbar/Navbar"
import Sidemenu from "@/src/components/Sidemenu/Sidemenu"

export default function AboutUsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    return (
      <>
        <Navbar/>
        <Hero pageTitle={"About Us"} heroContent={"Rwanda Coding Academy, a school in Nyabihu, western province of Rwanda, equips students with the skills to create highly functioning software programs of different varieties. Our aim is to create a generation of young people evolve with the ever-growing journey of evolutional tech and who are capable of contributing to that journey just as equally."}/>
        <div className="dynamic-content-container p-2 md:p-12 flex relative">
            <Sidemenu parent={"about_us"} tabs={["Campuses and Facilities", "StackHolders and Partners", "Organization", "Strategy", "Accreditation", "High Education Ranking", "Facts and Figures"]}/>
            {children}
        </div>
        
        <Footer/>
      </>
    )
  }