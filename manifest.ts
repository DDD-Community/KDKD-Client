const manifest: chrome.runtime.ManifestV3 = {
  metadata: {
    name: 'React Vite Extension',
    description: 'React Vite Extension',
    version: '0.0.1',
    manifest_version: 3,
    content_scripts: [
      {
        matches: [
          '<all_urls>',
        ],
        js: [
          'content.js',
        ],
      },
    ],
    action: {
      default_popup: 'index.html',
    },
  },
};

export default manifest;
