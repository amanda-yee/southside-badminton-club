import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Description from './components/Description';
import ImageCarousel from './components/ImageCarousel'
import MapContainer from './components/Map'; 
import GoogleReviews from './components/GoogleReviews'; 


function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />  

      <main className="grid grid-cols-1 gap-4 p-8 sm:p-12">
        <div className="flex items-center">
          <Description />
          <ImageCarousel />
        </div>
        <GoogleReviews />
        <MapContainer />  
      </main>

      < Footer/>
    </div>
  );
}

export default App;
