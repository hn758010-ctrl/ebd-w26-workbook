/**
 * Adds one product card to the end of the list.
 */
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceElement = document.createElement("p");
  priceElement.classList.add("price");
  priceElement.textContent = `${price} EGP`;

  card.append(heading, priceElement);
  document.querySelector("#list").append(card);
}

/**
 * Removes the card with that name, if there is one.
 */
export function removeProduct(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find(
    (item) => item.querySelector("h3").textContent === name
  );

  if (card) {
    card.remove();
  }
}

/**
 * Marks the card as sold out.
 */
export function markSoldOut(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find(
    (item) => item.querySelector("h3").textContent === name
  );

  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every card from the list.
 */
export function clearProducts() {
  document.querySelector("#list").replaceChildren();
}

/**
 * Connects the Add and Reset buttons.
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}