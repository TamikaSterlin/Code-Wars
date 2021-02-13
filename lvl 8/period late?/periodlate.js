function periodIsLate(last, today, cycleLength) {
  let dayDifference = (today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)
  if (dayDifference > cycleLength) {
    return true;
  } else {
    return false;
  }
}
