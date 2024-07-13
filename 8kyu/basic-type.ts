export var var1Boolean: boolean = true;

export const var2Decimal: number = 13;
export const var3Hex: number = 0xf00d;
export const var4Binary: number = 63;
export const var5Octal: number = 484;

export const var6String: string = "Hello, world!";

export const var7Array = [1, "test", { a: 3 }, 4, 5];
export const var8NumericArray = [1, 2, 3, 4, 5];

export const var9Tuple = ["key", 12345];

export enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}

export const var10Enum = Color.Blue;

export const var11ArrayOfAny: any = [1, "test", { a: 3 }, 4, 5];

export function var12VoidFunction(): void {}

export const var13Null: null = null;
export const var14Undefined: undefined = undefined;

export function var15NeverFunction(): never {
  throw new Error("Never value");
}
