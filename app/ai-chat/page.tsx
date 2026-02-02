"use client";

import React, { useState } from "react";
import UserMessage from "@/components/chat/UserMessage";
import Link from "next/link";

type Message = {
   id: string;
   role: "user" | "ai";
   content: string;
};

const AIChatPage = () => {
   const [messages, setMessages] = useState<Message[]>([]);
   const [input, setInput] = useState("");
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim() || loading) return;

      const userMsg: Message = {
         id: crypto.randomUUID(),
         role: "user",
         content: input,
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setLoading(true);

      try {
         const res = await fetch("/api/ai-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               message: input,
               mood_rating: 3,
            }),
         });

         const data = await res.json();

         const aiMsg: Message = {
            id: crypto.randomUUID(),
            role: "ai",
            content: data.response,
         };

         setMessages((prev) => [...prev, aiMsg]);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center px-4 py-10">
         <Link href="./">Home</Link>
         <header className="max-w-4xl w-full text-center mb-8">
            <h1 className="text-3xl font-semibold text-stone-900">
               Talk and Relax with AI
            </h1>
            <p className="mt-2 text-stone-600">
               A safe space to share your thoughts. You are heard 🌿
            </p>
         </header>

         <section className="w-full max-w-4xl flex flex-col flex-1 bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
               {messages.map((msg) =>
                  msg.role === "user" ? (
                     <UserMessage key={msg.id} message={msg.content} />
                  ) : (
                     <div
                        key={msg.id}
                        className="max-w-[75%] rounded-2xl px-4 py-3 bg-emerald-100 text-emerald-900"
                     >
                        {msg.content}
                     </div>
                  ),
               )}

               {loading && (
                  <div className="max-w-[75%] rounded-2xl px-4 py-3 bg-emerald-100 text-emerald-900 opacity-70">
                     AI is typing...
                  </div>
               )}
            </div>

            <form
               onSubmit={handleSubmit}
               className="border-t border-stone-200 p-4 flex gap-3"
            >
               <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Start your message"
                  className="w-full flex-1 rounded-full border border-stone-300 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
               />
               <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-emerald-600 text-white px-6 text-sm font-medium hover:bg-emerald-700 transition disabled:opacity-50"
               >
                  Send
               </button>
            </form>
         </section>
      </div>
   );
};

export default AIChatPage;
