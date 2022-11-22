import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { Navbar } from './navbar';

describe('Navbar component', () => {
  it('should render', () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    screen.getByText('Davara');
  });

  it('Should show navbar menu when clicking on hamburger menu', () => {
    const hamburgerMenu = screen.getByTestId('hamburger-menu');
    fireEvent.click(hamburgerMenu);
    screen.getByText('Blog');
    screen.getByText('Casos de estudio');
    screen.getByText('Consultas');
    screen.getByText('Hablemos');
  });
});
