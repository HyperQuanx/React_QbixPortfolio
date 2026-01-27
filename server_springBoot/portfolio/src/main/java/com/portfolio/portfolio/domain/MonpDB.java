package com.portfolio.portfolio.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Comment;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MonpDB {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;
    
    @Column(nullable = false, length = 10)
    @Comment("이름")
    private String name;
    
    @Column(nullable = false)
    @Comment("생년월일")
    private String birthday;
    
    @Column(nullable = false)
    @Comment("성별")
    private boolean gender;
    
    @Column(nullable = false)
    @Comment("출생지")
    private String birthplace;
    
    @Column(nullable = false)
    @Comment("나이")
    private int age;

    @Column(nullable = false)
    @Comment("키")
    private String personHeight;

    @Column(nullable = false)
    @Comment("몸무게")
    private String personWeight;

    @Column(nullable = false)
    @Comment("직업")
    private String job;

    @Column(nullable = false)
    @Comment("별명 혹은 이명")
    private String nickname;

    @Column(nullable = false)
    @Comment("성향")
    private String propensity;

    @Column(nullable = false)
    @Comment("소속")
    private String affiliation;

    @Column(nullable = false)
    @Comment("파벌")
    private String clique;

    @Column(nullable = false)
    @Comment("좋아하는 것")
    private String favoriteThing;

    @Column(nullable = false)
    @Comment("싫어하는 것")
    private String hateThing;

    @Column(nullable = false)
    @Comment("사용 무공 또는 특성")
    private String specialSkill;

    @Column(nullable = false)
    @Comment("성격")
    private String personality;

    @Column(nullable = false)
    @Comment("외형")
    private String appearance;

    @Column(nullable = false)
    @Comment("테마곡")
    private String themeSong;

    @Column(nullable = false, columnDefinition = "TEXT")
    @Comment("특이사항")
    private String specialThing;
}

