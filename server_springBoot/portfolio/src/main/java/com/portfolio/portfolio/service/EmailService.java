package com.portfolio.portfolio.service;

import com.portfolio.portfolio.dto.EmailRequestDTO;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;
    
    @Value("${spring.mail.username}")
    private String receiverEmail;

    public void sendEmail(EmailRequestDTO emailRequest) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
        
        helper.setTo(receiverEmail); // 내 이메일로 받기
        helper.setReplyTo(emailRequest.getEmail()); // 답장 시 발신자 이메일로
        helper.setSubject("[포트폴리오에서 보낸 메일] " + emailRequest.getSubject());
        
        // [Fix] 이메일 본문 나중에 바꾸자
        String emailContent = "<div style='font-family: Arial, sans-serif; padding: 20px; max-width: 600px;'>"
                + "<h2 style='color: #3b7ead;'>포트폴리오에서 보낸 메일</h2>"
                + "<p><strong>이름:</strong> " + emailRequest.getName() + "</p>"
                + "<p><strong>이메일:</strong> " + emailRequest.getEmail() + "</p>"
                + "<p><strong>제목:</strong> " + emailRequest.getSubject() + "</p>"
                + "<div style='margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #3b7ead;'>"
                + "<p><strong>메시지:</strong></p>"
                + "<p>" + emailRequest.getMessage().replace("\n", "<br/>") + "</p>"
                + "</div>"
                + "</div>";
        
        helper.setText(emailContent, true); // HTML 형식 활성화
        
        mailSender.send(message);
    }
}
