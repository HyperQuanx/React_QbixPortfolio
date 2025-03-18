package com.portfolio.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmailRequestDTO {
    private String name;
    private String email;
    private String subject;
    private String message;
}