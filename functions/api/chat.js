export async function onRequestPost({ request, env }) {
  const { messages } = await request.json();
  const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      ...messages.slice(-12),
    ],
  });
  return Response.json({ reply: result.response });
}
