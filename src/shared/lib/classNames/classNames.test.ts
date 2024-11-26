import { classNames } from './classNames';

describe('classNames', () => {
    test('empty class', () => {
        expect(classNames()).toBe('');
    });
    test('single class', () => {
        expect(classNames('header')).toBe('header');
    });
    test('class with additional', () => {
        expect(classNames('header', ['red', 'blue'])).toBe('header red blue');
    });
    test('class with mode', () => {
        expect(
            classNames('header', [], {
                collapsed: true,
                active: undefined,
                dark: true,
                mobile: false,
            }),
        ).toBe('header collapsed dark');
    });
    test('all args', () => {
        expect(
            classNames('header', ['red', 'blue'], {
                collapsed: true,
                active: undefined,
                dark: true,
                mobile: false,
            }),
        ).toBe('header red blue collapsed dark');
    });
});
