let d = document.getElementById("date");
let m = document.getElementById("month");
let y = document.getElementById("year");
let result = document.getElementById("result");

let btn = document.getElementById("btn");

let print = (event) => {
  event.preventDefault();
  if(d.value < 32 && m.value <=12 && y.value >= 1000 && y.value <= new Date().getFullYear()){
    let bd = y.value + "-" + m.value + "-" + d.value;


  let birthdate = new Date(bd);
  let currentDate = new Date();

  let difference = currentDate - birthdate;
  let millisecondsPerDay = 24 * 60 * 60 * 1000; // 24 hours in a day
  let millisecondsPerMonth = 30.44 * millisecondsPerDay;
  let millisecondsPerYear = 365.25 * millisecondsPerDay;

  let years = Math.floor(difference / millisecondsPerYear);
  let remainingMilliseconds = difference % millisecondsPerYear;

  let months = Math.floor(remainingMilliseconds / millisecondsPerMonth);

  let remainingDays = Math.floor(
    (remainingMilliseconds % millisecondsPerMonth) / millisecondsPerDay
  );

  let totalDays = Math.floor(difference / millisecondsPerDay);
  let totalMonth = Math.floor(difference / millisecondsPerMonth);
  let diffMonth = difference % millisecondsPerMonth;
  let remDay = Math.floor(diffMonth / millisecondsPerDay);

  let hours = Math.floor(difference / 3600000);
  let minutes = Math.floor(difference / 60000);
  let seconds = Math.floor(difference / 1000);

  result.innerHTML = `Exact age in different units: <br /> 
  <div>
    <p class="pera">= ${years < 9 ? "0" + years : years}</p>
    Years
    <p class="pera"> ${months < 9 ? "0" + months : months}</p>
    Months
    <p class="pera"> ${
      remainingDays < 9 ? "0" + remainingDays : remainingDays
    }</p>
    Days
  </div>
  
  <div>
    <p class="pera">= ${totalMonth}</p>
    Months
    <p class="pera"> ${remDay}</p>
    Days
  </div>
  
  <div>
    <p class="pera">= ${totalDays}</p>
    Days
  </div>
  </br>
  <div>
    <p class="pera">= ${hours}</p>
    Hours
  </div>
  <div>
  <p class="pera">= ${minutes}</p>
  Minutes
</div>
<div>
<p class="pera">= ${seconds}</p>
Seconds
</div>`;}
else{
  alert('Enter Valid BirthDate')
}
};

btn.addEventListener("click", print);
