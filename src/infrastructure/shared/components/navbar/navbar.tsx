import { Logo } from './logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { CustomLink } from '../customLink/customLink';

export const Navbar = () => {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const routes = [
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Casos de estudio',
      link: '/casos-de-estudio',
    },
    {
      title: 'Consultas',
      link: '/consultas',
    },
    {
      title: 'Hablemos',
      link: '/conferencias',
    },
  ];

  return (
    <div className='fixed top-0 left-0 p-3 my-auto w-full border border-slate-300'>
      <div className='flex flex-row justify-around items-center gap-x-2'>
        <Logo />
        <h2>Davara</h2>

        <GiHamburgerMenu onClick={() => setShowNavbarMenu(!showNavbarMenu)} />
      </div>
      {showNavbarMenu && (
        <section className='flex flex-col items-start my-2'>
          {routes.map((route, i) => (
            <CustomLink key={i} to={route.link}>
              <article className='px-8 py-1'>{route.title}</article>
            </CustomLink>
          ))}
        </section>
      )}
    </div>
  );
};
