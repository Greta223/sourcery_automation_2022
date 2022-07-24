const isRightTriangle = require('./isRightTriangle');


test('3, 4, 5 is triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('1, 1, 1 is triangle', () => {
    expect(isRightTriangle(1, 1, 1)).toBe(false);
});

test('-1, 1, 1 is not triangle', () => {
    expect(isRightTriangle(-1, 1, 1)).toBe(false);
});

test('0, 0, 0 is not triangle', () => {
    expect(isRightTriangle(0, 0, 0)).toBe(false);
});

test('10, 10, 10 is triangle', () => {
    expect(isRightTriangle(10, 10, 10)).toBe(false);
});

test('10.1, 10.1, 10.1 is triangle', () => {
    expect(isRightTriangle(10.1, 10.1, 10.1)).toBe(false);
});

test('a, b, c is not triangle', () => {
    expect(isRightTriangle('a', 'b', 'c')).toBe(false);
});

test('1,1,2 is not triangle', () => {
    expect(isRightTriangle(1, 1, 3)).toBe(false);
});


