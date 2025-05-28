package com.portfolio.portfolio.repository;

import com.portfolio.portfolio.domain.VisitorCount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface VisitorCountRepository extends JpaRepository<VisitorCount, Long> {

  Optional<VisitorCount> findByVisitDate(LocalDate date);

  @Query("SELECT SUM(v.count) FROM VisitorCount v")
  Long getTotalCount();

  // 가장 최근 방문자 정보 조회
  Optional<VisitorCount> findTopByOrderByVisitDateTimeDesc();

  // 특정 날짜의 방문자 수 계산
  Long countByVisitDate(LocalDate visitDate);

  // 날짜별 방문자 목록 조회 (관리용)
  List<VisitorCount> findByVisitDateOrderByVisitDateTimeDesc(LocalDate visitDate);
}