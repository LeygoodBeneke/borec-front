import { readdir, readFile, writeFile } from 'node:fs/promises'
import { extname, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH нужен при сборке под подпуть (GitHub Pages: /borec-front/);
// без него сайт собирается с корня, как для VPS/nginx.
const basePath = process.env.BASE_PATH || '/'

// Vite не перезаписывает абсолютные пути к public ("/assets/...") внутри
// строк кода и CSS при нестандартном base, поэтому переписываем сами
// в уже собранных файлах.
function rewritePublicPaths(): Plugin {
  let distDir = ''
  return {
    name: 'rewrite-public-paths',
    apply: 'build',
    configResolved(config) {
      distDir = resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      if (basePath === '/') return
      const files: string[] = []
      const walk = async (dir: string): Promise<void> => {
        for (const entry of await readdir(dir, { withFileTypes: true })) {
          const path = resolve(dir, entry.name)
          if (entry.isDirectory()) {
            await walk(path)
          } else if (['.js', '.css', '.html'].includes(extname(entry.name))) {
            files.push(path)
          }
        }
      }
      await walk(distDir)
      await Promise.all(
        files.map(async (file) => {
          const content = await readFile(file, 'utf8')
          const rewritten = content
            .replace(/(["'`])\/assets/g, `$1${basePath}assets`)
            .replace(/\(\/assets/g, `(${basePath}assets`)
          if (rewritten !== content) {
            await writeFile(file, rewritten)
          }
        }),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), rewritePublicPaths()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
