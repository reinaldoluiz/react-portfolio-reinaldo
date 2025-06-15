
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
  const pathWithoutLeadingSlash = path.startsWith('/') ? path.slice(1) : path;
  
  if (baseUrl.endsWith('/')) {
    return `${baseUrl}${pathWithoutLeadingSlash}`;
  }
  
  return `${baseUrl}/${pathWithoutLeadingSlash}`;
}
