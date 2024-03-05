import { useState } from 'react';
import { styles } from "./../styles";
import { BeatLoader } from 'react-spinners';

function ModalWindow(props) {
    // Chat history array
    const [chatHistory, setChatHistory] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (userMessage) => {
        // Add the user message to the chat history
        setChatHistory([...chatHistory, { type: 'sent', text: userMessage }]);
        setMessage(''); // Clear the input after send
        setLoading(true);

        try {
            const postData = {pin: '1945', user: "", query: userMessage, page: null};
            const response = await fetch("https://app.improvize.com/ichat", {
                method: "POST", 
                headers: {
                  "Content-Type": "application/json",
                  "X-CSRFToken": "REDACTED"
                },
                body: JSON.stringify(postData),
            });
            const result = await response.json();
            // Add the received message to the chat history
            setChatHistory(ch => [...ch, { type: 'received', text: result.answer }]);
        } catch (error) {
            console.error('failed to fetch data:', error);
            // Handle error state as well, maybe push a system message to chatHistory
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                ...styles.modalWindow,
                ...{ opacity: props.visible ? "1" : "0" },
            }}
        >
            <div style={styles.chatArea}>
                {chatHistory.map((chatMessage, index) => (
                        <div key={index} style={chatMessage.type === 'sent' ? styles.sentMessage : styles.receivedMessage}>
                            {chatMessage.type === 'received' ? (
                                <div dangerouslySetInnerHTML={{ __html: chatMessage.text }} />
                            ) : (
                                chatMessage.text
                            )}
                        </div>
                ))}
                {loading && (
                    <div style={styles.loadingIndicator}>
                        <BeatLoader
                            color={styles.spinnerColor} // Use a color from your styles or a string
                            size={15} // Size of the individual dots
                            margin={2} // Margin between the dots
                        />
                    </div>
                )}
            </div>
            <div style={styles.inputArea}>
                <textarea
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    style={styles.messageInput}
                    disabled={loading}
                />
                <button 
                    onClick={() => handleSubmit(message)} 
                    style={styles.sendButton}
                    disabled={loading}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default ModalWindow;