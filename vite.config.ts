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

function buildExtensionHtml(): PluginOption {
  function make() {
    const htmlFilePath = resolve(__dirname, 'extension.html');
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
    const htmlPath = resolve(outDir, 'extension.html');
    fs.writeFileSync(htmlPath, htmlContent);
  }

  return {
    name: 'make-extension-html',
    generateBundle() {
      make();
    },
  };
}

function buildBackgroundJS(): PluginOption {
  function make() {
    const backgroundJSPath = resolve(__dirname, 'background.js');
    const backgroundJSContent = fs.readFileSync(backgroundJSPath, 'utf-8');
    const outputPath = resolve(outDir, 'background.js');
    fs.writeFileSync(outputPath, backgroundJSContent);
  }

  return {
    name: 'make-background-js',
    generateBundle() {
      make();
    },
  };
}

function buildSidePanelHtml(): PluginOption {
  function make() {
    const htmlFilePath = resolve(__dirname, 'sidepanel.html');
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
    const htmlPath = resolve(outDir, 'sidepanel.html');
    fs.writeFileSync(htmlPath, htmlContent);
  }

  return {
    name: 'make-sidepanel-html',
    generateBundle() {
      make();
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    buildManifest(),
    buildExtensionHtml(),
    buildBackgroundJS(),
    buildSidePanelHtml(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        extension: resolve(__dirname, 'extension.html'),
        sidepanel: resolve(__dirname, 'sidepanel.html'),
      },
    },
  },
});
