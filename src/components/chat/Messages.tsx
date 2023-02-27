import { TypeMessages } from "@/utils/types/TypeMessage"
type MessageT = {
    msg: string,
    type: 'bot' | 'user',
    time: string,
}
interface Props {
    propmsgs: TypeMessages;
}
function Message({msg, type, time}: MessageT) {
    return (
    <div className={`flex item-center ${type === 'bot' ? 'justify-start' : 'justify-end'}`}>
        <div className={`flex flex-col item-start justify-center rounded-xl p-4 my-2 ${type === 'bot' ? 'bg-[#b5b5b5] rounded-tl-none' : 'bg-[#8aa1ff] rounded-br-none'}`}>
            <p>{msg}</p>
            <span className={`text-xs mt-2 ${type === 'bot' && 'text-[#949494]'}`}>{time}</span>
        </div>
    </div>
    )
}

export default function Messages({propmsgs} : Props) {
    return <div>
            {propmsgs.length ? propmsgs.map((msg, i)=> {
                return (<Message key={i} {...msg}/>)
             }) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-sm">Belum ada pesan apapun...</p>
              </div>  
             )
            }
        </div>
    
}