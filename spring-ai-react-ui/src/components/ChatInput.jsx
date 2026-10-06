import { useState } from "react";

function ChatInput({ onSend, loading }) {

    const [question, setQuestion] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!question.trim() || loading) {
            return;
        }

        onSend(question);

        setQuestion("");
    };

    return (
        <form
            className="chat-input-container"
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                placeholder="Ask your banking question..."
                value={question}
                onChange={(event) =>
                    setQuestion(event.target.value)
                }
                disabled={loading}
            />

            <button
                type="submit"
                disabled={loading || !question.trim()}
            >
                {loading ? "..." : "Send"}
            </button>

        </form>
    );
}

export default ChatInput;
