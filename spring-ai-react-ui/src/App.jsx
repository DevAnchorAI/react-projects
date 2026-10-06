import { useState } from "react";

import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

import { sendMessage } from "./services/ChatService";

import "./App.css";

function App() {

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "assistant",
            text: "Hello! I'm your Banking AI Assistant. How can I help you today?"
        }
    ]);

    const [loading, setLoading] = useState(false);

    const [conversationId] = useState(
        () => `user-${Date.now()}`
    );

    const handleSendMessage = async (question) => {

        const userMessage = {
            id: Date.now(),
            sender: "user",
            text: question
        };

        setMessages((previousMessages) => [
            ...previousMessages,
            userMessage
        ]);

        setLoading(true);

        try {

            const response = await sendMessage(
                conversationId,
                question
            );

            const assistantMessage = {
                id: Date.now() + 1,
                sender: "assistant",
                text: response.message ||
                      "I couldn't find an answer."
            };

            setMessages((previousMessages) => [
                ...previousMessages,
                assistantMessage
            ]);

        } catch (error) {

            console.error(error);

            const errorMessage = {
                id: Date.now() + 1,
                sender: "assistant",
                text: "Sorry, I couldn't connect to the Banking AI service."
            };

            setMessages((previousMessages) => [
                ...previousMessages,
                errorMessage
            ]);

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="app">

            <Header />

            <main className="chat-container">

                <ChatWindow
                    messages={messages}
                />

                <ChatInput
                    onSend={handleSendMessage}
                    loading={loading}
                />

            </main>

        </div>
    );
}

export default App;
