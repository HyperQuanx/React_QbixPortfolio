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
    
    // 디버깅용 로그 추가
    System.out.println("=== 방문자 정보 디버깅 ===");
    System.out.println("입력받은 IP: " + ipAddress);
    
    // 일단 기본값으로 처리
    String region = "알 수 없음";
    String detailedRegion = "지역 정보 없음";
    
    // 실제 IP인 경우에만 지역 정보 조회 시도
    if (!ipAddress.equals("127.0.0.1") && !ipAddress.equals("::1") && !ipAddress.equals("0:0:0:0:0:0:0:1")) {
        System.out.println("외부 IP 감지됨: " + ipAddress);
        try {
            // TODO: 나중에 지역 정보 API 연결
            region = "외부 IP";
            detailedRegion = "위치 확인 필요";
            System.out.println("지역 정보 설정됨 - region: " + region + ", detailedRegion: " + detailedRegion);
        } catch (Exception e) {
            System.out.println("지역 정보 설정 중 오류: " + e.getMessage());
        }
    } else {
        System.out.println("로컬 IP 감지됨: " + ipAddress);
    }
    
    // 매번 새로운 레코드 생성
    VisitorCount newVisit = VisitorCount.createWithDetails(
        today, now, region, detailedRegion, ipAddress
    );
    
    System.out.println("저장할 데이터 - IP: " + ipAddress + ", region: " + region + ", detailedRegion: " + detailedRegion);
    
    visitorCountRepository.save(newVisit);
    
    System.out.println("=== 저장 완료 ===");
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