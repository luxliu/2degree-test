import React from 'react';
import { renderWithRedux, fireEvent, RenderResult } from 'src/utils/test';

import Game from './Game.container';

let wrapper: RenderResult;
let squares: HTMLElement[];

describe('test Square component', () => {
  beforeEach(() => {
    wrapper = renderWithRedux(<Game />);
    squares = wrapper.getAllByTestId('square');
  });

  it('should render the correct Game', () => {
    expect(squares[0]).toBeInTheDocument();
    expect(squares.length).toEqual(9);
  });

  it('click square should put correct piece and check winner', () => {
    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent('O');

    fireEvent.click(squares[0]);
    expect(wrapper.getAllByText('O').length).toEqual(1);

    fireEvent.click(squares[1]);
    expect(squares[1]).toHaveTextContent('X');

    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[6]);
    expect(wrapper.getByText('Winner: O')).toBeInTheDocument();
  });
});
