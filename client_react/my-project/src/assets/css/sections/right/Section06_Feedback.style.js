import styled from "styled-components";

export const WriteButton = styled.button`
  padding: 6px 20px;
  font-family: "Nanum Brush Script", sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: "✏️";
    margin-right: 5px;
    font-size: 1rem;
  }
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.3vw;
`;

export const FeedbackItem = styled.div`
  min-height: 100px;
`;

export const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  border-top: 3px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  padding: 0.3vw 1.5vw;
  color: #434b51;

  .brushScript {
    font-family: "Nanum Brush Script", sans-serif;
    font-size: 1.5rem;
  }

  .feedbackName {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .feedbackRegDate {
    font-size: 0.9rem;
  }
`;

export const FeedbackHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FeedbackHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FeedbackContent = styled.div`
  padding: 1vw;
  display: flex;
`;

export const FeedbackContentImage = styled.div`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  padding: 1vw;
`;

export const FeedbackContentText = styled.div`
  flex: 1;
  padding: 10px;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
`;

// 팝업
export const FeedbackPopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
  transition: all 0.3s ease-in-out;
`;

export const FeedbackPopupContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 25px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(0);
  animation: slideIn 0.3s ease-out;
  border: 1px solid rgba(53, 157, 194, 0.2);

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FeedbackPopupTitle = styled.h3`
  margin-top: 0;
  color: #3b7ead;
  border-bottom: 2px solid #3b7ead;
  padding-bottom: 12px;
  font-family: "Nanum Brush Script", sans-serif;
  font-size: 1.8rem;
  position: relative;
  margin-bottom: 20px;

  &::after {
    content: "✏️";
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.5rem;
  }
`;

export const FeedbackFormGroup = styled.div`
  margin: 20px 0;
  position: relative;
`;

export const FeedbackLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1rem;
  color: #444;
  transition: color 0.2s;

  ${FeedbackFormGroup}:focus-within & {
    color: #359dc2;
  }
`;

export const FeedbackInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  cursor: text;
  transition: all 0.2s ease;
  background-color: #f9f9f9;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #359dc2;
    box-shadow: 0 0 0 3px rgba(53, 157, 194, 0.1);
    background-color: #fff;
  }

  &:hover {
    border-color: #bbb;
  }
`;

export const FeedbackTextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: none;
  cursor: text;
  transition: all 0.2s ease;
  background-color: #f9f9f9;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #359dc2;
    box-shadow: 0 0 0 3px rgba(53, 157, 194, 0.1);
    background-color: #fff;
  }

  &:hover {
    border-color: #bbb;
  }
`;

export const FeedbackCharCount = styled.div`
  text-align: right;
  font-size: 0.75rem;
  color: ${(props) => (props.isLimit ? "#e74c3c" : "#999")};
  margin-top: 6px;
  font-weight: ${(props) => (props.isLimit ? "bold" : "normal")};
  transition: all 0.2s ease;
`;

export const FeedbackButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 25px;
`;

export const FeedbackButton = styled.button`
  background-color: ${(props) => (props.primary ? "#359dc2" : "#f0f0f0")};
  color: ${(props) => (props.primary ? "white" : "#333")};
  border: 1px solid ${(props) => (props.primary ? "#359dc2" : "#ddd")};
  border-radius: 6px;
  padding: 8px 18px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${(props) => (props.primary ? "bold" : "normal")};

  &:hover {
    background-color: ${(props) => (props.primary ? "#359df0" : "#e0e0e0")};
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

// 이미지 업로드 관련 스타일 추가
export const FeedbackImageUploadGroup = styled.div`
  margin: 20px 0;
  position: relative;
`;

export const FeedbackImageUploadLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1rem;
  color: #444;
  transition: color 0.2s;
`;

export const FeedbackImagePreviewContainer = styled.div`
  width: 100%;
  min-height: 120px;
  border: 2px dashed #ddd;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  transition: all 0.2s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    border-color: #359dc2;
    background-color: rgba(53, 157, 194, 0.05);
  }
`;

export const FeedbackImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
`;

export const FeedbackImagePlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #999;

  svg {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    text-align: center;
  }
`;

export const FeedbackImageInput = styled.input`
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  z-index: -1;
`;

export const FeedbackImageButton = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const FeedbackImageRemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #e74c3c;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;
