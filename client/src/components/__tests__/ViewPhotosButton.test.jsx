/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ViewPhotosButton from '../ViewPhotosButton.jsx';

const viewSelectHandler = jest.fn();

describe('ViewPhotosButton Unit Tests', () => {
  afterEach(cleanup);

  it('it renders', () => {
    const { getByText } = render(<ViewPhotosButton
      viewSelectHandler={viewSelectHandler}
    />);

    getByText(/View Photos/i);
  });

  it('view toggle function is invoked upon user click', () => {
    const { getByText } = render(<ViewPhotosButton
      viewSelectHandler={viewSelectHandler}
    />);

    fireEvent.click(getByText(/View Photos/i));
    expect(viewSelectHandler).toHaveBeenCalledTimes(1);
  });
});
