import { readObjectFromDotNotation } from './read-object-from-dot-notation';

const lang = {
  hello: 'world',
  global: {
    edit: 'Edit',
    buttons: {
      save: 'Save',
    },
  },
};

describe('readObjectFromDotNotation', () => {
  describe('top level keys', () => {
    it('should return a value from a top level key', () => {
      expect(readObjectFromDotNotation('hello', lang)).toBe(lang.hello);
    });

    it('should return null when the top level key does not exist', () => {
      expect(readObjectFromDotNotation('t', lang)).toBeNull();
    });
  });

  describe('nested keys', () => {
    it('should return a value from a nested key', () => {
      expect(readObjectFromDotNotation('global.edit', lang)).toBe(
        lang.global.edit
      );
      expect(readObjectFromDotNotation('global.buttons.save', lang)).toBe(
        lang.global.buttons.save
      );
    });

    it('should return null when the nested key does not exist', () => {
      expect(
        readObjectFromDotNotation('something.does.not.exist', lang)
      ).toBeNull();
      expect(readObjectFromDotNotation('global.buttons.edit', lang)).toBeNull();
    });

    it('should return null when the nested key is an object', () => {
      expect(readObjectFromDotNotation('global.edit.buttons', lang)).toBeNull();
    });
  });
});
