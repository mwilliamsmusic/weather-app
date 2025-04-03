export function convertURL(location) {
    const latitude = "39.95"; //location[0].lat;
    const longitude = "-75.16"; //location[0].long;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_min,temperature_2m_max,uv_index_max&hourly=temperature_2m,wind_speed_10m,relative_humidity_2m,dew_point_2m,rain,showers,visibility,surface_pressure,uv_index,is_day,wind_direction_10m&current=temperature_2m,relative_humidity_2m,is_day,rain,showers,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
    return url;
}

export function locationURL(city) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=1ade1e2a20cba233a254a340f4d87e81`;
    return url;
}
