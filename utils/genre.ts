export const filterGenresByIds = (
  genreMap: Record<number, string>,
  ids?: number[]
): Record<number, string> => {
  if (!ids) return genreMap;

  return ids.reduce((acc, id) => {
    if (genreMap[id]) {
      acc[id] = genreMap[id];
    }
    return acc;
  }, {} as Record<number, string>);
};
