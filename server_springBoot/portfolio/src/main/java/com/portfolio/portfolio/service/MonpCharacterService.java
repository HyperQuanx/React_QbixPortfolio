package com.portfolio.portfolio.service;

import com.portfolio.portfolio.domain.MonpCharacter;
import com.portfolio.portfolio.dto.MonpCharacterDTO;
import com.portfolio.portfolio.dto.ProfileThemeDTO;
import com.portfolio.portfolio.repository.MonpCharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Locale;
import java.util.Objects;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class MonpCharacterService {

    private static final String ALL_REGION_ID = "characters00";
    private static final String UNDECIDED_REGION_ID = "미정";
    private static final String HUMAN_SPECIES = "인간";
    private static final String MONSTER_SPECIES = "마물";

    private final MonpCharacterRepository monpCharacterRepository;

    @Transactional(readOnly = true)
    public List<MonpCharacterDTO> getCharacters(String regionId, String query) {
        List<MonpCharacter> characters;
        if (UNDECIDED_REGION_ID.equals(regionId)) {
            characters = List.of();
        } else {
            characters = shouldSearchAllRegions(regionId)
                    ? monpCharacterRepository.findAllByOrderByNameAsc()
                    : monpCharacterRepository.findByRegionIdOrderByNameAsc(regionId);
        }

        return characters.stream()
                .filter(character -> matchesQuery(character, query))
                .map(MonpCharacterDTO::fromEntity)
                .toList();
    }

    @Transactional(readOnly = true)
    public MonpCharacterDTO getCharacter(String id) {
        return MonpCharacterDTO.fromEntity(findCharacter(id));
    }

    @Transactional
    public MonpCharacterDTO createCharacter(MonpCharacterDTO request) {
        MonpCharacterDTO normalized = normalizeForSave(request, null);
        MonpCharacter saved = monpCharacterRepository.save(normalized.toEntity());
        return MonpCharacterDTO.fromEntity(saved);
    }

    @Transactional
    public MonpCharacterDTO updateCharacter(String id, MonpCharacterDTO request) {
        MonpCharacter current = findCharacter(id);
        MonpCharacterDTO merged = merge(current, request);
        MonpCharacter saved = monpCharacterRepository.save(normalizeForSave(merged, id).toEntity());
        return MonpCharacterDTO.fromEntity(saved);
    }

    private MonpCharacter findCharacter(String id) {
        return monpCharacterRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("캐릭터를 찾을 수 없습니다."));
    }

    private boolean shouldSearchAllRegions(String regionId) {
        return regionId == null || regionId.isBlank() || ALL_REGION_ID.equals(regionId);
    }

    private boolean matchesQuery(MonpCharacter character, String query) {
        if (query == null || query.isBlank()) {
            return true;
        }

        String normalizedQuery = query.toLowerCase(Locale.ROOT);

        return Stream.of(
                        character.getName(),
                        character.getSpecies(),
                        character.getType(),
                        character.getHanjaName(),
                        character.getEnglishName(),
                        character.getBirthplace(),
                        character.getOccupation(),
                        character.getAlignment(),
                        character.getAffiliation(),
                        character.getFaction(),
                        character.getSummary()
                )
                .filter(Objects::nonNull)
                .map(value -> value.toLowerCase(Locale.ROOT))
                .anyMatch(value -> value.contains(normalizedQuery));
    }

    private MonpCharacterDTO normalizeForSave(MonpCharacterDTO request, String id) {
        if (request == null) {
            throw new IllegalArgumentException("요청 본문이 비어 있습니다.");
        }

        String regionId = trimToNull(request.getRegionId());
        String name = trimToNull(request.getName());

        if (regionId == null || ALL_REGION_ID.equals(regionId)) {
            regionId = UNDECIDED_REGION_ID;
        }

        if (name == null) {
            throw new IllegalArgumentException("이름을 입력해 주세요.");
        }

        String species = MONSTER_SPECIES.equals(request.getSpecies()) ? MONSTER_SPECIES : HUMAN_SPECIES;
        ProfileThemeDTO theme = normalizeTheme(request.getProfileTheme());

        request.setId(id);
        request.setRegionId(regionId);
        request.setName(name);
        request.setSpecies(species);
        request.setGender(HUMAN_SPECIES.equals(species) ? defaultIfBlank(request.getGender(), "남") : "");
        request.setType(MONSTER_SPECIES.equals(species) ? defaultIfBlank(request.getType(), MONSTER_SPECIES) : "");
        request.setProfileTheme(theme);

        return request;
    }

    private ProfileThemeDTO normalizeTheme(ProfileThemeDTO theme) {
        ProfileThemeDTO defaults = ProfileThemeDTO.defaultTheme();

        if (theme == null) {
            return defaults;
        }

        return ProfileThemeDTO.builder()
                .labelBackground(defaultIfBlank(theme.getLabelBackground(), defaults.getLabelBackground()))
                .labelText(defaultIfBlank(theme.getLabelText(), defaults.getLabelText()))
                .autoText(theme.isAutoText())
                .build();
    }

    private MonpCharacterDTO merge(MonpCharacter current, MonpCharacterDTO request) {
        if (request == null) {
            request = new MonpCharacterDTO();
        }

        MonpCharacterDTO currentDto = MonpCharacterDTO.fromEntity(current);

        return MonpCharacterDTO.builder()
                .id(current.getId())
                .regionId(valueOrCurrent(request.getRegionId(), currentDto.getRegionId()))
                .name(valueOrCurrent(request.getName(), currentDto.getName()))
                .hanjaName(valueOrCurrent(request.getHanjaName(), currentDto.getHanjaName()))
                .englishName(valueOrCurrent(request.getEnglishName(), currentDto.getEnglishName()))
                .imageUrl(valueOrCurrent(request.getImageUrl(), currentDto.getImageUrl()))
                .species(valueOrCurrent(request.getSpecies(), currentDto.getSpecies()))
                .gender(valueOrCurrent(request.getGender(), currentDto.getGender()))
                .type(valueOrCurrent(request.getType(), currentDto.getType()))
                .birthplace(valueOrCurrent(request.getBirthplace(), currentDto.getBirthplace()))
                .birthDate(valueOrCurrent(request.getBirthDate(), currentDto.getBirthDate()))
                .age(valueOrCurrent(request.getAge(), currentDto.getAge()))
                .height(valueOrCurrent(request.getHeight(), currentDto.getHeight()))
                .weight(valueOrCurrent(request.getWeight(), currentDto.getWeight()))
                .occupation(valueOrCurrent(request.getOccupation(), currentDto.getOccupation()))
                .alignment(valueOrCurrent(request.getAlignment(), currentDto.getAlignment()))
                .affiliation(valueOrCurrent(request.getAffiliation(), currentDto.getAffiliation()))
                .faction(valueOrCurrent(request.getFaction(), currentDto.getFaction()))
                .likes(valueOrCurrent(request.getLikes(), currentDto.getLikes()))
                .dislikes(valueOrCurrent(request.getDislikes(), currentDto.getDislikes()))
                .martialArts(valueOrCurrent(request.getMartialArts(), currentDto.getMartialArts()))
                .personality(valueOrCurrent(request.getPersonality(), currentDto.getPersonality()))
                .appearance(valueOrCurrent(request.getAppearance(), currentDto.getAppearance()))
                .themeSong(valueOrCurrent(request.getThemeSong(), currentDto.getThemeSong()))
                .summary(valueOrCurrent(request.getSummary(), currentDto.getSummary()))
                .notes(valueOrCurrent(request.getNotes(), currentDto.getNotes()))
                .profileTheme(request.getProfileTheme() == null ? currentDto.getProfileTheme() : request.getProfileTheme())
                .build();
    }

    private String valueOrCurrent(String value, String current) {
        return value == null ? current : value;
    }

    private String trimToNull(String value) {
        if (value == null || value.trim().isEmpty()) {
            return null;
        }

        return value.trim();
    }

    private String defaultIfBlank(String value, String defaultValue) {
        String trimmed = trimToNull(value);
        return trimmed == null ? defaultValue : trimmed;
    }
}
