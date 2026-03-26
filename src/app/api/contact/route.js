export async function POST(request) {
  try {
    const data = await request.json();

    const response = await fetch(
      process.env.GOOGLE_SHEET_URL,
      {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data),
        redirect: "follow",
      }
    );

    return Response.json({ result: "success" });
  } catch (error) {
    console.error("Google Sheet error:", error);
    return Response.json({ result: "error", message: error.message }, { status: 500 });
  }
}
