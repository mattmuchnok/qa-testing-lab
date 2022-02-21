let func = require('./functions')


test('should run', () => {
    expect(func.returnTwo()).toBe(2)
})

test('should match name', () => {
    expect(func.greeting('Matt')).toBe('Hello, Matt.')
})

test('should add numbers together', () => {
    expect(func.add(2,5)).toEqual(7)
})