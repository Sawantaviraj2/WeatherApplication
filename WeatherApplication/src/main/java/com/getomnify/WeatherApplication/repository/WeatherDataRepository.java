package com.getomnify.WeatherApplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.getomnify.WeatherApplication.entity.WeatherData;

@Repository
public interface WeatherDataRepository extends JpaRepository<WeatherData, Integer> {

	List<WeatherData> findByLocation(String location);

}
