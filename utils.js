import { list } from "./store.js";

export function generateId() {
  console.log(list);
  return Math.random();
  //   return Math.max(list.map((item) => item.id)) + 1;
}
