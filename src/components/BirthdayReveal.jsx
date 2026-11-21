
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift, ArrowRight, Star } from 'lucide-react';
import FloatingDecorations from './FloatingDecorations';
import './BirthdayReveal.css';

function BirthdayReveal({ onContinue }) {
  return (
    <main className="birthday-screen">
      <FloatingDecorations />

      <div className="birthday-glow birthday-glow-one" />
      <div className="birthday-glow birthday-glow-two" />

      <div className="birthday-content">
        <motion.div
          className="birthday-top-label"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles size={17} />
          A SPECIAL DAY FOR SOMEONE SPECIAL
          <Sparkles size={17} />
        </motion.div>

        <motion.div
          className="birthday-balloons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="balloon balloon-pink">♡</span>
          <span className="balloon balloon-lavender">♡</span>
          <span className="balloon balloon-cream">♡</span>
        </motion.div>

        <motion.div
          className="birthday-heart"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 150 }}
        >
          <Heart size={42} fill="#e99ab9" stroke="#e99ab9" />
        </motion.div>

        <motion.p
          className="birthday-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          TODAY IS ALL ABOUT YOU
        </motion.p>

        <motion.h1
          className="birthday-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
        >
          Happy 24th
          <span>Birthday, my Babyy!</span>
        </motion.h1>

        <motion.div
          className="birthday-divider"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Heart size={15} fill="#d979a0" />
        </motion.div>

        <motion.p
          className="birthday-message"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          To my Babiii, my beautiful princess...
          <br />
          Today is a celebration of you, your beautiful heart,
          and all the happiness you bring into my world.
          <br />
          I hope this new chapter of your life brings you
          endless smiles, beautiful surprises, and dreams
          that come true.
        </motion.p>

        <motion.div
          className="birthday-wish"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Star size={17} />
          <span>You deserve all the happiness in the world.</span>
          <Star size={17} />
        </motion.div>

        <motion.button
          className="birthday-continue-button"
          onClick={onContinue}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <Gift size={19} />
          There's More for You
          <ArrowRight size={18} />
        </motion.button>

        <motion.p
          className="birthday-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          Made with endless love <Heart size={13} fill="#d979a0" />
        </motion.p>
      </div>
    </main>
  );
}

export default BirthdayReveal;
