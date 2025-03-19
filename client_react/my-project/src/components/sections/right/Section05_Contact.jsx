import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FlexSpaceBetween,
  SectionTitle,
  SectionTitleUnderLine,
} from "../../../assets/css/common/Common.styles";
import {
  ContactContainer,
  ContactHeader,
  ContactHighlightText,
  ContactForm,
  ContactFormGroup,
  ContactLabel,
  ContactInput,
  ContactTextArea,
  ContactButtonGroup,
  ContactButton,
  ContactCharCount,
} from "../../../assets/css/sections/right/Section05_Contact.style";

const Section05_Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const maxLengths = {
    name: 20,
    email: 50,
    subject: 50,
    message: 500,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    for (const field in formData) {
      if (formData[field].length > maxLengths[field]) {
        return {
          isValid: false,
          field: field,
          message: `${
            field === "name"
              ? "이름"
              : field === "email"
              ? "이메일"
              : field === "subject"
              ? "제목"
              : "내용"
          }은 최대 ${maxLengths[field]}자까지 입력 가능합니다.`,
        };
      }
    }
    return { isValid: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateForm();

    if (!validation.isValid) {
      Swal.fire({
        title: "입력 오류",
        text: validation.message,
        icon: "error",
        confirmButtonText: "확인",
        confirmButtonColor: "#3b7ead",
      });
      return;
    }

    try {
      Swal.fire({
        title: "메일 전송 중...",
        text: "잠시만 기다려주세요.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/email/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.text();

      Swal.close();

      if (response.ok) {
        Swal.fire({
          title: "메일 전송 완료",
          text: "메일이 성공적으로 전송되었습니다.",
          icon: "success",
          confirmButtonText: "확인",
          confirmButtonColor: "#3b7ead",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "메일 전송 실패",
          text: data,
          icon: "error",
          confirmButtonText: "확인",
          confirmButtonColor: "#3b7ead",
        });
      }
    } catch (error) {
      Swal.close();

      Swal.fire({
        title: "메일 전송 실패",
        text: "서버와 통신 중 오류가 발생했습니다.",
        icon: "error",
        confirmButtonText: "확인",
        confirmButtonColor: "#3b7ead",
      });
      console.error("메일 전송 오류:", error);
    }
  };

  return (
    <section>
      <SectionTitle>Contact</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>

      <ContactContainer>
        <ContactHeader>
          <ContactHighlightText>프론트엔드</ContactHighlightText> 또는{" "}
          <ContactHighlightText>백엔드</ContactHighlightText> 개발자로 성장하기
          위해 항상 도전하고 노력하고 있습니다.
          <br />
          언제든지 연락 부탁드립니다!
        </ContactHeader>

        <ContactForm onSubmit={handleSubmit}>
          <ContactFormGroup>
            <FlexSpaceBetween style={{ margin: "10px 0" }}>
              <ContactLabel>이름</ContactLabel>
              <ContactCharCount
                isLimit={formData.name.length > maxLengths.name}
              >
                {formData.name.length}/{maxLengths.name}
              </ContactCharCount>
            </FlexSpaceBetween>
            <ContactInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </ContactFormGroup>

          <ContactFormGroup>
            <FlexSpaceBetween style={{ margin: "10px 0" }}>
              <ContactLabel htmlFor="email">이메일</ContactLabel>
              <ContactCharCount
                isLimit={formData.email.length > maxLengths.email}
              >
                {formData.email.length}/{maxLengths.email}
              </ContactCharCount>
            </FlexSpaceBetween>
            <ContactInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </ContactFormGroup>

          <ContactFormGroup>
            <FlexSpaceBetween style={{ margin: "10px 0" }}>
              <ContactLabel htmlFor="subject">제목</ContactLabel>
              <ContactCharCount
                isLimit={formData.subject.length > maxLengths.subject}
              >
                {formData.subject.length}/{maxLengths.subject}
              </ContactCharCount>
            </FlexSpaceBetween>
            <ContactInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </ContactFormGroup>

          <ContactFormGroup>
            <FlexSpaceBetween style={{ margin: "10px 0" }}>
              <ContactLabel htmlFor="message">내용</ContactLabel>
              <ContactCharCount
                isLimit={formData.message.length > maxLengths.message}
              >
                {formData.message.length}/{maxLengths.message}
              </ContactCharCount>
            </FlexSpaceBetween>
            <ContactTextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </ContactFormGroup>

          <ContactButtonGroup>
            <ContactButton
              type="button"
              onClick={() =>
                setFormData({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                })
              }
            >
              취소
            </ContactButton>
            <ContactButton type="submit" primary>
              보내기
            </ContactButton>
          </ContactButtonGroup>
        </ContactForm>
      </ContactContainer>
    </section>
  );
};

export default Section05_Contact;
