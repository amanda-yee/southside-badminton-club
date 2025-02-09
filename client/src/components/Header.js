import { DiagonalArrowIcon } from './Icons';

const Header = () => {
    return (
        <header className="flex items-center gap-5 border-b-2 border-[#000000] sm:p-12 sm:pb-0 font-[family-name:var(--font-geist-sans)]">

          <img src={`${process.env.PUBLIC_URL}/images/southside-logo.png`} 
               alt="Southside Badminton Club Logo" 
               width="125" height="125"
               className="flex-shrink-0" 
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
                Southside Badminton Club Gold Coast
            </h1>
            <p>
              We are a non-profit social badminton club. <br></br>
              All levels of players are welcome. <br></br>
              Come and join us for fun, fitness and meeting friends!
            </p>
          </div>

        <a className="absolute top-5 right-5 bg-[#5be0e6] inline-flex gap-2 font-bold py-2 px-3 rounded hover:text-[#FFFFFF]" 
           href="https://events.humanitix.com/southside-badminton-club-session-booking"
           target="_blank"
           rel="noopener noreferrer"
          >
          BOOK NOW <DiagonalArrowIcon />
        </a>
      </header>
    );
};

export default Header;