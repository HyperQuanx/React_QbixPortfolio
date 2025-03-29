import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FlexDirectionColumnReverse,
  FlexSpaceBetween,
  SectionTitle,
  SectionTitleUnderLine,
} from "../../../assets/css/common/Common.styles";
import {
  FeedbackContainer,
  FeedbackContent,
  FeedbackContentImage,
  FeedbackContentText,
  FeedbackHeader,
  FeedbackHeaderLeft,
  FeedbackHeaderRight,
  FeedbackItem,
  WriteButton,
  FeedbackPopupOverlay,
  FeedbackPopupContainer,
  FeedbackPopupTitle,
  FeedbackFormGroup,
  FeedbackLabel,
  FeedbackInput,
  FeedbackTextArea,
  FeedbackCharCount,
  FeedbackButtonGroup,
  FeedbackButton,
  FeedbackImageUploadGroup,
  FeedbackImageUploadLabel,
  FeedbackImagePreviewContainer,
  FeedbackImagePreview,
  FeedbackImagePlaceholder,
  FeedbackImageInput,
  FeedbackImageRemoveButton,
} from "../../../assets/css/sections/right/Section06_Feedback.style";

const DEFAULT_IMAGE = "/cyHumanRBG.png";

const Section06_Feedback = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    feedbackName: "",
    feedbackPassword: "",
    feedbackContent: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(DEFAULT_IMAGE);
  const [isDefaultImage, setIsDefaultImage] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [actionType, setActionType] = useState(""); // "edit" 또는 "delete"
  const [editMode, setEditMode] = useState(false); // 수정 모드 상태

  const feedbackMaxLengths = {
    feedbackName: 10,
    feedbackPassword: 20,
    feedbackContent: 1000,
  };

  // 피드백 목록 조회
  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/feedback`
      );
      if (response.data.success) {
        setFeedbacks(response.data.data);
      } else {
        setError(response.data.message);
        Swal.fire("오류", response.data.message, "error");
      }
    } catch (error) {
      setError("피드백 목록을 불러오는 중 오류가 발생했습니다.");
      Swal.fire(
        "오류",
        "피드백 목록을 불러오는 중 오류가 발생했습니다.",
        "error"
      );
      // console.error("피드백 목록 조회 오류:", error);
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 피드백 목록 조회
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value.length <= feedbackMaxLengths[name]) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB 제한
        Swal.fire("오류", "이미지 파일은 5MB 이하로 업로드해주세요.", "error");
        return;
      }
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsDefaultImage(false);
    }
  };

  const handleRemoveImage = (e) => {
    if (e) e.stopPropagation(); // 이벤트 버블링 방지 (이벤트가 있을 때만 실행)

    setSelectedImage(null);
    setPreviewUrl(DEFAULT_IMAGE);
    setIsDefaultImage(true);

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }

    // 수정 모드에서 명시적으로 기본 이미지 경로 설정
    if (editMode && selectedFeedback) {
      setSelectedFeedback({
        ...selectedFeedback,
        image: "/cyHumanRBG.png",
      });
    }
  };

  // 수정 또는 삭제 버튼 클릭 핸들러
  const handleActionClick = (feedback, action) => {
    setSelectedFeedback(feedback);
    setActionType(action);
    setPasswordModalOpen(true);
    setPasswordInput("");
  };

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  // 비밀번호 확인 핸들러 수정
  const handlePasswordSubmit = async () => {
    try {
      setLoading(true);

      if (actionType === "edit") {
        // 비번 검증
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}/api/feedback/${
              selectedFeedback.idx
            }/verify`,
            null,
            {
              params: { password: passwordInput },
            }
          );

          if (response.data.success) {
            // 비밀번호 일치 시 수정 모드 활성화
            setEditMode(true);
            setIsPopupOpen(true);
            setFormData({
              feedbackName: selectedFeedback.name,
              feedbackPassword: passwordInput,
              feedbackContent: selectedFeedback.contents,
            });
            if (selectedFeedback.image) {
              setPreviewUrl(getImageUrl(selectedFeedback.image));
              setIsDefaultImage(selectedFeedback.image === "/cyHumanRBG.png");
            } else {
              setPreviewUrl(DEFAULT_IMAGE);
              setIsDefaultImage(true);
            }
            setSelectedImage(null);
            setPasswordModalOpen(false);
          } else {
            Swal.fire(
              "오류",
              response.data.message || "비밀번호가 일치하지 않습니다.",
              "error"
            );
          }
        } catch (error) {
          console.error("비밀번호 확인 오류:", error);

          if (error.response && error.response.data) {
            Swal.fire(
              "오류",
              error.response.data.message || "비밀번호가 일치하지 않습니다.",
              "error"
            );
          } else {
            Swal.fire("오류", "비밀번호 확인 중 오류가 발생했습니다.", "error");
          }
        }
      } else if (actionType === "delete") {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_SERVER_URL}/api/feedback/${
              selectedFeedback.idx
            }`,
            {
              params: { password: passwordInput },
            }
          );

          if (response.data.success) {
            Swal.fire("성공", "피드백이 삭제되었습니다.", "success");
            fetchFeedbacks();
            setPasswordModalOpen(false);
          } else {
            Swal.fire(
              "오류",
              response.data.message || "비밀번호가 일치하지 않습니다.",
              "error"
            );
          }
        } catch (error) {
          console.error("피드백 삭제 오류:", error);

          if (error.response && error.response.data) {
            Swal.fire(
              "오류",
              error.response.data.message || "비밀번호가 일치하지 않습니다.",
              "error"
            );
          } else {
            Swal.fire("오류", "삭제 중 오류가 발생했습니다.", "error");
          }
        }
      }
    } catch (error) {
      console.error("비밀번호 확인 오류:", error);
      Swal.fire("오류", "처리 중 오류가 발생했습니다.", "error");
    } finally {
      setLoading(false);
    }
  };

  // 폼 제출 핸들러 수정 (등록 및 수정 기능 통합)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.feedbackName);
      formDataObj.append("password", formData.feedbackPassword);
      formDataObj.append("contents", formData.feedbackContent);

      // 이미지 처리 로직 개선
      if (selectedImage) {
        // 새 이미지 선택한 경우
        formDataObj.append("image", selectedImage);
        console.log("새 이미지 업로드:", selectedImage.name);
      } else if (isDefaultImage) {
        // 기본 이미지로 설정된 경우 (명시적으로 경로 전송)
        formDataObj.append("imagePath", "/cyHumanRBG.png");
        console.log("기본 이미지 경로 설정");
      }

      let response;
      if (editMode) {
        formDataObj.append("idx", selectedFeedback.idx);
        response = await axios.put(
          `${import.meta.env.VITE_SERVER_URL}/api/feedback/${
            selectedFeedback.idx
          }`,
          formDataObj,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/api/feedback`,
          formDataObj,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      if (response.data.success) {
        Swal.fire(
          "성공",
          editMode ? "피드백이 수정되었습니다." : "피드백이 등록되었습니다.",
          "success"
        );
        fetchFeedbacks();
        resetForm();
        setEditMode(false);
      } else {
        Swal.fire("오류", response.data.message, "error");
      }
    } catch (error) {
      console.error(
        editMode ? "피드백 수정 오류:" : "피드백 등록 오류:",
        error
      );
      Swal.fire(
        "오류",
        editMode
          ? "피드백 수정 중 오류가 발생했습니다."
          : "피드백 등록 중 오류가 발생했습니다.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // 폼 초기화 함수 수정
  const resetForm = () => {
    setFormData({
      feedbackName: "",
      feedbackPassword: "",
      feedbackContent: "",
    });
    setSelectedImage(null);
    setPreviewUrl(DEFAULT_IMAGE);
    setIsDefaultImage(true);
    setIsPopupOpen(false);
    setEditMode(false);
    setSelectedFeedback(null);
  };

  // 날짜 포맷 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return ` ${year}.${month}.${day} ${hours}:${minutes} `;
  };

  // 이미지 경로 처리 함수 수정
  const getImageUrl = (imagePath) => {
    if (!imagePath) return DEFAULT_IMAGE;

    // 기본 이미지인 경우
    if (imagePath === "/cyHumanRBG.png") {
      return DEFAULT_IMAGE;
    }

    // 이미 전체 URL인 경우
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // 상대 경로인 경우 서버 URL과 결합
    return `${import.meta.env.VITE_SERVER_URL}${imagePath}`;
  };

  // 이미지 로드 오류 처리 함수 추가
  const handleImageError = (e, imagePath) => {
    // console.error("이미지 로드 실패:", imagePath);
    e.target.src = DEFAULT_IMAGE;

    // 디버깅을 위해 이미지 URL 출력
    const img = new Image();
    // img.onload = () => console.log("이미지 로드 성공 테스트:", imagePath);
    // img.onerror = () => console.error("이미지 로드 실패 테스트:", imagePath);
    img.src = getImageUrl(imagePath);
  };

  return (
    <section>
      <FlexSpaceBetween>
        <SectionTitle>Feedback</SectionTitle>
        <FlexDirectionColumnReverse>
          <WriteButton onClick={() => setIsPopupOpen(true)}>
            작성하기
          </WriteButton>
        </FlexDirectionColumnReverse>
      </FlexSpaceBetween>
      <SectionTitleUnderLine></SectionTitleUnderLine>
      <FeedbackContainer>
        {loading && <p>로딩 중...</p>}
        {error && <p>오류: {error}</p>}
        {!loading && !error && feedbacks.length === 0 && (
          <p>등록된 피드백이 없습니다.</p>
        )}

        {feedbacks.map((feedback) => (
          <FeedbackItem key={feedback.idx}>
            <FeedbackHeader>
              <FeedbackHeaderLeft>
                <span className="brushScript">NO.{feedback.idx}</span>
                <span className="feedbackName">{feedback.name}</span>
                <span>🏠</span>
                <span className="feedbackRegDate">
                  ({formatDate(feedback.regDate)})
                </span>
              </FeedbackHeaderLeft>
              <FeedbackHeaderRight>
                <button onClick={() => handleActionClick(feedback, "edit")}>
                  수정
                </button>
                |
                <button onClick={() => handleActionClick(feedback, "delete")}>
                  삭제
                </button>
              </FeedbackHeaderRight>
            </FeedbackHeader>
            <FeedbackContent>
              <FeedbackContentImage
                src={getImageUrl(feedback.image)}
                onError={(e) => handleImageError(e, feedback.image)}
                alt={`${feedback.name}의 이미지`}
              />
              <FeedbackContentText>{feedback.contents}</FeedbackContentText>
            </FeedbackContent>
          </FeedbackItem>
        ))}
      </FeedbackContainer>

      {/* 비번 확인 모달 */}
      {passwordModalOpen && (
        <FeedbackPopupOverlay>
          <FeedbackPopupContainer
            style={{ maxWidth: "400px", padding: "20px" }}
          >
            <FeedbackPopupTitle>
              {actionType === "edit" ? "피드백 수정" : "피드백 삭제"}
            </FeedbackPopupTitle>
            <p style={{ marginBottom: "20px" }}>
              {actionType === "edit"
                ? "피드백을 수정하려면 비밀번호를 입력해주세요."
                : "피드백을 삭제하려면 비밀번호를 입력해주세요."}
            </p>
            <FeedbackFormGroup>
              <FeedbackLabel htmlFor="verifyPassword">비밀번호</FeedbackLabel>
              <FeedbackInput
                type="password"
                id="verifyPassword"
                value={passwordInput}
                onChange={handlePasswordChange}
                autoFocus
              />
            </FeedbackFormGroup>
            <FeedbackButtonGroup>
              <FeedbackButton
                type="button"
                onClick={() => setPasswordModalOpen(false)}
              >
                취소
              </FeedbackButton>
              <FeedbackButton
                type="button"
                primary
                onClick={handlePasswordSubmit}
                disabled={loading}
              >
                {loading ? "확인 중..." : "확인"}
              </FeedbackButton>
            </FeedbackButtonGroup>
          </FeedbackPopupContainer>
        </FeedbackPopupOverlay>
      )}

      {/* 작성 및 수정 팝업창 */}
      {isPopupOpen && (
        <FeedbackPopupOverlay>
          <FeedbackPopupContainer>
            <FeedbackPopupTitle>
              {editMode ? "피드백 수정하기" : "피드백 작성하기"}
            </FeedbackPopupTitle>
            <form onSubmit={handleSubmit}>
              <FeedbackFormGroup>
                <FeedbackLabel htmlFor="feedbackName">이름</FeedbackLabel>
                <FeedbackInput
                  type="text"
                  id="feedbackName"
                  name="feedbackName"
                  value={formData.feedbackName}
                  onChange={handleChange}
                  required
                />
                <FeedbackCharCount
                  isLimit={
                    formData.feedbackName.length >
                    feedbackMaxLengths.feedbackName
                  }
                >
                  {formData.feedbackName.length}/
                  {feedbackMaxLengths.feedbackName}
                </FeedbackCharCount>
              </FeedbackFormGroup>

              <FeedbackFormGroup>
                <FeedbackLabel htmlFor="feedbackPassword">
                  비밀번호
                </FeedbackLabel>
                <FeedbackInput
                  type="password"
                  id="feedbackPassword"
                  name="feedbackPassword"
                  value={formData.feedbackPassword}
                  onChange={handleChange}
                  required
                  readOnly={editMode}
                />
                <FeedbackCharCount
                  isLimit={
                    formData.feedbackPassword.length >
                    feedbackMaxLengths.feedbackPassword
                  }
                >
                  {formData.feedbackPassword.length}/
                  {feedbackMaxLengths.feedbackPassword}
                </FeedbackCharCount>
              </FeedbackFormGroup>

              <FeedbackImageUploadGroup>
                <FeedbackImageUploadLabel>이미지</FeedbackImageUploadLabel>
                <FeedbackImagePreviewContainer
                  onClick={() => fileInputRef.current.click()}
                >
                  <FeedbackImagePreview src={previewUrl} alt="미리보기" />
                  {!isDefaultImage && (
                    <FeedbackImageRemoveButton
                      type="button"
                      onClick={handleRemoveImage}
                    >
                      ✕
                    </FeedbackImageRemoveButton>
                  )}
                </FeedbackImagePreviewContainer>
                <FeedbackImageInput
                  type="file"
                  id="feedbackImage"
                  name="feedbackImage"
                  accept="image/jpeg, image/png, image/gif"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                />
                <FeedbackCharCount>
                  {isDefaultImage ? "기본 이미지 사용 중" : "이미지 업로드됨"}
                </FeedbackCharCount>
              </FeedbackImageUploadGroup>

              <FeedbackFormGroup>
                <FeedbackLabel htmlFor="feedbackContent">내용</FeedbackLabel>
                <FeedbackTextArea
                  id="feedbackContent"
                  name="feedbackContent"
                  value={formData.feedbackContent}
                  onChange={handleChange}
                  required
                />
                <FeedbackCharCount
                  isLimit={
                    formData.feedbackContent.length >
                    feedbackMaxLengths.feedbackContent
                  }
                >
                  {formData.feedbackContent.length}/
                  {feedbackMaxLengths.feedbackContent}
                </FeedbackCharCount>
              </FeedbackFormGroup>

              <FeedbackButtonGroup>
                <FeedbackButton type="button" onClick={resetForm}>
                  취소
                </FeedbackButton>
                <FeedbackButton type="submit" primary disabled={loading}>
                  {loading
                    ? editMode
                      ? "수정 중..."
                      : "등록 중..."
                    : editMode
                    ? "수정"
                    : "등록"}
                </FeedbackButton>
              </FeedbackButtonGroup>
            </form>
          </FeedbackPopupContainer>
        </FeedbackPopupOverlay>
      )}
    </section>
  );
};

export default Section06_Feedback;
