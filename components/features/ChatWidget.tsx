"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      ) : (
        <div className="bg-card w-80 rounded-lg shadow-xl">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-96 p-4 overflow-y-auto">
            <div className="space-y-4">
              <Message
                text="Hello! How can I help you today?"
                isBot={true}
              />
            </div>
          </div>
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (message.trim()) {
                  setMessage("");
                }
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-md bg-muted"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground p-2 rounded-md hover:opacity-90 transition-opacity"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function Message({ text, isBot }: { text: string; isBot: boolean }) {
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isBot
            ? "bg-muted text-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        {text}
      </div>
    </div>
  );
}