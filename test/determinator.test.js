// https://creativecommons.org/licenses/by/4.0/
// Linnéuniversitetet – Grundläggande programmering (1DV021) https://mymoodle.lnu.se/course/view.php?id=36245
// https://coursepress.gitbook.io/1dv021/ovningsuppgifter/del-1/a-niva/bestam-datatypen
const determinator = require('../src/determinator')

describe('Test the function tellType', () => {
    test(`Should return a string 'You sent me a number.' when called with a number.`, () => {
      const result = determinator.tellType(42)
      expect(result).toBe('You sent me a number.')
    })
  
    test(`Should return a string 'You sent me a boolean.' when called with a boolean.`, () => {
      const result = determinator.tellType(true)
      expect(result).toBe('You sent me a boolean.')
    })
  
    test(`Should return a string 'You sent me a string.' when called with a string.`, () => {
      const result = determinator.tellType('this is a string')
      expect(result).toBe('You sent me a string.')
    })
  
    test(`Should return a string 'You sent me an undefined value.' when called with no parameter.`, () => {
      const result = determinator.tellType()
      expect(result).toBe('You sent me an undefined value.')
    })
  
    it(`Should return a string 'You sent me a function.' when called with a function.`, () => {
        const result = determinator.tellType(() => {})
        expect(result).toBe('You sent me a function.')
    })
  
    test(`Should return a string 'You sent me a null value.' when called with null.`, () => {
        const result = determinator.tellType(null)
        expect(result).toBe('You sent me a null value.')
    })
  
    test(`Should return a string 'You sent me an array.' when called with an array.`, () => {
        const result = determinator.tellType([])
        expect(result).toBe('You sent me an array.')
    })
  
    test(`Should return a string 'You sent me an object.' when called with an object.`, () => {
        const result = determinator.tellType({})
        expect(result).toBe('You sent me an object.')
    })
  })