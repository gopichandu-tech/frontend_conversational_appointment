"use client";

import { useState } from "react";
import api from "@/lib/api";
import Message from "./Message";
import InputBox from "./InputBox";

type Msg = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Msg[]>([
    { sender: "bot", text: "👋 Hello Welcome To Clinico" },
  ]);

  const [sessionId, setSessionId] = useState<string | null>(null);

  const sendMessage = async (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);

    try {
      const res = await api.post("/chat", {
        message: text,
        session_id: sessionId,
      });

      setSessionId(res.data.session_id);

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: res.data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Sorry, something went wrong." },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-[550px] w-full max-w-md border rounded shadow bg-white">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <Message key={i} sender={m.sender} text={m.text} />
        ))}
      </div>
      <InputBox onSend={sendMessage} />
    </div>
  );
}
