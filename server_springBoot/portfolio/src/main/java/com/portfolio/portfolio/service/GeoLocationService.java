package com.portfolio.portfolio.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
@Slf4j
public class GeoLocationService {

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    public GeoLocationService() {
        this.restTemplate = new RestTemplate();
        this.objectMapper = new ObjectMapper();
    }

    public LocationInfo getLocationFromIp(String ipAddress) {
        if (ipAddress == null || ipAddress.equals("127.0.0.1") || ipAddress.equals("::1")) {
            return new LocationInfo("로컬", "개발환경", "127.0.0.1");
        }

        try {
            // ip-api.com 사용
            String url = "http://ip-api.com/json/" + ipAddress + "?lang=ko";
            String response = restTemplate.getForObject(url, String.class);
            
            JsonNode jsonNode = objectMapper.readTree(response);
            
            if ("success".equals(jsonNode.get("status").asText())) {
                String country = jsonNode.get("country").asText();
                String region = jsonNode.get("regionName").asText();
                String city = jsonNode.get("city").asText();
                
                // 김치파워
                if ("대한민국".equals(country) || "South Korea".equals(country)) {
                    String koreanRegion = convertToKoreanRegion(region);
                    String detailedRegion = koreanRegion + " " + city;
                    return new LocationInfo(koreanRegion, detailedRegion, ipAddress);
                } else {
                    return new LocationInfo("해외", country + " " + region, ipAddress);
                }
            }
        } catch (Exception e) {
            log.warn("IP 주소 {}의 지역 정보를 가져오는데 실패했습니다: {}", ipAddress, e.getMessage());
        }
        
        return new LocationInfo("알 수 없음", "지역 정보 없음", ipAddress);
    }

    private String convertToKoreanRegion(String region) {
      
        // 보기 편하게 한국어로 수정
        return switch (region.toLowerCase()) {
            case "seoul" -> "서울특별시";
            case "busan" -> "부산광역시";
            case "daegu" -> "대구광역시";
            case "incheon" -> "인천광역시";
            case "gwangju" -> "광주광역시";
            case "daejeon" -> "대전광역시";
            case "ulsan" -> "울산광역시";
            case "sejong" -> "세종특별자치시";
            case "gyeonggi-do", "gyeonggi" -> "경기도";
            case "gangwon-do", "gangwon" -> "강원도";
            case "chungcheongbuk-do" -> "충청북도";
            case "chungcheongnam-do" -> "충청남도";
            case "jeollabuk-do" -> "전라북도";
            case "jeollanam-do" -> "전라남도";
            case "gyeongsangbuk-do" -> "경상북도";
            case "gyeongsangnam-do" -> "경상남도";
            case "jeju-do", "jeju" -> "제주도";
            default -> region;
        };
    }

    public static class LocationInfo {
        private final String region;
        private final String detailedRegion;
        private final String ipAddress;

        public LocationInfo(String region, String detailedRegion, String ipAddress) {
            this.region = region;
            this.detailedRegion = detailedRegion;
            this.ipAddress = ipAddress;
        }

        public String getRegion() { return region; }
        public String getDetailedRegion() { return detailedRegion; }
        public String getIpAddress() { return ipAddress; }
    }
} 