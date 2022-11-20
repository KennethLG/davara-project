import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from './home';

describe('Home', () => {
  it('Should render content correctly', () => {
    render(<Home />);
    screen.getByText('Home');
  });
});
