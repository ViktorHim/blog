import Dark from '@icons/theme-dark.svg';
import Light from '@icons/theme-light.svg';
import { Button } from '@uikit/Button';
import { ButtonTheme } from '@uikit/Button';

import { UseTheme } from '@/app/providers/ThemeProvider';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = UseTheme();
    return (
        <Button
            className={className}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme == Theme.DARK ? <Dark /> : <Light />}
        </Button>
    );
};
