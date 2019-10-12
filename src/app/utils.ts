export function toKebabCase(str: string) {
  if (!str) { return ''; }
  str = str.toLowerCase();
  return str.replace(' ', '-');
}
