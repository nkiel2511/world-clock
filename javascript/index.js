function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");

  let losAngelesCurrent = moment.tz("America/Los_Angeles");

  losAngelesDate.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesCurrent.format(
    "h:MM:ss[<small>] A[</small>]"
  );

  let SydneyElement = document.querySelector("#sydney");
  let SydneyDate = SydneyElement.querySelector(".date");
  let SydneyTime = SydneyElement.querySelector(".time");

  let SydneyCurrent = moment.tz("Australia/Sydney");

  SydneyDate.innerHTML = moment().format("MMMM Do YYYY");
  SydneyTime.innerHTML = SydneyCurrent.format("h:MM:ss[<small>] A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
