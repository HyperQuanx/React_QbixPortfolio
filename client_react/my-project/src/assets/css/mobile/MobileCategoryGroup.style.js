import styled from "styled-components";

export const MbSecCateG = styled.ul`
  font-family: "Hi Melody", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.25rem;
  color: #ffffff;
`;

export const MbSecCateGItem = styled.li`
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
  font-size: 1.563rem;
  text-align: center;
  position: relative;
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
    top: 13vh;
  }
  &:nth-child(3) {
    top: 14vh;
  }
  &:nth-child(4) {
    top: 15vh;
  }
  &:nth-child(5) {
    top: 16vh;
  }
  &:nth-child(6) {
    top: 17vh;
  }

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
