import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import ImageCarousel from './components/ImageCarousel'
import MapContainer from './components/Map'; 


function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />  

      <main className="grid grid-cols-1 gap-4 p-8 sm:p-12">
        <ImageCarousel />
        <MapContainer />
      </main>

      < Footer/>
    </div>
  );
}

export default App;
