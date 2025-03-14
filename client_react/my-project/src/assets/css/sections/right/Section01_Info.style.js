import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const InfoMain = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Nanum Gothic", sans-serif;
  padding: 2rem;
  background: linear-gradient(to bottom right, #ffffff, #f5f9ff);
  border-radius: 12px;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const InfoMainDiv = styled.div`
  min-height: 60vh;
`;

export const InfoHi = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 12.7rem;
    height: 4px;
    background: linear-gradient(to right, #3498db, #2980b9);
    border-radius: 2px;
  }
`;

export const InfoContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #34495e;
  max-width: 800px;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HighlightSpan = styled.span`
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(52, 152, 219, 0.2) 50%
  );
  padding: 0 5px;
  font-weight: 600;
`;

export const CharacteristicSection = styled.section`
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.8s;
  opacity: 0;
`;

export const CharacteristicTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #3498db, #2ecc71);
  }

  code {
    font-family: "Consolas", monospace;
    color: #9cdcfe;
    background-color: #1f1f1f;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 0.9em;
  }

  span {
    color: #ce9178;
    font-weight: 700;
  }

  .whiteEqual {
    color: #ffffff;
  }

  .codeLet {
    color: #569cd6;
  }
`;

export const CharacteristicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const CharacteristicCard = styled.article`
  padding: 1.2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid ${(props) => props.color || "#3498db"};

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const CharacteristicHeader = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.8rem;

  code {
    font-family: "Consolas", monospace;
    color: #9cdcfe;
    background-color: #1f1f1f;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 0.9em;
  }

  span {
    color: #ce9178;
    font-weight: 700;
  }

  .whiteEqual {
    color: #ffffff;
  }
`;

export const CharacteristicDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #34495e;
`;
