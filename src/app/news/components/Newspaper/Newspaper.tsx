
interface Props{
    title: String, 
    date: String,
    appreciations: String,
    feedbackMessages: String,
    content: String,
    buttonText: String
}
const Newspaper = ({title, date, appreciations, feedbackMessages, content, buttonText}: Props)=>{
    return(
        <div className="w-full h-full flex flex-col items-start gap-2">
            <div className="w-4/5  h-[368px] bg-[#f8f8f8]">
            </div>

            <h4 className="text-2xl font-bold">{title}</h4>
            <h5 className="text-[#523873]">{date}</h5>
            <div className="flex items-center">
                <h5>{appreciations} Appreciations</h5>
                <h5>{feedbackMessages} Feedback Messages</h5>
            </div>

            <p className="w-4/5 leading-[3rem] py-2 text-[#434343d4]">{content}</p>

            <button type="button" className="bg-[#523873] p-3 px-4 text-white rounded-lg">{buttonText}</button>
        </div>
    )
}

export default Newspaper