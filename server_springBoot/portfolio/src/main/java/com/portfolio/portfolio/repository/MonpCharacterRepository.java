package com.portfolio.portfolio.repository;

import com.portfolio.portfolio.domain.MonpCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MonpCharacterRepository extends JpaRepository<MonpCharacter, String> {

    List<MonpCharacter> findAllByOrderByNameAsc();

    List<MonpCharacter> findByRegionIdOrderByNameAsc(String regionId);
}
