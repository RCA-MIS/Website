import Image from 'next/image'

const Loader = () => {
    return (
        <div className="bg-white flex items-center justify-center w-full h-screen">
            <div className="h-[40px] w-[40px] relative animate-bounce bg-gradient-to-b from-purpleColor to-white rounded-full">
                <img className="w-[100%] h-[100%]" src={"/images/logo.png"} alt="loader" fill />
            </div>
            
        </div>
    )
}
export default Loader;