export default function hasValuesFromArray(sup, sub) {
  const child = new Set(sub);
  const parent = new Set(sup);
  for (const elem of child) {
    if (!parent.has(elem)) {
      return false;
    }
  }
  return true;
}
