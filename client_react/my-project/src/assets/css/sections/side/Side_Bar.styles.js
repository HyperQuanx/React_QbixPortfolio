import styled, { keyframes } from "styled-components";

const spinRecord = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Side_Bar_Container = styled.aside`
  position: absolute;
  left: calc(100% + 44px);
  top: 12vh;
  width: 260px;
  box-sizing: border-box;
  padding: 13px 6px 9px;
  border: 2px solid #626868;
  border-radius: 5px;
  box-shadow: inset 0 0 0 2px #d1d3d2, 0 0 0 1px #424a4c;
  background: linear-gradient(125deg, #ffffff, #fafafa);
  color: #555754;
  font-family: var(--portfolio-font);
  z-index: 100;
`;

export const QuickLinks = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 18px;
  row-gap: 14px;
  padding: 0 10px 17px;
  margin-bottom: 14px;
  border-bottom: 1px dashed #c9cbc9;

  a {
    color: #393b38;
    font-weight: 700;
    font-size: 19px;
    line-height: 1.3;
  }
`;

export const PlayerPanel = styled.div`
  padding: 5px;
  border: 2px solid #c4c6c3;
  border-radius: 3px;
  background: linear-gradient(135deg, #eeeeec, #f5f5f4);
`;

export const TrackDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 6px;
  border: 2px solid #b8bab7;
  border-radius: 2px;
  background: linear-gradient(#fafafa, #eeeeec);
  font-size: 13px;
  line-height: 20px;
  min-width: 0;

  span:last-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`;

export const DiscIcon = styled.span`
  animation: ${spinRecord} 4s linear infinite;
  animation-play-state: ${(props) => props.$playing ? "running" : "paused"};
  @media (prefers-reduced-motion: reduce) { animation: none; }
  flex: 0 0 13px;
  width: 13px;
  height: 13px;
  border: 2px solid #59655e;
  clip-path: polygon(25% 0, 75% 0, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0 75%, 0 25%);
  background: radial-gradient(circle, #ef7010 0 1px, #fff 1px 3px, #b7ccc5 3px 5px, #f4f8f5 5px);
`;

export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 6px 0 1px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 19px;
    height: 24px;
    color: #626460;
    font-size: 14px;
  }
  button.play { color: #f26900; }
  button:disabled { opacity: 0.4; cursor: default; }
  button:focus-visible { outline: 2px solid #f26900; outline-offset: 2px; }
`;

export const VolumeSlider = styled.input`
  appearance: none;
  min-width: 0;
  width: 100%;
  height: 5px;
  border-radius: 2px;
  background: linear-gradient(to right, #ef6500 0%, #ef6500 ${(props) => props.$volume}%, #c5c7c4 ${(props) => props.$volume}%, #c5c7c4 100%);

  &::-webkit-slider-thumb {
    appearance: none;
    width: 13px;
    height: 10px;
    border: 2px solid #878a85;
    border-radius: 2px;
    background: #fafafa;
  }
  &::-moz-range-thumb {
    width: 9px;
    height: 6px;
    border: 2px solid #878a85;
    border-radius: 2px;
    background: #fafafa;
  }
`;

export const PlayerMessage = styled.p`
  margin: 8px 3px 0;
  font-size: 12px;
  line-height: 1.5;
  word-break: keep-all;
`;

export const FontSwitch = styled.fieldset`
  display: flex;
  min-width: 0;
  margin: 0 0 7px;
  padding: 2px;
  border: 1px solid #b8bab7;
  border-radius: 3px;
  background: #e5e6e3;

  label { position: relative; flex: 1; min-width: 0; cursor: pointer; }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 28px;
    font-size: 10px;
    line-height: 1.3;
    white-space: nowrap;
    border-radius: 2px;
    color: #555754;
  }
  input:checked + span {
    background: #fff;
    color: #b94e00;
    box-shadow: 0 1px 3px #0002;
    font-weight: 700;
  }
  input:focus-visible + span { outline: 2px solid #ef6500; outline-offset: -2px; }
`;
