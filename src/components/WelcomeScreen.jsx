
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Sparkles,
  Music2,
  VolumeX,
  ArrowRight,
  Mail
} from 'lucide-react';

import FloatingDecorations from './FloatingDecorations';
import './WelcomeScreen.css';

function WelcomeScreen({ onEnter, isMusicPlaying, musicError, onToggleMusic }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    if (isOpening) return;

    setIsOpening(true);

    setTimeout(() => {
      onEnter();
    }, 1100);
  };

  return (
    <main className="welcome-screen">

      {/* Background decorations */}
      <FloatingDecorations />

      <div className="welcome-glow welcome-glow-one" />
      <div className="welcome-glow welcome-glow-two" />

      {/* Music control */}
      <motion.button
        className="music-control"
        onClick={onToggleMusic}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
      >
        {isMusicPlaying ? <Music2 size={19} /> : <VolumeX size={19} />}
        <span>{isMusicPlaying ? 'Music On' : 'Music Off'}</span>
      </motion.button>

      <div className="welcome-content">

        <AnimatePresence mode="wait">
          {!isOpening ? (
            <motion.div
              key="welcome"
              className="welcome-main"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.8 }}
            >

              <motion.div
                className="welcome-small-label"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Sparkles size={15} />
                A LITTLE SOMETHING FOR YOU
                <Sparkles size={15} />
              </motion.div>

              <motion.div
                className="welcome-heart"
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              >
                <Heart
                  size={42}
                  fill="#e99ab9"
                  stroke="#e99ab9"
                />
              </motion.div>

              <h1 className="welcome-title">
                Hey Babiii...
              </h1>

              <p className="welcome-subtitle">
                I made a little world just for you.
              </p>

              <p className="welcome-description">
                A tiny place filled with love, little surprises,
                beautiful memories, and everything I want to
                tell you today.
              </p>

              {/* Decorative envelope */}
              <motion.div
                className="welcome-envelope"
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="envelope-back" />

                <div className="envelope-letter">
                  <Heart size={25} fill="#e99ab9" stroke="none" />
                  <span>For You</span>
                </div>

                <div className="envelope-front" />

                <div className="envelope-flap" />

                <div className="envelope-seal">
                  <Heart size={17} fill="white" stroke="white" />
                </div>
              </motion.div>

              <p className="welcome-hint">
                <Sparkles size={13} />
                There's something waiting inside...
              </p>

              <motion.button
                className="open-surprise-button"
                onClick={handleEnter}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 30px rgba(204, 112, 151, 0.3)'
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Mail size={19} />
                Open My Surprise
                <ArrowRight size={18} />
              </motion.button>

              {musicError && (
                <p className="music-error">
                  Add your music file to public/assets/romantic-music.mp3
                </p>
              )}

              <p className="welcome-footer">
                Made with <Heart size={12} fill="#d979a0" />
                especially for my princess
              </p>

            </motion.div>
          ) : (
            <motion.div
              key="opening"
              className="opening-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={60} fill="#e99ab9" stroke="#e99ab9" />
              </motion.div>

              <h2>Opening your little world...</h2>
              <p>Just for you, my Babiii. ♡</p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </main>
  );
}

export default WelcomeScreen;
