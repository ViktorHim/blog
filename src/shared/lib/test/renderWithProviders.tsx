import { render } from '@testing-library/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithProviders = (component: ReactNode) => {
    return render(
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            <ThemeProvider>{component}</ThemeProvider>
        </BrowserRouter>,
    );
};
