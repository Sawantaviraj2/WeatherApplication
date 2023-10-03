package com.getomnify.WeatherApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.getomnify.WeatherApplication.entity.WeatherData;
import com.getomnify.WeatherApplication.service.WeatherDataService;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin("*")
@Slf4j
public class WeatherDataController {

	private WeatherDataService weatherDataService;

	@Autowired
	public WeatherDataController(WeatherDataService weatherDataService) {
		super();
		this.weatherDataService = weatherDataService;
	}

	@PostMapping("/weathers")
	public ResponseEntity<WeatherData> createWeatherData(@RequestBody WeatherData weatherData) {
		log.info("WeatherData added");
		return new ResponseEntity<WeatherData>(weatherDataService.saveWeatherData(weatherData), HttpStatus.CREATED);
	}

	@PutMapping("/weathers/{id}")
	public ResponseEntity<WeatherData> updateWeatherDataByID(@PathVariable Integer id,
			@RequestBody WeatherData weatherData) {
		log.info("WeatherData updated");
		return new ResponseEntity<WeatherData>(weatherDataService.updateWeatherDataByID(id, weatherData),
				HttpStatus.ACCEPTED);
	}

	@GetMapping("/weathersbylocation/{location}")
	public ResponseEntity<List<WeatherData>> getWeatherDataByLocation(@PathVariable String location) {
		log.info("get WeatherData by location");
		return new ResponseEntity<List<WeatherData>>(weatherDataService.getWeatherDataByLocation(location),
				HttpStatus.OK);
	}

	@GetMapping("/weathersbyid/{id}")
	public ResponseEntity<WeatherData> getWeatherDataById(@PathVariable Integer id) {
		log.info("get WeatherData by id");
		return new ResponseEntity<WeatherData>(weatherDataService.getWeatherDataById(id), HttpStatus.OK);
	}

	@GetMapping("/weathers")
	public ResponseEntity<List<WeatherData>> getAllWeatherData() {
		return new ResponseEntity<List<WeatherData>>(weatherDataService.getAllWeatherData(), HttpStatus.OK);
	}

	@DeleteMapping("/weathers/{id}")
	public void deleteWeatherData(Integer id) {
		log.info("delete WeatherData by id");
		weatherDataService.deleteWeatherData(id);
	}
}
