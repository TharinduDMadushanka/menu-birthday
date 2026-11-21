
import FloatingDecorations from './components/FloatingDecorations';

function App() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: '30px',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #fff6f9, #ffe5ef, #fffaf3)'
    }}>
      <FloatingDecorations />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '18px' }}>A little surprise is coming...</p>

        <h1 style={{
          fontFamily: 'var(--font-romantic)',
          fontSize: 'clamp(55px, 10vw, 95px)',
          color: 'var(--pink-dark)',
          margin: '20px 0'
        }}>
          For My Babiii
        </h1>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 500
        }}>
          A Little World Made for Princess ♡
        </h2>

        <p style={{ marginTop: '15px', color: 'var(--text-muted)' }}>
          Made with love, just for you.
        </p>
      </div>
    </main>
  );
}

export default App;
