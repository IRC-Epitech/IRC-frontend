import MessageSender from "./MessageSender.jsx";
import MessageReceiver from "./MessageReceiver.jsx";

const MessageBox =() => {
        return (

            <div className="w-full px-5 flex flex-col justify-between min-h-screen">
                <div className="flex flex-col mt-5">
                    <MessageSender/>
                    <MessageReceiver/>
                </div>
                <div className="py-5">
                    <input
                        className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                        type="text"
                        placeholder="type your message here..."
                    />
                </div>
            </div>
        );
    }
    export default MessageBox