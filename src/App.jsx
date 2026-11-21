
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import WelcomeScreen from './components/WelcomeScreen';
import BirthdayReveal from './components/BirthdayReveal';
import LoveLetter from './components/LoveLetter';
import MemoriesGallery from './components/MemoriesGallery';
import BirthdayWishes from './components/BirthdayWishes';
import BirthdayCake from './components/BirthdayCake';
import FinalSurprise from './components/FinalSurprise';
import birthdayMusic from './assets/music/the_mountain-happy-birthday-576570.mp3';
import './App.css';

const stages = ['welcome', 'birthday', 'letter', 'memories', 'wishes', 'cake', 'final'];
const savedStage = sessionStorage.getItem('menuli-birthday-stage');
const initialStage = stages.includes(savedStage) ? savedStage : 'welcome';

function App() {
  const [currentStage, setCurrentStage] = useState(initialStage);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicError, setMusicError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    sessionStorage.setItem('menuli-birthday-stage', currentStage);
  }, [currentStage]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setMusicError(false);
    } catch {
      setIsPlaying(false);
      setMusicError(true);
    }
  };

  const stageIndex = stages.indexOf(currentStage);
  const progress = ((stageIndex + 1) / stages.length) * 100;

  return (
    <>
      <audio
        ref={audioRef}
        src={birthdayMusic}
        loop
        preload="none"
        onError={() => {
          setIsPlaying(false);
          setMusicError(true);
        }}
      />

      {currentStage !== 'welcome' && (
        <div className="experience-tools" aria-label="Experience controls">
          <button
            type="button"
            className="experience-music-button"
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? <Volume2 size={17} /> : <VolumeX size={17} />}
            <span>{isPlaying ? 'Music on' : 'Music off'}</span>
          </button>
        </div>
      )}

      {currentStage !== 'welcome' && (
        <div className="journey-progress" aria-label={`Journey progress: ${stageIndex + 1} of ${stages.length}`}>
          <div className="journey-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      {currentStage === 'welcome' && (
        <WelcomeScreen
          onEnter={() => setCurrentStage('birthday')}
          isMusicPlaying={isPlaying}
          musicError={musicError}
          onToggleMusic={toggleMusic}
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
        <FinalSurprise
          onBack={() => setCurrentStage('cake')}
          onReplay={() => setCurrentStage('welcome')}
        />
      )}
    </>
  );
}

export default App;
