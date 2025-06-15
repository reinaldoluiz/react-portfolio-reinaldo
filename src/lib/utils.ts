
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveImagePath(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http')) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // In dev, baseUrl is '/', so we just return the cleaned path.
  // This avoids creating paths like '//image.png'.
  if (baseUrl === '/' || baseUrl === '') {
    return cleanPath;
  }

  // In prod, prepend the base path (e.g., /react-portfolio-reinaldo/).
  // This ensures paths work correctly when deployed to a subfolder.
  return `${baseUrl.replace(/\/$/, '')}${cleanPath}`;
}
