import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
