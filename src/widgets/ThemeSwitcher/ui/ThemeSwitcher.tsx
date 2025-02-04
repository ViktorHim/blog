import { useTheme } from '@app/providers/ThemeProvider';
import { Theme } from '@app/providers/ThemeProvider/lib/ThemeContext';
import Dark from '@icons/theme-dark.svg';
import Light from '@icons/theme-light.svg';
import { Button } from '@shared/uikit/Button';
import { ButtonTheme } from '@shared/uikit/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
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
