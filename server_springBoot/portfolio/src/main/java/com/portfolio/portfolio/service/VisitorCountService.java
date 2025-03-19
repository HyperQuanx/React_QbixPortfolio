package com.portfolio.portfolio.service;

import com.portfolio.portfolio.domain.VisitorCount;
import com.portfolio.portfolio.dto.VisitorCountDTO;
import com.portfolio.portfolio.repository.VisitorCountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class VisitorCountService {

  private final VisitorCountRepository visitorCountRepository;

  @Transactional
  public void incrementCount() {
    LocalDate today = LocalDate.now();
    VisitorCount visitorCount = visitorCountRepository.findByVisitDate(today)
        .orElse(VisitorCount.builder()
            .visitDate(today)
            .count(0L)
            .build());

    visitorCount.incrementCount();
    visitorCountRepository.save(visitorCount);
  }

  @Transactional(readOnly = true)
  public VisitorCountDTO getVisitorCount() {
    LocalDate today = LocalDate.now();
    Long todayCount = visitorCountRepository.findByVisitDate(today)
        .map(VisitorCount::getCount)
        .orElse(0L);

    Long totalCount = visitorCountRepository.getTotalCount();
    if (totalCount == null) {
      totalCount = 0L;
    }

    return new VisitorCountDTO(todayCount, totalCount);
  }
}