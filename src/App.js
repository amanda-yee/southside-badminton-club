import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import ImageCarousel from './components/ImageCarousel'

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />  

      <main className="p-8 sm:p-12">
        <ImageCarousel />
      </main>

      < Footer/>
    </div>
  );
}

export default App;
