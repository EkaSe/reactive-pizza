import React from 'react';
import { Option } from './option.component';
import { render, unmountComponentAtNode } from "react-dom";
import '@testing-library/jest-dom/extend-expect';

describe('Option component', () => {
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

  it('renders sussessfully', () => {  
    render(
      <Option
        title={"Cheese"}
        price={1}
        isEnabled={true}
        addOption={jest.fn()}
        removeOption={jest.fn()}/>, 
        container);

    expect(container.getByTestId("options-container")).not.toBeNull();
  });
});