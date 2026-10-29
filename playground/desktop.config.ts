import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nuxt-nova',
  modules: ['@owdproject/module-nuxt-fs', '@owdproject/module-nuxt-pinia-persistence'],
  apps: ['@owdproject/app-nuxt-terminal'],
  systemBar: { enabled: true, startButton: true },
  fs: {
    mounts: {
      '/mnt/test': '/test-small.zip',
    },
  },
  about: {
    title: 'Terminal (playground)',
    subtitle: 'app-terminal · theme-nova',
    href: 'https://github.com/owdproject/app-terminal',
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
