// Prefixes a public asset path with the deploy base path so raw <img>/<video>
// `src` values (which Next does not rewrite automatically) resolve correctly
// when the site is hosted under a subpath like /hyperbuilt on GitHub Pages.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
