import './app/styles/index.scss';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import { ErrorBoundary } from './app/providers/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
);

//TODO
// refactor:
// styles for title

// TODO later
// Loaders
// Page Error

//move configs to another folder
