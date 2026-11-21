
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Sparkles,
  MailOpen,
  ArrowRight,
  Stars
} from 'lucide-react';

import FloatingDecorations from './FloatingDecorations';
import './LoveLetter.css';

function LoveLetter({ onContinue }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="love-letter-screen">
      <FloatingDecorations />

      <div className="letter-glow letter-glow-one" />
      <div className="letter-glow letter-glow-two" />

      <div className="love-letter-content">
        <motion.div
          className="letter-heading"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles size={16} />
          A LITTLE MESSAGE FROM MY HEART
          <Sparkles size={16} />
        </motion.div>

        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="sealed"
              className="sealed-letter-section"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h1 className="letter-title">
                Something I want
                <span>you to read...</span>
              </h1>

              <p className="letter-intro">
                Some feelings are too special to fit into an ordinary message.
                So I wrote them down, just for you.
              </p>

              <motion.button
                className="interactive-envelope"
                onClick={() => setIsOpened(true)}
                aria-label="Open your love letter"
                whileHover={{ scale: 1.04, y: -6 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="letter-paper-preview">
                  <Heart size={25} fill="#e99ab9" stroke="#e99ab9" />
                  <span>To my Babiii</span>
                </div>

                <div className="letter-envelope-back" />
                <div className="letter-envelope-front" />
                <div className="letter-envelope-flap" />

                <div className="letter-envelope-seal">
                  <Heart size={22} fill="white" stroke="white" />
                </div>
              </motion.button>

              <motion.p
                className="letter-open-hint"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MailOpen size={17} />
                Tap the envelope to open your letter
              </motion.p>
            </motion.div>
          ) : (
            <motion.article
              key="opened"
              className="love-letter-paper"
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="letter-paper-decoration">
                <Heart size={22} fill="#e99ab9" stroke="#e99ab9" />
                <span>A letter for my favourite person</span>
                <Heart size={22} fill="#e99ab9" stroke="#e99ab9" />
              </div>

              <div className="letter-body">
                <p className="letter-dear">My dearest Menuli,</p>

                <p>
                  First of all, Happy Birthday, my Babiii! ❤️
                </p>

                <p>
                  I wish I could put into words just how much you mean to me.
                  Sometimes, I find it difficult to explain all the feelings
                  I have for you, but I hope you always know how special you
                  are to me.
                </p>

                <p>
                  Every moment I spend with you becomes a special memory.
                  It doesn't have to be something big or extraordinary.
                  Just having you in my life makes ordinary moments feel
                  beautiful, and I wouldn't trade those moments for anything.
                </p>

                <p>
                  I want you to know that I'll always be here for you.
                  I'll be beside you when you're happy, cheering for every
                  little achievement and every big dream. When things get
                  difficult, I want to be someone you can lean on, someone
                  who listens, understands, and reminds you that you don't
                  have to face everything alone.
                </p>

                <p>
                  I may not be able to promise that every day will be perfect,
                  but I can promise that I'll keep choosing you, caring for
                  you, and doing my best to make you feel loved.
                </p>

                <p>
                  As you begin another beautiful year, I hope you never stop
                  smiling, dreaming, growing, and being the wonderful person
                  you are. I want to be there for all the beautiful moments
                  still waiting for us.
                </p>

                <p className="letter-final-line">
                  You are my favourite person, my Babiii, and my princess.
                  I'm so lucky to have you. ❤️
                </p>

                <div className="letter-signature">
                  <span>With all my love,</span>
                  <strong>Your Babyyy ♡</strong>
                </div>
              </div>

              <div className="letter-bottom-decoration">
                <Stars size={18} />
                <span>Always and forever</span>
                <Stars size={18} />
              </div>
            </motion.article>
          )}
        </AnimatePresence>

        {isOpened && (
          <motion.button
            className="letter-continue-button"
            onClick={onContinue}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Heart size={18} fill="white" />
            Our Little Memories
            <ArrowRight size={18} />
          </motion.button>
        )}

        <p className="letter-footer">
          Written with love, especially for you
          <Heart size={12} fill="#d979a0" />
        </p>
      </div>
    </main>
  );
}

export default LoveLetter;
