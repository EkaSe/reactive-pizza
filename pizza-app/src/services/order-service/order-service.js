import { isEqual } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export function findOrderItem(order, pizza, options) {
  return order.find((item) => item.pizza.id === pizza.id && isEqual(item.options, options));
}

export const addToOrder = (order, pizza, options, increment) => {
  const itemToUpdate = findOrderItem(order, pizza, options);

  if (!itemToUpdate) {
    return [...order,
      {
        itemId: uuidv4(),
        pizza,
        options,
        amount: increment,
      }]
      .filter((item) => item.amount > 0);
  }

  return order
    .map((item) => (item.itemId === itemToUpdate.itemId
      ? { ...item, amount: item.amount + increment }
      : { ...item }))
    .filter((item) => item.amount > 0);
};

export const adjustOrderAmount = (order, orderItemId, increment) => order
  .map((item) => (item.itemId === orderItemId
    ? { ...item, amount: item.amount + increment }
    : { ...item }))
  .filter((item) => item.amount > 0);
