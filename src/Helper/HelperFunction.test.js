import { multiply, makeLowerCase } from './HelperFunction';

test('multiply', () => {
    expect(multiply(2,10)).toBe(20);
    expect(multiply(2,-10)).toBe(-20);
})



test('makeLowerCase', () => {
    expect(makeLowerCase("VIJAY")).toBe("vijay");
})