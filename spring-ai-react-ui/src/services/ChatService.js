const API_URL = "http://localhost:8080/api/chat";

export async function sendMessage(conversationId, question) {

    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            conversationId,
            question
        })
    });

    if (!response.ok) {
        throw new Error(
            `Backend request failed: ${response.status}`
        );
    }

    return response.json();
}