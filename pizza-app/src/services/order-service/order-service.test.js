import { addToOrder, findOrderItem } from './order-service';
import '@testing-library/jest-dom/extend-expect';

jest.mock('uuid', () => ({
  v4: () => 'test-uuid',
}));

describe('Order service', () => {
  const orders = [
    {
      itemId: '1',
      pizza: { id: 1 },
      options: [1, 2, 3],
      amount: 2,
    },
    {
      itemId: '2',
      pizza: { id: 1 },
      options: [1],
      amount: 2,
    },
    {
      itemId: '3',
      pizza: { id: 2 },
      amount: 2,
    },
  ];

  it('finds order item', () => {
    const result = findOrderItem(orders, { id: 1 }, [1]);

    expect(result).not.toBeNull();
    expect(result.itemId).toEqual('2');
  });

  it('returns undefined if finds no order item', () => {
    const result = findOrderItem(orders, { id: 1 }, [1, 2]);
    expect(result).toBeUndefined();
  });

  it('increments amount of the existing order item', () => {
    const result = addToOrder(orders, { id: 1 }, [1], 1);

    const expectedResult = [
      {
        itemId: '1',
        pizza: { id: 1 },
        options: [1, 2, 3],
        amount: 2,
      },
      {
        itemId: '2',
        pizza: { id: 1 },
        options: [1],
        amount: 3,
      },
      {
        itemId: '3',
        pizza: { id: 2 },
        amount: 2,
      },
    ];
    expect(result).toEqual(expectedResult);
  });

  it('adds order item if not exists', () => {
    const result = addToOrder(orders, { id: 1 }, [1, 2], 1);

    const expectedResult = [
      {
        itemId: '1',
        pizza: { id: 1 },
        options: [1, 2, 3],
        amount: 2,
      },
      {
        itemId: '2',
        pizza: { id: 1 },
        options: [1],
        amount: 2,
      },
      {
        itemId: '3',
        pizza: { id: 2 },
        amount: 2,
      },
      {
        itemId: 'test-uuid',
        pizza: { id: 1 },
        options: [1, 2],
        amount: 1,
      },
    ];

    expect(result).toEqual(expectedResult);
  });

  it('removes order item if reduced to 0', () => {
    const result = addToOrder(orders, { id: 1 }, [1], -2);

    const expectedResult = [
      {
        itemId: '1',
        pizza: { id: 1 },
        options: [1, 2, 3],
        amount: 2,
      },
      {
        itemId: '3',
        pizza: { id: 2 },
        amount: 2,
      },
    ];

    expect(result).toEqual(expectedResult);
  });
});
