/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Modal from '../Modal.jsx';

const viewSelectHandler = jest.fn();
const clickedImage = '0';
const listingObj = { listing_images: [{ id: 1, url: "a?a" }] };

describe('Modal Unit Tests', () => {
  afterEach(cleanup);

  it('it renders', () => {
    const { getByTestId } = render(<Modal
      viewSelectHandler={viewSelectHandler}
      clickedImage={clickedImage}
      listingObj={listingObj}
    />);

    getByTestId('closeBtn');
  });

  it('view toggle function is invoked upon clicking close button', () => {
    const { getByTestId } = render(<Modal
      viewSelectHandler={viewSelectHandler}
      clickedImage={clickedImage}
      listingObj={listingObj}
    />);

    fireEvent.click(getByTestId('closeBtn'));
    expect(viewSelectHandler).toHaveBeenCalledTimes(1);
  });
});
