const adv = document.getElementById("advice");
const getBtn = document.getElementById("new");

async function getData() {
  const req = await fetch("https://api.adviceslip.com/advice");
  const data = await req.json();

  return data;
}

getData().then((data) => {
  const { slip } = data;
  const { advice } = slip;
  adv.innerHTML = advice;
});

getBtn.addEventListener("click", () => {
  getData().then((data) => {
    const { slip } = data;
    const { advice } = slip;
    adv.innerHTML = advice;
  });
});
