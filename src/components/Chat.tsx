import React, { useState } from "react"
// import { formatRelative } from "date-fns"

import Head from "./chat/Head"
import Messages from "./chat/Messages"
import {TypeMessages} from "@/utils/types/TypeMessage"
import Form from "./chat/Form"

export default function Chat() {
    const [messages, setMessages] = useState<TypeMessages>([
        // {
        //     msg: 'Hallo, Gimana Kabarmu?',
        //     type: 'user',
        //     time: formatRelative(new Date(), new Date()),
        // },
        // {
        //     msg: 'Kabar Baik Kok Hari ini !',
        //     type: 'bot',
        //     time: formatRelative(new Date(), new Date()),
        // },
        // {
        //     msg: 'Aku boleh Bertanya ?',
        //     type: 'user',
        //     time: formatRelative(new Date(), new Date()),
        // },
        // {
        //     msg: 'Silahkan dengan senang hati :D',
        //     type: 'bot',
        //     time: formatRelative(new Date(), new Date()),
        // },
    ]);
    return (
        <div className={`bg-[#dddddd] rounded-3xl p-8 absolute top-0 bottom-0 left-0 right-0`}>
                <Head />
                <div className="w-full h-[1px] my-8 bg-[#4f5361] " />
                <Messages propmsgs={messages}/>
                <div className="w-full h-[1px] my-8 bg-[#4f5361] " />
                <Form setMsgs={setMessages} />
        </div>
    )
}