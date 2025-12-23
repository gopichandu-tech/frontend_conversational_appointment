"use client";

import { useState } from "react";

type Props = {
  onSend: (message: string) => void;
};

export default function InputBox({ onSend }: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <div className="flex gap-2 p-2 border-t flex-col">
      <input
        className="flex-1 border rounded px-3 py-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 rounded py-[8px] cursor-pointer"
      >
        Send
      </button>
    </div>
  );
}
