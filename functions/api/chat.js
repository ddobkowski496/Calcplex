// Cloudflare Pages Function: free AI chat via Workers AI (no API key needed)
export async function onRequestPost({ request, env }) {
  try {
    const { messages } = await request.json();
    if (!Array.isArray(messages) || !messages.length) {
      return Response.json({ reply: "Say something first." }, { status: 400 });
    }
    const clean = messages
      .slice(-12)
      .map(m => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: String(m.content || "").slice(0, 2000),
      }));
    const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
      messages: [
        { role: "system", content: "You are a friendly, concise assistant for math, science, writing and general questions." },
        ...clean,
      ],
    });
    return Response.json({ reply: result.response || "No answer, try again." });
  } catch (e) {
    return Response.json({ reply: "The assistant is busy right now. Try again in a bit." }, { status: 500 });
  }
}
