import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";

export const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <button onClick={toggleTheme}>Click</button>
      <AppRouter />
    </div>
  );
};
