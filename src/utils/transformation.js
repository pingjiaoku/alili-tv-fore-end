const numberConversion = (number) => {
  if (number < 10000) {
    return number;
  } else if (number >= 10000 && number < 100000000) {
    return (number / 10000).toFixed(1) + "万";
  } else {
    return (number / 100000000).toFixed(1) + "亿";
  }
};

const timeConversion = (time) => {
  let timeStr = ((time % 60) + "").padStart(2, "0");
  let tmp = (time / 60).toFixed();
  if (tmp > 0) {
    timeStr = ((tmp % 60) + "").padStart(2, "0") + ":" + timeStr;
    tmp = (tmp / 60).toFixed();
  }
  if (tmp > 0) {
    timeStr = tmp + ":" + timeStr;
  }
  return timeStr;
};

const now = new Date();
const dateConversion = (date) => {
  if (date == "" || typeof date == "undefined") {
    return date;
  }
  date = date + "";
  date = date.substring(0, date.indexOf(" "));

  date = date.split("-");
  for (let i = 0; i < date.length; i++) {
    date[i] = date[i].charAt(0) == "0" ? date[i].substring(1) : date[i];
  }
  if (date[0] == now.getFullYear()) {
    return date[1] + "-" + date[2];
  } else {
    return date.join("-");
  }
};

export { numberConversion, timeConversion, dateConversion };
