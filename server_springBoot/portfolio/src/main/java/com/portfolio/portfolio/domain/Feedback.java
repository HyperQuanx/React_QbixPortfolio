package com.portfolio.portfolio.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.ZoneId;
import lombok.ToString;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Feedback {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;
    
    @Column(nullable = false, length = 10)
    private String name;
    
    @Column(nullable = false)
    private LocalDateTime regDate;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private String status;
    
    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents;
    
    @Column
    private String image;
    
    @PrePersist
    public void prePersist() {
        this.regDate = LocalDateTime.now(ZoneId.of("Asia/Seoul"));
        this.status = this.status == null ? "public" : this.status;
        this.image = this.image == null ? "/cyHumanRBG.png" : this.image;
    }
}
