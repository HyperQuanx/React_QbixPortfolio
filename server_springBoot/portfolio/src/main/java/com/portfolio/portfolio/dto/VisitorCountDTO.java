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
public class VisitorCountDTO {
  private Long todayCount;
  private Long totalCount;
  private String region;
  private String detailedRegion;
  private String ipAddress;
}