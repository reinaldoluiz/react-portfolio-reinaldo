
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
  // Let Vite and the browser handle path resolution based on the <base> tag.
  // All image paths in the project data are absolute (start with "/"),
  // so we can just return them as is.
  return path;
}
