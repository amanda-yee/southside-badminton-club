import { FacebookIcon, PhoneIcon, EmailIcon, PinIcon, DiagonalArrowIcon } from './Icons';

const Footer = () => {
  
    return (
        <footer className="grid customsm:grid-cols-2 customft:grid-cols-[1fr_2fr_1fr] text-[#FFFFFF] bg-[#261f20] text-sm p-4">
        <div>
          <p className="font-bold text-lg">Business Hours:</p>
          <ul>
            <li>Mon - Thu: 7:30pm - 9:30pm</li>
            <li>Sat: 7:30pm - 9:30pm</li>
            <li>Fri & Sun: Closed</li>
          </ul>
        </div>
        <div>
          <p className="items-center pt-6 customsm:pt-0 font-bold text-lg">Contact Us:</p>
          <ul>
            <li className="flex gap-2 underline">
              <EmailIcon /> 
              <a href="mailto: southsidebadmintonclub@gmail.com">southsidebadmintonclub@gmail.com</a>
            </li>
            <li className="flex gap-2">
              <PhoneIcon />
              +61 419 002 098
            </li>
            <li className="flex gap-2">
              <PinIcon />
              Lot 22 Assembly Drive, Varsity Lakes QLD 4227
            </li>
          </ul>
        </div>

        {/* items-end push to right, justify-end pushes to bottom */}
        <div className="flex gap-3 pt-6 justify-end flex-col customft:items-end customft:pt-0">
          <div className="flex items-center gap-10">
            <a className="inline-flex font-bold text-lg gap-2 hover:text-[#5be0e6]" 
                href="https://events.humanitix.com/southside-badminton-club-session-booking"
                target="_blank"
                rel="noopener noreferrer"
            >
              BOOK NOW <DiagonalArrowIcon />
            </a>

            <a href="https://www.facebook.com/p/Southside-Badminton-Club-Gold-Coast-100033686513550/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a> 
          </div>
          
          <span>&copy; Azzurra Studios 2025</span>
        
        </div>
      </footer>
    );
  };
  
  export default Footer;