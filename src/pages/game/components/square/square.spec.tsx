import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Square, { SquareProps } from './Square.component';

const testProps: SquareProps = {
  piece: 'O',
  onClick: jest.fn(),
};

describe('test Square component', () => {
  it('should render the correct Square', () => {
    const wrapper = render(<Square {...testProps} />);
    const element = wrapper.getByText('O');

    expect(element).toBeInTheDocument();

    fireEvent.click(element);
    expect(testProps.onClick).toHaveBeenCalled();
  });
});
