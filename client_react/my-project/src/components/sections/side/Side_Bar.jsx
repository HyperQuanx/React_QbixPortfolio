import React from "react";
import { Side_Bar_Container } from "../../../assets/css/sections/side/Side_Bar.styles";

// 여기에다 사이드 바 놓으면 되겄네
// 추가할거는 폰트 변경
// 노래를 넣을까 말까
// 일단 옆에 카테고리 있으니 리모컨은 필요없고
// Top 버튼은 필요할듯

const Side_Bar = () => {
  return (
    <Side_Bar_Container>
      <div>
        <span>친절</span>
        <span>bar</span>
        <span>icon</span>
        <span>0</span>
      </div>
      <div>
        <span>개발력</span>
        <span>bar</span>
        <span>icon</span>
        <span>0</span>
      </div>
      <div>
        <span>창의력</span>
        <span>bar</span>
        <span>icon</span>
        <span>0</span>
      </div>
      <div>
        <span>팀워크</span>
        <span>bar</span>
        <span>icon</span>
        <span>0</span>
      </div>

      <hr />

      <div>
        <span>폰트 변경</span>
      </div>
      <div>
        <span>위로 이동</span>
      </div>
    </Side_Bar_Container>
  );
};

export default Side_Bar;
