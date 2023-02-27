
export interface Message {
    msg: string;
    type: 'bot' | 'user';
    time: string;
}