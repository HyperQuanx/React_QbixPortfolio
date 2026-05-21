package com.portfolio.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProfileThemeDTO {

    private String labelBackground;
    private String labelText;
    private boolean autoText;

    public static ProfileThemeDTO defaultTheme() {
        return ProfileThemeDTO.builder()
                .labelBackground("#111111")
                .labelText("#ffffff")
                .autoText(true)
                .build();
    }
}
