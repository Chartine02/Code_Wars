export const mergeStrings = (first: string, second: string): string => {
  for (let i = 0; i < first.length; i++) {
    if (second.startsWith(first.slice(i))) {
      return first + second.slice(first.length - i);
    }
  }
  return first + second;
};
