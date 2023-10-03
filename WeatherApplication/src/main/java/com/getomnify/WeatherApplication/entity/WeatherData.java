package com.getomnify.WeatherApplication.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class WeatherData {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String location;
	private Double temperature;
	private Double humidity;

	public WeatherData(String location, Double temperature, Double humidity) {
		super();
		this.location = location;
		this.temperature = temperature;
		this.humidity = humidity;
	}

}
