package com.portfolio.portfolio.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                // .allowedOrigins("http://localhost:5173") // 개발환경에서
                .allowedOrigins("https://react-qbix-portfolio.vercel.app")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowCredentials(true) // 쿠키 허용
                .maxAge(3600);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String projectRoot = new File("").getAbsolutePath();
        
        registry.addResourceHandler("/public/**")
                .addResourceLocations("file:" + projectRoot + "/public/")
                .setCachePeriod(0);
        
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:" + projectRoot + "/public/uploads/")
                .setCachePeriod(0);
        
        // System.out.println("기본 이미지 경로: file:" + projectRoot + "/public/");
        // System.out.println("업로드 이미지 경로: file:" + projectRoot + "/public/uploads/");
    }
}