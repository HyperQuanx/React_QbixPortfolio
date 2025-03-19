package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.dto.FeedbackDTO;
import com.portfolio.portfolio.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/feedback")
@RequiredArgsConstructor
public class FeedbackController {
    
    private final FeedbackService feedbackService;
    private final String UPLOAD_DIR = "public/uploads/feedback/";
    
    // 모든 피드백 조회
    @GetMapping
    public ResponseEntity<?> getAllFeedbacks() {
        try {
            List<FeedbackDTO> feedbacks = feedbackService.getAllFeedbacks();
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "피드백 목록 조회 성공");
            response.put("data", feedbacks);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(FeedbackDTO.error(e.getMessage()));
        }
    }
    
    // 피드백 등록
    @PostMapping
    public ResponseEntity<FeedbackDTO> createFeedback(
            @RequestParam("name") String name,
            @RequestParam("password") String password,
            @RequestParam("contents") String contents,
            @RequestParam(value = "image", required = false) MultipartFile imageFile) {
        
        try {
            String imagePath = "/public/cyHumanRBG.png"; // 기본 이미지 경로
            
            // 이미지 파일이 있으면 업로드
            if (imageFile != null && !imageFile.isEmpty()) {
                // 디렉토리 생성
                File directory = new File(UPLOAD_DIR);
                if (!directory.exists()) {
                    directory.mkdirs();
                }
                
                // 파일명 생성 (중복 방지를 위해 UUID 사용)
                String originalFilename = imageFile.getOriginalFilename();
                String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
                String newFilename = UUID.randomUUID().toString() + extension;
                
                // 파일 저장 경로 (절대 경로)
                String absolutePath = new File("").getAbsolutePath() + "/" + UPLOAD_DIR;
                Path filePath = Paths.get(absolutePath + newFilename);
                Files.write(filePath, imageFile.getBytes());
                
                // 이미지 경로 설정 (새로운 이미지 컨트롤러 사용)
                imagePath = "/images/feedback/" + newFilename;
                
                System.out.println("이미지 저장 경로: " + filePath);
                System.out.println("이미지 URL 경로: " + imagePath);
            }
            
            // 피드백 DTO 생성
            FeedbackDTO feedbackDTO = FeedbackDTO.builder()
                    .name(name)
                    .password(password)
                    .contents(contents)
                    .image(imagePath)
                    .status("public")
                    .build();
            
            // 피드백 등록
            FeedbackDTO createdFeedback = feedbackService.createFeedback(feedbackDTO);
            createdFeedback.setSuccess(true);
            createdFeedback.setMessage("피드백 등록 성공");
            
            return ResponseEntity.ok(createdFeedback);
        } catch (IOException e) {
            e.printStackTrace(); // 상세 오류 로깅
            return ResponseEntity.badRequest().body(FeedbackDTO.error("이미지 업로드 실패: " + e.getMessage()));
        } catch (Exception e) {
            e.printStackTrace(); // 상세 오류 로깅
            return ResponseEntity.badRequest().body(FeedbackDTO.error(e.getMessage()));
        }
    }
    
    // 비밀번호 검증 API 추가
    @PostMapping("/{idx}/verify")
    public ResponseEntity<?> verifyPassword(
            @PathVariable Long idx,
            @RequestParam("password") String password) {
        
        try {
            boolean isValid = feedbackService.verifyPassword(idx, password);
            
            Map<String, Object> response = new HashMap<>();
            if (isValid) {
                response.put("success", true);
                response.put("message", "비밀번호 검증 성공");
            } else {
                response.put("success", false);
                response.put("message", "비밀번호가 일치하지 않습니다");
            }
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", e.getMessage());
            
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    // 특정 피드백 조회 (비밀번호 검증 포함)
    @GetMapping("/{idx}")
    public ResponseEntity<?> getFeedback(
            @PathVariable Long idx,
            @RequestParam(value = "password", required = false) String password) {
        
        try {
            FeedbackDTO feedback = feedbackService.getFeedbackByIdx(idx);
            
            // 비밀번호가 제공된 경우 검증
            if (password != null && !password.isEmpty()) {
                boolean isValid = feedbackService.verifyPassword(idx, password);
                
                if (!isValid) {
                    Map<String, Object> errorResponse = new HashMap<>();
                    errorResponse.put("success", false);
                    errorResponse.put("message", "비밀번호가 일치하지 않습니다");
                    
                    return ResponseEntity.badRequest().body(errorResponse);
                }
            }
            
            feedback.setSuccess(true);
            feedback.setMessage("피드백 조회 성공");
            
            return ResponseEntity.ok(feedback);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(FeedbackDTO.error(e.getMessage()));
        }
    }
    
    // 피드백 수정
    @PutMapping("/{idx}")
    public ResponseEntity<FeedbackDTO> updateFeedback(
            @PathVariable Long idx,
            @RequestParam("password") String password,
            @RequestParam(value = "contents", required = false) String contents,
            @RequestParam(value = "image", required = false) MultipartFile imageFile) {
        
        try {
            // 비밀번호 검증
            boolean isValid = feedbackService.verifyPassword(idx, password);
            
            if (!isValid) {
                return ResponseEntity.badRequest().body(FeedbackDTO.error("비밀번호가 일치하지 않습니다"));
            }
            
            String imagePath = null;
            
            // 이미지 파일이 있으면 업로드
            if (imageFile != null && !imageFile.isEmpty()) {
                // 디렉토리 생성
                File directory = new File(UPLOAD_DIR);
                if (!directory.exists()) {
                    directory.mkdirs();
                }
                
                // 파일명 생성 (중복 방지를 위해 UUID 사용)
                String originalFilename = imageFile.getOriginalFilename();
                String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
                String newFilename = UUID.randomUUID().toString() + extension;
                
                // 파일 저장 경로 (절대 경로)
                String absolutePath = new File("").getAbsolutePath() + "/" + UPLOAD_DIR;
                Path filePath = Paths.get(absolutePath + newFilename);
                Files.write(filePath, imageFile.getBytes());
                
                // 이미지 경로 설정 (새로운 이미지 컨트롤러 사용)
                imagePath = "/images/feedback/" + newFilename;
                
                System.out.println("이미지 저장 경로: " + filePath);
                System.out.println("이미지 URL 경로: " + imagePath);
            }
            
            // 피드백 DTO 생성
            FeedbackDTO feedbackDTO = FeedbackDTO.builder()
                    .contents(contents)
                    .image(imagePath)
                    .build();
            
            // 피드백 수정
            FeedbackDTO updatedFeedback = feedbackService.updateFeedback(idx, password, feedbackDTO);
            updatedFeedback.setSuccess(true);
            updatedFeedback.setMessage("피드백 수정 성공");
            
            return ResponseEntity.ok(updatedFeedback);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body(FeedbackDTO.error("이미지 업로드 실패: " + e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(FeedbackDTO.error(e.getMessage()));
        }
    }
    
    // 피드백 삭제
    @DeleteMapping("/{idx}")
    public ResponseEntity<FeedbackDTO> deleteFeedback(
            @PathVariable Long idx,
            @RequestParam("password") String password) {
        
        try {
            // 비밀번호 검증
            boolean isValid = feedbackService.verifyPassword(idx, password);
            
            if (!isValid) {
                return ResponseEntity.badRequest().body(FeedbackDTO.error("비밀번호가 일치하지 않습니다"));
            }
            
            feedbackService.deleteFeedback(idx, password);
            return ResponseEntity.ok(FeedbackDTO.success("피드백 삭제 성공"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(FeedbackDTO.error(e.getMessage()));
        }
    }
    
    // 피드백 상태 변경 (공개/비공개)
    @PatchMapping("/{idx}/status")
    public ResponseEntity<FeedbackDTO> updateFeedbackStatus(
            @PathVariable Long idx,
            @RequestParam("password") String password,
            @RequestParam("status") String status) {
        
        try {
            // 비밀번호 검증
            boolean isValid = feedbackService.verifyPassword(idx, password);
            
            if (!isValid) {
                return ResponseEntity.badRequest().body(FeedbackDTO.error("비밀번호가 일치하지 않습니다"));
            }
            
            FeedbackDTO updatedFeedback = feedbackService.updateFeedbackStatus(idx, password, status);
            updatedFeedback.setSuccess(true);
            updatedFeedback.setMessage("피드백 상태 변경 성공");
            
            return ResponseEntity.ok(updatedFeedback);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(FeedbackDTO.error(e.getMessage()));
        }
    }
}
