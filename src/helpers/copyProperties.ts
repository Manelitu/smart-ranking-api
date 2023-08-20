export const copyProperties = (
  source: any,
  target: any,
  excludedProperties: string[] = [],
): void => {
  const sourceProps = Object.getOwnPropertyNames(source);

  for (const prop of sourceProps) {
    if (!excludedProperties.includes(prop)) {
      target[prop] = source[prop];
    }
  }
};
