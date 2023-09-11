// import Hero from "@/src/components/Hero/Hero"
import Sidemenu from "@/src/components/Sidemenu/Sidemenu"
import Footer from "@/src/components/Footer/Footer"
import studentsONe from "../../assets/newThree.png"
import manyStudents from "../../assets/manyStudents.png"
import Image from "next/image"
const About = ()=>{

    return (
        <div className="w-full px-9" style={{ backgroundImage: `url(${require('../../assets/background.png')})` }}>
            <h5 className="font-extrabold mb-9">About   &gt;   <span className="text-[#523873]">Campuses and Facilities</span></h5>

            <p className="leading-[2rem] pb-3">Rwanda Coding Academy boasts state-of-the-art campuses equipped with cutting-edge facilities tailored to nurture the next generation of tech leaders. Our campuses are designed to create an immersive learning environment, featuring modern classrooms, collaborative workspaces, well-equipped computer labs, and high-speed internet connectivity. Additionally, students have access to extensive libraries, recreational areas, and cafeterias for a well-rounded educational experience. Our commitment to excellence extends to our environmentally sustainable campuses, reflecting our dedication to responsible tech education. These top-tier facilities provide students with the resources and infrastructure necessary to excel in their coding journey and shape a brighter future in the tech industry.</p>

            <button className="bg-[#523873] px-12 py-3 mb-9 rounded-lg text-white">Visit Program Page</button>

            <div className="w-full flex-col flex md:flex-row">
                <div className="w-full md:w-3/5 flex flex-col justify-between">
                    <p className="leading-[2rem] w-full">Rwanda Coding Academy Campus is found in Nyabihu district, Western province. The $4.6 billion structure that hosts the coding academy and the Nyabihu Technical Secondary School (TSS) was deliberately built away from the country's capital, Kigali, to provide a quite and secluded environment that is facilitates learning.</p>
                    <p className="leading-[2rem]">The campus comprises of classrooms specifically equipped for holding the resources that are used by the students and the instructors for learning purposes.</p>
                </div>

                <div className="w-ful md:w-2/5 h-[40vh] bg-[#f8f8f8]">
                    <Image src={studentsONe} alt="students" className="w-full h-full" />
                </div>
            </div>

            <div className="w-full bg-[#f8f8f8] h-[38vh] my-5">
                <Image src={manyStudents} alt="students" className="w-full h-full" />
            </div>


            {/* <p className="leading-[2rem]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p> */}


        </div>
    )
}
export default About