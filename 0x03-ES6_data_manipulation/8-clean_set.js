export default function cleanSet(set, startstring) {
  const arr = Array.from(set);
  if ((startstring.length < 1) || typeof startstring !== 'string') return '';
  const processed = arr.filter((elem) => (elem.startsWith(startstring) && (typeof elem === 'string')))
    .map((elem) => {
      const len = startstring.length;
      return elem.slice(len);
    });

  return processed.join('-');
}
