import Hero from "@/components/Hero/Hero"
import Sidemenu from "@/components/Sidemenu/Sidemenu"
import Footer from "@/components/Footer/Footer"
const About = ()=>{

    return(
        <div className="w-full px-9">
            <h5 className="font-extrabold mb-9">About   &gt;   <span className="text-[#523873]">History</span></h5>

            <p className="leading-[2rem]">Rwanda has embraced technology and as a way of preparing the young generation for the futute, it has launched a coding academy. The school's motto "born to code" encourages young people interested in coding to pursue it as a career. </p>
            <p className="leading-[2rem] my-9">The Rwanda Coding Academy, opened on the 4th of February 2019 with a total of 60 students; 28 girls and 32 boys.</p>

            <button className="bg-[#523873] px-12 py-3 mb-9 rounded-lg text-white">Visit Program Page</button>

            <div className="w-full flex">
                <div className="w-3/5 flex flex-col justify-between">
                    <p className="leading-[2rem]">The Rwandan government and the Swiss Agency for Development and Cooperation (SDC) recently launched the Rwanda Coding Academy in partnership with the Ministry of ICT, Ministry of Education and Rwanda Polytechnic among other institutions.</p>
                    <p className="leading-[2rem]">The academy focuses on cyber security and software programming and embedded systems. </p>
                </div>

                <div className="w-2/5 h-[45vh] bg-[#f8f8f8]">

                </div>
            </div>

            <div className="w-full bg-[#f8f8f8] h-[45vh] my-5">

            </div>


            <p className="leading-[2rem]">Rwanda Coding Academy (RCA) is a special model school incepted by the Government of Rwanda. It is hybrid of both general education and TVET.</p>


        </div>
    )
}
export default About