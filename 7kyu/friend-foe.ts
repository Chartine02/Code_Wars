export function friend(friends: string[]): string[] {
  return friends.filter((el) => el.length === 4);
}
