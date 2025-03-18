package com.portfolio.portfolio.repository;

import com.portfolio.portfolio.domain.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    
    List<Feedback> findAllByOrderByIdxDesc();
    
    Feedback findByIdxAndPassword(Long idx, String password);
}
