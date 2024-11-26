export type ModeType = Record<string, boolean | undefined>;

// convert args to classNames string
export function classNames(
    mainClass?: string,
    additionalClasses: (string | undefined)[] = [],
    mods: ModeType = {},
): string {
    return [
        mainClass ?? '',
        ...additionalClasses.filter(className => Boolean(className)),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
