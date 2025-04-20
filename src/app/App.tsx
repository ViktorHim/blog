import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <ThemeSwitcher />
      <Navbar />
      <AppRouter />
    </div>
  );
};
