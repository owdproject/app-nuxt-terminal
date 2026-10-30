import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/nuxt-theme-nova',
  modules: ['@owdproject/nuxt-module-fs', '@owdproject/nuxt-module-pinia-persistence'],
  apps: ['@owdproject/nuxt-app-terminal'],
  systemBar: { enabled: true, startButton: true },
  fs: {
    mounts: {
      '/mnt/test': '/test-small.zip',
    },
  },
  about: {
    title: 'Terminal (playground)',
    subtitle: 'app-terminal · theme-nova',
    href: 'https://github.com/owdproject/nuxt-app-terminal',
    versionText: 'Nuxt Desktop',
    icons: [
      {
        title: 'Open Web Desktop',
        name: 'mdi:hexagon-multiple-outline',
        size: 24,
      },
      {
        title: 'Nuxt.js',
        name: 'simple-icons:nuxt',
        size: 25,
        style: 'margin-top: -1px',
      },
    ],
  },
})
