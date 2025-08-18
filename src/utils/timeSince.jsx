
export const timeSince = (date) => {

  const second = Math.floor((new Date().valueOf() - date.valueOf())/1000);

  let interval = second/31536000; //convert to seconds in a year

  if (interval > 1) {
    return Math.floor(interval) + "years";
  }

  interval = second/2592000; //months

  if (interval > 1) {
    return Math.floor(interval) + "months";
  }

  interval = second/86400; //days

  if(interval>1) {
    return Math.floor(interval) + "days";
  }

  interval = second/3600; //hours

  if(interval>1) {
    return Math.floor(interval) + "hours"
  }


  interval = second/60; //minutes

  if(interval > 1) {
    return Math.floor(interval) + "minutes"
  }

  return Math.floor(second) + "seconds";

}
