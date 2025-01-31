import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/shared/lib/tests/renderWithProviders/renderWithProviders';

import { Sidebar } from './Sidebar';

describe('widgets/Sidebar', () => {
    test('test sidebar', () => {
        renderWithProviders(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });

    test('test sidebar toggle', () => {
        renderWithProviders(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
