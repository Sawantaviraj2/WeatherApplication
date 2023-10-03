package com.getomnify.WeatherApplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.getomnify.WeatherApplication.entity.WeatherData;
import com.getomnify.WeatherApplication.exception.WeatherDataException;
import com.getomnify.WeatherApplication.repository.WeatherDataRepository;

@Service
public class WeatherDataServiceImpl implements WeatherDataService {

	private WeatherDataRepository weatherDataRepository;

	@Autowired
	public WeatherDataServiceImpl(WeatherDataRepository weatherDataRepository) {
		super();
		this.weatherDataRepository = weatherDataRepository;
	}

	@Override
	public WeatherData saveWeatherData(WeatherData weatherData) {
		return weatherDataRepository.save(weatherData);
	}

	@Override
	public List<WeatherData> getWeatherDataByLocation(String location) {
		List<WeatherData> wlist = weatherDataRepository.findByLocation(location);

		if (wlist.isEmpty()) {
			throw new WeatherDataException("No Weather Data found for given location " + location);
		}

		return wlist;
	}

	@Override
	public WeatherData getWeatherDataById(Integer id) {
		WeatherData wd = weatherDataRepository.findById(id).get();
		if (wd == null) {
			throw new WeatherDataException("No Weather Data found for given id " + id);
		}
		return wd;
	}

	@Override
	public List<WeatherData> getAllWeatherData() {
		return weatherDataRepository.findAll();
	}

	@Override
	public void deleteWeatherData(Integer id) {
		weatherDataRepository.deleteById(id);
	}

	@Override
	public WeatherData updateWeatherDataByID(Integer id, WeatherData weatherData) {
		WeatherData wd = weatherDataRepository.findById(id).get();

		if (wd == null) {
			throw new WeatherDataException("No Weather Data found for given id " + id);
		}

		wd.setHumidity(weatherData.getHumidity());
		wd.setTemperature(weatherData.getTemperature());

		return weatherDataRepository.save(wd);
	}

}
