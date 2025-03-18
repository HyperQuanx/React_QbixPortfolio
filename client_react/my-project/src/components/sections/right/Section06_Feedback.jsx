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

const DEFAULT_IMAGE = "/public/cyHumanRBG.png";

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
      console.error("피드백 목록 조회 오류:", error);
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

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(DEFAULT_IMAGE);
    setIsDefaultImage(true);
    fileInputRef.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.feedbackName);
      formDataObj.append("password", formData.feedbackPassword);
      formDataObj.append("contents", formData.feedbackContent);
      if (selectedImage) {
        formDataObj.append("image", selectedImage);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/feedback`,
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        Swal.fire("성공", "피드백이 등록되었습니다.", "success");
        fetchFeedbacks();
        resetForm();
      } else {
        Swal.fire("오류", response.data.message, "error");
      }
    } catch (error) {
      Swal.fire("오류", "피드백 등록 중 오류가 발생했습니다.", "error");
      console.error("피드백 등록 오류:", error);
    } finally {
      setLoading(false);
    }
  };

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
  };

  // 날짜 포맷 함수
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("ko-KR", options);
  };

  // 이미지 경로 처리 함수 수정
  const getImageUrl = (imagePath) => {
    if (!imagePath) return DEFAULT_IMAGE;

    // 기본 이미지인 경우
    if (imagePath === "/public/cyHumanRBG.png") {
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
    console.error("이미지 로드 실패:", imagePath);
    e.target.src = DEFAULT_IMAGE;

    // 디버깅을 위해 이미지 URL 출력
    const img = new Image();
    img.onload = () => console.log("이미지 로드 성공 테스트:", imagePath);
    img.onerror = () => console.error("이미지 로드 실패 테스트:", imagePath);
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
                {/* 수정/삭제 기능은 추후 구현 */}
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

      {/* 팝업창 */}
      {isPopupOpen && (
        <FeedbackPopupOverlay>
          <FeedbackPopupContainer>
            <FeedbackPopupTitle>피드백 작성하기</FeedbackPopupTitle>
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

              {/* 이미지 업로드 영역 */}
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
                  {loading ? "등록 중..." : "등록"}
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
