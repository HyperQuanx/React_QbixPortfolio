package com.portfolio.portfolio.dto;

import com.portfolio.portfolio.domain.MonpCharacter;
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
public class MonpCharacterDTO {

    private String id;
    private String regionId;
    private String name;
    private String hanjaName;
    private String englishName;
    private String imageUrl;
    private String species;
    private String gender;
    private String type;
    private String birthplace;
    private String birthDate;
    private String age;
    private String height;
    private String weight;
    private String occupation;
    private String alignment;
    private String affiliation;
    private String faction;
    private String likes;
    private String dislikes;
    private String martialArts;
    private String personality;
    private String appearance;
    private String themeSong;
    private String summary;
    private String notes;
    private ProfileThemeDTO profileTheme;

    public static MonpCharacterDTO fromEntity(MonpCharacter character) {
        return MonpCharacterDTO.builder()
                .id(character.getId())
                .regionId(character.getRegionId())
                .name(character.getName())
                .hanjaName(character.getHanjaName())
                .englishName(character.getEnglishName())
                .imageUrl(character.getImageUrl())
                .species(character.getSpecies())
                .gender(character.getGender())
                .type(character.getType())
                .birthplace(character.getBirthplace())
                .birthDate(character.getBirthDate())
                .age(character.getAge())
                .height(character.getHeight())
                .weight(character.getWeight())
                .occupation(character.getOccupation())
                .alignment(character.getAlignment())
                .affiliation(character.getAffiliation())
                .faction(character.getFaction())
                .likes(character.getLikes())
                .dislikes(character.getDislikes())
                .martialArts(character.getMartialArts())
                .personality(character.getPersonality())
                .appearance(character.getAppearance())
                .themeSong(character.getThemeSong())
                .summary(character.getSummary())
                .notes(character.getNotes())
                .profileTheme(ProfileThemeDTO.builder()
                        .labelBackground(character.getProfileLabelBackground())
                        .labelText(character.getProfileLabelText())
                        .autoText(character.isProfileAutoText())
                        .build())
                .build();
    }

    public MonpCharacter toEntity() {
        ProfileThemeDTO theme = this.profileTheme == null ? ProfileThemeDTO.defaultTheme() : this.profileTheme;

        return MonpCharacter.builder()
                .id(this.id)
                .regionId(this.regionId)
                .name(this.name)
                .hanjaName(this.hanjaName)
                .englishName(this.englishName)
                .imageUrl(this.imageUrl)
                .species(this.species)
                .gender(this.gender)
                .type(this.type)
                .birthplace(this.birthplace)
                .birthDate(this.birthDate)
                .age(this.age)
                .height(this.height)
                .weight(this.weight)
                .occupation(this.occupation)
                .alignment(this.alignment)
                .affiliation(this.affiliation)
                .faction(this.faction)
                .likes(this.likes)
                .dislikes(this.dislikes)
                .martialArts(this.martialArts)
                .personality(this.personality)
                .appearance(this.appearance)
                .themeSong(this.themeSong)
                .summary(this.summary)
                .notes(this.notes)
                .profileLabelBackground(theme.getLabelBackground())
                .profileLabelText(theme.getLabelText())
                .profileAutoText(theme.isAutoText())
                .build();
    }
}
