
import { useState } from 'react';

import WelcomeScreen from './components/WelcomeScreen';

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
        <main className="birthday-placeholder">
          <h1>Happy 24th Birthday, Menuli! ❤️</h1>

          <p>Your little birthday world is just beginning...</p>

          <button onClick={() => setCurrentStage('welcome')}>
            Back to Welcome
          </button>
        </main>
      )}
    </>
  );
}

export default App;
