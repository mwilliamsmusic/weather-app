export function convertURL(location) {
    const url = `https://api.open-meteo.com/v1/forecast?${location.lat}&${location.lon}&daily=wind_gusts_10m_max,wind_speed_10m_max,weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,rain_sum,showers_sum,precipitation_sum,snowfall_sum,precipitation_hours,precipitation_probability_max&hourly=temperature_2m,wind_speed_10m,temperature_80m,temperature_120m,temperature_180m,wind_gusts_10m,weather_code,rain,showers,snowfall,apparent_temperature,precipitation_probability,precipitation,dew_point_2m,relative_humidity_2m,wind_speed_80m,wind_speed_120m,wind_direction_10m,wind_direction_80m,visibility,cloud_cover&current=temperature_2m,wind_speed_10m,is_day,apparent_temperature,relative_humidity_2m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_gusts_10m,wind_direction_10m`;
    return url;
}

export function locationURL(city) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=1ade1e2a20cba233a254a340f4d87e81`;
    return url;
}

export function convertQualityURL(location) {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?${location.lat}&${location.lon}&hourly=pm10,pm2_5,us_aqi&current=us_aqi`;
    return url;
}
