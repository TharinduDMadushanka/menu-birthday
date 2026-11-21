
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Sparkles,
  Image as ImageIcon,
  X,
  ArrowLeft,
  ArrowRight,
  Camera,
} from 'lucide-react';

import FloatingDecorations from './FloatingDecorations';
import memories from '../data/memories';
import './MemoriesGallery.css';

function MemoriesGallery({ onContinue, onBack }) {
  const [selectedMemory, setSelectedMemory] = useState(null);

  const showPrevious = () => {
    const currentIndex = memories.findIndex(
      (memory) => memory.id === selectedMemory.id
    );
    const previousIndex =
      (currentIndex - 1 + memories.length) % memories.length;

    setSelectedMemory(memories[previousIndex]);
  };

  const showNext = () => {
    const currentIndex = memories.findIndex(
      (memory) => memory.id === selectedMemory.id
    );
    const nextIndex = (currentIndex + 1) % memories.length;

    setSelectedMemory(memories[nextIndex]);
  };

  return (
    <main className="memories-screen">
      <FloatingDecorations />

      <div className="memories-glow memories-glow-one" />
      <div className="memories-glow memories-glow-two" />

      <div className="memories-content">
        <motion.div
          className="memories-heading"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles size={16} />
          A COLLECTION OF LITTLE MOMENTS
          <Sparkles size={16} />
        </motion.div>

        <motion.h1
          className="memories-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Little
          <span>Memories</span>
        </motion.h1>

        <motion.p
          className="memories-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Every moment with you is a memory I want to keep close.
          Here are a few little spaces for our favourite pictures.
        </motion.p>

        <div className="memories-grid">
          {memories.map((memory, index) => (
            <motion.button
              key={memory.id}
              className="memory-card"
              onClick={() => setSelectedMemory(memory)}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
              whileHover={{ y: -7, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="memory-image-area">
                {memory.image ? (
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="memory-photo"
                  />
                ) : (
                  <div className={`memory-placeholder memory-placeholder-${memory.id}`}>
                    <div className="placeholder-decoration">
                      <Heart size={27} fill="currentColor" />
                    </div>
                    <ImageIcon size={35} />
                    <span>Your photo goes here</span>
                    <small>Memory {String(memory.id).padStart(2, '0')}</small>
                  </div>
                )}

                <div className="memory-view-label">
                  <Camera size={14} />
                  View memory
                </div>
              </div>

              <div className="memory-card-caption">
                <h3>{memory.title}</h3>
                <p>{memory.caption}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="memories-bottom-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Heart size={17} fill="#e99ab9" />
          <span>Our story is still being written...</span>
          <Heart size={17} fill="#e99ab9" />
        </motion.div>

        <div className="memories-navigation">
          <button className="memories-back-button" onClick={onBack}>
            <ArrowLeft size={17} />
            Back
          </button>

          <button className="memories-continue-button" onClick={onContinue}>
            More Surprises
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="memory-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className="memory-modal"
              role="dialog"
              aria-modal="true"
              aria-label={selectedMemory.title}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="memory-modal-close"
                onClick={() => setSelectedMemory(null)}
                aria-label="Close memory"
              >
                <X size={21} />
              </button>

              <div className="memory-modal-image">
                {selectedMemory.image ? (
                  <img
                    src={selectedMemory.image}
                    alt={selectedMemory.title}
                  />
                ) : (
                  <div className={`memory-placeholder memory-placeholder-${selectedMemory.id}`}>
                    <Heart size={55} fill="currentColor" />
                    <span>Your special photo will go here</span>
                  </div>
                )}
              </div>

              <h2>{selectedMemory.title}</h2>
              <p>{selectedMemory.caption}</p>

              <div className="memory-modal-navigation">
                <button onClick={showPrevious} aria-label="Previous memory">
                  <ArrowLeft size={18} />
                </button>
                <span>
                  {memories.findIndex(
                    (memory) => memory.id === selectedMemory.id
                  ) + 1} / {memories.length}
                </span>
                <button onClick={showNext} aria-label="Next memory">
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default MemoriesGallery;
