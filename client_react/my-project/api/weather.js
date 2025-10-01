// Vercel Serverless Function - 날씨 API 프록시
// SSL 인증서 문제를 우회하고 API 키를 보호합니다
export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { base_date, base_time, nx, ny } = req.query;

  const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${process.env.VITE_WEATHER_API_KEY}&numOfRows=60&pageNo=1&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

  try {
    const response = await fetch(url);
    const data = await response.text();

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(data);
  } catch (error) {
    console.error("날씨 API 호출 실패:", error);
    res.status(500).json({
      error: "날씨 정보를 가져오는데 실패했습니다",
      message: error.message,
    });
  }
}
