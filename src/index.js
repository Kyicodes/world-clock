updateTime();
function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector("#la-date");
  let losAngelesTimeElement = document.querySelector("#la-time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("LL");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Sydney
  let SydneyElement = document.querySelector("#sydney");
  let SydneyDateElement = document.querySelector("#sydney-date");
  let SydneyTimeElement = document.querySelector("#sydney-time");
  let sydneyTime = moment().tz("Australia/Sydney");

  SydneyDateElement.innerHTML = sydneyTime.format("LL");
  SydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone == "Current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let selectedOption = citySelect.options[citySelect.selectedIndex];
  let selectedCityName = selectedOption.textContent;

  let citySelectElement = document.querySelector("#citiesDisplay");
  citySelectElement.innerHTML = `
             <div class="city">
            <div>
            <h2>${selectedCityName}</h2>
            <div class="date">${cityTime.format("LL")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All Cities</a>
  `;
}

let citySelect = document.querySelector("#city");

citySelect.addEventListener("change", updateCity);

setInterval(updateTime, 1000);
