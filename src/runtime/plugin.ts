import { defineNuxtPlugin } from 'nuxt/app'
import { defineDesktopApp } from 'nuxt-desktop/kit/defineDesktopApp'
import configAppTerminal from './app.config'

export default defineNuxtPlugin({
  name: 'desktop-app-terminal-register',
  async setup() {
    if (import.meta.server) return
    await defineDesktopApp(configAppTerminal)
  },
})
