"use client";

import React from "react";

interface UserMessageProps {
   message?: string;
}

const UserMessage = ({ message = "Hello!" }: UserMessageProps) => {
//    const [userMessage, setUserMessage] = React.useState("");

    return (
      <p className="ml-auto max-w-[75%] rounded-2xl px-4 py-3 bg-stone-200 text-stone-900">
         {message}
      </p>
   );
};

export default UserMessage;
