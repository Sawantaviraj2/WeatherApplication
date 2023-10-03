package com.getomnify.WeatherApplication.service;

import java.util.List;

import com.getomnify.WeatherApplication.entity.WeatherData;

public interface WeatherDataService {

	public WeatherData saveWeatherData(WeatherData weatherData);

	public WeatherData updateWeatherDataByID(Integer id, WeatherData weatherData);

	public List<WeatherData> getWeatherDataByLocation(String location);

	public WeatherData getWeatherDataById(Integer id);

	public List<WeatherData> getAllWeatherData();

	public void deleteWeatherData(Integer id);

}
