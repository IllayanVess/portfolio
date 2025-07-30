# Weather App 🌦️

A simple weather application that displays current weather conditions and forecasts using the OpenWeatherMap API.

## Features
- Current weather conditions (temperature, humidity, wind speed)
- 5-day weather forecast
- Search by city name
- Get weather for your current location

## Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- OpenWeatherMap API key (free tier available)

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/IllayanVess/portfolio/weather-app.git
cd weather-app

## Common Issues
🔴 **Error: API key not configured**
- Verify your `.env` file exists in the root folder
- Check the file contains exactly: `OPENWEATHER_API_KEY=your_actual_key_here`
- Restart your server after making changes

🔴 **404 Errors**
- Make sure your server is running (`node server.js`)
- Check you're accessing `http://localhost:3000` not `:5500`
