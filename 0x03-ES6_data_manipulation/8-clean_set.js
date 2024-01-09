export default function cleanSet(set, startstring) {
  const arr = Array.from(set);
  if ((startstring === '') || typeof startstring !== 'string') return '';
  const processed = arr.filter((elem) => ((typeof elem === 'string') && elem.startsWith(startstring)))
    .map((elem) => {
      const len = startstring.length;
      return elem.slice(len);
    });

  return processed.join('-');
}
