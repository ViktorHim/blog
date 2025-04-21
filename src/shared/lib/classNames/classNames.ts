type Mods = Record<string, boolean | undefined>;

export const classNames = (
  mainClass?: string,
  additionalClasses: (string | undefined)[] = [],
  mods: Mods = {}
): string => {
  return [
    mainClass ?? "",
    ...additionalClasses.filter(Boolean),
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(" ")
    .trim();
};
