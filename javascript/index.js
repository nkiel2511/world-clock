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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityCurrent = moment().tz(cityTimeZone);

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityDisplay = document.querySelector("#cities");
  cityDisplay.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityCurrent.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityCurrent.format(
          "h:MM:ss[<small>] A[</small>]"
        )}</div>
      </div>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
