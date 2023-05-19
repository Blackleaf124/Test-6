const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('Check that suffle function returns array.', () => {
    expect(Array.isArray(shuffle())).toBe(true);
  })

  test('Array returned is same length as array inputed.', () => {
    expect(copyArray().length).toBe(shuffle(array).length)
  })
});
