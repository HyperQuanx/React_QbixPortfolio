package com.portfolio.portfolio.service;

import com.portfolio.portfolio.domain.VisitorCount;
import com.portfolio.portfolio.dto.VisitorCountDTO;
import com.portfolio.portfolio.repository.VisitorCountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class VisitorCountService {

  private final VisitorCountRepository visitorCountRepository;
  private final GeoLocationService geoLocationService;

  @Transactional
  public void incrementCount(String ipAddress) {
    LocalDate today = LocalDate.now();
    LocalDateTime now = LocalDateTime.now();
    
    // 일단 기본값으로 처리
    String region = "알 수 없음";
    String detailedRegion = "지역 정보 없음";
    
    // 실제 IP인 경우에만 지역 정보 조회 시도
    if (!ipAddress.equals("127.0.0.1") && !ipAddress.equals("::1") && !ipAddress.equals("0:0:0:0:0:0:0:1")) {
        try {
            // TODO: 나중에 지역 정보 API 연결
            region = "외부 IP";
            detailedRegion = "위치 확인 필요";
        } catch (Exception e) {
            // 오류 시 기본값 유지
        }
    }
    
    // 매번 새로운 레코드 생성
    VisitorCount newVisit = VisitorCount.createWithDetails(
        today, now, region, detailedRegion, ipAddress
    );
    
    visitorCountRepository.save(newVisit);
  }

  @Transactional(readOnly = true)
  public VisitorCountDTO getVisitorCount() {
    LocalDate today = LocalDate.now();
    
    // 오늘 방문자 수 계산
    Long todayCount = visitorCountRepository.countByVisitDate(today);
    
    // 전체 방문자 수 계산
    Long totalCount = visitorCountRepository.count();
    
    // 최근 방문자 정보
    VisitorCount recentVisitor = visitorCountRepository.findTopByOrderByVisitDateTimeDesc()
        .orElse(null);
    
    String region = "알 수 없음";
    String detailedRegion = "지역 정보 없음";
    String ipAddress = "127.0.0.1";
    
    if (recentVisitor != null) {
        region = recentVisitor.getRegion() != null ? recentVisitor.getRegion() : "알 수 없음";
        detailedRegion = recentVisitor.getDetailedRegion() != null ? recentVisitor.getDetailedRegion() : "지역 정보 없음";
        ipAddress = recentVisitor.getIpAddress() != null ? recentVisitor.getIpAddress() : "127.0.0.1";
    }
    
    return VisitorCountDTO.builder()
        .todayCount(todayCount)
        .totalCount(totalCount)
        .region(region)
        .detailedRegion(detailedRegion)
        .ipAddress(ipAddress)
        .build();
  }
}