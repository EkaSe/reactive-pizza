import React from 'react';
import {AmountAdjuster} from './amount-adjuster.component';
import { render, unmountComponentAtNode } from "react-dom";
import '@testing-library/jest-dom/extend-expect';

describe('Amount Adjuster component', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders with zero amount', () => {  
    render(
      <AmountAdjuster 
          amount={0}
          onIncrement={jest.fn()} 
          onDecrement={jest.fn()}
          id={'id'}/>, 
        container);

    expect(container.querySelector("[data-testid='id-amount']").textContent).toEqual("0");
    expect(container.querySelector("[data-testid='id-minus']")).toHaveAttribute("disabled");
  });

  it('renders with non-zero amount', () => {  
    render(
      <AmountAdjuster 
          amount={7}
          onIncrement={jest.fn()} 
          onDecrement={jest.fn()}
          id={'id'}/>, 
        container);

    expect(container.querySelector("[data-testid='id-amount']").textContent).toEqual("7");
    expect(container.querySelector("[data-testid='id-minus']")).not.toHaveAttribute("disabled");
  });

  it('calls increment function', () => {  
    const incrementMock = jest.fn();
    
    render(
      <AmountAdjuster 
          amount={7}
          onIncrement={incrementMock} 
          onDecrement={jest.fn()}
          id={'id'}/>, 
        container);

    container.querySelector("[data-testid='id-plus']").dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(incrementMock).toBeCalledTimes(1);
  });

  it('calls decrement function', () => {  
    const decrementMock = jest.fn();
    
    render(
      <AmountAdjuster 
          amount={7}
          onIncrement={jest.fn()} 
          onDecrement={decrementMock}
          id={'id'}/>, 
        container);

    container.querySelector("[data-testid='id-minus']").dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(decrementMock).toBeCalledTimes(1);
  });
});