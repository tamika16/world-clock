function updateTime() {
  let pittsburghElement = document.querySelector("#pittsburgh");
  let pittsburghDateElement = pittsburghElement.querySelector(".date");
  let pittsburghTimeElement = pittsburghElement.querySelector(".time");
  let pittsburghTime = moment().tz("America/New_York");

  pittsburghDateElement.innerHTML = pittsburghTime.format("MMMM Do, YYYY");
  pittsburghTimeElement.innerHTML = pittsburghTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do, YYYY");
  seoulTimeElement.innerHTML = seoulTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
