"use strict";

import { Store, list } from "./store.js";
import { generateId } from "./utils.js";

function createItem() {
  let item = new Store();

  list.push(item);

  item.displayTime();

  const btnsMode = document.querySelectorAll(".btn__nav-timer");

  for (let btnMode of btnsMode) {
    btnMode.addEventListener("click", (e) => {
      item.switchMode(e.target, item.id);

      if (item.modeStatus === e.target.id) {
        e.target.className += " active";
      }
    });
  }

  // btnsMode.forEach((element) => {
  //   console.log(element.id);

  //   console.log(item.id);
  //   element.id == item.modeStatus ? (element.className += " active") : null;
  // });

  document
    .querySelector(".btn__start-stop")
    .addEventListener("click", () => timer.startTimer(list[0].pomodoro));
}

createItem();

// const timer = {
//   pomodoro: 25,
//   shortBreak: 5,
//   longBreak: 15,
//   longBreakinterval: 4,
// };

// let interval;

// btnStartStop = document.querySelector(".btn__start-stop");
// // переключение кнопок (mode)
// switchMode();

// const btnsNavTimer = document.querySelectorAll(".btn__nav-timer");

// function updateTime() {
//   const { timeLeft } = timer;
//   const minutes = `${timeLeft.minutes}`.padStart(2, "0");
//   const seconds = `${timeLeft.seconds}`.padStart(2, "0");

//   const min = document.querySelector("#minutes");
//   const sec = document.querySelector("#seconds");

//   min.textContent = minutes + " :";
//   sec.textContent = seconds;
// }

// function switchMode(mode = "pomodoro") {
//   timer.mode = mode;
//   timer.timeLeft = {
//     total: timer[mode] * 60,
//     minutes: timer[mode],
//     seconds: 0,
//   };

// document
//   .querySelectorAll(".btn__nav-timer")
//   .forEach((e) => e.classList.remove("active"));
// document.querySelector(`#${mode}`).classList.add("active");
// let classPage = document.querySelector(".page");
// classPage.style.backgroundColor = `var(--${mode})`;

//   updateTime();
// }

// for (let btnNavTimer of btnsNavTimer) {
//   btnNavTimer.addEventListener("click", (e) => {
//     const mode = e.target.id;

//     if (!mode) return;

//     switchMode(mode);
//   });
// }

// // реализация таймера

// //интервал

// function getInterval(endTime) {
//   const currentTime = Date.parse(new Date()),
//     differenceTime = endTime - currentTime,
//     total = Number.parseInt(differenceTime / 1000, 10),
//     minutes = Number.parseInt((total / 60) % 60, 10),
//     seconds = Number.parseInt(total % 60, 10);

//   return { total, minutes, seconds };
// }

// function startTimer() {
//   let { total } = timer.timeLeft;
//   const endTime = Date.parse(new Date()) + total * 1000;

//   btnStartStop.dataset.mode = "stop";
//   btnStartStop.textContent = "Stop";

//   interval = setInterval(() => {
//     timer.timeLeft = getInterval(endTime);
//     updateTime();

//     total = timer.timeLeft.total;
//     if (total <= 0) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// function stopTimer() {
//   console.log(interval);
//   clearInterval(interval);

//   btnStartStop.dataset.mode = "start";
//   btnStartStop.textContent = "Start";
// }

// btnStartStop.addEventListener("click", () => {
//   if (btnStartStop.dataset.mode === "Start") {
//     startTimer();
//   }
//   if (btnStartStop.textContent === "Stop") {
//     stopTimer();
//   }
// });
