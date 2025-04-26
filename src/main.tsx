import { createRoot } from 'react-dom/client';
import { App } from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary/index.ts';

createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
);

// todo
// configure husky

// todo later
// i18n
