
import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import BirthdayReveal from './components/BirthdayReveal';
import LoveLetter from './components/LoveLetter';
import MemoriesGallery from './components/MemoriesGallery';
import BirthdayWishes from './components/BirthdayWishes';
import BirthdayCake from './components/BirthdayCake';

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
        <BirthdayCake
          onBack={() => setCurrentStage('wishes')}
          onContinue={() => setCurrentStage('final')}
        />
      )}

      {currentStage === 'final' && (
        <main className="birthday-placeholder">
          <h1>One Last Surprise ❤️</h1>
          <p>Your final birthday surprise is coming next...</p>
          <button onClick={() => setCurrentStage('cake')}>
            Back to the Birthday Cake
          </button>
        </main>
      )}
    </>
  );
}

export default App;
