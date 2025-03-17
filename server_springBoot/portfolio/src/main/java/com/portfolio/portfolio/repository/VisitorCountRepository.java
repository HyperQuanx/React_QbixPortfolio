package com.portfolio.portfolio.repository;

import com.portfolio.portfolio.domain.VisitorCount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.Optional;

public interface VisitorCountRepository extends JpaRepository<VisitorCount, Long> {

  Optional<VisitorCount> findByVisitDate(LocalDate date);

  @Query("SELECT SUM(v.count) FROM VisitorCount v")
  Long getTotalCount();
}