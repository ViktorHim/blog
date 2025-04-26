import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithProviders } from 'shared/lib/test/renderWithProviders';

describe('Sidebar', () => {
    it('renders correctly', () => {
        renderWithProviders(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    it('toggles correctly', () => {
        renderWithProviders(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
