package com.portfolio.portfolio.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "monpdb")
public class MonpCharacter {

    @Id
    @Column(length = 36)
    private String id;

    @Column(nullable = false, length = 20)
    private String regionId;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(length = 100)
    private String hanjaName;

    @Column(length = 120)
    private String englishName;

    @Column(length = 500)
    private String imageUrl;

    @Column(nullable = false, length = 20)
    private String species;

    @Column(length = 20)
    private String gender;

    @Column(length = 50)
    private String type;

    @Column(length = 100)
    private String birthplace;

    @Column(length = 100)
    private String birthDate;

    @Column(length = 50)
    private String age;

    @Column(length = 100)
    private String height;

    @Column(length = 100)
    private String weight;

    @Column(length = 100)
    private String occupation;

    @Column(length = 100)
    private String alignment;

    @Column(length = 100)
    private String affiliation;

    @Column(length = 100)
    private String faction;

    @Column(columnDefinition = "TEXT")
    private String likes;

    @Column(columnDefinition = "TEXT")
    private String dislikes;

    @Column(columnDefinition = "TEXT")
    private String martialArts;

    @Column(columnDefinition = "TEXT")
    private String personality;

    @Column(columnDefinition = "TEXT")
    private String appearance;

    @Column(length = 200)
    private String themeSong;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(length = 20)
    private String profileLabelBackground;

    @Column(length = 20)
    private String profileLabelText;

    @Column(nullable = false)
    private boolean profileAutoText;

    @PrePersist
    public void prePersist() {
        if (this.id == null || this.id.isBlank()) {
            this.id = UUID.randomUUID().toString();
        }
    }
}
