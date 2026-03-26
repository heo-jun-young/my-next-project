export async function POST(request) {
  const SHEET_URL = process.env.GOOGLE_SHEET_URL;

  if (!SHEET_URL) {
    console.error("GOOGLE_SHEET_URL 환경변수가 설정되지 않았습니다.");
    return Response.json({ result: "error", message: "서버 설정 오류 (GOOGLE_SHEET_URL 없음)" }, { status: 500 });
  }

  try {
    const data = await request.json();

    // services 배열을 문자열로 변환
    const payload = {
      ...data,
      services: Array.isArray(data.services) ? data.services.join(", ") : (data.services || ""),
    };

    console.log("받은 데이터:", JSON.stringify(payload));

    // HTML form POST 방식으로 전송 (구글 앱스 스크립트가 e.parameter로 읽을 수 있게)
    const formBody = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      formBody.append(key, String(value ?? ""));
    });

    await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.toString(),
      redirect: "follow",
    });

    return Response.json({ result: "success" });
  } catch (error) {
    console.error("Google Sheet error:", error);
    return Response.json({ result: "error", message: error.message }, { status: 500 });
  }
}
