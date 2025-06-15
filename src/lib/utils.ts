
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveImagePath(path?: string): string {
  if (!path) return '';
  // Para assets no diretório 'public', o caminho absoluto (começando com '/')
  // é o suficiente. A ferramenta de build (Vite) irá lidar com o 'base path'
  // automaticamente quando o site for publicado.
  return path;
}
