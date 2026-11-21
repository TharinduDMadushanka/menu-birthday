
import { motion } from 'framer-motion';

const decorations = [
  { icon: '♡', left: '8%', delay: 0, duration: 7, size: 26 },
  { icon: '✦', left: '22%', delay: 2, duration: 8, size: 18 },
  { icon: '♡', left: '43%', delay: 1, duration: 9, size: 22 },
  { icon: '✧', left: '65%', delay: 3, duration: 7, size: 20 },
  { icon: '♡', left: '82%', delay: 1.5, duration: 8, size: 28 },
  { icon: '✦', left: '94%', delay: 2.5, duration: 9, size: 17 },
];

export default function FloatingDecorations() {
  return (
    <div className="floating-decorations">
      {decorations.map((item, index) => (
        <motion.span
          key={index}
          className="floating-decoration"
          style={{
            left: item.left,
            fontSize: item.size,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-15vh',
            opacity: [0, 0.8, 0.8, 0],
            rotate: [0, 20, -15, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {item.icon}
        </motion.span>
      ))}
    </div>
  );
}
