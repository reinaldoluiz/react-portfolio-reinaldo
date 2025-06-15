
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
  // Ensure we don't have double slashes between base and path
  const finalPath = `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
  return finalPath;
}
