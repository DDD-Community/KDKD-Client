const manifest = {
  metadata: {
    name: 'React Vite Extension',
    description: 'React Vite Extension',
    version: '0.0.1',
    manifest_version: 3,
    action: {
      default_popup: 'extension.html',
    },
    background: {
      service_worker: 'background.js',
    },
    oauth2: {
      client_id:
        '552256858077-i9be55mn288a1qli8dpd5lso0f2he2cm.apps.googleusercontent.com',
      scopes: [
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    },
    permissions: ['identity', 'tabs'],
  },
};

export default manifest;
