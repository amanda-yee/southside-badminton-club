import './App.css';
import { FacebookIcon, PhoneIcon, EmailIcon, PinIcon, DiagonalArrowIcon } from './components/Icons';

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <header className="flex items-start gap-5 sm:p-12 sm:pb-0 font-[family-name:var(--font-geist-sans)]">
          
          <img src={`${process.env.PUBLIC_URL}/southside-logo.png`} 
               alt="Southside Badminton Club Logo" 
               width="125" height="125"
               className="flex-shrink-0" 
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
                Southside Badminton Club Gold Coast
            </h1>
            <p>
              We are a non-profit social badminton club. All levels of players are welcome. Come and join us for fun, fitness and meeting friends!
            </p>
          </div>

        <a className="absolute top-5 right-5 bg-[#5be0e6] inline-flex gap-2 font-bold py-2 px-3 rounded hover:text-[#FFFFFF]" 
           href="https://events.humanitix.com/southside-badminton-club-session-booking"
           target="_blank"
          >
          BOOK NOW <DiagonalArrowIcon />
        </a>
      </header>

      <main className="p-8 sm:p-12">
        Main content
      </main>

      <footer className="grid grid-cols-3 text-sm text-gray-600 p-4 bg-[#75b9bc] text-[#ffffff]">
        <div>
          <p className="font-bold">Business Hours:</p>
          <ul>
            <li>Mon - Thu: 7:30 PM - 9:30 PM</li>
            <li>Sat: 7:30 PM - 9:30 PM</li>
            <li>Fri & Sun: Closed</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Contact Us:</p>
          <ul >
            <li className="flex items-center gap-2"><PhoneIcon />+61 419 002 098</li>
            <li className="flex items-center gap-2"><EmailIcon /> southsidebadmintonclub@gmail.com</li>
            <li className="flex items-center gap-2"><PinIcon />Lot 22 Assembly Drive, Varsity Lakes QLD 4227, Australia</li>
          </ul>
        </div>
        {/* items-end push to right, justify-end pushes to bottom */}
        <div className="text-right flex flex-col gap-3 items-end justify-end ">
          <div className="flex items-center gap-10">
            <a className="inline-flex font-bold gap-2 py-1 px-3 rounded hover:text-[#FFFFFF]" 
                href="https://events.humanitix.com/southside-badminton-club-session-booking"
                target="_blank"
            >
              BOOK NOW <DiagonalArrowIcon />
            </a>

            <a href="https://www.facebook.com/p/Southside-Badminton-Club-Gold-Coast-100033686513550/" target="_blank">
              <FacebookIcon />
            </a> 
          </div>
          
          <span>&copy; Azzurra Studios 2025</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
