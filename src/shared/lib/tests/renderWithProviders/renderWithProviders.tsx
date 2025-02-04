import { ThemeProvider } from '@app/providers/ThemeProvider';
import i18nForTest from '@shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

export function renderWithProviders(component: ReactNode) {
    return render(
        <ThemeProvider>
            <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
        </ThemeProvider>,
    );
}
