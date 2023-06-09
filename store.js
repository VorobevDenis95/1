import { generateId } from "./utils.js";

export let list = [];

function updateList(id, updateProp, updateValue) {
  // let updateElement = list.filter((element) => element.id === id)[0];
  // return [...list, updateElement];

  return list.map((element) => {
    if (element.id === id) {
      return { ...element, updateProp: updateValue };
    } else {
      return element;
    }
  });
}

export class Store {
  constructor() {
    (this.pomodoro = 25),
      (this.modeStatus = "pomodoro"),
      (this.shortBreak = 5),
      (this.longBreak = 15),
      (this.btnStartStatus = true),
      (this.id = generateId());
  }

  displayTime() {
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    minutes.textContent = `${this.pomodoro} :`;
    seconds.textContent = 0;
  }

  switchMode(e, id) {
    // let element = document.querySelector(`#${e.target.id}`);
    // const btns = document.querySelectorAll(".btn__nav-timer");
    // btns.forEach((item) => item.classList.remove("active"));
    // element.classList.add("active");
    // document.querySelector(
    //   ".page"
    // ).style.backgroundColor = `var(--${e.target.id})`;
    // document.querySelector(
    //   ".btn__start-stop"
    // ).style.color = `var(--${e.target.id})`;

    this.modeStatus = e.id;
    console.log(this.modeStatus);

    list = updateList(id, "modeStatus", this.modeStatus);
    console.log(list);
  }

  startTimer(timer) {
    console.log(timer);
    const startTime = new Date();
    console.log(startTime);
  }

  getRemaningTime() {
    console.log(timer);
    const t = date.parse(startTime) - Date.parse(new Date());
    (min = Math.floor((t / 1000 / 60) % 60)),
      (sec = Math.floor((t / 1000) % 60));

    return {
      total: t,
      minutes: min,
      seconds: sec,
    };
  }
}
