import '@/app/styles/index.scss';

import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';

import { AppRouter } from './providers/AppRouter';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Navbar />
            <main className="content">
                <Sidebar />
                <AppRouter />
            </main>
        </div>
    );
};

//TODO: sidebar, i18n, jest
