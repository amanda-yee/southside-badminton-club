import { DiagonalArrowIcon } from './Icons';

const Header = () => {
    return (
      <header className="hd-custom:flex bg-[#171414] text-[#FFFFFF] p-4 hd-custom:px-8">
        
        <div className="flex items-center gap-5">
          <img src={`${process.env.PUBLIC_URL}/media/southside-logo.png`} 
            alt="Southside Badminton Club Logo" 
            width="75" height="75"
          />

          <h1 className="text-2xl font-bold">
            Southside Badminton Club Gold Coast
          </h1>
        </div>

        <a className="ml-auto inline-flex items-center gap-2 pt-6 hd-custom:pt-0 font-bold text-[#FFFFFF] hover:text-[#5be0e6]" 
           href="https://events.humanitix.com/southside-badminton-club-session-booking"
           target="_blank"
           rel="noopener noreferrer"
          >
          BOOK NOW <br></br> 预订现在<DiagonalArrowIcon />
        </a>
      </header>
    );
};

export default Header;
