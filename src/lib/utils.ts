
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveImagePath(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;

  const baseUrl = import.meta.env.BASE_URL;
  // If path is absolute (starts with '/'), remove it to avoid // when joining.
  const imagePath = path.startsWith('/') ? path.substring(1) : path;
  
  // Combine baseUrl and imagePath, ensuring only one slash between them.
  return `${baseUrl.replace(/\/$/, '')}/${imagePath}`;
}
