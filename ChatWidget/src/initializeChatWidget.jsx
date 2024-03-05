import React from "react";
import ReactDOM from "react-dom";
import ChatWidget from "./components/ChatWidget";
import BrandContext from "./BrandContext";

export default function initializeChatWidget(containerID, brand) {
    ReactDOM.render(
        <React.StrictMode>
            <BrandContext.Provider value={brand}>
                <ChatWidget />
            </BrandContext.Provider>
        </React.StrictMode>,
        document.getElementById(containerID)
    );
}