import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import Dark from "shared/assets/theme-dark.svg?react";
import Light from "shared/assets/theme-light.svg?react";
import { Theme } from "app/providers/ThemeProvider";
import { Button } from "shared/uikit/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { className } = props;
  return (
    <Button onClick={toggleTheme} className={classNames(className)}>
      {theme == Theme.DARK ? <Dark /> : <Light />}
    </Button>
  );
};
