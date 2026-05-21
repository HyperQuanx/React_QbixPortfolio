package com.portfolio.portfolio;

import com.portfolio.portfolio.domain.MonpCharacter;
import com.portfolio.portfolio.dto.MonpCharacterDTO;
import com.portfolio.portfolio.dto.ProfileThemeDTO;
import com.portfolio.portfolio.repository.MonpCharacterRepository;
import com.portfolio.portfolio.service.MonpCharacterService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MonpCharacterServiceTests {

    @Mock
    private MonpCharacterRepository monpCharacterRepository;

    @InjectMocks
    private MonpCharacterService monpCharacterService;

    @Test
    void createCharacterStoresEmptyRegionIdAsUndecided() {
        MonpCharacterDTO request = MonpCharacterDTO.builder()
                .regionId("")
                .name("청운")
                .build();

        when(monpCharacterRepository.save(any(MonpCharacter.class))).thenAnswer(invocation -> {
            MonpCharacter character = invocation.getArgument(0);
            return MonpCharacter.builder()
                    .id("generated-id")
                    .regionId(character.getRegionId())
                    .name(character.getName())
                    .species(character.getSpecies())
                    .gender(character.getGender())
                    .type(character.getType())
                    .profileLabelBackground(character.getProfileLabelBackground())
                    .profileLabelText(character.getProfileLabelText())
                    .profileAutoText(character.isProfileAutoText())
                    .build();
        });

        MonpCharacterDTO created = monpCharacterService.createCharacter(request);

        assertThat(created.getRegionId()).isEqualTo("미정");
    }

    @Test
    void createCharacterIgnoresClientIdAndNormalizesHumanDefaults() {
        MonpCharacterDTO request = MonpCharacterDTO.builder()
                .id("client-id")
                .regionId("characters01")
                .name(" 청운 ")
                .species("인간")
                .profileTheme(ProfileThemeDTO.defaultTheme())
                .build();

        when(monpCharacterRepository.save(any(MonpCharacter.class))).thenAnswer(invocation -> {
            MonpCharacter character = invocation.getArgument(0);
            return MonpCharacter.builder()
                    .id("generated-id")
                    .regionId(character.getRegionId())
                    .name(character.getName())
                    .species(character.getSpecies())
                    .gender(character.getGender())
                    .type(character.getType())
                    .profileLabelBackground(character.getProfileLabelBackground())
                    .profileLabelText(character.getProfileLabelText())
                    .profileAutoText(character.isProfileAutoText())
                    .build();
        });

        MonpCharacterDTO created = monpCharacterService.createCharacter(request);

        ArgumentCaptor<MonpCharacter> captor = ArgumentCaptor.forClass(MonpCharacter.class);
        verify(monpCharacterRepository).save(captor.capture());
        MonpCharacter saved = captor.getValue();

        assertThat(saved.getId()).isNull();
        assertThat(saved.getName()).isEqualTo("청운");
        assertThat(saved.getGender()).isEqualTo("남");
        assertThat(saved.getType()).isEmpty();
        assertThat(created.getId()).isEqualTo("generated-id");
    }

    @Test
    void getCharactersTreatsCharacters00AsAllAndFiltersByQuery() {
        MonpCharacter cheongUn = MonpCharacter.builder()
                .id("1")
                .regionId("characters01")
                .name("청운")
                .species("인간")
                .gender("남")
                .type("")
                .occupation("무사")
                .summary("동부평야지대 출신")
                .profileLabelBackground("#111111")
                .profileLabelText("#ffffff")
                .profileAutoText(true)
                .build();
        MonpCharacter monster = MonpCharacter.builder()
                .id("2")
                .regionId("characters06")
                .name("흑귀")
                .species("마물")
                .gender("")
                .type("악마")
                .occupation("수문장")
                .summary("암수굴의 마물")
                .profileLabelBackground("#111111")
                .profileLabelText("#ffffff")
                .profileAutoText(true)
                .build();

        when(monpCharacterRepository.findAllByOrderByNameAsc()).thenReturn(List.of(cheongUn, monster));

        List<MonpCharacterDTO> result = monpCharacterService.getCharacters("characters00", "악마");

        assertThat(result).hasSize(1);
        assertThat(result.get(0).getId()).isEqualTo("2");
    }

    @Test
    void getCharactersUsesRegionFilterWhenRegionIsSpecific() {
        when(monpCharacterRepository.findByRegionIdOrderByNameAsc("characters01")).thenReturn(List.of());

        List<MonpCharacterDTO> result = monpCharacterService.getCharacters("characters01", null);

        assertThat(result).isEmpty();
        verify(monpCharacterRepository).findByRegionIdOrderByNameAsc("characters01");
    }

    @Test
    void getCharactersDoesNotExposeUndecidedAsSpecificRegion() {
        List<MonpCharacterDTO> result = monpCharacterService.getCharacters("미정", null);

        assertThat(result).isEmpty();
    }
}
