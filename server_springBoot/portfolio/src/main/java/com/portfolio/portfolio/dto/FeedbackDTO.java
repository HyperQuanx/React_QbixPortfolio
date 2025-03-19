package com.portfolio.portfolio.dto;

import com.portfolio.portfolio.domain.Feedback;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackDTO {
  
    private Long idx;
    private String name;
    private String regDate;
    private String password;
    private String status;
    private String contents;
    private String image;
    
    // 응답 관련 필드
    private boolean success;
    private String message;
    
    // Entity -> DTO 변환 (응답용)
    public static FeedbackDTO fromEntity(Feedback feedback) {
        return FeedbackDTO.builder()
                .idx(feedback.getIdx())
                .name(feedback.getName())
                .regDate(feedback.getRegDate().format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm")))
                .status(feedback.getStatus())
                .contents(feedback.getContents())
                .image(feedback.getImage())
                .build();
    }
    
    // DTO -> Entity 변환 (요청용)
    public Feedback toEntity() {
        return Feedback.builder()
                .name(this.name)
                .password(this.password)
                .status(this.status != null ? this.status : "public")
                .contents(this.contents)
                .image(this.image != null ? this.image : "/public/cyHumanRBG.png")
                .build();
    }
    
    // 성공 응답 생성
    public static FeedbackDTO success(String message, Feedback feedback) {
        FeedbackDTO dto = fromEntity(feedback);
        dto.setSuccess(true);
        dto.setMessage(message);
        return dto;
    }
    
    // 성공 응답 생성 (데이터 없음)
    public static FeedbackDTO success(String message) {
        return FeedbackDTO.builder()
                .success(true)
                .message(message)
                .build();
    }
    
    // 오류 응답 생성
    public static FeedbackDTO error(String message) {
        return FeedbackDTO.builder()
                .success(false)
                .message(message)
                .build();
    }
}
