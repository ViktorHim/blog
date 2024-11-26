import '@/app/styles/index.scss';
import '@/shared/consts/i18n/i18n.ts';

import { Suspense } from 'react';

import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';

import { AppRouter } from './providers/AppRouter';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback="">
                <Navbar />
                <main className="content">
                    <Sidebar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
};

//TODO: sidebar, i18n, jest
