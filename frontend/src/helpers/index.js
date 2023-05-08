export function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export function isObjNotNull(obj) {
  return Object.keys(obj).length > 0;
}
