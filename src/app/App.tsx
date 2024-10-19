import './styles/index.scss';
import { UseTheme } from './providers/ThemeProvider';

export const App = () => {
    const { theme, toggleTheme } = UseTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>ggg</button>
        </div>
    );
};

export default App;
