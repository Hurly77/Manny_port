import Navbar from './components/navbar';

export default function AppLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <main className="h-[99.8vh] overflow-y-scroll">
      <Navbar />
      {children}
    </main>
  );
}
