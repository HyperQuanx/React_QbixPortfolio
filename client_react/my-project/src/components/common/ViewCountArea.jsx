import React, { useEffect, useState } from "react";
import { ViewCountGroup } from "../../assets/css/common/Common.styles";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

const ViewCountArea = () => {
  const [visitorCount, setVisitorCount] = useState({
    todayCount: 0,
    totalCount: 0,
  });

  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        const response = await api.post("/api/visitors/increment");
        fetchVisitorCount();
      } catch (error) {}
    };

    const fetchVisitorCount = async () => {
      try {
        const response = await api.get("/api/visitors/count");
        setVisitorCount(response.data);
      } catch (error) {}
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
