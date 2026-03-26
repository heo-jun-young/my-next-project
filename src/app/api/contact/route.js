export async function POST(request) {
  try {
    const data = await request.json();

    const response = await fetch(process.env.GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.text();
    return Response.json({ result: "success" });
  } catch (error) {
    return Response.json({ result: "error", message: error.message }, { status: 500 });
  }
}
