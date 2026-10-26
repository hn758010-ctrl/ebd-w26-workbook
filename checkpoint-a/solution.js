
import { findOrderById, findAllOrders } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "paid"
  );
}

export function summarize(orders) {
  return orders.reduce((total, order) => {
    return total + order.price * order.quantity;
  }, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `Order ${id} not found`;
  }
}

export function toJsonLines(orders) {
  const simplifiedOrders = orders.map((order) => ({
    student: order.student,
    item: order.item
  }));

  return JSON.stringify(simplifiedOrders);
}
