/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { act, render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from "axios";
import App from '../App.jsx';


describe("App Unit Tests", () => {
  afterEach(cleanup);

  it('Async axios request works', async () => {
    axiosMock.get.mockResolvedValue({ data: { title: 'some title' } })

    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const { getByText } = render(<App url={url} />);

    expect(getByText(/Loading.../i).textContent).toBe("Loading...");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });


});
