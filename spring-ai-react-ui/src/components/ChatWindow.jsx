import ChatMessage from "./ChatMessage";

function ChatWindow({ messages }) {

    return (
        <div className="chat-window">

            {messages.map((message) => (
                <ChatMessage
                    key={message.id}
                    message={message}
                />
            ))}

        </div>
    );
}

export default ChatWindow;
