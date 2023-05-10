const enddate = "25 May 2023 2:00 AM";
document.getElementById("enddate").innerText = enddate;
const inputs = document.querySelectorAll("input");
function clock() {
  const end = new Date(enddate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) return;
  //   console.log(diff);
  //converting into days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //conerting into hours
  inputs[1].value = Math.floor(diff / 3600) % 24;
  //converting into min
  inputs[2].value = Math.floor(diff / 60) % 60;
  //calculating into second
  inputs[3].value = Math.floor(diff) % 60;
}
clock();
setInterval(() => {
  clock();
}, 1000);
