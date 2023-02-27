import React, { useState } from "react"
import { formatRelative } from "date-fns";
import { TypeMessages } from "@/utils/types/TypeMessage";

interface SendIconProps {
    className?: string;
  }  
interface FormProps {
    setMsgs: React.Dispatch<React.SetStateAction<TypeMessages>>;
}
  const SendIcon = (props: SendIconProps) =>{
   return (
    <svg stroke="currentColor" {...props} fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
   )
}

export default function Form ({setMsgs}: FormProps) {
const [message, setMessage] = useState<string>('');

const sendMessage = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    if(!message) return;

    setMsgs((prev) => [
            ...prev,
            {
                msg: message,
                type: "user",
                time: formatRelative(new Date(), new Date())
            }
        ])
}

    return (
        <div>
            <form 
            className="relative flex items-center"
            onSubmit={sendMessage} >
                {/* {message} */}
                <input 
                id="msg" 
                type="text" 
                className={`bg-[#e5e5e5] placeholder:text-[#a0a0a0] text-sm rounded-2xl p-4 w-full outline-none`}
                autoComplete="off"
                value={message} 
                onChange={(e)=>setMessage(e.target.value)} 
                placeholder="Tulis pesanmu disini... "/>

                <button type="submit" 
                className="absolute right-0 bg-[#e5e5e5] hover:opacity-50 active:opacity-100 transition-colors py-4 px-4 rounded-xl" >
                    <SendIcon className={`mr-1 w-5 h-5 fill-[#282828]`} />
                </button>
            </form>
        </div>
    )
}