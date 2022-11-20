import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StudyCases } from './study-cases';

describe('StudyCases', () => {
  it('Should render content correctly', () => {
    render(<StudyCases />);
    screen.getByText('StudyCases');
  });
});
