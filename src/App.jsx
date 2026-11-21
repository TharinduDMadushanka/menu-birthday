
import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import BirthdayReveal from './components/BirthdayReveal';

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
        <main className="birthday-placeholder">
          <h1>A Little Letter for You ❤️</h1>
          <p>Your love letter experience will be built in the next phase.</p>
          <button onClick={() => setCurrentStage('birthday')}>
            Back to Birthday
          </button>
        </main>
      )}
    </>
  );
}

export default App;
