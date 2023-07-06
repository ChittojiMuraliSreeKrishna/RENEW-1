import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [appoint, setAppoint] = useState(false)
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isBackTopBtnActive, setIsBackTopBtnActive] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setAppoint(true)
    }, 5000)
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsHeaderActive(true);
        setIsBackTopBtnActive(true);
      } else {
        setIsHeaderActive(false);
        setIsBackTopBtnActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className="App">
      <Header isHeaderActive={isHeaderActive} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
