export function truncateDec(num, places) {
    return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
}

export function ftToMiles(ft) {
    return ft / 5280;
}
