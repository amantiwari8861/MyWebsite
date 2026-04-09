import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Send } from "lucide-react";

const ChatAgent = () => {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // chatbot reply logic
  const getBotReply = (msg) => {

    msg = msg.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello 👋 How can I help you today?";
    }

    if (msg.includes("services")) {
      return "We provide IT Services, Staffing Solutions, Digital Marketing and Training Programs.";
    }

    if (msg.includes("training")) {
      return "We offer IT training, corporate training and skill development programs.";
    }

    if (msg.includes("contact")) {
      return "You can contact us through the Contact page or email us at info@company.com.";
    }

    if (msg.includes("job")) {
      return "You can check job openings in the Careers section.";
    }

    return "Sorry, I didn't understand that. Please ask something else.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { text: message, sender: "user" };

    const botMessage = {
      text: getBotReply(message),
      sender: "bot"
    };

    setChat([...chat, userMessage, botMessage]);
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Chat Window */}
      {open && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-xl flex flex-col">

          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between">
            <h3 className="font-semibold">AI Assistant Swatantra</h3>
            <X className="cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">

            {chat.map((msg, index) => (
              <div
                key={index}
                className={`px-3 py-2 rounded-lg text-sm max-w-[70%] ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}

          </div>

          {/* Input */}
          <div className="flex border-t">

            <input
              type="text"
              placeholder="Ask something..."
              className="flex-1 px-3 py-2 outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={sendMessage}
              className="px-4 text-blue-600"
            >
              <Send size={20}/>
            </button>

          </div>

        </div>
      )}

      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
        >
          <MessageCircle size={24}/>
        </button>
      )}

    </div>
  );
};

export default ChatAgent;