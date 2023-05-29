// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Create 2 tests that should be true, and 2 tests that should be false for each function (4 tests x 5 functions = 20 tests).
// For clarification, all of your tests should pass, but you should expect two of your tests to return a true response and two of your tests to return a false response
// e.g. expect(2+2).toBe(4) and expect(4+4).toBe(10)

// isPhoneNumber
test('(123) 456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('123-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('123 is not a valid phone number', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
});

test('(123) 456-hi is not a valid phone number', () => {
    expect(functions.isPhoneNumber("(123) 456-hi")).toBe(false);
});

// isEmail
test('cool@ucsd.edu is a valid email', () => {
    expect(functions.isEmail("cool@ucsd.edu")).toBe(true);
});

test('cook3@ucsd.co is a valid email', () => {
    expect(functions.isEmail("cooki3@ucsd.co")).toBe(true);
});

test('coolucsd.edu is not a valid email', () => {
    expect(functions.isEmail("coolucsd.edu")).toBe(false);
});

test('cooki3@ucsd9.edu is not a valid email', () => {
    expect(functions.isEmail("cooki3@ucsd9.edu")).toBe(false);
});

// isStrongPassword
test('mo0Goos3 is a strong password', () => {
    expect(functions.isStrongPassword("mo0Goos3")).toBe(true);
});

test('mo0_Goos3isC09o is a strong password', () => {
    expect(functions.isStrongPassword("mo0_Goos3isC09o")).toBe(true);
});

test('no is not a strong password', () => {
    expect(functions.isStrongPassword("no")).toBe(false);
});

test('3mioneakjsdfnkjn! is not a strong password', () => {
    expect(functions.isStrongPassword("3mioneakjsdfnkjn!")).toBe(false);
});

// isDate
test('05/29/2023 is a valid date', () => {
    expect(functions.isDate("05/29/2023")).toBe(true);
});

test('6/2/2023 is a valid date', () => {
    expect(functions.isDate("6/2/2023")).toBe(true);
});

test('6/2/20 is not a valid date', () => {
    expect(functions.isDate("6/2/20")).toBe(false);
});

test('006/2/2023 is not a valid date', () => {
    expect(functions.isDate("006/2/2023")).toBe(false);
});

// isHexColor
test('000000 is a valid hex color', () => {
    expect(functions.isHexColor("000000")).toBe(true);
});

test('ffffff is a valid hex color', () => {
    expect(functions.isHexColor("ffffff")).toBe(true);
});

test('ffff is not a valid hex color', () => {
    expect(functions.isHexColor("ffff")).toBe(false);
});

test('f20pos is not a valid hex color', () => {
    expect(functions.isHexColor("f20pos")).toBe(false);
});