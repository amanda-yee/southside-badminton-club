import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Description from './components/Description';
import ImageCarousel from './components/ImageCarousel'
import MapContainer from './components/Map'; 
import GoogleReviews from './components/GoogleReviews'; 

function App() {
  
  return (
    <div>
      {/* Full-screen section */}
      <div className="flex flex-col lg-custom:h-screen">
        <Header />

        <div className="flex flex-grow flex-col lg-custom:flex-row items-center gap-8 pt-4 px-8">
          <div className="lg-custom:w-1/2">
            <Description />
            <div className="flex justify-center p-4">
              <GoogleReviews />
            </div>
          </div>
          <div className="lg-custom:w-1/2">
            <ImageCarousel />
          </div>
        </div>

        <div className="flex justify-center text-xl pt-4 lg-custom:pt-0">
          We are located here: 
        </div>
      </div>

      <div className="flex justify-center pt-4 pb-4">
        <MapContainer />
      </div>
        
      <Footer />
    </div>
  );
}

export default App;
