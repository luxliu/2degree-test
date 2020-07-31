import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Board, { BoardProps } from './Board.component';

const testProps: BoardProps = {
  pieces: ['O', 'O', 'X', 'X', 'O', 'O', 'X', null, null],
  onClick: jest.fn(),
};

describe('test Board component', () => {
  it('should render the correct Board', () => {
    const wrapper = render(<Board {...testProps} />);
    const oPieces = wrapper.getAllByText('O');
    const xPieces = wrapper.getAllByText('X');

    expect(oPieces.length).toEqual(4);
    expect(xPieces.length).toEqual(3);

    fireEvent.click(oPieces[0]);
    expect(testProps.onClick).toHaveBeenCalledWith(0);
  });
});
