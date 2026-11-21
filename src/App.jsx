
import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import BirthdayReveal from './components/BirthdayReveal';
import LoveLetter from './components/LoveLetter';
import MemoriesGallery from './components/MemoriesGallery';
import BirthdayWishes from './components/BirthdayWishes';

function App() {
  const [currentStage, setCurrentStage] = useState('welcome');

  return (
    <>
      {currentStage === 'welcome' && (
        <WelcomeScreen
          onEnter={() => setCurrentStage('birthday')}
        />
      )}

      {currentStage === 'birthday' && (
        <BirthdayReveal
          onContinue={() => setCurrentStage('letter')}
        />
      )}

      {currentStage === 'letter' && (
        <LoveLetter
          onContinue={() => setCurrentStage('memories')}
        />
      )}

      {currentStage === 'memories' && (
        <MemoriesGallery
          onBack={() => setCurrentStage('letter')}
          onContinue={() => setCurrentStage('wishes')}
        />
      )}

      {currentStage === 'wishes' && (
        <BirthdayWishes
          onBack={() => setCurrentStage('memories')}
          onContinue={() => setCurrentStage('cake')}
        />
      )}

      {currentStage === 'cake' && (
        <main className="birthday-placeholder">
          <h1>A Birthday Cake for You 🎂</h1>
          <p>Your special birthday cake experience is coming next...</p>
          <button onClick={() => setCurrentStage('wishes')}>
            Back to Birthday Wishes
          </button>
        </main>
      )}
    </>
  );
}

export default App;
