export function getDayName(dateStr) {
    var date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {weekday: "long"});
}
export function formatTime(time) {
    const [hourString, minute] = time.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
}
