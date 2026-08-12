/**
 * Helper function to resolve static asset paths correctly across different deployment base paths
 * (e.g. GitHub Pages with /Portfolio/ base path or relative './' base path)
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || './';
  
  if (baseUrl === './' || baseUrl === '') {
    return `./${cleanPath}`;
  }
  
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
