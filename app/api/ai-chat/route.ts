import { NextResponse } from "next/server";

export async function POST(req: Request) {
   const body = await req.json();

   const response = await fetch(
      "https://sgkucjwmpwqewpdgjocq.supabase.co/functions/v1/ai-chat",
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.AI_CHAT_API_KEY}`,
         },
         body: JSON.stringify(body),
      },
   );

   const data = await response.json();
   return NextResponse.json(data);
}
