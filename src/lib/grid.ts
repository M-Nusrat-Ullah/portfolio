/**
 * In a 2-column grid, returns true for the last item of a run with an odd
 * number of items, so it can span both columns instead of leaving an empty slot.
 * Items for which `isBreak` is true already span the full row and end a run.
 */
export function spansOddRemainder<T>(items: T[], index: number, isBreak: (item: T) => boolean = () => false) {
  if (isBreak(items[index])) return false;
  let start = index;
  while (start > 0 && !isBreak(items[start - 1])) start--;
  let end = index;
  while (end < items.length - 1 && !isBreak(items[end + 1])) end++;
  const runLength = end - start + 1;
  return index === end && runLength % 2 === 1;
}
