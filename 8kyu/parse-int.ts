export function get_age(age: string): number {
  const array = age.split("").filter((el) => !isNaN(+el) && el !== " ");
  return +array[0];
}
