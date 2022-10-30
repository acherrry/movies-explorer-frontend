export const durationConversion = (duration) => {
  const numberOfHours = Math.floor(duration / 60);
  const numberOfMinutes = duration - numberOfHours * 60;
  if (numberOfHours <= 0) {
    return `${numberOfMinutes}м`
  } else if (numberOfMinutes === 0) {
    return `${numberOfHours}ч`
  }
  return `${numberOfHours}ч ${numberOfMinutes}м`
}