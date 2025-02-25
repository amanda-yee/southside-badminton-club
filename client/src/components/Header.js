import { DiagonalArrowIcon } from './Icons';

const Header = () => {
    return (
        <header className="flex items-center bg-[#171414] text-[#FFFFFF] gap-5 sm:pt-3 sm:px-12 sm:pb-3">

          <img src={`${process.env.PUBLIC_URL}/images/southside-logo.png`} 
            alt="Southside Badminton Club Logo" 
            width="75" height="75"
            className="flex-shrink-0" 
          />

          <h1 className="text-2xl font-bold">
            Southside Badminton Club Gold Coast
          </h1>

        <a className="ml-auto text-[#FFFFFF] inline-flex gap-2 py-2 px-3 rounded hover:text-[#5be0e6]" 
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