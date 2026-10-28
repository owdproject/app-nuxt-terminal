import type { NuxtModule } from '@nuxt/schema'
import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  addPlugin,
} from '@nuxt/kit'
import { registerTailwindPath } from '@owdproject/kit-tailwind/kit/registerTailwindPath'

const module: NuxtModule<any> = defineNuxtModule({
  meta: {
    name: 'desktop-app-terminal',
    configKey: 'terminal',
  },
  defaults: {
    welcomeMessage: 'Welcome to Open Web Desktop!\nVersion: {desktopVersion} - owdproject.org\n\nTo get started, try using the \'help\' command\n\n',
    prompt: '$ ',
  },
  async setup(options: any, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const coreVersion = nuxt.options.runtimeConfig.public.desktop?.coreVersion ?? '?.?'
    options.welcomeMessage = options.welcomeMessage.replace('{desktopVersion}', coreVersion)

    nuxt.options.runtimeConfig.public.desktop ??= {}
    nuxt.options.runtimeConfig.public.desktop.terminal = options

    addComponentsDir({
      path: resolve('./runtime/components'),
    })

    addPlugin(resolve('./runtime/plugin'))

    registerTailwindPath(
      nuxt,
      resolve('./runtime/components/**/*.{vue,mjs,ts}'),
    )
  },
})

export default module

