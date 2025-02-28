import React from "react";
import { ViewCountGroup } from "../../assets/css/common/Common.styles";

const ViewCountArea = () => {
  return (
    <ViewCountGroup>
      <p>
        Today <span className="red todayViewCount">26</span>
      </p>
      <p>|</p>
      <p>
        TOTAL <span className="totalViewCount">4623</span>
      </p>
    </ViewCountGroup>
  );
};

export default ViewCountArea;
