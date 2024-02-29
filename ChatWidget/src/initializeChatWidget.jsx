import React from "react";
import ReactDOM from "react-dom";
import ChatWidget from "./components/ChatWidget";

export default function initializeChatWidget(containerID) {
    ReactDOM.render(
        <React.StrictMode>
            <ChatWidget />
        </React.StrictMode>,
        document.getElementById(containerID)
    );
}