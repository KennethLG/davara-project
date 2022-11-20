import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Conferences } from './conferences';

describe('Conferences', () => {
  it('Should render content correctly', () => {
    render(<Conferences />);
    screen.getByText('Conferences');
  });
});
