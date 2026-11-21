
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Mic,
  MicOff,
  Sparkles,
  Wind,
} from 'lucide-react';

import FloatingDecorations from './FloatingDecorations';
import './BirthdayCake.css';

const candles = Array.from({ length: 24 }, (_, index) => index + 1);

function BirthdayCake({ onBack, onContinue }) {
  const [candlesOut, setCandlesOut] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [micMessage, setMicMessage] = useState('');

  const streamRef = useRef(null);
  const audioContextRef = useRef(null);
  const intervalRef = useRef(null);
  const blowCountRef = useRef(0);

  const stopMicrophone = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }

    setIsListening(false);
  };

  const extinguishCandles = () => {
    setCandlesOut(true);
    setMicMessage('Your wish has been sent to the universe! ♡');
    stopMicrophone();
  };

  const startMicrophone = async () => {
    setMicMessage('');

    if (!navigator.mediaDevices?.getUserMedia) {
      setMicMessage(
        'Microphone access is unavailable in this browser. You can use the button below instead.'
      );
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      streamRef.current = stream;

      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      const audioContext = new AudioContextClass();
      audioContextRef.current = audioContext;

      await audioContext.resume();

      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;

      const microphone = audioContext.createMediaStreamSource(stream);
      microphone.connect(analyser);

      const audioData = new Uint8Array(analyser.fftSize);

      blowCountRef.current = 0;
      setIsListening(true);
      setMicMessage('Blow gently into your microphone...');

      intervalRef.current = setInterval(() => {
        analyser.getByteTimeDomainData(audioData);

        let sum = 0;

        for (let i = 0; i < audioData.length; i++) {
          const sample = (audioData[i] - 128) / 128;
          sum += sample * sample;
        }

        const volume = Math.sqrt(sum / audioData.length);

        // A few consecutive loud readings help avoid accidental activation.
        if (volume > 0.16) {
          blowCountRef.current += 1;
        } else {
          blowCountRef.current = 0;
        }

        if (blowCountRef.current >= 3) {
          extinguishCandles();
        }
      }, 100);
    } catch {
      stopMicrophone();
      setMicMessage(
        'We could not access your microphone. No worries — use the button to blow out your candles!'
      );
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <main className="cake-screen">
      <FloatingDecorations />

      <div className="cake-glow cake-glow-one" />
      <div className="cake-glow cake-glow-two" />

      <div className="cake-content">
        <motion.div
          className="cake-eyebrow"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles size={16} />
          YOUR SPECIAL MOMENT
          <Sparkles size={16} />
        </motion.div>

        <motion.h1
          className="cake-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Make a Wish,
          <span>My Babyyy!</span>
        </motion.h1>

        <motion.p
          className="cake-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Twenty four candles for your twenty fourth birthday.
          Close your eyes, make a beautiful wish, and blow them out!
        </motion.p>

        <motion.div
          className={`cake-scene ${candlesOut ? 'cake-scene-celebrating' : ''}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="cake-sparkles" aria-hidden="true">
            <span>✦</span>
            <span>♡</span>
            <span>✧</span>
            <span>✦</span>
            <span>♡</span>
          </div>

          <div className="cake">
            <div className="cake-top">
              {candles.map((candle) => (
                <div
                  className="candle"
                  key={candle}
                  style={{
                    left: `${12 + ((candle - 1) % 8) * 10.8}%`,
                    top: `${15 + Math.floor((candle - 1) / 8) * 24}%`,
                  }}
                >
                  {!candlesOut && (
                    <span className="candle-flame" aria-hidden="true" />
                  )}
                  <span className="candle-wick" />
                  <span className="candle-stick" />
                </div>
              ))}
            </div>

            <div className="cake-body">
              <div className="cake-icing">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="cake-decoration">♡</div>
            </div>

            <div className="cake-plate" />
          </div>

          {candlesOut && (
            <motion.div
              className="cake-celebration"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Sparkles size={20} />
              Wish made!
              <Heart size={20} fill="currentColor" />
            </motion.div>
          )}
        </motion.div>

        <div className="cake-candle-count">
          <span className="candle-count-number">24</span>
          <span>little flames, one big wish</span>
        </div>

        {!candlesOut ? (
          <div className="cake-controls">
            <p className="cake-instruction">
              {isListening
                ? 'Take a breath and blow towards your microphone!'
                : 'Ready to make your birthday wish?'}
            </p>

            <button
              className="cake-mic-button"
              type="button"
              onClick={isListening ? stopMicrophone : startMicrophone}
            >
              {isListening ? <MicOff size={19} /> : <Mic size={19} />}
              {isListening ? 'Stop Microphone' : 'Blow with Microphone'}
            </button>

            <button
              className="cake-blow-button"
              type="button"
              onClick={extinguishCandles}
            >
              <Wind size={19} />
              Blow Out All 24 Candles
            </button>

            <p className="cake-mic-message" role="status" aria-live="polite">
              {micMessage}
            </p>

            <p className="cake-note">
              Microphone access is optional. You can use either button.
            </p>
          </div>
        ) : (
          <motion.div
            className="cake-wish-complete"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>Happy 24th Birthday, my princess! ♡</h2>
            <p>
              I hope every little wish in your heart comes true.
              You deserve all the happiness in the world.
            </p>
            <p className="cake-love-note">
              And remember, I'll always be right here beside you.
            </p>

            <button
              className="cake-continue-button"
              type="button"
              onClick={onContinue}
            >
              One Last Surprise
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}

        <button
          className="cake-back-button"
          type="button"
          onClick={() => {
            stopMicrophone();
            onBack();
          }}
        >
          <ArrowLeft size={17} />
          Back to Birthday Wishes
        </button>

        <p className="cake-footer">
          Made with all my love <Heart size={13} fill="currentColor" />
        </p>
      </div>
    </main>
  );
}

export default BirthdayCake;
