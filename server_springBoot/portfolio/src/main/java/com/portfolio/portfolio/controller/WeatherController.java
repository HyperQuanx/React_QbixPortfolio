package com.portfolio.portfolio.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

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
            
            // API 키는 이미 인코딩된 상태이므로 그대로 사용
            String url = String.format(
                "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst" +
                "?serviceKey=%s" +
                "&numOfRows=60" +
                "&pageNo=1" +
                "&dataType=JSON" +
                "&base_date=%s" +
                "&base_time=%s" +
                "&nx=%s" +
                "&ny=%s",
                apiKey, base_date, base_time, nx, ny
            );
            
            System.out.println("날씨 API 호출 URL: " + url);
            
            String response = restTemplate.getForObject(url, String.class);
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .body("{\"error\":\"날씨 정보를 가져오는데 실패했습니다\",\"message\":\"" + e.getMessage() + "\"}");
        }
    }
}

