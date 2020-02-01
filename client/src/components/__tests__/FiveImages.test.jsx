/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import FiveImages from '../FiveImages.jsx';

const viewSelectHandler = jest.fn();
const clickedImageHandler = jest.fn();
const listingObj = {
  listing_images: [
    { id: 1, url: 'a?b' },
    { id: 2, url: '' },
    { id: 3, url: '' },
    { id: 4, url: '' },
    { id: 5, url: '' },
  ],
};

describe('FiveImages Unit Tests', () => {
  afterEach(cleanup);

  it('it renders', () => {
    const { getByTestId } = render(<FiveImages
      viewSelectHandler={viewSelectHandler}
      clickedImageHandler={clickedImageHandler}
      listingObj={listingObj}
    />);

    expect(getByTestId('big')).toBeDefined();
    expect(getByTestId('small1')).toBeDefined();
    expect(getByTestId('small2')).toBeDefined();
    expect(getByTestId('small3')).toBeDefined();
    expect(getByTestId('small4')).toBeDefined();
  });

  it('image source urls are correctly loaded', () => {
    const { getByTestId } = render(<FiveImages
      viewSelectHandler={viewSelectHandler}
      clickedImageHandler={clickedImageHandler}
      listingObj={listingObj}
    />);

    expect(getByTestId('big').getAttribute('src')).toBe('a?aki_policy=xx_large');
    expect(getByTestId('small1').getAttribute('src')).toBe('https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/2.jpg');
    expect(getByTestId('small2').getAttribute('src')).toBe('https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/3.jpg');
    expect(getByTestId('small3').getAttribute('src')).toBe('https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/4.jpg');
    expect(getByTestId('small4').getAttribute('src')).toBe('https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/5.jpg');
  });

  it('view toggle function is invoked upon user click', () => {
    const { getByTestId } = render(<FiveImages
      viewSelectHandler={viewSelectHandler}
      clickedImageHandler={clickedImageHandler}
      listingObj={listingObj}
    />);

    fireEvent.click(getByTestId('big'));
    fireEvent.click(getByTestId('small1'));
    fireEvent.click(getByTestId('small2'));
    fireEvent.click(getByTestId('small3'));
    fireEvent.click(getByTestId('small4'));
    expect(viewSelectHandler).toHaveBeenCalledTimes(5);
  });
});
