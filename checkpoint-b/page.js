
import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.replaceChildren();

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("listing");
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.append(li);
  });
}

export function matching() {
  return items.filter((item) => item.category === "stationery");
}

export function start() {
  renderItems(items);

  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}
