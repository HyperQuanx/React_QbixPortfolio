package com.portfolio.portfolio.controller;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
@RequestMapping("/images")
public class ImageController {

    private final String UPLOAD_DIR = "public/uploads/feedback/";

    @GetMapping("/feedback/{filename:.+}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) {
        try {
            // 파일 경로 생성
            String absolutePath = new File("").getAbsolutePath() + "/" + UPLOAD_DIR;
            Path filePath = Paths.get(absolutePath + filename);
            
            // 파일이 존재하는지 확인
            if (!Files.exists(filePath)) {
                return ResponseEntity.notFound().build();
            }
            
            // 파일 리소스 생성
            Resource resource = new FileSystemResource(filePath.toFile());
            
            // 파일 타입 확인
            String contentType = Files.probeContentType(filePath);
            if (contentType == null) {
                contentType = "application/octet-stream";
            }
            
            System.out.println("이미지 파일 제공: " + filePath + ", 타입: " + contentType);
            
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
} 