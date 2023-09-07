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
setInterval(updateTime, 1000);
