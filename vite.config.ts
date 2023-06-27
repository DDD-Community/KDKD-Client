import type { PluginOption } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import * as fs from 'fs';
import manifest from './manifest';

const outDir = resolve(__dirname, 'dist');

function buildManifest(): PluginOption {
  function make() {
    const manifestPath = resolve(outDir, 'manifest.json');

    fs.writeFileSync(manifestPath, JSON.stringify(Object.values(manifest)[0]));
  }

  return {
    name: 'make-manifest',
    generateBundle() {
      make();
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), buildManifest()],
});
