package com.portfolio.portfolio.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    @Value("${weather.api.key:}")
    private String apiKey;

    @GetMapping
    public ResponseEntity<?> getWeather(
            @RequestParam String base_date,
            @RequestParam String base_time,
            @RequestParam String nx,
            @RequestParam String ny) {
        
        try {
            // API 키 존재 여부 확인
            if (apiKey == null || apiKey.isEmpty()) {
                System.err.println("ERROR: 날씨 API 키가 설정되지 않았습니다!");
                return ResponseEntity.status(500)
                        .body("{\"error\":\"날씨 API 키가 설정되지 않았습니다\",\"message\":\"WEATHER_API_KEY 환경변수를 확인하세요\"}");
            }
            
            System.out.println("날씨 API 요청 - base_date: " + base_date + ", base_time: " + base_time + ", nx: " + nx + ", ny: " + ny);
            System.out.println("API 키 첫 10자: " + apiKey.substring(0, Math.min(10, apiKey.length())) + "...");
            
            RestTemplate restTemplate = new RestTemplate();
            
            // UriComponentsBuilder를 사용하여 URL을 안전하게 구성
            URI uri = UriComponentsBuilder
                    .fromHttpUrl("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst")
                    .queryParam("serviceKey", apiKey)
                    .queryParam("numOfRows", 60)
                    .queryParam("pageNo", 1)
                    .queryParam("dataType", "JSON")
                    .queryParam("base_date", base_date)
                    .queryParam("base_time", base_time)
                    .queryParam("nx", nx)
                    .queryParam("ny", ny)
                    .build(true) // true로 설정하여 이미 인코딩된 값 유지
                    .toUri();
            
            System.out.println("날씨 API 호출 URL: " + uri.toString());
            
            String response = restTemplate.getForObject(uri, String.class);
            
            if (response != null && response.length() > 0) {
                System.out.println("날씨 API 응답 받음 (길이: " + response.length() + ")");
                System.out.println("응답 내용(첫 200자): " + response.substring(0, Math.min(200, response.length())));
            } else {
                System.err.println("ERROR: 날씨 API 응답이 비어있습니다");
            }
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            System.err.println("===== 날씨 API 호출 실패 =====");
            System.err.println("에러 타입: " + e.getClass().getName());
            System.err.println("에러 메시지: " + e.getMessage());
            e.printStackTrace();
            System.err.println("===========================");
            
            return ResponseEntity.status(500)
                    .body("{\"error\":\"날씨 정보를 가져오는데 실패했습니다\",\"message\":\"" + e.getMessage() + "\",\"type\":\"" + e.getClass().getSimpleName() + "\"}");
        }
    }
}

