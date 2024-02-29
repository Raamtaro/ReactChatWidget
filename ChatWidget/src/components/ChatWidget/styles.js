import { colors } from "./config";

export const styles = {
        chatWidget: {
        // Position
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: colors.primary,
        // Padding
        paddingLeft: "18px",
        paddingRight: "18px",
        paddingTop: "7px",
        paddingBottom: "7px",
        // Border
        borderRadius: "10px",
        cursor: "pointer",
    },

    chatWidgetText: {
        fontFamily: "Arial, sans-serif",
        color: "white",
        fontSize: "15px",
        marginLeft: "5px",
    },

    modalWindow: {
        // Position
        position: "fixed",
        bottom: "70px",
        right: "20px",
        // Size
        width: "450px",
        // width: "420px",
        height: "65vh",
        maxWidth: "calc(100% - 48px)",
        maxHeight: "calc(100% - 48px)",
        backgroundColor: "white",
        // Border
        borderRadius: "12px",
        border: `2px solid ${colors.primary}`,
        overflow: "hidden",
        // Shadow
        boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",

        //display
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'

    },
    chatArea: {
        // ... existing chatArea styles ...
        padding: '10px',
        display: 'flex',
        flexDirection: 'column', // Changed from 'column-reverse' to 'column'
        overflowY: 'scroll', // Added to enable scrolling
        height: 'calc(65vh - 60px)', // Adjusted to account for the input area
    },

    sentMessage: {
        alignSelf: 'flex-end',
        backgroundColor: colors.sentMessageBackground, // You'll define this color in your config
        color: 'white',
        padding: '8px 12px',
        borderRadius: '12px',
        margin: '4px 0',
        
        marginBottom: '10px', // Added space between messages
        maxWidth: 'calc(100% - 20px)', // Ensure padding inside the chat area
        wordWrap: 'break-word', // Ensure long words do not break the layout
        fontSize: '0.9rem', // Adjust font size as needed
        padding: '10px', // Adjust padding as needed
    },

    receivedMessage: {
        alignSelf: 'flex-start',
        backgroundColor: colors.receivedMessageBackground, // You'll define this color in your config
        color: 'white',
        padding: '8px 12px',
        borderRadius: '12px',
        margin: '4px 0',
        maxWidth: '75%',

        marginBottom: '10px', // Added space between messages
        maxWidth: 'calc(100% - 20px)', // Ensure padding inside the chat area
        wordWrap: 'break-word', // Ensure long words do not break the layout
        fontSize: '0.9rem', // Adjust font size as needed
        padding: '10px', // Adjust padding as needed
    },

    spinnerColor: "#00BFFF", // Example spinner color

    loadingIndicator: {
        // ... existing loadingIndicator styles ...
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Vertically center the spinner
        height: '100px', // Give enough space for the spinner
    },

    inputArea: {
    // Style for the input area at the bottom
        borderTop: `1px solid ${colors.primary}`,
        padding: '10px',
        display: 'flex',
        alignItems: 'flex-end',

    },

    messageInput: {
        // Updated style for the message <textarea>
        flex: 1,
        marginRight: '10px',
        borderRadius: '4px',
        border: `1px solid ${colors.border}`,
        padding: '10px',
        fontSize: '16px',
        resize: 'none', // Prevents the user from resizing the textarea
        overflow: 'auto', // Adds a scrollbar when text overflows
        height: '50px', // Set a fixed height
        boxSizing: 'border-box', // Include padding in the height calculation
    },

    sendButton: {
        // Style for the send button
        backgroundColor: colors.primary,
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
    },

}