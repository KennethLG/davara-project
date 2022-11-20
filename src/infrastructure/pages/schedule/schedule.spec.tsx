import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Schedule } from './schedule';

describe('Schedule', () => {
  it('Should render content correctly', () => {
    render(<Schedule />);
    screen.getByText('Schedule');
  });
});
