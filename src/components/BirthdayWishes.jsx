
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Sparkles,
  Star,
  Sun,
  Flower2,
  Crown,
  Gift,
  Moon,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

import FloatingDecorations from './FloatingDecorations';
import './BirthdayWishes.css';

const wishes = [
  {
    id: 1,
    title: 'Endless Happiness',
    subtitle: 'A little wish for your smile',
    message:
      'I hope your days are filled with genuine smiles, unexpected happiness, and countless reasons to feel grateful. You deserve to be happy, not just today, but every single day.',
    icon: <Sun size={31} />,
    color: 'wish-pink',
  },
  {
    id: 2,
    title: 'Beautiful Dreams',
    subtitle: 'For everything you hope to achieve',
    message:
      'May every dream you carry in your heart find its way into reality. I hope you always have the courage to dream big and the confidence to chase everything you truly want.',
    icon: <Star size={31} />,
    color: 'wish-lavender',
  },
  {
    id: 3,
    title: 'A Peaceful Heart',
    subtitle: 'For calm and beautiful days',
    message:
      'I wish you peaceful mornings, comforting evenings, and a heart that feels light. Even on difficult days, I hope you remember how strong and special you are.',
    icon: <Moon size={31} />,
    color: 'wish-cream',
  },
  {
    id: 4,
    title: 'Never Stop Growing',
    subtitle: 'For the amazing person you are becoming',
    message:
      'May this year bring new opportunities, wonderful experiences, and so many reasons to be proud of yourself. Keep learning, growing, and becoming the person you dream of being.',
    icon: <Flower2 size={31} />,
    color: 'wish-rose',
  },
  {
    id: 5,
    title: 'All the Love',
    subtitle: 'A wish straight from my heart',
    message:
      'I hope you always feel appreciated, respected, understood, and deeply loved. And I hope I can keep giving you the care, support, and happiness you deserve.',
    icon: <Heart size={31} />,
    color: 'wish-pink',
  },
  {
    id: 6,
    title: 'Our Beautiful Future',
    subtitle: 'A little wish for us',
    message:
      'I wish for many more conversations, laughs, adventures, and beautiful memories together. There are so many moments still waiting for us, and I cannot wait to share them with you.',
    icon: <Crown size={31} />,
    color: 'wish-lavender',
  },
];

function BirthdayWishes({ onContinue, onBack }) {
  const [openedWishes, setOpenedWishes] = useState([]);

  const toggleWish = (id) => {
    setOpenedWishes((previous) =>
      previous.includes(id)
        ? previous.filter((wishId) => wishId !== id)
        : [...previous, id]
    );
  };

  const allOpened = openedWishes.length === wishes.length;

  return (
    <main className="wishes-screen">
      <FloatingDecorations />

      <div className="wishes-glow wishes-glow-one" />
      <div className="wishes-glow wishes-glow-two" />

      <div className="wishes-content">
        <motion.div
          className="wishes-heading"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles size={16} />
          SIX LITTLE WISHES FOR YOU
          <Sparkles size={16} />
        </motion.div>

        <motion.h1
          className="wishes-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Birthday Wishes
          <span>For My Princess</span>
        </motion.h1>

        <motion.p
          className="wishes-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I have a few little wishes for your new year.
          Tap each gift to discover what's inside.
        </motion.p>

        <div className="wishes-progress">
          <div className="wishes-progress-track">
            <motion.div
              className="wishes-progress-fill"
              animate={{
                width: `${(openedWishes.length / wishes.length) * 100}%`,
              }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <span>
            {openedWishes.length} of {wishes.length} wishes opened
          </span>
        </div>

        <div className="wishes-grid">
          {wishes.map((wish, index) => {
            const isOpened = openedWishes.includes(wish.id);

            return (
              <motion.button
                key={wish.id}
                type="button"
                className={`wish-card ${wish.color} ${isOpened ? 'wish-card-opened' : ''}`}
                onClick={() => toggleWish(wish.id)}
                aria-expanded={isOpened}
                aria-label={`${wish.title}. ${isOpened ? 'Hide message' : 'Reveal message'}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="wish-card-number">
                  WISH {String(wish.id).padStart(2, '0')}
                </span>

                <motion.div
                  className="wish-card-icon"
                  animate={{
                    rotate: isOpened ? [0, -10, 10, 0] : 0,
                    scale: isOpened ? 1.08 : 1,
                  }}
                >
                  {isOpened ? <Heart size={31} fill="currentColor" /> : wish.icon}
                </motion.div>

                <h2>{wish.title}</h2>

                {isOpened ? (
                  <motion.p
                    className="wish-card-message"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {wish.message}
                  </motion.p>
                ) : (
                  <>
                    <p className="wish-card-subtitle">{wish.subtitle}</p>
                    <span className="wish-card-action">
                      <Gift size={15} />
                      Tap to open
                    </span>
                  </>
                )}

                {isOpened && (
                  <span className="wish-opened-label">
                    <Sparkles size={13} />
                    A wish from me to you
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className="wishes-bottom-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Heart size={17} fill="#e99ab9" />
          <span>Every wish comes with all my love.</span>
          <Heart size={17} fill="#e99ab9" />
        </motion.div>

        {allOpened && (
          <motion.p
            className="all-wishes-opened"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            You opened every little wish! Sending you the biggest hug. ♡
          </motion.p>
        )}

        <div className="wishes-navigation">
          <button
            className="wishes-back-button"
            onClick={onBack}
            type="button"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <button
            className="wishes-continue-button"
            onClick={onContinue}
            type="button"
          >
            Let's Make a Wish
            <ArrowRight size={18} />
          </button>
        </div>

        <p className="wishes-footer">
          Always wishing the best for you <Heart size={12} fill="#d979a0" />
        </p>
      </div>
    </main>
  );
}

export default BirthdayWishes;
