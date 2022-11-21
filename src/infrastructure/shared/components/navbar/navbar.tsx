import { Logo } from './logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { CustomLink } from '../customLink/customLink';
import { NavList } from './list';

export const Navbar = () => {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const switchNavbarMenu = () => () => setShowNavbarMenu(!showNavbarMenu);

  return (
    <nav className='fixed top-0 left-0 p-3 my-auto w-full border border-slate-300'>
      <div className='flex flex-row justify-around items-center gap-x-2'>
        <CustomLink to='/'>
          <Logo />
        </CustomLink>
        <h2>Davara</h2>

        <GiHamburgerMenu
          className='cursor-pointer'
          onClick={switchNavbarMenu()}
        />
      </div>
      <NavList display={showNavbarMenu} handleClick={switchNavbarMenu()} />
    </nav>
  );
};
