import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Router from './router';

describe('Router component', () => {
  it('Should render content correctly', () => {
    render(<Router />);
  });
});
