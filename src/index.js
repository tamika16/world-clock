function updateTime() {
  let pittsburghElement = document.querySelector("#pittsburgh");
  if (pittsburghElement) {
    let pittsburghDateElement = pittsburghElement.querySelector(".date");
    let pittsburghTimeElement = pittsburghElement.querySelector(".time");
    let pittsburghTime = moment().tz("America/New_York");

    pittsburghDateElement.innerHTML = pittsburghTime.format("MMMM Do, YYYY");
    pittsburghTimeElement.innerHTML = pittsburghTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do, YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let memmingenElement = document.querySelector("#memmingen");
  if (memmingenElement) {
    let memmingenDateElement = memmingenElement.querySelector(".date");
    let memmingenTimeElement = memmingenElement.querySelector(".time");
    let memmingenTime = moment().tz("Europe/Berlin");

    memmingenDateElement.innerHTML = memmingenTime.format("MMMM Do, YYYY");
    memmingenTimeElement.innerHTML = memmingenTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = event.target.options[event.target.selectedIndex].text;
  let cityDisplayElement = document.querySelector("#cities-display");
  cityDisplayElement.innerHTML = `
  <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
    </div>
    <hr />
    <center><a href="https://worldclocktamika.netlify.app/">All cities</a></center>
  `;
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
