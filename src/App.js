import './App.css';
import { GlobeIcon } from './components/Icons';

function App() {
  return (
    <div>
      <header className="grid grid-rows-[20px_1fr_20px] items-center justify-items-left gap-4 sm:p-12 sm:pb-0 font-[family-name:var(--font-geist-sans)]">
        <h1 className="flex items-center gap-2 font-bold">
            Southside Badminton Club Gold Coast
            <GlobeIcon />
        </h1>
      </header>
    </div>
  );
}

export default App;
