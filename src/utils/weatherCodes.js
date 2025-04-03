import {formatTime} from "./date";

export const weatherMap = new Map([
    ["0", "Clear sky"],
    ["1", "Mainly clear"],
    ["2", " Partly cloudy"],

    ["3", "Overcast"],
    ["45", "Fog"],
    ["48", "Depositing Rime Fog"],

    ["51", "Light Drizzle"],
    ["53", "Moderate Drizzle"],
    ["55", "Heavy Drizzle"],

    ["56", "Light Freezing Drizzle"],
    ["57", "Heavy Freezing Drizzle"],

    ["61", "Light Rain"],
    ["63", "Moderate Rain"],
    ["65", "Heavy Rain"],

    ["71", "Light Snow"],
    ["73", "Moderate Snow"],
    ["75", "Heavy Snow"],

    ["95", "Thunderstorm"],
]);
export const dayImgMap = new Map([
    ["0", "Day"],
    ["1", "CloudDay"],
    ["2", "CloudDay"],

    ["3", "CloudDay"],
    ["45", "Cloudy"],
    ["48", "Cloudy"],

    ["51", "RainyDay"],
    ["53", "RainyDay"],
    ["55", "RainyDay"],

    ["56", "faSnowflake"],
    ["57", "faSnowflake"],

    ["61", "RainyDay"],
    ["63", "RainyDay"],
    ["65", "RainyDay"],
    ["95", "Thunder"],
    ["71", "SnowDay"],
    ["73", "SnowDay"],
    ["75", "SnowDay"],
]);

export const nightImgMap = new Map([
    ["0", "Night"],
    ["1", "CloudyNight"],
    ["2", "CloudyNight"],

    ["3", "CloudyNight"],
    ["45", "Cloudy"],
    ["48", "Cloudy"],

    ["51", "RainyNight"],
    ["53", "RainyNight"],
    ["55", "RainyNight"],

    ["61", "RainyNight"],
    ["63", "RainyNight"],
    ["65", "RainyNight"],
    ["95", "Thunder"],
    ["71", "SnowNight"],
    ["73", "SnowNight"],
    ["75", "SnowNight"],
]);

export function mapWeatherImg(code, isDay) {
    if (isDay === 1) {
        return dayImgMap.get(code.toString());
    }
    return nightImgMap.get(code.toString());
}
export function threeHourForecast(weather) {
    let arr = [];
    for (let i = 0; i < weather.hourly.time.length; i += 3) {
        let time = weather.hourly.time[i].split("T")[1];
        let obj = {
            time: formatTime(time),
            temp: `${weather.hourly.temperature_2m[i]} ${weather.hourly_units.temperature_2m}`,
            icon: mapWeatherImg(
                weather.hourly.weather_code[i],
                weather.hourly.is_day,
            ),
        };
        arr.push(obj);
    }
    return arr;
}
