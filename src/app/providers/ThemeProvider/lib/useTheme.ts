import { useContext } from 'react';
import { Theme, THEME_KEY, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    if (!theme || !setTheme) {
        throw Error('Require ThemeContext');
    }

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
};
