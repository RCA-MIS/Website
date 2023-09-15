import playButtonImg from "../../assets/playbutton.png"
import Image from "next/image"
interface Props{
    pageTitle: String,
    heroContent: String

}
const Hero = ({pageTitle, heroContent}: Props)=>{
    return(
        <div className="hero h-[60vh] flex-col md:flex-row w-full p-12 md:p-24 flex justify-between items-center bg-[#e3e2e2] relative  mt-[-9px] relative">
            <div className="left-content mb-3 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white md:pb-10">{pageTitle}</h1>
                <p 
                className="w-full mt-12 md:mt-0 md:w-1/2 leading-[2.5rem] text-white
                    ">{heroContent}</p>
            </div>

            <div className="w-24 h-16 rounded-full border border-8 bg-[#523873] border-[#a9b5bd] flex justify-center items-center self-start md:self-center">
                <Image src={playButtonImg} alt="" className="w-6 h-6"/>
            </div>
        </div>
    )
}

export default Hero