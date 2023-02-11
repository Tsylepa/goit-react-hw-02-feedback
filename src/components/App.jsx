import Feedback from './Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 24,
        color: 'var(--font-color)',
      }}
    >
      <Feedback />
    </div>
  );
};
