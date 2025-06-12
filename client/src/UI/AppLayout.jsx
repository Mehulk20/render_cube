import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function AppLayout() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] bg-black">
      <Header />
      <main className="mt-1 w-full md:mx-auto md:max-w-5xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
