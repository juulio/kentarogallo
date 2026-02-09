import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'docs',
    //emptyOutDir: true, // lo mantengo en false para no borrar CNAME file.
  },
})
