export const toAbsoluteUrl = (pathname: string) =>
  process.env.NEXT_PUBLIC_BASE_URL + // import.meta.env.BASE_URL
  pathname;
