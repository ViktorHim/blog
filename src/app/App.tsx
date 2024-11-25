import './styles/index.scss';
import { UseTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';

export const App = () => {
    const { theme, toggleTheme } = UseTheme();

    return (
        <div className={classNames('app', [theme])}>
            <button onClick={toggleTheme}>ggg</button>
        </div>
    );
};
