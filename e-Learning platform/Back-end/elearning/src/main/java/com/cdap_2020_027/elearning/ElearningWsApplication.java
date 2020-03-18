package com.cdap_2020_027.elearning;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ElearningWsApplication extends SpringBootServletInitializer{
	public static void main(String[] args) {
		SpringApplication.run(ElearningWsApplication.class, args);
	}
}
