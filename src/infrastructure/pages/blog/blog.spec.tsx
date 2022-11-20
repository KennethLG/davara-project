import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Blog } from './blog';

describe('Blog', () => {
  it('Should render content correctly', () => {
    render(<Blog />);
    screen.getByText('Blog');
  });
});
