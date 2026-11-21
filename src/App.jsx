
import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import BirthdayReveal from './components/BirthdayReveal';
import LoveLetter from './components/LoveLetter';

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
        <main className="birthday-placeholder">
          <h1>Our Little Memories ❤️</h1>
          <p>A beautiful collection of our moments is coming next...</p>
          <button onClick={() => setCurrentStage('letter')}>
            Back to Love Letter
          </button>
        </main>
      )}
    </>
  );
}

export default App;
