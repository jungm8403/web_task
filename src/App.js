import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Page/Intro';                    
import Home from './Page/Home';                      
import AlphabetPage from './Page/Alphabet';
import AlphabetDetail from './Page/AlphabetDetail';
import ShortVowelsPage from './Page/ShortVowelsPage';
import LongVowelsPage from './Page/LongVowelsPage';
import BlendSoundsPage from './Page/BlendSounds';
import WordTemplate from './Page/WordTemplate';

function App() {
  return (
    <Router>
      <Routes>
    <Route path="/" element={<Intro />} />           // 첫 진입은 인트로
    <Route path="/home" element={<Home />} />        // 홈 페이지는 여기
        <Route path="/alphabet" element={<AlphabetPage />} />
        <Route path="/alphabet/:letter" element={<AlphabetDetail />} />
        <Route path="/short-vowels" element={<ShortVowelsPage />} />
        <Route path="/short-vowels/:vowel/:word" element={<WordTemplate />} />
        <Route path="/long-vowels" element={<LongVowelsPage />} />
        <Route path="/long-vowels/:vowel/:word" element={<WordTemplate />} />
        <Route path="/blend-sounds" element={<BlendSoundsPage />} />
        <Route path="/word/:vowel/:word" element={<WordTemplate />} />
      </Routes>
    </Router>
  );
}

export default App;
