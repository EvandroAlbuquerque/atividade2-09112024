import useLocalStorage from './useLocalStorage';
import AppContent from './AppContent';
import { ThemeProvider } from './ThemeProvider';
import './App.css';

function App() {
  const [name, setName] = useLocalStorage('name', 'Visitante');

  return (
    <div className="App">
      <h1>Bem-vindo, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
