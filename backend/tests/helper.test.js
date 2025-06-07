import helper from '../src/app/config/helper.js';

describe('helper', () => {
  describe('getOffset', () => {
    test('returns 0 for page 1 with size 10', () => {
      expect(helper.getOffset(1, 10)).toBe(0);
    });

    test('returns correct offset for arbitrary page and size', () => {
      expect(helper.getOffset(3, 5)).toBe(10);
    });
  });

  describe('emptyOrRows', () => {
    test('returns empty array when given null', () => {
      expect(helper.emptyOrRows(null)).toEqual([]);
    });

    test('returns empty array when given undefined', () => {
      expect(helper.emptyOrRows(undefined)).toEqual([]);
    });

    test('returns rows when array provided', () => {
      const rows = [1, 2, 3];
      expect(helper.emptyOrRows(rows)).toBe(rows);
    });
  });
});
