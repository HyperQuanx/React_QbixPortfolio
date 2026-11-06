import styled from "styled-components";

export const MbSecCateG = styled.ul`
  font-family: var(--portfolio-font);
  font-weight: 400;
  font-style: normal;
  font-size: 1.25rem;
  color: #ffffff;
  width: min(100%, max(100px, calc(34vw - 30px)));
  flex-shrink: 0;
  align-self: flex-start;
  display: grid;
  gap: 1vh;
  padding-top: 12vh;
  margin: 0;
`;

export const MbSecCateGItem = styled.li`
  border: 1px solid black;
  background: ${(props) =>
    props.$active
      ? "linear-gradient(to bottom right, #ffffff, #f5f9ff)"
      : "#359dc2"};
  color: ${(props) => (props.$active ? "#000000" : "#ffffff")};
  border-left: 1px solid white;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  height: 3.24vh;
  min-height: 35px;
  font-size: 0.875rem;
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
  transition: background 0.2s ease, color 0.2s ease;

  > button {
    width: 100%;
    height: 100%;
    color: inherit;
    font: inherit;
    border-radius: inherit;
  }
  > button:focus-visible { outline: 2px solid #ef6500; outline-offset: 2px; }

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
