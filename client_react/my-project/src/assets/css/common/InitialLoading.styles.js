import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  to { opacity: 0; }
`;

const pixelPulse = keyframes`
  0%, 65%, 100% { opacity: 0.2; }
  15%, 50% { opacity: 1; }
`;

// Keep the existing layout boxes and pause their entrance animations underneath.
export const PortfolioContent = styled.div`
  display: contents;

  &[inert] *,
  &[inert] *::before,
  &[inert] *::after {
    animation-play-state: paused !important;
  }
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2147483647;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: #a3a3a3 url("/pattern.png") repeat;
  background-size: 150px;
  color: #34495e;
  font-family: var(--portfolio-font);
  animation: ${fadeOut} 0.3s ease 2.2s forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LoadingFrame = styled.div`
  width: 100%;
  max-width: 750px;
  box-sizing: border-box;
  flex-shrink: 0;
  margin: auto;
  padding: 15px;
  border: 1px solid #738186;
  border-radius: 9px;
  background: #b4d1da;

  @media (max-width: 760px) {
    padding: 11px;
    max-width: 520px;
  }
`;

export const LoadingStitch = styled.div`
  border: 2px dashed #ffffff;
  border-radius: 9px;
  padding: 15px;

  @media (max-width: 760px) {
    padding: 10px;
  }
`;

export const LoadingCard = styled.div`
  background: #ffffff;
  border: 2px solid #d4d4d4;
  border-radius: 9px;
  text-align: center;
  padding: 30px 16px 26px;

  @media (max-width: 760px) {
    padding: 28px 12px;
  }
`;

export const LoadingTitle = styled.h2`
  font-size: 24px;
  line-height: 1.4;
  font-weight: 700;
  color: #00a6d6;
  margin: 0 0 22px;
  letter-spacing: 2px;
`;

export const LoadingCopy = styled.p`
  font-size: 14px;
  line-height: 1.9;
  word-break: keep-all;
  overflow-wrap: anywhere;
  margin: 0;

  &.permission { margin-top: 13px; }
  span { display: block; }
`;

export const LoadingStatus = styled.p`
  font-size: 12px;
  line-height: 1.8;
  margin: 24px 0 12px;
  color: #477084;
  word-break: keep-all;
`;

export const LoadingPixels = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;

  i {
    width: 9px;
    height: 9px;
    background: #329fbd;
    opacity: 0.2;
    animation: ${pixelPulse} 1.4s steps(1, end) infinite;
  }

  i:nth-child(2) { animation-delay: 0.14s; }
  i:nth-child(3) { animation-delay: 0.28s; }
  i:nth-child(4) { animation-delay: 0.42s; }
  i:nth-child(5) { animation-delay: 0.56s; }
  i:nth-child(6) { animation-delay: 0.7s; }

  @media (prefers-reduced-motion: reduce) {
    i { animation: none; opacity: 1; }
  }
`;
