import React, { useEffect, useState } from "react";
import { ViewCountGroup } from "../../assets/css/common/Common.styles";
import axios from "axios";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_VISITOR_API_ENDPOINT,
  withCredentials: true,
});

const ViewCountArea = () => {
  const [visitorCount, setVisitorCount] = useState({
    todayCount: 0,
    totalCount: 0,
  });

  useEffect(() => {
    // 페이지 로드 시 조회수 증가 API 호출
    const incrementVisitorCount = async () => {
      try {
        console.log("방문자 수 증가 API 호출 시작");
        const response = await api.post("/api/visitors/increment");
        console.log("방문자 수 증가 API 응답:", response);
        fetchVisitorCount();
      } catch (error) {
        console.error("방문자 수 증가 실패:", error);
      }
    };

    // 방문자 수 조회 API 호출
    const fetchVisitorCount = async () => {
      try {
        console.log("방문자 수 조회 API 호출 시작");
        const response = await api.get("/api/visitors/count");
        console.log("방문자 수 조회 API 응답:", response);
        setVisitorCount(response.data);
      } catch (error) {
        console.error("방문자 수 조회 실패:", error);
      }
    };

    incrementVisitorCount();
  }, []);

  return (
    <ViewCountGroup>
      <p>
        Today{" "}
        <span className="red todayViewCount">{visitorCount.todayCount}</span>
      </p>
      <p>|</p>
      <p>
        TOTAL <span className="totalViewCount">{visitorCount.totalCount}</span>
      </p>
    </ViewCountGroup>
  );
};

export default ViewCountArea;
