import styled from "styled-components";

export const ContactContainer = styled.div`
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0 50px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ContactHeader = styled.div`
  margin-bottom: 20px;
  line-height: 1.6;
  color: #555;
  font-size: 1.25rem;
  padding: 15px;
  background-color: #eef5fa;
  border-radius: 6px;
  border-left: 4px solid #3b7ead;
  position: relative;
`;

export const ContactHighlightText = styled.span`
  color: #3b7ead;
  font-weight: bold;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContactFormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactLabel = styled.div`
  width: 80px;
  font-size: 1rem;
  font-weight: bold;
  color: #666;
`;

export const ContactInput = styled.input`
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  cursor: text;
  &:focus {
    outline: none;
    border-color: #3b7ead;
  }
`;

export const ContactTextArea = styled.textarea`
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
  resize: none;
  cursor: text;
  &:focus {
    outline: none;
    border-color: #3b7ead;
  }
`;

export const ContactButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

export const ContactButton = styled.button`
  background-color: ${(props) => (props.primary ? "#359dc2" : "#f0f0f0")};
  color: ${(props) => (props.primary ? "white" : "#333")};
  border: 1px solid ${(props) => (props.primary ? "#359dc2" : "#ddd")};
  border-radius: 4px;
  padding: 6px 15px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "#359df0" : "#e0e0e0")};
  }

  /* 폰트 변경 버튼으로 바꿀 부분 */
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif; */
  /* font-size:1rem; */

  /* 폰트 변경 버튼으로 바뀔 부분 */
  font-family: "Galmuri11", "Noto Sans KR", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
`;

export const ContactCharCount = styled.span`
  font-size: 0.875rem;
  color: ${(props) => (props.isLimit ? "#e74c3c" : "#999")};
`;
