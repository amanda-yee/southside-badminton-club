import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Description from './components/Description';
import ImageCarousel from './components/ImageCarousel'
import MapContainer from './components/Map'; 
import GoogleReviews from './components/GoogleReviews'; 


function App() {
  return (
    <div className="flex flex-col">
      {/* Full-screen section */}
      <div className="flex flex-col h-screen">
        <Header />

        <div className="flex flex-grow flex-col lg:flex-row items-center gap-8 pt-4 px-8">
          <div className="lg:w-1/2">
            <Description />
            <div className="flex justify-center pt-4">
              <GoogleReviews />
            </div>
          </div>
          <div className="lg:w-1/2">
            <ImageCarousel />
          </div>
        </div>

        <div className="flex justify-center text-xl">
          Find us here:
        </div>
      </div>

      <div className="flex justify-center pt-4 pb-8">
        <MapContainer />
      </div>
        
      <Footer />
    </div>
  );
}

export default App;
