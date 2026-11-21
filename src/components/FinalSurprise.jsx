import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Gift, Heart, RefreshCw, Sparkles } from 'lucide-react';
import FloatingDecorations from './FloatingDecorations';
import './FinalSurprise.css';

function FinalSurprise({ onBack, onReplay }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="final-screen">
      <FloatingDecorations />
      <div className="final-glow final-glow-one" />
      <div className="final-glow final-glow-two" />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.section
            key="gift"
            className="final-gift-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
          >
            <div className="final-eyebrow">
              <Sparkles size={15} />
              ONE MORE LITTLE SURPRISE
              <Sparkles size={15} />
            </div>

            <h1>Babiii, there's one more thing...</h1>
            <p className="final-gift-copy">
              This one is just for you. Open it when you're ready.
            </p>

            <motion.div
              className="gift-box"
              animate={{ y: [0, -8, 0], rotate: [0, -1, 1, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <div className="gift-lid">
                <span className="gift-ribbon-vertical" />
                <span className="gift-bow gift-bow-left" />
                <span className="gift-bow gift-bow-right" />
              </div>
              <div className="gift-body">
                <span className="gift-ribbon-vertical" />
                <span className="gift-ribbon-horizontal" />
                <Heart className="gift-heart" size={28} fill="currentColor" />
              </div>
            </motion.div>

            <motion.button
              type="button"
              className="open-final-button"
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Gift size={19} />
              Open Your Final Surprise
            </motion.button>

            <button type="button" className="final-back-button" onClick={onBack}>
              <ArrowLeft size={17} />
              Back to the Birthday Cake
            </button>
          </motion.section>
        ) : (
          <motion.section
            key="message"
            className="final-message-view"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
          >
            <div className="final-confetti" aria-hidden="true">
              {Array.from({ length: 24 }, (_, index) => (
                <span key={index} style={{ '--confetti-index': index }} />
              ))}
            </div>

            <motion.div
              className="final-message-heart"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', delay: 0.25 }}
            >
              <Heart size={34} fill="currentColor" />
            </motion.div>

            <p className="final-message-eyebrow">ONE THING I WANT YOU TO REMEMBER</p>
            <h1>One thing I want you to remember, my Babyy...</h1>

            <div className="final-letter">
              <p>
                No matter how many birthdays pass, how many years go by, or how much life changes,
                I hope you always remember that you have someone who genuinely wants to see you happy.
              </p>
              <p>
                I want to be beside you through your little victories, your biggest dreams,
                your silly moments, your difficult days, and all the beautiful adventures waiting ahead.
              </p>
              <p>
                I don't just want to celebrate your birthday. I want to celebrate you, your growth,
                your happiness, and every little thing that makes you who you are.
              </p>
              <p>Thank you for making my world a little more beautiful.</p>
              <p className="final-signature">
                Happy 24th Birthday, my Babiii.
                <strong>I love you, my princess. ❤️</strong>
              </p>
            </div>

            <p className="final-cheering">
              Forever cheering for you,
              <span>your Babyy</span>
            </p>

            <button type="button" className="replay-button" onClick={onReplay}>
              <RefreshCw size={17} />
              Replay the Surprise
            </button>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}

export default FinalSurprise;
