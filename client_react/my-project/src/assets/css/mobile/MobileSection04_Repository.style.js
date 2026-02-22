import styled from "styled-components";

export const MobileRepositorySection = styled.section`
  width: 100%;
`;

export const MobileRepositoryTable = styled.div`
  margin-top: 14px;
  margin-bottom: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #edf2f7;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

export const MobileRepositoryHeader = styled.div`
  display: flex;
  align-items: stretch;
  background-color: #f8fcff;
  border-bottom: 1px solid #e7f0f8;
  font-size: 0.9rem;
  font-weight: 700;
  color: #555;
`;

export const MobileRepositoryRow = styled.div`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #edf2f7;

  &:last-child {
    border-bottom: none;
  }
`;

export const MobileRepositoryCell = styled.div`
  flex: ${(props) => props.width || 1};
  min-width: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  color: #444;
  font-size: 0.88rem;
  line-height: 1.45;
  word-break: break-word;
`;

export const MobileRepositoryIndexCell = styled(MobileRepositoryCell)`
  flex: 0.45;
  justify-content: center;
  font-weight: 700;
`;

export const MobileRepositoryLink = styled.span`
  color: #3b7ead;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #2f76ac;
    text-decoration: underline;
  }
`;

