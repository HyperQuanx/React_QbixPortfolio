import styled from "styled-components";

export const MobileContainer = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const MobileHeader = styled.header`
  min-height: 32px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f1f1f1;
  color: black;
  position: relative;
  z-index: 200;
`;

export const MobileLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${(props) =>
    props.$isMenuOpen ? "rotateY(-180deg)" : "rotateY(0)"};
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

export const MenuIconFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;

  &.front {
    transform: rotateY(0deg);
  }

  &.back {
    transform: rotateY(-180deg);
  }
`;

export const MobileContentContainer = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  overflow: hidden;
  min-height: 0;
`;

export const MobileContent = styled.main`
  min-width: 103%;
  border: 2px solid #d4d4d4;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  min-height: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: contain;
  scroll-padding-top: 16px;
  padding: 1rem;
  padding-right: calc(3% + 1rem);
  box-sizing: border-box;
  font-family: var(--portfolio-font);
  font-weight: 400;
  font-style: normal;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom right, #ffffff, #f5f9ff);
  transition: transform 0.3s ease-in-out;
  @media (prefers-reduced-motion: reduce) { transition: none; }
  transform: ${(props) =>
    props.$isMenuOpen ? "translateX(-34%)" : "translateX(0)"};
  z-index: 100;
`;

export const MobileContentInner = styled.div`
  width: 100%;
`;

export const MobileAside = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 34%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  z-index: 50;
  transition: transform 0.3s ease-in-out;
  @media (prefers-reduced-motion: reduce) { transition: none; }
  transform: ${(props) =>
    props.$isMenuOpen ? "translateX(0)" : "translateX(100%)"};
  padding: 15px;
  overflow-y: auto;
`;
