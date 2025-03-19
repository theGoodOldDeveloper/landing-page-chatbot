export const getDictionary = async (lang: string) => {
  const dict = await import(`../locales/${lang}.json`);
  return dict.default;
};
