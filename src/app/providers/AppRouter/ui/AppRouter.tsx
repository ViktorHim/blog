import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '@/shared/consts/routes/routeConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};
