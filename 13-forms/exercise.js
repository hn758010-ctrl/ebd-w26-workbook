/**
 * Reads what is currently typed into the two boxes.
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

/**
 * Empties both boxes.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing the old cards.
 */
export function renderList(items) {
  const list = document.querySelector("#list");
  list.replaceChildren();

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `${item.price} EGP`;

    card.append(heading, price);
    list.append(card);
  });
}

/**
 * Connects the form submission to validation and rendering.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");
  const items = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();
    const priceInput = document.querySelector("#price");

    if (name === "") {
      error.textContent = "Give the product a name.";
      return;
    }

    if (
      priceInput.value.trim() === "" ||
      !Number.isFinite(price) ||
      price <= 0
    ) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}