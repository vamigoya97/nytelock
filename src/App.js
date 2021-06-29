import './App.css';
import { FaItalic } from 'react-icons/fa';
import { FaWeebly } from 'react-icons/fa';
import { FaLemon } from 'react-icons/fa';
import { FaArtstation } from 'react-icons/fa';
import { FaTheaterMasks } from 'react-icons/fa';
import { FaPuzzlePiece } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='info-container'>
          <div>
            <p>HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?</p>
            <h2>Different Types of Logo Styles</h2>
          </div>
          <div>
            <p>Contact Us</p>
          </div>
        </div>
        <div className='options-container'>
            <div className='option-card'>
              <FaItalic />
              <p>Lettermark Logos</p>
            </div>
            <div className='option-card'>
              <FaWeebly />
              <p>Wordmark Logos</p>
            </div>
            <div className='option-card'>
              <FaLemon />
              <p>Pictorial Mark Logos</p>
            </div>
            <div className='option-card'>
              <FaArtstation />
              <p>Abstract Mark Logos</p>
            </div>
            <div className='option-card'>
              <FaTheaterMasks />
              <p>Mascot Logos</p>
            </div>
            <div className='option-card'>
              <FaPuzzlePiece />
              <p>Combination Logos</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
