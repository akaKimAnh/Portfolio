import defaultAvatar from '../assets/images/user.jpeg';

export { defaultAvatar };

/**
 * Helper function to resolve static asset paths correctly across different deployment base paths
 * (e.g. GitHub Pages with /Portfolio/ base path or relative './' base path)
 */
export function getAssetUrl(path: string): string {
  if (!path) return defaultAvatar;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (typeof window !== 'undefined') {
    let pathname = window.location.pathname;
    // Remove index.html if present in pathname
    if (pathname.endsWith('/index.html')) {
      pathname = pathname.slice(0, -10);
    }
    if (!pathname.endsWith('/')) {
      pathname += '/';
    }
    return `${pathname}${cleanPath}`;
  }
  
  return `./${cleanPath}`;
}

