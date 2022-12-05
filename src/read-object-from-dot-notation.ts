export type DotNotationObject = {
  [key: string]: string | DotNotationObject;
};

export function readObjectFromDotNotation(key: string, obj: DotNotationObject) {
  // your code here
}
