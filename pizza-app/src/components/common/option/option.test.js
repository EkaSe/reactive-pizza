import React from 'react';
import { Option } from './option.component';
import { render, unmountComponentAtNode } from "react-dom";
import '@testing-library/jest-dom/extend-expect';

describe('Option component', () => {
  let container = null;
  beforeAll(() => {
    // Silence the console to avoid littering with "Warning: ReactDOM.render is no longer supported in React 18."
    // Updating to createRoot approach causes circular dependency issue https://github.com/facebook/jest/issues/10577
    jest.spyOn(console, "error").mockImplementation();
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders sussessfully', () => {  
    render(
      <Option
        title={"Cheese"}
        price={1}
        isEnabled={true}
        addOption={jest.fn()}
        removeOption={jest.fn()}/>, 
        container);

    expect(container.querySelector("[data-testid='option-container']")).not.toBeNull();
  });
});