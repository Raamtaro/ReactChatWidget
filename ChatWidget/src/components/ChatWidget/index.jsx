import { styles } from "./styles";
import { BsFillChatFill } from "react-icons/bs";
import {useState, useEffect, useRef} from "react";
import ModalWindow from "./ModalWindow";

function ChatWidget() {
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);
    const widgetRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
          if (widgetRef.current && !widgetRef.current.contains(event.target)) {
            setVisible(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [widgetRef]);
    
    return (
        <div ref={widgetRef}>
        {/* Chat Button Component */}
        <ModalWindow visible={visible}/>
        <div
        onClick={() => setVisible(!visible)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={()=> setHovered(false)}
          style={{
            ...styles.chatWidget,
            ...{border: hovered ? "1px solid black" : ""},
            ...{backgroundColor: hovered ? "#68c66b" : styles.chatWidget.backgroundColor}
            
          }}
        >
          {/* Inner Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BsFillChatFill size={20} color="white" />
            {/* Button Text */}
            <span style={styles.chatWidgetText}>Improvize Chat</span>
          </div>
        </div>
      </div>      

    );
}

export default ChatWidget;