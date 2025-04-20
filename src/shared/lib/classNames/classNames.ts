type Mods = Record<string, boolean>;

export const classNames = (
  mainClass: string,
  additionalClasses: string[] = [],
  mods: Mods = {}
): string => {
  return [
    mainClass,
    ...additionalClasses,
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
