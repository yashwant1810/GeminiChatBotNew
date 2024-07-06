import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./mario.css";

const Mario = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "system", text: "Welcome to the chat!" },
  ]);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const initializeChat = async () => {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const chatInstance = model.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });
      setChat(chatInstance);
    };

    initializeChat();
  }, []);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { role: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (chat) {
      try {
        const result = await chat.sendMessage(input);
        const response = await result.response;
        const text = await response.text();
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "model", text },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "system", text: "Error sending message" },
        ]);
      }
    }

    setInput("");
  };

  return (
    <div className="MarioContainer">
      <div className="ChatBox">
        <div className="ChatHeader">
          <h1>Chat</h1>
        </div>
        <div className="ChatContent">
          {messages.map((msg, index) => (
            <div key={index} className={`Message ${msg.role}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="ChatInput">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button className="SendButton" onClick={handleSendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mario;