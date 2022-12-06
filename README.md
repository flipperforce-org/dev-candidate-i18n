# FlipperForce Coding Challenge

## Instructions

```bash
npm i; npm t
```

Open `src/read-object-from-dot-notation.ts` and write the method `readObjectFromDotNotation` that accepts a `string` and a an `object`. The string represents keys in the object and the level is denoted by a `.`. The method returns a `string` when the key is found and `null` when the key is not found OR if the key is another object. Here are a few example inputs and outputs:

```ts
const lang = {
  hello: 'world',
  global: {
    edit: 'Edit',
    buttons: {
      save: 'Save',
    },
  },
};

readObjectFromDotNotation('hello', lang); // should output 'world'
readObjectFromDotNotation('global', lang); // should output null
readObjectFromDotNotation('global.edit', lang); // should output 'Edit'
readObjectFromDotNotation('global.edit.buttons', lang); // should output null
readObjectFromDotNotation('global.edit.buttons.save', lang); // should output 'Save'
```

You've successfully solved this challenge when all tests pass