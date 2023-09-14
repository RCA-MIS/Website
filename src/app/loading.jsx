import Image from 'next/image'

const Loader = () => {
    return (
        <div className="bg-white flex items-center justify-center w-full h-screen">
            <div className="h-[30%] w-[30%] relative animate-bounce bg-purpleColor">
                <img className="w-[100%] h-[100%]" src={"/images/logo.png"} alt="loader" fill />
            </div>
            
        </div>
    )
}
export default Loader;