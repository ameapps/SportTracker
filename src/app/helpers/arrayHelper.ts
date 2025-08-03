/**
 * Raggruppa un array di oggetti per una determinata proprietà.
 * @param array - L'array di oggetti da raggruppare.
 * @param key - La chiave in base alla quale raggruppare.
 * @returns Un oggetto con chiavi corrispondenti ai diversi valori della proprietà, e array di oggetti come valori.
 */
export function groupBy<T, K extends keyof T>(
  array: T[],
  key: K
): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

/**
 * Conta gli elementi in un array raggruppandoli per una proprietà.
 *
 * @param array - L'array di oggetti da analizzare.
 * @param key - La proprietà su cui raggruppare.
 * @returns Un array di oggetti con nome del gruppo e conteggio.
 */
export function countByGroup<T, K extends keyof T>(
  array: T[],
  key: K
): { group: string; count: number }[] {
  const countMap: Record<string, number> = {};

  for (const item of array) {
    const groupKey = String(item[key]);
    countMap[groupKey] = (countMap[groupKey] || 0) + 1;
  }

  return Object.entries(countMap).map(([group, count]) => ({ group, count }));
}

export function distinct<T>(array: T[]): T[] {
  return [...new Set(array)];
}
