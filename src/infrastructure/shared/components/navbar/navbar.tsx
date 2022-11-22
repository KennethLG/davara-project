import { Logo } from './logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { CustomLink } from '../customLink';
import { NavList } from './list';

export const Navbar = () => {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const switchNavbarMenu = () => () => setShowNavbarMenu(!showNavbarMenu);

  return (
    // a div that changes the height smoothly
    <nav
      className={
        'overflow-hidden select-none fixed top-0 left-0 p-3 my-auto w-full border border-slate-300 transition-[max-height] ease-in-out duration-500'
      }
    >
      <div className='flex flex-row justify-around items-center gap-x-2'>
        <CustomLink to='/'>
          <Logo />
        </CustomLink>
        <h2>Davara</h2>

        <GiHamburgerMenu
          className='cursor-pointer'
          data-testid='hamburger-menu'
          onClick={switchNavbarMenu()}
        />
      </div>
      <NavList display={showNavbarMenu} handleClick={switchNavbarMenu()} />
    </nav>
  );
};
