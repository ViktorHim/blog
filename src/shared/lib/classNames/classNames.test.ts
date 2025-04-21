import { describe } from 'node:test';
import { classNames } from './classNames';

describe('classNames', () => {
    test('single class', () => {
        const result = classNames('class');
        expect(result).toBe('class');
    });
    test('empty class', () => {
        let className;
        const result = classNames(className);
        expect(result).toBe('');
    });
    test('with additional classed', () => {
        const result = classNames('main-class', ['another1', 'another2']);
        expect(result).toBe('main-class another1 another2');
    });
    test('with modes', () => {
        const result = classNames('main-class', ['another1', 'another2'], {
            mode1: true,
            mode2: false,
            mode3: undefined,
        });
        expect(result).toBe('main-class another1 another2 mode1');
    });
});
