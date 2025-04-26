import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('uikit/Button', () => {
    test('Button renders correctly', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
        screen.debug();
    });
});
