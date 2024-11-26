import { Navigate, RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    DEFAULT = 'default',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.DEFAULT]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: routePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.DEFAULT]: {
        path: routePath.default,
        element: <Navigate to={routePath.main} />,
    },
};
