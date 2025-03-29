package com.portfolio.portfolio.service;

import com.portfolio.portfolio.domain.Feedback;
import com.portfolio.portfolio.dto.FeedbackDTO;
import com.portfolio.portfolio.repository.FeedbackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    
    private final FeedbackRepository feedbackRepository;
    
    @Transactional(readOnly = true)
    public List<FeedbackDTO> getAllFeedbacks() {
        return feedbackRepository.findAllByOrderByIdxDesc()
                .stream()
                .map(FeedbackDTO::fromEntity)
                .collect(Collectors.toList());
    }
    
    // 피드백 등록
    @Transactional
    public FeedbackDTO createFeedback(FeedbackDTO feedbackDTO) {
        Feedback feedback = feedbackDTO.toEntity();
        Feedback savedFeedback = feedbackRepository.save(feedback);
        return FeedbackDTO.fromEntity(savedFeedback);
    }
    
    // 피드백 수정
    @Transactional
    public FeedbackDTO updateFeedback(Long idx, String password, FeedbackDTO feedbackDTO) {
        Feedback feedback = feedbackRepository.findByIdxAndPassword(idx, password);
        
        if (feedback == null) {
            throw new IllegalArgumentException("피드백을 찾을 수 없거나 비밀번호가 일치하지 않습니다.");
        }
        
        Feedback updatedFeedback = Feedback.builder()
                .idx(feedback.getIdx())
                .name(feedbackDTO.getName() != null ? feedbackDTO.getName() : feedback.getName())
                .regDate(feedback.getRegDate())
                .password(feedbackDTO.getPassword() != null ? feedbackDTO.getPassword() : feedback.getPassword())
                .status(feedbackDTO.getStatus() != null ? feedbackDTO.getStatus() : feedback.getStatus())
                .contents(feedbackDTO.getContents() != null ? feedbackDTO.getContents() : feedback.getContents())
                .image(feedbackDTO.getImage() != null ? feedbackDTO.getImage() : feedback.getImage())
                .build();
        
        Feedback saved = feedbackRepository.save(updatedFeedback);
        return FeedbackDTO.fromEntity(saved);
    }
    
    // 피드백 삭제
    @Transactional
    public void deleteFeedback(Long idx, String password) {
        Feedback feedback = feedbackRepository.findByIdxAndPassword(idx, password);
        
        if (feedback == null) {
            throw new IllegalArgumentException("피드백을 찾을 수 없거나 비밀번호가 일치하지 않습니다.");
        }
        
        feedbackRepository.delete(feedback);
    }
    
    // 피드백 상태 변경 (공개/비공개)
    @Transactional
    public FeedbackDTO updateFeedbackStatus(Long idx, String password, String status) {
        Feedback feedback = feedbackRepository.findByIdxAndPassword(idx, password);
        
        if (feedback == null) {
            throw new IllegalArgumentException("피드백을 찾을 수 없거나 비밀번호가 일치하지 않습니다.");
        }
        
        Feedback updatedFeedback = Feedback.builder()
                .idx(feedback.getIdx())
                .name(feedback.getName())
                .regDate(feedback.getRegDate())
                .password(feedback.getPassword())
                .status(status)
                .contents(feedback.getContents())
                .image(feedback.getImage())
                .build();
        
        Feedback saved = feedbackRepository.save(updatedFeedback);
        return FeedbackDTO.fromEntity(saved);
    }

    public boolean verifyPassword(Long idx, String password) {
        Feedback feedback = feedbackRepository.findById(idx)
                .orElseThrow(() -> new RuntimeException("피드백을 찾을 수 없습니다"));
        
        return feedback.getPassword().equals(password);
    }

    public FeedbackDTO getFeedbackByIdx(Long idx) {
        Feedback feedback = feedbackRepository.findById(idx)
                .orElseThrow(() -> new RuntimeException("피드백을 찾을 수 없습니다"));
        
        return FeedbackDTO.fromEntity(feedback);
    }
}
