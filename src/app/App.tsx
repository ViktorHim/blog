import '@/app/styles/index.scss';

import { UseTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';

import { AppRouter } from './providers/AppRouter';

export const App = () => {
    const { theme } = UseTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

//TODO: sidebar, i18n, jest
