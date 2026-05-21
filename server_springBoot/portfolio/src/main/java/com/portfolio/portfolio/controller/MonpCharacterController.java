package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.dto.MonpCharacterDTO;
import com.portfolio.portfolio.service.MonpCharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MonpCharacterController {

    private static final String UPLOAD_DIR = "public/uploads/characters/";
    private static final Set<String> ALLOWED_IMAGE_TYPES = Set.of("image/jpeg", "image/png", "image/gif", "image/webp");
    private static final Set<String> ALLOWED_EXTENSIONS = Set.of(".jpg", ".jpeg", ".png", ".gif", ".webp");

    private final MonpCharacterService monpCharacterService;

    @GetMapping("/characters")
    public List<MonpCharacterDTO> getCharacters(
            @RequestParam(value = "regionId", required = false) String regionId,
            @RequestParam(value = "q", required = false) String query) {
        return monpCharacterService.getCharacters(regionId, query);
    }

    @PostMapping("/characters")
    public ResponseEntity<MonpCharacterDTO> createCharacter(@RequestBody MonpCharacterDTO request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(monpCharacterService.createCharacter(request));
    }

    @GetMapping("/characters/{characterId}")
    public MonpCharacterDTO getCharacter(@PathVariable String characterId) {
        return monpCharacterService.getCharacter(characterId);
    }

    @PatchMapping("/characters/{characterId}")
    public MonpCharacterDTO updateCharacter(
            @PathVariable String characterId,
            @RequestBody MonpCharacterDTO request) {
        return monpCharacterService.updateCharacter(characterId, request);
    }

    @PostMapping("/character-images")
    public Map<String, String> uploadCharacterImage(@RequestParam("image") MultipartFile image) {
        if (image == null || image.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "이미지 파일을 선택해 주세요.");
        }

        String contentType = image.getContentType();
        if (contentType == null || !ALLOWED_IMAGE_TYPES.contains(contentType)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "이미지 파일만 업로드할 수 있습니다.");
        }

        String extension = getExtension(image.getOriginalFilename());
        String newFilename = UUID.randomUUID() + extension;

        try {
            File directory = new File(UPLOAD_DIR);
            if (!directory.exists() && !directory.mkdirs()) {
                throw new IOException("업로드 디렉터리를 생성할 수 없습니다.");
            }

            String absolutePath = new File("").getAbsolutePath() + "/" + UPLOAD_DIR;
            Path filePath = Paths.get(absolutePath + newFilename);
            Files.write(filePath, image.getBytes());
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "이미지 업로드 실패: " + e.getMessage(), e);
        }

        String imageUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/uploads/characters/")
                .path(newFilename)
                .toUriString();

        return Map.of("imageUrl", imageUrl);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleBadRequest(IllegalArgumentException e) {
        HttpStatus status = "캐릭터를 찾을 수 없습니다.".equals(e.getMessage())
                ? HttpStatus.NOT_FOUND
                : HttpStatus.BAD_REQUEST;

        return ResponseEntity.status(status).body(Map.of("message", e.getMessage()));
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<Map<String, String>> handleResponseStatus(ResponseStatusException e) {
        return ResponseEntity.status(e.getStatusCode()).body(Map.of("message", e.getReason()));
    }

    private String getExtension(String originalFilename) {
        if (originalFilename == null || !originalFilename.contains(".")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "파일 확장자가 필요합니다.");
        }

        String extension = originalFilename.substring(originalFilename.lastIndexOf(".")).toLowerCase();
        if (!ALLOWED_EXTENSIONS.contains(extension)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "지원하지 않는 이미지 확장자입니다.");
        }

        return extension;
    }
}
