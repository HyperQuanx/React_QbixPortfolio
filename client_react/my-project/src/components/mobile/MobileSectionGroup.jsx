import React, { useEffect } from "react";
import Swal from "sweetalert2";
import MobileSection01_Info from "./MobileSection01_Info";
import MobileSection02_Skills from "./MobileSection02_Skills";
import MobileSection03_Projects from "./MobileSection03_Projects";
import MobileSection04_Repository from "./MobileSection04_Repository";
import MobileSection05_Contact from "./MobileSection05_Contact";
import MobileSection06_Feedback from "./MobileSection06_Feedback";

const MobileSectionGroup = () => {
  useEffect(() => {
    Swal.fire({
      title: "현재 모바일 페이지 작업중입니다.",
      text: "현재 모바일 페이지 작업중입니다. 빠르게 완료하겠습니다.",
      icon: "info",
      confirmButtonText: "확인",
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", padding: "1.04vw" }}>
      <MobileSection01_Info />
      <MobileSection02_Skills />
      <MobileSection03_Projects />
      <MobileSection04_Repository />
      <MobileSection05_Contact />
      <MobileSection06_Feedback />
    </div>
  );
};

export default MobileSectionGroup;
