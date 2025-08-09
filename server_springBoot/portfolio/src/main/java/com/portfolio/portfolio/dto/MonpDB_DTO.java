package com.portfolio.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MonpDB_DTO {
  private String name;
  private String birthday;
  private boolean gender;
  private String birthplace;
  private int age;
  private String personHeight;
  private String personWeight;
  private String job;
  private String nickname;
  private String propensity;
  private String affiliation;
  private String clique;
  private String favoriteThing;
  private String hateThing;
  private String specialSkill;
  private String personality;
  private String appearance;
  private String themeSong;
  private String specialThing;
}