package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.dto.EmailRequestDTO;
import com.portfolio.portfolio.service.EmailService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/email")
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequestDTO emailRequest) {
        try {
            if (emailRequest.getName() == null || emailRequest.getName().length() > 20) {
                return ResponseEntity.badRequest().body("이름은 최대 20자까지 입력 가능합니다.");
            }
            if (emailRequest.getEmail() == null || emailRequest.getEmail().length() > 50) {
                return ResponseEntity.badRequest().body("이메일은 최대 50자까지 입력 가능합니다.");
            }
            if (emailRequest.getSubject() == null || emailRequest.getSubject().length() > 50) {
                return ResponseEntity.badRequest().body("제목은 최대 50자까지 입력 가능합니다.");
            }
            if (emailRequest.getMessage() == null || emailRequest.getMessage().length() > 500) {
                return ResponseEntity.badRequest().body("내용은 최대 500자까지 입력 가능합니다.");
            }
            
            emailService.sendEmail(emailRequest);
            return ResponseEntity.ok("이메일이 성공적으로 전송되었습니다.");
        } catch (MessagingException e) {
            return ResponseEntity.internalServerError().body("이메일 전송 중 오류가 발생했습니다: " + e.getMessage());
        }
    }
}
