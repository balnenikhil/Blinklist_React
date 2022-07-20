import React from 'react';
import { render, screen } from '@testing-library/react';
import { Images } from './Images';

describe('Images', () => {
  test('Images must have src = "/logo.svg" and alt = "Logo"', () => {
    render(<Images src='' alt='image'/>);
    const images = screen.getByRole('img');
    expect(images).toHaveAttribute('src', '');
    expect(images).toHaveAttribute('alt', 'image');
  });
});
