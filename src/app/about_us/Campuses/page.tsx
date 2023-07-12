import Hero from "@/components/Hero/Hero"
import Sidemenu from "@/components/Sidemenu/Sidemenu"
import Footer from "@/components/Footer/Footer"
const About = ()=>{

    return(
        <div className="w-full px-9">
            <h5 className="font-extrabold mb-9">About   &gt;   <span className="text-[#523873]">Campuses and Facilities</span></h5>

            <p className="leading-[2rem]">Rwanda Coding Academy Campus is found in Nyabihu district, Western province. The $4.6 billion structure that hosts the coding academy and the Nyabihu Technical Secondary School (TSS) was deliberately built away from the country's capital, Kigali, to provide a quite and secluded environment that is facilitates learning.</p>
            <p className="leading-[2rem] my-9">The campus comprises of classrooms specifically equipped for holding the resources that are used by the students and the instructors for learning purposes.</p>

            <button className="bg-[#523873] px-12 py-3 mb-9 rounded-lg text-white">Visit Program Page</button>

            <div className="w-full flex">
                <div className="w-3/5 flex flex-col justify-between">
                    <p className="leading-[2rem]">The campus houses separate dormitories, one for girls and one for boys. Instructors and the administrative staff also have a designated residence inside the campus too. The campus also contains the refectory and the kitchen where meals for both the faculty and the students are prepared.</p>
                    <p className="leading-[2rem]">The campus also accommodates several playgrounds including the football , basketball and volleyball fields plus a table tennis area.</p>
                </div>

                <div className="w-2/5 h-[45vh] bg-[#f8f8f8]">

                </div>
            </div>

            <div className="w-full bg-[#f8f8f8] h-[45vh] my-5">

            </div>


            <p className="leading-[2rem]">These facilities have a huge part in the welfare of the school community in terms of relaxation, extra-curricular activities and the everyday well being of the students and the faculty.</p>


        </div>
    )
}
export default About