function ChatMessage({ message }) {

    return (
        <div className={`message-row ${message.sender}`}>

            <div className="message-avatar">
                {message.sender === "user" ? "👤" : "🤖"}
            </div>

            <div className="message-content">

                <div className="message-sender">
                    {message.sender === "user"
                        ? "You"
                        : "Banking AI"}
                </div>

                <div className="message-bubble">
                    {message.text}
                </div>

            </div>

        </div>
    );
}

export default ChatMessage;
