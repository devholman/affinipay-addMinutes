const getMinutesToHours = mins => {
  const hours = mins / 60;
  return Math.trunc(hours);
};
const getRemainingMinutes = mins => {
  return (remainingMinutes = mins % 60);
};

function addMinutes(time = '', addedMinutes = 0) {
  if (typeof addedMinutes !== 'number') {
    return 'Enter valid minutes input';
  }
  const timeSplit = time.split(':');
  const originalHours = parseInt(timeSplit[0]);
  const originalMinutes = parseInt(timeSplit[1]);
  const totalMinutes = originalMinutes + addedMinutes;
  const addedHours = getMinutesToHours(totalMinutes);
  const remainingMinutes = getRemainingMinutes(totalMinutes);
  let finalHours = originalHours + addedHours;
  let finalMinutes = (remainingMinutes < 10 ? '0' : '') + remainingMinutes;
  let meridiem = finalHours < 12 ? 'AM' : 'PM';

  //convert to single digit hours
  if (finalHours > 12) {
    finalHours = finalHours - 12;
  }
  //show 12 rather than 0 if there are no hours
  if (finalHours === 0) {
    finalHours = 12;
  }

  return `${finalHours}:${finalMinutes} ${meridiem}`;
}

module.exports = { addMinutes, getRemainingMinutes, getMinutesToHours };
