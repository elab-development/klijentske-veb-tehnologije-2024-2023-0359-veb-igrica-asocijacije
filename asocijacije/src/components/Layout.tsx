import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
