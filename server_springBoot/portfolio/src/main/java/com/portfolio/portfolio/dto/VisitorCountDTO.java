package com.portfolio.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class VisitorCountDTO {
  private Long todayCount;
  private Long totalCount;
}