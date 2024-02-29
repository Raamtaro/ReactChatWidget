// importing external style
import {useState, useEffect} from 'react';
import { styles } from "./../styles";
//for displaying the model view/Window
function ModalWindow(props) {
    // returning display
    const [responseData, setResponseData] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (userMessage) => {
        // Here you will handle sending the message to the backend API
        console.log(userMessage);
        const postData = {pin: '1945', user: "", query: userMessage, page: null}; 
        setMessage(''); // Clear the input after send
        console.log(postData)
        setLoading(true)
        try {
            const response = await fetch("https://app.improvize.com/ichat", {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                  "X-CSRFToken": "andy-WGVoMGfN"
                },
                body: JSON.stringify(postData),
            });
            const result = await response.json();
            console.log("Success:", result)
        } catch (error) {
            console.error('failed to fetch data:', error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <div
            style={{
                ...styles.modalWindow,
                ...{ opacity: props.visible ? "1" : "0"},
             
            }}
        >
            <div style={styles.chatArea}>
                {/* Chat messages will go here */}
            </div>
            <div style={styles.inputArea}>
                <textarea
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    style={styles.messageInput}
                />
                <button onClick={() => handleSubmit(message)} style={styles.sendButton}>
                    Submit
                </button>
            </div>
        </div>
    );
}
export default ModalWindow;