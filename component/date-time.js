
export function convertUTCToDate(seconds, offsetSeconds) {
    return new Date(seconds + (offsetSeconds * 1000));
  }
  
  export function isDay(time, sunrise, sunset) {
    return (time > sunrise && time < sunset) ? true : false;
  }
  
  export function getDayString(day) {
    switch (day) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return 'NaD';
    }
  }
  
  export function getTimeString(time) {
    let minutes = time.getMinutes();
    let hours = time.getHours();
    hours = hours <= 9 ? `0${hours}` : hours;
    minutes = minutes <= 9 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  }