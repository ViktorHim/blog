import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('uikit/Button', () => {
    test('test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
