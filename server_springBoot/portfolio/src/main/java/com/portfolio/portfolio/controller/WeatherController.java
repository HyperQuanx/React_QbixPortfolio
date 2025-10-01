package com.portfolio.portfolio.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "*")
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
            
            System.out.println("날씨 API 응답: " + (response != null ? response.substring(0, Math.min(200, response.length())) : "null"));
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            System.err.println("날씨 API 호출 실패:");
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .body("{\"error\":\"날씨 정보를 가져오는데 실패했습니다\",\"message\":\"" + e.getMessage() + "\"}");
        }
    }
}

