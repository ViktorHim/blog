import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('uikit/Button', () => {
    test('button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('button with theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>CLEAR</Button>);
        expect(screen.getByText('CLEAR')).toHaveClass('clear');
        screen.debug();
    });
});
