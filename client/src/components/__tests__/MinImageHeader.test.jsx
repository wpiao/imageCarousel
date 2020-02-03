/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import MinImageHeader from '../MinImageHeader.jsx';

const listingObj = { listing_images: [{ id: 1 }] };

describe('MinImageHeader Unit Tests', () => {
  afterEach(cleanup);

  it('it renders', () => {
    const { getByTestId } = render(<MinImageHeader
      listingObj={listingObj}
    />);

    getByTestId('image');
  });

  it('background image source urls are correctly loaded', () => {
    const { getByTestId } = render(<MinImageHeader
      listingObj={listingObj}
    />);

    expect(getByTestId('image').getAttribute('id')).toBe('1');
  });
});
