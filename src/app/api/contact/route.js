export async function POST(request) {
  const SHEET_URL = process.env.GOOGLE_SHEET_URL;

  if (!SHEET_URL) {
    console.error("GOOGLE_SHEET_URL 환경변수가 설정되지 않았습니다.");
    return Response.json({ result: "error", message: "서버 설정 오류 (GOOGLE_SHEET_URL 없음)" }, { status: 500 });
  }

  try {
    const data = await request.json();

    const payload = {
      ...data,
      services: Array.isArray(data.services) ? data.services.join(", ") : (data.services || ""),
    };

    await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    return Response.json({ result: "success" });
  } catch (error) {
    console.error("Google Sheet error:", error);
    return Response.json({ result: "error", message: error.message }, { status: 500 });
  }
}
