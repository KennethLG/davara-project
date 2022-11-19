import { Logo } from './logo';

export const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 p-3 my-auto w-full border border-slate-300 flex items-center gap-x-2'>
      <Logo />
      <h2>this is a navbarrr</h2>
    </div>
  );
};
