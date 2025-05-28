package com.portfolio.portfolio.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.ToString;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class VisitorCount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDate visitDate;

    @Column(nullable = false)
    private Long count;

    // 방문자 정보 추가
    @Column(nullable = false)
    private LocalDateTime visitDateTime;

    @Column(length = 50)
    private String region;

    @Column(length = 100)
    private String detailedRegion;

    @Column(length = 45)
    private String ipAddress;

    public void incrementCount() {
        this.count++;
    }

    // 생성자
    public static VisitorCount createWithDetails(LocalDate visitDate, LocalDateTime visitDateTime, 
                                               String region, String detailedRegion, String ipAddress) {
        return VisitorCount.builder()
                .visitDate(visitDate)
                .visitDateTime(visitDateTime)
                .region(region)
                .detailedRegion(detailedRegion)
                .ipAddress(ipAddress)
                .count(1L)
                .build();
    }
}