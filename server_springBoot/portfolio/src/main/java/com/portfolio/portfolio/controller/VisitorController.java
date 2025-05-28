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
  public ResponseEntity<VisitorCountDTO> incrementCount(HttpServletRequest request, HttpServletResponse response) {
    boolean hasVisitorCookie = false;
    
    if (request.getCookies() != null) {
      hasVisitorCookie = Arrays.stream(request.getCookies())
        .anyMatch(cookie -> VISITOR_COOKIE_NAME.equals(cookie.getName()));
    }
    
    // // 디버그용 (개발 환경)
    // String xForwardedFor = request.getHeader("X-Forwarded-For");
    // System.out.println("=== DEBUG ===");
    // System.out.println("X-Forwarded-For header: " + xForwardedFor);
    // System.out.println("Remote Addr: " + request.getRemoteAddr());
    
    // 쿠키가 없는 경우에만 조회수 증가
    if (!hasVisitorCookie) {
      // 클라이언트 IP 주소 추출
      String clientIp = getClientIpAddress(request);
      // System.out.println("Final Client IP: " + clientIp); // 디버그용 (개발 환경)
      visitorCountService.incrementCount(clientIp);
      
      Cookie visitorCookie = new Cookie(VISITOR_COOKIE_NAME, "true");
      visitorCookie.setMaxAge(COOKIE_MAX_AGE);
      visitorCookie.setPath("/");
      visitorCookie.setHttpOnly(true);
      
      // 보안을 위해 Secure 플래그 설정 (HTTPS에서만 작동)
      // [Fix] 개발 환경에서는 주석 처리하고 서비스에서 활성화
      visitorCookie.setSecure(true);
      
      // SameSite 속성을 None으로 명시적 설정 (크로스 도메인 쿠키 허용)
      response.setHeader("Set-Cookie", visitorCookie.getName() + "=" + visitorCookie.getValue() 
              + "; Max-Age=" + visitorCookie.getMaxAge() 
              + "; Path=" + visitorCookie.getPath() 
              + "; HttpOnly"
              + "; Secure; SameSite=None");
      
      // response.addCookie(visitorCookie);
    }
    
    // 현재 방문자 정보 반환
    VisitorCountDTO visitorCountDTO = visitorCountService.getVisitorCount();
    return ResponseEntity.ok(visitorCountDTO);
  }

  @GetMapping("/count")
  public ResponseEntity<VisitorCountDTO> getVisitorCount() {
    VisitorCountDTO visitorCountDTO = visitorCountService.getVisitorCount();
    return ResponseEntity.ok(visitorCountDTO);
  }

  /**
   * 클라이언트의 실제 IP 주소를 추출합니다.
   * 프록시나 로드밸런서를 거쳐오는 경우를 고려합니다.
   */
  private String getClientIpAddress(HttpServletRequest request) {
    // X-Forwarded-For 헤더 먼저 확인 (프록시를 통한 실제 클라이언트 IP)
    String xForwardedFor = request.getHeader("X-Forwarded-For");
    if (xForwardedFor != null && !xForwardedFor.isEmpty() && !"unknown".equalsIgnoreCase(xForwardedFor)) {
        // 여러 IP가 있는 경우 첫 번째 IP 사용
        return xForwardedFor.split(",")[0].trim();
    }
    
    // X-Real-IP 헤더 확인
    String xRealIp = request.getHeader("X-Real-IP");
    if (xRealIp != null && !xRealIp.isEmpty() && !"unknown".equalsIgnoreCase(xRealIp)) {
        return xRealIp;
    }
    
    // X-Forwarded 헤더 확인
    String xForwarded = request.getHeader("X-Forwarded");
    if (xForwarded != null && !xForwarded.isEmpty() && !"unknown".equalsIgnoreCase(xForwarded)) {
        return xForwarded;
    }
    
    // Proxy-Client-IP 헤더 확인
    String proxyClientIp = request.getHeader("Proxy-Client-IP");
    if (proxyClientIp != null && !proxyClientIp.isEmpty() && !"unknown".equalsIgnoreCase(proxyClientIp)) {
        return proxyClientIp;
    }
    
    // WL-Proxy-Client-IP 헤더 확인
    String wlProxyClientIp = request.getHeader("WL-Proxy-Client-IP");
    if (wlProxyClientIp != null && !wlProxyClientIp.isEmpty() && !"unknown".equalsIgnoreCase(wlProxyClientIp)) {
        return wlProxyClientIp;
    }
    
    // 마지막으로 getRemoteAddr() 사용
    return request.getRemoteAddr();
  }
}