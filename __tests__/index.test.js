const lib = require('../src/index')

describe('image-de-skew', () => {
  test('should be defined', () => {
    expect(lib).toBeDefined()
    expect(lib).toBeInstanceOf(Function)
  })
})