import styled from "styled-components";

export const SectionCategoryList = styled.ul`
  /* 폰트 변경 버튼으로 바꿀 부분 */
  /* font-family: "Hi Melody", sans-serif; */
  /* font-weight: 400; */
  /* font-style: normal; */
  /* font-size: 1.25rem; */

  /* 폰트 변경 버튼으로 바뀔 부분 */
  font-family: "Galmuri11", "Noto Sans KR", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;

  color: #ffffff;
`;

export const SectionCategoryItem = styled.li`
  border: 1px solid black;
  background: ${(props) =>
    props.active
      ? "linear-gradient(to bottom right, #ffffff, #f5f9ff)"
      : "#359dc2"};
  color: ${(props) => (props.active ? "#000000" : "#ffffff")};
  border-left: 1px solid white;
  width: 5.21vw;
  min-width: 100px;
  height: 3.24vh;
  min-height: 35px;

  /* 폰트 변경 버튼으로 바꿀 부분 */
  /* font-size: 1.563rem; */

  /* 폰트 변경 버튼으로 바뀔 부분 */
  font-size: 0.875rem;

  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 0;
  cursor: pointer;
  z-index: 100;

  &:nth-child(1) {
    top: 12vh;
  }
  &:nth-child(2) {
    top: 16.5vh;
  }
  &:nth-child(3) {
    top: 21vh;
  }
  &:nth-child(4) {
    top: 25.5vh;
  }
  &:nth-child(5) {
    top: 30vh;
  }
  &:nth-child(6) {
    top: 34.5vh;
  }

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export const SectionCategoryItemFocus = styled(SectionCategoryItem)`
  background-color: #ffffff;
  color: black;
  border-left: 2px solid white;
`;
