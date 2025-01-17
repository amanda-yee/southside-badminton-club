import './App.css';
import { GlobeIcon } from './components/Icons';

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="grid grid-rows-[20px_1fr_20px] items-center justify-items-left gap-4 sm:p-12 sm:pb-0 font-[family-name:var(--font-geist-sans)]">
        <h1 className="flex items-center gap-2 font-bold">
            Southside Badminton Club Gold Coast
            <GlobeIcon />
        </h1>
        <p className="italic">
          We are a non-profit social badminton club. 
          All levels of players are welcome. 
          Come and join us for fun, fitness and meeting friends!
        </p>
      </header>

      <main className="p-8 sm:p-12">
        Main content
      </main>

      <footer className="text-center text-sm text-gray-600 p-4">
        &copy; Amanda Yee 2025
      </footer>
    </div>
  );
}

export default App;
