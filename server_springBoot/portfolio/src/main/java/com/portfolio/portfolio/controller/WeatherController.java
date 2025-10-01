package com.portfolio.portfolio.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

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
            
            String url = UriComponentsBuilder
                    .fromHttpUrl("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst")
                    .queryParam("serviceKey", apiKey)
                    .queryParam("numOfRows", "60")
                    .queryParam("pageNo", "1")
                    .queryParam("dataType", "JSON")
                    .queryParam("base_date", base_date)
                    .queryParam("base_time", base_time)
                    .queryParam("nx", nx)
                    .queryParam("ny", ny)
                    .toUriString();
            
            String response = restTemplate.getForObject(url, String.class);
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body("{\"error\":\"날씨 정보를 가져오는데 실패했습니다: " + e.getMessage() + "\"}");
        }
    }
}

