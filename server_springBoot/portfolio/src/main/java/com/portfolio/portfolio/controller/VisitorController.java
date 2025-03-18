package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.dto.VisitorCountDTO;
import com.portfolio.portfolio.service.VisitorCountService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Optional;

@RestController
@RequestMapping("/api/visitors")
@RequiredArgsConstructor
public class VisitorController {

  private final VisitorCountService visitorCountService;
  private static final String VISITOR_COOKIE_NAME = "visitor_counted";
  private static final int COOKIE_MAX_AGE = 60 * 60;

  @PostMapping("/increment")
  public ResponseEntity<Void> incrementCount(HttpServletRequest request, HttpServletResponse response) {
    boolean hasVisitorCookie = false;
    
    if (request.getCookies() != null) {
      hasVisitorCookie = Arrays.stream(request.getCookies())
        .anyMatch(cookie -> VISITOR_COOKIE_NAME.equals(cookie.getName()));
    }
    
    // 쿠키가 없는 경우에만 조회수 증가
    if (!hasVisitorCookie) {
      visitorCountService.incrementCount();
      
      Cookie visitorCookie = new Cookie(VISITOR_COOKIE_NAME, "true");
      visitorCookie.setMaxAge(COOKIE_MAX_AGE);
      visitorCookie.setPath("/");
      visitorCookie.setHttpOnly(true); // JavaScript 접근 방어
      
      // 보안을 위해 Secure 플래그 설정 (HTTPS에서만 작동)
      // [Fix] 개발 환경에서는 주석 처리하고 프로덕션에서 활성화
      // visitorCookie.setSecure(true);
      
      response.addCookie(visitorCookie);
    }
    
    return ResponseEntity.ok().build();
  }

  @GetMapping("/count")
  public ResponseEntity<VisitorCountDTO> getVisitorCount() {
    VisitorCountDTO visitorCountDTO = visitorCountService.getVisitorCount();
    return ResponseEntity.ok(visitorCountDTO);
  }
}