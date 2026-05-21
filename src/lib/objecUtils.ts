export const sortBy =
  <T>(property: keyof T) =>
  (a: T, b: T) =>
    String(a[property]).localeCompare(String(b[property]));

export const sortByDesc =
  <T>(property: keyof T) =>
  (a: T, b: T) =>
    sortBy(property)(b, a);
