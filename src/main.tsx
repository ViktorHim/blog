import '@app/styles/index.scss';

import { App } from '@app/App';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

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
// Page Error
