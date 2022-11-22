import { CustomLink } from '../customLink/customLink';

interface IList {
  display: boolean;
  handleClick: () => void;
}

export const NavList = ({ display, handleClick }: IList) => {
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

  if (!display) {
    return <></>;
  }

  return (
    <div className='flex flex-col items-start my-2'>
      {routes.map((route, i) => (
        <CustomLink key={i} to={route.link}>
          <article onClick={handleClick} className='px-8 py-1'>
            {route.title}
          </article>
        </CustomLink>
      ))}
    </div>
  );
};
