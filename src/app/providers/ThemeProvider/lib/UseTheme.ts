import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const UseTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    if (!theme || !setTheme) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    };

    return { theme, toggleTheme };
};
