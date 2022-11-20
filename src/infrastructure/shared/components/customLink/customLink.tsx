import { Link } from 'react-router-dom';

interface ICustomLink {
  children: React.ReactNode;
  to: string;
}

export const CustomLink = ({ children, to }: ICustomLink) => {
  return (
    <Link className='text-black' to={to}>
      {children}
    </Link>
  );
};
